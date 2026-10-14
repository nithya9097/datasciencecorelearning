/**
 * Data Science curriculum
 * =======================
 * Structure:  curriculum  ->  modules  ->  lessons
 *
 * HOW TO EDIT
 *  - Each module has its own `...Lessons` array below. Add or reorder lessons there.
 *  - Lesson `id`s are used in URLs and progress tracking: never rename an existing id.
 *  - Keep every lesson short and specific. Do not paste the same text into many lessons.
 */

export type Level = "Beginner" | "Intermediate" | "Advanced";

export type Stage =
  | "Foundations"
  | "Data Analysis"
  | "Machine Learning"
  | "Advanced AI"
  | "Portfolio";

export type Lesson = {
  /** Unique, URL-safe id. Never change it once published. */
  id: string;
  /** Lesson name shown in menus and headings. */
  title: string;
  /** What the concept is, in plain language. */
  theory: string;
  /** Why the concept matters. */
  why: string;
  /** When to use it, and what to watch out for. */
  when: string;
  /** A short real-world scenario. */
  realWorld: string;
  /** A runnable example. */
  code: string;
  /** What the example prints or returns. */
  output: string;
  /** A hands-on task for the learner. */
  exercise: string;
};

export type LearningModule = {
  id: string;
  title: string;
  description: string;
  level: Level;
  stage: Stage;
  lessons: Lesson[];
};

// ==========================================================================
// 01. Python for Data Science  (Beginner · Foundations)
// ==========================================================================
const pythonLessons: Lesson[] = [
  {
    id: "variables-data-types",
    title: "Variables and data types",
    theory: "A variable is a named reference to a value. Python commonly uses integers, floats, strings, booleans, lists and dictionaries. Python determines a variable's type at runtime.",
    why: "Clear data types help you choose valid operations and avoid mixing text with numbers accidentally.",
    when: "Use variables whenever you need to store, transform or label a value in a script or analysis.",
    realWorld: "A sales analyst stores today's order count, revenue and store name before calculating average order value.",
    code: `orders = 120
revenue = 18500.50
store = "Hyderabad"
average_order_value = revenue / orders
print(store, average_order_value)`,
    output: "Hyderabad 154.17083333333334",
    exercise: "Create variables for 45 orders and ₹9,000 revenue. Calculate average order value.",
  },
  {
    id: "conditions-loops",
    title: "Conditions and loops",
    theory: "Conditions choose a path based on a Boolean expression. Loops repeat a block for each item or while a condition remains true.",
    why: "They automate repetitive decisions and reduce manual work.",
    when: "Use conditions to classify records and loops to process repeated tasks; for large tables, prefer vectorized Pandas operations when practical.",
    realWorld: "A retailer labels orders above ₹5,000 as high-value orders.",
    code: `amount = 6200
if amount >= 5000:
    print("High-value order")
else:
    print("Regular order")`,
    output: "High-value order",
    exercise: "Loop through [1200, 6400, 3200] and print only amounts of at least 5,000.",
  },
  {
    id: "functions",
    title: "Functions",
    theory: "A function is a reusable block of code that can accept inputs, perform work and return a result.",
    why: "Functions make analysis easier to test, reuse and maintain.",
    when: "Create a function when the same calculation or transformation is needed in multiple places.",
    realWorld: "A reporting pipeline uses the same tax calculation for every invoice.",
    code: `def average_order_value(revenue, orders):
    if orders == 0:
        return 0
    return revenue / orders

print(round(average_order_value(18500, 120), 2))`,
    output: "154.17",
    exercise: "Write a function that returns a 10% discount from a given price.",
  },
  {
    id: "strings-formatting",
    title: "Strings and f-strings",
    theory: "Strings are immutable sequences of characters. Methods such as strip(), lower(), title(), replace() and split() clean text, and f-strings insert values into formatted output.",
    why: "Real datasets contain names, categories, comments and IDs that need cleaning before analysis.",
    when: "Use string methods to standardize labels, extract parts of text and build readable reports or log messages.",
    realWorld: "An analyst standardizes city names typed as ' hyderabad ' and 'HYDERABAD' before grouping sales.",
    code: `name = ' data science '
clean = name.strip().title()
print(clean)
print(clean.replace(' ', '_'))
print(f'{len(clean)} characters')`,
    output: `Data Science
Data_Science
12 characters`,
    exercise: "Clean the text '  Machine LEARNING ' so it prints as 'Machine Learning'.",
  },
  {
    id: "lists-dicts-comprehensions",
    title: "Lists, dictionaries and comprehensions",
    theory: "Lists store ordered items and dictionaries store key-value pairs. A comprehension builds a new list or dictionary from an existing collection in one readable expression, optionally with a filter.",
    why: "Most data-wrangling code transforms or filters collections; comprehensions make these steps short and clear.",
    when: "Use them for simple transformations and filters. If the logic needs many steps, use a normal loop or a function for readability.",
    realWorld: "A pipeline keeps only products that are in stock and applies a fixed price reduction to large orders.",
    code: `prices = [100, 250, 80, 400]
large = [p - 10 for p in prices if p >= 100]
stock = {'apple': 5, 'pear': 0, 'mango': 3}
available = {k: v for k, v in stock.items() if v > 0}
print(large)
print(available)`,
    output: `[90, 240, 390]
{'apple': 5, 'mango': 3}`,
    exercise: "Create a list of squares for the even numbers from 1 to 10 using a comprehension.",
  },
  {
    id: "error-handling",
    title: "Error handling with try and except",
    theory: "Exceptions are errors raised while a program runs. A try/except block lets you handle expected problems, such as invalid text in a numeric column, without stopping the whole program.",
    why: "Real data is messy, and a single bad value should not crash an entire pipeline silently or noisily.",
    when: "Catch specific, expected exceptions (for example ValueError) and log or report them. Avoid broad except blocks that hide real bugs.",
    realWorld: "A loader converts a column of text amounts to numbers and reports every value it cannot convert.",
    code: `values = ['10', 'x', '30']
clean = []
for v in values:
    try:
        clean.append(int(v))
    except ValueError:
        print('Skipping', v)
print(clean)`,
    output: `Skipping x
[10, 30]`,
    exercise: "Write a function that converts a list of strings to floats and returns the invalid values separately.",
  },
  {
    id: "numpy-arrays",
    title: "NumPy arrays",
    theory: "NumPy provides efficient n-dimensional arrays and numerical operations. Array operations often work on many values at once.",
    why: "It is useful for fast numerical calculations and forms the foundation of many scientific Python libraries.",
    when: "Use NumPy for numerical vectors, matrices, simulations and operations on numeric data.",
    realWorld: "An operations team calculates the total units sold across several stores.",
    code: `import numpy as np
units = np.array([12, 18, 15, 20])
print(units.sum())
print(units.mean())`,
    output: `65
16.25`,
    exercise: "Create an array of five daily sales values and calculate its maximum and mean.",
  },
  {
    id: "pandas-dataframes",
    title: "Pandas Series and DataFrames",
    theory: "A Series is a labeled one-dimensional array. A DataFrame is a table of rows and columns, suitable for cleaning and analyzing structured data.",
    why: "Pandas makes filtering, grouping, joining and cleaning real-world datasets practical.",
    when: "Use DataFrames for CSV/Excel data, database extracts and most tabular analysis workflows.",
    realWorld: "A sales analyst groups revenue by product category.",
    code: `import pandas as pd
df = pd.DataFrame({"category": ["Food", "Tech", "Food"], "sales": [120, 300, 80]})
print(df.groupby("category")["sales"].sum())`,
    output: `category
Food    200
Tech    300
Name: sales, dtype: int64`,
    exercise: "Add a quantity column and calculate total quantity by category.",
  },
  {
    id: "reading-files",
    title: "Reading CSV and Excel data",
    theory: "Pandas reads tabular files with functions such as read_csv and read_excel. Useful options include sep, usecols, dtype and parse_dates. Always inspect shape, dtypes and a few rows after loading.",
    why: "Loading data correctly is the first step of every project; wrong types or delimiters cause hidden errors later.",
    when: "Use it whenever data arrives as CSV, Excel, JSON or a database extract. Inspect the loaded data before analysis.",
    realWorld: "An analyst loads a monthly sales export and confirms the row count against the source system.",
    code: `import io
import pandas as pd
csv_text = io.StringIO('id,amount\\n1,100\\n2,250')
df = pd.read_csv(csv_text)
print(df.shape)
print(df['amount'].sum())`,
    output: `(2, 2)
350`,
    exercise: "Load a CSV with a date column using parse_dates and check df.dtypes.",
  },
  {
    id: "pandas-cleaning",
    title: "Pandas: selecting, renaming and cleaning",
    theory: "Pandas lets you select columns, filter rows with Boolean conditions, rename columns, remove duplicates and convert types with astype. Chaining these steps creates a clear cleaning workflow.",
    why: "Clean, correctly typed data is required for trustworthy summaries, charts and models.",
    when: "Use after loading data and before analysis. Check the row count before and after every filter or duplicate removal.",
    realWorld: "A retail analyst removes duplicate order rows and converts a text amount column to integers.",
    code: `import pandas as pd
df = pd.DataFrame({'City': ['Hyderabad', 'Kadapa', 'Hyderabad'], 'Sales': ['200', '150', '200']})
df = df.rename(columns=str.lower).drop_duplicates()
df['sales'] = df['sales'].astype(int)
print(df[df['sales'] >= 200])`,
    output: `        city  sales
0  Hyderabad    200`,
    exercise: "Add a new column that flags rows with sales below 180.",
  },
  {
    id: "pandas-vectorization",
    title: "Vectorized operations and apply",
    theory: "Vectorized Pandas and NumPy operations apply a calculation to a whole column at once. apply() runs a Python function row by row or value by value and is more flexible but usually slower.",
    why: "Vectorization keeps code short and is much faster on large tables.",
    when: "Prefer vectorized arithmetic and built-in methods. Use apply only when the logic cannot be expressed with built-in operations.",
    realWorld: "A finance team adds tax to every invoice amount in a million-row table.",
    code: `import pandas as pd
df = pd.DataFrame({'amount': [100, 200]})
df['tax'] = (df['amount'] * 0.18).round(2)
print(df['tax'].tolist())`,
    output: "[18.0, 36.0]",
    exercise: "Create a column that applies a 5% discount only when amount is at least 150, using numpy.where.",
  },
  {
    id: "datetime-handling",
    title: "Working with dates and times",
    theory: "Dates should be converted to datetime types with pd.to_datetime. The .dt accessor then provides parts such as year, month and day of week, and datetime subtraction gives time differences.",
    why: "Time-based analysis (trends, seasonality, delays) requires correct datetime types, not text.",
    when: "Convert date columns immediately after loading. Be explicit about date formats and time zones when data comes from multiple sources.",
    realWorld: "An operations team measures how many days pass between order and delivery.",
    code: `import pandas as pd
s = pd.to_datetime(pd.Series(['2026-01-15', '2026-02-20']))
print(s.dt.month.tolist())
print((s[1] - s[0]).days)`,
    output: `[1, 2]
36`,
    exercise: "Compute the number of days between two dates you choose and extract the weekday name.",
  },
  {
    id: "pandas-merge-groupby",
    title: "Pandas: merge and groupby",
    theory: "merge() joins two DataFrames on a key, like a SQL join. groupby() splits rows into groups, applies an aggregation and combines the results. Together they answer most reporting questions.",
    why: "Business data is spread across tables, and decisions need summaries by customer, product, region or month.",
    when: "Merge when you need fields from another table (check key uniqueness first). Use groupby for totals, averages and counts by category.",
    realWorld: "A team joins orders to customers and calculates total spend per customer.",
    code: `import pandas as pd
orders = pd.DataFrame({'cust_id': [1, 2, 1], 'amount': [100, 200, 50]})
customers = pd.DataFrame({'cust_id': [1, 2], 'name': ['Asha', 'Ravi']})
m = orders.merge(customers, on='cust_id', how='left')
print(m.groupby('name')['amount'].sum())`,
    output: `name
Asha    150
Ravi    200
Name: amount, dtype: int64`,
    exercise: "Count the number of orders per customer name using groupby and size().",
  },
];

