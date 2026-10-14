-- Run this file in Supabase Dashboard > SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.learning_modules (
  id text primary key,
  title text not null,
  description text not null default '',
  level text not null default 'Beginner' check (level in ('Beginner','Intermediate','Advanced')),
  stage text not null default 'Foundations',
  lesson_count integer not null default 0 check (lesson_count >= 0),
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id text not null references public.learning_modules(id) on delete cascade,
  title text not null,
  content_md text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  unique(module_id, sort_order)
);

create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text not null references public.learning_modules(id) on delete cascade,
  completed boolean not null default false,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  unique(user_id, module_id)
);

create table if not exists public.quizzes (
  id uuid primary key default gen_random_uuid(),
  module_id text not null references public.learning_modules(id) on delete cascade,
  title text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.quiz_questions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  question text not null,
  options jsonb not null check (jsonb_typeof(options) = 'array'),
  correct_option integer not null check (correct_option >= 0),
  explanation text not null default '',
  sort_order integer not null default 0
);

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  score integer not null default 0 check (score >= 0),
  total_questions integer not null default 0 check (total_questions >= 0),
  answers jsonb not null default '{}'::jsonb,
  attempted_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null default '',
  difficulty text not null default 'Beginner' check (difficulty in ('Beginner','Intermediate','Advanced')),
  skills text[] not null default '{}',
  resource_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.user_project_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  project_id uuid not null references public.projects(id) on delete cascade,
  status text not null default 'not_started' check (status in ('not_started','in_progress','completed')),
  notes text not null default '',
  updated_at timestamptz not null default now(),
  unique(user_id, project_id)
);

-- Auto-create a profile when a user registers.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1)));
  return new;
end;
$$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

-- Enable row-level security on all application tables.
alter table public.profiles enable row level security;
alter table public.learning_modules enable row level security;
alter table public.lessons enable row level security;
alter table public.user_progress enable row level security;
alter table public.quizzes enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.projects enable row level security;
alter table public.user_project_progress enable row level security;

create policy "Profiles readable by owner" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "Profiles editable by owner" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "Modules readable by everyone" on public.learning_modules for select to anon, authenticated using (true);
create policy "Lessons readable by everyone" on public.lessons for select to anon, authenticated using (true);
create policy "Quizzes readable by everyone" on public.quizzes for select to anon, authenticated using (true);
create policy "Questions readable by everyone" on public.quiz_questions for select to anon, authenticated using (true);
create policy "Projects readable by everyone" on public.projects for select to anon, authenticated using (true);
create policy "Users can read own progress" on public.user_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users can insert own progress" on public.user_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Users can update own progress" on public.user_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Users can read own quiz attempts" on public.quiz_attempts for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users can insert own quiz attempts" on public.quiz_attempts for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Users can read own project progress" on public.user_project_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users can insert own project progress" on public.user_project_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Users can update own project progress" on public.user_project_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- Seed the learning modules shown in the first version of the website.
insert into public.learning_modules (id,title,description,level,stage,lesson_count,sort_order) values
('python','Python for Data Science','Variables, collections, functions, files, NumPy and Pandas.','Beginner','Foundations',12,1),
('sql','SQL for Analytics','Filtering, joins, aggregations, CTEs and window functions.','Beginner','Foundations',10,2),
('statistics','Statistics & Probability','Distributions, sampling, hypothesis testing and confidence intervals.','Beginner','Foundations',9,3),
('eda','Data Analysis & EDA','Clean, explore and visualize datasets to find useful insights.','Intermediate','Data Analysis',11,4),
('features','Feature Engineering','Missing values, outliers, encoding, scaling and feature selection.','Intermediate','Machine Learning',8,5),
('ml','Machine Learning','Regression, classification, clustering and model evaluation.','Intermediate','Machine Learning',14,6),
('deep-learning','Deep Learning','Neural networks, CNNs, sequence models and transformers.','Advanced','Advanced AI',10,7),
('deployment','Projects & Deployment','Build, evaluate and present end-to-end portfolio projects.','Advanced','Portfolio',6,8)
on conflict (id) do nothing;

insert into public.projects (slug,title,description,difficulty,skills) values
('sales-forecasting','Sales Forecasting & BI','Clean sales data, build a baseline forecast and create a Power BI dashboard.','Intermediate',array['Python','SQL','Power BI','Forecasting']),
('customer-churn','Customer Churn Prediction','Explore customer behavior, compare models and explain churn drivers.','Intermediate',array['Pandas','Classification','Model Evaluation']),
('customer-segmentation','Retail Customer Segmentation','Use RFM features and clustering to discover customer groups.','Intermediate',array['SQL','EDA','Clustering']),
('data-pipeline','End-to-End Data Pipeline','Load raw data, validate it, transform it and schedule repeatable outputs.','Advanced',array['Python','SQL','ETL']),
('resume-assistant','Resume Screening Assistant','Prototype a document search workflow and evaluate answer quality.','Advanced',array['NLP','Embeddings','Evaluation']),
('time-series','Time-Series Forecasting','Compare naive and statistical baselines before trying advanced models.','Intermediate',array['Time Series','Statistics','Forecasting'])
on conflict (slug) do nothing;
