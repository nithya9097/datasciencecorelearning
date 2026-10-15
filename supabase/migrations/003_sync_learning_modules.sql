insert into public.learning_modules
  (id, title, description, level, stage, lesson_count, sort_order) values
('python','Python for Data Science','Build programming foundations and learn to work with tabular data.','Beginner','Foundations',29,1),
('sql','SQL for Analytics','Query relational data to answer business questions efficiently.','Beginner','Foundations',34,2),
('excel','Excel for Data Science','Clean, analyse and visualise data in Excel: tables, formulas, pivots, Power Query, statistics and what-if analysis.','Beginner','Foundations',20,3),
('statistics','Statistics & Probability','Use statistical thinking to summarize data and reason under uncertainty.','Beginner','Foundations',24,4),
('eda','Data Analysis & EDA','Inspect, clean, visualize and explain patterns in data.','Intermediate','Data Analysis',20,5),
('powerbi','Power BI for Data Science','Connect, model and analyse data with Power Query and DAX, then build interactive, secure dashboards.','Intermediate','Data Analysis',23,6),
('features','Feature Engineering','Prepare meaningful, model-ready inputs while avoiding leakage.','Intermediate','Machine Learning',18,7),
('ml','Machine Learning','Train, evaluate and improve models for prediction and discovery.','Intermediate','Machine Learning',26,8),
('timeseries','Time Series Analysis','Work with dates, trends, seasonality and forecasting basics.','Intermediate','Machine Learning',14,9),
('nlp','Natural Language Processing','Turn text into features and build simple text classifiers.','Intermediate','Advanced AI',9,10),
('deep-learning','Deep Learning & Generative AI','Understand neural networks, language models and retrieval-based AI.','Advanced','Advanced AI',17,11),
('deployment','Projects & Deployment','Turn analysis into reproducible, shareable, production-minded deliverables.','Advanced','Portfolio',18,12)
on conflict (id) do update set
  title = excluded.title,
  description = excluded.description,
  level = excluded.level,
  stage = excluded.stage,
  lesson_count = excluded.lesson_count,
  sort_order = excluded.sort_order;