// ==========================================================================
// 02. SQL for Analytics  (Beginner · Foundations)
// ==========================================================================
const sqlLessons: Lesson[] = [
  {
    id: "select-filter",
    title: "SELECT, WHERE and ORDER BY",
    theory: "SELECT chooses columns, WHERE filters rows, and ORDER BY sorts the result. SQL works declaratively: you describe the result you need.",
    why: "These clauses are the foundation of nearly every reporting query.",
    when: "Use them to retrieve only relevant records from a table, especially when tables are too large to inspect manually.",
    realWorld: "A sales team needs completed orders over ₹5,000, newest first.",
    code: `SELECT order_id, customer_id, amount, order_date
FROM orders
WHERE status = 'completed' AND amount > 5000
ORDER BY order_date DESC;`,
    output: "Returns matching completed orders sorted from newest to oldest.",
    exercise: "Filter orders to a date range and sort by amount descending.",
  },
  {
    id: "aggregations-groupby",
    title: "Aggregations and GROUP BY",
    theory: "COUNT, SUM, AVG, MIN and MAX summarize multiple rows. GROUP BY calculates those summaries separately for each group.",
    why: "Aggregations turn transaction-level data into useful KPIs.",
    when: "Use for monthly revenue, average order value, counts by status and category-level reporting.",
    realWorld: "A manager compares revenue across product categories.",
    code: `SELECT category, SUM(amount) AS revenue
FROM orders
GROUP BY category
ORDER BY revenue DESC;`,
    output: "One row per category with its total revenue.",
    exercise: "Add COUNT(*) to show the number of orders in each category.",
  },
  {
    id: "having-distinct",
    title: "HAVING and COUNT(DISTINCT)",
    theory: "WHERE filters rows before grouping, while HAVING filters groups after aggregation. COUNT(DISTINCT column) counts unique values, such as unique customers, rather than rows.",
    why: "Many business questions are about groups (categories with high revenue) or unique entities (customers), not raw rows.",
    when: "Use HAVING when the condition uses an aggregate such as SUM or COUNT. Use DISTINCT when duplicates would inflate a count.",
    realWorld: "A manager lists categories with more than ₹10,000 revenue and counts how many different customers bought from each.",
    code: `SELECT category,
       COUNT(DISTINCT customer_id) AS buyers,
       SUM(amount) AS revenue
FROM orders
GROUP BY category
HAVING SUM(amount) > 10000;`,
    output: "Only categories whose total revenue is above 10,000, with unique buyer counts.",
    exercise: "List customers who placed at least three orders using GROUP BY and HAVING.",
  },
  {
    id: "case-when-null",
    title: "CASE WHEN and NULL handling",
    theory: "CASE WHEN creates conditional columns, similar to if/else logic. NULL means unknown or missing: comparisons with NULL need IS NULL, and COALESCE returns the first non-NULL value.",
    why: "Segmentation and clean reporting rely on conditional logic, and NULL values silently change filters and averages.",
    when: "Use CASE to create bands or flags and COALESCE to supply defaults. Always check how NULLs affect counts and averages.",
    realWorld: "An analyst labels orders as High, Medium or Low value and treats a missing discount as zero.",
    code: `SELECT order_id,
       COALESCE(discount, 0) AS discount,
       CASE
         WHEN amount >= 5000 THEN 'High'
         WHEN amount >= 1000 THEN 'Medium'
         ELSE 'Low'
       END AS order_band
FROM orders;`,
    output: "Each order shows a discount (0 if missing) and a High/Medium/Low band.",
    exercise: "Write a query that counts orders in each order_band.",
  },
  {
    id: "joins",
    title: "SQL joins",
    theory: "A join combines rows from related tables using a matching key. INNER JOIN keeps matches; LEFT JOIN keeps all rows from the left table and any matching right-side rows.",
    why: "Business facts are often spread across normalized tables, such as orders and customers.",
    when: "Join when a report needs fields from more than one table. Check key uniqueness to avoid accidentally multiplying rows.",
    realWorld: "An analyst adds customer names to an order report.",
    code: `SELECT o.order_id, c.customer_name, o.amount
FROM orders AS o
LEFT JOIN customers AS c
  ON o.customer_id = c.customer_id;`,
    output: "Order rows remain even when a customer record is missing.",
    exercise: "Join products to order_items to include product names in a sales report.",
  },
  {
    id: "date-functions",
    title: "Date functions and monthly reporting",
    theory: "SQL dialects provide functions to extract or truncate dates. In PostgreSQL, DATE_TRUNC('month', date) rounds a date down to the first day of its month, and EXTRACT pulls out parts such as year or month.",
    why: "Most business reporting is time-based: daily, weekly or monthly trends.",
    when: "Use date truncation to group transactions into reporting periods. Check your database's syntax, since function names differ between systems.",
    realWorld: "A finance team reports monthly revenue and compares it across months.",
    code: `SELECT DATE_TRUNC('month', order_date) AS month,
       SUM(amount) AS revenue
FROM orders
GROUP BY 1
ORDER BY 1;`,
    output: "One row per month with total revenue, in date order.",
    exercise: "Modify the query to report weekly order counts instead of monthly revenue.",
  },
  {
    id: "subqueries-ctes",
    title: "Subqueries and CTEs",
    theory: "A subquery is a query inside another query. A common table expression (CTE), introduced with WITH, names an intermediate result to make a larger query easier to read.",
    why: "They help break complex analytics into understandable steps.",
    when: "Use CTEs when filtering aggregated results, reusing a logical step or making a long query easier to review.",
    realWorld: "Find customers whose total spend exceeds ₹10,000.",
    code: `WITH customer_spend AS (
  SELECT customer_id, SUM(amount) AS total_spend
  FROM orders
  GROUP BY customer_id
)
SELECT *
FROM customer_spend
WHERE total_spend > 10000;`,
    output: "Returns customers whose aggregated spend exceeds 10,000.",
    exercise: "Extend the CTE to return the top five customers by spend.",
  },
  {
    id: "window-functions",
    title: "Window functions",
    theory: "Window functions calculate across related rows while keeping each row visible. ROW_NUMBER, RANK, LAG and SUM OVER are common examples.",
    why: "They support ranking and time-based comparisons without collapsing records into one row per group.",
    when: "Use for top-N-per-category, running totals, previous-period comparisons and deduplication patterns.",
    realWorld: "A team ranks each customer's orders from newest to oldest.",
    code: `SELECT customer_id, order_id, order_date,
       ROW_NUMBER() OVER (
         PARTITION BY customer_id ORDER BY order_date DESC
       ) AS order_rank
FROM orders;`,
    output: "Each order receives a rank within its customer group.",
    exercise: "Use LAG to compare each month's revenue with the previous month.",
  },
  {
    id: "running-totals",
    title: "Running totals and moving averages",
    theory: "Window frames define which rows a calculation sees. SUM() OVER (ORDER BY month) produces a running total, and AVG() with ROWS BETWEEN 2 PRECEDING AND CURRENT ROW produces a three-period moving average.",
    why: "Running totals and moving averages show trends and smooth short-term noise.",
    when: "Use them for cumulative revenue, progress toward targets and trend monitoring.",
    realWorld: "A manager tracks cumulative monthly revenue and a 3-month moving average.",
    code: `SELECT month, revenue,
       SUM(revenue) OVER (ORDER BY month) AS running_revenue,
       AVG(revenue) OVER (
         ORDER BY month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
       ) AS moving_avg_3m
FROM monthly_revenue;`,
    output: "Each month shows its revenue, cumulative revenue and 3-month moving average.",
    exercise: "Calculate the percentage of the year's total revenue represented by each month.",
  },
  {
    id: "union-set-ops",
    title: "UNION, INTERSECT and EXCEPT",
    theory: "Set operators combine the results of two queries with the same columns. UNION removes duplicates, UNION ALL keeps them, INTERSECT returns common rows and EXCEPT returns rows in the first result but not the second.",
    why: "They let you stack tables (for example monthly exports) or compare two groups of entities.",
    when: "Use UNION ALL to append similar tables, and EXCEPT to find records missing from another list.",
    realWorld: "An analyst finds customers who ordered last month but not this month.",
    code: `SELECT customer_id FROM orders_last_month
EXCEPT
SELECT customer_id FROM orders_this_month;`,
    output: "Customer IDs that appear only in last month's orders.",
    exercise: "Write a query returning customers who ordered in both months.",
  },
  {
    id: "ddl-dml",
    title: "Creating tables and changing data",
    theory: "DDL (CREATE, ALTER, DROP) defines structure and DML (INSERT, UPDATE, DELETE) changes rows. Constraints such as PRIMARY KEY, NOT NULL, UNIQUE and FOREIGN KEY protect data quality.",
    why: "Understanding table design helps analysts trust joins, find duplicates and communicate with engineers.",
    when: "Use constraints when designing tables. Test UPDATE and DELETE with a SELECT using the same WHERE clause first.",
    realWorld: "A team creates a customers table with a unique email column.",
    code: `CREATE TABLE customers (
  customer_id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  city TEXT
);

INSERT INTO customers (customer_id, email, city)
VALUES (1, 'asha@example.com', 'Hyderabad');`,
    output: "The table is created and one row is inserted.",
    exercise: "Add an orders table with a foreign key referencing customers.",
  },
  {
    id: "indexes-explain",
    title: "Indexes and query performance",
    theory: "An index is a data structure that lets the database find rows faster, like a book index. EXPLAIN shows the plan the database will use. Indexes speed reads but add storage and slow writes.",
    why: "Slow queries delay dashboards and pipelines, and analysts often need to diagnose them.",
    when: "Index columns used often in WHERE, JOIN and ORDER BY on large tables. Select only needed columns and filter early.",
    realWorld: "A dashboard query on millions of orders speeds up after indexing customer_id.",
    code: `CREATE INDEX idx_orders_customer_id ON orders (customer_id);

EXPLAIN
SELECT * FROM orders WHERE customer_id = 42;`,
    output: "The plan indicates whether the index is used instead of a full table scan.",
    exercise: "Explain why SELECT * can be slower than selecting only the columns you need.",
  },
  {
    id: "sql-with-python",
    title: "Running SQL from Python",
    theory: "Python's sqlite3 module (or SQLAlchemy for other databases) runs SQL and pandas.read_sql returns results as a DataFrame. This links database queries to analysis, charts and models.",
    why: "Analysts often query a database and continue analysis in Python.",
    when: "Use SQL to filter and aggregate large data in the database, then load the smaller result into pandas.",
    realWorld: "A script pulls monthly revenue from a database and plots it.",
    code: `import sqlite3
import pandas as pd
conn = sqlite3.connect(':memory:')
pd.DataFrame({'category': ['Food', 'Tech', 'Food'], 'amount': [120, 300, 80]}).to_sql('orders', conn, index=False)
print(pd.read_sql('SELECT category, SUM(amount) AS revenue FROM orders GROUP BY category', conn))`,
    output: `  category  revenue
0     Food      200
1     Tech      300`,
    exercise: "Query the same table for the category with the highest revenue.",
  },
];

