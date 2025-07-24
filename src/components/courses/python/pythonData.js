export const pythonData = [
  {
    key: "Intro",
    title: "What is Python",
    sections: [
      {
        type: "title",
        content: "What is Python",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.",
      },
      {
        type: "paragraph",
        content: "It is used for:",
        bold: true,
      },
      {
        type: "list",
        items: [
          "web development (server-side)",
          "software development",
          "mathematics",
          "system scripting",
          "data analysis and visualization",
          "artificial intelligence and machine learning",
        ],
      },
      {
        type: "paragraph",
        content: "What can Python do?",
        bold: true,
      },
      {
        type: "list",
        items: [
          "Python can be used on a server to create powerful  web applications .",
          "Python can connect to  database systems . It can also read and modify files.",
          "Python can be used to handle  big data  and perform complex mathematics.",
          "Python can be used for  rapid prototyping , or for production-ready software development.",
          "Python can be used alongside software to create  workflows .",
        ],
      },
      {
        type: "paragraph",
        content: "Why Python?",
        bold: true,
      },
      {
        type: "list",
        items: [
          "Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).",
          "Python has a  simple syntax  similar to the English language, making it easy to learn.",
          "Python has syntax that allows developers to write programs with  fewer lines of code  compared to some other programming languages.",
          "Python runs on an  interpreter system , meaning that code can be executed as soon as it is written. This speeds up development and prototyping.",
          "Python can be treated in an object-oriented, functional, or procedural way.",
        ],
      },
    ],
  },
  {
    key: "Installation",
    title: "Installation & Setup",
    sections: [
      {
        type: "title",
        content: "Python Installation & Setup",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "To start writing and running Python code, you'll need to install the Python interpreter on your computer. This section guides you through the process.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Step 1: Download Python",
        level: 2,
      },
      {
        type: "paragraph",
        content: `The official source for downloading Python is the Python Software Foundation's website.`,
      },
      {
        type: "list",
        items: [
          `Go to the official Python website: https://www.python.org/downloads`,
          "Look for the latest stable release. It's usually prominently displayed (e.g., 'Download Python 3.x.x').",
          "Click on the download link for your operating system (Windows, macOS, Linux).",
        ],
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Step 2: Install Python",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "The installation process varies slightly depending on your operating system.",
      },
      {
        type: "title",
        content: "For Windows:",
        level: 3,
      },
      {
        type: "list",
        items: [
          "Once the installer (`.exe` file) is downloaded, double-click it to run.",
          "IMPORTANT: On the first screen of the installer, check the box that says 'Add Python to PATH'. This step is crucial as it allows you to run Python from your command prompt/terminal from any directory.",
          "You can choose 'Install Now' for a typical installation or 'Customize installation' for more options (usually 'Install Now' is sufficient).",
          "Follow the on-screen prompts. Click 'Yes' if prompted by User Account Control.",
          "Once the installation is complete, you should see a 'Setup was successful' message.",
        ],
      },
      {
        type: "title",
        content: "For macOS:",
        level: 3,
      },
      {
        type: "list",
        items: [
          "Download the macOS installer (`.pkg` file).",
          "Double-click the downloaded file to start the installer.",
          "Follow the on-screen instructions. You can generally click 'Continue' and 'Agree' through the steps.",
          "Python usually installs to `/usr/local/bin/python3` and adds itself to your PATH automatically. You might be prompted for your administrator password.",
        ],
      },
      {
        type: "title",
        content: "For Linux (Ubuntu/Debian-based):",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Many Linux distributions come with Python pre-installed. However, it might be an older version (Python 2.x). It's good practice to install the latest Python 3.x alongside it.",
      },
      {
        type: "list",
        items: [
          "Open your terminal.",
          "Update your package list: `sudo apt update`",
          "Install Python 3 and pip (Python's package installer): `sudo apt install python3 python3-pip`",
          "You might need `sudo apt install build-essential libssl-dev libffi-dev` for some packages later on.",
        ],
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Step 3: Verify Installation",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "After installation, it's important to verify that Python is correctly installed and accessible from your command line/terminal.",
      },
      {
        type: "list",
        items: [
          "Open your command prompt (Windows: Search for `cmd` or `Command Prompt`) or terminal (macOS/Linux: Search for `Terminal`).",
          "Type the following command and press Enter:",
        ],
      },
      {
        type: "codeblock",
        title: "Verify Python Version",
        code: `python --version`,
        language: "bash",
      },
      {
        type: "paragraph",
        content: "Or, if `python --version` shows Python 2.x, try:",
      },
      {
        type: "codeblock",
        title: "Verify Python 3 Version",
        code: `python3 --version`,
        language: "bash",
      },
      {
        type: "paragraph",
        content:
          "You should see output similar to `Python 3.x.x` (where `x.x` is the version you installed). If you get an error like 'command not found', it means Python was not added to your PATH correctly. For Windows, rerun the installer and ensure 'Add Python to PATH' is checked. For macOS/Linux, you might need to manually add it to your shell's configuration file (e.g., `.bashrc`, `.zshrc`).",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Step 4: Verify pip Installation",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "pip is Python's package installer. It's used to install and manage third-party libraries and modules that extend Python's capabilities. It's usually installed automatically with Python 3.x.",
      },
      {
        type: "list",
        items: ["In your command prompt/terminal, type:"],
      },
      {
        type: "codeblock",
        title: "Verify pip Version",
        code: `pip --version`,
        language: "bash",
      },
      {
        type: "paragraph",
        content: "Or, if you used `python3`:",
      },
      {
        type: "codeblock",
        title: "Verify pip3 Version",
        code: `pip3 --version`,
        language: "bash",
      },
      {
        type: "paragraph",
        content:
          "You should see output indicating the pip version (e.g., `pip 23.x.x from ...`). If `pip` is not found, you might need to install it manually. For Windows, the Python installer often includes it. For Linux, you installed it with `python3-pip`.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Step 5: Setting Up a Development Environment (Recommended)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "While you can write Python code in any text editor, using an Integrated Development Environment (IDE) or a Code Editor can greatly enhance your coding experience with features like syntax highlighting, auto-completion, debugging, and project management.",
      },
      {
        type: "paragraph",
        content: "Popular choices include:",
      },
      {
        type: "list",
        items: [
          "VS Code (Visual Studio Code): A popular, lightweight, and highly customizable code editor with excellent Python support via extensions. (Recommended for beginners)",
          "PyCharm: A powerful and full-featured IDE specifically designed for Python development (Community Edition is free).",
          "Jupyter Notebook/Lab: Great for data science, machine learning, and interactive coding.",
          "IDLE: Python's own integrated development and learning environment (comes with Python installation). Good for quick tests.",
        ],
      },
      {
        type: "paragraph",
        content:
          "We recommend VS Code for a balanced learning and development experience:",
      },
      {
        type: "list",
        items: [
          "Download VS Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)",
          "Install it like any other application.",
          "Open VS Code, go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X), search for 'Python' by Microsoft, and install it.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Congratulations! You now have Python installed and a development environment set up. You're ready to start coding in Python!",
      },
    ],
  },
  {
    key: "Syntax",
    title: "Execute Python Syntax",
    sections: [
      {
        type: "title",
        content: "Execute Python Syntax",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "You can execute Python syntax directly in the Command Line (or your terminal):",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `print("Hello World")
# Output: Hello World`,
        language: "python",
      },
      {
        type: "paragraph",
        content: `Alternatively, you can save your Python code in a file with a .py extension (e.g., "myprogram.py") and then run it from the command line:`,
      },
      {
        type: "codeblock",
        title: 'Example ("myprogram.py"):',
        code: `print("Hello from a Python file!")`,
        language: "python",
      },
      {
        type: "paragraph",
        content: "To run it, open your terminal and type:",
      },
      {
        type: "codeblock",
        title: "Command Line:",
        code: `python myprogram.py
# Output: Hello from a Python file!`,
        language: "bash",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Python Indentation",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          " Indentation  refers to the spaces at the beginning of a code line. Unlike many other programming languages where indentation is just for readability, in Python, it's crucial!",
      },
      {
        type: "paragraph",
        content:
          "Python uses indentation to define blocks of code, such as the code inside a loop, a function, or an if statement.",
      },
      {
        type: "codeblock",
        title: "Correct Indentation Example:",
        code: `if 5 > 2:
  print("Five is greater than two!") # This line is indented by 4 spaces
  `,
        language: "python",
        bgColor: "bg-green-100",
      },
      {
        type: "paragraph",
        content:
          "Python will give you an error if you skip the indentation where it's expected:",
      },
      {
        type: "codeblock",
        title: "Indentation Error Example:",
        code: `if 5 > 2:
  print("Five is greater than two!") # Indentation Error!`,
        language: "python",
        bgColor: "bg-red-100",
      },
      {
        type: "paragraph",
        content:
          "The number of spaces you use for indentation is up to you, but typically, four spaces are used. The important thing is that it must be at least one space, and you must use the same number of spaces within the same block of code.",
      },
      {
        type: "codeblock",
        title: "Consistent Indentation Example:",
        code: `if 5 > 2:
      print("Five is greater than two!") # 4 spaces
      print("Another line in the same block.") # 4 spaces
  if 10 > 7:
    print("Ten is greater than seven!") # 2 spaces
    print("Still in the block.") # 2 spaces`,
        language: "python",
        bgColor: "bg-green-100",
      },
      {
        type: "paragraph",
        content:
          "If you mix the number of spaces within the same block, Python will throw an error:",
      },
      {
        type: "codeblock",
        title: "Inconsistent Indentation Error:",
        code: `if 5 > 2:
      print("Five is greater than two!")
        print("This will cause an error!") # Inconsistent indentation`,
        language: "python",
        bgColor: "bg-red-100",
      },
    ],
  },
  {
    key: "Comment",
    title: "Comments in Python",
    sections: [
      {
        type: "title",
        content: "Comments in Python",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "Comments are notes within your code that the Python interpreter ignores. They are incredibly useful for:",
      },
      {
        type: "list",
        items: [
          "Explaining your code: Making it easier for you (and others) to understand what your code does.",
          "Making code more readable: Breaking down complex logic into simpler, understandable parts.",
          "Preventing execution: Temporarily disabling lines of code for testing or debugging.",
        ],
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Single-Line Comments",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "A single-line comment starts with a  hash symbol (`#`) . Python will ignore everything from the `#` to the end of that line:",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `# This is a single-line comment
  print("Hello World!") # This comment explains the print statement`,
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Multi-Line Comments",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Python doesn't have a specific syntax for multi-line comments like some other languages. However, there are two common ways to achieve them:",
      },
      {
        type: "paragraph",
        content: " Using multiple single-line comments",
      },
      {
        type: "paragraph",
        content:
          "You can simply place a `#` at the beginning of each line you want to comment out:",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `# This is the first line of my multi-line comment.
# This is the second line.
# And this is the third.
print("Hello World!")`,
        language: "python",
      },
      {
        type: "paragraph",
        content: "Using triple quotes (Docstrings)",
      },
      {
        type: "paragraph",
        content:
          "Python ignores string literals that are not assigned to a variable. You can use triple quotes (`'''` or `\"\"\"`) to create a multi-line string, and effectively use it as a multi-line comment.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `"""
  This is a multi-line comment.
  It can span across several lines.
  Python will ignore this block.
"""
  print("Hello World!")
  '''
  You can also use single triple quotes
  for multi-line comments.
  '''
  print("Python is fun!")`,
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "While these triple-quoted strings are often used for  docstrings  (documentation strings for modules, functions, classes, and methods), they also serve as a practical way to write multi-line comments.",
      },
    ],
  },
  {
    key: "Variable",
    title: "Python Variables",
    sections: [
      {
        type: "title",
        content: "Python Variables",
        level: 1,
      },
      {
        type: "title",
        content: "Understanding Variables",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Think of  variables  as labeled boxes or containers in your computer's memory where you can store different types of information (data values). When you need to use that information, you just refer to the label (the variable's name).",
      },
      {
        type: "title",
        content: "Creating Variables",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Unlike some other programming languages, Python has  no special command for declaring a variable . A variable is simply created the moment you first assign a value to it using the assignment operator (`=`).",
      },
      {
        type: "codeblock",
        title: "Example: Assigning Values to Variables",
        code: `  age = 30           # 'age' is a variable storing the integer 30
  name = "Alice"     # 'name' is a variable storing the string "Alice"
  is_student = True  # 'is_student' is a variable storing the boolean True
  print(age)         # Output: 30
  print(name)        # Output: Alice
  print(is_student)  # Output: True`,
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Variables in Python are flexible. They  do not need to be declared with any particular type , and can even change their type after they have been set. This is known as  dynamic typing .",
      },
      {
        type: "codeblock",
        title: "Example: Changing Variable Type",
        code: `  my_variable = 10      # 'my_variable' is an integer
  print(my_variable)    # Output: 10
  my_variable = "Hello" # Now 'my_variable' is a string
  print(my_variable)    # Output: Hello`,
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Variable Naming Rules",
        level: 2,
      },
      {
        type: "paragraph",
        content: "When you name your variables, follow these simple rules:",
      },
      {
        type: "list",
        items: [
          "A variable name must start with a letter (a-z, A-Z) or an underscore (`_`). It cannot start with a number.",
          "A variable name can only contain alpha-numeric characters (A-z, 0-9) and underscores (`_`).",
          "Variable names are  case-sensitive  (`age`, `Age`, and `AGE` are three different variables).",
          "Reserved keywords (like `if`, for, while, `print`, etc.) cannot be used as variable names.",
        ],
      },
      {
        type: "codeblock",
        title: "Valid and Invalid Variable Names:",
        code: `# Valid variable names:
  my_name = "John"
  _private_var = 123
  number1 = 50
# Invalid variable names (will cause an error):
  2times = "hello"     # Cannot start with a number
  my-variable = "test" # Hyphens are not allowed
  for = "loop"         # 'for' is a reserved keyword`,
        language: "python",
        bgColor: "bg-orange-100",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Casting (Specifying Data Type)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Even though Python is dynamically typed, you can explicitly specify the data type of a variable using  casting functions . This can be useful when you want to ensure a variable holds a specific type, for example, converting a number from a string to an integer.",
      },
      {
        type: "codeblock",
        title: "Example: Type Casting",
        code: `  x = str(15)        # x will be the string '15'
  y = int("20")      # y will be the integer 20
  z = float(3.14)    # z will be the float 3.14
  a = int(5.9)       # a will be the integer 5 (truncates decimal)
  print(x, type(x))  # Output: 15 <class 'str'>
  print(y, type(y))  # Output: 20 <class 'int'>
  print(z, type(z))  # Output: 3.14 <class 'float'>
  print(a, type(a))  # Output: 5 <class 'int'>`,
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Get Type of Variables",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "You can find out the data type of any variable using the built-in `type()` function. This is great for understanding how Python is interpreting your data.",
        highlights: [{ text: "type()", color: "red-600" }],
      },
      {
        type: "codeblock",
        title: "Example: Using type()",
        code: `  quantity = 100
  product_name = "Laptop"
  price = 1299.99
  is_available = True
  print(type(quantity))       # Output: <class 'int'>
  print(type(product_name))   # Output: <class 'str'>
  print(type(price))          # Output: <class 'float'>
  print(type(is_available))   # Output: <class 'bool'>`,
        language: "python",
      },
    ],
  },
  {
    key: "Datatype",
    title: "Python Data Types",
    sections: [
      {
        type: "title",
        content: "Python Data Types: The Building Blocks of Information",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "In programming, data types classify the kind of values that a variable can hold. Understanding data types is crucial because they determine what operations you can perform on the data. Python automatically assigns data types based on the value you give to a variable.",
      },
      {
        type: "paragraph",
        content:
          "Python has several built-in data types. Let's explore the most common ones:",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Text Type: `str` (String)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "A string (`str`) is used to store sequences of characters, like text. Strings are enclosed in single quotes ('...') or double quotes (\"...\").",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: "my_greeting = \"Hello, world!\"\nfavorite_char = 'A'\nsentence = 'Python is a very popular language for data science.'\n\nprint(type(my_greeting)) # Output: <class 'str'>\nprint(favorite_char)",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Numeric Types: int, float, complex",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Python supports various numeric types for working with numbers.",
      },
      {
        type: "title",
        content: "Integer (int)",
        level: 4,
      },
      {
        type: "paragraph",
        content:
          "An integer (int) is a whole number (positive, negative, or zero) without a decimal point.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: "age = 25\nyear = -2023\nzero_value = 0\n\nprint(type(age)) # Output: <class 'int'>\nprint(year)",
        language: "python",
      },
      {
        type: "title",
        content: "Floating Point Number (`float`)",
        level: 4,
      },
      {
        type: "paragraph",
        content:
          "A float (`float`) is a number with a decimal point, used for representing real numbers.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: "price = 19.99\npi_value = 3.14159\ntemperature = -4.5\n\nprint(type(price)) # Output: <class 'float'>\nprint(pi_value)",
        language: "python",
      },
      {
        type: "title",
        content: "Complex Number (`complex`)",
        level: 4,
      },
      {
        type: "paragraph",
        content:
          "A complex (`complex`) number is written with a 'j' as the imaginary part (e.g., `3 + 5j`).",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: "complex_num = 3 + 5j\nanother_complex = -1j\n\nprint(type(complex_num)) # Output: <class 'complex'>\nprint(another_complex)",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Boolean Type: `bool`",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "A boolean (`bool`) represents one of two values: `True` or `False`. Booleans are essential for conditional logic (making decisions in your code).",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: "is_sunny = True\nhas_permission = False\n\nprint(type(is_sunny)) # Output: <class 'bool'>\nprint(has_permission)",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Sequence Types: `list`, `tuple`, `range`",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These types are used to store collections of items in a specific order.",
      },
      {
        type: "title",
        content: " List (`list`)",
        level: 4,
      },
      {
        type: "paragraph",
        content:
          "A list (`list`) is an ordered, changeable (mutable) collection of items. Lists are written with square brackets (`[]`). They can hold items of different data types.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'fruits = ["apple", "banana", "cherry"]\nmixed_list = [1, "hello", True, 3.14]\n\nprint(type(fruits)) # Output: <class \'list\'>\nprint(fruits[0])    # Accessing items: Output: apple\nfruits.append("orange") # Lists can be changed\nprint(fruits)',
        language: "python",
      },
      {
        type: "title",
        content: " Tuple (`tuple`)",
        level: 4,
      },
      {
        type: "paragraph",
        content:
          "A tuple (`tuple`) is an ordered, unchangeable (immutable) collection of items. Tuples are written with round brackets (`()`). Once created, you cannot change, add, or remove items from a tuple.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'coordinates = (10, 20)\ncolors = ("red", "green", "blue")\n\nprint(type(coordinates)) # Output: <class \'tuple\'>\nprint(colors[1])         # Accessing items: Output: green\n# colors.append("yellow") # This would cause an error!',
        language: "python",
      },
      {
        type: "title",
        content: " Range (`range`)",
        level: 4,
      },
      {
        type: "paragraph",
        content:
          "A range (`range`) type represents an immutable sequence of numbers, often used for looping a specific number of times without storing all numbers in memory.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: "numbers = range(5) # Represents numbers from 0 to 4 (0, 1, 2, 3, 4)\nfor i in numbers:\n    print(i) # Prints 0, 1, 2, 3, 4\n\nprint(type(numbers)) # Output: <class 'range'>",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Mapping Type: `dict` (Dictionary)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "A dictionary (`dict`) is an unordered, changeable, and indexed collection of key-value pairs. Dictionaries are written with curly brackets (`{}`) and store data in a `key: value` format.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'person = {\n    "name": "Alice",\n    "age": 30,\n    "city": "New York"\n}\n\nprint(type(person))      # Output: <class \'dict\'>\nprint(person["name"])    # Accessing value by key: Output: Alice\nperson["age"] = 31       # Modifying a value\nperson["occupation"] = "Engineer" # Adding a new key-value pair\nprint(person)',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Set Types: `set`, `frozenset`",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These types are used to store collections of unique items. They are unordered and do not support indexing.",
      },
      {
        type: "title",
        content: " Set (`set`)",
        level: 4,
      },
      {
        type: "paragraph",
        content:
          "A set is an unordered, unindexed, and changeable collection of unique items. Sets are written with curly brackets (`{}`). Duplicate values are automatically removed.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'unique_numbers = {1, 2, 3, 3, 4, 5}\nprint(unique_numbers)    # Output: {1, 2, 3, 4, 5} (duplicates removed)\n\nfruits_set = {"apple", "banana", "cherry"}\nfruits_set.add("orange") # Adding an item\nprint(fruits_set)\n\nprint(type(unique_numbers)) # Output: <class \'set\'>',
        language: "python",
      },
      {
        type: "title",
        content: " Frozenset (`frozenset`)",
        level: 4,
      },
      {
        type: "paragraph",
        content:
          "A frozenset (`frozenset`) is similar to a set, but it is immutable (unchangeable). Once created, you cannot add or remove items.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'immutable_set = frozenset({"a", "b", "c"})\nprint(immutable_set)\n\nprint(type(immutable_set)) # Output: <class \'frozenset\'>\n# immutable_set.add("d") # This would cause an error!',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Binary Types: `bytes`, `bytearray`, `memoryview`",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These are used for handling binary data (sequences of bytes), often in network communication or file handling.",
      },
      {
        type: "title",
        content: " Bytes (`bytes`)",
        level: 4,
      },
      {
        type: "paragraph",
        content:
          "The bytes (`bytes`) type represents an immutable sequence of single bytes.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: "binary_data = b\"hello\"\nprint(binary_data)        # Output: b'hello'\nprint(type(binary_data))  # Output: <class 'bytes'>",
        language: "python",
      },
      {
        type: "title",
        content: " Bytearray (`bytearray`)",
        level: 4,
      },
      {
        type: "paragraph",
        content:
          "The bytearray (`bytearray`) type is a mutable sequence of single bytes.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: "mutable_bytes = bytearray(b\"world\")\nmutable_bytes[0] = ord('W') # Change the first byte\nprint(mutable_bytes)         # Output: bytearray(b'World')\nprint(type(mutable_bytes))   # Output: <class 'bytearray'>",
        language: "python",
      },
    ],
  },
  {
    key: "Type casting",
    title: "Python Type Casting",
    sections: [
      {
        type: "title",
        content: "Python Type Casting: Changing Data Types",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "Sometimes you have data in one format (like text) but need it in another (like a number) to perform certain actions. Type casting is simply the way you tell Python to convert a value from one type to another.",
      },
      {
        type: "paragraph",
        content:
          "Python provides special functions for this, named after the data types themselves:",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "To Integer (int)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Use int() to turn something into a whole number. If it's a number with decimals, Python will just cut off the decimal part (it won't round!). If it's text, it must look exactly like a whole number.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'decimal_num = 3.9\nwhole_num = int(decimal_num)\nprint(f"3.9 becomes {whole_num}") # Output: 3.9 becomes 3\n\ntext_num = "42"\nreal_num = int(text_num)\nprint(f"\'42\' becomes {real_num}") # Output: \'42\' becomes 42\n\n# What won\'t work:\n# int("hello") # Error: can\'t convert text like this\n# int("3.14")  # Error: can\'t convert decimal text to int directly',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "To Decimal Number (float)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Use float() to turn something into a number with decimals. A whole number will simply get a `.0` added to it.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'my_integer = 5\nmy_float = float(my_integer)\nprint(f"5 becomes {my_float}") # Output: 5 becomes 5.0\n\ntext_decimal = "7.5"\nreal_decimal = float(text_decimal)\nprint(f"\'7.5\' becomes {real_decimal}") # Output: \'7.5\' becomes 7.5',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "To Text (`str()`)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Use `str()` to turn almost anything into text (a string). This is super useful when you want to display numbers or other data as part of a message.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'my_age = 25\nmessage = "I am " + str(my_age) + " years old."\nprint(message) # Output: I am 25 years old.\n\nactive_status = True\nstatus_text = str(active_status)\nprint(f"Boolean {active_status} as text: \'{status_text}\'") # Output: Boolean True as text: \'True\'',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "To True/False (`bool()`)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Use `bool()` to see if a value is considered 'true' or 'false' in Python. This is used for making decisions in your code.",
      },
      {
        type: "paragraph",
        content:
          "Almost everything is `True`, except for things that are 'empty' or `0`:",
      },
      {
        type: "list",
        items: [
          "The number `0` (and `0.0`)",
          'Empty text (`""`)',
          "Empty lists (`[]`), tuples (`()`), or dictionaries (`{}`)",
          "The special value `None` (which means 'no value')",
        ],
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'print(bool(10))        # Output: True (any non-zero number is True)\nprint(bool(0))         # Output: False\nprint(bool("hello"))   # Output: True (any non-empty text is True)\nprint(bool(""))        # Output: False (empty text is False)\nprint(bool([1, 2, 3])) # Output: True (non-empty list is True)\nprint(bool([]))        # Output: False (empty list is False)',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Converting Collections (list(), tuple(), set())",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "You can convert between different types of collections (like changing a string into a list of characters, or a list into a set to remove duplicates).",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: "word = \"Python\"\nletters = list(word)\nprint(f\"'{word}' as a list: {letters}\") # Output: 'Python' as a list: ['P', 'y', 't', 'h', 'o', 'n']\n\nnumbers_list = [1, 2, 3]\nnumbers_tuple = tuple(numbers_list)\nprint(f\"List {numbers_list} as a tuple: {numbers_tuple}\") # Output: List [1, 2, 3] as a tuple: (1, 2, 3)\n\nduplicate_items = [1, 2, 2, 3, 1]\nunique_items = set(duplicate_items)\nprint(f\"Original: {duplicate_items}, Unique: {unique_items}\") # Output: Original: [1, 2, 2, 3, 1], Unique: {1, 2, 3}",
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Understanding type casting helps you manage your data correctly in Python and makes your code more flexible!",
      },
    ],
  },
  {
    key: "Operators",
    title: "Python Operators",
    sections: [
      {
        type: "title",
        content: "Python Operators: Tools for Action",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "In Python, operators are special symbols or keywords that perform operations on values and variables. Think of them as verbs in your code – they tell Python what to do with your data. Let's look at the main types of operators.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. Arithmetic Operators (Math)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These operators are used for basic mathematical calculations.",
      },
      {
        type: "table",
        headers: ["Operator", "What it Does", "Example"],
        rows: [
          ["`+`", "Addition", "`5 + 3` gives `8`"],
          ["`-`", "Subtraction", "`10 - 4` gives `6`"],
          ["`*`", "Multiplication", "`6 * 2` gives `12`"],
          ["`/`", "Division (always float)", "`7 / 2` gives `3.5`"],
          [
            "`%`",
            "Modulus (remainder)",
            "`7 % 2` gives `1` (7 divided by 2 is 3 with 1 left over)",
          ],
          [
            "``",
            "Exponentiation (power)",
            "`2  3` gives `8` (2 to the power of 3)",
          ],
          [
            "`//`",
            "Floor Division (whole number result)",
            "`7 // 2` gives `3` (3.5 rounded down)",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'a = 10\nb = 3\n\nprint(f"Addition: {a + b}")     # Output: 13\nprint(f"Division: {a / b}")     # Output: 3.333...\nprint(f"Remainder: {a % b}")    # Output: 1\nprint(f"Power: {a  2}")       # Output: 100',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. Assignment Operators (Giving Values)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These are used to assign values to variables. They often combine an arithmetic operation with assignment, making your code shorter.",
      },
      {
        type: "table",
        headers: ["Operator", "Example", "Means the Same as"],
        rows: [
          ["`=`", "`x = 5`", "`x = 5`"],
          ["`+=`", "`x += 3`", "`x = x + 3`"],
          ["`-=`", "`x -= 2`", "`x = x - 2`"],
          ["`*=`", "`x *= 4`", "`x = x * 4`"],
          ["`/=`", "`x /= 2`", "`x = x / 2`"],
          ["`%=`", "`x %= 3`", "`x = x % 3`"],
        ],
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'score = 100\nprint(f"Initial score: {score}") # Output: Initial score: 100\n\nscore += 5   # Add 5 to score\nprint(f"Score after += 5: {score}") # Output: Score after += 5: 105\n\nscore /= 2   # Divide score by 2\nprint(f"Score after /= 2: {score}") # Output: Score after /= 2: 52.5',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "3. Comparison Operators (Comparing Values)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These operators compare two values and always give a `True` or `False` answer. They are essential for making decisions in your code.",
      },
      {
        type: "table",
        headers: ["Operator", "What it Does", "Example"],
        rows: [
          ["`==`", "Equal to", "`a == b` (Is 'a' equal to 'b'?)"],
          ["`!=`", "Not equal to", "`a != b` (Is 'a' not equal to 'b'?)"],
          ["`>`", "Greater than", "`a > b` (Is 'a' greater than 'b'?)"],
          ["`<`", "Less than", "`a < b` (Is 'a' less than 'b'?)"],
          [
            "`>=`",
            "Greater than or equal to",
            "`a >= b` (Is 'a' greater than or equal to 'b'?)",
          ],
          [
            "`<=`",
            "Less than or equal to",
            "`a <= b` (Is 'a' less than or equal to 'b'?)",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'x = 7\ny = 5\n\nprint(f"x == y: {x == y}") # Output: False\nprint(f"x > y: {x > y}")   # Output: True\nprint(f"x != y: {x != y}") # Output: True',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "4. Logical Operators (Combining Conditions)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These operators combine multiple conditional (True/False) statements to form more complex conditions.",
      },
      {
        type: "table",
        headers: ["Operator", "What it Does", "Example"],
        rows: [
          [
            "`and`",
            "True if both conditions are True",
            "`age > 18 and has_license`",
          ],
          [
            "`or`",
            "True if at least one condition is True",
            "`is_weekend or is_holiday`",
          ],
          [
            "`not`",
            "Reverses the result (True becomes False, False becomes True)",
            "`not is_raining`",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'temp = 25\nis_sunny = True\n\n# Is it warm AND sunny?\nprint(f"temp > 20 and is_sunny: {temp > 20 and is_sunny}") # Output: True\n\n# Is it cold OR raining?\nis_raining = False\nprint(f"temp < 10 or is_raining: {temp < 10 or is_raining}") # Output: False\n\n# Is it NOT sunny?\nprint(f"not is_sunny: {not is_sunny}") # Output: False',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "5. Identity Operators (Same Object?)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These operators check if two variables point to the exact same object in your computer's memory, not just if they have the same value.",
      },
      {
        type: "table",
        headers: ["Operator", "What it Does", "Example"],
        rows: [
          [
            "`is`",
            "Returns `True` if both variables refer to the same object",
            "`x is y`",
          ],
          [
            "`is not`",
            "Returns `True` if both variables do NOT refer to the same object",
            "`x is not y`",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'list1 = [1, 2, 3]\nlist2 = [1, 2, 3]\nlist3 = list1  # list3 now points to the SAME list as list1\n\nprint(f"list1 is list3: {list1 is list3}") # Output: True\nprint(f"list1 is list2: {list1 is list2}") # Output: False (different objects, even if values are same)',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "6. Membership Operators (Is it inside?)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These operators check if a value is present (`in`) or not present (`not in`) within a sequence (like a string, list, or tuple).",
      },
      {
        type: "table",
        headers: ["Operator", "What it Does", "Example"],
        rows: [
          [
            "`in`",
            "Returns `True` if the item is found in the sequence",
            "`'apple' in fruits`",
          ],
          [
            "`not in`",
            "Returns `True` if the item is NOT found in the sequence",
            "`'grape' not in fruits`",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'shopping_list = ["milk", "eggs", "bread"]\nmy_text = "Hello World"\n\nprint(f"\'eggs\' in shopping_list: {\'eggs\' in shopping_list}") # Output: True\nprint(f"\'cheese\' not in shopping_list: {\'cheese\' not in shopping_list}") # Output: True\nprint(f"\'World\' in my_text: {\'World\' in my_text}") # Output: True',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "7. Bitwise Operators (For Advanced Users)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These operators work directly on the individual bits (binary digits) of numbers. They are used in very specific, low-level programming tasks and are generally not needed for everyday Python coding. You can skip these for now if you're a beginner!",
      },
      {
        type: "table",
        headers: ["Operator", "What it Does"],
        rows: [
          ["`&`", "AND (Sets bit if both bits are 1)"],
          ["`|`", "OR (Sets bit if at least one bit is 1)"],
          ["`^`", "XOR (Sets bit if only one bit is 1)"],
          ["`~`", "NOT (Inverts all bits)"],
          ["`<<`", "Left Shift (Shifts bits to the left)"],
          ["`>>`", "Right Shift (Shifts bits to the right)"],
        ],
      },
      {
        type: "codeblock",
        title: "Example (Don't worry if this looks complex!):",
        code: 'num1 = 5  # Binary: 0101\nnum2 = 3  # Binary: 0011\n\nprint(f"5 & 3: {num1 & num2}") # Output: 1 (Binary: 0001)\nprint(f"5 | 3: {num1 | num2}") # Output: 7 (Binary: 0111)\nprint(f"5 << 1: {num1 << 1}") # Output: 10 (Binary: 1010)',
        language: "python",
      },
    ],
  },
  {
    key: "Input Output",
    title: "Python Input and Output",
    sections: [
      {
        type: "title",
        content: "Python Input and Output: Talking to Your Program",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "A program isn't very useful if it can't interact with the user! In Python, Input/Output (I/O) refers to how your program gets information from outside (like from the user) and how it sends information back out (like showing results on the screen).",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Getting Input: The input() Function",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "The input() function is used to get text (a string) from the user via the keyboard. When input() is called, your program will pause and wait for the user to type something and press Enter.",
      },
      {
        type: "list",
        items: [
          "Whatever the user types, input() always reads it as a string (text).",
          "You can put a message (a 'prompt') inside the parentheses `()` of input() to tell the user what to type.",
        ],
      },
      {
        type: "codeblock",
        title: "Example: Getting User's Name",
        code: 'name = input("Enter your name: ")\nprint(f"Hello, {name}!")',
        language: "python",
        comment:
          "# When you run this, it will first show: Enter your name: \n# You type 'Alice' and press Enter. Then it prints: Hello, Alice!",
      },
      {
        type: "codeblock",
        title: "Example: Getting Numbers (Requires Type Casting!)",
        code: 'age_str = input("Enter your age: ")\nage_int = int(age_str) # Convert the string to an integer\n\nyear_born = 2025 - age_int\nprint(f"You were born in {year_born}.")',
        language: "python",
        comment:
          "# Remember, input() gives you a string. If you need a number, use int() or float()!",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Showing Output: The print() Function",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "The print() function is how your program displays information to the console (your screen). It's one of the most used functions in Python!",
      },
      {
        type: "paragraph",
        content: "Basic Printing",
      },
      {
        type: "codeblock",
        title: "Example: Printing Text",
        code: "print(\"Welcome to Python!\")\nprint('This is another message.')",
        language: "python",
      },
      {
        type: "paragraph",
        content: " Printing Variables",
      },
      {
        type: "codeblock",
        title: "Example: Printing Variables",
        code: 'city = "London"\npopulation = 9000000\n\nprint(city)\nprint(population)',
        language: "python",
      },
      {
        type: "paragraph",
        content: " Printing Multiple Items",
      },
      {
        type: "paragraph",
        content:
          "You can print multiple items by separating them with commas `,`. By default, print() puts a space between each item.",
      },
      {
        type: "codeblock",
        title: "Example: Multiple Items",
        code: 'item = "Laptop"\nprice = 1200\nquantity = 2\n\nprint("You bought", quantity, item, "for $", price * quantity)',
        language: "python",
        comment: "# Output: You bought 2 Laptop for $ 2400",
      },
      {
        type: "paragraph",
        content: " Using `sep` and `end` Parameters (Advanced `print` Options)",
      },
      {
        type: "paragraph",
        content:
          "The print() function has optional parameters you can use to control its behavior:",
      },
      {
        type: "list",
        items: [
          "`sep` (separator): Specifies what to put between the items you're printing (default is a space ` `).",
          "`end`: Specifies what to print at the very end of the line (default is a new line character `\\n`).",
        ],
      },
      {
        type: "codeblock",
        title: "Example: `sep` and `end`",
        code: 'print("Apple", "Banana", "Cherry", sep="-")\n# Output: Apple-Banana-Cherry\n\nprint("Hello", end=" ")\nprint("World!")\n# Output: Hello World! (no new line between Hello and World!)',
        language: "python",
      },
      {
        type: "paragraph",
        content: " Formatted Output (f-strings revisited)",
      },
      {
        type: "paragraph",
        content:
          "For more controlled and readable output, especially when mixing text and variables, f-strings (formatted string literals) are highly recommended. We covered them briefly in the Strings section, but they are your go-to for printing clean messages.",
      },
      {
        type: "codeblock",
        title: "Example: Using f-strings for output",
        code: 'product = "Keyboard"\nstock = 15\n\nprint(f"Current stock of {product}: {stock} units.")\n# Output: Current stock of Keyboard: 15 units.\n\ndata_point = 123.4567\nprint(f"Value with 2 decimal places: {data_point:.2f}")\n# Output: Value with 2 decimal places: 123.46',
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Mastering input() and print() will allow your Python programs to interact effectively with users and display useful information!",
      },
    ],
  },
  {
    key: "String Manipulation",
    title: "Python String Manipulation",
    sections: [
      {
        type: "title",
        content: "Python String Manipulation: Playing with Text",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "In Python, strings are how we work with text. String manipulation means doing things like getting parts of text, changing its case, combining different pieces of text, or finding specific words. It's like editing a document, but with code!",
      },
      {
        type: "paragraph",
        content:
          "Remember from our 'Strings' topic: strings are sequences of characters. Also, strings are immutable, meaning once you create a string, you can't change it directly. Any operation that seems to change a string actually creates a *new* string.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. Accessing Parts of a String",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Strings are like a list of characters, and each character has a position (called an index). Python starts counting from `0`.",
      },
      {
        type: "paragraph",
        content: " Getting a Single Character (Indexing)",
      },
      {
        type: "codeblock",
        title: "Example: Indexing",
        code: 'my_word = "Python"\n\n# Get the first character (at index 0)\nfirst_char = my_word[0]\nprint(f"First char: {first_char}") # Output: P\n\n# Get the third character (at index 2)\nthird_char = my_word[2]\nprint(f"Third char: {third_char}")  # Output: t\n\n# Get the last character (using negative index -1)\nlast_char = my_word[-1]\nprint(f"Last char: {last_char}")   # Output: n',
        language: "python",
      },
      {
        type: "paragraph",
        content: " Getting a Section (Slicing)",
      },
      {
        type: "paragraph",
        content:
          "You can grab a whole section of a string (a 'slice') using `[start:end]`. The character at `end` is *not* included.",
      },
      {
        type: "codeblock",
        title: "Example: Slicing",
        code: "sentence = \"Hello World\"\n\n# Get characters from index 0 up to (but not including) 5\npart1 = sentence[0:5]\nprint(f\"Part 1: '{part1}'\") # Output: 'Hello'\n\n# Get characters from index 6 to the end\npart2 = sentence[6:]\nprint(f\"Part 2: '{part2}'\") # Output: 'World'\n\n# Get characters from the beginning up to (but not including) 5\npart3 = sentence[:5]\nprint(f\"Part 3: '{part3}'\") # Output: 'Hello'\n\n# A copy of the whole string\nwhole_copy = sentence[:]\nprint(f\"Whole copy: '{whole_copy}'\") # Output: 'Hello World'",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. Common String Operations (Methods)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Python strings have many built-in actions (called methods) you can use. You call them using a dot `.` after the string or variable name, like `my_string.method_name()`.",
      },
      {
        type: "title",
        content: " Finding Length (len())",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The len() function tells you how many characters are in a string.",
      },
      {
        type: "codeblock",
        title: "Example: Length",
        code: 'text = "Python"\nlength = len(text)\nprint(f"Length of \'{text}\': {length}") # Output: 6',
        language: "python",
      },
      {
        type: "title",
        content: " Joining Strings (Concatenation '+')",
        level: 3,
      },
      {
        type: "paragraph",
        content: "You can combine two or more strings using the `+` operator.",
      },
      {
        type: "codeblock",
        title: "Example: Concatenation",
        code: 'greeting = "Hello"\nname = "Alice"\nfull_message = greeting + " " + name + "!"\nprint(full_message) # Output: Hello Alice!',
        language: "python",
      },
      {
        type: "paragraph",
        content: " Changing Case",
      },
      {
        type: "list",
        items: [
          "string.lower(): Makes all letters lowercase.",
          "string.upper(): Makes all letters uppercase.",
          "string.capitalize(): Makes only the first letter uppercase.",
          "string.title(): Makes the first letter of *each word* uppercase.",
        ],
      },
      {
        type: "codeblock",
        title: "Example: Case Conversion",
        code: 'my_sentence = "PyThOn Is FuN"\n\nprint(f"Lowercase: {my_sentence.lower()}") # Output: python is fun\nprint(f"Uppercase: {my_sentence.upper()}") # Output: PYTHON IS FUN\nprint(f"Capitalize: {my_sentence.capitalize()}") # Output: python is fun\nprint(f"Title Case: {my_sentence.title()}") # Output: Python Is Fun',
        language: "python",
      },
      {
        type: "title",
        content: " Removing Spaces (strip())",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The strip() method removes any extra spaces (or other characters if you specify) from the beginning and end of a string.",
      },
      {
        type: "codeblock",
        title: "Example: Stripping Spaces",
        code: "username = \"   admin123   \"\nclean_username = username.strip()\nprint(f\"Clean username: '{clean_username}'\") # Output: 'admin123'",
        language: "python",
      },
      {
        type: "title",
        content: " Replacing Parts (replace())",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The replace() method finds a specific piece of text and replaces it with new text.",
      },
      {
        type: "codeblock",
        title: "Example: Replacing Text",
        code: 'old_text = "I like cats. My cat is fluffy."\nnew_text = old_text.replace("cat", "dog")\nprint(new_text) # Output: I like dogs. My dog is fluffy.',
        language: "python",
      },
      {
        type: "title",
        content: " Splitting and Joining (split(), join())",
        level: 3,
      },
      {
        type: "list",
        items: [
          "string.split(separator): Breaks a string into a list of smaller strings. You tell it what character(s) to split by (e.g., a space or a comma).",
          "separator.join(list_of_strings): Puts a list of strings together into one big string, using the `separator` you specify.",
        ],
      },
      {
        type: "codeblock",
        title: "Example: Splitting and Joining",
        code: 'data_line = "apple,banana,cherry"\nfruits_list = data_line.split(\',\') # Split by comma\nprint(f"Fruits list: {fruits_list}") # Output: [\'apple\', \'banana\', \'cherry\']\n\nwords = ["Learn", "Python", "Now!"]\nsentence = " ".join(words) # Join with a space in between\nprint(f"Joined sentence: \'{sentence}\'") # Output: \'Learn Python Now!\'',
        language: "python",
      },
      {
        type: "title",
        content: " Finding and Checking (find(), startswith(), endswith())",
        level: 3,
      },
      {
        type: "list",
        items: [
          "string.find(substring): Tells you the starting position (index) of the first time a `substring` appears. Returns `-1` if not found.",
          "string.startswith(prefix): Checks if the string begins with a specific prefix. Returns True or False.",
          "string.endswith(suffix): Checks if the string ends with a specific suffix. Returns `True` or False.",
        ],
      },
      {
        type: "codeblock",
        title: "Example: Finding and Checking",
        code: "file_name = \"report.pdf\"\nfull_message = \"Python programming is fun!\"\n\nprint(f\"Index of 'fun': {full_message.find('fun')}\") # Output: 22\nprint(f\"Starts with 'rep': {file_name.startswith('rep')}\") # Output: True\nprint(f\"Ends with '.txt': {file_name.endswith('.txt')}\") # Output: False",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "3. String Formatting (Combining Text and Variables)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Remember f-strings? They are the best way to combine variables with your text messages neatly. We covered them in the 'Strings' and 'Input/Output' topics, and they are a powerful tool for string manipulation!",
      },
      {
        type: "codeblock",
        title: "Example: f-string Reminder",
        code: 'product = "T-shirt"\nsize = "L"\nprice = 19.99\n\nprint(f"Your {product} (Size: {size}) costs ${price:.2f}.")\n# Output: Your T-shirt (Size: L) costs $19.99.',
        language: "python",
      },
    ],
  },
  {
    key: "Conditional Statements",
    title: "Python Conditional Statements",
    sections: [
      {
        type: "title",
        content: "Python Conditional Statements: Making Decisions",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "In programming, we often need our code to make decisions. For example, 'If it's raining, take an umbrella, otherwise, don't.' Conditional statements allow your Python program to perform different actions based on whether a certain condition is True or False.",
      },
      {
        type: "paragraph",
        content:
          "The most common conditional statements in Python are if, elif (short for 'else if'), and else.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. The if Statement (If this is True...)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "The if statement is the simplest form. It checks if a condition is True. If it is, the code inside the `if` block runs. If the condition is `False`, the code inside the if block is skipped.",
      },
      {
        type: "paragraph",
        content:
          "Remember the importance of indentation! Python uses spaces (usually 4) to know which lines belong to the if block.",
      },
      {
        type: "codeblock",
        title: "Syntax:",
        code: "if condition:\n    # Code to run if condition is True",
        language: "python",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'age = 20\n\nif age >= 18:\n    print("You are old enough to vote.")\n\nprint("Program continues here, outside the if block.")',
        language: "python",
        comment:
          "# Output:\n# You are old enough to vote.\n# Program continues here, outside the if block.",
      },
      {
        type: "codeblock",
        title: "Example (Condition is False):",
        code: 'temperature = 15\n\nif temperature > 25:\n    print("It\'s hot outside!")\n\nprint("The day is going on.")',
        language: "python",
        comment:
          "# Output:\n# The day is going on. (The 'if' block was skipped)",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. The `else` Statement (Otherwise...)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "The `else` statement works with an if statement. It provides code to run *only if* the if condition (and any `elif` conditions before it) is `False`.",
      },
      {
        type: "codeblock",
        title: "Syntax:",
        code: "if condition:\n    # Code if condition is True\nelse:\n    # Code if condition is False",
        language: "python",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'is_raining = False\n\nif is_raining:\n    print("Don\'t forget your umbrella!")\nelse:\n    print("Enjoy the clear skies!")',
        language: "python",
        comment: "# Output:\n# Enjoy the clear skies!",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "3. The `elif` Statement (Else, if this is True...)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "The `elif` statement (short for 'else if') lets you check multiple conditions in sequence. If the first if condition is `False`, Python moves to the `elif` condition. If that's `True`, its code runs. You can have as many `elif` statements as you need.",
      },
      {
        type: "codeblock",
        title: "Syntax:",
        code: "if condition1:\n    # Code if condition1 is True\nelif condition2:\n    # Code if condition1 is False AND condition2 is True\nelse:\n    # Code if all above conditions are False",
        language: "python",
      },
      {
        type: "codeblock",
        title: "Example: Checking Grades",
        code: 'score = 85\n\nif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\nelif score >= 70:\n    print("Grade: C")\nelse:\n    print("Grade: F")',
        language: "python",
        comment: "# Output:\n# Grade: B",
      },
      {
        type: "paragraph",
        content:
          "Python checks conditions from top to bottom. As soon as it finds a `True` condition, it executes that block and then skips the rest of the `elif` and `else` blocks.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Short-hand If/Else (Ternary Operator)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "For very simple `if-else` situations that fit on one line, Python offers a shorthand (often called a ternary operator). It can make code more compact, but use it carefully to keep your code readable.",
      },
      {
        type: "codeblock",
        title: "Syntax:",
        code: "value_if_true if condition else value_if_false",
        language: "python",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'age = 22\nstatus = "Adult" if age >= 18 else "Minor"\nprint(f"Person status: {status}") # Output: Person status: Adult',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Nested If Statements (If inside If)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "You can place an if statement (or `elif`/`else`) inside another if statement. This is called nesting and is used for more complex decision-making. Remember to keep track of your indentation!",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: 'has_ticket = True\nis_vip = False\n\nif has_ticket:\n    print("Welcome!")\n    if is_vip:\n        print("You have VIP access.")\n    else:\n        print("Enjoy the show.")\nelse:\n    print("Please buy a ticket.")',
        language: "python",
        comment: "# Output:\n# Welcome!\n# Enjoy the show.",
      },
      {
        type: "paragraph",
        content:
          "Conditional statements are fundamental to creating programs that can respond differently based on various situations. Practice using them to make your code smarter!",
      },
    ],
  },
  {
    key: "Loops",
    title: "Python Loops (for, while)",
    sections: [
      {
        type: "title",
        content: "Python Loops: Repeating Actions",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "Imagine you need to do the same thing many times, like printing each item in a list or running a task until a certain condition is met. Instead of writing the same code over and over, you use loops!",
      },
      {
        type: "paragraph",
        content:
          "Loops are fundamental programming tools that allow you to execute a block of code repeatedly. Python has two main types of loops: for loops and while loops.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. The for Loop (For Each Item...)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "A for loop is used to iterate over (go through) a sequence, like a list, tuple, string, or range of numbers. It will run the code block once for each item in the sequence.",
      },
      {
        type: "codeblock",
        title: "Syntax:",
        code: "for item in sequence:\n    # Code to run for each item",
        language: "python",
      },
      {
        type: "title",
        content: " Looping Through a List",
        level: 3,
      },
      {
        type: "codeblock",
        title: "Example: Fruits List",
        code: 'fruits = ["apple", "banana", "cherry"]\nfor x in fruits:\n    print(x)',
        language: "python",
        comment: "# Output:\n# apple\n# banana\n# cherry",
      },
      {
        type: "title",
        content: " Looping Through a String",
        level: 3,
      },
      {
        type: "codeblock",
        title: "Example: Characters in a Word",
        code: 'word = "Python"\nfor char in word:\n    print(char)',
        language: "python",
        comment: "# Output:\n# P\n# y\n# t\n# h\n# o\n# n",
      },
      {
        type: "title",
        content: " Looping a Specific Number of Times (range())",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The range() function is often used with for loops to repeat a block of code a specific number of times. range(n) gives you numbers from `0` up to (but not including) `n`.",
      },
      {
        type: "list",
        items: [
          "range(stop): Numbers from 0 up to `stop-1`.",
          "range(start, stop): Numbers from `start` up to `stop-1`.",
          "range(start, stop, step): Numbers from `start` up to `stop-1`, increasing by `step`.",
        ],
      },
      {
        type: "codeblock",
        title: "Example: Counting with `range()`",
        code: 'for i in range(5):\n    print(i) # Prints 0, 1, 2, 3, 4\n\nprint("\\n") # For better spacing\n\nfor year in range(2020, 2023):\n    print(f"Year: {year}") # Prints Year: 2020, Year: 2021, Year: 2022',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. The while Loop (As Long As This is True...)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "A while loop keeps running a block of code as long as a certain condition remains `True`. It will stop when the condition becomes `False`.",
      },
      {
        type: "codeblock",
        title: "Syntax:",
        code: "while condition:\n    # Code to run repeatedly\n    # Make sure something inside changes the condition to eventually become False!",
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Important: You must make sure that something inside your while loop changes the condition, so it eventually becomes `False`. Otherwise, you'll have an infinite loop, and your program will never stop!",
      },
      {
        type: "codeblock",
        title: "Example: Simple Counter",
        code: 'count = 1\nwhile count <= 5:\n    print(count)\n    count += 1  # This line changes the condition!\n\nprint("Loop finished.")',
        language: "python",
        comment: "# Output:\n# 1\n# 2\n# 3\n# 4\n# 5\n# Loop finished.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "3. Loop Control Statements",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Sometimes you need to change how a loop behaves based on a situation. break and `continue` are used for this.",
      },
      {
        type: "title",
        content: " break: Stop the Loop!",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The break statement immediately stops the current loop and the program continues with the code right after the loop.",
      },
      {
        type: "codeblock",
        title: "Example: Stop at 3",
        code: 'for i in range(1, 6): # Numbers 1 to 5\n    if i == 3:\n        print("Found 3, breaking loop.")\n        break\n    print(i)',
        language: "python",
        comment: "# Output:\n# 1\n# 2\n# Found 3, breaking loop.",
      },
      {
        type: "title",
        content: " continue: Skip this Iteration!",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The continue statement skips the rest of the code in the current loop iteration and moves to the next iteration.",
      },
      {
        type: "codeblock",
        title: "Example: Skip 3",
        code: `for i in range(1, 6):   # Numbers 1 to 5\n    if i == 3:\n        print("Skipping 3.")\n        continue\n    print(i)`,
        language: "python",
        comment: "# Output:\n# 1\n# 2\n# Skipping 3.\n# 4\n# 5",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "4. Nested Loops (Loop inside a Loop)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "You can put a loop inside another loop. This is called a nested loop. The inner loop will run completely for each single turn of the outer loop. This is useful for working with grids or combinations.",
      },
      {
        type: "codeblock",
        title: "Example: Printing a Grid",
        code: 'for i in range(3): # Outer loop runs 3 times (for i = 0, 1, 2)\n    for j in range(2): # Inner loop runs 2 times for EACH i (for j = 0, 1)\n        print(f"({i}, {j})")',
        language: "python",
        comment:
          "# Output:\n# (0, 0)\n# (0, 1)\n# (1, 0)\n# (1, 1)\n# (2, 0)\n# (2, 1)",
      },
      {
        type: "paragraph",
        content:
          "Loops are powerful tools that let your programs automate repetitive tasks efficiently. Choose for for known sequences and while for conditions that need to be met!",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "3. The `pass` Statement: Do Nothing (Placeholder)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "The `pass` statement is a null operation. It does absolutely nothing. It's used as a placeholder when Python's syntax requires a statement, but you don't want any code to run.",
      },
      {
        type: "paragraph",
        content:
          "This is helpful when you are planning your code structure, or when you need a syntactically correct empty block of code to avoid errors.",
      },
      {
        type: "codeblock",
        title: "Example: Placeholder in an `if` statement",
        code: 'temperature = 28\n\nif temperature > 30:\n    print("It\'s very hot!")\nelif temperature > 20:\n    pass # No specific action needed for this temperature range yet\nelse:\n    print("It\'s cool.")',
        language: "python",
        comment:
          "# Output (because temperature is 28, it hits the elif and 'pass' does nothing):\n# (No output from this block)",
      },
      {
        type: "codeblock",
        title: "Example: Empty Loop or Function (for future code)",
        code: 'for i in range(5):\n    # TODO: Add actual processing logic here later\n    pass \n\ndef my_future_function():\n    # This function will be implemented later\n    pass\n\nprint("Code continues after the loop and function definition.")',
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "break, continue, and pass give you fine-tuned control over how your loops behave, helping you write more precise and efficient code.",
      },
    ],
  },
  {
    key: "Functions",
    title: "Python Functions",
    sections: [
      {
        type: "title",
        content: "Python Functions: Your Code's Building Blocks",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "Imagine you have a specific task your program needs to do multiple times, like calculating an area or printing a welcome message. Instead of writing the same lines of code over and over, you can put them into a function.",
      },
      {
        type: "paragraph",
        content:
          "A function is a block of organized, reusable code that performs a single, related action. It makes your code:",
      },
      {
        type: "list",
        items: [
          "Easier to read: Break down complex problems into smaller, manageable pieces.",
          "More organized: Group related tasks together.",
          "Reusable: Write code once and use it many times.",
          "Easier to debug: If a problem occurs, you know which specific function to check.",
        ],
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. Defining a Function",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "You define a function using the `def` keyword, followed by the function name, parentheses `()`, and a colon `:`.",
      },
      {
        type: "list",
        items: [
          "The code inside the function must be indented.",
          "Function names follow similar rules to variable names (letters, numbers, underscores, no spaces, starts with letter/underscore). Good practice is `snake_case` (all lowercase, words separated by underscores).",
        ],
      },
      {
        type: "codeblock",
        title: "Syntax:",
        code: 'def function_name():\n    # Code block to be executed when the function is called\n    print("This code is inside the function.")',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. Calling a Function",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Defining a function just tells Python what it can do. To make it do something, you need to call (or invoke) the function by using its name followed by parentheses `()`.",
      },
      {
        type: "codeblock",
        title: "Example: Define and Call",
        code: 'def greet():\n    print("Hello, welcome!")\n\n# Now, call the function to run its code\ngreet() # Output: Hello, welcome!\n\n# You can call it multiple times\ngreet() # Output: Hello, welcome!',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "3. Function Parameters (Inputs)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Functions can take inputs, called parameters (or arguments when you pass them). These inputs allow the function to work with different data each time it's called.",
      },
      {
        type: "list",
        items: [
          "You list parameters inside the parentheses when you define the function.",
          "When you call the function, you provide the actual values (arguments) for those parameters.",
        ],
      },
      {
        type: "codeblock",
        title: "Example: Function with Parameters",
        code: 'def greet_person(name):\n    print(f"Hello, {name}!")\n\ngreet_person("Alice")   # Output: Hello, Alice!\ngreet_person("Bob")     # Output: Hello, Bob!',
        language: "python",
      },
      {
        type: "parameter",
        content: " Multiple Parameters",
        // leve: 3,
      },
      {
        type: "codeblock",
        title: "Example: Function with Multiple Parameters",
        code: 'def add_numbers(num1, num2):\n    sum_result = num1 + num2\n    print(f"The sum is: {sum_result}")\n\nadd_numbers(5, 7)    # Output: The sum is: 12\nadd_numbers(10, 20)  # Output: The sum is: 30',
        language: "python",
      },
      {
        type: "title",
        content: " Default Parameter Values",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "You can give parameters a default value. If you don't provide an argument for that parameter when calling the function, the default value will be used.",
      },
      {
        type: "codeblock",
        title: "Example: Default Parameter",
        code: 'def say_hello(name="Guest"):\n    print(f"Hello, {name}!")\n\nsay_hello("Charlie") # Output: Hello, Charlie!\nsay_hello()          # Output: Hello, Guest! (uses default value)',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "4. Return Values (return statement)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Functions can also send data back to the part of the code that called them. This is done using the return statement.",
      },
      {
        type: "list",
        items: [
          "When Python sees return, the function immediately stops running.",
          "The value after return is sent back as the function's result.",
          "If a function doesn't have a return statement, it automatically returns `None` (a special Python value meaning 'nothing').",
        ],
      },
      {
        type: "codeblock",
        title: "Example: Function Returning a Value",
        code: 'def multiply(a, b):\n    result = a  b\n    return result # Send the \'result\' back\n\n# Call the function and store its returned value in a variable\nproduct = multiply(4, 5)\nprint(f"The product is: {product}") # Output: The product is: 20\n\n# You can also use the returned value directly\nprint(f"10  3 is: {multiply(10, 3)}") # Output: 10  3 is: 30',
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Functions are a cornerstone of good programming. They help you write cleaner, more manageable, and more powerful Python code!",
      },
    ],
  },
  {
    key: "Arguments & Return",
    title: "Python Arguments & Return Values",
    sections: [
      {
        type: "title",
        content: "Python Arguments & Return Values: Function Communication",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "Functions are like mini-programs. To make them truly useful, they often need to receive information to work with (these are arguments) and send results back (these are return values).",
      },
      {
        type: "paragraph",
        content:
          "This section dives deeper into how you pass information into functions and how functions give you results back.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. Arguments: Giving Functions Input",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Arguments are the pieces of information you provide to a function when you call it. They are received by the parameters defined in the function's definition.",
      },
      {
        type: "title",
        content: " Positional Arguments (Order Matters!)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "This is the most common way. The arguments you pass are matched to the parameters in the order they appear.",
      },
      {
        type: "codeblock",
        title: "Example: Positional Arguments",
        code: 'def describe_pet(animal, name):\n    print(f"I have a {animal} named {name}.")\n\ndescribe_pet("dog", "Buddy") # \'dog\' goes to \'animal\', \'Buddy\' goes to \'name\'\n# Output: I have a dog named Buddy.\n\ndescribe_pet("Whiskers", "cat") # Order changed, meaning changed!\n# Output: I have a Whiskers named cat.',
        language: "python",
      },
      {
        type: "paragraph",
        content: " Keyword Arguments (Name Matters!)",
      },
      {
        type: "paragraph",
        content:
          "You can also pass arguments by specifically naming the parameter they should go to. This makes the order of arguments less important and code more readable.",
      },
      {
        type: "codeblock",
        title: "Example: Keyword Arguments",
        code: 'def describe_pet(animal, name):\n    print(f"I have a {animal} named {name}.")\n\ndescribe_pet(animal="cat", name="Whiskers") # Clear what goes where\n# Output: I have a cat named Whiskers.\n\ndescribe_pet(name="Max", animal="dog")    # Order doesn\'t matter with keywords\n# Output: I have a dog named Max.',
        language: "python",
      },
      {
        type: "title",
        content: " Default Arguments (Optional Inputs)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "You can set default values for parameters. If you don't provide an argument for that parameter when calling the function, its default value is used.",
      },
      {
        type: "codeblock",
        title: "Example: Default Arguments",
        code: 'def make_pizza(size, topping="pepperoni"):\n    print(f"Making a {size}-inch pizza with {topping}.")\n\nmake_pizza(12)               # Uses default topping\n# Output: Making a 12-inch pizza with pepperoni.\n\nmake_pizza(10, "mushrooms")  # Overrides default topping\n# Output: Making a 10-inch pizza with mushrooms.',
        language: "python",
      },
      {
        type: "paragraph",
        content: " Arbitrary Arguments (`args`) - For Many Unknown Inputs",
      },
      {
        type: "paragraph",
        content:
          "If you don't know how many positional arguments a function will receive, you can use `args` (the `` is important). This collects all extra positional arguments into a tuple.",
      },
      {
        type: "codeblock",
        title: "Example: `args`",
        code: 'def greet_all(names):\n    print("Hello to:")\n    for name in names:\n        print(f"- {name}")\n\ngreet_all("Alice", "Bob", "Charlie")\n# Output:\n# Hello to:\n# - Alice\n# - Bob\n# - Charlie',
        language: "python",
      },
      {
        type: "paragraph",
        content:
          " Arbitrary Keyword Arguments (`kwargs`) - For Many Unknown Named Inputs",
      },
      {
        type: "paragraph",
        content:
          "If you don't know how many keyword arguments a function will receive, use `kwargs` (the `` is important). This collects all extra keyword arguments into a dictionary.",
      },
      {
        type: "codeblock",
        title: "Example: `kwargs`",
        code: 'def print_user_info(info):\n    print("User Info:")\n    for key, value in info.items():\n        print(f"- {key.replace(\'_\', \' \').title()}: {value}")\n\nprint_user_info(name="David", age=28, city="New York")\n# Output:\n# User Info:\n# - Name: David\n# - Age: 28\n# - City: New York',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. Return Values: Getting Output from Functions",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "The return statement is how a function sends a result back to the code that called it. When return is executed, the function stops immediately, and the value after return becomes the function's result.",
      },
      {
        type: "paragraph",
        content: " Returning a Single Value",
      },
      {
        type: "codeblock",
        title: "Example: Returning a Sum",
        code: 'def add(a, b):\n    result = a + b\n    return result # Send the sum back\n\n# Call the function and store the returned value\nmy_sum = add(10, 5)\nprint(f"The sum is: {my_sum}") # Output: The sum is: 15',
        language: "python",
      },
      {
        type: "paragraph",
        content: " Functions that Return `None`",
      },
      {
        type: "paragraph",
        content:
          "If a function doesn't have a return statement, or if you use return by itself without a value, it implicitly returns `None`. `None` is Python's way of saying 'no value' or 'nothing'.",
      },
      {
        type: "codeblock",
        title: "Example: Function Returning None",
        code: 'def print_message(msg):\n    print(msg) # This function only prints, it doesn\'t calculate or produce a value\n\nresult = print_message("Hello there!")\n# Output: Hello there!\n\nprint(f"The function returned: {result}") # Output: The function returned: None',
        language: "python",
      },
      {
        type: "paragraph",
        content: " Returning Multiple Values (as a Tuple)",
      },
      {
        type: "paragraph",
        content:
          "Python functions can seem to return multiple values. In reality, they return a single tuple containing all those values, which you can then 'unpack'.",
      },
      {
        type: "codeblock",
        title: "Example: Returning Multiple Values",
        code: 'def calculate_stats(numbers):\n    total = sum(numbers)\n    average = total / len(numbers)\n    return total, average # Returns a tuple (total, average)\n\nmy_numbers = [10, 20, 30, 40]\n\n# Catch the returned tuple in a single variable\nstats_tuple = calculate_stats(my_numbers)\nprint(f"Stats as tuple: {stats_tuple}") # Output: Stats as tuple: (100, 25.0)\n\n# Unpack the tuple into separate variables\nsum_val, avg_val = calculate_stats(my_numbers)\nprint(f"Sum: {sum_val}, Average: {avg_val}") # Output: Sum: 100, Average: 25.0',
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Understanding arguments and return values is key to building modular and effective functions that can communicate and work together in your programs.",
      },
    ],
  },
];
