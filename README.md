# DataSciencePath

A responsive, lesson-based data science learning platform built with Next.js, TypeScript and Supabase.

## Included

- Eight learning modules covering Python, SQL, statistics, EDA, feature engineering, machine learning, deep learning/GenAI, and project deployment.
- 40 topic lessons with theory, why and when to use each concept, real-world context, code examples, expected results, and practice exercises.
- Responsive lesson reader with module navigation and previous/next lesson links.
- Supabase email/password authentication and existing module-level progress.
- Per-lesson progress saved to Supabase with row-level security.
- Clean source archive without dependencies, build output, local environment credentials, or editor/agent caches.

## Requirements

- Node.js 20.9 or newer (Node.js 22 LTS recommended)
- npm
- A Supabase project for authentication and cloud progress

## Local setup

1. Extract the ZIP.
2. Open the `DataSciencePath` folder in VS Code.
3. Copy `.env.example` to `.env.local`.
4. Fill in the Supabase Project URL and publishable/anon key:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. In Supabase Dashboard → SQL Editor, run these files in order:
   - `supabase/migrations/001_initial_schema.sql`
   - `supabase/migrations/002_lesson_progress.sql`
6. In a terminal at the project root, run:

   ```bash
   npm install
   npm run dev
   ```

7. Open http://localhost:3000 and sign in.
8. Open a roadmap module, select **Explore lessons**, read a topic, then mark it complete. Refresh the lesson page to verify that progress is restored.

## Security notes

- `.env.local` is not included in this archive. Never commit `.env.local` or place a Supabase service-role/secret key in a `NEXT_PUBLIC_` variable.
- The browser client should use only the Supabase publishable/anon key.
- Lesson content is bundled as static curriculum content in `lib/curriculum.ts`. The database stores per-user completion, not lesson prose.
- Run both SQL migrations in the same Supabase project used by the app. If migration 002 is not applied, topic progress will not save.
- Review Row Level Security policies and authentication settings before production deployment.

## Project structure

```text
app/
  learn/[moduleId]/[topicId]/
    page.tsx
    progress.tsx
  layout.tsx
  page.tsx
  styles.css
lib/
  curriculum.ts
  supabase.ts
supabase/migrations/
  001_initial_schema.sql
  002_lesson_progress.sql
```

## Useful commands

```bash
npm run dev       # local development
npm run lint      # TypeScript check
npm run build     # production build
npm start         # run production build
```

# DataSciencePath project expansion bundle

Contents:
- `lib/projects.ts`: six project definitions compatible with the existing project detail page.
- `public/datasets/`: synthetic CSV practice datasets for the five new projects.

## Install
1. Back up your existing `lib/projects.ts`.
2. Replace it with `lib/projects.ts` from this bundle.
3. Copy the CSV files into your project's `public/datasets/` folder.
4. Ensure the homepage project-card IDs match:
   - `sales-forecasting-bi`
   - `customer-churn-prediction`
   - `retail-customer-segmentation`
   - `end-to-end-data-pipeline`
   - `resume-screening-assistant`
   - `time-series-forecasting`
5. Keep your existing `public/datasets/customer_churn.csv`; this bundle does not include or replace it.
6. Run `npx tsc --noEmit`, then test each `/projects/<id>` route.

The newly supplied datasets are synthetic learning data. In particular, the resume screening dataset is not suitable for real hiring decisions.


## Current scope

This is a professional starter learning platform, not a fully administered commercial LMS. Next milestones could include lesson quizzes with server-side answer validation, saved quiz attempts, user profiles, admin content management, richer search, automated tests, and deployment to Vercel.