// ==========================================================================
// 03. Statistics & Probability  (Beginner · Foundations)
// ==========================================================================
const statisticsLessons: Lesson[] = [
  {
    id: "central-tendency",
    title: "Mean, median and mode",
    theory: "Mean is the arithmetic average, median is the middle value after sorting, and mode is the most frequent value. They describe different aspects of a distribution.",
    why: "A good summary helps communicate a dataset without listing every observation.",
    when: "Compare mean and median when data may be skewed or contain extreme values.",
    realWorld: "Income data may have a few very high values, making the median a more representative typical value.",
    code: `import numpy as np
income = [25000, 28000, 30000, 32000, 250000]
print(np.mean(income))
print(np.median(income))`,
    output: `73000.0
30000.0`,
    exercise: "Add another high income and compare how the mean and median change.",
  },
  {
    id: "percentiles-iqr",
    title: "Percentiles, quartiles and IQR",
    theory: "A percentile is the value below which a given percentage of observations fall. Quartiles split data into four parts, and the interquartile range (IQR = Q3 − Q1) measures the spread of the middle 50%.",
    why: "Percentiles describe distributions in a way that is robust to extreme values.",
    when: "Use percentiles for service-level targets (such as the 95th percentile of response time), boxplots and outlier rules.",
    realWorld: "A delivery team reports the 90th percentile delivery time to describe slow cases.",
    code: `import numpy as np
data = np.arange(1, 11)
q1, q3 = np.percentile(data, [25, 75])
print(q1, q3, q3 - q1)`,
    output: "3.25 7.75 4.5",
    exercise: "Calculate the 90th percentile of [5, 7, 8, 9, 10, 12, 15, 40].",
  },
  {
    id: "spread-variance",
    title: "Variance and standard deviation",
    theory: "Variance measures the average squared distance from the mean. Standard deviation is its square root, so it is expressed in the same unit as the data.",
    why: "Averages alone hide how consistent or variable observations are.",
    when: "Use spread measures to compare variability, monitor processes and understand how far observations typically lie from the mean.",
    realWorld: "A delivery manager compares consistency of delivery times between two routes.",
    code: `import numpy as np
a = np.array([29, 30, 31, 30, 30])
b = np.array([20, 25, 30, 35, 40])
print(round(a.std(), 2), round(b.std(), 2))`,
    output: "0.63 7.07",
    exercise: "Calculate the standard deviation of [10, 10, 12, 12, 16].",
  },
  {
    id: "probability",
    title: "Probability basics",
    theory: "Probability quantifies uncertainty from 0 (impossible) to 1 (certain). For equally likely outcomes, it is the number of favorable outcomes divided by the total number of outcomes.",
    why: "It provides a consistent language for uncertainty and risk.",
    when: "Use probability for risk estimation, expected outcomes, A/B tests and classification thresholds.",
    realWorld: "A quality team estimates the chance that a randomly selected item is defective.",
    code: `defective = 8
total = 200
probability = defective / total
print(f"{probability:.1%}")`,
    output: "4.0%",
    exercise: "If 15 out of 300 orders are late, calculate the observed late-order rate.",
  },
  {
    id: "bayes-theorem",
    title: "Conditional probability and Bayes' theorem",
    theory: "Conditional probability P(A|B) is the probability of A given that B occurred. Bayes' theorem updates a prior probability using new evidence: P(A|B) = P(B|A) × P(A) / P(B).",
    why: "It explains why a positive result from an accurate test can still be unlikely to be correct when the event is rare, which matters for fraud, churn and medical-style classifiers.",
    when: "Use it when interpreting classifier alerts, spam filters and any test with false positives.",
    realWorld: "A fraud rule flags 5% of legitimate payments but fraud is only 1% of payments; most flags are therefore false alarms.",
    code: `p_fraud = 0.01
p_flag_given_fraud = 0.95
p_flag_given_ok = 0.05
p_flag = p_flag_given_fraud * p_fraud + p_flag_given_ok * (1 - p_fraud)
posterior = p_flag_given_fraud * p_fraud / p_flag
print(round(posterior, 3))`,
    output: "0.161",
    exercise: "Recompute the posterior if fraud rises to 5% of payments.",
  },
  {
    id: "common-distributions",
    title: "Normal and binomial distributions",
    theory: "The normal distribution is a symmetric bell curve described by its mean and standard deviation. A z-score measures how many standard deviations a value is from the mean. The binomial distribution gives the probability of a number of successes in a fixed number of independent trials.",
    why: "Many methods assume approximate normality, and binomial reasoning applies to conversion, defect and click data.",
    when: "Use z-scores to compare values on different scales and binomial probabilities for yes/no event counts.",
    realWorld: "A teacher compares a score of 70 in a test with mean 50 and standard deviation 10.",
    code: `from scipy.stats import norm, binom
z = (70 - 50) / 10
print(z)
print(round(norm.cdf(2), 4))
print(round(binom.pmf(2, 5, 0.5), 4))`,
    output: `2.0
0.9772
0.3125`,
    exercise: "Find the probability of at least 8 successes in 10 trials with success probability 0.5.",
  },
  {
    id: "sampling-distributions",
    title: "Sampling and sampling distributions",
    theory: "A sample is a subset of a population. A sampling distribution describes how a statistic, such as a sample mean, varies across repeated samples.",
    why: "Sampling lets teams learn about a large population without measuring every member.",
    when: "Use when full data collection is costly or impossible; design samples to reduce selection bias.",
    realWorld: "A survey estimates customer satisfaction using a representative sample of customers.",
    code: `import numpy as np
rng = np.random.default_rng(7)
population = np.arange(1, 1001)
sample = rng.choice(population, size=50, replace=False)
print(round(sample.mean(), 2))`,
    output: "A reproducible sample mean (the exact value depends on the fixed random seed).",
    exercise: "Take several samples of size 30 and compare their means.",
  },
  {
    id: "central-limit-theorem",
    title: "Central Limit Theorem",
    theory: "The Central Limit Theorem states that the distribution of sample means approaches a normal distribution as the sample size grows, even when the original data is not normal, provided the data has finite variance.",
    why: "It justifies confidence intervals and many hypothesis tests based on sample means.",
    when: "Use it to reason about averages. Very small samples or extremely heavy-tailed data may need other methods.",
    realWorld: "Daily revenue is skewed, but the average over many days behaves approximately normally.",
    code: `import numpy as np
rng = np.random.default_rng(1)
means = [rng.exponential(2, size=50).mean() for _ in range(1000)]
print(round(np.mean(means), 1))`,
    output: "2.0",
    exercise: "Repeat with sample size 5 and 200 and compare the spread of the means.",
  },
  {
    id: "confidence-intervals",
    title: "Confidence intervals",
    theory: "A confidence interval gives a range of plausible values for a population parameter based on a sample. A 95% interval means the method captures the true value in about 95% of repeated samples; it is not a 95% probability for one fixed interval.",
    why: "Intervals communicate uncertainty, not just a single estimate.",
    when: "Report intervals with estimates such as average order value or conversion rate. Use the t distribution for small samples.",
    realWorld: "A report states average delivery time with its margin of error.",
    code: `import math
mean, sd, n = 100, 15, 36
se = sd / math.sqrt(n)
low, high = mean - 1.96 * se, mean + 1.96 * se
print(round(low, 2), round(high, 2))`,
    output: "95.1 104.9",
    exercise: "Compute the interval again for n = 100 and describe how the width changes.",
  },
  {
    id: "hypothesis-testing",
    title: "Hypothesis testing and p-values",
    theory: "A hypothesis test evaluates data under a null hypothesis. A p-value measures how unusual results at least as extreme as the observed result would be if the null model were true.",
    why: "It provides a structured way to evaluate evidence while acknowledging uncertainty.",
    when: "Use for experiments and comparisons, alongside effect size, study design and practical significance.",
    realWorld: "A product team tests whether a new page changes conversion rate.",
    code: `from scipy.stats import ttest_ind
control = [10, 12, 9, 11, 10]
variant = [13, 14, 12, 15, 13]
stat, p_value = ttest_ind(control, variant, equal_var=False)
print(round(p_value, 4))`,
    output: "A p-value for the supplied toy samples; interpret it with assumptions and effect size.",
    exercise: "Explain the null hypothesis before running a test on two small samples.",
  },
  {
    id: "ab-testing",
    title: "A/B testing and proportions",
    theory: "An A/B test randomly assigns users to a control or variant and compares an outcome such as conversion. A two-proportion z-test compares the two rates using a pooled standard error.",
    why: "It is the standard way to estimate whether a product change causes a difference.",
    when: "Decide the metric, sample size and duration before the test. Avoid stopping early just because a result looks significant.",
    realWorld: "A team compares conversion of 120/1000 for control with 150/1000 for a new checkout page.",
    code: `import math
x1, n1 = 120, 1000
x2, n2 = 150, 1000
p1, p2 = x1 / n1, x2 / n2
p = (x1 + x2) / (n1 + n2)
se = math.sqrt(p * (1 - p) * (1 / n1 + 1 / n2))
z = (p2 - p1) / se
print(round(z, 2))`,
    output: "1.96",
    exercise: "Explain why checking results every day and stopping at the first significant result inflates false positives.",
  },
];

