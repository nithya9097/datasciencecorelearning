'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { createClient } from '../lib/supabase';
import { curriculum } from '../lib/curriculum';
import { projects as projectBlueprints } from '../lib/projects';
import { interviewQuestions, interviewCategories } from '../lib/interviewQuestions';

/* -------------------------------------------------------------------------- */
/* Types & static data                                                        */
/* -------------------------------------------------------------------------- */

type Module = {
  id: string;
  title: string;
  description: string;
  level: string;
  stage: string;
  lessons: number;
};

type Project = {
  id: string;
  title: string;
  tag: string;
  desc: string;
};

type AuthMode = 'signin' | 'signup';

const modules: Module[] = curriculum.map((m) => ({
  id: m.id,
  title: m.title,
  description: m.description,
  level: m.level,
  stage: m.stage,
  lessons: m.lessons.length,
}));

/**
 * Project cards are built from lib/projects.ts, so a project added there shows
 * up here automatically (and the "project blueprints" count updates by itself).
 *
 * This table only adds the small label shown on each card. Optionally add a
 * `desc` to override the card text; otherwise the project's `summary` is used.
 * A project with no entry here still appears, using its first skill as the label.
 */
const CARD_META: Record<string, { tag: string; desc?: string }> = {
  'sales-forecasting-bi': {
    tag: 'Analytics + ML',
    desc: 'Clean sales data, build a baseline forecast and create a Power BI dashboard.',
  },
  'customer-churn-prediction': {
    tag: 'Classification',
    desc: 'Explore customer behavior, compare models and explain churn drivers.',
  },
  'retail-customer-segmentation': {
    tag: 'Unsupervised ML',
    desc: 'Use RFM features and clustering to discover customer groups.',
  },
  'end-to-end-data-pipeline': {
    tag: 'Data Engineering',
    desc: 'Load raw data, validate it, transform it and schedule repeatable outputs.',
  },
  'resume-screening-assistant': {
    tag: 'NLP / GenAI',
    desc: 'Prototype a document search workflow and evaluate answer quality.',
  },
  'time-series-forecasting': {
    tag: 'Forecasting',
    desc: 'Compare naive and statistical baselines before trying advanced models.',
  },
  'employee-attrition-power-bi': { tag: 'Analytics + BI' },
  'ab-test-experiment-analysis': { tag: 'Experimentation' },
  'house-price-prediction': { tag: 'Regression' },
};

const projects: Project[] = projectBlueprints.map((p) => ({
  id: p.id,
  title: p.title,
  tag: CARD_META[p.id]?.tag ?? p.skills[0] ?? 'Project',
  desc: CARD_META[p.id]?.desc ?? p.summary,
}));

const stages = [
  { name: 'Foundations', detail: 'Python, SQL, Statistics' },
  { name: 'Data Analysis', detail: 'Pandas, EDA, Visualization' },
  { name: 'Machine Learning', detail: 'Features and model evaluation' },
  { name: 'Advanced AI', detail: 'Deep learning fundamentals' },
  { name: 'Portfolio', detail: 'Projects and deployment' },
];

const resources = [
  {
    title: 'Python Tutorial',
    desc: 'Official Python documentation',
    href: 'https://docs.python.org/3/tutorial/',
  },
  {
    title: 'Pandas Getting Started',
    desc: 'Data cleaning and analysis',
    href: 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/',
  },
  {
    title: 'SQLBolt',
    desc: 'Interactive SQL lessons',
    href: 'https://sqlbolt.com/',
  },
  {
    title: 'Scikit-learn',
    desc: 'Machine learning in Python',
    href: 'https://scikit-learn.org/stable/getting_started.html',
  },
  {
    title: 'Kaggle Datasets',
    desc: 'Find datasets to practice',
    href: 'https://www.kaggle.com/datasets',
  },
  {
    title: 'Power BI Learning',
    desc: 'Business intelligence skills',
    href: 'https://powerbi.microsoft.com/learning/',
  },
];

const features = [
  { icon: '◈', color: 'purple', title: 'Structured lessons', sub: 'Learn in the right order' },
  { icon: '⌘', color: 'blue', title: 'Track your progress', sub: 'Pick up where you left off' },
  { icon: '▣', color: 'gold', title: 'Practical projects', sub: 'Build portfolio evidence' },
  { icon: '✓', color: 'green', title: 'Career preparation', sub: 'Practice interview concepts' },
];

