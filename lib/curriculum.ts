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
    id: "loops-while-enumerate-zip",
    title: "while loops, enumerate and zip",
    theory: "A while loop repeats as long as a condition is True. enumerate() gives each item together with its position, and zip() walks through two or more lists at the same time. break stops a loop early and continue skips to the next item.",
    why: "Data often arrives as parallel lists (names and amounts), and you often need the row number or a repeat-until-done pattern.",
    when: "Use for loops when you know the items, enumerate when you need a counter, zip to pair lists, and while only when the number of repeats is unknown. Make sure a while condition can become False, otherwise the loop never ends.",
    realWorld: "A script prints a numbered list of customers with their order amounts, then keeps adding a monthly target until it passes 5,000.",
    code: `amounts = [1200, 6400, 3200]
names = ["Asha", "Ravi", "Meena"]
for i, (n, a) in enumerate(zip(names, amounts), start=1):
    print(i, n, a)

total = 0
while total < 5000:
    total += 1500
print(total)`,
    output: `1 Asha 1200
2 Ravi 6400
3 Meena 3200
6000`,
    exercise: "Use zip() to pair products with prices and print only the products that cost more than 500. Add a counter with enumerate().",
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
    id: "function-arguments",
    title: "Function arguments: defaults, keywords, *args and **kwargs",
    theory: "A default value (rate=0.18) is used when the caller does not supply that argument. Keyword arguments are passed by name, so order does not matter. *args collects extra positional values into a tuple, and **kwargs collects extra named values into a dictionary.",
    why: "Flexible functions are easier to reuse, and you will meet *args and **kwargs in library code such as scikit-learn, Matplotlib and FastAPI.",
    when: "Use defaults for common settings and keyword arguments for readability. Do not use mutable defaults such as lists, because they are shared between calls.",
    realWorld: "A reporting function calculates price with tax at 18 percent by default, but a different rate can be passed for special products.",
    code: `def add_tax(price, rate=0.18, *, round_to=2):
    return round(price * (1 + rate), round_to)

def summarize(*values, **options):
    label = options.get("label", "total")
    return f"{label}: {sum(values)}"

print(add_tax(100))
print(add_tax(100, rate=0.05))
print(summarize(10, 20, 30, label="sales"))`,
    output: `118.0
105.0
sales: 60`,
    exercise: "Write a function discount(price, percent=10) and call it using positional and keyword arguments.",
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
    id: "numpy-reshape-axis",
    title: "NumPy shape, reshape and axis",
    theory: "An array has a shape such as (2, 3) meaning 2 rows and 3 columns. reshape() changes the shape without changing the data. The axis argument chooses the direction of a calculation: axis=0 works down the rows (one result per column) and axis=1 works across the columns (one result per row).",
    why: "Understanding axis is essential for Pandas, NumPy and machine learning, where data is a table of samples (rows) and features (columns).",
    when: "Check .shape often when something fails. If a library expects 2-D input for one feature, use reshape(-1, 1), where -1 means 'work out this size'.",
    realWorld: "A team stores 2 stores x 3 days of sales in one array and needs totals per day and per store.",
    code: `import numpy as np

sales = np.arange(1, 7).reshape(2, 3)
print(sales)
print(sales.shape)
print(sales.sum(axis=0))
print(sales.sum(axis=1))`,
    output: `[[1 2 3]
 [4 5 6]]
(2, 3)
[5 7 9]
[ 6 15]`,
    exercise: "Create an array of 12 numbers, reshape it to 3 rows and 4 columns and calculate the mean of each column.",
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
    id: "pandas-sort-rank",
    title: "Sorting, ranking and top-N in Pandas",
    theory: "sort_values() orders rows by one or more columns. nlargest() and nsmallest() return the top or bottom rows quickly. rank() adds a position number, and ties share a rank by default (average) unless you choose a method such as 'min' or 'dense'.",
    why: "Leaderboards, best sellers and 'top 10 customers' are among the most common analysis requests.",
    when: "Use sort_values for full ordering, nlargest for a short top list, and rank when you need the position as a column. Remember sorting returns a new DataFrame unless you assign it back.",
    realWorld: "A category manager lists the best-selling products by revenue.",
    code: `import pandas as pd
df = pd.DataFrame({"product": ["A", "B", "C", "D"], "revenue": [300, 900, 450, 700]})
print(df.sort_values("revenue", ascending=False))
print(df.nlargest(2, "revenue"))
df["rank"] = df["revenue"].rank(ascending=False).astype(int)
print(df)`,
    output: `  product  revenue
1       B      900
3       D      700
2       C      450
0       A      300
  product  revenue
1       B      900
3       D      700
  product  revenue  rank
0       A      300     4
1       B      900     1
2       C      450     3
3       D      700     2`,
    exercise: "Sort by two columns: region ascending and revenue descending. Then find the top 3 rows with nlargest.",
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
  {
    id: "pandas-join-types",
    title: "Types of merges in Pandas: inner, left, right, outer and cross",
    theory: "merge() accepts how='inner', 'left', 'right', 'outer' or 'cross'. They match the SQL joins: inner keeps matching keys only, left keeps all left rows, right keeps all right rows, outer keeps everything, and cross pairs every row with every row. indicator=True adds a _merge column that says where each row came from.",
    why: "The wrong merge type silently drops rows or adds missing values, which changes totals and averages.",
    when: "Use left when the left table is your main list, outer for reconciliation, and indicator=True to audit unmatched rows. Use validate='one_to_one' or 'many_to_one' to catch duplicate keys.",
    realWorld: "An analyst compares a customer list with an orders table and finds customers with no orders and orders with unknown customers.",
    code: `import pandas as pd
left = pd.DataFrame({"cust_id": [1, 2, 3], "name": ["Asha", "Ravi", "Meena"]})
right = pd.DataFrame({"cust_id": [1, 2, 9], "amount": [100, 200, 50]})
for how in ["inner", "left", "right", "outer"]:
    print(how, len(left.merge(right, on="cust_id", how=how)))
print(left.merge(right, on="cust_id", how="outer", indicator=True))
print(left.merge(right, how="cross").shape)`,
    output: `inner 2
left 3
right 3
outer 4
   cust_id   name  amount      _merge
0        1   Asha   100.0        both
1        2   Ravi   200.0        both
2        3  Meena     NaN   left_only
3        9    NaN    50.0  right_only
(9, 4)`,
    exercise: "Merge with how='left', then filter rows where amount is missing to list customers without orders.",
  },
  {
    id: "pandas-concat-melt",
    title: "Combining and reshaping: concat, melt and pivot",
    theory: "concat() stacks DataFrames with the same columns (for example monthly files). melt() turns wide data (one column per month) into long data (one row per store and month). pivot() does the reverse. Long format is what most plotting and modelling tools expect.",
    why: "Data from Excel is often wide and monthly files arrive separately. Reshaping is a daily task before analysis.",
    when: "Use concat with ignore_index=True to append tables, melt before grouping or plotting by a column such as month, and pivot to create a report-style table.",
    realWorld: "Sales exports for January and February are stacked, and a wide report is converted to long format for charts.",
    code: `import pandas as pd
jan = pd.DataFrame({"store": ["A", "B"], "sales": [100, 150]})
feb = pd.DataFrame({"store": ["A", "B"], "sales": [120, 130]})
stacked = pd.concat([jan.assign(month="Jan"), feb.assign(month="Feb")], ignore_index=True)
print(stacked)

wide = pd.DataFrame({"store": ["A", "B"], "Jan": [100, 150], "Feb": [120, 130]})
long = wide.melt(id_vars="store", var_name="month", value_name="sales")
print(long)
print(long.pivot(index="store", columns="month", values="sales"))`,
    output: `  store  sales month
0     A    100   Jan
1     B    150   Jan
2     A    120   Feb
3     B    130   Feb
  store month  sales
0     A   Jan    100
1     B   Jan    150
2     A   Feb    120
3     B   Feb    130
month  Feb  Jan
store          
A      120  100
B      130  150`,
    exercise: "Add a March column to the wide table, melt it again and count the rows.",
  },
  {
    id: "pandas-groupby-agg",
    title: "groupby with several aggregations and transform",
    theory: "agg() with named aggregation calculates several metrics per group in one step, such as count, sum and mean. transform() returns a result with the same length as the original table, so you can add a group total or group average back to every row.",
    why: "Reports need many metrics at once, and percent-of-group calculations need group totals next to each row.",
    when: "Use agg for a summary table and transform when you need to compare each row with its group. Both avoid slow manual loops.",
    realWorld: "A regional manager needs order count, revenue and average order per region, and each order's share of its region.",
    code: `import pandas as pd
orders = pd.DataFrame({"region": ["N", "N", "S", "S", "S"], "amount": [100, 300, 200, 400, 600]})
summary = orders.groupby("region").agg(
    orders=("amount", "count"),
    revenue=("amount", "sum"),
    avg=("amount", "mean"),
)
print(summary)
orders["pct_of_region"] = (
    orders["amount"] / orders.groupby("region")["amount"].transform("sum") * 100
).round(1)
print(orders)`,
    output: `        orders  revenue    avg
region                        
N            2      400  200.0
S            3     1200  400.0
  region  amount  pct_of_region
0      N     100           25.0
1      N     300           75.0
2      S     200           16.7
3      S     400           33.3
4      S     600           50.0`,
    exercise: "Add the maximum order amount per region to the summary table.",
  },
  {
    id: "tuples-sets",
    title: "Tuples and sets",
    theory: "A tuple is an ordered, immutable sequence, so its values cannot change after creation. A set stores unique values with no fixed order and supports fast membership tests and operations such as union, intersection and difference.",
    why: "Tuples protect fixed values such as coordinates, and sets make de-duplication and comparison of groups quick and readable.",
    when: "Use tuples for fixed records and dictionary keys. Use sets to remove duplicates, test membership or compare two groups of IDs. Sets do not keep order, so sort them before printing.",
    realWorld: "A marketing analyst finds customers who bought in January but not in February.",
    code: `jan = {"C1", "C2", "C3", "C4"}
feb = {"C3", "C4", "C5"}
print(sorted(jan & feb))
print(sorted(jan - feb))
print(sorted(jan | feb))
point = (17.38, 78.48)
print(point[0])`,
    output: `['C3', 'C4']
['C1', 'C2']
['C1', 'C2', 'C3', 'C4', 'C5']
17.38`,
    exercise: "Given two lists of email addresses, use sets to find addresses in both lists and addresses only in the first.",
  },
  {
    id: "lambda-sorting",
    title: "Lambda, sorted and filter",
    theory: "A lambda is a small anonymous function written as one expression. sorted() orders items using an optional key function, and filter() keeps only the items that pass a test.",
    why: "Sorting and filtering records by a field is a constant need when working with lists of dictionaries or API results.",
    when: "Use lambdas for short, one-line logic. If the logic needs a name, comments or several lines, write a regular function. For large tables, prefer Pandas methods.",
    realWorld: "A product team ranks items by rating and shows the top three.",
    code: `products = [
    {"name": "Laptop", "rating": 4.5},
    {"name": "Mouse", "rating": 4.1},
    {"name": "Monitor", "rating": 4.7},
    {"name": "Cable", "rating": 3.9},
]
top = sorted(products, key=lambda p: p["rating"], reverse=True)[:3]
print([p["name"] for p in top])
print([p["name"] for p in filter(lambda p: p["rating"] >= 4.5, products)])`,
    output: `['Monitor', 'Laptop', 'Mouse']
['Laptop', 'Monitor']`,
    exercise: "Sort a list of (city, population) tuples by population in descending order using a lambda key.",
  },
  {
    id: "classes-objects",
    title: "Classes and objects",
    theory: "A class is a blueprint that bundles data (attributes) and behaviour (methods). An object is one instance of the class. The __init__ method runs when an object is created and sets its starting values.",
    why: "Libraries such as scikit-learn are built from classes, so understanding them makes fit(), predict() and transform() easier to learn and lets you package your own reusable logic.",
    when: "Use a class when data and the functions that act on it belong together and you need several independent instances. For one-off calculations, plain functions are simpler.",
    realWorld: "A pipeline defines a cleaner object that stores a minimum amount and applies the same rule to every new file.",
    code: `class SalesCleaner:
    def __init__(self, min_amount):
        self.min_amount = min_amount

    def clean(self, amounts):
        return [a for a in amounts if a >= self.min_amount]

cleaner = SalesCleaner(min_amount=100)
print(cleaner.clean([50, 120, 300, 80]))`,
    output: "[120, 300]",
    exercise: "Add a method that returns the average of the cleaned amounts.",
  },
  {
    id: "json-data",
    title: "Working with JSON",
    theory: "JSON is a text format for nested data made of objects (dictionaries), arrays (lists), strings, numbers, booleans and null. Python's json module converts JSON text to Python objects with json.loads() and back with json.dumps().",
    why: "Most web APIs return JSON, so reading and flattening it is a core data-collection skill.",
    when: "Use it for API responses, configuration files and logs. Use pandas.json_normalize to flatten nested records into a table, and use .get() to handle keys that may be missing.",
    realWorld: "An analyst loads order records from an API response and converts them into a DataFrame.",
    code: `import json
import pandas as pd

text = '{"orders": [{"id": 1, "customer": {"city": "Hyderabad"}, "amount": 450}, {"id": 2, "customer": {"city": "Kadapa"}, "amount": 300}]}'
data = json.loads(text)
df = pd.json_normalize(data["orders"])
print(df)`,
    output: `   id  amount customer.city
0   1     450     Hyderabad
1   2     300        Kadapa`,
    exercise: "Add a third order with no customer city and see how json_normalize shows the missing value.",
  },
  {
    id: "file-handling",
    title: "Reading and writing files with open() and csv",
    theory: "open() gives access to a file, and a with block closes it automatically even if an error happens. Mode 'r' reads, 'w' writes (and overwrites) and 'a' appends. The csv module reads and writes rows, and DictReader gives each row as a dictionary keyed by the header.",
    why: "Pipelines read raw exports and write results. Knowing the basics helps when pandas is not suitable, for example for line-by-line processing of a very large file.",
    when: "Always use with open(...). Pass newline='' with csv, choose 'w' carefully because it erases an existing file, and use pandas.read_csv for normal analysis.",
    realWorld: "A script saves a small daily summary file and later reads it back to check the values.",
    code: `import csv

with open("sales.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["city", "amount"])
    writer.writerow(["Hyderabad", 800])
    writer.writerow(["Chennai", 650])

with open("sales.csv", newline="") as f:
    for row in csv.DictReader(f):
        print(row["city"], row["amount"])`,
    output: `Hyderabad 800
Chennai 650`,
    exercise: "Append one more city to sales.csv using mode 'a', then read the file again and add up the amounts (remember to convert text to int).",
  },
  {
    id: "regex-basics",
    title: "Regular expressions for text extraction",
    theory: "A regular expression (regex) is a pattern that describes text. Python's re module can find a pattern, extract matching parts and replace them. Common pieces are \\d for a digit, \\D for a non-digit, + for one or more, and parentheses for capture groups.",
    why: "Real text columns hide useful details such as order IDs, phone numbers and prices that are awkward to extract with plain string methods.",
    when: "Use regex for well-defined patterns. Test patterns on examples, keep them readable, and prefer simple string methods when they are enough.",
    realWorld: "A support team extracts order numbers like ORD-1042 from free-text complaint messages.",
    code: `import re

text = "Order ORD-1042 shipped, but ORD-2210 is delayed. Call 98765 43210."
orders = re.findall(r"ORD-\\d+", text)
number = re.sub(r"\\D", "", "98765 43210")
print(orders)
print(number)`,
    output: `['ORD-1042', 'ORD-2210']
9876543210`,
    exercise: "Extract all prices written like ₹1,250 from a sentence and convert them to integers.",
  },
  {
    id: "pandas-string-methods",
    title: "Cleaning text columns with .str, value_counts and get_dummies",
    theory: "The .str accessor applies string methods to a whole column (strip, lower, title, replace, contains, split). value_counts() counts how often each category appears, and get_dummies() converts a category into 0/1 columns. Missing values stay missing and are counted only if you ask with dropna=False.",
    why: "Typing differences such as ' hyderabad' and 'HYDERABAD ' create fake categories that break grouping and counts.",
    when: "Clean the text first, then use value_counts to confirm the categories are consistent. Use get_dummies for simple one-hot encoding of a few categories.",
    realWorld: "An analyst merges two spellings of the same city before counting customers per city.",
    code: `import pandas as pd
s = pd.DataFrame({"city": [" hyderabad", "HYDERABAD ", "Chennai", None]})
s["clean"] = s["city"].str.strip().str.title()
print(s["clean"].value_counts(dropna=False))
print(pd.get_dummies(s["clean"], dtype=int))`,
    output: `clean
Hyderabad    2
Chennai      1
NaN          1
Name: count, dtype: int64
   Chennai  Hyderabad
0        0          1
1        0          1
2        1          0
3        0          0`,
    exercise: "Use .str.contains('hyd', case=False) to flag rows that mention Hyderabad.",
  },
  {
    id: "numpy-masks-broadcasting",
    title: "NumPy boolean masks and broadcasting",
    theory: "A boolean mask is an array of True/False values used to select elements that meet a condition. Broadcasting lets NumPy combine arrays of different shapes by stretching the smaller one, for example subtracting each column's mean from every row.",
    why: "These two ideas replace slow loops and are the basis of fast filtering and scaling in data science code.",
    when: "Use masks for conditional selection and broadcasting for per-column or per-row adjustments. Check array shapes whenever you see a broadcasting error.",
    realWorld: "An analyst centres every store's daily sales by subtracting that store's average.",
    code: `import numpy as np

sales = np.array([[100, 200], [120, 260], [140, 240]])
print(sales[sales[:, 0] > 110])
centered = sales - sales.mean(axis=0)
print(centered)`,
    output: `[[120 260]
 [140 240]]
[[-20.         -33.33333333]
 [  0.          26.66666667]
 [ 20.           6.66666667]]`,
    exercise: "Use a mask to count how many values in the sales array are above 150.",
  },
  {
    id: "pandas-loc-iloc",
    title: "Selecting data with loc, iloc and boolean masks",
    theory: "loc selects rows and columns by label or by a boolean condition, while iloc selects by integer position. Combining a condition with loc lets you filter rows and choose columns in one step.",
    why: "Selecting the right rows and columns is the most common Pandas task, and confusing label with position is a frequent source of bugs.",
    when: "Use loc with conditions for filtering and for safe assignment, and iloc for position-based slicing. Avoid chained indexing such as df[df.x > 1]['y'] = 0.",
    realWorld: "A retailer selects high-value orders and labels them with a segment.",
    code: `import pandas as pd

df = pd.DataFrame({
    "city": ["Hyderabad", "Kadapa", "Hyderabad", "Chennai"],
    "amount": [450, 300, 800, 650],
})
print(df.loc[df["amount"] > 400, ["city", "amount"]])
print(df.iloc[0, 1])
df.loc[df["amount"] > 600, "segment"] = "High"
print(df)`,
    output: `        city  amount
0  Hyderabad     450
2  Hyderabad     800
3    Chennai     650
450
        city  amount segment
0  Hyderabad     450     NaN
1     Kadapa     300     NaN
2  Hyderabad     800    High
3    Chennai     650    High`,
    exercise: "Select orders from Hyderabad with an amount above 500 and set a flag column to True for them.",
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
    id: "where-operators",
    title: "Filtering with IN, BETWEEN, LIKE and LIMIT",
    theory: "WHERE can use more than simple comparisons. IN matches any value in a list, BETWEEN matches an inclusive range, LIKE matches text patterns (% means any characters), and IS NULL finds missing values. AND, OR and NOT combine conditions, and parentheses control the order. LIMIT returns only the first rows.",
    why: "Real questions are rarely a single comparison. These operators make filters shorter and easier to read than long chains of OR.",
    when: "Use IN for a list of values, BETWEEN for date or number ranges, and LIMIT to preview a big table. Put parentheses around OR conditions, because AND is evaluated before OR.",
    realWorld: "An analyst pulls orders from three cities, placed in October, with a product name that starts with 'Pro'.",
    code: `SELECT order_id, city, product, amount, order_date
FROM orders
WHERE city IN ('Hyderabad', 'Chennai', 'Pune')
  AND order_date BETWEEN '2026-10-01' AND '2026-10-31'
  AND product LIKE 'Pro%'
  AND discount IS NOT NULL
ORDER BY amount DESC
LIMIT 10;`,
    output: "At most 10 matching orders, highest amount first.",
    exercise: "Write a query for orders where city is Kadapa or Mumbai AND amount is between 500 and 2000. Check what changes if you forget the parentheses around the two cities written with OR.",
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
    id: "conditional-aggregation",
    title: "Conditional aggregation with CASE inside SUM",
    theory: "Placing CASE WHEN inside SUM or COUNT counts or adds only the rows that meet a condition. It creates several metrics in one pass, which works like a pivot table in SQL.",
    why: "Dashboards need many metrics side by side, such as completed and cancelled orders per month, without writing one query per metric.",
    when: "Use SUM(CASE WHEN condition THEN 1 ELSE 0 END) for counts and SUM(CASE WHEN condition THEN amount ELSE 0 END) for amounts. In PostgreSQL you can also write COUNT(*) FILTER (WHERE condition).",
    realWorld: "A manager wants completed, cancelled and refunded order counts for each category in one table.",
    code: `SELECT category,
       COUNT(*) AS total_orders,
       SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completed,
       SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled,
       ROUND(100.0 * SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) / COUNT(*), 1) AS cancel_pct
FROM orders
GROUP BY category;`,
    output: "One row per category with total, completed and cancelled counts and the cancellation percentage.",
    exercise: "Add a column with revenue from completed orders only.",
  },
  {
    id: "cast-types",
    title: "Converting data types with CAST",
    theory: "CAST(value AS type) converts a value to another data type, such as text to integer or timestamp to date. Mixing types can cause errors or wrong results, for example integer division that drops decimals.",
    why: "Imported data often stores numbers and dates as text, and integer division gives wrong percentages.",
    when: "Cast text columns before sorting or summing them, and multiply by 1.0 or cast to numeric before dividing integers. Check for values that cannot be converted.",
    realWorld: "An export stores amounts as text like '1200', so sorting puts '900' after '1200'.",
    code: `SELECT
  CAST(amount_text AS INTEGER) AS amount,
  CAST(order_ts AS DATE) AS order_date,
  CAST(completed AS NUMERIC) / CAST(total AS NUMERIC) AS completion_rate
FROM raw_orders;`,
    output: "amount as a number, order_date without the time part, and a decimal completion rate instead of 0.",
    exercise: "Show what 7 / 2 returns in your database, then fix it so it returns 3.5.",
  },
  {
    id: "joins",
    title: "SQL joins",
    theory: "A join combines rows from related tables using a matching key. INNER JOIN keeps matches; LEFT JOIN keeps all rows from the left table and any matching right-side rows. RIGHT, FULL OUTER, CROSS and SELF joins are covered in the lessons that follow.",
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
    id: "join-types-overview",
    title: "Types of joins at a glance",
    theory: "A join type decides which rows survive when keys do not match. INNER JOIN keeps only matching rows. LEFT JOIN keeps every left row. RIGHT JOIN keeps every right row. FULL OUTER JOIN keeps every row from both sides. CROSS JOIN pairs every left row with every right row. A SELF JOIN joins a table to itself. Unmatched sides are filled with NULL.",
    why: "Choosing the wrong join type silently drops rows or adds fake rows, which changes totals in reports.",
    when: "Ask first: which table is the 'main' list I must not lose rows from? That table goes on the preserved side of a LEFT JOIN. Use INNER JOIN only when unmatched rows are truly not needed.",
    realWorld: "customers has Asha, Ravi and Meena. orders has orders for Asha, Ravi and an unknown customer id 9. Each join type returns a different set of rows from these two small tables.",
    code: `-- customers: (1 Asha) (2 Ravi) (3 Meena)
-- orders:    (101, cust 1) (102, cust 1) (103, cust 2) (104, cust 9)

-- INNER JOIN: 3 rows  (101, 102, 103)        Meena and order 104 are dropped
-- LEFT JOIN:  4 rows  (above + Meena/NULL)   all customers kept
-- RIGHT JOIN: 4 rows  (above + 104/NULL)     all orders kept
-- FULL JOIN:  5 rows  (Meena and 104 both kept)
-- CROSS JOIN: 12 rows (3 customers x 4 orders)

SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id;`,
    output: `name   order_id
Asha   101
Asha   102
Ravi   103
Meena  NULL`,
    exercise: "On paper, list the rows each join type returns for the two tables above. Then run them in SQLite or PostgreSQL and compare.",
  },
  {
    id: "inner-join",
    title: "INNER JOIN in detail",
    theory: "INNER JOIN (or just JOIN) returns a row only when the key exists in both tables. Rows with no match on either side disappear from the result.",
    why: "It is the safest join when you only want records that are fully linked, such as orders that belong to a known customer.",
    when: "Use it when missing matches should be excluded. Compare row counts before and after the join to see how many rows were dropped.",
    realWorld: "A finance report lists only orders that can be linked to a registered customer.",
    code: `SELECT o.order_id, c.name, o.amount
FROM orders o
INNER JOIN customers c
  ON o.customer_id = c.customer_id;`,
    output: "Orders 101, 102 and 103 with customer names. Order 104 (unknown customer) and Meena (no orders) are not shown.",
    exercise: "Count rows in orders, then count rows after the INNER JOIN. Explain the difference.",
  },
  {
    id: "right-join",
    title: "RIGHT JOIN",
    theory: "RIGHT JOIN keeps every row from the right table and fills the left columns with NULL when there is no match. It is the mirror image of LEFT JOIN: A RIGHT JOIN B gives the same result as B LEFT JOIN A.",
    why: "It helps you see right-table records that have no partner, such as orders with an unknown customer, which signals a data problem.",
    when: "Most analysts rewrite RIGHT JOIN as LEFT JOIN by swapping the table order, because reading one direction is easier. Both are correct.",
    realWorld: "A data-quality check finds orders whose customer_id does not exist in the customers table.",
    code: `SELECT o.order_id, o.customer_id, c.name
FROM customers c
RIGHT JOIN orders o
  ON o.customer_id = c.customer_id
WHERE c.customer_id IS NULL;`,
    output: "order_id 104 with customer_id 9 and name NULL.",
    exercise: "Rewrite the query as a LEFT JOIN by swapping the two tables and confirm the result is the same.",
  },
  {
    id: "full-outer-join",
    title: "FULL OUTER JOIN",
    theory: "FULL OUTER JOIN keeps all rows from both tables. Matching rows are combined, and rows with no match on either side appear with NULL in the other table's columns.",
    why: "It is the right tool for reconciliation: comparing two lists and seeing what is only in one, only in the other, or in both.",
    when: "Use it to compare two sources, such as billing and shipping records. Some databases (MySQL, older SQLite) do not support it, so you may need LEFT JOIN UNION RIGHT JOIN instead.",
    realWorld: "Accounts compares invoices against payments and finds invoices with no payment and payments with no invoice.",
    code: `SELECT
  COALESCE(i.invoice_id, p.invoice_id) AS invoice_id,
  i.amount AS invoiced,
  p.amount AS paid
FROM invoices i
FULL OUTER JOIN payments p
  ON i.invoice_id = p.invoice_id
WHERE i.invoice_id IS NULL OR p.invoice_id IS NULL;`,
    output: "Only the mismatched rows: invoices without payments (paid is NULL) and payments without invoices (invoiced is NULL).",
    exercise: "Remove the WHERE clause and add a status column using CASE WHEN: 'both', 'only invoice' or 'only payment'.",
  },
  {
    id: "cross-join",
    title: "CROSS JOIN",
    theory: "CROSS JOIN returns every combination of rows from two tables (a Cartesian product). With 3 rows and 4 rows you get 12 rows. There is no ON condition.",
    why: "It builds complete grids, for example every store with every month, so that missing combinations show up as zero instead of disappearing.",
    when: "Use it on small tables to create combinations. Never cross join two large tables by accident: 1 million rows x 1 million rows is far too many.",
    realWorld: "A report needs one row for every store and every month, even where a store had no sales.",
    code: `SELECT s.store, m.month, COALESCE(SUM(o.amount), 0) AS revenue
FROM stores s
CROSS JOIN months m
LEFT JOIN orders o
  ON o.store = s.store AND o.month = m.month
GROUP BY s.store, m.month
ORDER BY s.store, m.month;`,
    output: "One row for every store and month combination, with 0 revenue where there were no orders.",
    exercise: "Create the full grid of 3 products and 4 regions with CROSS JOIN and count its rows.",
  },
  {
    id: "self-join",
    title: "SELF JOIN",
    theory: "A self join joins a table to itself using two different aliases. It is used when rows in one table relate to other rows in the same table, such as an employee and their manager.",
    why: "Hierarchies and 'compare a row with another row' questions live inside one table.",
    when: "Always give the two copies clear aliases such as e and m. Use LEFT JOIN so rows without a match (for example the CEO with no manager) are not lost.",
    realWorld: "HR lists every employee with the name of their manager from the same employees table.",
    code: `SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m
  ON e.manager_id = m.employee_id;`,
    output: "One row per employee with the manager name, or NULL for the top manager.",
    exercise: "Find pairs of customers who live in the same city using a self join (hint: use a.customer_id < b.customer_id to avoid duplicates).",
  },
  {
    id: "multi-table-joins",
    title: "Joining three or more tables",
    theory: "You can chain several joins in one query. Each JOIN adds one table, and each ON clause links it to a table already in the query. Typical analytics models have a fact table (orders) and dimension tables (customers, products).",
    why: "Business reports usually need fields from many tables at once, such as customer city, product category and order amount.",
    when: "Join step by step and check the row count after each join. Use LEFT JOIN from the fact table so that no orders are lost.",
    realWorld: "A report shows revenue by customer city and product category.",
    code: `SELECT c.city, p.category, SUM(oi.quantity * oi.unit_price) AS revenue
FROM orders o
JOIN order_items oi ON oi.order_id = o.order_id
JOIN products p ON p.product_id = oi.product_id
LEFT JOIN customers c ON c.customer_id = o.customer_id
GROUP BY c.city, p.category
ORDER BY revenue DESC;`,
    output: "One row per city and category with total revenue.",
    exercise: "Add a fourth join to a regions table and group revenue by region instead of city.",
  },
  {
    id: "join-fanout",
    title: "Duplicate keys and row multiplication",
    theory: "If the join key is not unique on one side, each left row is repeated for every match. This is called fan-out. A customer with 3 orders joined to 3 payments produces 9 rows, which inflates SUM and COUNT.",
    why: "Fan-out is one of the most common causes of wrong totals in SQL reports, and it often goes unnoticed.",
    when: "Before joining, check that the key is unique on the side you expect. After joining, compare COUNT(*) with the row count of the main table. Aggregate each table to one row per key first, then join.",
    realWorld: "Revenue doubles in a dashboard because each order matched two payment rows.",
    code: `-- Check whether the key is unique
SELECT order_id, COUNT(*) AS rows_per_key
FROM payments
GROUP BY order_id
HAVING COUNT(*) > 1;

-- Safe pattern: aggregate first, then join
WITH paid AS (
  SELECT order_id, SUM(amount) AS paid_amount
  FROM payments
  GROUP BY order_id
)
SELECT o.order_id, o.amount, p.paid_amount
FROM orders o
LEFT JOIN paid p ON p.order_id = o.order_id;`,
    output: "The first query lists order_ids that appear more than once in payments. The second returns exactly one row per order.",
    exercise: "Join orders to a table with duplicate keys, compare SUM(amount) before and after the join, and explain the difference.",
  },
  {
    id: "left-join-on-vs-where",
    title: "ON versus WHERE in a LEFT JOIN",
    theory: "In a LEFT JOIN, a condition in ON decides which right-side rows match, and left rows are still kept. A condition on the right table in WHERE removes rows after the join, which turns the LEFT JOIN into an INNER JOIN.",
    why: "This mistake silently drops customers with no orders and is a popular interview question.",
    when: "Put conditions about the right table in ON if you want to keep all left rows. Use WHERE only for conditions on the left table or when you intentionally want to filter.",
    realWorld: "A report should list all customers with their completed orders, including customers who have none.",
    code: `-- Keeps all customers (correct)
SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o
  ON o.customer_id = c.customer_id AND o.status = 'completed';

-- Drops customers without completed orders (acts like INNER JOIN)
SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
WHERE o.status = 'completed';`,
    output: "The first query returns every customer. The second returns only customers who have at least one completed order.",
    exercise: "Run both versions and count the rows. Explain why the counts differ.",
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
    id: "exists-correlated-subquery",
    title: "EXISTS and correlated subqueries",
    theory: "EXISTS checks whether a subquery returns at least one row. A correlated subquery refers to the outer query and runs once per outer row, for example comparing each order with the average of its own category.",
    why: "They answer 'has this customer ever...' and 'is this value above its own group average' questions clearly.",
    when: "Use EXISTS for yes/no checks on related rows, and NOT EXISTS for missing records. For group averages on large tables, a window function or join is usually faster than a correlated subquery.",
    realWorld: "Marketing finds customers who bought at least once in the last 30 days.",
    code: `SELECT c.customer_id, c.name
FROM customers c
WHERE EXISTS (
  SELECT 1
  FROM orders o
  WHERE o.customer_id = c.customer_id
    AND o.order_date >= CURRENT_DATE - 30
);

SELECT order_id, category, amount
FROM orders o
WHERE amount > (
  SELECT AVG(amount) FROM orders WHERE category = o.category
);`,
    output: "The first query lists recently active customers. The second lists orders above their own category average.",
    exercise: "Rewrite the second query with AVG() OVER (PARTITION BY category) and compare results.",
  },
  {
    id: "dedupe-row-number",
    title: "Removing duplicates with ROW_NUMBER",
    theory: "To keep one row per entity, number the rows inside each group with ROW_NUMBER, ordered by a rule such as newest first, then keep only row number 1.",
    why: "Raw tables often hold repeated customers or events, and a plain DISTINCT cannot choose which version to keep.",
    when: "Decide the rule first (latest update, highest value). Keep the cleaned result as a view or CTE rather than deleting source data.",
    realWorld: "A customer table has several versions of each email, and only the latest one should be used in reports.",
    code: `WITH ranked AS (
  SELECT *,
         ROW_NUMBER() OVER (
           PARTITION BY email ORDER BY updated_at DESC
         ) AS rn
  FROM customers
)
SELECT *
FROM ranked
WHERE rn = 1;`,
    output: "One row per email: the most recently updated record.",
    exercise: "Change the rule to keep the oldest record for each email.",
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
  {
    id: "string-functions",
    title: "String functions in SQL",
    theory: "SQL string functions clean and extract text: LOWER and UPPER change case, TRIM removes spaces, SUBSTRING cuts part of a string, SPLIT_PART splits on a delimiter, and LIKE matches simple patterns using % and _. Concatenate with || or CONCAT.",
    why: "Messy names, emails and IDs must be standardized before grouping or joining.",
    when: "Use them in queries and views to clean labels. Function names vary between databases (this example uses PostgreSQL), so check your dialect. Avoid wrapping an indexed column in a function inside WHERE when speed matters.",
    realWorld: "An analyst groups customers by email domain after cleaning inconsistent capitalization and spacing.",
    code: `SELECT
  LOWER(TRIM(name)) AS clean_name,
  SPLIT_PART(email, '@', 2) AS domain
FROM customers
WHERE email LIKE '%@gmail.com';`,
    output: "One row per Gmail customer with a trimmed, lower-case name and the domain gmail.com.",
    exercise: "Count customers per email domain using SPLIT_PART and GROUP BY.",
  },
  {
    id: "anti-join",
    title: "Anti-joins: finding missing records",
    theory: "An anti-join returns rows in one table that have no match in another. The usual pattern is a LEFT JOIN followed by WHERE the right-hand key IS NULL. NOT EXISTS is an alternative.",
    why: "Many business questions are about what is missing: customers who never ordered, products never sold, or records that failed to load.",
    when: "Use it for churn lists, data-quality checks and reconciliation. Prefer NOT EXISTS over NOT IN when the subquery column can contain NULLs.",
    realWorld: "A growth team lists registered customers who have never placed an order.",
    code: `SELECT c.customer_id, c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL;`,
    output: "Customers that have no matching rows in the orders table.",
    exercise: "Rewrite the query with NOT EXISTS and check that both versions return the same customers.",
  },
  {
    id: "rank-top-n",
    title: "RANK and top-N per group",
    theory: "ROW_NUMBER, RANK and DENSE_RANK number rows inside each partition of a window. ROW_NUMBER always gives unique numbers, RANK leaves gaps after ties, and DENSE_RANK does not.",
    why: "Top-N-per-group questions are among the most common analytics and interview queries.",
    when: "Compute the rank in a CTE or subquery, then filter on it in an outer query, because window functions cannot be used directly in WHERE.",
    realWorld: "A category manager finds the top two products by revenue in every category.",
    code: `WITH ranked AS (
  SELECT
    category,
    product,
    SUM(amount) AS revenue,
    RANK() OVER (PARTITION BY category ORDER BY SUM(amount) DESC) AS rnk
  FROM orders
  GROUP BY category, product
)
SELECT category, product, revenue
FROM ranked
WHERE rnk <= 2;`,
    output: "Up to two products per category, highest revenue first. With RANK, ties can return more than two rows.",
    exercise: "Change RANK to ROW_NUMBER and explain how the result changes when two products tie.",
  },
  {
    id: "ntile-first-value",
    title: "NTILE, FIRST_VALUE and percent of total",
    theory: "NTILE(n) splits ordered rows into n equal buckets, such as quartiles. FIRST_VALUE returns the first value in a window. SUM(x) OVER () gives a grand total on every row, so you can calculate each row's share.",
    why: "Customer segments (top 25 percent), comparisons with the best performer and contribution percentages are everyday analytics tasks.",
    when: "Use NTILE for equal-sized segments, FIRST_VALUE to compare against a leader or starting point, and SUM OVER () for percent of total.",
    realWorld: "A retailer finds the top-quartile customers by spend and each customer's share of total revenue.",
    code: `SELECT customer_id,
       total_spend,
       NTILE(4) OVER (ORDER BY total_spend DESC) AS spend_quartile,
       ROUND(100.0 * total_spend / SUM(total_spend) OVER (), 2) AS pct_of_total,
       FIRST_VALUE(total_spend) OVER (ORDER BY total_spend DESC) AS top_spend
FROM customer_spend;`,
    output: "Each customer has a quartile (1 is the highest spenders), a share of total revenue and the highest spend for comparison.",
    exercise: "Select only customers in quartile 1 and calculate how much of total revenue they generate.",
  },
  {
    id: "lag-lead",
    title: "LAG and LEAD for period-over-period change",
    theory: "LAG reads a value from a previous row and LEAD reads from a following row inside an ordered window, so you can compare each row with its neighbour without a self-join.",
    why: "Month-over-month change, time between events and growth rates all depend on comparing consecutive rows.",
    when: "Always include ORDER BY inside OVER, and PARTITION BY when each customer or product needs its own sequence. The first row has no previous value, so LAG returns NULL there.",
    realWorld: "Finance calculates month-over-month revenue change.",
    code: `WITH monthly AS (
  SELECT TO_CHAR(order_date, 'YYYY-MM') AS month, SUM(amount) AS revenue
  FROM orders
  GROUP BY 1
)
SELECT
  month,
  revenue,
  revenue - LAG(revenue) OVER (ORDER BY month) AS change_vs_prev
FROM monthly
ORDER BY month;`,
    output: "One row per month with revenue and the change from the previous month (NULL for the first month).",
    exercise: "Add a percentage-change column: (revenue - previous revenue) / previous revenue.",
  },
  {
    id: "cohort-retention",
    title: "Cohort and retention analysis",
    theory: "Cohort analysis groups customers by when they first did something, such as their first purchase month, and tracks how many are active in later months. Retention is the share of a cohort that is active in a given period.",
    why: "Averages hide whether newer customers behave better or worse than older ones. Cohorts reveal loyalty and the effect of product changes over time.",
    when: "Use for subscriptions, apps and repeat-purchase businesses. Define 'active' clearly and compare cohorts of similar size.",
    realWorld: "A subscription app checks what share of January sign-ups still order in later months.",
    code: `WITH first_order AS (
  SELECT customer_id, DATE_TRUNC('month', MIN(order_date)) AS cohort_month
  FROM orders
  GROUP BY customer_id
),
activity AS (
  SELECT DISTINCT customer_id, DATE_TRUNC('month', order_date) AS active_month
  FROM orders
)
SELECT
  f.cohort_month,
  (EXTRACT(YEAR FROM a.active_month) - EXTRACT(YEAR FROM f.cohort_month)) * 12
    + EXTRACT(MONTH FROM a.active_month) - EXTRACT(MONTH FROM f.cohort_month) AS months_since_first,
  COUNT(DISTINCT a.customer_id) AS active_customers
FROM first_order f
JOIN activity a USING (customer_id)
GROUP BY 1, 2
ORDER BY 1, 2;`,
    output: "One row per cohort and months-since-first-order with the number of active customers. Divide by the month-0 count to get retention.",
    exercise: "Divide each row's active_customers by the cohort's month-0 count to calculate retention percentage.",
  },
  {
    id: "views-transactions",
    title: "Views and transactions",
    theory: "A view is a saved query that behaves like a virtual table. A transaction groups several statements so they either all succeed (COMMIT) or are all undone (ROLLBACK).",
    why: "Views give analysts one trusted definition of a metric, and transactions keep data consistent when several changes belong together.",
    when: "Use views for shared logic such as completed orders. Use transactions for multi-step updates and keep them short so they do not block other users.",
    realWorld: "A BI team builds one completed_orders view that every dashboard queries.",
    code: `CREATE VIEW completed_orders AS
SELECT order_id, customer_id, amount, order_date
FROM orders
WHERE status = 'completed';

BEGIN;
UPDATE orders SET status = 'refunded' WHERE order_id = 1001;
INSERT INTO refunds (order_id, refunded_at) VALUES (1001, CURRENT_DATE);
COMMIT;`,
    output: "The view can be queried like a table. Both changes are saved together at COMMIT; if an error occurs, ROLLBACK undoes them.",
    exercise: "Create a view that returns monthly revenue and query it like a table.",
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
    id: "skewness-kurtosis",
    title: "Skewness and kurtosis: the shape of a distribution",
    theory: "Skewness measures asymmetry. A positive value means a long tail to the right, so the mean is pulled above the median. Kurtosis measures how heavy the tails are: a high value means more extreme values than a normal distribution.",
    why: "Shape tells you whether the mean is a fair summary, whether a transformation is needed and whether outliers are likely.",
    when: "Check skew for money, time and count columns, which are often right-skewed. If the mean is far above the median, report the median or apply a log transform.",
    realWorld: "Most employees earn between ₹20k and 32k, but one salary of ₹150k pulls the mean far above the typical value.",
    code: `import pandas as pd
income = pd.Series([20, 22, 25, 27, 30, 32, 150])
print(round(income.mean(), 1), income.median())
print(round(income.skew(), 2))
print(round(income.kurt(), 2))`,
    output: `43.7 27.0
2.6
6.82`,
    exercise: "Apply np.log() to the series and check how skewness changes.",
  },
  {
    id: "covariance-correlation",
    title: "Covariance and correlation",
    theory: "Covariance shows whether two variables move together, but its size depends on the units. Correlation rescales it to a value between -1 and 1, where 1 is a perfect positive straight-line relationship, 0 is no linear relationship and -1 is a perfect negative one. Pearson measures straight-line patterns and Spearman measures whether the order moves together.",
    why: "Correlation is the quickest way to find features related to a target, and to spot features that duplicate each other.",
    when: "Use Spearman when the relationship is curved or outliers exist. Correlation does not prove cause and effect, and two variables can both be driven by a third hidden factor.",
    realWorld: "A marketing analyst checks whether higher ad spend moves together with sales.",
    code: `import pandas as pd
df = pd.DataFrame({"ad_spend": [10, 20, 30, 40, 50], "sales": [25, 41, 62, 78, 101]})
print(df.cov().round(1))
print(df.corr().round(3))
print(round(df["ad_spend"].corr(df["sales"], method="spearman"), 3))`,
    output: `          ad_spend  sales
ad_spend     250.0  472.5
sales        472.5  896.3
          ad_spend  sales
ad_spend     1.000  0.998
sales        0.998  1.000
1.0`,
    exercise: "Add one extreme outlier to sales and compare Pearson and Spearman correlation.",
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
    id: "expected-value",
    title: "Expected value and risk",
    theory: "The expected value of a random outcome is the average of all possible values, each multiplied by its probability. The standard deviation of the outcomes measures how much the result can vary around that average (the risk).",
    why: "It turns uncertain choices into numbers, for example the average gain from a campaign or the average loss from fraud.",
    when: "Use it to compare options with different payoffs. A higher expected value is not always better if the variation (risk) is too large for the business.",
    realWorld: "A promotion gives no reward to 70 percent of customers, ₹100 to 25 percent and ₹500 to 5 percent. Finance wants the average cost per customer.",
    code: `import numpy as np
values = np.array([0, 100, 500])
probs = np.array([0.70, 0.25, 0.05])
expected = (values * probs).sum()
spread = (((values - expected) ** 2) * probs).sum() ** 0.5
print(expected)
print(round(spread, 1))`,
    output: `50.0
111.8`,
    exercise: "Change the probabilities to 0.6, 0.3 and 0.1 and calculate the new expected cost per customer.",
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
    id: "poisson-distribution",
    title: "Poisson distribution for counts",
    theory: "The Poisson distribution models how many times an event happens in a fixed interval when events occur independently at a steady average rate (mu), such as calls per hour or defects per batch. pmf gives the probability of an exact count and cdf gives the probability of at most that count.",
    why: "Many business metrics are counts, and Poisson tells you what is normal and what is unusually high or low.",
    when: "Use it for rare events counted over time or space. If the variance is much larger than the mean, the data is over-dispersed and Poisson is not a good fit.",
    realWorld: "A support desk gets 4 calls per hour on average and wants to know how likely a very busy hour is.",
    code: `from scipy import stats
print(round(stats.poisson.pmf(3, mu=4), 4))
print(round(stats.poisson.cdf(3, mu=4), 4))
print(round(1 - stats.poisson.cdf(5, mu=4), 4))`,
    output: `0.1954
0.4335
0.2149`,
    exercise: "Find the probability of receiving 0 calls in an hour when the average is 4.",
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
    id: "normality-check",
    title: "Checking normality before choosing a test",
    theory: "Many tests (t-test, ANOVA) assume the data is roughly normal. A Shapiro-Wilk test gives a p-value: a small value (below 0.05) suggests the data is not normal. A histogram or Q-Q plot should always be checked alongside the test.",
    why: "Using a test whose assumptions are broken can give misleading p-values, and large samples make normality tests overly sensitive.",
    when: "Check it for small and medium samples. For large samples, the Central Limit Theorem makes the t-test reasonable. If data is clearly skewed, use a non-parametric test such as Mann-Whitney or a transformation.",
    realWorld: "Before comparing delivery times between two warehouses, an analyst checks if delivery time is roughly normal.",
    code: `import numpy as np
from scipy import stats
rng = np.random.default_rng(1)
normal = rng.normal(50, 5, 200)
skewed = rng.exponential(5, 200)
print(stats.shapiro(normal).pvalue > 0.05)
print(stats.shapiro(skewed).pvalue < 0.05)`,
    output: `True
True`,
    exercise: "Apply np.log1p() to the skewed sample and run the test again. Does it look more normal?",
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
  {
    id: "t-test",
    title: "t-tests for comparing means",
    theory: "A t-test checks whether the means of two groups differ by more than random variation would explain. The independent two-sample test compares separate groups, and the paired test compares the same units before and after.",
    why: "It gives a standard way to judge whether an observed difference between averages is likely to be real.",
    when: "Use it for a numeric outcome with roughly normal or reasonably large samples. Check for strong outliers, and use Welch's version (equal_var=False) when group variances differ.",
    realWorld: "A coach compares sprint times from two training methods.",
    code: `from scipy import stats

method_a = [12.1, 11.8, 12.4, 12.0, 11.9, 12.3]
method_b = [11.5, 11.7, 11.2, 11.6, 11.4, 11.8]
t, p = stats.ttest_ind(method_a, method_b, equal_var=False)
print(round(t, 2), round(p, 4))`,
    output: "4.25 0.0017",
    exercise: "Compare scores before and after training for the same people using stats.ttest_rel.",
  },
  {
    id: "paired-t-test",
    title: "Paired t-test: before and after on the same subjects",
    theory: "A paired t-test compares two measurements taken on the same people or items, such as before and after a change. It analyses the differences within each pair, so it removes the variation between individuals.",
    why: "Using an independent t-test on paired data wastes information and can hide a real effect.",
    when: "Use it when each row in one group has a natural partner in the other. Check that the pairs are correctly matched and that the differences are roughly normal.",
    realWorld: "A call centre measures handling time for the same agents before and after training.",
    code: `from scipy import stats
before = [72, 75, 70, 68, 74, 71]
after = [70, 72, 69, 65, 71, 68]
t, p = stats.ttest_rel(before, after)
print(round(t, 2), round(p, 4))`,
    output: "7.32 0.0007",
    exercise: "Calculate the average difference (before minus after) and report it with the p-value.",
  },
  {
    id: "anova",
    title: "One-way ANOVA: comparing three or more groups",
    theory: "ANOVA tests whether the means of three or more groups are all equal. It compares the variation between group means with the variation inside the groups (the F statistic). A small p-value says at least one group mean is different, but not which one.",
    why: "Running many t-tests between pairs increases the chance of false positives. ANOVA tests all groups with one test.",
    when: "Use it for a numeric outcome across several categories, such as regions or plans. If it is significant, follow up with a post-hoc test (for example Tukey) to find which groups differ.",
    realWorld: "A retailer compares average basket value across three store formats.",
    code: `from scipy import stats
a = [23, 25, 27, 22, 26]
b = [30, 32, 29, 31, 33]
c = [24, 26, 25, 27, 23]
f, p = stats.f_oneway(a, b, c)
print(round(f, 2), p < 0.05)`,
    output: "20.73 True",
    exercise: "Calculate the mean of each group to see which group seems different.",
  },
  {
    id: "chi-square",
    title: "Chi-square test for categorical data",
    theory: "The chi-square test of independence checks whether two categorical variables are associated by comparing observed counts in a contingency table with the counts expected if the variables were unrelated.",
    why: "Many business questions compare categories, such as contract type and churn, rather than averages.",
    when: "Use it with counts (not percentages) and expected counts of at least about 5 per cell. A significant result shows association, not causation.",
    realWorld: "A telecom team tests whether churn differs between monthly and annual contracts.",
    code: `from scipy.stats import chi2_contingency

#            churned, stayed
table = [[30, 170],   # monthly contract
         [10, 190]]   # annual contract
chi2, p, dof, expected = chi2_contingency(table)
print(round(chi2, 2), round(p, 4), dof)`,
    output: "10.03 0.0015 1",
    exercise: "Change the counts so both contract types have a 15% churn rate and see how the p-value changes.",
  },
  {
    id: "effect-size-power",
    title: "Effect size, power and sample size",
    theory: "Effect size measures how large a difference is. Statistical power is the probability of detecting a real effect, and it rises with larger samples and larger effects. Sample-size planning chooses n before the experiment starts.",
    why: "A tiny effect can be significant in a huge sample, and a real effect can be missed in a small one. Planning keeps conclusions realistic.",
    when: "Estimate the sample size before an experiment, and report effect size together with the p-value. Smaller expected lifts need much larger samples.",
    realWorld: "A product team plans how many users each variant needs to detect a rise in conversion from 10% to 12%.",
    code: `from scipy.stats import norm

def sample_size_per_group(p1, p2, alpha=0.05, power=0.8):
    z_alpha = norm.ppf(1 - alpha / 2)
    z_beta = norm.ppf(power)
    variance = p1 * (1 - p1) + p2 * (1 - p2)
    return (z_alpha + z_beta) ** 2 * variance / (p1 - p2) ** 2

print(round(sample_size_per_group(0.10, 0.12)))`,
    output: "3838",
    exercise: "Calculate the sample size needed to detect a rise from 10% to 11% and compare it with the 12% case.",
  },
  {
    id: "multiple-testing",
    title: "Multiple testing and p-hacking",
    theory: "When you run many tests, some will look significant by chance: with 20 independent tests at alpha = 0.05 you expect about one false positive. The Bonferroni correction lowers the threshold for each test to alpha divided by the number of tests.",
    why: "Checking many segments, metrics or variants until something is significant produces false discoveries.",
    when: "Decide the main metric and the number of comparisons before analysing. Apply a correction when testing many hypotheses, and treat exploratory findings as ideas to confirm.",
    realWorld: "An experiment tracks five metrics for one new feature and must avoid celebrating a random winner.",
    code: `p_values = [0.004, 0.030, 0.041, 0.20, 0.65]
alpha = 0.05
adjusted_alpha = alpha / len(p_values)
print(adjusted_alpha)
for p in p_values:
    print(p, "significant" if p < adjusted_alpha else "not significant")`,
    output: `0.01
0.004 significant
0.03 not significant
0.041 not significant
0.2 not significant
0.65 not significant`,
    exercise: "Apply the same idea to 20 tests and calculate the adjusted threshold.",
  },
  {
    id: "bootstrap",
    title: "Bootstrap resampling",
    theory: "Bootstrapping repeatedly resamples the observed data with replacement and recomputes a statistic each time. The spread of those statistics approximates the statistic's uncertainty without strong distribution assumptions.",
    why: "It gives confidence intervals for medians, ratios and other statistics that have no simple formula.",
    when: "Use it when the sample represents the population reasonably well. It cannot repair biased or very small samples.",
    realWorld: "A delivery team estimates a confidence interval for the median delivery time.",
    code: `import numpy as np

rng = np.random.default_rng(42)
times = np.array([22, 25, 31, 28, 40, 27, 24, 35, 29, 26])
medians = [np.median(rng.choice(times, size=len(times), replace=True)) for _ in range(2000)]
low, high = np.percentile(medians, [2.5, 97.5])
print(low, high)`,
    output: "25.0 32.0",
    exercise: "Bootstrap the mean instead of the median and compare the width of the two intervals.",
  },
  {
    id: "mann-whitney",
    title: "Mann-Whitney U test (non-parametric)",
    theory: "The Mann-Whitney U test compares two independent groups using ranks instead of raw values, so it does not assume a normal distribution and is far less affected by outliers.",
    why: "Real data such as incomes, delivery times and session lengths is often skewed or contains extreme values that distort a t-test.",
    when: "Use it for skewed or ordinal data, or small samples with outliers. Report medians alongside the test, and remember it compares overall distributions, not only means.",
    realWorld: "A support team compares resolution times for two shifts when one ticket took unusually long.",
    code: `from scipy.stats import mannwhitneyu

group_a = [120, 135, 128, 150, 900]
group_b = [100, 110, 105, 118, 125]
stat, p = mannwhitneyu(group_a, group_b, alternative="two-sided")
print(stat, round(p, 4))`,
    output: "24.0 0.0159",
    exercise: "Remove the 900 outlier from group_a and compare the Mann-Whitney result with a t-test on the same data.",
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
    id: "rate-by-segment",
    title: "Rate by segment: analysing a target column",
    theory: "When the target is 0/1 (churned or not, bought or not), the mean of the column is the rate. Grouping by a feature and taking the mean shows which segments have a higher or lower rate, together with the number of customers in each segment.",
    why: "It is the fastest way to find which features relate to the target before building any model.",
    when: "Always show the count next to the rate, because a high rate on a very small group is not reliable. Use bins for numeric features.",
    realWorld: "A subscription business compares churn rate between Basic and Pro plans.",
    code: `import pandas as pd
d = pd.DataFrame({
    "plan": ["Basic", "Basic", "Basic", "Pro", "Pro", "Pro", "Pro", "Basic"],
    "churned": [1, 1, 0, 0, 0, 1, 0, 1],
})
print(d.groupby("plan")["churned"].agg(customers="count", churn_rate="mean"))`,
    output: `       customers  churn_rate
plan                        
Basic          4        0.75
Pro            4        0.25`,
    exercise: "Group by two columns (plan and city) and find the segment with the highest churn rate and at least 30 customers.",
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
    id: "outlier-zscore",
    title: "Detecting outliers with z-scores",
    theory: "A z-score tells how many standard deviations a value is from the mean. Values with an absolute z-score above 3 (sometimes 2.5) are commonly flagged as outliers. It works best for roughly bell-shaped data.",
    why: "It gives a second, simple outlier rule that you can compare with the IQR rule, and it works across columns with different units.",
    when: "Use z-scores for roughly normal data and the IQR rule for skewed data. An extreme value inflates the mean and standard deviation, so check the result visually. Investigate before deleting: an outlier can be a real, important event.",
    realWorld: "A quality team flags a sensor reading of 120 when readings are normally close to 50.",
    code: `import pandas as pd
s = pd.Series([50, 52, 48, 51, 49, 50, 53, 47, 51, 50, 52, 49, 120])
z = (s - s.mean()) / s.std()
print(z.round(2).tail(3).tolist())
print(s[z.abs() > 3].tolist())`,
    output: `[-0.18, -0.34, 3.32]
[120]`,
    exercise: "Use a threshold of 2 instead of 3 and compare how many values are flagged.",
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
    id: "boxplot-violin-groups",
    title: "Comparing a number across categories: box and violin plots",
    theory: "A box plot shows the median, quartiles and outliers of a numeric column for each category. A violin plot adds the shape of the distribution. Both let you compare groups at a glance.",
    why: "Averages alone hide spread and outliers. Two groups can have the same mean but very different variation.",
    when: "Use them for a numeric column split by a category such as region or plan. Sort categories sensibly, label axes, and use a log scale for strongly skewed money values.",
    realWorld: "An analyst compares delivery times across warehouses to see which one is slow and inconsistent.",
    code: `import seaborn as sns
import matplotlib.pyplot as plt

sns.boxplot(data=df, x="warehouse", y="delivery_days")
plt.title("Delivery time by warehouse")
plt.show()

sns.violinplot(data=df, x="warehouse", y="delivery_days")
plt.show()`,
    output: "A box (median and quartiles) and a violin shape for each warehouse. A wide box or tall violin means inconsistent delivery times.",
    exercise: "Plot revenue by region with a box plot and explain which region has the widest spread.",
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
  {
    id: "duplicates",
    title: "Finding and handling duplicates",
    theory: "Duplicates are repeated rows or repeated values in a column that should be unique. Pandas duplicated() flags them and drop_duplicates() removes them, optionally by a subset of columns.",
    why: "Duplicate records inflate counts and revenue, and they bias averages and model training.",
    when: "Decide what makes a record unique (for example order_id) before dropping anything. Inspect duplicates first, because repeated rows are sometimes valid events.",
    realWorld: "A data import ran twice, so some orders appear two times in the sales table.",
    code: `import pandas as pd

df = pd.DataFrame({
    "order_id": [101, 102, 102, 103],
    "customer": ["A", "B", "B", "C"],
    "amount": [250, 400, 400, 150],
})
print(df.duplicated().sum())
print(df.duplicated(subset="order_id", keep=False).sum())
clean = df.drop_duplicates(subset="order_id", keep="first")
print(len(clean))`,
    output: `1
2
3`,
    exercise: "Create a table where the same order_id has two different amounts and decide which row to keep.",
  },
  {
    id: "dtype-conversion",
    title: "Fixing data types",
    theory: "Columns often load with the wrong type, such as numbers stored as text or dates stored as strings. to_numeric(), to_datetime() and astype() convert them, and errors='coerce' turns invalid values into missing values.",
    why: "Wrong types block calculations, sorting and date logic, and they hide data-quality problems.",
    when: "Convert types right after loading, and count the values that failed to convert so you can investigate them instead of silently losing them.",
    realWorld: "A price column arrives as text with commas and an 'n/a' entry.",
    code: `import pandas as pd

df = pd.DataFrame({
    "price": ["1,200", "850", "n/a"],
    "date": ["2026-01-05", "2026-02-10", "bad-date"],
    "segment": ["A", "B", "A"],
})
df["price"] = pd.to_numeric(df["price"].str.replace(",", ""), errors="coerce")
df["date"] = pd.to_datetime(df["date"], errors="coerce")
df["segment"] = df["segment"].astype("category")
print(df["price"].tolist())
print(df["date"].isna().sum())
print(df["segment"].cat.categories.tolist())`,
    output: `[1200.0, 850.0, nan]
1
['A', 'B']`,
    exercise: "Add a column of percentages stored as '12%' and convert it to the number 0.12.",
  },
  {
    id: "binning",
    title: "Binning with cut and qcut",
    theory: "Binning turns a numeric column into groups. pd.cut() uses bin edges that you choose, while pd.qcut() creates bins with roughly equal numbers of rows (quantiles).",
    why: "Groups such as age bands or spend tiers are easier to explain and compare than raw numbers, and they can reveal non-linear patterns.",
    when: "Use cut for meaningful business thresholds and qcut for balanced groups. Binning discards detail, so keep the original column too.",
    realWorld: "A marketing team groups customers into age bands before comparing campaign response.",
    code: `import pandas as pd

ages = pd.Series([19, 25, 33, 41, 58, 67])
groups = pd.cut(ages, bins=[0, 25, 40, 60, 100], labels=["<=25", "26-40", "41-60", "60+"])
tiers = pd.qcut(ages, q=3, labels=["low", "mid", "high"])
print(groups.tolist())
print(tiers.tolist())`,
    output: `['<=25', '<=25', '26-40', '41-60', '41-60', '60+']
['low', 'low', 'mid', 'mid', 'high', 'high']`,
    exercise: "Create spend tiers (low, medium, high) for a list of customer spends using qcut.",
  },
  {
    id: "crosstab",
    title: "Crosstabs and categorical relationships",
    theory: "A crosstab counts how often combinations of two categorical variables occur. Normalizing by row turns the counts into rates within each group.",
    why: "Crosstabs are a quick, readable way to see whether a category such as plan type is related to an outcome such as churn.",
    when: "Use normalize='index' to compare rates between groups, and always look at the raw counts too, because small groups give unstable rates.",
    realWorld: "A product manager compares churn between Basic and Pro plans.",
    code: `import pandas as pd

df = pd.DataFrame({
    "plan": ["Basic", "Basic", "Pro", "Pro", "Pro", "Basic"],
    "churned": ["Yes", "No", "No", "No", "Yes", "Yes"],
})
print(pd.crosstab(df["plan"], df["churned"]))
print(pd.crosstab(df["plan"], df["churned"], normalize="index").round(2))`,
    output: `churned  No  Yes
plan
Basic     1    2
Pro       2    1
churned    No   Yes
plan
Basic    0.33  0.67
Pro      0.67  0.33`,
    exercise: "Add a third column (region) and build a crosstab of region against churn.",
  },
  {
    id: "simpsons-paradox",
    title: "Simpson's paradox and aggregation traps",
    theory: "Simpson's paradox happens when a trend that appears in every subgroup reverses once the groups are combined. It is caused by uneven group sizes mixing with a hidden variable.",
    why: "Overall averages can point to the opposite conclusion from the segment-level truth, leading to wrong decisions.",
    when: "Break results down by important segments before trusting a single overall number, and ask which hidden variable might explain the difference.",
    realWorld: "Treatment A has the higher success rate for both small and large cases, yet B looks better overall because A handled more of the hard cases.",
    code: `import pandas as pd

df = pd.DataFrame({
    "treatment": ["A", "A", "B", "B"],
    "case": ["small", "large", "small", "large"],
    "success": [81, 192, 234, 55],
    "total": [87, 263, 270, 80],
})
df["rate"] = (df["success"] / df["total"]).round(2)
print(df[["treatment", "case", "rate"]])
overall = df.groupby("treatment")[["success", "total"]].sum()
print((overall["success"] / overall["total"]).round(2).to_dict())`,
    output: `  treatment   case  rate
0         A  small  0.93
1         A  large  0.73
2         B  small  0.87
3         B  large  0.69
{'A': 0.78, 'B': 0.83}`,
    exercise: "Describe a business example where an overall conversion rate could mislead because of traffic-source mix.",
  },
  {
    id: "matplotlib-subplots",
    title: "Matplotlib subplots and labelling",
    theory: "Matplotlib can place several charts in one figure with plt.subplots(). Each chart (axes) gets its own title, axis labels and style, and tight_layout() prevents overlapping text.",
    why: "Side-by-side charts let you compare metrics in one view, and clear labels make a chart understandable without explanation.",
    when: "Use one chart per message, label axes and units, and choose chart types that fit the data: lines for trends, bars for category comparisons.",
    realWorld: "An analyst shows revenue trend and order count side by side in a weekly report.",
    code: `import matplotlib.pyplot as plt
import pandas as pd

df = pd.DataFrame({
    "month": ["Jan", "Feb", "Mar", "Apr"],
    "revenue": [120, 150, 140, 180],
    "orders": [30, 38, 35, 46],
})
fig, axes = plt.subplots(1, 2, figsize=(9, 3))
axes[0].plot(df["month"], df["revenue"], marker="o")
axes[0].set_title("Revenue (₹ thousand)")
axes[1].bar(df["month"], df["orders"], color="#6c5ce7")
axes[1].set_title("Orders")
fig.tight_layout()
plt.show()`,
    output: "A figure with a revenue line chart on the left and an orders bar chart on the right.",
    exercise: "Add axis labels and a third chart showing average order value (revenue divided by orders).",
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
  {
    id: "cyclical-encoding",
    title: "Cyclical features with sine and cosine",
    theory: "Cyclical values such as hour of day or month wrap around, so 23:00 is close to 00:00. Encoding them as sine and cosine of the angle places them on a circle and keeps neighbouring values close together.",
    why: "Plain numbers make models think hour 23 is far from hour 0, which hides daily and seasonal patterns.",
    when: "Use for hour, weekday, month or compass direction. Keep both the sine and cosine columns, because one alone is ambiguous.",
    realWorld: "A food-delivery model predicts demand using the hour of the day.",
    code: `import numpy as np
import pandas as pd

hours = pd.Series([0, 6, 12, 18, 23])
sin_h = np.sin(2 * np.pi * hours / 24)
cos_h = np.cos(2 * np.pi * hours / 24)
print(pd.DataFrame({"hour": hours, "sin": sin_h.round(2), "cos": cos_h.round(2)}))`,
    output: `   hour   sin   cos
0     0  0.00  1.00
1     6  1.00  0.00
2    12  0.00 -1.00
3    18 -1.00 -0.00
4    23 -0.26  0.97`,
    exercise: "Encode month numbers 1 to 12 with sine and cosine and compare December with January.",
  },
  {
    id: "rfm-features",
    title: "RFM and customer aggregate features",
    theory: "RFM summarizes each customer with Recency (days since the last purchase), Frequency (number of purchases) and Monetary value (total spend). Aggregating raw transactions into one row per customer is a common feature-engineering step.",
    why: "Models and segmentation need one row per entity, and behaviour summaries are often more predictive than raw transactions.",
    when: "Choose a fixed snapshot date so recency is calculated consistently, and compute features only from data available before the prediction time to avoid leakage.",
    realWorld: "A retailer groups customers into loyal, new and at-risk segments.",
    code: `import pandas as pd

orders = pd.DataFrame({
    "customer": ["A", "A", "B", "C", "C", "C"],
    "date": pd.to_datetime(["2026-01-05", "2026-03-01", "2026-02-10",
                            "2026-01-20", "2026-02-25", "2026-03-15"]),
    "amount": [200, 300, 150, 100, 120, 80],
})
snapshot = pd.Timestamp("2026-04-01")
rfm = orders.groupby("customer").agg(
    recency=("date", lambda d: (snapshot - d.max()).days),
    frequency=("date", "count"),
    monetary=("amount", "sum"),
)
print(rfm)`,
    output: `          recency  frequency  monetary
customer
A              31          2       500
B              50          1       150
C              17          3       300`,
    exercise: "Add an average_order_value column to the RFM table.",
  },
  {
    id: "missing-indicator",
    title: "Missing-value indicator features",
    theory: "Sometimes the fact that a value is missing carries information. A missing-indicator column records 1 when the original value was missing, and it can be added alongside imputation.",
    why: "Imputation hides missingness, yet 'income not provided' may itself predict behaviour.",
    when: "Add indicators when missingness may be meaningful, and avoid them when almost every row is missing or when they would leak the target.",
    realWorld: "A credit model imputes missing income but also keeps a flag showing it was not provided.",
    code: `import numpy as np
from sklearn.impute import SimpleImputer

np.set_printoptions(suppress=True)
X = np.array([[25, 50000], [np.nan, 62000], [31, np.nan]])
imp = SimpleImputer(strategy="median", add_indicator=True)
print(imp.fit_transform(X))`,
    output: `[[   25. 50000.     0.     0.]
 [   28. 62000.     1.     0.]
 [   31. 56000.     0.     1.]]`,
    exercise: "Run the same code on data with no missing values and observe which indicator columns are created.",
  },
  {
    id: "frequency-encoding",
    title: "Frequency encoding for high-cardinality categories",
    theory: "Frequency encoding replaces each category with how often it appears. It turns a column with many unique values into one numeric feature without creating hundreds of dummy columns.",
    why: "One-hot encoding a column with thousands of categories (such as pincode or product ID) creates very wide, sparse data.",
    when: "Learn the frequencies from the training set only, and decide how to handle unseen categories (for example a frequency of 0). Different categories can share the same frequency.",
    realWorld: "A model uses pincode as an input, but there are thousands of different pincodes.",
    code: `import pandas as pd

df = pd.DataFrame({"city": ["Hyd", "Hyd", "Hyd", "Kadapa", "Chennai", "Chennai"]})
freq = df["city"].value_counts(normalize=True)
df["city_freq"] = df["city"].map(freq).round(2)
print(df)`,
    output: `      city  city_freq
0      Hyd       0.50
1      Hyd       0.50
2      Hyd       0.50
3   Kadapa       0.17
4  Chennai       0.33
5  Chennai       0.33`,
    exercise: "Fit the frequency map on a train set and apply it to a test set containing a city that was not in train.",
  },
  {
    id: "target-encoding",
    title: "Target encoding and leakage",
    theory: "Target encoding replaces a category with the average target value for that category. It is powerful for high-cardinality columns, but it uses the answer, so it must be computed only from training data.",
    why: "Encoding with the target calculated on all rows leaks the answer into the features and gives unrealistically good validation scores.",
    when: "Learn the encoding on the training split only, fall back to the global mean for unseen or rare categories, and prefer cross-fitted or smoothed versions (such as scikit-learn's TargetEncoder).",
    realWorld: "An e-commerce model encodes product category using the historical purchase rate.",
    code: `import pandas as pd

train = pd.DataFrame({"city": ["A", "A", "B", "B", "B"], "bought": [1, 0, 1, 1, 0]})
test = pd.DataFrame({"city": ["A", "B", "C"]})
means = train.groupby("city")["bought"].mean()
global_mean = train["bought"].mean()
test["city_te"] = test["city"].map(means).fillna(global_mean).round(2)
print(test)`,
    output: `  city  city_te
0    A     0.50
1    B     0.67
2    C     0.60`,
    exercise: "Explain what would go wrong if the means were calculated on train and test together.",
  },
  {
    id: "permutation-importance",
    title: "Permutation feature importance",
    theory: "Permutation importance measures how much a model's score drops when one feature's values are randomly shuffled. A large drop means the model relies on that feature.",
    why: "It is model-agnostic and measured on held-out data, so it is more trustworthy than built-in importances for judging what a model really uses.",
    when: "Calculate it on a validation or test set. Correlated features can share importance, and importance does not prove a causal effect.",
    realWorld: "A team checks which inputs a churn model depends on before presenting it.",
    code: `from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.inspection import permutation_importance
from sklearn.model_selection import train_test_split

X, y = load_iris(return_X_y=True)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.3, random_state=0, stratify=y)
model = RandomForestClassifier(n_estimators=50, random_state=0).fit(X_tr, y_tr)
result = permutation_importance(model, X_te, y_te, n_repeats=10, random_state=0)
print(result.importances_mean.round(2) + 0.0)`,
    output: "[0.   0.   0.18 0.25]",
    exercise: "Add a column of random noise as an extra feature and check that its importance is close to zero.",
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
    id: "decision-tree-splits",
    title: "How a decision tree splits: depth, Gini and rules",
    theory: "A decision tree repeatedly asks a yes/no question on one feature to separate the classes. Each split is chosen to make the groups as pure as possible, measured by Gini impurity or entropy. max_depth limits how many questions are asked, which controls overfitting. The fitted tree can be printed as readable rules.",
    why: "Trees are easy to explain to business users, and the printed rules show which features and thresholds matter.",
    when: "Use a shallow tree for explanation and a random forest or boosting for accuracy. An unlimited depth tree memorises the training data.",
    realWorld: "A team explains to managers why a customer is predicted to churn, using three simple rules.",
    code: `from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier, export_text

iris = load_iris()
tree = DecisionTreeClassifier(max_depth=2, criterion="gini", random_state=0)
tree.fit(iris.data, iris.target)
print(export_text(tree, feature_names=list(iris.feature_names)))
print(round(tree.score(iris.data, iris.target), 3))`,
    output: `|--- petal width (cm) <= 0.80
|   |--- class: 0
|--- petal width (cm) >  0.80
|   |--- petal width (cm) <= 1.75
|   |   |--- class: 1
|   |--- petal width (cm) >  1.75
|   |   |--- class: 2

0.96`,
    exercise: "Change max_depth to 1 and 4 and compare training accuracy and the printed rules.",
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
    id: "stratified-kfold",
    title: "Stratified k-fold cross-validation",
    theory: "Stratified k-fold splits the data into k folds while keeping the same class proportions in every fold. Each fold is used once as the test set, and the scores are averaged.",
    why: "With imbalanced classes, a normal random split can leave a fold with almost no positive cases, which makes scores unstable.",
    when: "Use it for classification, especially with imbalanced classes. Pick a metric that fits the problem, such as F1 or recall, rather than accuracy. Fit preprocessing inside a Pipeline so each fold stays leak-free.",
    realWorld: "A fraud model has about 10 percent positive cases, and every validation fold must contain a similar share.",
    code: `import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import StratifiedKFold, cross_val_score
from sklearn.linear_model import LogisticRegression

X, y = make_classification(n_samples=300, weights=[0.9, 0.1], random_state=42)
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
print([round(float(y[test].mean()), 2) for _, test in skf.split(X, y)])
scores = cross_val_score(LogisticRegression(max_iter=1000), X, y, cv=skf, scoring="f1")
print(scores.round(2), round(scores.mean(), 2))`,
    output: `[0.1, 0.1, 0.1, 0.1, 0.12]
[0.44 0.62 0.83 0.8  0.92] 0.73`,
    exercise: "Run the same code with a plain KFold and compare the positive share in each fold.",
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
  {
    id: "ridge-lasso",
    title: "Regularization: Ridge and Lasso",
    theory: "Regularization adds a penalty on large coefficients to reduce overfitting. Ridge shrinks all coefficients toward zero, while Lasso can shrink some exactly to zero, which performs feature selection.",
    why: "Models with many or correlated features can fit noise, and regularization makes them simpler and more stable on new data.",
    when: "Scale features first, tune the penalty strength (alpha) with cross-validation, and use Lasso when you want a sparse model.",
    realWorld: "A pricing model with dozens of correlated inputs needs stable, explainable coefficients.",
    code: `import numpy as np
from sklearn.linear_model import Lasso, LinearRegression, Ridge

rng = np.random.default_rng(0)
X = rng.normal(size=(50, 5))
y = 3 * X[:, 0] + rng.normal(scale=0.5, size=50)
for model in (LinearRegression(), Ridge(alpha=5), Lasso(alpha=0.2)):
    model.fit(X, y)
    print(type(model).__name__, model.coef_.round(2))`,
    output: `LinearRegression [ 2.94  0.03 -0.03 -0.07  0.04]
Ridge [ 2.5   0.09 -0.02 -0.12  0.08]
Lasso [ 2.64  0.   -0.   -0.    0.  ]`,
    exercise: "Increase Lasso's alpha and observe how many coefficients become exactly zero.",
  },
  {
    id: "svm",
    title: "Support vector machines",
    theory: "A support vector machine finds the boundary that separates classes with the widest margin. With a kernel such as RBF it can learn non-linear boundaries. C controls how strictly it fits the training points.",
    why: "SVMs are strong on small to medium datasets with many features, such as text or biological data.",
    when: "Always scale features first. Training becomes slow on very large datasets, and outputs are not probabilities unless you enable them.",
    realWorld: "A lab classifies tumour measurements as benign or malignant.",
    code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC

X, y = load_breast_cancer(return_X_y=True)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
model = make_pipeline(StandardScaler(), SVC(kernel="rbf", C=1.0)).fit(X_tr, y_tr)
print(round(model.score(X_te, y_te), 3))`,
    output: "0.982",
    exercise: "Remove StandardScaler from the pipeline and compare the accuracy.",
  },
  {
    id: "naive-bayes",
    title: "Naive Bayes classifier",
    theory: "Naive Bayes applies Bayes' theorem and assumes features are independent given the class. Multinomial Naive Bayes works well with word counts and is very fast to train.",
    why: "It is a simple, strong baseline for text classification such as spam detection, and it works with little data.",
    when: "Use it as a quick baseline for text. The independence assumption is rarely true, so probabilities can be poorly calibrated even when predictions are good.",
    realWorld: "An email system separates spam from normal messages.",
    code: `from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

texts = ["win cash now", "free prize win", "meeting at noon", "project update attached"]
labels = ["spam", "spam", "ham", "ham"]
vec = CountVectorizer()
model = MultinomialNB().fit(vec.fit_transform(texts), labels)
print(model.predict(vec.transform(["free cash prize", "update meeting"])))`,
    output: "['spam' 'ham']",
    exercise: "Add two more spam and two more ham messages and test a message that mixes both vocabularies.",
  },
  {
    id: "roc-auc",
    title: "ROC curve and AUC",
    theory: "The ROC curve plots the true positive rate against the false positive rate across all classification thresholds. AUC is the area under that curve, and it equals the probability that a random positive is scored higher than a random negative.",
    why: "AUC measures how well a model ranks positives above negatives without choosing a threshold.",
    when: "Use for comparing models on balanced or moderately imbalanced data. For rare positives, also inspect the precision-recall curve, because AUC can look optimistic.",
    realWorld: "A bank compares two fraud models by their ability to rank risky transactions first.",
    code: `from sklearn.metrics import roc_auc_score

y_true = [0, 0, 1, 1, 1, 0]
scores = [0.1, 0.4, 0.35, 0.8, 0.7, 0.2]
print(round(roc_auc_score(y_true, scores), 3))`,
    output: "0.889",
    exercise: "Change one positive's score to 0.05 and calculate how much the AUC drops.",
  },
  {
    id: "multiclass-metrics",
    title: "Metrics for more than two classes: macro and weighted F1",
    theory: "For multi-class problems, precision, recall and F1 are calculated per class and then averaged. Macro average gives every class equal weight. Weighted average weights each class by how many samples it has. Accuracy alone can hide poor performance on small classes.",
    why: "A model can score well overall while failing on the rare class that matters most.",
    when: "Report macro F1 when every class matters equally and weighted F1 when class frequency matters. Always look at the per-class report too.",
    realWorld: "A support-ticket model classifies tickets as billing, technical or other, and the small 'technical' class matters most.",
    code: `from sklearn.metrics import f1_score
y_true = [0, 0, 0, 0, 0, 0, 1, 1, 2, 2]
y_pred = [0, 0, 0, 0, 0, 1, 1, 1, 2, 0]
print(round(f1_score(y_true, y_pred, average="macro"), 3))
print(round(f1_score(y_true, y_pred, average="weighted"), 3))`,
    output: `0.767
0.793`,
    exercise: "Print classification_report(y_true, y_pred) and find the class with the lowest recall.",
  },
  {
    id: "threshold-tuning",
    title: "Choosing a classification threshold",
    theory: "Classifiers output probabilities, and a threshold turns them into labels. Raising the threshold usually increases precision and lowers recall, and lowering it does the opposite.",
    why: "The default 0.5 is rarely the best choice, because missing a fraud case and flagging a good customer have different costs.",
    when: "Choose the threshold on validation data using the business cost of each error type, then confirm on a separate test set.",
    realWorld: "A hospital screening model lowers its threshold so that fewer sick patients are missed.",
    code: `import numpy as np
from sklearn.metrics import precision_score, recall_score

y_true = np.array([0, 0, 1, 1, 1, 0, 1, 0])
prob = np.array([0.2, 0.55, 0.45, 0.9, 0.6, 0.1, 0.35, 0.3])
for t in (0.3, 0.5, 0.7):
    pred = (prob >= t).astype(int)
    print(t, round(precision_score(y_true, pred), 2), round(recall_score(y_true, pred), 2))`,
    output: `0.3 0.67 1.0
0.5 0.67 0.5
0.7 1.0 0.25`,
    exercise: "Find the highest threshold that still gives a recall of at least 0.75.",
  },
  {
    id: "silhouette-score",
    title: "Choosing k with the silhouette score",
    theory: "The silhouette score measures how close each point is to its own cluster compared with the nearest other cluster. It ranges from -1 to 1, and higher values mean clearer, better-separated clusters.",
    why: "K-means needs you to choose the number of clusters, and the silhouette score gives an objective way to compare options.",
    when: "Compare several values of k, and combine the score with business meaning, since the numerically best k may not be the most useful segmentation.",
    realWorld: "A marketing team tests 2 to 5 customer segments before choosing one.",
    code: `from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
from sklearn.metrics import silhouette_score

X, _ = make_blobs(n_samples=300, centers=3, cluster_std=1.0, random_state=42)
for k in (2, 3, 4, 5):
    labels = KMeans(n_clusters=k, n_init=10, random_state=42).fit_predict(X)
    print(k, round(silhouette_score(X, labels), 3))`,
    output: `2 0.705
3 0.848
4 0.664
5 0.49`,
    exercise: "Generate data with 4 centers and check whether the best silhouette score moves to k = 4.",
  },
  {
    id: "dbscan-clustering",
    title: "Density-based clustering with DBSCAN",
    theory: "DBSCAN groups points that are close together and labels isolated points as noise (-1). It needs two settings: eps (how close points must be) and min_samples (how many neighbours make a dense area). It does not need the number of clusters in advance.",
    why: "K-means forces every point into a cluster and assumes round clusters. DBSCAN finds clusters of any shape and separates outliers.",
    when: "Scale features first, because eps is a distance. Tune eps and min_samples by looking at results. Use it for geographic points, anomaly detection and irregular shapes.",
    realWorld: "A delivery company groups order locations into dense zones and flags isolated orders.",
    code: `import numpy as np
from sklearn.cluster import DBSCAN

pts = np.array([[1, 1], [1.2, 1.1], [0.9, 1.0],
                [5, 5], [5.1, 5.2], [4.9, 5.0],
                [10, 0]])
labels = DBSCAN(eps=0.5, min_samples=2).fit_predict(pts)
print(labels)`,
    output: "[ 0  0  0  1  1  1 -1]",
    exercise: "Increase eps to 8 and observe how clusters merge.",
  },
  {
    id: "isolation-forest",
    title: "Anomaly detection with Isolation Forest",
    theory: "Isolation Forest isolates observations by randomly splitting features. Unusual points are separated in fewer splits, so they receive anomaly labels. predict() returns -1 for anomalies and 1 for normal points.",
    why: "Fraud, equipment faults and data errors are rare and often unlabeled, so unsupervised detection is useful.",
    when: "Set contamination to the expected share of anomalies, review flagged records manually, and remember that an anomaly is unusual, not necessarily wrong.",
    realWorld: "A finance team flags unusually large or small transactions for review.",
    code: `import numpy as np
from sklearn.ensemble import IsolationForest

rng = np.random.default_rng(1)
normal = rng.normal(loc=100, scale=10, size=(200, 1))
X = np.vstack([normal, [[300], [5]]])
model = IsolationForest(contamination=0.01, random_state=1).fit(X)
labels = model.predict(X)
print(int((labels == -1).sum()), X[labels == -1].ravel().round(1))`,
    output: "3 [128.7 300.    5. ]",
    exercise: "Change contamination to 0.05 and describe what kinds of points are now flagged.",
  },
  {
    id: "recommender-basics",
    title: "Recommendation basics: user similarity",
    theory: "Collaborative filtering recommends items liked by similar users. Build a user-by-item ratings table, measure how similar users are with cosine similarity, and suggest items that similar users rated highly and the target user has not seen.",
    why: "Recommenders drive sales and engagement for shops, video and music apps, and are a popular data science project.",
    when: "Use it when you have many users and interaction history. New users and new items have no history (the cold-start problem), so combine it with popular-item or content-based rules.",
    realWorld: "A streaming app finds users with similar taste to Asha and suggests what they liked.",
    code: `import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

ratings = pd.DataFrame(
    {"Asha": [5, 4, 0, 1], "Ravi": [4, 5, 1, 0], "Meena": [1, 0, 5, 4]},
    index=["Movie1", "Movie2", "Movie3", "Movie4"],
).T
sim = pd.DataFrame(cosine_similarity(ratings), index=ratings.index, columns=ratings.index)
print(sim.round(2))`,
    output: `       Asha  Ravi  Meena
Asha   1.00  0.95   0.21
Ravi   0.95  1.00   0.21
Meena  0.21  0.21   1.00`,
    exercise: "Find the user most similar to Meena and list the movies that user rated 4 or above.",
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
    id: "ts-stationarity-adf",
    title: "Stationarity and the ADF test",
    theory: "A stationary series has a stable mean and variance over time. Many forecasting models (ARIMA) need stationarity. The Augmented Dickey-Fuller (ADF) test has a null hypothesis that the series is not stationary, so a small p-value (below 0.05) suggests stationarity. Differencing often makes a trending series stationary.",
    why: "Fitting models to a trending series gives misleading relationships and poor forecasts.",
    when: "Plot the series first and use the test as supporting evidence. Difference once if there is a trend, and avoid over-differencing.",
    realWorld: "A demand planner checks whether daily sales need differencing before using ARIMA.",
    code: `import numpy as np
import pandas as pd
from statsmodels.tsa.stattools import adfuller

rng = np.random.default_rng(0)
idx = pd.date_range("2024-01-01", periods=120, freq="D")
walk = pd.Series(np.cumsum(rng.normal(0, 1, 120)) + 50, index=idx)
print("level:", round(adfuller(walk)[1], 3))
print("differenced:", round(adfuller(walk.diff().dropna())[1], 4))`,
    output: `level: 0.821
differenced: 0.0`,
    exercise: "Run the test on a series made of a straight line plus noise and explain the p-value.",
  },
  {
    id: "ts-acf",
    title: "Autocorrelation (ACF) to find patterns and seasonality",
    theory: "Autocorrelation measures how strongly a series is related to its own past values at a given lag. A spike at lag 7 in daily data points to weekly seasonality. A slowly decaying ACF suggests a trend.",
    why: "It tells you which lags are useful features and what seasonal period to model.",
    when: "Compute it on a stationary or detrended series. Use lags with high autocorrelation as features for machine learning forecasts.",
    realWorld: "A planner finds that sales repeat every 4 periods, so quarterly seasonality is present.",
    code: `import numpy as np
import pandas as pd
from statsmodels.tsa.stattools import acf

rng = np.random.default_rng(0)
idx = pd.date_range("2024-01-01", periods=120, freq="D")
season = pd.Series(10 + np.tile([0, 2, 4, 2], 30) + rng.normal(0, 0.3, 120), index=idx)
print(acf(season, nlags=4).round(2))`,
    output: "[ 1.    0.   -0.94 -0.    0.93]",
    exercise: "Change the repeating pattern to a length of 7 and find the lag with the highest autocorrelation.",
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
  {
    id: "ts-missing-dates",
    title: "Missing dates and gaps in time series",
    theory: "A time series can have missing timestamps as well as missing values. asfreq() inserts the missing dates at a fixed frequency, and interpolate() or fillna() can estimate the gaps.",
    why: "Models and rolling calculations assume regular spacing, and hidden gaps distort trends and lag features.",
    when: "Make the index regular first, then choose a fill method that matches the data: interpolate for smooth measurements, zero for 'no sales', and leave missing when filling would be misleading.",
    realWorld: "A store's sensor did not report on two days, and the daily series has gaps.",
    code: `import pandas as pd

s = pd.Series([10, 12, 15],
              index=pd.to_datetime(["2026-01-01", "2026-01-02", "2026-01-05"]))
full = s.asfreq("D")
print(full)
print(full.interpolate())`,
    output: `2026-01-01    10.0
2026-01-02    12.0
2026-01-03     NaN
2026-01-04     NaN
2026-01-05    15.0
Freq: D, dtype: float64
2026-01-01    10.0
2026-01-02    12.0
2026-01-03    13.0
2026-01-04    14.0
2026-01-05    15.0
Freq: D, dtype: float64`,
    exercise: "Fill the missing days with 0 instead of interpolating and explain when each choice is appropriate.",
  },
  {
    id: "ts-differencing",
    title: "Differencing and percentage change",
    theory: "Differencing subtracts the previous value from each value, which removes a steady trend. pct_change() expresses the change as a proportion. A series with a stable mean and variance over time is called stationary.",
    why: "Many forecasting methods work better on stationary data, and changes are often easier to interpret than levels.",
    when: "Use diff() to remove trend and a seasonal lag (such as 7 for weekly patterns) to remove seasonality. Remember to reverse the differencing when you convert forecasts back.",
    realWorld: "A finance analyst studies daily growth in sales instead of the sales level.",
    code: `import pandas as pd

sales = pd.Series([100, 110, 125, 140, 160, 185])
print(sales.diff().dropna().tolist())
print(sales.pct_change().dropna().round(3).tolist())`,
    output: `[10.0, 15.0, 15.0, 20.0, 25.0]
[0.1, 0.136, 0.12, 0.143, 0.156]`,
    exercise: "Apply diff(7) to a daily series with weekly seasonality and describe what remains.",
  },
  {
    id: "ts-exponential-smoothing",
    title: "Exponential smoothing",
    theory: "Exponential smoothing averages past values but gives more weight to recent ones. The smoothing factor alpha (0 to 1) controls how quickly old values fade: higher alpha reacts faster.",
    why: "It is a simple, strong baseline for noisy series and gives a smooth estimate of the current level.",
    when: "Use ewm() for smoothing and short-term baselines. Pick alpha with validation data, and use methods with trend and seasonal terms when those patterns are strong.",
    realWorld: "A supply-chain team smooths daily demand before setting stock levels.",
    code: `import pandas as pd

demand = pd.Series([100, 120, 110, 130, 125, 140])
smooth = demand.ewm(alpha=0.5, adjust=False).mean()
print(smooth.round(1).tolist())
print(round(smooth.iloc[-1], 1))`,
    output: `[100.0, 110.0, 110.0, 120.0, 122.5, 131.2]
131.2`,
    exercise: "Try alpha = 0.2 and alpha = 0.8 and compare how closely each follows the latest values.",
  },
  {
    id: "ts-forecast-metrics",
    title: "Forecast accuracy: MAE, RMSE and MAPE",
    theory: "MAE is the average absolute error, RMSE squares errors before averaging and so penalizes large misses, and MAPE expresses the error as a percentage of the actual value.",
    why: "You cannot compare forecasting methods or decide whether a forecast is good enough without a clear error measure.",
    when: "Report MAE or RMSE in the original units and MAPE for percentages. Avoid MAPE when actual values can be zero or very small.",
    realWorld: "A planner compares two demand forecasts by the average units they miss.",
    code: `import numpy as np

actual = np.array([100, 120, 110, 130])
forecast = np.array([105, 115, 120, 125])
mae = np.mean(np.abs(actual - forecast))
rmse = np.sqrt(np.mean((actual - forecast) ** 2))
mape = np.mean(np.abs((actual - forecast) / actual)) * 100
print(round(mae, 2), round(rmse, 2), round(mape, 2))`,
    output: "6.25 6.61 5.53",
    exercise: "Compare these errors with a naive forecast that repeats the previous actual value.",
  },
  {
    id: "ts-arima",
    title: "ARIMA forecasting basics",
    theory: "ARIMA(p, d, q) combines p past values (autoregressive), d rounds of differencing, and q past forecast errors (moving average). You fit it on the training period and forecast future steps.",
    why: "ARIMA is a classic, explainable forecasting model and a strong baseline before trying machine learning.",
    when: "Use it for a single series with a clear structure. Compare it against a naive forecast and measure the error on a time-ordered test set. Use a seasonal version (SARIMA) when seasonality exists.",
    realWorld: "A retailer forecasts the next three days of demand for one product.",
    code: `import numpy as np
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA

rng = np.random.default_rng(0)
idx = pd.date_range("2024-01-01", periods=120, freq="D")
walk = pd.Series(np.cumsum(rng.normal(0, 1, 120)) + 50, index=idx)
train, test = walk[:100], walk[100:]
model = ARIMA(train, order=(1, 1, 0)).fit()
forecast = model.forecast(steps=3)
print(forecast.round(2))
print(round(abs(test[:3].values - forecast.values).mean(), 2))`,
    output: `2024-04-10    57.95
2024-04-11    57.94
2024-04-12    57.94
Freq: D, Name: predicted_mean, dtype: float64
1.27`,
    exercise: "Compare the mean absolute error of this model with a naive forecast that repeats the last training value.",
  },
  {
    id: "ts-lag-features-ml",
    title: "Forecasting with lag features and machine learning",
    theory: "Any regression model can forecast if you turn the series into a table: the target is today's value and the features are earlier values (lags). Splits must respect time order, so the test set contains the latest rows.",
    why: "It lets you use powerful tabular models and add extra features such as holidays, prices or weather.",
    when: "Create lags with shift(), drop rows with missing values, and split by time. Tree models cannot extrapolate a trend beyond the values seen in training, so difference the series or include a trend feature.",
    realWorld: "A retailer predicts next-day sales from the previous two days.",
    code: `import pandas as pd
from sklearn.ensemble import RandomForestRegressor

sales = pd.Series([100, 105, 110, 108, 115, 120, 118, 125, 130, 128, 135, 140])
df = pd.DataFrame({"y": sales})
df["lag_1"] = df["y"].shift(1)
df["lag_2"] = df["y"].shift(2)
df = df.dropna()
train, test = df.iloc[:-2], df.iloc[-2:]
model = RandomForestRegressor(n_estimators=100, random_state=0)
model.fit(train[["lag_1", "lag_2"]], train["y"])
print(model.predict(test[["lag_1", "lag_2"]]).round(1))
print(test["y"].tolist())`,
    output: `[127.6 127.6]
[135, 140]`,
    exercise: "Replace the random forest with LinearRegression and compare the forecasts for the rising trend.",
  },
  {
    id: "ts-anomaly-zscore",
    title: "Anomaly detection with rolling z-scores",
    theory: "A rolling z-score compares each value with the mean and standard deviation of the recent past. Values far from that recent behaviour, for example more than 3 standard deviations away, are flagged as anomalies.",
    why: "It spots sudden spikes and drops in metrics such as traffic, sales or sensor readings, and it adapts to slow changes in level.",
    when: "Use shift(1) so a value is not compared with a window that includes itself. Choose the window and threshold with domain knowledge, and handle seasonality separately.",
    realWorld: "An operations team is alerted when daily orders suddenly spike.",
    code: `import pandas as pd

s = pd.Series([50, 52, 49, 51, 50, 95, 51, 49, 50])
mean = s.rolling(5).mean().shift(1)
std = s.rolling(5).std().shift(1)
z = (s - mean) / std
print(s[z.abs() > 3].tolist())`,
    output: "[95]",
    exercise: "Change the threshold to 2 and check whether any additional points are flagged.",
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
  {
    id: "nlp-stopwords-stemming",
    title: "Stop words, stemming and lemmatization",
    theory: "Stop words are very common words such as 'the' and 'is' that often add little meaning. Stemming chops word endings with simple rules, and lemmatization uses vocabulary to return the dictionary form (for example 'running' becomes 'run').",
    why: "Reducing word variants and removing noise makes text features smaller and counts more meaningful.",
    when: "Use these for bag-of-words and TF-IDF models. Modern transformer models usually need no stop-word removal, and removing words like 'not' can reverse the meaning.",
    realWorld: "A support team groups complaints that mention 'deliver', 'delivered' and 'delivery'.",
    code: `stop_words = {"the", "is", "a", "and", "of", "to"}
text = "The delivery is late and the support team is slow"
tokens = [w for w in text.lower().split() if w not in stop_words]

def simple_stem(word):
    for suffix in ("ing", "ed", "s"):
        if word.endswith(suffix) and len(word) > len(suffix) + 2:
            return word[: -len(suffix)]
    return word

print(tokens)
print([simple_stem(w) for w in ["shipping", "delivered", "orders", "late"]])`,
    output: `['delivery', 'late', 'support', 'team', 'slow']
['shipp', 'deliver', 'order', 'late']`,
    exercise: "Why does the simple stemmer return 'shipp'? Check how a lemmatizer from NLTK or spaCy handles the same word.",
  },
  {
    id: "nlp-ngrams",
    title: "N-grams with CountVectorizer",
    theory: "An n-gram is a sequence of n consecutive words. Bigrams (n = 2) capture short phrases such as 'not good' that single words miss, and CountVectorizer can build them with ngram_range.",
    why: "Single words lose word order, so 'not good' and 'good' look similar to a bag-of-words model.",
    when: "Start with unigrams and bigrams. Higher n creates many rare features, so limit the vocabulary with min_df or max_features.",
    realWorld: "A review classifier needs to tell 'not good service' from 'very good service'.",
    code: `from sklearn.feature_extraction.text import CountVectorizer

docs = ["not good service", "very good service"]
vec = CountVectorizer(ngram_range=(1, 2))
X = vec.fit_transform(docs)
print(vec.get_feature_names_out().tolist())
print(X.toarray())`,
    output: `['good', 'good service', 'not', 'not good', 'service', 'very', 'very good']
[[1 1 1 1 1 0 0]
 [1 1 0 0 1 1 1]]`,
    exercise: "Build trigrams (n = 3) for the same documents and count the features.",
  },
  {
    id: "nlp-cosine-similarity",
    title: "Text similarity with TF-IDF and cosine similarity",
    theory: "Cosine similarity measures the angle between two vectors. When documents are converted to TF-IDF vectors, a value near 1 means they use similar important words and a value near 0 means they share almost none.",
    why: "It powers search, duplicate detection, FAQ matching and simple recommendations.",
    when: "Use it for keyword-style similarity. It cannot understand synonyms; embeddings are better when meaning matters more than exact words.",
    realWorld: "A help desk finds earlier tickets similar to a new complaint.",
    code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

docs = ["refund my order", "I want a refund for the order", "great pizza place"]
X = TfidfVectorizer().fit_transform(docs)
print(cosine_similarity(X).round(2))`,
    output: `[[1.   0.39 0.  ]
 [0.39 1.   0.  ]
 [0.   0.   1.  ]]`,
    exercise: "Add a document that uses the word 'money back' instead of 'refund' and check its similarity.",
  },
  {
    id: "nlp-sentiment-lexicon",
    title: "Sentiment analysis with a word list",
    theory: "Sentiment analysis labels text as positive, negative or neutral. A lexicon approach counts words from positive and negative lists, which is simple and explainable but ignores context such as negation and sarcasm.",
    why: "Customer feedback is large and unstructured, and a quick sentiment signal helps teams prioritize issues.",
    when: "Use a lexicon as a baseline, then compare with a trained classifier or a pretrained transformer. Always check examples with negation, such as 'not good'.",
    realWorld: "A retailer scans product reviews to find the most unhappy customers first.",
    code: `positive = {"good", "great", "love", "fast"}
negative = {"bad", "slow", "poor", "late"}

def sentiment(text):
    words = text.lower().split()
    score = sum(w in positive for w in words) - sum(w in negative for w in words)
    return "positive" if score > 0 else "negative" if score < 0 else "neutral"

for review in ["great product and fast delivery", "late and poor packaging", "it arrived"]:
    print(sentiment(review))`,
    output: `positive
negative
neutral`,
    exercise: "Test the review 'not good at all' and describe how you could handle negation.",
  },
  {
    id: "nlp-ner-spacy",
    title: "Named entity recognition with spaCy",
    theory: "Named entity recognition (NER) finds and labels real-world items in text, such as organizations (ORG), places (GPE), dates (DATE) and numbers (CARDINAL). spaCy ships pretrained pipelines that do this in a few lines.",
    why: "It turns free text into structured fields, such as companies, locations and dates, that can be counted, filtered and joined with other data.",
    when: "Install spaCy and a model first (pip install spacy, then python -m spacy download en_core_web_sm). Check results on your own text, because pretrained models make mistakes on domain-specific terms.",
    realWorld: "An analyst extracts company names and cities from news headlines.",
    code: `import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Infosys hired 200 engineers in Hyderabad in January 2026.")
for ent in doc.ents:
    print(ent.text, ent.label_)`,
    output: `Typical output (labels depend on the model version):
Infosys ORG
200 CARDINAL
Hyderabad GPE
January 2026 DATE`,
    exercise: "Run NER on five news headlines and build a table of the organizations found.",
  },
  {
    id: "nlp-huggingface-pipeline",
    title: "Pretrained transformers with Hugging Face",
    theory: "The Hugging Face transformers library provides pretrained models behind a simple pipeline() interface for tasks such as sentiment analysis, summarization, translation and question answering.",
    why: "A pretrained model often beats a model trained from scratch on small datasets, and it needs no feature engineering.",
    when: "Use it when you need strong text understanding quickly. Check speed, cost and licence, evaluate on your own labelled examples, and fine-tune only if the default model is not accurate enough.",
    realWorld: "A support team scores thousands of customer messages for sentiment without training a model.",
    code: `from transformers import pipeline

classifier = pipeline("sentiment-analysis")
print(classifier("The delivery was quick and the packaging was great."))`,
    output: "[{'label': 'POSITIVE', 'score': 0.99...}] The exact score depends on the default model version.",
    exercise: "Classify five of your own sentences and note any that the model gets wrong.",
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
  {
    id: "activation-functions",
    title: "Activation functions: ReLU, sigmoid, tanh and softmax",
    theory: "An activation function adds non-linearity to a neuron's output. ReLU returns max(0, z), sigmoid squeezes values into 0 to 1, tanh into -1 to 1, and softmax turns a vector of scores into probabilities that sum to 1.",
    why: "Without non-linear activations, a network of many layers behaves like a single linear model.",
    when: "Use ReLU in hidden layers by default, sigmoid for a binary output and softmax for multi-class output. Very deep networks need care with saturating functions such as sigmoid and tanh.",
    realWorld: "An image classifier uses softmax to convert final scores into class probabilities.",
    code: `import numpy as np

z = np.array([-2.0, 0.0, 2.0])
relu = np.maximum(0, z)
sigmoid = 1 / (1 + np.exp(-z))
tanh = np.tanh(z)
scores = np.array([2.0, 1.0, 0.1])
softmax = np.exp(scores) / np.exp(scores).sum()
print(relu, sigmoid.round(2), tanh.round(2))
print(softmax.round(2))`,
    output: `[0. 0. 2.] [0.12 0.5  0.88] [-0.96  0.    0.96]
[0.66 0.24 0.1 ]`,
    exercise: "Check that the softmax values add up to 1, then change one score and see how the probabilities shift.",
  },
  {
    id: "loss-functions",
    title: "Loss functions: MSE and cross-entropy",
    theory: "A loss function measures how wrong the predictions are, and training tries to reduce it. Mean squared error (MSE) suits regression, while binary cross-entropy compares predicted probabilities with 0/1 labels and penalizes confident wrong answers heavily.",
    why: "The choice of loss decides what the model optimizes, so it must match the problem and the business goal.",
    when: "Use MSE or MAE for numeric targets and cross-entropy for classification. Clip probabilities away from exactly 0 and 1 to avoid log(0).",
    realWorld: "A fraud model is penalized much more when it is 99% sure a fraudulent transaction is safe.",
    code: `import numpy as np

y_true = np.array([1, 0, 1])
y_prob = np.array([0.9, 0.2, 0.6])
mse = np.mean((y_true - y_prob) ** 2)
bce = -np.mean(y_true * np.log(y_prob) + (1 - y_true) * np.log(1 - y_prob))
print(round(mse, 3), round(bce, 3))`,
    output: "0.07 0.28",
    exercise: "Change the third prediction to 0.05 and see how much the cross-entropy increases.",
  },
  {
    id: "gradient-descent",
    title: "Gradient descent from scratch",
    theory: "Gradient descent improves parameters step by step. It calculates how the loss changes with each parameter (the gradient) and moves the parameter a small step in the opposite direction. The learning rate sets the step size.",
    why: "It is the core optimization idea behind linear models, neural networks and most of deep learning.",
    when: "Choose a learning rate that is not too large (the loss jumps around) or too small (training is slow), and watch the loss over time.",
    realWorld: "A model learns the line y = 2x + 1 from four example points.",
    code: `import numpy as np

x = np.array([1.0, 2.0, 3.0, 4.0])
y = np.array([3.0, 5.0, 7.0, 9.0])   # y = 2x + 1
w, b, lr = 0.0, 0.0, 0.05
for _ in range(2000):
    pred = w * x + b
    w -= lr * (2 * np.mean((pred - y) * x))
    b -= lr * (2 * np.mean(pred - y))
print(round(w, 2), round(b, 2))`,
    output: "2.0 1.0",
    exercise: "Try lr = 0.5 and lr = 0.001 and describe what happens to the final w and b.",
  },
  {
    id: "pytorch-training-loop",
    title: "A PyTorch training loop",
    theory: "A PyTorch training loop repeats the same steps: clear old gradients, make predictions, compute the loss, call backward() to compute gradients, and call the optimizer's step() to update the weights.",
    why: "Understanding the loop explains what higher-level tools do for you and lets you customize training.",
    when: "Use mini-batches for larger datasets, track validation loss to detect overfitting, and use a GPU when the model or data is large.",
    realWorld: "A small model learns to classify whether the sum of three numbers is positive.",
    code: `import torch
from torch import nn

X = torch.randn(100, 3)
y = (X.sum(dim=1) > 0).float().unsqueeze(1)
model = nn.Sequential(nn.Linear(3, 8), nn.ReLU(), nn.Linear(8, 1), nn.Sigmoid())
loss_fn = nn.BCELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)

for epoch in range(100):
    optimizer.zero_grad()
    loss = loss_fn(model(X), y)
    loss.backward()
    optimizer.step()
print(round(loss.item(), 3))`,
    output: "A final loss well below the starting value of about 0.69. The exact number varies with random initialization.",
    exercise: "Print the loss every 10 epochs and plot how it decreases.",
  },
  {
    id: "transfer-learning",
    title: "Transfer learning",
    theory: "Transfer learning reuses a model trained on a large dataset and adapts it to a new task. A common approach is to freeze the pretrained layers and train only a new final layer on your own data.",
    why: "It gives strong results with far less data, time and compute than training a deep network from scratch.",
    when: "Use it for images, text and audio when you have limited labelled data. Unfreeze more layers gradually if the frozen model is not accurate enough.",
    realWorld: "A quality team classifies product photos into three damage types using only a few hundred images.",
    code: `import torch.nn as nn
from torchvision import models

model = models.resnet18(weights="DEFAULT")
for param in model.parameters():
    param.requires_grad = False
model.fc = nn.Linear(model.fc.in_features, 3)
trainable = sum(p.numel() for p in model.parameters() if p.requires_grad)
print(trainable)`,
    output: "1539 (512 inputs x 3 classes + 3 biases are the only trainable parameters).",
    exercise: "Unfreeze the last residual block and print how many parameters become trainable.",
  },
  {
    id: "llm-rag-evaluation",
    title: "Evaluating retrieval and RAG systems",
    theory: "A retrieval-augmented generation (RAG) system can fail at retrieval (the right passage was not found) or at generation (the answer ignores or distorts the passage). Evaluate retrieval with metrics such as recall@k, and check answers for faithfulness to the sources.",
    why: "A fluent answer can still be wrong, so you need measurements rather than impressions.",
    when: "Build a small set of questions with known correct source passages, measure recall@k first, then review a sample of answers manually for grounding and hallucination.",
    realWorld: "A company tests whether its policy chatbot retrieves the right document for each question.",
    code: `retrieved = [["d3", "d7", "d1"], ["d2", "d9", "d4"], ["d5", "d6", "d8"]]
relevant = ["d1", "d4", "d0"]
hits = sum(rel in docs for docs, rel in zip(retrieved, relevant))
print(f"Recall@3: {hits / len(relevant):.2f}")`,
    output: "Recall@3: 0.67",
    exercise: "Write ten test questions for a topic you know and record which document should be retrieved for each.",
  },
  {
    id: "responsible-ai",
    title: "Bias, fairness and responsible AI",
    theory: "A model can perform differently for different groups, because of the training data, the labels or how the system is used. A simple check compares outcomes such as approval rates between groups (demographic parity), though fairness has several definitions that can conflict.",
    why: "Biased models can harm people and damage trust, and regulators increasingly expect documentation and testing.",
    when: "Check performance by group, document limits and intended use (a model card), keep a human in the loop for high-stakes decisions, and avoid using sensitive attributes or close proxies without a clear reason.",
    realWorld: "A bank reviews whether a loan model approves one group much less often than another.",
    code: `import pandas as pd

df = pd.DataFrame({
    "group": ["A", "A", "A", "B", "B", "B"],
    "approved": [1, 1, 0, 1, 0, 0],
})
print(df.groupby("group")["approved"].mean().round(2).to_dict())`,
    output: "{'A': 0.67, 'B': 0.33}",
    exercise: "Add true outcomes to the table and compare recall between the two groups.",
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
  {
    id: "pytest-testing",
    title: "Automated testing with pytest",
    theory: "A test is a small function that checks that code returns the expected result. pytest finds files named test_*.py, runs every function whose name starts with test_, and reports passes and failures.",
    why: "Tests catch mistakes when you change data-cleaning code, and they give reviewers confidence that the project works.",
    when: "Test cleaning functions, feature calculations and edge cases such as empty or missing values. Keep tests small and fast, and run them before every commit.",
    realWorld: "A pipeline's amount-cleaning function is tested so a later change cannot silently break it.",
    code: `# test_cleaning.py
def clean_amount(value):
    return float(str(value).replace(",", ""))

def test_clean_amount_removes_commas():
    assert clean_amount("1,200") == 1200.0

def test_clean_amount_accepts_numbers():
    assert clean_amount(450) == 450.0`,
    output: `Run: pytest -q
..
2 passed`,
    exercise: "Add a test that checks what clean_amount does with an empty string.",
  },
  {
    id: "env-secrets",
    title: "Environment variables and secrets",
    theory: "Secrets such as API keys and database passwords should live in environment variables, not in source code. A .env file holds them locally and python-dotenv loads them; the file is listed in .gitignore so it is never committed.",
    why: "Keys pushed to GitHub can be found and abused within minutes, which can lead to bills or data leaks.",
    when: "Keep a .env.example with variable names but no values, set real values in your hosting platform's settings, rotate any key that was exposed, and fail early with a clear message if a variable is missing.",
    realWorld: "A chatbot reads its API key from the environment so the key never appears in the repository.",
    code: `# .env  (never commit this file)
GROQ_API_KEY=your_key_here

# app.py
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GROQ_API_KEY")
if not api_key:
    raise RuntimeError("GROQ_API_KEY is not set")`,
    output: "The program continues if the variable is set; otherwise it stops with: RuntimeError: GROQ_API_KEY is not set",
    exercise: "Create .env.example, add .env to .gitignore and confirm with git status that .env is ignored.",
  },
  {
    id: "logging-pipelines",
    title: "Logging in data pipelines",
    theory: "Logging records what a program is doing, with severity levels such as INFO, WARNING and ERROR. Unlike print(), logs can be filtered, formatted, timestamped and sent to files or monitoring tools.",
    why: "When a scheduled pipeline fails at 3 a.m., logs are often the only way to see what happened.",
    when: "Log counts at each stage (rows loaded, rows dropped), warnings for suspicious data and errors with context. Never log passwords, keys or personal data.",
    realWorld: "An ETL job logs how many rows it loaded and how many it rejected.",
    code: `import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
log = logging.getLogger("etl")

rows = 1200
bad_rows = 15
log.info("Loaded %d rows", rows)
if bad_rows:
    log.warning("Dropped %d invalid rows", bad_rows)`,
    output: `INFO: Loaded 1200 rows
WARNING: Dropped 15 invalid rows`,
    exercise: "Write the logs to a file with a timestamp in the format.",
  },
  {
    id: "pydantic-validation",
    title: "Validating inputs with Pydantic",
    theory: "Pydantic lets you describe the expected shape and rules of data as a class with typed fields and constraints. It converts compatible values and raises a clear ValidationError when data is invalid.",
    why: "Model APIs and pipelines receive messy input, and validating it at the boundary prevents confusing failures later.",
    when: "Use it for API request bodies, configuration and data records. Return helpful error messages, and keep business rules (such as allowed ranges) in one place.",
    realWorld: "A loan-scoring API rejects applicants younger than 18 before the model runs.",
    code: `from pydantic import BaseModel, Field, ValidationError

class Applicant(BaseModel):
    age: int = Field(ge=18, le=100)
    income: float = Field(gt=0)

try:
    Applicant(age=15, income=50000)
except ValidationError as e:
    print(e.errors()[0]["loc"], e.errors()[0]["type"])`,
    output: "('age',) greater_than_equal",
    exercise: "Add a credit_score field that must be between 300 and 900 and test an invalid value.",
  },
  {
    id: "scheduling-orchestration",
    title: "Scheduling and orchestration",
    theory: "A scheduler runs a job at set times, for example with cron. An orchestrator such as Airflow or Prefect also manages dependencies between tasks, retries failures, and shows run history and alerts.",
    why: "A pipeline that depends on someone running it manually is not reliable, and failures must be visible.",
    when: "Use cron for simple daily scripts, and an orchestrator when several steps depend on each other. Make jobs idempotent so a rerun does not create duplicate data.",
    realWorld: "A daily sales report refreshes every morning before the team starts work.",
    code: `# crontab entry: run the pipeline every day at 06:30
30 6 * * * /usr/bin/python3 /home/user/pipeline/run.py >> /home/user/pipeline/run.log 2>&1`,
    output: "The script runs daily at 06:30 and appends its messages to run.log. Orchestrators add retries, dependencies and monitoring.",
    exercise: "Write the cron expression for 'every Monday at 09:00'.",
  },
  {
    id: "cloud-deployment",
    title: "Deploying an API or app to the cloud",
    theory: "Hosting platforms such as Render, Railway, Hugging Face Spaces and Streamlit Community Cloud build your repository and run it on a server. You provide dependencies (requirements.txt), a start command and environment variables.",
    why: "A public link lets recruiters and users try your project without installing anything.",
    when: "Pin dependency versions, read the port from the environment, store secrets in the platform's settings, and check the build logs when something fails. Free tiers may sleep when idle.",
    realWorld: "A churn-prediction API is deployed and its URL is added to a resume.",
    code: `# requirements.txt lists fastapi, uvicorn and your model libraries
# Start command used by the hosting platform:
uvicorn main:app --host 0.0.0.0 --port $PORT`,
    output: "The platform builds the project, runs the start command and gives you a public HTTPS URL.",
    exercise: "Deploy a minimal FastAPI app with a /health endpoint and open its public URL.",
  },
  {
    id: "portfolio-presentation",
    title: "Presenting your project and resume bullets",
    theory: "A strong project description states the problem, your action, the method, the scale and a measurable result. Recruiters scan quickly, so each resume bullet should start with a verb and contain a concrete number.",
    why: "Good analysis is easy to overlook if it is not communicated clearly, and numbers make impact credible.",
    when: "Only claim results you can reproduce, explain your validation honestly, and link the repository, live demo and a short README. Tailor bullets to the role.",
    realWorld: "A candidate summarizes a churn project in one resume line and links the live demo.",
    code: `action = "Built"
what = "a churn prediction model"
method = "using gradient boosting"
result = "improving recall for churners from 0.52 to 0.71"
print(f"{action} {what} {method}, {result}.")`,
    output: "Built a churn prediction model using gradient boosting, improving recall for churners from 0.52 to 0.71.",
    exercise: "Write three resume bullets for your own projects using the action, method and result pattern.",
  },
];

// ==========================================================================
// Excel for Data Science  (Beginner · Foundations)
// Sample table used in most lessons: tblSales with columns
// OrderID, Date, Region, Product, Qty, UnitPrice, Amount
// ==========================================================================
const excelLessons: Lesson[] = [
  {
    id: "excel-tables-tidy-data",
    title: "Excel Tables and tidy data layout",
    theory: "Tidy data means one header row, one row per record, one column per variable, no merged cells, no blank rows and no totals mixed into the data. An Excel Table (select the range and press Ctrl+T) gives the range a name, auto-expands when you add rows, copies formulas down automatically and lets you use column names in formulas (structured references).",
    why: "Pivot tables, Power Query, Power BI and pandas all work best on tidy data. Most analysis problems in Excel start with a messy layout.",
    when: "Convert every dataset to a Table before analysis and give it a clear name such as tblSales. Keep raw data on one sheet and calculations or reports on other sheets. Never type totals under the data.",
    realWorld: "An analyst receives a sales export with merged title rows and blank lines, removes them, turns the range into tblSales and adds a calculated Amount column.",
    code: `=[@Qty]*[@UnitPrice]          // calculated column inside tblSales
=SUM(tblSales[Amount])        // total of the Amount column
=ROWS(tblSales)               // number of records`,
    output: "The first formula fills the whole Amount column automatically. The second returns total revenue and keeps working when new rows are added.",
    exercise: "Take any messy sheet, remove merged cells and blank rows, convert it to a Table and rename it tblData.",
  },
  {
    id: "excel-text-cleaning",
    title: "Cleaning text with TRIM, PROPER, SUBSTITUTE and LEFT/MID/FIND",
    theory: "TRIM removes extra spaces, CLEAN removes hidden characters, PROPER/UPPER/LOWER fix capitalisation, SUBSTITUTE replaces text, and LEFT, RIGHT, MID with FIND extract part of a text. VALUE converts text that looks like a number into a real number. Flash Fill (Ctrl+E) and Text to Columns can split text without formulas.",
    why: "Inconsistent text such as ' hyderabad' and 'HYDERABAD ' becomes separate categories in a pivot table and breaks lookups.",
    when: "Clean into a new helper column first, check the result, and then copy and paste values if needed. Combine functions, for example PROPER(TRIM(A2)).",
    realWorld: "Customer cities typed in many ways are standardised before a regional revenue report.",
    code: `=PROPER(TRIM(A2))                   // "  hyderabad " -> "Hyderabad"
=SUBSTITUTE(B2,"-","")              // "98-76-54" -> "987654"
=LEFT(C2,FIND("@",C2)-1)            // "asha@example.com" -> "asha"
=VALUE(D2)                          // "1200" (text) -> 1200 (number)`,
    output: "Hyderabad, 987654, asha and 1200 (as a number that can be summed).",
    exercise: "Write a formula that extracts the domain (the part after @) from an email address.",
  },
  {
    id: "excel-dates",
    title: "Working with dates",
    theory: "Excel stores dates as serial numbers, so dates can be subtracted and compared. YEAR, MONTH and DAY extract parts. EOMONTH finds month end, DATEDIF measures complete days, months or years, WEEKDAY gives the day of the week, TEXT formats a date for grouping, and NETWORKDAYS counts working days. Dates imported as text must be converted with DATEVALUE or Text to Columns.",
    why: "Almost all business analysis is over time: daily, monthly and yearly trends, ageing and delivery times.",
    when: "Check that dates are real dates (they right-align by default). Use helper columns for year-month so a pivot table or chart can group correctly.",
    realWorld: "A finance team groups orders by month and calculates how many days each order has been open.",
    code: `=TEXT(B2,"yyyy-mm")              // 2026-10-15 -> "2026-10"
=EOMONTH(B2,0)                   // last day of the same month
=DATEDIF(B2,TODAY(),"d")         // days since the order date
=WEEKDAY(B2,2)                   // 1 = Monday ... 7 = Sunday
=NETWORKDAYS(B2,C2)              // working days between two dates`,
    output: "A month label, a month-end date, a day count, a weekday number and a working-day count for each order.",
    exercise: "Create a helper column with the quarter of each date, such as Q4, using ROUNDUP(MONTH(B2)/3,0).",
  },
  {
    id: "excel-logical-functions",
    title: "IF, IFS, AND, OR and IFERROR",
    theory: "IF returns one result when a condition is true and another when it is false. IFS tests several conditions in order. AND and OR combine conditions. IFERROR and IFNA replace error values with a chosen result.",
    why: "They create flags, segments and clean outputs without leaving error codes in a report.",
    when: "Use IFS instead of long nested IF formulas. Use IFERROR carefully, because it can hide real mistakes. Prefer IFNA when you only expect #N/A from lookups.",
    realWorld: "Orders are labelled High, Medium or Low value, and a division that may fail shows 0 instead of #DIV/0!.",
    code: `=IFS(G2>=5000,"High",G2>=1000,"Medium",TRUE,"Low")
=IF(AND(C2="South",G2>1000),"Review","OK")
=IFERROR(G2/E2,0)`,
    output: "A High/Medium/Low label, a Review/OK flag and a safe ratio that never shows an error.",
    exercise: "Add a column that labels customers as 'Repeat' if they have more than one order, using COUNTIF.",
  },
  {
    id: "excel-lookups",
    title: "Lookups with XLOOKUP and INDEX/MATCH",
    theory: "A lookup finds a value in one table using a key from another, like a SQL LEFT JOIN. XLOOKUP(key, key_column, result_column, if_not_found) is the modern function. INDEX/MATCH works in all versions. VLOOKUP needs the key in the first column and breaks if columns are inserted. Always use exact match (0 or FALSE) for keys.",
    why: "Data science work constantly combines tables, for example adding customer city or product category to an orders table.",
    when: "Make sure keys are unique in the lookup table and have the same data type and spelling. A #N/A means the key was not found, which is useful for checking missing matches.",
    realWorld: "An analyst adds customer names to each order using CustomerID.",
    code: `=XLOOKUP(A2,tblCust[CustomerID],tblCust[Name],"Not found")
=INDEX(tblCust[Name],MATCH(A2,tblCust[CustomerID],0))
=VLOOKUP(A2,tblCust,2,FALSE)`,
    output: "The customer name for each order, or 'Not found' when the customer does not exist.",
    exercise: "Count how many orders return 'Not found' to check for orphan records, like an anti-join in SQL.",
  },
  {
    id: "excel-conditional-aggregation",
    title: "SUMIFS, COUNTIFS, AVERAGEIFS and MAXIFS",
    theory: "These functions calculate a total, count, average or maximum only for rows that meet one or more conditions. Conditions can use text, numbers, comparison operators such as '>=1000', wildcards such as 'Pro*', and dates joined with &.",
    why: "They are the Excel equivalent of SQL WHERE with GROUP BY and let you build KPI tables with formulas.",
    when: "Use them for KPI cells that must update automatically. Use a pivot table when you need many groups at once. Make sure the ranges have the same size.",
    realWorld: "A manager wants South region revenue for October and the number of orders above 5,000.",
    code: `=SUMIFS(tblSales[Amount],tblSales[Region],"South",tblSales[Date],">="&DATE(2026,10,1),tblSales[Date],"<="&DATE(2026,10,31))
=COUNTIFS(tblSales[Amount],">5000")
=AVERAGEIFS(tblSales[Amount],tblSales[Product],"Pro*")
=MAXIFS(tblSales[Amount],tblSales[Region],"North")`,
    output: "October revenue for the South region, the count of large orders, the average for products starting with Pro, and the largest North order.",
    exercise: "Calculate the share of revenue from the South region as SUMIFS divided by SUM.",
  },
  {
    id: "excel-pivot-tables",
    title: "Pivot tables for fast summaries",
    theory: "A pivot table summarises a Table without formulas. Drag fields into Rows, Columns, Values and Filters. Values can be Sum, Count, Average and more, and 'Show Values As' can display percent of total or difference from the previous period. Dates can be grouped into months, quarters and years, and slicers add clickable filters.",
    why: "Pivot tables answer most 'by region, by product, by month' questions in a minute and are common in analyst interviews.",
    when: "Start from a clean Table, refresh the pivot after the data changes, and check that the pivot total matches SUM of the source. Use a pivot for exploration and formulas for fixed KPI cells.",
    realWorld: "A sales manager compares revenue by region and month and filters by product with a slicer.",
    code: `Steps:
1. Click inside tblSales > Insert > PivotTable.
2. Rows: Region. Columns: Date (group by Months). Values: Sum of Amount.
3. Right-click a value > Show Values As > % of Row Total.
4. Insert > Slicer > Product.

=GETPIVOTDATA("Amount",$A$3,"Region","South")    // read one cell from the pivot`,
    output: "A table of revenue by region and month that updates with Refresh, and a GETPIVOTDATA formula that returns the South total.",
    exercise: "Build a pivot showing average order value by product and sort it from highest to lowest.",
  },
  {
    id: "excel-dynamic-arrays",
    title: "Dynamic array functions: UNIQUE, FILTER, SORT and SEQUENCE",
    theory: "In Excel 365 and 2021, one formula can return many values that spill into neighbouring cells. UNIQUE lists distinct values, FILTER returns rows that meet a condition, SORT and SORTBY order results, and SEQUENCE creates number lists. LET names intermediate results inside a formula.",
    why: "They replace many manual steps (copy, remove duplicates, filter, sort) with live formulas that update when the data changes.",
    when: "Leave space below and to the right of the formula so it can spill. Use #-references such as A2# to refer to the whole spill range. Older Excel versions do not support these functions.",
    realWorld: "A dashboard lists the distinct regions and the ten biggest orders, updating automatically.",
    code: `=SORT(UNIQUE(tblSales[Region]))
=FILTER(tblSales,tblSales[Amount]>5000,"No large orders")
=TAKE(SORTBY(tblSales,tblSales[Amount],-1),10)
=SEQUENCE(12,1,1,1)`,
    output: "A sorted list of regions, a table of orders above 5,000, the 10 largest orders and numbers 1 to 12.",
    exercise: "Use UNIQUE and COUNTIF together to list each product with its number of orders.",
  },
  {
    id: "excel-descriptive-stats",
    title: "Descriptive statistics in Excel",
    theory: "AVERAGE, MEDIAN, MODE.SNGL, MIN, MAX, STDEV.S (sample standard deviation), VAR.S, QUARTILE.INC, PERCENTILE.INC, SKEW and KURT summarise a column. The Data Analysis ToolPak (enable it in Add-ins) can produce a full Descriptive Statistics table in one step.",
    why: "Summary statistics are the first step of any analysis and tell you the centre, spread and shape of the data.",
    when: "Use STDEV.S for a sample and STDEV.P only for a full population. If the mean is far from the median, the data is skewed, so report the median.",
    realWorld: "An analyst summarises salary data and notices that one very large value pulls the mean up.",
    code: `Data in A2:A8 = 20, 22, 25, 27, 30, 32, 150
=AVERAGE(A2:A8)          // 43.71
=MEDIAN(A2:A8)           // 27
=STDEV.S(A2:A8)          // 47.06
=QUARTILE.INC(A2:A8,1)   // 23.5
=QUARTILE.INC(A2:A8,3)   // 31
=SKEW(A2:A8)             // 2.6`,
    output: "Mean 43.71, median 27, standard deviation 47.06, quartiles 23.5 and 31, skewness 2.6 (strong right skew).",
    exercise: "Use the Data Analysis ToolPak to generate Descriptive Statistics for a column and compare it with your formulas.",
  },
  {
    id: "excel-outliers",
    title: "Finding outliers with the IQR rule and z-scores",
    theory: "The IQR rule flags values below Q1 - 1.5 x IQR or above Q3 + 1.5 x IQR, where IQR = Q3 - Q1. A z-score, calculated with STANDARDIZE(x, mean, stdev), shows how many standard deviations a value is from the mean. Conditional formatting can highlight the flagged cells.",
    why: "Outliers can be errors or important events. They distort the mean, charts and models.",
    when: "Use IQR for skewed data and z-scores for roughly normal data. Investigate before removing any value.",
    realWorld: "A finance analyst flags unusually large expense claims for review.",
    code: `Q1:     =QUARTILE.INC($A$2:$A$8,1)        // 23.5
Q3:     =QUARTILE.INC($A$2:$A$8,3)        // 31
IQR:    =Q3-Q1                            // 7.5
Upper:  =Q3+1.5*IQR                       // 42.25
Flag:   =IF(OR(A2<Lower,A2>Upper),"Outlier","OK")
Z:      =STANDARDIZE(A2,AVERAGE($A$2:$A$8),STDEV.S($A$2:$A$8))`,
    output: "The value 150 is above the upper fence of 42.25 and is flagged as an Outlier. Its z-score is about 2.3.",
    exercise: "Add conditional formatting that colours flagged rows red.",
  },
  {
    id: "excel-missing-duplicates",
    title: "Handling blanks and duplicates",
    theory: "COUNTBLANK counts empty cells, ISBLANK tests one cell, and Go To Special > Blanks selects empty cells so you can fill them. To find duplicates, COUNTIF(range, cell)>1 flags repeats, Data > Remove Duplicates deletes repeated rows, and UNIQUE returns a distinct list without changing the source.",
    why: "Missing values and repeated records distort counts, averages and joins.",
    when: "Check the count of blanks and duplicates before analysis. Decide on a rule (delete, fill with median, mark as Unknown) and document it. Keep a copy of the raw data.",
    realWorld: "A customer list contains the same email twice, and some orders have no discount value.",
    code: `=COUNTBLANK(tblSales[Discount])                   // missing discounts
=IF(ISBLANK([@Discount]),0,[@Discount])           // treat blank as 0
=COUNTIF(tblCust[Email],[@Email])>1               // TRUE for repeated emails
=UNIQUE(tblCust[Email])                           // distinct list`,
    output: "The number of blank discounts, a cleaned discount column, TRUE for duplicate emails and a list of unique emails.",
    exercise: "Fill blank prices with the median price of the same product using MEDIAN with IF (as an array formula) or a helper column.",
  },
  {
    id: "excel-correlation-regression",
    title: "Correlation and simple regression",
    theory: "CORREL gives the correlation between two columns. SLOPE and INTERCEPT define the best-fit line, RSQ shows how much variation the line explains, and FORECAST.LINEAR predicts a value. LINEST returns full regression results, and a scatter chart with a trendline shows the pattern. The Data Analysis ToolPak also has a Regression tool.",
    why: "Linear regression is the base of predictive modelling and Excel lets you test an idea quickly before moving to Python.",
    when: "Plot a scatter chart first to check that the relationship is roughly linear. Do not predict far outside the range of the data, and remember correlation is not causation.",
    realWorld: "Marketing estimates sales from advertising spend.",
    code: `X (ad spend) = 10, 20, 30, 40, 50     Y (sales) = 25, 41, 62, 78, 101
=CORREL(A2:A6,B2:B6)               // 0.9982
=SLOPE(B2:B6,A2:A6)                // 1.89
=INTERCEPT(B2:B6,A2:A6)            // 4.7
=RSQ(B2:B6,A2:A6)                  // 0.9963
=FORECAST.LINEAR(60,B2:B6,A2:A6)   // 118.1`,
    output: "Correlation 0.9982, slope 1.89, intercept 4.7, R-squared 0.9963 and a prediction of about 118.1 sales for an ad spend of 60.",
    exercise: "Add a scatter chart with a linear trendline and show the equation and R-squared on the chart.",
  },
  {
    id: "excel-hypothesis-tests",
    title: "Hypothesis tests and confidence intervals in Excel",
    theory: "T.TEST(array1, array2, tails, type) returns a p-value: type 1 is paired, 2 is equal variance, 3 is unequal variance. CHISQ.TEST compares observed and expected counts for categorical data. CONFIDENCE.T gives the margin of error for a mean, so the interval is mean plus or minus that margin.",
    why: "You can check whether a difference is likely to be real or just chance without leaving Excel.",
    when: "State the null hypothesis before testing, use two tails unless you have a strong reason, and report effect size along with the p-value. Choose the t-test type that matches your data.",
    realWorld: "A manager checks if handling time changed after training, using the same agents before and after.",
    code: `Before = 72, 75, 70, 68, 74, 71     After = 70, 72, 69, 65, 71, 68
=T.TEST(A2:A7,B2:B7,2,1)           // paired, two-tailed: 0.0007

Sample = 23, 25, 27, 22, 26
=CONFIDENCE.T(0.05,STDEV.S(D2:D6),COUNT(D2:D6))   // about 2.57
95% interval = AVERAGE(D2:D6) +/- 2.57  ->  22.0 to 27.2`,
    output: "A p-value of 0.0007 (a significant change) and a 95 percent confidence interval of about 22.0 to 27.2 for the sample mean.",
    exercise: "Use CHISQ.TEST on a 2x2 table of observed counts with the matching expected counts.",
  },
  {
    id: "excel-charts-analysis",
    title: "Choosing and building charts for analysis",
    theory: "Pick the chart from the question: line charts for change over time, bar or column charts for comparing categories, scatter charts for relationships between two numbers, and histograms or box plots for distributions. Combo charts put two measures (for example revenue and growth rate) on one chart, and sparklines show small trends inside cells.",
    why: "A clear chart makes a pattern obvious to a manager in seconds, while a wrong chart type hides it.",
    when: "Sort bars, start bar axes at zero, label axes and units, remove clutter, and avoid 3-D charts and pie charts with many slices. Use one message per chart.",
    realWorld: "An analyst shows monthly revenue as a line, region comparison as sorted bars and ad spend versus sales as a scatter chart.",
    code: `Steps:
1. Select a pivot table or Table > Insert > Recommended Charts.
2. Time trend: Insert > Line. Category comparison: Insert > Column (sort descending).
3. Relationship: Insert > Scatter, then Chart Design > Add Trendline.
4. Distribution: Insert > Histogram (Statistic charts).
5. In-cell trend: Insert > Sparklines > Line.`,
    output: "A line chart for the monthly trend, a sorted column chart by region, a scatter chart with a trendline and a histogram of order values.",
    exercise: "Build a combo chart with revenue as columns and growth percentage as a line on a secondary axis.",
  },
  {
    id: "excel-power-query",
    title: "Power Query: repeatable data cleaning",
    theory: "Power Query (Data > Get Data) imports data from files, folders, databases and the web and records each cleaning step (change type, trim, remove duplicates, split, unpivot, merge, append). When the source changes, Refresh repeats all steps automatically. Merge queries joins tables (Inner, Left Outer, Right Outer, Full Outer, Left Anti) and Append stacks tables.",
    why: "Manual cleaning must be repeated every month. Power Query automates it and is the same engine used in Power BI.",
    when: "Use it for any data you will receive again, such as monthly exports. Keep the raw file unchanged, and name each step clearly.",
    realWorld: "A monthly folder of sales CSV files is combined, cleaned and loaded into one Table with a single Refresh.",
    code: `let
  Source = Excel.CurrentWorkbook(){[Name="tblSales"]}[Content],
  Typed = Table.TransformColumnTypes(Source, {{"Date", type date}, {"Amount", type number}}),
  Cleaned = Table.TransformColumns(Typed, {{"Region", each Text.Proper(Text.Trim(_)), type text}}),
  NoDuplicates = Table.Distinct(Cleaned, {"OrderID"})
in
  NoDuplicates`,
    output: "A clean table with correct data types, standardised region names and one row per OrderID, rebuilt every time you press Refresh.",
    exercise: "Use Merge Queries with a Left Anti join to list customers without orders.",
  },
  {
    id: "excel-validation-quality",
    title: "Data validation and error checking",
    theory: "Data Validation (Data > Data Validation) restricts entries to a list, number range or date range and shows a message for wrong input. Conditional formatting highlights problems. Common error values mean #N/A (not found), #DIV/0! (division by zero), #VALUE! (wrong data type) and #REF! (deleted reference). Named ranges and Tables make formulas easier to audit.",
    why: "Preventing bad data at entry is cheaper than cleaning it later, and visible checks build trust in a workbook.",
    when: "Add dropdown lists for categories, check totals against the source, and keep a Checks section on the sheet that shows TRUE or FALSE.",
    realWorld: "A shared input sheet allows only valid region names and flags orders with negative quantities.",
    code: `Data Validation list source:   =tblRegions[Region]
Check total matches source:    =ROUND(SUM(tblSales[Amount])-SUM(tblSales[Qty]*tblSales[UnitPrice]),2)=0
Count problems:                =COUNTIF(tblSales[Qty],"<=0")
Show a problem as text:        =IFNA(XLOOKUP(A2,tblCust[ID],tblCust[Name]),"Missing customer")`,
    output: "A dropdown limited to valid regions, a TRUE/FALSE check for totals and a count of invalid quantities.",
    exercise: "Add a validation rule that only accepts quantities that are whole numbers greater than zero.",
  },
  {
    id: "excel-what-if",
    title: "What-if analysis: Goal Seek, Data Tables and Solver",
    theory: "Goal Seek changes one input to reach a target result. A one- or two-variable Data Table recalculates a formula for many input values (sensitivity analysis). Scenario Manager stores sets of assumptions, and Solver finds the best inputs under constraints.",
    why: "Business decisions depend on assumptions. What-if analysis shows how sensitive the result is to price, cost or volume.",
    when: "Keep inputs in separate labelled cells, never hard-code numbers inside formulas, and document each scenario. Use Solver for optimisation, such as allocating a budget.",
    realWorld: "A team finds the selling price needed for a profit target of 100,000 and shows profit for several prices and volumes.",
    code: `Inputs:   Price = B1, UnitCost = B2, Units = B3
Profit:   =(B1-B2)*B3

Data > What-If Analysis > Goal Seek
  Set cell: B4 (Profit)   To value: 100000   By changing cell: B1

Data > What-If Analysis > Data Table
  Row input cell: B3 (Units)   Column input cell: B1 (Price)`,
    output: "Goal Seek returns the price that gives a profit of 100,000. The Data Table shows profit for each price and volume pair.",
    exercise: "Use Solver to maximise profit while keeping total units below 5,000.",
  },
  {
    id: "excel-sampling",
    title: "Random sampling and train/test split in Excel",
    theory: "RAND() returns a random number between 0 and 1 and RANDBETWEEN(a,b) a random whole number. Adding a RAND column and sorting, or using SORTBY with RANDARRAY, shuffles rows. Rows with a random value below 0.8 can form a training set and the rest a test set. Random values change on every recalculation, so paste them as values to keep a fixed split.",
    why: "Sampling and splitting is the first step of model validation, and it helps you inspect very large tables quickly.",
    when: "Paste random numbers as values before using them, and record how the split was made. For reproducible work use Python with a fixed random seed.",
    realWorld: "An analyst takes a 10 percent sample of a big customer table for a quick review and marks 80 percent of rows as training data.",
    code: `=RAND()                                          // random decimal
=RANDBETWEEN(1,6)                                // random whole number
=IF(RAND()<0.8,"train","test")                   // random split label
=TAKE(SORTBY(tblCust,RANDARRAY(ROWS(tblCust))),100)   // random sample of 100 rows`,
    output: "Roughly 80 percent of rows labelled train and 20 percent test, and a random sample of 100 customers.",
    exercise: "Create a split column, paste it as values, then use COUNTIF to confirm the split ratio.",
  },
  {
    id: "excel-to-python",
    title: "Moving between Excel and Python",
    theory: "pandas reads Excel with read_excel (all sheets with sheet_name=None) and writes with ExcelWriter, which can create several sheets. The openpyxl or xlsxwriter engine is needed for .xlsx files. Common Excel tasks map to pandas: SUMIFS to groupby, XLOOKUP to merge, pivot tables to pivot_table.",
    why: "Real jobs mix both tools: data arrives in Excel, analysis happens in Python, and results go back to Excel for managers.",
    when: "Use Excel for quick checks and reports, and Python when data is large, the steps must be repeated or modelling is needed. Keep column names clean and avoid merged cells in files you read.",
    realWorld: "A script reads a workbook, summarises revenue by region and writes a report with Summary and Data sheets.",
    code: `import pandas as pd
df = pd.DataFrame({"Region": ["North", "South", "North"], "Amount": [100, 200, 50]})
with pd.ExcelWriter("report.xlsx") as xw:
    df.groupby("Region")["Amount"].sum().reset_index().to_excel(xw, sheet_name="Summary", index=False)
    df.to_excel(xw, sheet_name="Data", index=False)
print(pd.read_excel("report.xlsx", sheet_name="Summary"))`,
    output: `  Region  Amount
0  North     150
1  South     200`,
    exercise: "Read all sheets with sheet_name=None and print each sheet name and its number of rows.",
  },
  {
    id: "excel-kpi-dashboard",
    title: "Building a simple KPI dashboard in Excel",
    theory: "An Excel dashboard combines KPI cells (SUMIFS or pivot results), a few charts and slicers on one sheet. Slicers can be connected to several pivot tables so one click filters the whole page. Freeze panes, consistent number formats and hidden gridlines make it easier to read.",
    why: "Managers read dashboards, not raw tables, and a good layout turns analysis into decisions.",
    when: "Put the most important KPIs at the top, limit the page to 4 to 6 visuals, show the date of the last refresh and check totals against the source. For larger or shared reports consider Power BI.",
    realWorld: "A weekly sales dashboard shows revenue, orders, average order value, a monthly trend and a regional comparison with a region slicer.",
    code: `Revenue:        =SUM(tblSales[Amount])
Orders:         =COUNTA(tblSales[OrderID])
Avg order:      =Revenue/Orders
Last refresh:   =MAX(tblSales[Date])

Insert > Slicer (Region) > Report Connections > tick every pivot on the dashboard`,
    output: "Four KPI cards and charts that all update when a region is selected in the slicer.",
    exercise: "Add a KPI that shows revenue growth compared with the previous month and colour it green or red with conditional formatting.",
  },
];


// ==========================================================================
// Power BI for Data Science  (Intermediate · Data Analysis)
// Sample model used in most lessons:
//   Sales (fact): OrderID, OrderDate, CustomerID, ProductID, Qty, Amount
//   Customers, Products, Date (dimension tables)
// ==========================================================================
const powerBiLessons: Lesson[] = [
  {
    id: "pbi-workflow",
    title: "The Power BI workflow: from data to dashboard",
    theory: "Power BI work follows five steps: connect to data, clean it in Power Query, model it (tables and relationships), create measures with DAX, and build visuals. Power BI Desktop is where you build the report. The Power BI Service (online) is where you publish, share, schedule refresh and secure the report.",
    why: "Knowing the whole flow helps you fix problems at the right step. Most wrong numbers come from modelling or cleaning, not from the chart.",
    when: "Do cleaning in Power Query, relationships in the Model view, calculations in DAX measures and layout in the Report view. Do not fix data problems with visuals.",
    realWorld: "An analyst connects to a sales database, cleans it, builds a star schema, writes measures such as Total Sales and publishes a weekly dashboard.",
    code: `1. Get data      Home > Get data (Excel, CSV, SQL Server, web ...)
2. Clean        Transform data > Power Query Editor
3. Model        Model view: create relationships, mark Date table
4. Calculate    New measure: Total Sales = SUM(Sales[Amount])
5. Visualise    Report view: cards, charts, slicers
6. Publish      Home > Publish > choose a workspace in the Power BI Service`,
    output: "A published report that can be shared as a link or app and refreshed on a schedule.",
    exercise: "Write the six steps in your own words for a project you know and mark which step each problem you have faced belongs to.",
  },
  {
    id: "pbi-get-data",
    title: "Connecting to data: Import, DirectQuery and live connections",
    theory: "Import copies the data into the Power BI file, giving fast visuals and full DAX and Power Query features. DirectQuery leaves the data in the source and sends a query each time a visual changes, which suits very large or real-time data but is slower and has limits. A live connection reads a published semantic model. Get Data supports files, folders, databases, web pages and online services.",
    why: "The connection mode affects speed, refresh, features and cost, and it is hard to change later.",
    when: "Choose Import by default. Use DirectQuery only when the data is too large to import or must be current. Use a folder connection to combine many files of the same format.",
    realWorld: "Monthly CSV exports are loaded from a folder with Import mode, while a huge transaction table stays in the database with DirectQuery.",
    code: `Home > Get data > Text/CSV          (single file)
Home > Get data > Folder            (combine many files)
Home > Get data > SQL Server        (choose Import or DirectQuery)

Manage the source later: Transform data > Data source settings`,
    output: "The tables appear in the Data pane, and each query shows its steps in Power Query.",
    exercise: "Load a CSV in Import mode, open Power Query and list the applied steps that Power BI created automatically.",
  },
  {
    id: "pbi-power-query-clean",
    title: "Cleaning data in Power Query",
    theory: "Power Query records every step you apply: promote headers, change data types, trim and fix text, replace or remove nulls, filter rows, remove duplicates, split columns and add custom columns. Each step is written in the M language and can be re-run when the source refreshes.",
    why: "Clean, correctly typed data is the base of every report. Fixing it once in Power Query is better than fixing it in every visual.",
    when: "Set data types early, remove unneeded columns, filter rows as early as possible and give steps clear names. Keep a column for the original value if you are unsure about a transformation.",
    realWorld: "A sales file has text dates, extra spaces in city names, missing amounts and repeated orders. All are fixed once in Power Query.",
    code: `let
  Source = Csv.Document(File.Contents("D:\\data\\sales.csv"), [Delimiter=",", Encoding=65001]),
  Promoted = Table.PromoteHeaders(Source, [PromoteAllScalars=true]),
  Typed = Table.TransformColumnTypes(Promoted, {{"OrderDate", type date}, {"Amount", type number}}),
  Trimmed = Table.TransformColumns(Typed, {{"City", each Text.Proper(Text.Trim(_)), type text}}),
  NoNulls = Table.SelectRows(Trimmed, each [Amount] <> null),
  NoDuplicates = Table.Distinct(NoNulls, {"OrderID"})
in
  NoDuplicates`,
    output: "A table with proper headers, correct data types, standardised city names, no missing amounts and one row per order.",
    exercise: "Add a step that replaces null discounts with 0 using Replace Values.",
  },
  {
    id: "pbi-merge-append",
    title: "Merging and appending queries (join types in Power Query)",
    theory: "Append stacks tables with the same columns, for example monthly files. Merge joins two tables on a key. The join kinds are Inner (matches only), Left Outer (all left rows), Right Outer (all right rows), Full Outer (everything), Left Anti (left rows with no match) and Right Anti (right rows with no match). They work like SQL joins.",
    why: "Data is spread across tables, and the wrong join kind drops rows or leaves nulls that change totals.",
    when: "Use Left Outer to add attributes to a fact table, Left Anti to find missing records, and check that the key is unique in the lookup table. Compare row counts before and after merging.",
    realWorld: "Orders are merged with customers to add city, and a Left Anti merge lists customers who never ordered.",
    code: `let
  Merged = Table.NestedJoin(Orders, {"CustomerID"}, Customers, {"CustomerID"}, "Cust", JoinKind.LeftOuter),
  Expanded = Table.ExpandTableColumn(Merged, "Cust", {"Name", "City"}),
  NeverOrdered = Table.NestedJoin(Customers, {"CustomerID"}, Orders, {"CustomerID"}, "Ord", JoinKind.LeftAnti),
  AllMonths = Table.Combine({Sales_Oct, Sales_Nov})
in
  Expanded`,
    output: "Expanded has every order with customer name and city. NeverOrdered holds customers with no orders. AllMonths stacks the two monthly tables.",
    exercise: "Change JoinKind.LeftOuter to JoinKind.Inner and compare the row counts.",
  },
  {
    id: "pbi-unpivot",
    title: "Unpivot and reshape wide data",
    theory: "Reports from Excel often have one column per month. Unpivot Columns turns those columns into rows with an attribute column (month) and a value column (sales). Pivot Column does the opposite. Long tables work much better for DAX, slicers and charts.",
    why: "With 12 month columns you cannot make a trend chart or filter by month. After unpivoting, Month becomes a normal column.",
    when: "Select the identifier columns and use Unpivot Other Columns so that new month columns are included automatically after a refresh.",
    realWorld: "A store report with Jan, Feb and Mar columns becomes a long table with Store, Month and Sales.",
    code: `let
  Source = Excel.CurrentWorkbook(){[Name="WideSales"]}[Content],
  Unpivoted = Table.UnpivotOtherColumns(Source, {"Store"}, "Month", "Sales")
in
  Unpivoted`,
    output: "One row per store and month, with the columns Store, Month and Sales.",
    exercise: "Add a column that converts the month text to a month number.",
  },
  {
    id: "pbi-star-schema",
    title: "Data modelling: the star schema",
    theory: "A star schema has one central fact table (transactions such as Sales) connected to smaller dimension tables (Customers, Products, Date) that describe them. Facts hold numbers and keys, and dimensions hold descriptive attributes. Relationships link the keys, normally one-to-many from dimension to fact.",
    why: "A star schema makes DAX simple, filters behave predictably and reports fast. One huge flat table causes slow models and wrong totals.",
    when: "Put descriptive columns in dimensions, keep numeric keys, and slicers should come from dimension tables. Avoid chains of many dimension-to-dimension relationships when possible.",
    realWorld: "A retailer slices Sales by customer city, product category and month using three small dimension tables.",
    code: `Customers (1) ---- (*) Sales (*) ---- (1) Products
                          |
                         (*)
                          |
                      Date (1)

Sales:      OrderID, OrderDate, CustomerID, ProductID, Qty, Amount
Customers:  CustomerID, Name, City, Region
Products:   ProductID, ProductName, Category
Date:       Date, Year, Month, Quarter`,
    output: "A model in which selecting a city, category or month filters Sales correctly.",
    exercise: "Sketch a star schema for an HR dataset with employees, departments, dates and salaries.",
  },
  {
    id: "pbi-relationships",
    title: "Relationships: cardinality and filter direction",
    theory: "Cardinality describes how rows match: one-to-many (most common), one-to-one or many-to-many. Filters normally flow from the 'one' side (dimension) to the 'many' side (fact). Cross-filter direction can be single or both. Only one relationship between two tables can be active, and others stay inactive until a measure uses USERELATIONSHIP.",
    why: "Wrong cardinality or filter direction is a leading cause of incorrect totals and missing filters.",
    when: "Prefer single direction and one-to-many. Use bi-directional filtering only when needed and test the numbers. The key on the one side must be unique and not blank.",
    realWorld: "A Sales table has OrderDate and ShipDate, both linked to Date. OrderDate is active and a measure uses ShipDate with USERELATIONSHIP.",
    code: `Sales Shipped =
CALCULATE(
  [Total Sales],
  USERELATIONSHIP(Sales[ShipDate], 'Date'[Date])
)`,
    output: "Total sales grouped by the ship date instead of the order date.",
    exercise: "Create a second relationship from ShipDate to Date and write a measure that uses it.",
  },
  {
    id: "pbi-date-table",
    title: "Creating and marking a Date table",
    theory: "A Date table has one row for every day in the period and columns such as Year, Month, Quarter and Weekday. It is linked to the date column in the fact table and marked as the date table so time-intelligence functions work. CALENDAR needs a start and end date and CALENDARAUTO finds the range from the data.",
    why: "Time-intelligence measures (year to date, previous year) need a complete, continuous Date table. Using the automatic date hierarchy of each column gives inconsistent results.",
    when: "Create one Date table for the model, mark it as a date table, sort Month name by Month number, and hide the date columns in the fact table.",
    realWorld: "Every report that compares this year with last year relies on one shared Date table.",
    code: `Date =
ADDCOLUMNS(
  CALENDAR(DATE(2024, 1, 1), DATE(2026, 12, 31)),
  "Year", YEAR([Date]),
  "Month No", MONTH([Date]),
  "Month", FORMAT([Date], "MMM"),
  "Quarter", "Q" & QUARTER([Date])
)`,
    output: "A table with one row per day from 2024 to 2026 and Year, Month and Quarter columns.",
    exercise: "Add a Weekday column and a column that marks weekends.",
  },
  {
    id: "pbi-dax-basics",
    title: "DAX basics: measures versus calculated columns",
    theory: "DAX is the formula language of Power BI. A calculated column is computed for each row when the data loads and is stored in the model. A measure is calculated when the visual is drawn, using the filters of that visual (region, month and so on). Common functions are SUM, COUNT, DISTINCTCOUNT, AVERAGE and DIVIDE (which handles division by zero).",
    why: "Measures give correct totals and ratios in any grouping, and calculated columns use more memory.",
    when: "Use measures for totals, ratios and KPIs. Use calculated columns only for row-level labels or values you need as a slicer or axis. Always use DIVIDE instead of the / operator.",
    realWorld: "Total Sales, Orders and Average Order Value are measures that update as the user filters by region.",
    code: `Total Sales = SUM(Sales[Amount])
Orders = DISTINCTCOUNT(Sales[OrderID])
Avg Order Value = DIVIDE([Total Sales], [Orders])

-- Calculated column (one value per row)
Line Amount = Sales[Qty] * RELATED(Products[Price])`,
    output: "Three measures that show correct values for every region, product or month, and one stored column with the amount for each row.",
    exercise: "Create a measure called Customers that counts distinct customers and use it in a card.",
  },
  {
    id: "pbi-filter-context",
    title: "Row context and filter context",
    theory: "Filter context is the set of filters that apply to a calculation: slicers, visual axes, page filters and filters from CALCULATE. A measure is evaluated once per filter context, which is why the same Total Sales measure shows different values in each row of a table visual. Row context means 'the current row' and exists in calculated columns and iterator functions such as SUMX.",
    why: "Understanding context is the key to understanding DAX. Most confusing results are explained by what filters are active.",
    when: "When a number looks wrong, ask which filters are applied to that cell. Test a measure in a table visual with the relevant columns to see the context.",
    realWorld: "In a table with Region on rows, Total Sales shows each region's total because the Region value becomes a filter for each row.",
    code: `Total Sales = SUM(Sales[Amount])

-- In a table visual with Region on rows:
-- Row "North": filter context = Region is North  -> total for North
-- Row "South": filter context = Region is South  -> total for South
-- Grand total: no region filter                  -> total for all regions`,
    output: "The same measure gives a different value in each row because the filter context changes.",
    exercise: "Add Product Category as a slicer and watch how the values in the Region table change.",
  },
  {
    id: "pbi-calculate",
    title: "CALCULATE, FILTER and ALL",
    theory: "CALCULATE evaluates an expression after changing the filter context. Its filter arguments can add a filter (Customers[Region] = 'South'), replace one, or remove filters with ALL. FILTER returns the rows of a table that meet a condition. ALL removes filters from a table or column, which is needed for 'percent of total'.",
    why: "CALCULATE is the most important DAX function. It turns simple measures into comparisons, shares and segments.",
    when: "Use boolean conditions for simple filters on one column, FILTER for conditions that involve measures or several columns, and ALL for the denominator of a share.",
    realWorld: "A dashboard shows South region sales, large-order counts and each region's share of total sales.",
    code: `South Sales = CALCULATE([Total Sales], Customers[Region] = "South")
Large Orders = CALCULATE([Orders], Sales[Amount] > 5000)
All Region Sales = CALCULATE([Total Sales], ALL(Customers[Region]))
Region Share = DIVIDE([Total Sales], [All Region Sales])`,
    output: "South sales as a fixed value, the number of orders above 5,000, total sales ignoring the region filter and each region's percentage of the total.",
    exercise: "Create a measure for sales of the Electronics category only and a measure for its share of total sales.",
  },
  {
    id: "pbi-iterators",
    title: "Iterator functions: SUMX, AVERAGEX and RELATED",
    theory: "Iterators such as SUMX, AVERAGEX, MINX and MAXX go through a table row by row, calculate an expression for each row and then combine the results. RELATED fetches a value from the one side of a relationship (for example a product price) for the current row.",
    why: "When a calculation needs a value per row before adding up (quantity times price, or average per order), a plain SUM is not enough.",
    when: "Use SUMX for row-level calculations and AVERAGEX over distinct values for 'average per order' or 'per customer'. Avoid iterating very large tables with complex expressions because it can be slow.",
    realWorld: "Revenue is quantity multiplied by the current product price, and average basket value is the average of order totals.",
    code: `Revenue = SUMX(Sales, Sales[Qty] * RELATED(Products[Price]))
Avg Basket = AVERAGEX(VALUES(Sales[OrderID]), [Total Sales])`,
    output: "Revenue is calculated row by row and then summed. Avg Basket is the average total per order in the current filter.",
    exercise: "Write a measure for average sales per customer using AVERAGEX and VALUES(Sales[CustomerID]).",
  },
  {
    id: "pbi-variables-switch",
    title: "VAR, IF and SWITCH for readable measures",
    theory: "VAR stores a value or table under a name inside a measure and RETURN gives the final result. Variables make formulas readable and calculate a value only once. IF chooses between two results and SWITCH(TRUE(), ...) handles several conditions in order, like IFS in Excel.",
    why: "Long nested formulas are hard to debug. Variables let you check each step.",
    when: "Use VAR for any value used more than once or any step that deserves a name. Use SWITCH(TRUE()) instead of deeply nested IF statements.",
    realWorld: "A report labels each customer segment High, Medium or Low based on sales.",
    code: `Order Band =
VAR Amt = [Total Sales]
RETURN
  SWITCH(
    TRUE(),
    Amt >= 5000, "High",
    Amt >= 1000, "Medium",
    "Low"
  )`,
    output: "A text label of High, Medium or Low for each customer, product or row in a visual.",
    exercise: "Rewrite the Region Share measure using VAR for the total and the denominator.",
  },
  {
    id: "pbi-time-intelligence",
    title: "Time intelligence: YTD, previous year and month over month",
    theory: "Time-intelligence functions shift or expand the date filter. TOTALYTD gives year to date, SAMEPERIODLASTYEAR looks at the same dates in the previous year, DATEADD moves the period by months or years and DATESINPERIOD takes a rolling window. They need a continuous Date table marked as the date table.",
    why: "Almost every business report compares this period with a previous period or shows cumulative progress.",
    when: "Always use the Date table column inside these functions, not the date column of the fact table. Wrap growth calculations in DIVIDE to avoid errors when the previous value is blank.",
    realWorld: "A dashboard shows year-to-date revenue, growth compared with last year and the last three months.",
    code: `Sales YTD = TOTALYTD([Total Sales], 'Date'[Date])
Sales LY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))
YoY % = DIVIDE([Total Sales] - [Sales LY], [Sales LY])
Sales PM = CALCULATE([Total Sales], DATEADD('Date'[Date], -1, MONTH))
MoM % = DIVIDE([Total Sales] - [Sales PM], [Sales PM])
Sales Last 3M =
  CALCULATE([Total Sales], DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -3, MONTH))`,
    output: "Cumulative revenue for the year, last year's revenue for the same period, year-over-year and month-over-month growth percentages and a rolling 3-month total.",
    exercise: "Create a Quarter to Date measure using TOTALQTD and show it in a line chart by month.",
  },
  {
    id: "pbi-rankx-topn",
    title: "Ranking and top N with RANKX and TOPN",
    theory: "RANKX gives each item a rank based on a measure. TOPN returns the top N rows of a table by an expression. Combined with CALCULATE, TOPN lets a measure add up only the top items. Visual-level Top N filters also work without DAX.",
    why: "Best sellers, top customers and the 80/20 rule are everyday questions for analysts.",
    when: "Use ALL(Products[ProductName]) inside RANKX so that the rank is calculated against all products, not only the filtered ones. Decide how to handle ties (Dense or Skip).",
    realWorld: "A category manager ranks products by revenue and shows what share of sales the top five products produce.",
    code: `Product Rank = RANKX(ALL(Products[ProductName]), [Total Sales], , DESC, Dense)

Top 5 Sales =
CALCULATE([Total Sales], TOPN(5, ALL(Products[ProductName]), [Total Sales], DESC))

Top 5 Share = DIVIDE([Top 5 Sales], CALCULATE([Total Sales], ALL(Products)))`,
    output: "A rank number for each product, the revenue of the top five products and the percentage of total revenue they represent.",
    exercise: "Change the measure to show the top 10 customers by sales.",
  },
  {
    id: "pbi-statistics-dax",
    title: "Statistics in DAX: median, percentile, standard deviation and z-score",
    theory: "DAX has MEDIAN, PERCENTILE.INC, STDEV.S and VAR.S for columns, and X versions such as MEDIANX, PERCENTILEX.INC and STDEVX.S that calculate over a measure for each item in a table. With the mean and standard deviation you can calculate a z-score and flag outliers.",
    why: "Averages can hide skew and outliers. Reporting the median, percentiles and outlier flags gives managers a truer picture.",
    when: "Use the X versions when the statistic is over a measure (for example order totals) instead of over a single column. Use ALLSELECTED so the mean and standard deviation respect the slicers but not the row.",
    realWorld: "A finance team flags orders more than three standard deviations from the average order value.",
    code: `Median Order = MEDIANX(VALUES(Sales[OrderID]), [Total Sales])
P90 Order = PERCENTILEX.INC(VALUES(Sales[OrderID]), [Total Sales], 0.9)
Mean Order = AVERAGEX(ALLSELECTED(Sales[OrderID]), [Total Sales])
Std Order = STDEVX.S(ALLSELECTED(Sales[OrderID]), [Total Sales])
Order Z-Score = DIVIDE([Total Sales] - [Mean Order], [Std Order])
Outlier Flag = IF(ABS([Order Z-Score]) > 3, "Outlier", "Normal")`,
    output: "The median and 90th percentile order value, and an Outlier or Normal flag for each order in a table visual.",
    exercise: "Add a table visual with OrderID, Total Sales and Outlier Flag and filter it to show only outliers.",
  },
  {
    id: "pbi-visual-choice",
    title: "Choosing the right visual and layout",
    theory: "Choose the visual from the question: card for one KPI, line chart for time trends, bar or column chart for comparing categories, scatter chart for relationships, matrix or table for exact values, map for geography, histogram-style column charts for distributions. Layout should lead the eye from the most important KPIs at the top left to details below.",
    why: "A suitable visual makes the answer obvious. A poor choice (too many pie slices, 3-D effects, unsorted bars) hides it.",
    when: "Sort bars, limit categories, keep colours meaningful, label axes and units, and use consistent fonts. Use at most about 6 to 8 visuals per page and give the page a clear title.",
    realWorld: "A sales page has KPI cards on top, a line chart for trend, a sorted bar chart by region and a matrix for product detail.",
    code: `Question                          Visual
How much in total?                Card
How did it change over time?      Line chart
Which category is biggest?        Sorted bar chart
Are two numbers related?          Scatter chart
What are the exact values?        Table or matrix
Where is it happening?            Map
How is it distributed?            Column chart of bins`,
    output: "A page where each visual answers one clear question.",
    exercise: "Pick a dataset and list the five questions a manager would ask, then choose a visual for each.",
  },
  {
    id: "pbi-interactivity",
    title: "Slicers, cross-filtering, drill-through and bookmarks",
    theory: "Slicers filter the whole page or report. Clicking a bar or point cross-filters or cross-highlights other visuals, and Edit interactions controls this. Drill-down moves through a hierarchy (year, quarter, month). Drill-through opens a detail page for a selected item. Bookmarks save a view, and tooltips pages show extra detail on hover.",
    why: "Interactivity lets users explore their own questions without asking the analyst for a new report.",
    when: "Place slicers consistently, sync them across pages when needed, and test every interaction. Do not overload a page with slicers.",
    realWorld: "A manager clicks the South region, drills through to a customer detail page and returns with the back button.",
    code: `Slicer:        Insert > Slicer > Customers[Region]
Interactions:  Format > Edit interactions (choose filter, highlight or none)
Drill-through: Drag Customers[Name] into 'Drill through' on the detail page
Bookmarks:     View > Bookmarks > Add (use with buttons for view switching)`,
    output: "A report where selecting a region filters the other visuals, and right-clicking a customer opens the detail page.",
    exercise: "Create a drill-through page for a product that shows its monthly trend and top customers.",
  },
  {
    id: "pbi-kpi-formatting",
    title: "KPI cards and conditional formatting",
    theory: "KPI cards show a value, a comparison and a trend. Conditional formatting colours cells, bars or text using rules or a measure, so good and bad results stand out. A variance measure compares actual with target and can drive the colour.",
    why: "Managers scan for exceptions first. Colour rules and clear targets reduce the time to find problems.",
    when: "Use colour sparingly, keep green and red meanings consistent and consider colour-blind-safe palettes. Show the target or previous period next to the value so the colour has context.",
    realWorld: "A card shows revenue with the percentage difference from target and turns red when sales fall below target.",
    code: `Target = 500000
Variance % = DIVIDE([Total Sales] - [Target], [Target])
Status Color = IF([Variance %] >= 0, "#2E7D32", "#C62828")

-- Format > Conditional formatting > Font color > Format style: Field value > Status Color`,
    output: "A revenue card whose number turns green when it meets the target and red when it does not.",
    exercise: "Add a data bar to a table column that shows sales by product.",
  },
  {
    id: "pbi-analytics-features",
    title: "Built-in analytics: forecast, anomalies, key influencers and clustering",
    theory: "Power BI includes analytics tools: the Analytics pane adds trend lines, averages, constant lines and forecasts to line charts; anomaly detection marks unusual points on a time series; Key Influencers shows which fields most affect a metric; Decomposition Tree breaks a total down step by step; and Clustering on scatter charts groups similar points automatically.",
    why: "They give quick data-science insight inside a dashboard and help decide where to investigate with Python or a full model.",
    when: "Treat them as exploration aids, not final proof. Check the data volume, understand the options such as forecast length and confidence interval, and explain the limits to the audience.",
    realWorld: "An analyst uses Key Influencers to see what drives customer churn and uses a forecast line for the next three months of sales.",
    code: `Line chart > Analytics pane > Forecast > Forecast length: 3 months, Confidence interval: 95%
Line chart > Analytics pane > Find anomalies > Sensitivity: medium
Visualizations > Key influencers > Analyze: Churned = Yes, Explain by: Plan, Tenure, City
Scatter chart > ... > Automatically find clusters`,
    output: "A forecast band for the next three months, highlighted anomaly points, a ranked list of factors linked to churn and coloured clusters on the scatter chart.",
    exercise: "Build a line chart of monthly sales, add a forecast and describe how reliable it looks.",
  },
  {
    id: "pbi-python-visuals",
    title: "Using Python in Power BI",
    theory: "Power BI can run a Python script as a data source (to load or generate a table) and as a Python visual, where the fields you drag in arrive as a pandas DataFrame called dataset and the script draws a chart with Matplotlib or Seaborn. The visual updates when filters change but is rendered as an image.",
    why: "Python adds statistical plots and models that Power BI does not offer, such as a correlation heatmap or a regression line.",
    when: "Install Python and the libraries locally and set the path in Options. Keep scripts short, remember Python visuals are not interactive and need a gateway setup to refresh online. Use native visuals when they are enough.",
    realWorld: "An analyst adds a regression plot of ad spend versus sales to a marketing report.",
    code: `# Python visual: 'dataset' holds the fields added to the visual
import matplotlib.pyplot as plt

df = dataset.groupby("Region", as_index=False)["Amount"].sum()
plt.bar(df["Region"], df["Amount"])
plt.title("Revenue by region")
plt.ylabel("Amount")
plt.show()`,
    output: "A bar chart image of revenue by region that changes when the report filters change.",
    exercise: "Use a Python visual with seaborn.regplot to show the relationship between two numeric fields.",
  },
  {
    id: "pbi-publish-rls",
    title: "Publishing, refresh and row-level security",
    theory: "Publishing sends the report and its semantic model to a workspace in the Power BI Service. Scheduled refresh updates the data, and a gateway is needed for on-premises sources. Row-level security (RLS) uses roles with DAX filters so each user sees only their rows, and dynamic RLS can match USERPRINCIPALNAME() to a column such as email.",
    why: "A report is only useful if the right people can see current data, and sensitive data must be limited by role.",
    when: "Test roles with View as before sharing, use workspaces and apps to manage access, and never rely on hidden pages for security. Set a refresh schedule that matches how often the source changes.",
    realWorld: "Each regional manager opens the same report but sees only their own region.",
    code: `-- RLS role "South Managers": table filter on Customers
[Region] = "South"

-- Dynamic RLS: filter on a Users table
[Email] = USERPRINCIPALNAME()

Home > Publish > select workspace
Service > Dataset > Settings > Scheduled refresh`,
    output: "A published report with a refresh schedule, where each user sees only the rows allowed by their role.",
    exercise: "Create a role for the North region and use View as to confirm that only North data appears.",
  },
  {
    id: "pbi-performance",
    title: "Making reports faster",
    theory: "Report speed depends on model size, DAX and visuals. Performance Analyzer (View menu) records how long each visual takes. Common improvements are removing unused columns and tables, using a star schema, avoiding high-cardinality columns such as date-times and long text, preferring measures to calculated columns, and reducing the number of visuals on a page.",
    why: "Slow reports frustrate users and reduce trust, and large models are expensive to refresh.",
    when: "Measure first with Performance Analyzer, then fix the slowest visual. Filter data in Power Query to only what is needed and split date-times into a date and a time column if both are required.",
    realWorld: "A dashboard that took 12 seconds to open becomes much faster after removing 20 unused columns and replacing a calculated column with a measure.",
    code: `View > Performance analyzer > Start recording > Refresh visuals
  - Check the DAX query time and the visual display time of each visual.

Checklist
  [ ] Remove unused columns and tables
  [ ] Star schema with numeric keys
  [ ] Split date-time into date and time
  [ ] Use measures instead of calculated columns
  [ ] Limit visuals per page`,
    output: "A list of visuals with their load times, so you can see which one is the slowest and why.",
    exercise: "Record a page with Performance Analyzer and identify the slowest visual and one possible fix.",
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
    id: "excel",
    title: "Excel for Data Science",
    description: "Clean, analyse and visualise data in Excel: tables, formulas, pivots, Power Query, statistics and what-if analysis.",
    level: "Beginner",
    stage: "Foundations",
    lessons: excelLessons,
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
    id: "powerbi",
    title: "Power BI for Data Science",
    description: "Connect, model and analyse data with Power Query and DAX, then build interactive, secure dashboards.",
    level: "Intermediate",
    stage: "Data Analysis",
    lessons: powerBiLessons,
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