// ==========================================================================
// 04. Data Analysis & EDA  (Intermediate · Data Analysis)
// ==========================================================================
const edaLessons: Lesson[] = [
  {
    id: "data-quality-audit",
    title: "Data quality checks",
    theory: "Data quality checks look for missing values, duplicate records, inconsistent categories, invalid ranges and unexpected data types before analysis.",
    why: "Incorrect or inconsistent inputs can create misleading KPIs and models.",
    when: "Run checks whenever a new dataset arrives and whenever a pipeline changes.",
    realWorld: "A retail analyst checks whether order IDs are duplicated before calculating order counts.",
    code: `import pandas as pd
df = pd.DataFrame({"order_id": [1, 2, 2], "amount": [100, 200, 200]})
print(df.isna().sum())
print("Duplicate rows:", df.duplicated().sum())`,
    output: `order_id    0
amount      0
Duplicate rows: 1`,
    exercise: "Add a missing value and inspect the output of isna().sum().",
  },
  {
    id: "missing-values",
    title: "Missing values",
    theory: "Missing values are absent or unknown observations. Their cause matters: a blank can mean not collected, not applicable, or intentionally withheld.",
    why: "Many analysis and ML methods cannot use missing values directly, and careless filling can introduce bias.",
    when: "Inspect missingness first. Choose deletion or imputation based on the variable, missingness mechanism and business context.",
    realWorld: "A store fills a few missing numeric ratings with a training-set median before modeling.",
    code: `import pandas as pd
df = pd.DataFrame({"age": [24, None, 31, 29]})
median_age = df["age"].median()
df["age"] = df["age"].fillna(median_age)
print(df["age"].tolist())`,
    output: "[24.0, 29.0, 31.0, 29.0]",
    exercise: "Compare mean and median imputation on a column with an extreme value.",
  },
  {
    id: "text-consistency",
    title: "Cleaning inconsistent categories",
    theory: "The same category is often typed in several ways (extra spaces, different capitalization, spelling variants). Standardize with str.strip(), str.lower() and mapping dictionaries, then confirm with value_counts().",
    why: "Inconsistent labels split one group into many and produce wrong counts and charts.",
    when: "Clean categorical text before grouping, joining or encoding. Keep the original column until you have verified the result.",
    realWorld: "A sales table contains ' Hyd ', 'hyd' and 'HYD', all meaning the same city.",
    code: `import pandas as pd
s = pd.Series([' Hyd ', 'hyd', 'HYD'])
clean = s.str.strip().str.lower()
print(clean.nunique())
print(clean.value_counts().to_dict())`,
    output: `1
{'hyd': 3}`,
    exercise: "Map ['hyd', 'hyderabad'] to one standard label using a dictionary and replace().",
  },
  {
    id: "descriptive-analysis",
    title: "Descriptive analysis",
    theory: "Descriptive analysis summarizes what happened using counts, totals, averages, percentiles and grouped comparisons. It describes the observed data rather than proving causation.",
    why: "It converts raw records into a compact view that stakeholders can use.",
    when: "Use during initial exploration, recurring business reporting and before modeling.",
    realWorld: "An analyst summarizes revenue and average transaction value by store.",
    code: `import pandas as pd
df = pd.DataFrame({"store": ["A", "A", "B"], "sales": [120, 80, 200]})
print(df.groupby("store")["sales"].agg(["count", "sum", "mean"]))`,
    output: "A: count 2, sum 200, mean 100; B: count 1, sum 200, mean 200.",
    exercise: "Add a third store and compare total sales with average sales.",
  },
  {
    id: "univariate-summary",
    title: "Univariate analysis with describe()",
    theory: "Univariate analysis examines one variable at a time. For numeric columns, describe() reports count, mean, standard deviation, minimum, quartiles and maximum; for categorical columns, value_counts() shows frequencies.",
    why: "Understanding each variable's range, center and spread is the first step of EDA and reveals errors early.",
    when: "Run it on every important column before bivariate analysis or modeling.",
    realWorld: "An analyst notices a negative age while checking the minimum of the age column.",
    code: `import pandas as pd
df = pd.DataFrame({'amount': [100, 200, 300, 400]})
print(df['amount'].describe().round(1).to_dict())`,
    output: "{'count': 4.0, 'mean': 250.0, 'std': 129.1, 'min': 100.0, '25%': 175.0, '50%': 250.0, '75%': 325.0, 'max': 400.0}",
    exercise: "Use value_counts(normalize=True) on a categorical column to find the share of each category.",
  },
  {
    id: "groupby-pivot",
    title: "Grouped summaries and pivot tables",
    theory: "pivot_table reshapes data so one variable defines rows, another defines columns and an aggregation fills the cells. It is a compact way to compare groups across two dimensions.",
    why: "Two-way summaries reveal patterns such as which product sells best in which region.",
    when: "Use pivot tables for category-by-category comparisons and as input for heatmaps.",
    realWorld: "A manager compares sales by region and product.",
    code: `import pandas as pd
df = pd.DataFrame({'region': ['N', 'N', 'S', 'S'], 'product': ['A', 'B', 'A', 'B'], 'sales': [10, 20, 30, 40]})
print(df.pivot_table(index='region', columns='product', values='sales', aggfunc='sum'))`,
    output: `product   A   B
region         
N        10  20
S        30  40`,
    exercise: "Create a pivot table showing average sales instead of total sales.",
  },
  {
    id: "outlier-iqr",
    title: "Detecting outliers with the IQR rule",
    theory: "The IQR rule flags values below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR as candidate outliers. It is a screening rule, not proof that a value is wrong.",
    why: "Outliers can distort averages and models, but they can also be the most important events in the data.",
    when: "Use it during EDA, then investigate each flagged value before removing, capping or keeping it.",
    realWorld: "An analyst flags a transaction of 120 among typical values near 12.",
    code: `import numpy as np
values = np.array([10, 11, 12, 12, 13, 120])
q1, q3 = np.percentile(values, [25, 75])
iqr = q3 - q1
mask = (values < q1 - 1.5 * iqr) | (values > q3 + 1.5 * iqr)
print(values[mask].tolist())`,
    output: "[120]",
    exercise: "Apply the rule to a column of your own data and decide for each outlier whether to keep it.",
  },
  {
    id: "visualization",
    title: "Data visualization",
    theory: "Charts encode values using position, length, color or shape. Choose the chart based on the comparison or relationship you want to communicate.",
    why: "A clear visual helps reveal patterns and communicate findings quickly.",
    when: "Use bars for category comparisons, lines for time trends, histograms for distributions and scatter plots for relationships.",
    realWorld: "A sales manager reviews monthly revenue trends to identify seasonal patterns.",
    code: `import matplotlib.pyplot as plt
months = ["Jan", "Feb", "Mar"]
revenue = [12000, 15000, 13500]
plt.plot(months, revenue, marker="o")
plt.title("Monthly revenue")
plt.ylabel("Revenue (₹)")
plt.tight_layout()
plt.show()`,
    output: "A line chart with three monthly revenue points.",
    exercise: "Create a bar chart comparing revenue across three product categories.",
  },
  {
    id: "seaborn-plots",
    title: "Statistical plots with Seaborn",
    theory: "Seaborn builds on Matplotlib for statistical charts: histplot for distributions, boxplot for spread and outliers, scatterplot for relationships and heatmap for correlation matrices.",
    why: "These plots show distribution, spread and relationships faster than tables of numbers.",
    when: "Use histograms and boxplots for single variables, scatter plots for pairs and heatmaps to scan many correlations.",
    realWorld: "An analyst compares delivery-time distributions across cities using boxplots.",
    code: `import seaborn as sns
import matplotlib.pyplot as plt
data = sns.load_dataset('tips')
sns.boxplot(data=data, x='day', y='total_bill')
plt.title('Bill by day')
plt.show()`,
    output: "A boxplot of total bill for each day of the week.",
    exercise: "Create a correlation heatmap for the numeric columns of a dataset and note the strongest pair.",
  },
  {
    id: "correlation",
    title: "Correlation and relationships",
    theory: "Correlation measures the strength and direction of a linear relationship between two numeric variables. It does not establish that one variable causes the other.",
    why: "It helps prioritize relationships for further investigation and detect redundant features.",
    when: "Use as an exploratory tool, not as proof of causality; check confounding variables and non-linear patterns.",
    realWorld: "Advertising spend and sales may move together, but seasonality can affect both.",
    code: `import pandas as pd
df = pd.DataFrame({"ad_spend": [1, 2, 3, 4], "sales": [10, 13, 15, 21]})
print(round(df["ad_spend"].corr(df["sales"]), 2))`,
    output: "A positive correlation close to 1 for these toy values.",
    exercise: "Create a scatter plot and describe why correlation alone does not prove causation.",
  },
  {
    id: "eda-workflow",
    title: "A repeatable EDA workflow",
    theory: "A good EDA follows a sequence: define the question, check shape and types, assess quality, summarize variables, explore relationships, investigate anomalies and record findings and next steps.",
    why: "A structured workflow prevents skipped checks and makes your analysis easy to review.",
    when: "Use it at the start of every analysis project and keep notes of decisions (for example, why rows were removed).",
    realWorld: "An analyst delivers a short findings summary together with the cleaning decisions applied.",
    code: `steps = ['Define the question', 'Check shape and dtypes', 'Audit quality', 'Summarize variables', 'Explore relationships', 'Document findings']
for i, step in enumerate(steps, start=1):
    print(i, step)`,
    output: `1 Define the question
2 Check shape and dtypes
3 Audit quality
4 Summarize variables
5 Explore relationships
6 Document findings`,
    exercise: "Apply this workflow to a public dataset and write three findings that your output supports.",
  },
];

