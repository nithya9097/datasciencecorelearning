-- Per-topic progress. Safe to run after 001_initial_schema.sql.
create table if not exists public.user_lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text not null references public.learning_modules(id) on delete cascade,
  lesson_id text not null,
  completed boolean not null default false,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  unique(user_id, lesson_id)
);

alter table public.user_lesson_progress enable row level security;

drop policy if exists "Users can read own lesson progress" on public.user_lesson_progress;
create policy "Users can read own lesson progress"
  on public.user_lesson_progress for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can insert own lesson progress" on public.user_lesson_progress;
create policy "Users can insert own lesson progress"
  on public.user_lesson_progress for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update own lesson progress" on public.user_lesson_progress;
create policy "Users can update own lesson progress"
  on public.user_lesson_progress for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