const floatTags = [
  { className: 'tagPython', icon: '🐍', label: 'Python' },
  { className: 'tagSql', icon: '▤', label: 'SQL' },
  { className: 'tagMl', icon: '✳', label: 'Machine Learning' },
  { className: 'tagViz', icon: '▥', label: 'Data Visualization' },
];

const NAV_TABS = ['Roadmap', 'Projects', 'Resources'];
const MODULE_ICONS = ['⌘', '▤', '∑', '◉'];
const PROJECT_ICONS = ['↗', '◎', '◌', '⌁', '✳', '⌁'];
// The card gradients (pv0 - pv5) are defined in your CSS. New cards reuse them
// in a cycle, so no new CSS is needed for projects 7, 8, 9 and beyond.
const PROJECT_GRADIENTS = 6;

const CATEGORY_BLURBS: Record<string, string> = {
  Python: 'Pandas, data types, cleaning',
  SQL: 'Joins, aggregation, window functions',
  Statistics: 'Hypothesis tests, CLT, A/B testing',
  'Machine Learning': 'Bias-variance, metrics, ensembles',
  'Feature Engineering': 'Leakage, encoding, preprocessing',
  'Deep Learning & GenAI': 'Neural nets, overfitting, RAG',
  'Excel & Power BI': 'Lookups, DAX, dashboards',
};

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Home() {
  // Auth
  const [user, setUser] = useState<any>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // UI
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [tab, setTab] = useState('Roadmap');

  // Progress
  const [completed, setCompleted] = useState<string[]>([]);

  const supabase = useMemo(() => {
    try {
      return createClient();
    } catch (error) {
      console.error('Supabase client initialization failed:', error);
      return null;
    }
  }, []);

  /* ------------------------------ Effects --------------------------------- */

  // Load the current user and keep it in sync with auth changes
  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  // Load saved progress once we have a user
  useEffect(() => {
    if (!supabase || !user) return;

    supabase
      .from('user_progress')
      .select('module_id')
      .eq('user_id', user.id)
      .eq('completed', true)
      .then(({ data }) => {
        if (data) setCompleted(data.map((r: any) => r.module_id));
      });
  }, [supabase, user]);

  /* ----------------------------- Handlers --------------------------------- */

  async function authenticate(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');

    if (!supabase) {
      setMessage('Connect Supabase first: configure .env.local and run the SQL migration.');
      return;
    }

    const result =
      authMode === 'signup'
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password });

    if (result.error) {
      setMessage(result.error.message);
    } else if (authMode === 'signup') {
      setMessage('Account created. Check your email if confirmation is enabled, then sign in.');
    } else {
      setUser(result.data.user);
      setAuthOpen(false);
    }
  }

  async function logout() {
    await supabase?.auth.signOut();
    setUser(null);
    setCompleted([]);
  }

  async function toggleModule(id: string) {
    if (!user) {
      setAuthOpen(true);
      setMessage('Create an account or sign in to save your learning progress.');
      return;
    }

    const wasDone = completed.includes(id);
    const next = wasDone ? completed.filter((x) => x !== id) : [...completed, id];

    // Optimistic update
    setCompleted(next);
    if (!supabase) return;

    const { error } = await supabase.from('user_progress').upsert(
      {
        user_id: user.id,
        module_id: id,
        completed: !wasDone,
        completed_at: wasDone ? null : new Date().toISOString(),
      },
      { onConflict: 'user_id,module_id' }
    );

    if (error) {
      setMessage('Could not save progress. Check the database migration and try again.');
      setCompleted(completed); // roll back
    }
  }

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  function handleNavClick(name: string) {
    setTab(name);
    scrollToSection(name.toLowerCase());
  }

  function toggleAuthMode() {
    setAuthMode(authMode === 'signup' ? 'signin' : 'signup');
    setMessage('');
  }

  /* ----------------------------- Derived data ----------------------------- */

  const progressPct =
    modules.length > 0 ? Math.round((completed.length / modules.length) * 100) : 0;

  const visibleModules = modules.filter((m) => {
    const matchesLevel = filter === 'All' || m.level === filter;
    const haystack = `${m.title} ${m.description} ${m.stage}`.toLowerCase();
    return matchesLevel && haystack.includes(search.toLowerCase());
  });

  /* -------------------------------- Render -------------------------------- */

  return (
    <main>
      {/* ------------------------------ Navbar ------------------------------ */}
      <header className="nav">
        <a className="brand" href="#home">
          <span className="brandIcon">▥</span> DataSciencePath
        </a>

        <nav>
          {NAV_TABS.map((t) => (
            <button className="navLink" key={t} onClick={() => handleNavClick(t)}>
              {t}
            </button>
          ))}
          <Link className="navLink" href="/interview">
            Interview Prep
          </Link>
          <Link className="navLink" href="/progress">
            My Progress
          </Link>
        </nav>

        <div className="navRight">
          <input
            aria-label="Search topics"
            placeholder="Search topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {user ? (
            <>
              <span className="userEmail">{user.email}</span>
              <button className="button secondary small" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <button className="button primary small" onClick={() => setAuthOpen(true)}>
              Sign in
            </button>
          )}
        </div>
      </header>

      {/* ------------------------------- Hero ------------------------------- */}
      <section className="hero" id="home">
        <div className="heroCopy">
          <p className="eyebrow">YOUR DATA SCIENCE JOURNEY STARTS HERE</p>
          <h1>
            Learn Data Science.
            <br />
            <span>Build real skills.</span>
          </h1>
          <p className="heroText">
            A practical, step-by-step learning path from Python fundamentals to machine
            learning, portfolio projects and career readiness.
          </p>

          <div className="heroActions">
            <button className="button primary" onClick={() => scrollToSection('roadmap')}>
              Explore the roadmap ↗
            </button>
            <button className="button secondary" onClick={() => setAuthOpen(true)}>
              {user ? 'Account settings' : 'Create free account'}
            </button>
          </div>

          <div className="stats">
            <div>
              <strong>{modules.length}</strong>
              <span>Core modules</span>
            </div>
            <div>
              <strong>{projects.length}</strong>
              <span>Portfolio projects</span>
            </div>
            <div>
              <strong>{progressPct}%</strong>
              <span>Your progress</span>
            </div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="orbit orbit1" />
          <div className="orbit orbit2" />

          <div className="coreCard">
            <div className="miniTop">
              <span>LEARNING OVERVIEW</span>
              <span className="liveDot">● LIVE PATH</span>
            </div>
            <div className="chartBars">
              {Array.from({ length: 8 }).map((_, i) => (
                <i key={i} />
              ))}
            </div>
            <div className="chartCaption">
              <span>Skills grow with practice</span>
              <b>→</b>
            </div>
          </div>

          {floatTags.map((t) => (
            <div className={`floatTag ${t.className}`} key={t.label}>
              {t.icon} <span>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------- Feature row ---------------------------- */}
      <section className="featureRow">
        {features.map((f) => (
          <div key={f.title}>
            <span className={`featureIcon ${f.color}`}>{f.icon}</span>
            <b>{f.title}</b>
            <small>{f.sub}</small>
          </div>
        ))}
      </section>

      {/* ----------------------------- Roadmap ------------------------------ */}
      <section className="section" id="roadmap">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">THE LEARNING PATH</p>
            <h2>
              Build your foundation, <span>step by step.</span>
            </h2>
            <p className="muted">
              Work through the core modules. Sign in to save completed modules to your account.
            </p>
          </div>

          <div className="progressCard">
            <div className="progressLine">
              <span>Overall progress</span>
              <b>{progressPct}%</b>
            </div>
            <div className="progressTrack">
              <i style={{ width: `${progressPct}%` }} />
            </div>
            <small>
              {completed.length} of {modules.length} modules completed
            </small>
          </div>
        </div>

        <div className="stageStrip">
          {stages.map((s, i) => (
            <div className="stage" key={s.name}>
              <span>{i + 1}</span>
              <div>
                <b>{s.name}</b>
                <small>{s.detail}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="filterRow">
          <div>
            <h3>Core learning modules</h3>
            <p className="muted">Choose a module and mark it complete as you learn.</p>
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter by level"
          >
            <option>All</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className="moduleGrid">
          {visibleModules.map((m, i) => {
            const isDone = completed.includes(m.id);
            const firstLessonId = curriculum.find((c) => c.id === m.id)?.lessons[0]?.id ?? '';

            return (
              <article className="moduleCard" key={m.id}>
                <div className="moduleTop">
                  <span className={`moduleIcon icon${i % 4}`}>{MODULE_ICONS[i % 4]}</span>
                  <span className="level">{m.level}</span>
                </div>

                <p className="moduleStage">{m.stage}</p>
                <h3>{m.title}</h3>
                <p className="moduleDesc">{m.description}</p>

                <div className="moduleMeta">
                  <span>{m.lessons} lessons</span>
                  <span>{isDone ? 'Completed ✓' : 'Self-paced'}</span>
                </div>

                <Link
                  className="completeButton lessonLink"
                  href={`/learn/${m.id}/${firstLessonId}`}
                >
                  Explore lessons <span aria-hidden="true">→</span>
                </Link>

                <button
                  className={`completeButton ${isDone ? 'isDone' : ''}`}
                  onClick={() => toggleModule(m.id)}
                >
                  {isDone ? '✓ Completed — undo' : 'Mark module complete'}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* ----------------------------- Projects ----------------------------- */}
      <section className="section projectsSection" id="projects">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">LEARN BY BUILDING</p>
            <h2>Projects that prove your skills.</h2>
            <p className="muted">
              Turn concepts into portfolio-ready work with clear milestones.
            </p>
          </div>
          <span className="pill">{projects.length} project blueprints</span>
        </div>

        <div className="projectGrid">
          {projects.map((p, i) => (
            <article className="projectCard" key={p.id}>
              <div className={`projectVisual pv${i % PROJECT_GRADIENTS}`}>
                <span>{PROJECT_ICONS[i % PROJECT_ICONS.length]}</span>
                <small>{p.tag}</small>
              </div>

              <div className="projectBody">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Link href={`/projects/${p.id}`} className="textButton">
                  Explore project →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------- Interview ---------------------------- */}
      <section className="section" id="interview">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">INTERVIEW PREP</p>
            <h2>
              Most asked <span>interview questions.</span>
            </h2>
            <p className="muted">
              Practice Python, SQL, statistics, machine learning and more, and track what
              you have covered.
            </p>
          </div>
          <span className="pill">{interviewQuestions.length} questions</span>
        </div>

        <div className="resourceGrid">
          {interviewCategories.map((c) => {
            const count = interviewQuestions.filter((q) => q.category === c).length;
            return (
              <Link key={c} href={`/interview?category=${encodeURIComponent(c)}`}>
                <b>{c} →</b>
                <span>
                  {CATEGORY_BLURBS[c] ?? 'Practice questions'} · {count} questions
                </span>
              </Link>
            );
          })}
          <Link href="/progress">
            <b>Progress tracker →</b>
            <span>See lessons and questions completed</span>
          </Link>
        </div>
      </section>

      {/* ----------------------------- Resources ---------------------------- */}
      <section className="section resources" id="resources">
        <p className="eyebrow">KEEP LEARNING</p>
        <h2>Trusted resources for every stage.</h2>

        <div className="resourceGrid">
          {resources.map((r) => (
            <a key={r.href} href={r.href} target="_blank" rel="noreferrer">
              <b>{r.title} ↗</b>
              <span>{r.desc}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ------------------------------ Footer ------------------------------ */}
      <footer>
        <a className="brand" href="#home">
          <span className="brandIcon">▥</span> DataSciencePath
        </a>
        <span>Learn consistently. Build thoughtfully. Share your work.</span>
        <span>Full-stack starter · v1.0</span>
      </footer>

      {/* ------------------------------ Toast ------------------------------- */}
      {message && (
        <div className="toast" role="status">
          <span>{message}</span>
          <button onClick={() => setMessage('')} aria-label="Dismiss message">
            ×
          </button>
        </div>
      )}

      {/* --------------------------- Auth modal ----------------------------- */}
      {authOpen && (
        <div className="modalBackdrop" onClick={() => setAuthOpen(false)}>
          <section className="authModal" onClick={(e) => e.stopPropagation()}>
            <button
              className="closeModal"
              onClick={() => setAuthOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <p className="eyebrow">YOUR LEARNING SPACE</p>
            <h2>{authMode === 'signup' ? 'Create your account' : 'Welcome back'}</h2>
            <p className="muted">Save your progress and continue learning on any device.</p>

            <form onSubmit={authenticate}>
              <label>
                Email address
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  required
                  minLength={6}
                  autoComplete={authMode === 'signup' ? 'new-password' : 'current-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                />
              </label>

              <button className="button primary submitButton" type="submit">
                {authMode === 'signup' ? 'Create account' : 'Sign in'}
              </button>
            </form>

            <p className="switchAuth">
              {authMode === 'signup' ? 'Already have an account?' : 'New to DataSciencePath?'}{' '}
              <button onClick={toggleAuthMode}>
                {authMode === 'signup' ? 'Sign in' : 'Create account'}
              </button>
            </p>

            {message && <p className="authMessage">{message}</p>}

            <small className="privacyNote">
              Authentication is handled by your configured Supabase project.
            </small>
          </section>
        </div>
      )}
    </main>
  );
}