// ==========================================================================
// 05. Feature Engineering  (Intermediate · Machine Learning)
// ==========================================================================
const featuresLessons: Lesson[] = [
  {
    id: "imputation",
    title: "Numerical and categorical imputation",
    theory: "Imputation replaces missing values with an estimated or rule-based value. Numeric columns may use a median or mean; categorical columns may use a mode or an explicit 'Unknown' category.",
    why: "It can preserve useful records that would otherwise be dropped, but the chosen strategy can affect bias and model performance.",
    when: "Fit imputation on training data only, then apply the same fitted transformer to validation and test data.",
    realWorld: "A churn model imputes missing customer age using the training-set median.",
    code: `import pandas as pd
from sklearn.impute import SimpleImputer
imputer = SimpleImputer(strategy="median")
ages = [[22], [None], [30]]
print(imputer.fit_transform(ages).ravel().tolist())`,
    output: "[22.0, 26.0, 30.0]",
    exercise: "Try most_frequent imputation on a categorical column.",
  },
  {
    id: "outlier-treatment",
    title: "Outliers and robust handling",
    theory: "An outlier is an observation unusually far from the rest. It may be an error, a rare valid event or an important signal; it should not be removed automatically.",
    why: "Extreme values can distort averages, scales and some model fits.",
    when: "Investigate source records and domain limits first; consider robust statistics, transformations or capping when justified.",
    realWorld: "A bank investigates a transaction far larger than a customer's usual purchases.",
    code: `values = [10, 11, 12, 12, 13, 120]
ordered = sorted(values)
print("Median:", ordered[len(ordered)//2 - 1:len(ordered)//2 + 1])
print("Max:", max(values))`,
    output: "Median region is around 12; maximum is 120.",
    exercise: "Calculate IQR and identify candidate outliers using the 1.5 × IQR rule.",
  },
  {
    id: "categorical-encoding",
    title: "Encoding categorical features",
    theory: "Encoding converts categories into numerical representations a model can process. One-hot encoding creates indicator columns; ordinal encoding assigns ordered integer values when a real order exists.",
    why: "Most estimators require numerical input, and arbitrary numeric labels can imply a false ordering.",
    when: "Use one-hot encoding for nominal categories and ordinal encoding only when category order is meaningful.",
    realWorld: "A model uses a customer's plan type such as Basic, Plus or Premium.",
    code: `import pandas as pd
from sklearn.preprocessing import OneHotEncoder
enc = OneHotEncoder(sparse_output=False, handle_unknown="ignore")
print(enc.fit_transform([["Basic"], ["Plus"], ["Basic"]]))`,
    output: "Three rows represented by indicator columns; column order follows the fitted encoder.",
    exercise: "Explain why assigning Basic=1, Plus=2, Premium=3 may be misleading for some models.",
  },
  {
    id: "scaling",
    title: "Feature scaling",
    theory: "Scaling puts numeric features on comparable ranges. Standardization centers values around zero with unit variance; min-max scaling maps values to a chosen range.",
    why: "Features with large numeric scales can dominate distance calculations or optimization.",
    when: "Often useful for k-nearest neighbors, k-means, PCA and many gradient-based models; tree models usually need it less.",
    realWorld: "Customer segmentation combines age, income and purchase counts measured on different scales.",
    code: `from sklearn.preprocessing import StandardScaler
X = [[20, 20000], [30, 40000], [40, 60000]]
scaled = StandardScaler().fit_transform(X)
print(scaled.round(2))`,
    output: "Each feature is centered and scaled; exact values reflect the sample values.",
    exercise: "Compare a distance calculation before and after scaling.",
  },
  {
    id: "leakage-safe-scaling",
    title: "Fit on training data, transform on test data",
    theory: "Any learned preprocessing step (scaler, imputer, encoder) must be fitted using only the training data. The fitted object is then used to transform validation and test data. Fitting on the full dataset leaks information about the test set.",
    why: "Leakage makes evaluation scores look better than real-world performance.",
    when: "Apply this rule to every learned preprocessing step. Pipelines enforce it automatically during cross-validation.",
    realWorld: "A model's test score drops sharply after the team stops scaling with the full dataset's mean.",
    code: `from sklearn.preprocessing import StandardScaler
X_train = [[1], [2], [3]]
X_test = [[4]]
scaler = StandardScaler().fit(X_train)
print(scaler.transform(X_test).round(2).tolist())`,
    output: "[[2.45]]",
    exercise: "Explain what would be leaked if the scaler were fitted on train and test data together.",
  },
  {
    id: "transformations-skew",
    title: "Transforming skewed features",
    theory: "Right-skewed features (such as income or transaction value) can be compressed with a log transformation. np.log1p computes log(1 + x) and handles zeros safely.",
    why: "Transformations can make relationships more linear and reduce the influence of very large values.",
    when: "Use for strictly non-negative, right-skewed data. Remember to transform predictions back if the target was transformed.",
    realWorld: "A model predicting house prices uses log of price to reduce the effect of very expensive homes.",
    code: `import numpy as np
values = np.array([0, 9, 99])
print(np.log1p(values).round(2).tolist())`,
    output: "[0.0, 2.3, 4.61]",
    exercise: "Plot a histogram of a skewed column before and after log1p.",
  },
  {
    id: "datetime-features",
    title: "Datetime feature engineering",
    theory: "Date columns become useful model inputs when split into parts such as month, day of week, weekend flag, days since an event or time between two dates.",
    why: "Raw timestamps are hard for most models to use, while calendar features capture seasonality and behavior patterns.",
    when: "Use for demand, churn, traffic and delivery problems. Create features using only information available at prediction time.",
    realWorld: "An e-commerce model adds a weekend flag because order volume differs on Saturdays and Sundays.",
    code: `import pandas as pd
d = pd.to_datetime(pd.Series(['2026-03-14', '2026-03-15']))
print(d.dt.dayofweek.tolist())`,
    output: "[5, 6]",
    exercise: "Create month, is_weekend and days_since_signup features from a signup date column.",
  },
  {
    id: "text-features-bow",
    title: "Text features with CountVectorizer",
    theory: "A bag-of-words representation turns each document into a vector of word counts. CountVectorizer builds the vocabulary and the count matrix; TF-IDF further down-weights very common words.",
    why: "Models need numbers, and word counts are a simple, strong baseline for text classification.",
    when: "Use for reviews, tickets and short documents. Fit the vectorizer on training text only.",
    realWorld: "A support team classifies tickets using word counts from the ticket text.",
    code: `from sklearn.feature_extraction.text import CountVectorizer
docs = ['data science', 'data analysis']
vec = CountVectorizer()
X = vec.fit_transform(docs)
print(vec.get_feature_names_out().tolist())
print(X.toarray().tolist())`,
    output: `['analysis', 'data', 'science']
[[0, 1, 1], [1, 1, 0]]`,
    exercise: "Apply TfidfVectorizer to the same documents and compare the values.",
  },
  {
    id: "polynomial-interactions",
    title: "Interaction and polynomial features",
    theory: "Interaction features multiply variables (for example price × quantity) and polynomial features add powers such as squares. They let linear models capture simple non-linear relationships.",
    why: "A linear model cannot represent interactions unless you provide them as features.",
    when: "Use when domain knowledge suggests combined effects. Watch for overfitting as the number of features grows quickly.",
    realWorld: "A model includes area × location_score to capture that space is worth more in premium locations.",
    code: `from sklearn.preprocessing import PolynomialFeatures
poly = PolynomialFeatures(degree=2, include_bias=False)
print(poly.fit_transform([[2, 3]]).tolist())`,
    output: "[[2.0, 3.0, 4.0, 6.0, 9.0]]",
    exercise: "Write the features produced for the input [[1, 4]] before running the code.",
  },
  {
    id: "pipelines-columntransformer",
    title: "Pipelines and ColumnTransformer",
    theory: "A Pipeline chains preprocessing and a model into one object. ColumnTransformer applies different transformations to different columns, such as imputing numeric columns and one-hot encoding categorical ones.",
    why: "Pipelines keep preprocessing consistent between training and prediction and prevent leakage during cross-validation.",
    when: "Use for any project with mixed column types or when you plan to deploy the model.",
    realWorld: "A churn model handles missing ages and plan types in one object saved for deployment.",
    code: `import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder
df = pd.DataFrame({'age': [22, None, 30], 'plan': ['Basic', 'Plus', 'Basic']})
pre = ColumnTransformer([
    ('num', SimpleImputer(strategy='median'), ['age']),
    ('cat', OneHotEncoder(handle_unknown='ignore'), ['plan'])
])
print(pre.fit_transform(df).shape)`,
    output: "(3, 3)",
    exercise: "Add a LogisticRegression step after the preprocessor using make_pipeline.",
  },
  {
    id: "imbalanced-classes",
    title: "Handling imbalanced classes",
    theory: "In imbalanced data one class is rare (such as fraud). Options include stratified splits, class weights, resampling and choosing metrics such as precision, recall and PR-AUC instead of accuracy.",
    why: "A model that always predicts the majority class can have high accuracy and no value.",
    when: "Check the class distribution first. Resample only the training data, never the test set.",
    realWorld: "A fraud model with 5% positives uses class_weight='balanced' and is evaluated on recall and precision.",
    code: `from collections import Counter
y = [0] * 95 + [1] * 5
print(Counter(y))
print(5 / len(y))`,
    output: `Counter({0: 95, 1: 5})
0.05`,
    exercise: "Explain why 95% accuracy is meaningless for this dataset.",
  },
  {
    id: "feature-selection",
    title: "Feature selection and leakage",
    theory: "Feature selection retains useful predictors and removes irrelevant or redundant inputs. Data leakage occurs when training uses information that would not be available at prediction time.",
    why: "Useful features can improve clarity and reduce overfitting, while leakage creates unrealistically high evaluation scores.",
    when: "Choose features using training data and domain knowledge; keep post-outcome fields out of prediction inputs.",
    realWorld: "A churn model must not use a cancellation date to predict whether a customer will cancel.",
    code: `from sklearn.feature_selection import SelectKBest, f_classif
X = [[1, 10], [2, 12], [3, 11], [8, 20], [9, 19], [10, 21]]
y = [0, 0, 0, 1, 1, 1]
selector = SelectKBest(score_func=f_classif, k=1)
print(selector.fit(X, y).get_support())`,
    output: "A Boolean mask showing which feature was selected from the toy dataset.",
    exercise: "Identify one possible leakage feature for predicting loan default before default occurs.",
  },
];

