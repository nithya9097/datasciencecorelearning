/**
 * Portfolio projects for DataSciencePath.
 * Dataset files are served from public/datasets.
 * Keep each project id aligned with the homepage project-card id.
 */
export type Dataset = {
  id: string;
  name: string;
  file: string;
  fileName: string;
  rows: number;
  description: string;
  columns: { name: string; type: string; meaning: string }[];
};

export type LessonLink = { moduleId: string; topicId: string; label: string };

export type Milestone = {
  id: string;
  title: string;
  goal: string;
  tasks: string[];
  deliverable: string;
  lessons: LessonLink[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  estimatedHours: number;
  businessQuestion: string;
  successMetric: string;
  skills: string[];
  datasets: Dataset[];
  milestones: Milestone[];
};

const churnDataset: Dataset = {
  id: "customer-churn",
  name: "Customer churn (synthetic)",
  file: "/datasets/customer_churn.csv",
  fileName: "customer_churn.csv",
  rows: 1500,
  description: "Synthetic subscription-service data for practice. It does not describe real people.",
  columns: [
    { name: "customer_id", type: "text", meaning: "Unique ID; exclude from model features." },
    { name: "tenure_months", type: "number", meaning: "Months subscribed." },
    { name: "contract_type", type: "category", meaning: "Subscription contract type." },
    { name: "internet_service", type: "category", meaning: "Internet service category." },
    { name: "payment_method", type: "category", meaning: "Payment method." },
    { name: "monthly_charges", type: "number", meaning: "Current monthly bill." },
    { name: "total_charges", type: "number", meaning: "Total billed so far; may contain missing values." },
    { name: "support_tickets", type: "number", meaning: "Support tickets in the last six months." },
    { name: "late_payments", type: "number", meaning: "Late payments in the last six months." },
    { name: "churned", type: "category", meaning: "Target label: Yes or No." }
  ]
};

const salesDataset: Dataset = {
  id: "sales-transactions", name: "Retail sales transactions (synthetic)",
  file: "/datasets/sales_transactions.csv", fileName: "sales_transactions.csv", rows: 500,
  description: "Synthetic transaction-level data for sales analysis and dashboard practice.",
  columns: [
    { name: "order_id", type: "text", meaning: "Unique transaction identifier." },
    { name: "order_date", type: "date", meaning: "Order date." },
    { name: "region", type: "category", meaning: "Sales region." },
    { name: "product", type: "category", meaning: "Product sold." },
    { name: "quantity", type: "number", meaning: "Units sold." },
    { name: "unit_price", type: "number", meaning: "Price per unit before discount." },
    { name: "discount_pct", type: "number", meaning: "Discount percentage." },
    { name: "customer_type", type: "category", meaning: "New, returning or business customer." }
  ]
};

const segmentationDataset: Dataset = {
  id: "retail-customers", name: "Retail customer RFM data (synthetic)",
  file: "/datasets/retail_customers.csv", fileName: "retail_customers.csv", rows: 400,
  description: "Synthetic customer-level data for recency, frequency and monetary analysis.",
  columns: [
    { name: "customer_id", type: "text", meaning: "Customer identifier." },
    { name: "recency_days", type: "number", meaning: "Days since last purchase; lower is more recent." },
    { name: "frequency_orders", type: "number", meaning: "Number of orders." },
    { name: "monetary_total", type: "number", meaning: "Total spend." },
    { name: "tenure_months", type: "number", meaning: "Months since first purchase." },
    { name: "channel", type: "category", meaning: "Primary shopping channel." }
  ]
};

const pipelineDataset: Dataset = {
  id: "pipeline-events", name: "Data pipeline events (synthetic)",
  file: "/datasets/pipeline_events.csv", fileName: "pipeline_events.csv", rows: 300,
  description: "Synthetic ingestion and processing events for pipeline monitoring exercises.",
  columns: [
    { name: "event_id", type: "text", meaning: "Unique pipeline event." },
    { name: "event_timestamp", type: "datetime", meaning: "When the event occurred." },
    { name: "source_system", type: "category", meaning: "Upstream source." },
    { name: "record_count", type: "number", meaning: "Records processed." },
    { name: "status", type: "category", meaning: "success, warning or failed." },
    { name: "duration_seconds", type: "number", meaning: "Processing duration." }
  ]
};

const resumeDataset: Dataset = {
  id: "resume-screening", name: "Candidate skills (synthetic)",
  file: "/datasets/resume_screening.csv", fileName: "resume_screening.csv", rows: 300,
  description: "Fully synthetic candidate-skill scores for learning ranking and classification. It contains no real candidate records and should not be used for actual hiring decisions.",
  columns: [
    { name: "candidate_id", type: "text", meaning: "Synthetic identifier." },
    { name: "role", type: "category", meaning: "Target role." },
    { name: "years_experience", type: "number", meaning: "Experience in years." },
    { name: "python_score", type: "number", meaning: "Synthetic Python skill score from 1 to 10." },
    { name: "sql_score", type: "number", meaning: "Synthetic SQL skill score from 1 to 10." },
    { name: "ml_score", type: "number", meaning: "Synthetic ML skill score from 1 to 10." },
    { name: "project_count", type: "number", meaning: "Number of projects." },
    { name: "shortlisted", type: "category", meaning: "Synthetic target label; not a valid real-world hiring criterion." }
  ]
};

const demandDataset: Dataset = {
  id: "daily-demand", name: "Daily product demand (synthetic)",
  file: "/datasets/daily_demand.csv", fileName: "daily_demand.csv", rows: 365,
  description: "Synthetic daily sales series with weekly patterns and promotion/holiday flags.",
  columns: [
    { name: "date", type: "date", meaning: "Calendar date." },
    { name: "units_sold", type: "number", meaning: "Daily units sold." },
    { name: "promotion", type: "boolean", meaning: "Whether a promotion was active." },
    { name: "holiday", type: "boolean", meaning: "Whether the row is marked as a holiday." }
  ]
};

const attritionDataset: Dataset = {
  id: "employee-attrition", name: "Employee attrition (synthetic)",
  file: "/datasets/employee_attrition.csv", fileName: "employee_attrition.csv", rows: 600,
  description: "Synthetic HR data for attrition analysis and dashboard practice. It does not describe real employees and must not be used for real HR decisions.",
  columns: [
    { name: "employee_id", type: "text", meaning: "Synthetic employee identifier." },
    { name: "department", type: "category", meaning: "Sales, Engineering, HR, Finance or Support." },
    { name: "job_level", type: "number", meaning: "Job level from 1 (entry) to 5 (senior)." },
    { name: "years_at_company", type: "number", meaning: "Years with the company." },
    { name: "monthly_income", type: "number", meaning: "Monthly income in rupees." },
    { name: "overtime", type: "category", meaning: "Whether the employee regularly works overtime: Yes or No." },
    { name: "satisfaction_score", type: "number", meaning: "Survey score from 1 to 5; some values are missing." },
    { name: "last_rating", type: "number", meaning: "Last performance rating from 1 to 5." },
    { name: "distance_from_office_km", type: "number", meaning: "Distance from home to office in kilometres." },
    { name: "training_hours", type: "number", meaning: "Training hours in the last year." },
    { name: "attrited", type: "category", meaning: "Whether the employee left: Yes or No." }
  ]
};

const abTestDataset: Dataset = {
  id: "ab-test-results", name: "Checkout page A/B test (synthetic)",
  file: "/datasets/ab_test_results.csv", fileName: "ab_test_results.csv", rows: 2000,
  description: "Synthetic results of a four-week website experiment with 1,000 users in each group. It is made for practising experiment analysis.",
  columns: [
    { name: "user_id", type: "text", meaning: "Unique user identifier." },
    { name: "test_group", type: "category", meaning: "control (old page) or variant (new page)." },
    { name: "device", type: "category", meaning: "mobile, desktop or tablet." },
    { name: "traffic_source", type: "category", meaning: "organic, paid_search, email or social." },
    { name: "visit_date", type: "date", meaning: "Date of the visit." },
    { name: "pages_viewed", type: "number", meaning: "Pages viewed in the session. This is a behaviour after landing, not a test metric." },
    { name: "converted", type: "number", meaning: "Primary metric: 1 if the user bought, otherwise 0." },
    { name: "revenue", type: "number", meaning: "Revenue in rupees; 0 when the user did not convert." }
  ]
};

const housingDataset: Dataset = {
  id: "house-prices", name: "House prices (synthetic)",
  file: "/datasets/house_prices.csv", fileName: "house_prices.csv", rows: 800,
  description: "Synthetic housing listings for regression practice. Prices are not real market prices.",
  columns: [
    { name: "house_id", type: "text", meaning: "Unique listing ID; exclude from model features." },
    { name: "city", type: "category", meaning: "Hyderabad, Bengaluru, Chennai or Pune." },
    { name: "area_sqft", type: "number", meaning: "Built-up area in square feet." },
    { name: "bedrooms", type: "number", meaning: "Number of bedrooms." },
    { name: "bathrooms", type: "number", meaning: "Number of bathrooms." },
    { name: "age_years", type: "number", meaning: "Age of the building in years; some values are missing." },
    { name: "distance_to_center_km", type: "number", meaning: "Distance to the city centre in kilometres." },
    { name: "parking_spots", type: "number", meaning: "Number of parking spots (0, 1 or 2)." },
    { name: "furnishing", type: "category", meaning: "Unfurnished, Semi-furnished or Furnished." },
    { name: "price_lakhs", type: "number", meaning: "Target: listing price in lakhs of rupees." }
  ]
};

const makeMilestones = (
  prefix: string,
  items: { title: string; goal: string; tasks: string[]; deliverable: string }[]
): Milestone[] => items.map((item, index) => ({
  id: `${prefix}-${index + 1}`,
  title: item.title,
  goal: item.goal,
  tasks: item.tasks,
  deliverable: item.deliverable,
  lessons: []
}));

export const projects: Project[] = [
  {
    id: "sales-forecasting-bi",
    title: "Sales Forecasting & BI",
    summary: "Analyze retail transactions, define business KPIs and build a sales dashboard with a baseline forecast.",
    level: "Intermediate", estimatedHours: 10,
    businessQuestion: "Which products and regions drive revenue, and what sales level should the business plan for next?",
    successMetric: "Reconciled revenue totals, clearly defined KPIs and a forecast evaluated against a naïve baseline.",
    skills: ["Python", "Pandas", "SQL", "Power BI", "Time series"],
    datasets: [salesDataset],
    milestones: makeMilestones("sales", [
      { title: "Understand the business question", goal: "Define the KPIs and analysis scope.", tasks: ["Write three business questions.", "Define revenue and discount rules.", "Record the expected output for each question."], deliverable: "A one-page project brief." },
      { title: "Load and clean transactions", goal: "Create a reliable analysis table.", tasks: ["Load the CSV with pandas.", "Check duplicates, missing values and data types.", "Calculate line revenue using the agreed discount rule.", "Document any exclusions."], deliverable: "A validated clean dataset." },
      { title: "Analyze sales drivers", goal: "Find product, region and time patterns.", tasks: ["Aggregate revenue by product and region.", "Compare monthly trends.", "Create at least three charts.", "Write evidence-based findings."], deliverable: "EDA notebook and findings." },
      { title: "Build dashboard and forecast", goal: "Present KPIs and a baseline forecast.", tasks: ["Create KPI measures.", "Build trend and category visuals.", "Create a naïve forecast baseline.", "Compare forecast errors and document limitations."], deliverable: "Dashboard and forecast evaluation." }
    ])
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    summary: "Predict which subscribers are likely to leave, so a retention team can act early.",
    level: "Intermediate", estimatedHours: 12,
    businessQuestion: "Which customers are most likely to cancel in the next billing period, and what drives it?",
    successMetric: "High recall at an acceptable precision, checked on a held-out test set.",
    skills: ["Pandas", "EDA", "Feature engineering", "Scikit-learn", "Model evaluation", "FastAPI"],
    datasets: [churnDataset],
    milestones: makeMilestones("churn", [
      { title: "Frame the problem", goal: "Decide what the model is for and how you will judge it.", tasks: ["Write the business question.", "Identify who will use predictions.", "Choose a business KPI and model metric.", "Estimate the cost of missed churners versus unnecessary retention offers."], deliverable: "Problem statement and success metric." },
      { title: "Load and audit the data", goal: "Understand data quality before transformation.", tasks: ["Load the CSV with pandas.", "Check shape, data types, duplicates and missing values.", "Convert total_charges to numeric.", "Measure churn rate."], deliverable: "Data-quality report." },
      { title: "Explore churn patterns", goal: "Find patterns that may relate to churn.", tasks: ["Summarize numerical columns.", "Compare churn by contract and payment method.", "Plot tenure and monthly charges by churn.", "Write three findings supported by evidence."], deliverable: "EDA notebook and charts." },
      { title: "Prepare and train a baseline", goal: "Build a leakage-safe classification pipeline.", tasks: ["Split data using stratification.", "Impute missing values using training data only.", "Encode categorical variables.", "Train logistic regression.", "Report precision, recall, F1 and PR-AUC."], deliverable: "Baseline model and evaluation." },
      { title: "Validate and present", goal: "Compare models and explain limitations.", tasks: ["Compare a tree-based model with the baseline.", "Use cross-validation.", "Choose a threshold based on business costs.", "Document limitations and responsible use."], deliverable: "Model comparison and README." }
    ])
  },
  {
    id: "retail-customer-segmentation",
    title: "Retail Customer Segmentation",
    summary: "Use RFM analysis and clustering to discover customer groups for targeted analysis.",
    level: "Intermediate", estimatedHours: 8,
    businessQuestion: "Which customer groups have different purchase patterns and may need different engagement strategies?",
    successMetric: "Interpretable clusters with documented profiles and validation of cluster stability.",
    skills: ["Pandas", "EDA", "RFM analysis", "Scaling", "K-Means", "Visualization"],
    datasets: [segmentationDataset],
    milestones: makeMilestones("segment", [
      { title: "Understand the customers", goal: "Inspect the data and define the segmentation objective.", tasks: ["Load and validate the dataset.", "Check missing values and duplicates.", "Review the distribution of RFM variables."], deliverable: "Data audit." },
      { title: "Create RFM profiles", goal: "Compare customers by recency, frequency and spend.", tasks: ["Summarize RFM measures.", "Scale features when appropriate.", "Visualize relationships and skew."], deliverable: "RFM analysis notebook." },
      { title: "Cluster and interpret", goal: "Create customer groups and explain their characteristics.", tasks: ["Try K-Means with several cluster counts.", "Compare inertia and silhouette score.", "Profile each cluster using original units.", "Give clusters descriptive names based on evidence."], deliverable: "Cluster profiles and charts." },
      { title: "Communicate recommendations", goal: "Turn clusters into testable business hypotheses.", tasks: ["Describe each segment.", "Suggest a measurable engagement experiment.", "Document limitations and avoid unsupported assumptions."], deliverable: "Segment report and recommendations." }
    ])
  },
  {
    id: "end-to-end-data-pipeline",
    title: "End-to-End Data Pipeline",
    summary: "Build a repeatable pipeline that ingests records, validates data and produces reliable outputs.",
    level: "Intermediate", estimatedHours: 10,
    businessQuestion: "How can a team process data consistently and detect failed or delayed pipeline runs?",
    successMetric: "Repeatable execution, validation checks, traceable failures and reconciled output row counts.",
    skills: ["Python", "SQL", "Data validation", "ETL/ELT", "Logging", "Testing"],
    datasets: [pipelineDataset],
    milestones: makeMilestones("pipeline", [
      { title: "Define the pipeline contract", goal: "Specify sources, outputs and data-quality expectations.", tasks: ["Document input columns and types.", "Define required fields and acceptable values.", "Define output schema and failure behavior."], deliverable: "Pipeline specification." },
      { title: "Ingest and transform", goal: "Create repeatable transformations.", tasks: ["Read input data.", "Validate schema and types.", "Standardize timestamps and categories.", "Write transformed outputs to a separate location."], deliverable: "Runnable transformation script." },
      { title: "Add quality checks and logs", goal: "Make pipeline failures observable.", tasks: ["Check nulls, duplicates and row counts.", "Log start, completion and errors.", "Handle invalid rows explicitly.", "Write tests for key transformations."], deliverable: "Tested pipeline with logs." },
      { title: "Document and schedule", goal: "Prepare the pipeline for repeatable use.", tasks: ["Document setup and configuration.", "Make reruns safe where possible.", "Describe scheduling options.", "Record known limitations."], deliverable: "README and runbook." }
    ])
  },
  {
    id: "resume-screening-assistant",
    title: "Resume Screening Assistant",
    summary: "Prototype a document-search workflow and evaluate relevance, transparency and answer quality.",
    level: "Intermediate", estimatedHours: 12,
    businessQuestion: "How can a reviewer retrieve job-related evidence from submitted documents while keeping a human responsible for decisions?",
    successMetric: "Relevant retrieval results, traceable source passages and documented bias/privacy limitations.",
    skills: ["Python", "NLP", "Embeddings", "Information retrieval", "Evaluation", "Responsible AI"],
    datasets: [resumeDataset],
    milestones: makeMilestones("resume", [
      { title: "Define responsible scope", goal: "Limit the tool to assistive retrieval rather than automated hiring decisions.", tasks: ["Define job-related questions.", "Document privacy and consent requirements.", "Identify prohibited sensitive attributes.", "Specify human review."], deliverable: "Responsible-use specification." },
      { title: "Prepare sample data", goal: "Create a safe, structured practice dataset.", tasks: ["Use only synthetic examples.", "Validate columns and missing values.", "Separate identifiers from model inputs.", "Document data limitations."], deliverable: "Clean synthetic dataset." },
      { title: "Build retrieval and ranking", goal: "Retrieve evidence relevant to a query.", tasks: ["Create text representations for sample skills or documents.", "Implement keyword or embedding-based retrieval.", "Return source snippets with results.", "Compare retrieval methods on sample queries."], deliverable: "Retrieval prototype and evaluation table." },
      { title: "Evaluate and document", goal: "Measure quality and explain risks.", tasks: ["Create a small query test set.", "Measure relevance at top-k.", "Review errors and uneven performance.", "Document privacy, bias and human-oversight requirements."], deliverable: "Evaluation report and demo." }
    ])
  },
  {
    id: "time-series-forecasting",
    title: "Time-Series Forecasting",
    summary: "Explore daily demand, establish baseline forecasts and compare errors over time.",
    level: "Intermediate", estimatedHours: 8,
    businessQuestion: "What demand should a team plan for, and how much better is a forecasting model than a simple baseline?",
    successMetric: "Out-of-time MAE/RMSE compared with a naïve or seasonal-naïve baseline.",
    skills: ["Pandas", "Time series", "Feature engineering", "Forecast evaluation", "Visualization"],
    datasets: [demandDataset],
    milestones: makeMilestones("forecast", [
      { title: "Inspect the time series", goal: "Verify dates, frequency and target quality.", tasks: ["Parse date column.", "Sort chronologically.", "Check missing dates and duplicate dates.", "Plot the target over time."], deliverable: "Time-series audit." },
      { title: "Build a baseline", goal: "Create a forecast to beat.", tasks: ["Use a chronological train/test split.", "Implement a naïve forecast.", "Try a seasonal-naïve forecast if appropriate.", "Calculate MAE and RMSE."], deliverable: "Baseline metrics." },
      { title: "Create time features", goal: "Test useful calendar and lag features.", tasks: ["Create weekday and month features.", "Create lagged values using only past observations.", "Avoid random shuffling.", "Compare a simple model against the baseline."], deliverable: "Feature set and comparison." },
      { title: "Evaluate and communicate", goal: "Report realistic forecast performance.", tasks: ["Evaluate on a later time window.", "Plot actual versus forecast.", "Analyze errors by time period.", "Document uncertainty and limitations."], deliverable: "Forecast report and reproducible code." }
    ])
  },
  {
    id: "employee-attrition-power-bi",
    title: "Employee Attrition Analysis & Power BI Dashboard",
    summary: "Find which employee groups leave most often, test the patterns statistically and present them in a Power BI dashboard.",
    level: "Beginner", estimatedHours: 8,
    businessQuestion: "Which employee groups are leaving most often, and which factors should HR focus on to reduce attrition?",
    successMetric: "An attrition rate that reconciles across Excel, Python and Power BI, findings backed by statistical tests, and a dashboard a manager can use without help.",
    skills: ["Excel", "Power BI", "DAX", "Statistics", "EDA", "Data storytelling"],
    datasets: [attritionDataset],
    milestones: makeMilestones("attrition", [
      { title: "Define the questions and KPIs", goal: "Agree what attrition means and which groups to compare.", tasks: ["Write three questions HR would ask.", "Define attrition rate as leavers divided by headcount.", "Choose segments to compare: department, job level and overtime.", "Note that the data is synthetic and that results describe groups, not individuals."], deliverable: "A one-page KPI definition." },
      { title: "Clean and audit in Excel", goal: "Create a trusted table before any analysis.", tasks: ["Convert the data to an Excel Table.", "Count blanks in satisfaction_score and duplicates in employee_id.", "Choose and document a rule for the missing scores.", "Build a pivot table of attrition rate by department."], deliverable: "A clean workbook with a checks sheet." },
      { title: "Find drivers with statistics", goal: "Separate real patterns from chance.", tasks: ["Calculate attrition rate and headcount for each segment.", "Test overtime versus attrition with a chi-square test.", "Compare monthly income of leavers and stayers with a suitable test.", "Report effect sizes, not only p-values."], deliverable: "Findings notebook with evidence." },
      { title: "Build the Power BI model and dashboard", goal: "Turn the analysis into an interactive report.", tasks: ["Load and clean the data in Power Query.", "Write measures for Headcount, Leavers and Attrition Rate using DIVIDE.", "Use CALCULATE to compare overtime and non-overtime groups.", "Add KPI cards, a department chart, slicers and conditional formatting."], deliverable: "A Power BI dashboard file." },
      { title: "Present recommendations", goal: "Turn findings into actions with honest limits.", tasks: ["Write three recommendations, each linked to evidence.", "Check that the attrition rate matches in Excel, Python and Power BI.", "Document limitations: correlation is not causation and the data is synthetic.", "Capture dashboard screenshots for the README."], deliverable: "A one-page summary and dashboard screenshots." }
    ])
  },
  {
    id: "ab-test-experiment-analysis",
    title: "A/B Test Analysis for a Checkout Redesign",
    summary: "Check experiment data, test the difference in conversion and make a launch recommendation with the right level of confidence.",
    level: "Intermediate", estimatedHours: 8,
    businessQuestion: "Did the new checkout page increase conversion, and is the evidence strong enough to launch it?",
    successMetric: "A correct conclusion supported by a p-value, a confidence interval for the lift and a power check, with a clear recommendation for non-technical readers.",
    skills: ["Statistics", "Hypothesis testing", "Python", "SQL", "Experiment design", "Communication"],
    datasets: [abTestDataset],
    milestones: makeMilestones("abtest", [
      { title: "Design the experiment", goal: "Decide the hypothesis and success rules before looking at results.", tasks: ["Write the null and alternative hypotheses.", "Choose conversion as the primary metric and revenue per user as a guardrail.", "Choose a minimum effect worth detecting.", "Estimate the sample size needed for that effect."], deliverable: "An experiment plan." },
      { title: "Validate the data", goal: "Make sure the experiment ran correctly.", tasks: ["Check for duplicate users and missing values.", "Check that the two groups are close to a 50/50 split.", "Compare device and traffic source mix between groups.", "Remember that pages_viewed happens after landing and is not a fair comparison metric."], deliverable: "A data-validation summary." },
      { title: "Test the primary metric", goal: "Measure the difference in conversion.", tasks: ["Calculate conversion rate for each group with SQL or pandas.", "Run a two-proportion test.", "Calculate a confidence interval for the difference.", "Report absolute and relative lift."], deliverable: "Test results with an interval." },
      { title: "Check segments and guardrails", goal: "Look for hidden effects without fooling yourself.", tasks: ["Compare conversion by device and traffic source.", "Compare revenue per user using a method suited to skewed data.", "Apply a correction when testing many segments.", "Check whether a segment mix could reverse the overall result."], deliverable: "Segment and guardrail analysis." },
      { title: "Decide and report", goal: "Give a recommendation that matches the evidence.", tasks: ["State whether the result is conclusive, and whether the test had enough power.", "Recommend launch, stop or run longer, with reasons.", "Write a short summary for non-technical readers.", "Document limitations such as novelty effects and test length."], deliverable: "A decision memo and reproducible notebook." }
    ])
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    summary: "Predict listing prices with regression, compare models and explain which features add the most value.",
    level: "Intermediate", estimatedHours: 10,
    businessQuestion: "What price should a listing be expected to sell for, and which features add the most value?",
    successMetric: "Test-set MAE and RMSE clearly better than a median-price baseline, with residual checks and an interpretable explanation of feature effects.",
    skills: ["Pandas", "EDA", "Feature engineering", "Linear regression", "Regularization", "Regression metrics"],
    datasets: [housingDataset],
    milestones: makeMilestones("housing", [
      { title: "Frame the problem and set a baseline", goal: "Know what a good model must beat.", tasks: ["Write who will use the predictions.", "Choose MAE as the main metric and RMSE as a second metric.", "Calculate the error of always predicting the median price.", "Split the data into train and test sets before exploring."], deliverable: "Problem statement and baseline error." },
      { title: "Audit and explore the data", goal: "Understand price and its relationships.", tasks: ["Check data types, duplicates and missing age_years.", "Plot the distribution of price_lakhs and check skew.", "Compare price by city and furnishing.", "Plot price against area and look for outliers."], deliverable: "EDA notebook and findings." },
      { title: "Build features and a pipeline", goal: "Prepare model-ready inputs without leakage.", tasks: ["Impute missing values using training data only.", "Encode city and furnishing.", "Scale numeric features for linear models.", "Do not create features from price_lakhs, because that would leak the target."], deliverable: "A reusable preprocessing pipeline." },
      { title: "Train and compare models", goal: "Find a model that generalises.", tasks: ["Train linear regression.", "Try Ridge and Lasso regularization.", "Try a random forest.", "Use cross-validation and compare MAE and RMSE with the baseline."], deliverable: "Model comparison table." },
      { title: "Check residuals and communicate", goal: "Know where the model fails and explain it.", tasks: ["Plot residuals against predicted price.", "Compare errors by city.", "Explain the most important features with coefficients or permutation importance.", "Document limitations: the data is synthetic and not real market pricing."], deliverable: "Evaluation report and README." }
    ])
  }
];

export function getProject(projectId: string): Project | undefined {
  return projects.find((project) => project.id === projectId);
}