// ==========================================================================
// 06. Machine Learning  (Intermediate · Machine Learning)
// ==========================================================================
const mlLessons: Lesson[] = [
  {
    id: "ml-workflow",
    title: "The machine-learning workflow",
    theory: "A typical workflow defines the target, splits data, preprocesses features, trains a baseline, evaluates on held-out data and iterates based on error analysis.",
    why: "A repeatable workflow makes results more trustworthy and easier to maintain.",
    when: "Use for any predictive task, before choosing a complex algorithm.",
    realWorld: "A retailer forecasts whether an order may be returned using historical order features.",
    code: `from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y)
print(X_train.shape, X_test.shape)`,
    output: "(120, 4) (30, 4)",
    exercise: "Explain why the test set should not be used to choose model settings repeatedly.",
  },
  {
    id: "linear-regression",
    title: "Linear regression",
    theory: "Linear regression models a numeric target as a weighted combination of input features. The fitted coefficients describe the model's linear relationship under its assumptions.",
    why: "It provides an interpretable baseline for predicting continuous values.",
    when: "Use for numeric targets such as demand, price or delivery duration when a linear baseline is appropriate.",
    realWorld: "A business estimates sales from advertising spend for an initial forecast.",
    code: `from sklearn.linear_model import LinearRegression
X = [[1], [2], [3], [4]]
y = [2, 4, 6, 8]
model = LinearRegression().fit(X, y)
print(model.predict([[5]])[0])`,
    output: "10.0",
    exercise: "Fit a regression model to a small dataset and compare prediction with actual values.",
  },
  {
    id: "regression-metrics",
    title: "Regression metrics: MAE, RMSE and R²",
    theory: "MAE is the average absolute error, RMSE is the square root of the average squared error (it penalizes large errors more) and R² is the share of variance explained relative to predicting the mean.",
    why: "A single metric hides different error patterns, and each metric answers a different business question.",
    when: "Use MAE when all errors matter equally, RMSE when large errors are costly and R² to compare against a mean baseline.",
    realWorld: "A demand forecast is judged by average units missed per day.",
    code: `import numpy as np
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
y_true = [3, 5, 7]
y_pred = [2, 5, 9]
print(mean_absolute_error(y_true, y_pred))
print(round(float(np.sqrt(mean_squared_error(y_true, y_pred))), 2))
print(round(r2_score(y_true, y_pred), 3))`,
    output: `1.0
1.29
0.375`,
    exercise: "Create predictions with one very large error and see which metric changes most.",
  },
  {
    id: "classification",
    title: "Classification",
    theory: "Classification predicts a discrete label, such as fraud/not fraud or churn/not churn. Models may also return class probabilities.",
    why: "It supports triage and decision workflows where the outcome belongs to a set of classes.",
    when: "Use when the target is categorical; choose thresholds based on error costs and operational constraints.",
    realWorld: "A support team prioritizes tickets likely to breach a service-level agreement.",
    code: `from sklearn.tree import DecisionTreeClassifier
X = [[1], [2], [8], [9]]
y = [0, 0, 1, 1]
model = DecisionTreeClassifier(max_depth=2, random_state=42).fit(X, y)
print(model.predict([[2], [8]]).tolist())`,
    output: "[0, 1]",
    exercise: "Explain why accuracy alone may be misleading when positive cases are rare.",
  },
  {
    id: "logistic-regression",
    title: "Logistic regression",
    theory: "Logistic regression models the probability of a binary outcome using a linear combination of features passed through a sigmoid function. The predicted probability is converted to a class using a threshold.",
    why: "It is a fast, interpretable baseline for classification and is widely used in industry.",
    when: "Use it as the first classification model. Scale features and tune the decision threshold according to error costs.",
    realWorld: "A bank estimates the probability that a customer will miss a payment.",
    code: `from sklearn.linear_model import LogisticRegression
X = [[1], [2], [3], [4], [5], [6]]
y = [0, 0, 0, 1, 1, 1]
model = LogisticRegression().fit(X, y)
print(model.predict([[1.5], [5.5]]).tolist())`,
    output: "[0, 1]",
    exercise: "Print predict_proba for a new value and explain how changing the threshold alters the prediction.",
  },
  {
    id: "model-evaluation",
    title: "Confusion matrix, precision and recall",
    theory: "A confusion matrix counts true positives, true negatives, false positives and false negatives. Precision measures how many predicted positives are correct; recall measures how many actual positives are found.",
    why: "Different errors have different costs, so one metric rarely tells the full story.",
    when: "Use precision when false alarms are costly and recall when missing a positive case is costly; inspect both with class balance.",
    realWorld: "A fraud system balances catching fraud with avoiding too many legitimate-payment blocks.",
    code: `from sklearn.metrics import confusion_matrix, precision_score, recall_score
y_true = [1, 1, 0, 0, 1]
y_pred = [1, 0, 0, 0, 1]
print(confusion_matrix(y_true, y_pred).tolist())
print(round(precision_score(y_true, y_pred), 2))
print(round(recall_score(y_true, y_pred), 2))`,
    output: `[[2, 0], [1, 2]]
1.0
0.67`,
    exercise: "Construct a case where recall is high but precision is low.",
  },
  {
    id: "knn",
    title: "k-nearest neighbors",
    theory: "k-nearest neighbors predicts using the labels of the k closest training points. It stores the data rather than learning coefficients, so distance and feature scaling are essential.",
    why: "It is simple, intuitive and a good baseline for small datasets.",
    when: "Use on small to medium data with scaled features. It becomes slow on very large datasets.",
    realWorld: "A recommender labels a new customer using the most similar existing customers.",
    code: `from sklearn.neighbors import KNeighborsClassifier
X = [[1], [2], [8], [9]]
y = [0, 0, 1, 1]
model = KNeighborsClassifier(n_neighbors=3).fit(X, y)
print(model.predict([[3]]).tolist())`,
    output: "[0]",
    exercise: "Try k = 1 and k = 4 and explain how k affects the decision.",
  },
  {
    id: "trees-random-forest",
    title: "Decision trees and random forests",
    theory: "A decision tree splits data using feature thresholds. A random forest averages many trees trained on random samples and feature subsets, which reduces overfitting compared with a single tree.",
    why: "Tree models handle non-linear relationships and mixed feature types with little preprocessing.",
    when: "Use a forest as a strong tabular baseline. Inspect feature importances, but remember they are not proof of causation.",
    realWorld: "A bank classifies loan applications using hundreds of trees.",
    code: `from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
X, y = load_iris(return_X_y=True)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
rf = RandomForestClassifier(n_estimators=50, random_state=42).fit(X_tr, y_tr)
print(round(rf.score(X_te, y_te), 2))`,
    output: "A test accuracy close to 0.9–1.0; the exact value can vary by library version.",
    exercise: "Print rf.feature_importances_ and identify the most important feature.",
  },
  {
    id: "gradient-boosting",
    title: "Gradient boosting",
    theory: "Gradient boosting builds trees sequentially, with each new tree correcting the errors of the previous ones. Libraries such as XGBoost, LightGBM and scikit-learn's GradientBoosting are frequent winners on tabular data.",
    why: "Boosted trees often give the best accuracy on structured data.",
    when: "Use after a baseline. Tune learning rate, number of trees and depth with cross-validation to avoid overfitting.",
    realWorld: "A churn team uses gradient boosting after logistic regression for a better recall.",
    code: `from sklearn.datasets import load_breast_cancer
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import cross_val_score
X, y = load_breast_cancer(return_X_y=True)
scores = cross_val_score(GradientBoostingClassifier(random_state=42), X, y, cv=5)
print(round(scores.mean(), 2))`,
    output: "About 0.96; the exact value may vary by library version.",
    exercise: "Compare gradient boosting with logistic regression using the same cross-validation folds.",
  },
  {
    id: "overfitting-validation",
    title: "Overfitting and cross-validation",
    theory: "Overfitting happens when a model learns patterns specific to training data that do not generalize. Cross-validation evaluates across multiple training/validation splits to estimate stability.",
    why: "It helps avoid choosing a model that looks excellent only on one split.",
    when: "Use validation and cross-validation during model selection; reserve the test set for final evaluation.",
    realWorld: "A highly complex churn model performs well on training customers but poorly on new customers.",
    code: `from sklearn.model_selection import cross_val_score
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
scores = cross_val_score(DecisionTreeClassifier(random_state=42), X, y, cv=5)
print(scores.round(2))`,
    output: "Five validation scores, one per fold.",
    exercise: "Compare a shallow tree with an unrestricted tree and discuss generalization.",
  },
  {
    id: "hyperparameter-tuning",
    title: "Hyperparameter tuning",
    theory: "Hyperparameters are settings chosen before training, such as tree depth or the number of neighbors. GridSearchCV tries combinations and scores each with cross-validation; RandomizedSearchCV samples combinations for larger spaces.",
    why: "Good settings can noticeably improve a model, and cross-validation prevents choosing based on luck.",
    when: "Tune after building a pipeline and baseline. Keep the final test set untouched until tuning is complete.",
    realWorld: "A team tunes the number of neighbors for a recommendation model.",
    code: `from sklearn.datasets import load_iris
from sklearn.model_selection import GridSearchCV
from sklearn.neighbors import KNeighborsClassifier
X, y = load_iris(return_X_y=True)
grid = GridSearchCV(KNeighborsClassifier(), {'n_neighbors': [1, 3, 5, 7]}, cv=5)
grid.fit(X, y)
print(grid.best_params_)`,
    output: "A dictionary such as {'n_neighbors': 7}; the best value depends on the data and library version.",
    exercise: "Tune max_depth of a decision tree and plot validation score against depth.",
  },
  {
    id: "kmeans-clustering",
    title: "Clustering with k-means",
    theory: "Clustering is unsupervised learning that groups similar rows without labels. k-means assigns each point to the nearest of k centroids and repeats until the centroids stabilize.",
    why: "Clustering supports customer segmentation and exploratory analysis when no target exists.",
    when: "Scale features first and choose k using inertia (elbow method), silhouette score and business interpretability.",
    realWorld: "A marketing team groups customers by spend and visit frequency.",
    code: `from sklearn.cluster import KMeans
X = [[1, 1], [1, 2], [8, 8], [9, 8]]
labels = KMeans(n_clusters=2, n_init=10, random_state=42).fit(X).labels_
print(labels[0] == labels[1])
print(labels[2] == labels[3])`,
    output: `True
True`,
    exercise: "Compute silhouette_score for k = 2, 3 and 4 and pick a value.",
  },
  {
    id: "pca",
    title: "Dimensionality reduction with PCA",
    theory: "Principal Component Analysis rotates the data into new uncorrelated axes ordered by explained variance. Keeping the first few components reduces dimensionality while retaining most of the variation.",
    why: "It simplifies high-dimensional data, reduces noise and helps visualization.",
    when: "Standardize features first. Components are less interpretable than the original features.",
    realWorld: "An analyst reduces 50 correlated survey questions to a few components.",
    code: `from sklearn.decomposition import PCA
X = [[1, 1], [2, 2], [3, 3]]
pca = PCA(n_components=1).fit(X)
print(pca.explained_variance_ratio_.round(2).tolist())`,
    output: "[1.0]",
    exercise: "Apply PCA to the iris dataset and report how much variance two components explain.",
  },
  {
    id: "save-load-model",
    title: "Saving and loading models",
    theory: "joblib serializes a fitted model or pipeline to a file so it can be loaded later for predictions without retraining. Save the whole pipeline, not only the final estimator.",
    why: "A trained model is only useful if the same preprocessing and model can be reused in an app or batch job.",
    when: "Save after final training and record the library versions and training data version used.",
    realWorld: "A web app loads a saved churn pipeline when it starts.",
    code: `import joblib
from sklearn.tree import DecisionTreeClassifier
model = DecisionTreeClassifier().fit([[1], [9]], [0, 1])
joblib.dump(model, 'model.joblib')
loaded = joblib.load('model.joblib')
print(loaded.predict([[8]]).tolist())`,
    output: "[1]",
    exercise: "Save a pipeline (preprocessor + model) and load it to predict a new row.",
  },
];

// ==========================================================================
// 07. Time Series Analysis  (Intermediate · Machine Learning)
// ==========================================================================
const timeSeriesLessons: Lesson[] = [
  {
    id: "ts-index-resample",
    title: "Datetime index and resampling",
    theory: "A time series is data ordered in time. Setting a datetime index lets you select periods and resample to a different frequency, for example daily to weekly totals.",
    why: "Business metrics are recorded at fine time granularity but reported at coarser levels.",
    when: "Use resample for weekly or monthly reports. Choose the aggregation (sum, mean) that matches the metric.",
    realWorld: "A store aggregates daily sales to weekly totals.",
    code: `import pandas as pd
s = pd.Series([1, 2, 3, 4], index=pd.date_range('2026-01-01', periods=4, freq='D'))
print(s.resample('2D').sum().tolist())`,
    output: "[3, 7]",
    exercise: "Resample a daily series to monthly mean and monthly total and explain the difference.",
  },
  {
    id: "ts-rolling-lag",
    title: "Rolling windows and lag features",
    theory: "A rolling window computes a statistic over the most recent n observations, such as a moving average. A lag feature shifts the series so each row can use earlier values.",
    why: "Moving averages smooth noise and lag features give models a memory of the past.",
    when: "Use only past values when building features, so the model never sees the future.",
    realWorld: "A demand model uses sales from the previous day and the 7-day average.",
    code: `import pandas as pd
s = pd.Series([10, 12, 14, 13, 15])
print(s.rolling(3).mean().tolist())
print(s.shift(1).tolist())`,
    output: `[nan, nan, 12.0, 13.0, 14.0]
[nan, 10.0, 12.0, 14.0, 13.0]`,
    exercise: "Create lag-1 and lag-7 features for a daily sales series.",
  },
  {
    id: "ts-seasonality",
    title: "Trend and seasonality",
    theory: "A trend is long-term direction, and seasonality is a repeating pattern tied to the calendar, such as higher sales every December. Grouping by month or weekday is a simple way to reveal seasonality.",
    why: "Forecasts and anomaly detection must account for regular patterns to avoid mistaking them for changes.",
    when: "Check seasonality before modeling. Use at least two full cycles of data when possible.",
    realWorld: "A retailer notices February is always higher than January.",
    code: `import pandas as pd
idx = pd.to_datetime(['2025-01-01', '2025-02-01', '2026-01-01', '2026-02-01'])
s = pd.Series([10, 20, 12, 22], index=idx)
print(s.groupby(s.index.month).mean().tolist())`,
    output: "[11.0, 21.0]",
    exercise: "Plot monthly averages for a dataset of your choice and describe the seasonal pattern.",
  },
  {
    id: "ts-time-split",
    title: "Time-ordered train and test splits",
    theory: "Random shuffling leaks future information into training. Time series validation keeps the order: train on earlier data and test on later data. TimeSeriesSplit creates expanding-window splits.",
    why: "Evaluation must mimic real forecasting, where the future is unknown.",
    when: "Always split by time for forecasting problems and never shuffle.",
    realWorld: "A demand model trains on past months and is tested on the next one.",
    code: `import numpy as np
from sklearn.model_selection import TimeSeriesSplit
for train, test in TimeSeriesSplit(n_splits=2).split(np.arange(6)):
    print(train.tolist(), test.tolist())`,
    output: `[0, 1] [2, 3]
[0, 1, 2, 3] [4, 5]`,
    exercise: "Explain why a random split would overestimate forecasting accuracy.",
  },
  {
    id: "ts-baselines",
    title: "Forecasting baselines and error",
    theory: "A naive forecast predicts that the next value equals the previous one. Seasonal naive repeats the value from the previous season. Any model should beat these baselines to be worth using.",
    why: "Without a baseline you cannot tell whether a complex model adds value.",
    when: "Compute baseline error first, then compare candidate models using MAE or MAPE on later data.",
    realWorld: "A forecasting team shows that a new model beats the naive forecast by 15% MAE.",
    code: `y = [100, 110, 120, 130]
errors = [abs(y[i] - y[i - 1]) for i in range(1, len(y))]
print(sum(errors) / len(errors))`,
    output: "10.0",
    exercise: "Calculate the seasonal naive error for a weekly pattern using a 7-day lag.",
  },
];

// ==========================================================================
// 08. Natural Language Processing  (Intermediate · Advanced AI)
// ==========================================================================
const nlpLessons: Lesson[] = [
  {
    id: "nlp-text-cleaning",
    title: "Text cleaning and normalization",
    theory: "Text cleaning lowercases text, removes punctuation or noise and standardizes whitespace. Regular expressions (re) find and replace patterns.",
    why: "Consistent text reduces vocabulary size and improves simple models.",
    when: "Clean only what helps the task: removing punctuation may hurt sentiment tasks where symbols matter.",
    realWorld: "A team normalizes product reviews before classification.",
    code: `import re
text = 'Great product!!! Fast delivery.'
clean = re.sub(r'[^a-z\\s]', '', text.lower())
print(clean)`,
    output: "great product fast delivery",
    exercise: "Write a regex that removes digits from a text string.",
  },
  {
    id: "nlp-tokenization",
    title: "Tokenization and stop words",
    theory: "Tokenization splits text into units such as words. Stop words are very common words (the, is, and) that are often removed in classical NLP, though modern models usually keep them.",
    why: "Tokens are the basic units from which features are built.",
    when: "Remove stop words for count-based methods when they add noise; keep them for transformer models and phrases where they matter.",
    realWorld: "A search system extracts meaningful keywords from queries.",
    code: `text = 'the delivery was very fast'
stop = {'the', 'was', 'very'}
tokens = [w for w in text.split() if w not in stop]
print(tokens)`,
    output: "['delivery', 'fast']",
    exercise: "Count the most common tokens in a list of reviews using collections.Counter.",
  },
  {
    id: "nlp-tfidf-classifier",
    title: "Text classification with TF-IDF",
    theory: "TF-IDF weights a word by how often it appears in a document and how rare it is across documents. Combined with logistic regression it forms a strong, fast baseline for classifying text.",
    why: "It gives a working text classifier in a few lines, and the model is easy to inspect.",
    when: "Use it as the baseline before moving to embeddings or transformers. Evaluate on held-out text.",
    realWorld: "A company classifies reviews as positive or negative.",
    code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
docs = ['good fast delivery', 'bad slow delivery', 'great quality', 'poor quality']
labels = [1, 0, 1, 0]
model = make_pipeline(TfidfVectorizer(), LogisticRegression()).fit(docs, labels)
print(model.predict(['good delivery']).tolist())`,
    output: "[1]",
    exercise: "Add more examples, split into train and test and report precision and recall.",
  },
];

// ==========================================================================
// 09. Deep Learning & Generative AI  (Advanced · Advanced AI)
// ==========================================================================
const deepLearningLessons: Lesson[] = [
  {
    id: "neural-networks",
    title: "Neural network fundamentals",
    theory: "A neural network combines weighted inputs, biases and activation functions across layers. Training adjusts weights to reduce a loss function.",
    why: "Neural networks can learn complex nonlinear patterns from data when enough data and suitable training are available.",
    when: "Use for complex image, audio, text or structured prediction problems after establishing a simpler baseline.",
    realWorld: "A vision system learns patterns in product images to identify damaged packaging.",
    code: `import numpy as np
inputs = np.array([0.5, 1.0])
weights = np.array([0.2, 0.8])
bias = 0.1
z = inputs @ weights + bias
output = 1 / (1 + np.exp(-z))
print(round(float(output), 3))`,
    output: "0.75",
    exercise: "Change one weight and observe how the sigmoid output changes.",
  },
  {
    id: "training-backpropagation",
    title: "Loss, gradient descent and backpropagation",
    theory: "A loss function measures prediction error. Gradient descent updates parameters in a direction that reduces loss; backpropagation computes gradients through the network using the chain rule.",
    why: "These ideas explain how neural networks learn from examples.",
    when: "Use when training differentiable models and when diagnosing unstable or stalled training.",
    realWorld: "A model improves its predictions over repeated training batches.",
    code: `prediction = 0.7
actual = 1.0
learning_rate = 0.1
# Simple squared-error gradient for one scalar prediction.
gradient = 2 * (prediction - actual)
updated = prediction - learning_rate * gradient
print(round(updated, 3))`,
    output: "0.76",
    exercise: "Calculate the squared error for a prediction of 0.4 when the target is 1.",
  },
  {
    id: "regularization-early-stopping",
    title: "Regularization, dropout and early stopping",
    theory: "Regularization techniques reduce overfitting. Dropout randomly disables units during training, weight decay penalizes large weights and early stopping halts training when validation loss stops improving.",
    why: "Deep networks have many parameters and can easily memorize training data.",
    when: "Monitor training and validation loss together. Stop or regularize when validation loss rises while training loss keeps falling.",
    realWorld: "A model's validation loss is lowest at epoch 3, so the team keeps the epoch 3 weights.",
    code: `val_loss = [0.90, 0.70, 0.60, 0.62, 0.65]
best_epoch = min(range(len(val_loss)), key=lambda i: val_loss[i]) + 1
print(best_epoch)`,
    output: "3",
    exercise: "Describe what a widening gap between training and validation loss indicates.",
  },
  {
    id: "cnn-basics",
    title: "Convolutional neural networks (CNNs)",
    theory: "A CNN applies small learnable filters across an image to detect local patterns such as edges and textures. Pooling layers reduce spatial size. The output size of a convolution is (n − k + 2p) / s + 1 for input size n, kernel k, padding p and stride s.",
    why: "Convolution shares weights across positions, so CNNs need far fewer parameters than fully connected networks for images.",
    when: "Use CNNs for images, spectrograms and other grid-like data. Consider pretrained models and transfer learning for small datasets.",
    realWorld: "A quality-control model detects defects in product photos.",
    code: `n, k, p, s = 28, 3, 0, 1
out = (n - k + 2 * p) // s + 1
print(out)`,
    output: "26",
    exercise: "Compute the output size for a 32×32 image, 5×5 kernel, padding 2 and stride 1.",
  },
  {
    id: "sequence-models",
    title: "Sequence models: RNNs and LSTMs",
    theory: "Recurrent networks process a sequence step by step while carrying a hidden state. LSTMs and GRUs add gates that help preserve information over longer sequences. Models are trained on sliding windows of past values.",
    why: "Many data types are ordered: text, sensor readings, prices and user events.",
    when: "Use for sequences when order matters. Transformers now dominate language tasks, but recurrent models remain useful for small sequential data.",
    realWorld: "A model uses the last three days of readings to predict the next reading.",
    code: `series = [1, 2, 3, 4, 5]
window = 3
X = [series[i:i + window] for i in range(len(series) - window)]
y = [series[i + window] for i in range(len(series) - window)]
print(X)
print(y)`,
    output: `[[1, 2, 3], [2, 3, 4]]
[4, 5]`,
    exercise: "Create sliding windows of length 4 for a list of 10 values.",
  },
  {
    id: "embeddings",
    title: "Embeddings and semantic similarity",
    theory: "An embedding maps text or another object to a numeric vector intended to capture useful relationships. Similarity metrics compare vectors in that representation space.",
    why: "Embeddings enable semantic search beyond exact keyword matches.",
    when: "Use for document retrieval, clustering, recommendations and retrieval-augmented generation.",
    realWorld: "A help center finds an article about password recovery even when the user says 'I cannot log in'.",
    code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
docs = ["reset a forgotten password", "change delivery address"]
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(docs + ["forgot my password"])
print(cosine_similarity(X[-1], X[:2]).round(2).tolist())`,
    output: "Similarity scores for the query against each document.",
    exercise: "Explain why embedding quality and document chunking affect search results.",
  },
  {
    id: "vector-search",
    title: "Vector search and cosine similarity",
    theory: "Cosine similarity compares the direction of two vectors: cos(a, b) = a·b / (|a||b|). Vector search embeds the query and returns the stored vectors with the highest similarity. Vector databases do this efficiently at scale.",
    why: "Retrieval quality determines the quality of a RAG system's answers.",
    when: "Use top-k retrieval with a similarity threshold and test it on real questions.",
    realWorld: "A knowledge assistant retrieves the three most relevant policy paragraphs.",
    code: `import numpy as np
docs = np.array([[1, 0], [1, 1], [0, 1]])
query = np.array([1, 0.2])
sims = docs @ query / (np.linalg.norm(docs, axis=1) * np.linalg.norm(query))
print(sims.round(2).tolist())
print(int(sims.argmax()))`,
    output: `[0.98, 0.76, 0.2]
0`,
    exercise: "Change the query vector so that the second document becomes the best match.",
  },
  {
    id: "transformers-llms",
    title: "Transformers and large language models",
    theory: "Transformers use attention to process relationships among tokens. Large language models are trained to model token sequences and can generate text based on context and instructions.",
    why: "They support summarization, question answering, coding assistance and language interfaces.",
    when: "Use when language generation or understanding is useful; validate factual output and consider privacy, latency and cost.",
    realWorld: "A support assistant drafts a response using an approved knowledge base.",
    code: `prompt = "Summarize this support issue in one sentence: delivery arrived two days late."
print("Prompt prepared:", prompt)`,
    output: "Prompt prepared: Summarize this support issue in one sentence: delivery arrived two days late.",
    exercise: "Write a prompt that asks for a structured JSON summary without including private customer data.",
  },
  {
    id: "prompt-engineering",
    title: "Prompt engineering basics",
    theory: "A good prompt states the role, task, context, constraints and the output format. Examples (few-shot prompting) and explicit instructions to use only supplied context improve consistency.",
    why: "Clear prompts make LLM outputs more reliable and easier to parse in applications.",
    when: "Iterate on prompts using a small test set. Ask for structured output when a program will read the answer.",
    realWorld: "A team extracts invoice fields as JSON from a text description.",
    code: `prompt = '''You are a data assistant.
Task: extract the customer name and amount.
Context: Ravi paid 450 rupees on Monday.
Return only JSON with keys name and amount.'''
print(prompt.splitlines()[1])`,
    output: "Task: extract the customer name and amount.",
    exercise: "Rewrite a vague prompt into one with a role, context, constraints and output format.",
  },
  {
    id: "rag",
    title: "Retrieval-augmented generation (RAG)",
    theory: "RAG retrieves relevant passages from a knowledge source and supplies them to a language model as context. It does not guarantee correctness; retrieval and citations must be evaluated.",
    why: "It can ground answers in private or frequently updated documents without retraining the model for every content change.",
    when: "Use for internal knowledge assistants, documentation search and question answering where source traceability matters.",
    realWorld: "A university chatbot retrieves official admission FAQs before drafting an answer.",
    code: `documents = ["Applications close on 30 June.", "Scholarships require a separate form."]
question = "When do applications close?"
# A real RAG system retrieves relevant chunks before calling an LLM.
context = documents[0]
print("Context:", context)
print("Question:", question)`,
    output: `Context: Applications close on 30 June.
Question: When do applications close?`,
    exercise: "List two checks to evaluate whether a RAG answer is supported by retrieved sources.",
  },
];

// ==========================================================================
// 10. Projects & Deployment  (Advanced · Portfolio)
// ==========================================================================
const deploymentLessons: Lesson[] = [
  {
    id: "problem-framing",
    title: "Business problem and success metrics",
    theory: "A project starts by defining the decision to support, the user, constraints and a measurable success criterion. Technical metrics should connect to business outcomes.",
    why: "A well-framed problem prevents building a technically interesting solution that does not help anyone.",
    when: "Use before selecting data, algorithms or dashboards.",
    realWorld: "A churn project defines the retention team's action and the cost of false alerts before modeling.",
    code: `business_goal = "Reduce avoidable churn"
model_metric = "Recall at an acceptable precision"
print(business_goal)
print(model_metric)`,
    output: `Reduce avoidable churn
Recall at an acceptable precision`,
    exercise: "Define one business KPI and one technical metric for a sales forecasting project.",
  },
  {
    id: "git-version-control",
    title: "Git and version control",
    theory: "Git records snapshots (commits) of your project so you can review history, undo mistakes and collaborate through branches and pull requests. GitHub hosts repositories online.",
    why: "Version control is expected in every data team and makes your portfolio visible to employers.",
    when: "Commit small, meaningful changes with clear messages. Exclude large data files and secrets using .gitignore.",
    realWorld: "A recruiter reads your repository history to see how the project developed.",
    code: `git init
git add .
git commit -m 'Add data cleaning notebook'
git log --oneline`,
    output: "A short commit hash followed by: Add data cleaning notebook",
    exercise: "Create a branch, make a change, commit it and merge it back.",
  },
  {
    id: "virtual-environments",
    title: "Virtual environments and requirements",
    theory: "A virtual environment isolates a project's Python packages. A requirements.txt file lists package versions so others can recreate the same environment.",
    why: "Different projects need different library versions, and reproducibility depends on pinned dependencies.",
    when: "Create one environment per project and update requirements.txt whenever dependencies change.",
    realWorld: "A reviewer installs your project on a new machine and gets the same results.",
    code: `python -m venv .venv
source .venv/bin/activate
pip install pandas scikit-learn
pip freeze > requirements.txt`,
    output: "A requirements.txt file listing the exact installed package versions.",
    exercise: "Create a new environment and install the project using only requirements.txt.",
  },
  {
    id: "reproducible-pipelines",
    title: "Data pipelines and reproducibility",
    theory: "A pipeline organizes data extraction, validation, transformation and output into repeatable steps. Reproducibility records code versions, parameters and data assumptions.",
    why: "It reduces manual errors and makes results easier to refresh and audit.",
    when: "Use when a report or model must run repeatedly, on new data or in another environment.",
    realWorld: "A daily sales report validates incoming rows before updating a dashboard dataset.",
    code: `def validate_sales(rows):
    valid = [r for r in rows if r["amount"] >= 0 and r["order_id"]]
    return valid

rows = [{"order_id": 1, "amount": 250}, {"order_id": 2, "amount": -5}]
print(validate_sales(rows))`,
    output: "[{'order_id': 1, 'amount': 250}]",
    exercise: "Add a validation check that rejects rows with missing order dates.",
  },
  {
    id: "api-basics",
    title: "Serving a model with an API",
    theory: "An API exposes a defined interface so another application can send input and receive a prediction or result. Production APIs need validation, error handling, logging and access control.",
    why: "It separates model logic from the website or application that uses it.",
    when: "Use when dashboards, web apps or other services need to request predictions programmatically.",
    realWorld: "A web form sends customer features to a churn prediction service.",
    code: `# Minimal illustration of the request/response contract
payload = {"tenure_months": 8, "monthly_spend": 1200}
response = {"risk_score": 0.72, "model_version": "v1"}
print(response["risk_score"])`,
    output: "0.72",
    exercise: "List two invalid inputs an API should reject before predicting.",
  },
  {
    id: "fastapi-service",
    title: "Building a prediction API with FastAPI",
    theory: "FastAPI creates web APIs from Python functions. Pydantic models describe and validate the request body, and the framework generates interactive documentation at /docs.",
    why: "A deployed endpoint lets other applications use your model without running your notebook.",
    when: "Load the saved pipeline once at startup, validate inputs and return clear errors. The scoring rule below is a placeholder for a real model.",
    realWorld: "A web app calls /predict with customer features and shows the returned risk score.",
    code: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Customer(BaseModel):
    tenure_months: int
    monthly_spend: float

@app.post('/predict')
def predict(customer: Customer):
    score = min(1.0, customer.monthly_spend / 2000)
    return {'risk_score': round(score, 2)}`,
    output: "Run with: uvicorn main:app --reload. POSTing {'tenure_months': 8, 'monthly_spend': 1200} returns {'risk_score': 0.6}.",
    exercise: "Replace the placeholder score with a loaded joblib pipeline and add input range validation.",
  },
  {
    id: "streamlit-app",
    title: "Interactive apps with Streamlit",
    theory: "Streamlit turns a Python script into a web app with widgets, tables and charts, without writing HTML or JavaScript. It is ideal for dashboards and model demos.",
    why: "A live demo is more convincing than a notebook and is easy to share in a portfolio.",
    when: "Use for internal tools, prototypes and portfolio projects. For high-traffic production apps, consider a dedicated front end.",
    realWorld: "A recruiter opens your hosted app and tests the model with their own inputs.",
    code: `import streamlit as st
import pandas as pd

st.title('Sales Explorer')
df = pd.DataFrame({'month': ['Jan', 'Feb', 'Mar'], 'revenue': [12000, 15000, 13500]})
st.line_chart(df, x='month', y='revenue')`,
    output: "Run with: streamlit run app.py. A page titled Sales Explorer with a revenue line chart appears.",
    exercise: "Add a slider widget that filters the displayed months.",
  },
  {
    id: "dashboard-storytelling",
    title: "Dashboards and data storytelling",
    theory: "A dashboard presents a focused set of metrics, comparisons and trends for a specific audience. Good storytelling explains what changed, why it may matter and what action is possible.",
    why: "A correct chart is useful only when a decision-maker can interpret it and act on it.",
    when: "Use when teams need recurring monitoring or self-service analysis; define KPI formulas consistently.",
    realWorld: "An operations dashboard shows revenue, order count, average order value and forecast error.",
    code: `metrics = {"revenue": 250000, "orders": 1250}
metrics["average_order_value"] = metrics["revenue"] / metrics["orders"]
print(metrics["average_order_value"])`,
    output: "200.0",
    exercise: "Sketch three KPIs for a customer support dashboard and define each formula.",
  },
  {
    id: "docker-basics",
    title: "Containers and Docker basics",
    theory: "A container packages code, dependencies and the runtime so an application runs the same way everywhere. A Dockerfile describes how to build the image.",
    why: "Containers remove 'works on my machine' problems and are the standard way to deploy services.",
    when: "Use for APIs and apps that must run on servers or cloud platforms. Keep images small and never bake secrets into them.",
    realWorld: "A model API is deployed to a cloud service from a container image.",
    code: `FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`,
    output: "Build with: docker build -t churn-api . and run with: docker run -p 8000:8000 churn-api",
    exercise: "Add a .dockerignore file that excludes the virtual environment and large data files.",
  },
  {
    id: "model-monitoring",
    title: "Monitoring models and data drift",
    theory: "After deployment, model quality can fall because the input data changes (data drift) or the relationship between inputs and outcome changes (concept drift). Monitoring compares recent input distributions and performance with training-time values.",
    why: "A model that is not monitored can fail silently.",
    when: "Track input statistics, prediction distribution, latency and, when labels arrive, real performance. Set alert thresholds.",
    realWorld: "A churn model is retrained after average monthly spend shifts well above the training average.",
    code: `train_mean = 100
new_values = [130, 125, 140]
new_mean = sum(new_values) / len(new_values)
drift = abs(new_mean - train_mean) / train_mean
print(f'{drift:.0%}')`,
    output: "32%",
    exercise: "Choose two input features to monitor for a loan model and define an alert threshold for each.",
  },
  {
    id: "project-documentation",
    title: "Testing, documentation and deployment",
    theory: "A project deliverable should explain its purpose, setup, data, methodology, validation, limitations and how to reproduce results. Deployment also requires environment configuration and monitoring.",
    why: "Good documentation helps reviewers trust, run and maintain the work.",
    when: "Use before sharing a portfolio project or putting a data application into production.",
    realWorld: "A hiring manager can clone a repository, install dependencies and reproduce the reported evaluation.",
    code: `checklist = ["Problem and success metric", "Data source and license", "Reproducible setup", "Evaluation and limitations"]
for item in checklist:
    print("[ ]", item)`,
    output: "A four-item project checklist.",
    exercise: "Write a README outline for your own end-to-end data science project.",
  },
];

// ==========================================================================
// Curriculum (modules in learning order)
// ==========================================================================

export const curriculum: LearningModule[] = [
  {
    id: "python",
    title: "Python for Data Science",
    description: "Build programming foundations and learn to work with tabular data.",
    level: "Beginner",
    stage: "Foundations",
    lessons: pythonLessons,
  },
  {
    id: "sql",
    title: "SQL for Analytics",
    description: "Query relational data to answer business questions efficiently.",
    level: "Beginner",
    stage: "Foundations",
    lessons: sqlLessons,
  },
  {
    id: "statistics",
    title: "Statistics & Probability",
    description: "Use statistical thinking to summarize data and reason under uncertainty.",
    level: "Beginner",
    stage: "Foundations",
    lessons: statisticsLessons,
  },
  {
    id: "eda",
    title: "Data Analysis & EDA",
    description: "Inspect, clean, visualize and explain patterns in data.",
    level: "Intermediate",
    stage: "Data Analysis",
    lessons: edaLessons,
  },
  {
    id: "features",
    title: "Feature Engineering",
    description: "Prepare meaningful, model-ready inputs while avoiding leakage.",
    level: "Intermediate",
    stage: "Machine Learning",
    lessons: featuresLessons,
  },
  {
    id: "ml",
    title: "Machine Learning",
    description: "Train, evaluate and improve models for prediction and discovery.",
    level: "Intermediate",
    stage: "Machine Learning",
    lessons: mlLessons,
  },
  {
    id: "timeseries",
    title: "Time Series Analysis",
    description: "Work with dates, trends, seasonality and forecasting basics.",
    level: "Intermediate",
    stage: "Machine Learning",
    lessons: timeSeriesLessons,
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    description: "Turn text into features and build simple text classifiers.",
    level: "Intermediate",
    stage: "Advanced AI",
    lessons: nlpLessons,
  },
  {
    id: "deep-learning",
    title: "Deep Learning & Generative AI",
    description: "Understand neural networks, language models and retrieval-based AI.",
    level: "Advanced",
    stage: "Advanced AI",
    lessons: deepLearningLessons,
  },
  {
    id: "deployment",
    title: "Projects & Deployment",
    description: "Turn analysis into reproducible, shareable, production-minded deliverables.",
    level: "Advanced",
    stage: "Portfolio",
    lessons: deploymentLessons,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getModule(moduleId: string): LearningModule | undefined {
  return curriculum.find((module) => module.id === moduleId);
}

export function getLesson(moduleId: string, topicId: string): Lesson | undefined {
  return getModule(moduleId)?.lessons.find((lesson) => lesson.id === topicId);
}

