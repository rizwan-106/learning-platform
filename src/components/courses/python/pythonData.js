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
        content: "Python Operators: Tools for Performing Actions",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "In Python, operators are special symbols or keywords used to perform operations on variables and values. Think of them as the action words (verbs) of programming—they instruct Python to compute, compare, assign, or manipulate data.",
      },
      {
        type: "title",
        content: "Main Categories Based on Number of Operands",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Unary Operators — operate on a single operand",
          "Binary Operators — operate on two operands",
          "Ternary Operator — operates on three operands (conditional expressions)",
        ],
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. Unary Operators",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Unary operators require only one operand. They are used to perform operations like negation or logical inversion.",
      },
      {
        type: "table",
        headers: ["Operator", "Description", "Example"],
        rows: [
          [
            "+",
            "Unary Plus: Returns the positive value of a number.",
            "+a (e.g., +5 gives 5)",
          ],
          [
            "-",
            "Unary Minus: Returns the negative value of a number.",
            "-a (e.g., -5 gives -5)",
          ],
          [
            "not",
            "Logical NOT: Inverts the Boolean value.",
            "not True gives False",
          ],
          [
            "~",
            "Bitwise NOT (Complement): Inverts all bits of a number.",
            "~5 gives -6",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example: Unary Operators",
        code: 'x = 10\ny = -7\n\nprint(f"Unary Plus (+x): {+x}")     # Output: Unary Plus (+x): 10\nprint(f"Unary Minus (-x): {-x}")    # Output: Unary Minus (-x): -10\nprint(f"Unary Minus (-y): {-y}")    # Output: Unary Minus (-y): 7\nprint(f"Logical NOT (not True): {not True}") # Output: Logical NOT (not True): False\nprint(f"Bitwise NOT (~10): {~10}")   # Output: Bitwise NOT (~10): -11',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. Binary Operators",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Binary operators work on two operands. They include arithmetic, comparison, logical, bitwise, assignment, identity, and membership operations.",
      },
      {
        type: "title",
        content: "a. Arithmetic Operators (+, - , * , / , % , ** , //)",
        level: 3,
      },
      {
        type: "table",
        headers: ["Operator", "Description", "Example", "Result"],
        rows: [
          ["+", "Addition", "5 + 3", "8"],
          ["-", "Subtraction", "10 - 4", "6"],
          ["*", "Multiplication", "6 * 2", "12"],
          ["/", "Division (always float result)", "7 / 2", "3.5"],
          ["%", "Modulus (remainder of division)", "7 % 2", "1"],
          ["**", "Exponentiation (power)", "2 ** 3", "8"],
          [
            "//",
            "Floor Division (integer part of the division)",
            "7 // 2",
            "3",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example: Arithmetic Operators",
        code: 'a = 15\nb = 4\n\nprint(f"Addition: {a + b}")      # Output: Addition: 19\nprint(f"Subtraction: {a - b}")   # Output: Subtraction: 11\nprint(f"Multiplication: {a * b}")  # Output: Multiplication: 60\nprint(f"Division: {a / b}")      # Output: Division: 3.75\nprint(f"Modulus: {a % b}")       # Output: Modulus: 3\nprint(f"Exponentiation: {a ** 2}") # Output: Exponentiation: 225\nprint(f"Floor Division: {a // b}") # Output: Floor Division: 3',
        language: "python",
      },
      {
        type: "title",
        content: "b. Comparison (Relational) Operators (==, !=, >, <, >=, <=)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "These operators compare two values and return a Boolean result (True or False).",
      },
      {
        type: "table",
        headers: ["Operator", "Description", "Example"],
        rows: [
          ["==", "Equal to", "a == b (Is 'a' equal to 'b'?)"],
          ["!=", "Not equal to", "a != b (Is 'a' not equal to 'b'?)"],
          [">", "Greater than", "a > b (Is 'a' greater than 'b'?)"],
          ["<", "Less than", "a < b (Is 'a' less than 'b'?)"],
          [
            ">=",
            "Greater than or equal to",
            "a >= b (Is 'a' greater than or equal to 'b'?)",
          ],
          [
            "<=",
            "Less than or equal to",
            "a <= b (Is 'a' less than or equal to 'b'?)",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example: Comparison Operators",
        code: 'val1 = 10\nval2 = 20\nval3 = 10\n\nprint(f"val1 == val2: {val1 == val2}") # Output: val1 == val2: False\nprint(f"val1 == val3: {val1 == val3}") # Output: val1 == val3: True\nprint(f"val1 != val2: {val1 != val2}") # Output: val1 != val2: True\nprint(f"val1 > val2: {val1 > val2}")   # Output: val1 > val2: False\nprint(f"val1 <= val3: {val1 <= val3}") # Output: val1 <= val3: True',
        language: "python",
      },
      {
        type: "title",
        content: "c. Logical Operators (and, or, not)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "These operators combine multiple conditional (Boolean) statements to form more complex conditions.",
      },
      {
        type: "table",
        headers: ["Operator", "Description", "Example"],
        rows: [
          [
            "and",
            "Returns True if both conditions are True.",
            "a > 3 and b < 7",
          ],
          [
            "or",
            "Returns True if at least one condition is True.",
            "a < 3 or b > 5",
          ],
          [
            "not",
            "Negates the Boolean result (True becomes False, False becomes True). (Note: This is technically a unary operator, but often discussed with logical operations)",
            "not (a == b)",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example: Logical Operators",
        code: 'is_admin = True\nuser_active = False\nuser_age = 25\n\nprint(f"isAdmin and userActive: {is_admin and user_active}") # Output: isAdmin and userActive: False\nprint(f"isAdmin or userActive: {is_admin or user_active}")  # Output: isAdmin or userActive: True\nprint(f"not isAdmin: {not is_admin}")                       # Output: not isAdmin: False\nprint(f"userAge > 18 and userActive: {user_age > 18 and user_active}") # Output: userAge > 18 and userActive: False',
        language: "python",
      },
      {
        type: "title",
        content: "d. Bitwise Operators (&, | , ^ , << , >>)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "These operators work directly on the individual bits (binary digits) of numbers. They are used in specialized, low-level tasks.",
      },
      {
        type: "table",
        headers: ["Operator", "Description", "Example (decimal to binary)"],
        rows: [
          [
            "&",
            "Bitwise AND: Sets each bit to 1 if both corresponding bits are 1.",
            "5 (0101) & 3 (0011) gives 1 (0001)",
          ],
          [
            "|",
            "Bitwise OR: Sets each bit to 1 if at least one of the corresponding bits is 1.",
            "5 (0101) | 3 (0011) gives 7 (0111)",
          ],
          [
            "^",
            "Bitwise XOR: Sets each bit to 1 if only one of the corresponding bits is 1.",
            "5 (0101) ^ 3 (0011) gives 6 (0110)",
          ],
          [
            "~",
            "Bitwise NOT (Complement): Inverts all bits.",
            "~5 (0101) gives -6 (representation dependent)",
          ],
          [
            "<<",
            "Left Shift: Shifts bits left, filling with zeros.",
            "5 (0101) << 1 gives 10 (1010)",
          ],
          [
            ">>",
            "Right Shift: Shifts bits right.",
            "5 (0101) >> 1 gives 2 (0010)",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example: Bitwise Operators",
        code: 'a = 5  # Binary: 0101\nb = 3  # Binary: 0011\n\nprint(f"a & b: {a & b}") # Output: a & b: 1\nprint(f"a | b: {a | b}") # Output: a | b: 7\nprint(f"a ^ b: {a ^ b}") # Output: a ^ b: 6\nprint(f"a << 2: {a << 2}")   # Output: a << 2: 20 (0101 -> 010100)\nprint(f"a >> 1: {a >> 1}")   # Output: a >> 1: 2 (0101 -> 0010)',
        language: "python",
      },
      {
        type: "title",
        content:
          "e. Assignment Operator (=) and Compound Operators (+=, -=, *=, /=)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "These operators are used to assign values to variables. They often combine an arithmetic or bitwise operation with assignment for concise code.",
      },
      {
        type: "table",
        headers: ["Operator", "Usage", "Equivalent To"],
        rows: [
          ["=", "x = 5", "x = 5"],
          ["+=", "x += 3", "x = x + 3"],
          ["-=", "x -= 2", "x = x - 2"],
          ["*=", "x *= 4", "x = x * 4"],
          ["/=", "x /= 2", "x = x / 2"],
          ["//=", "x //= 2", "x = x // 2"],
          ["**=", "x **= 2", "x = x ** 2"],
          ["%=", "x %= 3", "x = x % 3"],
          ["&=", "x &= y", "x = x & y"],
          ["|=", "x |= y", "x = x | y"],
          ["^=", "x ^= y", "x = x ^ y"],
          ["<<=", "x <<= 2", "x = x << 2"],
          [">>=", "x >>= 2", "x = x >> 2"],
        ],
      },
      {
        type: "codeblock",
        title: "Example: Assignment Operators",
        code: 'total = 50\nprint(f"Initial total: {total}") # Output: Initial total: 50\n\ntotal += 10 # Add 10\nprint(f"Total after += 10: {total}") # Output: Total after += 10: 60\n\ntotal *= 2  # Multiply by 2\nprint(f"Total after *= 2: {total}") # Output: Total after *= 2: 120\n\ntotal /= 3  # Divide by 3\nprint(f"Total after /= 3: {total}") # Output: Total after /= 3: 40.0',
        language: "python",
      },
      {
        type: "title",
        content: "f. Identity Operators (is, is not)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "These operators check if two variables point to the exact same object in memory, not just if they have the same value.",
      },
      {
        type: "table",
        headers: ["Operator", "Description", "Example"],
        rows: [
          [
            "is",
            "Returns True if both variables refer to the same object.",
            "x is y",
          ],
          [
            "is not",
            "Returns True if both variables do NOT refer to the same object.",
            "x is not y",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example: Identity Operators",
        code: 'list_a = [1, 2, 3]\nlist_b = [1, 2, 3] # A different object with the same content\nlist_c = list_a    # list_c refers to the same object as list_a\n\nprint(f"list_a is list_c: {list_a is list_c}") # Output: list_a is list_c: True\nprint(f"list_a is list_b: {list_a is list_b}") # Output: list_a is list_b: False\nprint(f"list_a is not list_b: {list_a is not list_b}") # Output: list_a is not list_b: True',
        language: "python",
      },
      {
        type: "title",
        content: "g. Membership Operators (in, not in)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "These operators check if a value is present or not present within a sequence (like a string, list, tuple, or set).",
      },
      {
        type: "table",
        headers: ["Operator", "Description", "Example"],
        rows: [
          [
            "in",
            "Returns True if the specified value is found in the sequence.",
            "'a' in 'apple'",
          ],
          [
            "not in",
            "Returns True if the specified value is NOT found in the sequence.",
            "'z' not in 'apple'",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example: Membership Operators",
        code: "my_fruits = [\"apple\", \"banana\", \"cherry\"]\ntext = \"Hello Python\"\n\nprint(f\"'banana' in my_fruits: {'banana' in my_fruits}\") # Output: 'banana' in my_fruits: True\nprint(f\"'grape' in my_fruits: {'grape' in my_fruits}\")   # Output: 'grape' in my_fruits: False\nprint(f\"'Python' not in text: {'Python' not in text}\") # Output: 'Python' not in text: False",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "3. Ternary Operator (Conditional Expression)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Python has one ternary operator, more accurately called a conditional expression. It evaluates a condition and returns one of two values based on whether the condition is true or false, all in a single line.",
      },
      {
        type: "codeblock",
        title: "Syntax",
        code: "result = value_if_true if condition else value_if_false",
        language: "python",
      },
      {
        type: "codeblock",
        title: "Example: Ternary Operator",
        code: "age = 18\nmessage = 'Adult' if age >= 18 else 'Minor'\nprint(f\"For age {age}, message is: {message}\") # Output: For age 18, message is: Adult\n\nage = 16\nmessage = 'Adult' if age >= 18 else 'Minor'\nprint(f\"For age {age}, message is: {message}\") # Output: For age 16, message is: Minor\n\nprice = 120\ndiscount_active = True\nfinal_price = price * 0.9 if discount_active and price > 100 else price\nprint(f\"Final price: {final_price}\") # Output: Final price: 108.0",
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Understanding and effectively using Python's various operators is fundamental to writing functional and efficient code, enabling you to manipulate data and control program logic precisely.",
      },
    ],
  },
  {
    key: "Input / Output",
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
          "You can put a message (a 'prompt') inside the parentheses () of input() to tell the user what to type.",
        ],
      },
      {
        type: "codeblock",
        title: "Example: Getting User's Name",
        code: 'name = input("Enter your name: ")\nprint("Hello", name")',
        language: "python",
        comment:
          "# When you run this, it will first show: Enter your name: \n# You type 'Alice' and press Enter. Then it prints: Hello, Alice!",
      },
      {
        type: "codeblock",
        title: "Example: Getting Numbers (Requires Type Casting!)",
        code: 'age_str = input("Enter your age: ")\nage_int = int(age_str) # Convert the string to an integer\n\nyear_born = 2025 - age_int\nprint("You were born in ",year_born)',
        language: "python",
        comment:
          "# Remember, input() gives you a string. If you need a number, use int() or float()!",
      },
      {
        type: "paragraph",
        content:
          "We can directly typecasting at the time of taking input from the user",
      },
      {
        type: "codeblock",
        code: 'age_str = int(input("Enter your age: ")) # Convert the string to an integer\nyear_born = 2025 - age_int\nprint("You were born in ",year_born)',
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
        type: "title",
        content: "Basic Printing",
        level: 3,
      },
      {
        type: "codeblock",
        title: "Example: Printing Text",
        code: "print(\"Welcome to Python!\")\nprint('This is another message.')",
        language: "python",
      },
      {
        type: "title",
        content: " Printing Variables",
        level: 3,
      },
      {
        type: "codeblock",
        title: "Example: Printing Variables",
        code: 'city = "London"\npopulation = 9000000\n\nprint(city)\nprint(population)',
        language: "python",
      },
      {
        type: "title",
        content: " Printing Multiple Items",
        level: 2,
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
        type: "title",
        content: " Using `sep` and `end` Parameters (Advanced `print` Options)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The print() function has optional parameters you can use to control its behavior:",
      },
      {
        type: "list",
        items: [
          "sep (separator): Specifies what to put between the items you're printing (default is a space ' ').",
          "end (ending): Specifies what to print at the very end of the line (default is a new line character `\\n`).",
        ],
      },
      {
        type: "codeblock",
        title: "Example: `sep` and `end`",
        code: 'print("Apple", "Banana", "Cherry", sep="-")\n# Output: Apple-Banana-Cherry\n\nprint("Hello", end=" ")\nprint("World!")\n# Output: Hello World! (no new line between Hello and World!)',
        language: "python",
      },
      {
        type: "title",
        content: " Formatted Output (f-strings revisited)",
        level: 3,
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
        type: "title",
        content: " pass: null statement",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "statement is syntactically required but you don't want to execute any code yet.",
      },
      {
        type: "codeblock",
        title: "Example: pass",
        code: `def my_function():
    pass  # will write logic later

class MyClass:
    pass  # will add methods later

for i in range(5):
    pass  # will add loop body later\n
#Basic mean: I know something should be here, but not right now.`,
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
    key: "Scope & Lifetime",
    title: "Python Variable Scope & Lifetime",
    sections: [
      {
        type: "title",
        content:
          "Python Variable Scope & Lifetime: Where Variables Live and Die",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "In Python, not all variables are accessible from everywhere in your code, nor do they exist for the entire duration of your program. The 'scope' of a variable defines where it can be accessed, while its 'lifetime' dictates how long it exists in memory. Understanding these concepts is crucial for writing organized, bug-free, and efficient code.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. Variable Scope: The Accessibility Zone",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Scope refers to the region of a program where a variable is recognized and can be referenced. Python primarily has four types of scope, often remembered by the LEGB rule (Local, Enclosing, Global, Built-in).",
      },
      {
        type: "title",
        content: "a. Local Scope (L)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Variables defined inside a function have a local scope. They are only accessible from within that function. Once the function finishes execution, these variables are destroyed.",
      },
      {
        type: "codeblock",
        title: "Example: Local Scope",
        code: 'def my_function():\n    local_var = "I am local to my_function"\n    print(local_var)\n\nmy_function()\nprint(local_var) # This would raise a NameError, as local_var is not accessible here\n\nOutput:\nI am local to my_function  #It come from when my_function executes below this error will come',
        language: "python",
      },
      {
        type: "title",
        content: "b. Enclosing/Nonlocal Scope (E)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "This scope exists for nested functions. If a function is defined inside another function, the inner function can access variables from the outer (enclosing) function's scope, even if those variables are not global. These are called 'nonlocal' variables.",
      },
      {
        type: "codeblock",
        title: "Example: Enclosing Scope",
        code: 'def outer_function():\n    enclosing_var = "I am from the outer function"\n\n    def inner_function():\n        # inner_function can access enclosing_var\n        print(enclosing_var)\n\n    inner_function()\n\nouter_function()\n\nOutput:\nI am from the outer function',
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "To modify an enclosing variable from within a nested function, you must use the 'nonlocal' keyword. Without it, Python would create a new local variable in the inner function.",
      },
      {
        type: "codeblock",
        title: "Example: Modifying Enclosing Variable with 'nonlocal'",
        code: "def counter():\n    count = 0  # This is in the enclosing scope for increment\n\n    def increment():\n        nonlocal count # Declare that 'count' refers to the enclosing scope's 'count'\n        count += 1\n        print(f\"Inner count: {count}\")\n\n    increment()\n    increment()\n    print(f\"Outer count: {count}\")\n\ncounter()\n\nOutput:\nInner count: 1\nInner count: 2\nOuter count: 2",
        language: "python",
      },
      {
        type: "title",
        content: "c. Global Scope (G)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Variables defined at the top-level of a Python script (outside any function or class) have a global scope. They are accessible from anywhere within the same module (file).",
      },
      {
        type: "codeblock",
        title: "Example: Global Scope",
        code: 'global_var = "I am a global variable"\n\ndef display_global():\n    print(global_var) # Functions can access global variables\n\ndef modify_global():\n    # If you want to modify a global variable, you must use the \'global\' keyword\n    global global_var\n    global_var = "I have been modified globally"\n\ndisplay_global()\nmodify_global()\ndisplay_global()\nprint(global_var)\n\nOutput:\nI am a global variable\nI have been modified globally\nI have been modified globally',
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Without the 'global' keyword, assigning a new value to a variable with the same name as a global variable inside a function will create a new local variable, leaving the global one unchanged. This is known as 'shadowing'.",
      },
      {
        type: "codeblock",
        title: "Example: Shadowing a Global Variable (No 'global' keyword)",
        code: 'shadowed_var = "Original Global Value"\n\ndef try_to_change_global():\n    shadowed_var = "New Local Value" # This creates a NEW local variable named \'shadowed_var\'\n    print(f"Inside function (local): {shadowed_var}")\n\nprint(f"Outside function (global before call): {shadowed_var}")\ntry_to_change_global()\nprint(f"Outside function (global after call): {shadowed_var}")\n\nOutput:\nOutside function (global before call): Original Global Value\nInside function (local): New Local Value\nOutside function (global after call): Original Global Value',
        language: "python",
      },
      {
        type: "title",
        content: "d. Built-in Scope (B)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "This is the broadest scope. It contains all the pre-defined names in Python that are always available, such as function names like 'print()', 'len()', 'type()', and exception names like 'NameError', 'TypeError', etc.",
      },
      {
        type: "codeblock",
        title: "Example: Built-in Scope",
        code: "# 'print' is a built-in function, always available\nprint(\"Hello\")\n\n# 'len' is a built-in function\nmy_list = [1, 2, 3]\nprint(f\"Length of list: {len(my_list)}\")\n\n# You can accidentally 'shadow' built-in names, but it's bad practice\n# len = \"I am a variable\"\n# print(len([1,2])) # This would now raise a TypeError because 'len' is no longer the function\n\nOutput:\n# Hello\n# Length of list: 3",
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Python's interpreter searches for a variable in the order: Local -> Enclosing -> Global -> Built-in (LEGB rule). If it doesn't find the variable in any of these scopes, it raises a NameError.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. Variable Lifetime: How Long Variables Exist",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "The lifetime of a variable is the period during which the variable exists in the memory. It's directly tied to its scope.",
      },
      {
        type: "title",
        content: "a. Local Variable Lifetime",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Local variables are created when the function they belong to is called and cease to exist (are destroyed) once the function finishes execution, regardless of whether it returns a value or raises an error.",
      },
      {
        type: "codeblock",
        title: "Example: Local Variable Lifetime",
        code: "def process_data():\n    data = [1, 2, 3] # 'data' is created here\n    print(f\"Inside function, data: {data}\")\n    # When the function exits, 'data' is destroyed\n\nprocess_data()\nprint(data) # NameError: 'data' no longer exists\n\nOutput:\nInside function, data: [1, 2, 3]",
        language: "python",
      },
      {
        type: "title",
        content: "b. Global Variable Lifetime",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Global variables are created when the script starts execution and remain in memory until the program terminates. Their lifetime is the entire duration of the script.",
      },
      {
        type: "codeblock",
        title: "Example: Global Variable Lifetime",
        code: "program_status = \"Running\" # 'program_status' is created when the script starts\n\ndef check_status():\n    print(f\"Current status: {program_status}\")\n\ncheck_status()\n# The program continues, 'program_status' is still in memory\nprogram_status = \"Completed\"\ncheck_status()\n\n# 'program_status' will only be destroyed when the Python script finishes\n\n# Output:\n# Current status: Running\n# Current status: Completed",
        language: "python",
      },
      {
        type: "title",
        content: "c. Enclosing Variable Lifetime",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Variables in an enclosing scope (for nested functions) persist as long as the enclosing function is active. If the inner function is returned and can still be called later (forming a closure), the enclosing variable's lifetime extends until the inner function is no longer referenced.",
      },
      {
        type: "codeblock",
        title: "Example: Enclosing Variable Lifetime (Closure)",
        code: "def make_adder(x):\n    # 'x' is an enclosing variable for 'adder'\n    def adder(y):\n        return x + y\n    return adder # 'adder' is returned, forming a closure\n\nadd_five = make_adder(5) # 'x' (which is 5) persists because 'adder' keeps a reference to it\nadd_ten = make_adder(10) # Another closure, 'x' (which is 10) persists here\n\nprint(f\"Adding 5 to 3: {add_five(3)}\")  # Output: Adding 5 to 3: 8\nprint(f\"Adding 10 to 7: {add_ten(7)}\") # Output: Adding 10 to 7: 17\n\n# The 'x' values (5 and 10) for 'add_five' and 'add_ten' respectively \n# continue to exist in memory as long as 'add_five' or 'add_ten' are accessible.",
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Understanding scope and lifetime helps prevent unintended side effects, manage memory efficiently, and write more robust and readable Python programs. Always prefer the most restrictive scope necessary (e.g., local over global) to minimize potential conflicts and improve code clarity.",
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
          'You define a function using the "def" keyword, followed by the function name, parentheses (), and a colon :',
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
        code: 'def greet_person(name):\n    print("Hello", name)\n\ngreet_person("Alice")   # Output: Hello, Alice\ngreet_person("Bob")     # Output: Hello, Bob',
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
        code: 'def add_numbers(num1, num2):\n    sum_result = num1 + num2\n    print("The sum is: ",sum_result)\n\nadd_numbers(5, 7)    # Output: The sum is: 12\nadd_numbers(10, 20)  # Output: The sum is: 30',
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
        code: 'def say_hello(name="Guest"):\n    print("Hello", name)\n\nsay_hello("Charlie") # Output: Hello, Charlie\nsay_hello()          # Output: Hello, Guest (uses default value)',
        language: "python",
      },
      {
        type: "separator",
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
        code: 'def describe_pet(animal, name):\n    print(f"I have a {animal} named {name}.")\n\ndescribe_pet("dog", "Buddy") # \'dog\' goes to \'animal\', \'Buddy\' goes to \'name\'\n# Output: I have a dog named Buddy.\n\ndescribe_pet("Tommy", "cat") # Order changed, meaning changed!\n# Output: I have a Tommy named cat.',
        language: "python",
      },
      {
        type: "title",
        content: " Keyword Arguments (Name Matters!)",
        level: 3,
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
        type: "title",
        content: " Arbitrary Arguments (*args) - For Many Unknown Inputs",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "If you don't know how many positional arguments a function will receive, you can use 'args' (the '*' is important). This collects all extra positional arguments into a tuple.",
      },
      {
        type: "codeblock",
        title: "Example: '*args'",
        code: 'def greet_all(*names):\n    print("Hello to:")\n    for name in names:\n        print(f"- {name}")\n\ngreet_all("Alice", "Bob", "Charlie")\n# Output:\n# Hello to:\n# - Alice\n# - Bob\n# - Charlie',
        language: "python",
      },
      {
        type: "title",
        content:
          " Arbitrary Keyword Arguments ('**kwargs') - For Many Unknown Named Inputs",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "If you don't know how many keyword arguments a function will receive, use 'kwargs' (the '**' is important). This collects all extra keyword arguments into a dictionary.",
      },
      {
        type: "codeblock",
        title: "Example: '**kwargs'",
        code: 'def print_user_info(**info):\n    print("User Info:")\n    for key, value in info.items():\n        print(f"- {key.replace(\'_\', \' \').title()}: {value}")\n\nprint_user_info(name="David", age=28, city="New York")\n# Output:\n# User Info:\n# - Name: David\n# - Age: 28\n# - City: New York',
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
        type: "title",
        content: " Functions that Return 'None'",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "If a function doesn't have a return statement, or if you use return by itself without a value, it implicitly returns 'None'. `None` is Python's way of saying 'no value' or 'nothing'.",
      },
      {
        type: "codeblock",
        title: "Example: Function Returning None",
        code: 'def print_message(msg):\n    print(msg) # This function only prints, it doesn\'t calculate or produce a value\n\nresult = print_message("Hello there!")\n# Output: Hello there!\n\nprint(f"The function returned: {result}") # Output: The function returned: None',
        language: "python",
      },
      {
        type: "title",
        content: " Returning a Single Value",
        level: 3,
      },
      {
        type: "codeblock",
        title: "Example: Returning a Sum",
        code: 'def add(a, b):\n    result = a + b\n    return result # Send the sum back\n\n# Call the function and store the returned value\nmy_sum = add(10, 5)\nprint(f"The sum is: {my_sum}") # Output: The sum is: 15. \n\n#We can directly print the value if function return anything (means that function should return None)\nprint(add(15,12)) # Output: 27',

        language: "python",
      },

      {
        type: "title",
        content: " Returning Multiple Values (as a Tuple)",
        level: 3,
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
  {
    key: "Lambda Functions",
    title: "Python Lambda Functions (Anonymous Functions)",
    sections: [
      {
        type: "title",
        content: "Python Lambda Functions: Anonymous and Concise",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "In Python, a lambda function is a small, anonymous function defined with the 'lambda' keyword. Unlike regular functions defined with 'def', lambda functions don't have a name, are typically used for short, one-time operations, and can only contain a single expression.",
      },
      {
        type: "paragraph",
        content:
          "They are often called 'anonymous functions' because they are not declared in the standard way using the 'def' keyword.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. Syntax of Lambda Functions",
        level: 2,
      },
      {
        type: "paragraph",
        content: "The basic syntax of a lambda function is:",
      },
      {
        type: "codeblock",
        title: "Lambda Syntax",
        code: "lambda arguments: expression",
        language: "python",
      },
      {
        type: "list",
        items: [
          "lambda: The keyword used to define an anonymous function.",
          "arguments: Zero or more arguments that the lambda function can take, similar to parameters in a 'def' function.",
          "expression: A single expression that is evaluated and returned. This is where the function's logic resides. Lambda functions *implicitly* return the result of this expression; they do not use the 'return' keyword.",
        ],
      },
      {
        type: "codeblock",
        title: "Example: Simple Lambda Function",
        code: '# A lambda function that adds two numbers\nadd = lambda a, b: a + b\n\nprint(f"Sum of 5 and 3: {add(5, 3)}") # Output: Sum of 5 and 3: 8\n\n# A lambda function that doubles a number\ndouble = lambda x: x * 2\n\nprint(f"Double of 7: {double(7)}")  # Output: Double of 7: 14',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. Why Use Lambda Functions?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Lambda functions are most commonly used in situations where a small function is required for a short period and does not need a formal name. They are particularly useful as arguments to higher-order functions (functions that take other functions as arguments).",
      },
      {
        type: "title",
        content: "a. With 'map()'",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The 'map()' function applies a given function to all items in an input list (or other iterable) and returns an iterator of the results.",
      },
      {
        type: "codeblock",
        title: "Example: Lambda with map()",
        code: 'numbers = [1, 2, 3, 4, 5]\n\n# Use lambda to square each number\nsquared_numbers = list(map(lambda x: x2, numbers))\nprint(f"Squared numbers: {squared_numbers}") # Output: Squared numbers: [1, 4, 9, 16, 25]',
        language: "python",
      },
      {
        type: "title",
        content: "b. With 'filter()'",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The 'filter()' function constructs an iterator from elements of an iterable for which a function returns true.",
      },
      {
        type: "codeblock",
        title: "Example: Lambda with filter()",
        code: 'ages = [10, 18, 25, 16, 30]\n\n# Use lambda to filter out ages less than 18\neligible_ages = list(filter(lambda age: age >= 18, ages))\nprint(f"Eligible ages: {eligible_ages}") # Output: Eligible ages: [18, 25, 30]',
        language: "python",
      },
      {
        type: "title",
        content: "c. With 'sorted()'",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The 'sorted()' function returns a new sorted list from the items in an iterable. The 'key' argument can take a function to customize the sort order.",
      },
      {
        type: "codeblock",
        title: "Example: Lambda with sorted()",
        code: "students = [\n    {'name': 'Alice', 'age': 20, 'grade': 'A'},\n    {'name': 'Bob', 'age': 22, 'grade': 'C'},\n    {'name': 'Charlie', 'age': 19, 'grade': 'B'}\n]\n\n# Sort students by age using a lambda function as the key\nsorted_by_age = sorted(students, key=lambda student: student['age'])\nprint(\"Sorted by age:\")\nfor s in sorted_by_age:\n    print(s)\n\n# Sort students by grade (reverse order) using a lambda function as the key\nsorted_by_grade_desc = sorted(students, key=lambda student: student['grade'], reverse=True)\nprint(\"\\nSorted by grade (descending):\")\nfor s in sorted_by_grade_desc:\n    print(s)\n\n# Output:\n# Sorted by age:\n# {'name': 'Charlie', 'age': 19, 'grade': 'B'}\n# {'name': 'Alice', 'age': 20, 'grade': 'A'}\n# {'name': 'Bob', 'age': 22, 'grade': 'C'}\n#\n# Sorted by grade (descending):\n# {'name': 'C harlie', 'age': 19, 'grade': 'B'}\n# {'name': 'Bob', 'age': 22, 'grade': 'C'}\n# {'name': 'Alice', 'age': 20, 'grade': 'A'}",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "3. Limitations of Lambda Functions",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Single Expression Only: A lambda function can only contain one expression. This means you cannot have multiple statements (like if/else blocks, loops, or variable assignments) inside a lambda function's body.",
          "No Docstrings: Lambda functions do not support docstrings.",
          "No Complex Logic: For anything more complex than a simple expression, a regular 'def' function is preferred for readability and maintainability.",
          "Readability: While concise, overly complex lambda functions can quickly become unreadable. If a lambda gets too long or intricate, it's better to convert it into a named 'def' function.",
        ],
      },
      {
        type: "codeblock",
        title: "Example: What Lambda CANNOT do (or shouldn't)",
        code: "# This is NOT possible in a lambda function:\n# invalid_lambda = lambda x: print(x) # print is a statement, not an expression\n# invalid_lambda = lambda x: if x > 0: return x # if/else is a statement\n\n# If you need this, use a regular function:\ndef print_value(x):\n    print(x)\n\ndef check_positive(x):\n    if x > 0:\n        return x\n    else:\n        return 0\n\nprint_value(10)\nprint(check_positive(-5))\n\n# Output:\n# 10\n# 0",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "4. When to Choose Lambda vs. 'def' Function",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Choose Lambda When: You need a small, disposable function for a short period, typically as an argument to another function (like 'map', 'filter', 'sorted', 'key', event handlers, etc.). It makes the code more compact and often more readable for very simple transformations.",
          "Choose 'def' When: The function requires multiple expressions/statements, needs a docstring, needs to be reused across different parts of your code, or involves complex logic. Named functions improve code organization, debugging, and readability in most scenarios.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Lambda functions are a powerful, albeit limited, tool in Python for writing concise and functional-style code, especially when dealing with higher-order functions.",
      },
    ],
  },
  {
    key: "Docstrings",
    title: "Python Documentation Strings (Docstrings)",
    sections: [
      {
        type: "title",
        content:
          "Python Documentation Strings (Docstrings): Explaining Your Code",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "Docstrings (documentation strings) are literal strings that occur as the first statement in a module, function, class, or method definition. They are used to explain what the code does, how to use it, its arguments, and what it returns. Unlike comments, docstrings are stored as part of the object's metadata and can be accessed at runtime using `__doc__` attribute or the `help()` function, making them invaluable for auto-generating documentation and interactive help.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. Purpose of Docstrings",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Self-documentation: Explain the purpose and functionality of code components.",
          "Interactive Help: Provide quick help using `help()` function in the Python interpreter.",
          "Automated Documentation: Tools like Sphinx can extract docstrings to generate comprehensive API documentation.",
          "Maintainability: Help future developers (including yourself!) understand and maintain the code.",
        ],
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. Types of Docstrings",
        level: 2,
      },
      {
        type: "title",
        content: "a. One-line Docstrings",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "These are concise summaries that fit on a single line. They are typically used for simple functions or modules where a brief explanation is sufficient. The closing triple quotes should be on the same line as the opening ones.",
      },
      {
        type: "codeblock",
        title: "Example: One-line Docstring",
        code: 'def add(a, b):\n    """Return the sum of two numbers."""\n    return a + b\n\nprint(add.__doc__)\nhelp(add)\n\nOutput (from print):\nReturn the sum of two numbers.\n\nOutput (from help()):\nhelp(add)\nHelp on function add in module __main__:\n\nadd(a, b)\nReturn the sum of two numbers.',
        language: "python",
      },
      {
        type: "title",
        content: "b. Multi-line Docstrings",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "For more complex functions, classes, or modules, multi-line docstrings provide a detailed explanation. They typically consist of:",
      },
      {
        type: "list",
        items: [
          "A brief summary line (first line).",
          "A blank line, separating the summary from the rest of the description.",
          "A more elaborate description, potentially spanning multiple lines.",
          "Details about arguments, return values, and exceptions (often following specific conventions).",
        ],
      },
      {
        type: "codeblock",
        title: "Example: Multi-line Docstring for a Function",
        code: 'def calculate_area(length, width):\n    """Calculate the area of a rectangle.\n\n    This function takes the length and width of a rectangle\n    and returns its calculated area. It handles both integer\n    and float dimensions.\n\n    Args:\n        length (int or float): The length of the rectangle.\n        width (int or float): The width of the rectangle.\n\n    Returns:\n        (int or float): The area of the rectangle.\n\n    Raises:\n        ValueError: If length or width is negative.\n    """\n    if length < 0 or width < 0:\n        raise ValueError("Dimensions cannot be negative.")\n    return length * width\n\nprint(calculate_area.__doc__)\nhelp(calculate_area)',
        language: "python",
      },
      {
        type: "codeblock",
        title: "Example: Multi-line Docstring for a Class",
        code: 'class Dog:\n    """Represents a canine animal.\n\n    This class is used to create dog objects with a name and age.\n\n    Attributes:\n        name (str): The name of the dog.\n        age (int): The age of the dog in years.\n    """\n    def __init__(self, name, age):\n        """Initializes a new Dog instance.\n\n        Args:\n            name (str): The name of the dog.\n            age (int): The age of the dog.\n        """\n        self.name = name\n        self.age = age\n\n    def bark(self):\n        """Makes the dog bark.\n\n        Returns:\n            str: A string indicating the dog\'s bark.\n        """\n        return f"{self.name} says Woof!"\n\nhelp(Dog)\nhelp(Dog.bark)\n',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "3. Docstring Conventions (PEP 257)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Python's official style guide, PEP 257, outlines best practices for writing docstrings. Adhering to these conventions makes your documentation consistent and easier for tools to parse.",
      },
      {
        type: "list",
        items: [
          'Triple Quotes: Always use three double quotes `"""` for docstrings, even for one-liners.',
          'First Line Summary: The first line should be a concise summary of what the object does. It should be imperative (e.g., "Return X," not "Returns X").',
          "Blank Line Separation: For multi-line docstrings, there should be a blank line after the summary line.",
          "Indentation: The indentation of the docstring should be the same as the code block it documents.",
          "Clarity and Conciseness: Be clear, precise, and concise. Avoid ambiguity.",
          "Docstring Placement: Place the docstring immediately after the `def`, `class`, or `module` statement, on the very next line.",
        ],
      },
      {
        type: "title",
        content: "Common Docstring Formats (Beyond PEP 257 Basics)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "While PEP 257 provides general guidelines, several widely adopted formats for structured docstrings exist, which are particularly useful for automated documentation generation:",
      },
      {
        type: "list",
        items: [
          "Google Style Docstrings: Uses sections like `Args:`, `Returns:`, `Raises:`.",
          "NumPy/SciPy Style Docstrings: Popular in scientific computing, uses reStructuredText-like syntax with sections.",
          "Sphinx Style (reStructuredText): The default format for Sphinx, uses specific reStructuredText roles for arguments, returns, etc. (e.g., `:param name: description`).",
        ],
      },
      {
        type: "codeblock",
        title: "Example: Google Style Docstring (Common and Recommended)",
        code: 'def divide(numerator, denominator):\n    """Divides two numbers and returns the quotient.\n\n    This function performs float division. If the denominator is zero,\n    it returns None after printing an error message.\n\n    Args:\n        numerator (float or int): The number to be divided.\n        denominator (float or int): The number to divide by.\n\n    Returns:\n        float or None: The result of the division, or None if denominator is zero.\n    """\n    if denominator == 0:\n        print("Error: Cannot divide by zero!")\n        return None\n    return numerator / denominator\n\nhelp(divide)',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "4. Accessing Docstrings",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "You can access a docstring programmatically through the `__doc__` attribute of the object (module, class, function, or method) or by using the built-in `help()` function.",
      },
      {
        type: "codeblock",
        title: "Accessing Docstrings",
        code: 'def example_function():\n    """This is an example docstring for a function."""\n    pass\n\nclass ExampleClass:\n    """This is an example docstring for a class."""\n    def example_method(self):\n        """This is an example docstring for a method."""\n        pass\n\n# Accessing using __doc__ attribute\nprint(f"Function Docstring: {example_function.__doc__}")\nprint(f"Class Docstring: {ExampleClass.__doc__}")\nprint(f"Method Docstring: {ExampleClass.example_method.__doc__}")\n\n# Accessing using help() function (will print more formatted output)\nprint("\\n--- Using help() ---")\nhelp(example_function)\nhelp(ExampleClass)\nhelp(ExampleClass.example_method)\n\n# Output:\n# Function Docstring: This is an example docstring for a function.\n# Class Docstring: This is an example docstring for a class.\n# Method Docstring: This is an example docstring for a method.\n#\n# --- Using help() ---\n# Help on function example_function in module __main__:\n# \n# example_function()\n#     This is an example docstring for a function.\n#\n# Help on class ExampleClass in module __main__:\n# \n# class ExampleClass(builtins.object)\n#  |  This is an example docstring for a class.\n#  |  \n#  |  Methods defined here:\n#  |  \n#  |  example_method(self)\n#  |      This is an example docstring for a method.\n#  |  \n#  |  ----------------------------------------------------------------------\n#  |  Data descriptors defined here:\n#  |  \n#  |  __dict__\n#  |      dictionary for instance variables (if any)\n#  |  \n#  |  __weakref__\n#  |      list of weak references to the object (if any)\n#\n# Help on function example_method in module __main__:\n#\n# example_method(self)\n#     This is an example docstring for a method.',
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Integrating docstrings into your Python code is a cornerstone of good programming practice. They not only clarify your intentions but also empower automated tools and enhance the overall maintainability and usability of your software.",
      },
    ],
  },
  {
    key: "Built-in Data Structures",
    title: "Python Built-in Data Structures",
    sections: [
      {
        type: "title",
        content: "Python Built-in Data Structures: Organizing Your Data",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "Data structures are fundamental to programming. They are specialized formats for organizing, processing, retrieving, and storing data. Python comes with several powerful built-in data structures that allow you to manage collections of data efficiently. This section will cover the most commonly used ones: Lists, Tuples, Sets, and Dictionaries.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. Lists: Ordered, Mutable Collections",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Lists are perhaps the most versatile and widely used data structure in Python. They are ordered, meaning the elements have a defined sequence, and changeable (mutable), means you can modify them after creation. Lists allow duplicate members and can contain items of different data types.",
      },
      {
        type: "title",
        content: "a. List Creation",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Lists are created by placing all the items (elements) inside square brackets [ ], separated by commas.",
      },
      {
        type: "codeblock",
        title: "Example: List Creation",
        code: 'my_empty_list = []\nmy_numbers = [1, 2, 3, 4, 5]\nmy_fruits = ["apple", "banana", "cherry"]\nmy_mixed_list = [1, "hello", 3.14, True]\n\nprint(f"Empty list: {my_empty_list}")\nprint(f"Numbers list: {my_numbers}")\nprint(f"Fruits list: {my_fruits}")\nprint(f"Mixed list: {my_mixed_list}")\n\nOutput:\nEmpty list: []\nNumbers list: [1, 2, 3, 4, 5]\nFruits list: [\'apple\', \'banana\', \'cherry\']\nMixed list: [1, \'hello\', 3.14, True]',
        language: "python",
      },
      {
        type: "title",
        content: "b. Accessing Elements",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Elements in a list are accessed by their index, which starts from 0 for the first element. Negative indices count from the end of the list (-1 for the last element).",
      },
      {
        type: "codeblock",
        title: "Example: Accessing List Elements",
        code: 'my_list = ["red", "green", "blue", "yellow"]\n\nprint(f"First element: {my_list[0]}")   # Output: First element: red\nprint(f"Third element: {my_list[2]}")   # Output: Third element: blue\nprint(f"Last element: {my_list[-1]}")   # Output: Last element: yellow\nprint(f"Second to last: {my_list[-2]}") # Output: Second to last: blue',
        language: "python",
      },
      {
        type: "title",
        content: "c. Slicing Lists",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Slicing allows you to get a sub-list (a portion of the list) by specifying a range of indices. The syntax is `[start:end:step]`.",
      },
      {
        type: "list",
        items: [
          "start: (Optional) The starting index (inclusive). Defaults to 0.",
          "end: (Optional) The ending index (exclusive). Defaults to the end of the list.",
          "step: (Optional) The step size (e.g., 2 for every second element). Defaults to 1.",
        ],
      },
      {
        type: "codeblock",
        title: "Example: List Slicing",
        code: "my_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g']\n\nprint(f\"From index 2 to 5 (exclusive): {my_list[2:5]}\") # Output: ['c', 'd', 'e']\nprint(f\"From beginning to index 3 (exclusive): {my_list[:3]}\") # Output: ['a', 'b', 'c']\nprint(f\"From index 4 to end: {my_list[4:]}\")     # Output: ['e', 'f', 'g']\nprint(f\"Copy of the list: {my_list[:]}\")        # Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g']\nprint(f\"Every second element: {my_list[::2]}\")  # Output: ['a', 'c', 'e', 'g']\nprint(f\"Reverse the list: {my_list[::-1]}\")    # Output: ['g', 'f', 'e', 'd', 'c', 'b', 'a']",
        language: "python",
      },
      {
        type: "title",
        content: "d. Modifying Lists",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Since lists are mutable, you can change, add, or remove elements after creation.",
      },
      {
        type: "codeblock",
        title: "Example: Modifying List Elements",
        code: "fruits = [\"apple\", \"banana\", \"cherry\", \"date\"]\n\n# Change an element\nfruits[1] = \"orange\"\nprint(f\"After changing element: {fruits}\") # Output: ['apple', 'orange', 'cherry', 'date']\n\n# Add an element to the end\nfruits.append(\"grape\")\nprint(f\"After appending: {fruits}\")      # Output: ['apple', 'orange', 'cherry', 'date', 'grape']\n\n# Insert an element at a specific index\nfruits.insert(1, \"kiwi\")\nprint(f\"After inserting: {fruits}\")   # Output: ['apple', 'kiwi', 'orange', 'cherry', 'date', 'grape']\n\n# Remove an element by value\nfruits.remove(\"cherry\")\nprint(f\"After removing 'cherry': {fruits}\") # Output: ['apple', 'kiwi', 'orange', 'date', 'grape']\n\n# Remove an element by index (and get its value)\npopped_fruit = fruits.pop(2) # Removes 'orange'\nprint(f\"After popping: {fruits}, Popped: {popped_fruit}\") # Output: ['apple', 'kiwi', 'date', 'grape'], Popped: orange\n\n# Delete elements using del keyword\ndel fruits[0] # Deletes 'apple'\nprint(f\"After deleting first element: {fruits}\") # Output: ['kiwi', 'date', 'grape']\n\n# Clear all elements\nfruits.clear()\nprint(f\"After clearing: {fruits}\")       # Output: []",
        language: "python",
      },
      {
        type: "title",
        content: "e. Common List Methods",
        level: 3,
      },
      {
        type: "table",
        headers: ["Method", "Description", "Example"],
        rows: [
          [
            "`append(item)`",
            "Adds an item to the end of the list.",
            "`my_list.append(6)`",
          ],
          [
            "`insert(index, item)`",
            "Inserts an item at a specified index.",
            "`my_list.insert(1, 0)`",
          ],
          [
            "`remove(item)`",
            "Removes the first occurrence of an item by value.",
            "`my_list.remove(3)`",
          ],
          [
            "`pop(index)`",
            "Removes and returns the item at a given index (default last).",
            "`my_list.pop()`",
          ],
          [
            "`clear()`",
            "Removes all items from the list.",
            "`my_list.clear()`",
          ],
          [
            "`index(item)`",
            "Returns the index of the first occurrence of an item.",
            "`my_list.index(2)`",
          ],
          [
            "`count(item)`",
            "Returns the number of times an item appears in the list.",
            "`my_list.count(1)`",
          ],
          [
            "`sort()`",
            "Sorts the list in-place (modifies the original list).",
            "`my_list.sort()`",
          ],
          [
            "`reverse()`",
            "Reverses the order of elements in-place.",
            "`my_list.reverse()`",
          ],
          [
            "`copy()`",
            "Returns a shallow copy of the list.",
            "`new_list = my_list.copy()`",
          ],
          [
            "`extend(iterable)`",
            "Appends elements from another iterable to the current list.",
            "`list1.extend(list2)`",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example: List Methods in Action",
        code: 'numbers = [5, 2, 8, 1, 2]\n\nnumbers.sort() # Sorts in-place\nprint(f"Sorted list: {numbers}") # Output: Sorted list: [1, 2, 2, 5, 8]\n\nnumbers.reverse()\nprint(f"Reversed list: {numbers}") # Output: Reversed list: [8, 5, 2, 2, 1]\n\nprint(f"Index of first \'2\': {numbers.index(2)}") # Output: Index of first \'2\': 2\nprint(f"Count of \'2\': {numbers.count(2)}")     # Output: Count of \'2\': 2\n\nanother_list = [9, 0]\nnumbers.extend(another_list)\nprint(f"Extended list: {numbers}") # Output: Extended list: [8, 5, 2, 2, 1, 9, 0]',
        language: "python",
      },
      {
        type: "title",
        content: "f. List Comprehensions",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "List comprehensions provide a concise way to create lists. They consist of brackets containing an expression followed by a 'for' clause, then zero or more 'for' or 'if' clauses.",
      },
      {
        type: "codeblock",
        title: "Example: List Comprehensions",
        code: '# Create a list of squares\nsquares = [x**2 for x in range(1, 6)]\nprint(f"Squares: {squares}") # Output: Squares: [1, 4, 9, 16, 25]\n\n# Create a list of even numbers from another list\nold_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\neven_numbers = [x for x in old_list if x % 2 == 0]\nprint(f"Even numbers: {even_numbers}") # Output: Even numbers: [2, 4, 6, 8, 10]\n\n# Create a list of (number, square) tuples\npairs = [(x, x**2) for x in range(3)]\nprint(f"Pairs: {pairs}") # Output: Pairs: [(0, 0), (1, 1), (2, 4)]',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. Tuples: Ordered, Immutable Collections",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Tuples are similar to lists in that they are ordered collections of items, and they can hold mixed data types. The key difference is that tuples are immutable, meaning their contents cannot be changed after creation. This immutability makes them useful for data that should not be modified, like coordinates or database records.",
      },
      {
        type: "title",
        content: "a. Tuple Creation",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Tuples are created by placing a sequence of items separated by commas. Parentheses `()` are commonly used but are not strictly required for creation (except for empty tuples or nested tuples).",
      },
      {
        type: "codeblock",
        title: "Example: Tuple Creation",
        code: 'my_empty_tuple = ()\nmy_coordinates = (10.0, 20.0)\nmy_rgb_color = 255, 0, 128 # Parentheses are optional here\nmy_single_item_tuple = ("hello",) # Comma is MANDATORY for single item tuple!\nmy_mixed_tuple = ("apple", 1, True)\n\nprint(f"Empty tuple: {my_empty_tuple}")\nprint(f"Coordinates: {my_coordinates}")\nprint(f"RGB Color: {my_rgb_color}")\nprint(f"Single item tuple: {my_single_item_tuple}, Type: {type(my_single_item_tuple)}")\nprint(f"Mixed tuple: {my_mixed_tuple}")\n\n# Output:\n# Empty tuple: ()\n# Coordinates: (10.0, 20.0)\n# RGB Color: (255, 0, 128)\n# Single item tuple: (\'hello\',), Type: <class \'tuple\'>\n# Mixed tuple: (\'apple\', 1, True)',
        language: "python",
      },
      {
        type: "title",
        content: "b. Accessing Elements",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Accessing elements in a tuple is identical to lists, using square brackets `[]` and indices (both positive and negative) or slicing.",
      },
      {
        type: "codeblock",
        title: "Example: Accessing Tuple Elements",
        code: 'my_tuple = ("alpha", "beta", "gamma", "delta")\n\nprint(f"First element: {my_tuple[0]}")   # Output: First element: alpha\nprint(f"Last element: {my_tuple[-1]}")   # Output: Last element: delta\nprint(f"Slice (1 to 3 exclusive): {my_tuple[1:3]}") # Output: Slice (1 to 3 exclusive): (\'beta\', \'gamma\')',
        language: "python",
      },
      {
        type: "title",
        content: "c. Immutability",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The defining characteristic of tuples is their immutability. Once created, you cannot change, add, or remove items. This will raise a `TypeError`.",
      },
      {
        type: "codeblock",
        title: "Example: Tuple Immutability",
        code: 'my_tuple = (1, 2, 3)\n\n# my_tuple[0] = 5 # This would raise a TypeError: \'tuple\' object does not support item assignment\n\n# You can, however, reassign the variable to a new tuple\nmy_tuple = (4, 5, 6)\nprint(f"New tuple after reassigning: {my_tuple}") # Output: New tuple after reassigning: (4, 5, 6)\n\n# If a tuple contains mutable objects (like lists), those mutable objects can still be changed\nmutable_in_tuple = (1, [2, 3], 4)\nmutable_in_tuple[1].append(5)\nprint(f"Tuple with mutable item changed: {mutable_in_tuple}") # Output: Tuple with mutable item changed: (1, [2, 3, 5], 4)',
        language: "python",
      },
      {
        type: "title",
        content: "d. Tuple Packing and Unpacking",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "**Packing** is when you combine multiple values into a single tuple. This happens automatically when you create a tuple without parentheses (e.g., `a, b = 1, 2`). **Unpacking** is when you extract values from a tuple (or any iterable) into separate variables.",
      },
      {
        type: "codeblock",
        title: "Example: Tuple Packing and Unpacking",
        code: '# Packing\npacked_tuple = 10, 20, 30 # Python automatically packs these into a tuple\nprint(f"Packed tuple: {packed_tuple}") # Output: Packed tuple: (10, 20, 30)\n\n# Unpacking\na, b, c = packed_tuple # The values from the tuple are unpacked into a, b, c\nprint(f"Unpacked values: a={a}, b={b}, c={c}") # Output: Unpacked values: a=10, b=20, c=30\n\n# Swapping variables easily\nx = 5\ny = 10\nx, y = y, x # Packs (10, 5) then unpacks into x, y\nprint(f"After swap: x={x}, y={y}") # Output: After swap: x=10, y=5\n\n# Unpacking with * (for remaining items)\nnumbers = (1, 2, 3, 4, 5, 6)\nfirst, *middle, last = numbers # \'middle\' will be a list of remaining items\nprint(f"First: {first}, Middle: {middle}, Last: {last}") # Output: First: 1, Middle: [2, 3, 4, 5], Last: 6',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "3. Sets: Unordered, Unique Collections",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Sets are unordered collections of unique elements. They are mutable, but their elements must be immutable (e.g., numbers, strings, tuples, but not lists or dictionaries). Sets are primarily used for mathematical set operations like union, intersection, and difference, and for quickly checking membership.",
      },
      {
        type: "title",
        content: "a. Set Creation",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Sets are created using curly braces `{}` or the `set()` constructor. Note that an empty set **must** be created using `set()`, as `{}` creates an empty dictionary.",
      },
      {
        type: "codeblock",
        title: "Example: Set Creation",
        code: 'my_set = {1, 2, 3, 4, 5}\nmy_mixed_set = {"apple", 1, True, 3.14} # Order is not guaranteed\nmy_set_from_list = set([1, 2, 2, 3, 4, 4]) # Duplicates are automatically removed\nempty_set = set() # Correct way to create an empty set\n# empty_dict = {} # This creates an empty dictionary, not a set\n\nprint(f"My set: {my_set}") # Output: My set: {1, 2, 3, 4, 5}\nprint(f"Mixed set: {my_mixed_set}") # Output: Mixed set: {1, 3.14, \'apple\', True, ...} (order may vary)\nprint(f"Set from list (duplicates removed): {my_set_from_list}") # Output: Set from list (duplicates removed): {1, 2, 3, 4}\nprint(f"Empty set: {empty_set}") # Output: Empty set: set()',
        language: "python",
      },
      {
        type: "title",
        content: "b. Mutability of Sets",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "While the elements within a set must be immutable, the set itself is mutable. You can add or remove elements.",
      },
      {
        type: "codeblock",
        title: "Example: Modifying Sets",
        code: "colors = {\"red\", \"green\", \"blue\"}\n\ncolors.add(\"yellow\") # Add a single element\nprint(f\"After adding yellow: {colors}\") # Output: {'green', 'red', 'yellow', 'blue'} (order may vary)\n\ncolors.update({\"purple\", \"orange\"}) # Add multiple elements from an iterable\nprint(f\"After updating with purple, orange: {colors}\") # Output: {'orange', 'blue', 'green', 'red', 'yellow', 'purple'}\n\ncolors.remove(\"red\") # Remove an element (raises KeyError if not present)\nprint(f\"After removing red: {colors}\") # Output: {'orange', 'blue', 'green', 'yellow', 'purple'}\n\ncolors.discard(\"pink\") # Remove an element (no error if not present)\nprint(f\"After discarding pink: {colors}\") # Output: {'orange', 'blue', 'green', 'yellow', 'purple'}\n\npopped_item = colors.pop() # Removes and returns an arbitrary element\nprint(f\"After popping: {colors}, Popped: {popped_item}\") # Output: (example) After popping: {'blue', 'green', 'yellow', 'purple'}, Popped: orange\n\ncolors.clear() # Remove all elements\nprint(f\"After clearing: {colors}\") # Output: set()",
        language: "python",
      },
      {
        type: "title",
        content: "c. Set Operations",
        level: 3,
      },
      {
        type: "paragraph",
        content: "Sets excel at performing mathematical set operations.",
      },
      {
        type: "table",
        headers: ["Operation", "Method/Operator", "Description", "Example"],
        rows: [
          [
            "Union",
            "`union()` or `|`",
            "All unique elements from both sets.",
            "`A.union(B)` or `A | B`",
          ],
          [
            "Intersection",
            "`intersection()` or `&`",
            "Elements common to both sets.",
            "`A.intersection(B)` or `A & B`",
          ],
          [
            "Difference",
            "`difference()` or `-`",
            "Elements in the first set but not in the second.",
            "`A.difference(B)` or `A - B`",
          ],
          [
            "Symmetric Difference",
            "`symmetric_difference()` or `^`",
            "Elements in either set, but not in both.",
            "`A.symmetric_difference(B)` or `A ^ B`",
          ],
          [
            "Subset",
            "`issubset()`",
            "Checks if all elements of one set are in another.",
            "`A.issubset(B)`",
          ],
          [
            "Superset",
            "`issuperset()`",
            "Checks if one set contains all elements of another.",
            "`A.issuperset(B)`",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example: Set Operations",
        code: 'set_a = {1, 2, 3, 4}\nset_b = {3, 4, 5, 6}\n\nprint(f"Set A: {set_a}")\nprint(f"Set B: {set_b}")\n\nprint(f"Union (A | B): {set_a | set_b}")           # Output: Union (A | B): {1, 2, 3, 4, 5, 6}\nprint(f"Intersection (A & B): {set_a & set_b}")   # Output: Intersection (A & B): {3, 4}\nprint(f"Difference (A - B): {set_a - set_b}")     # Output: Difference (A - B): {1, 2}\nprint(f"Symmetric Difference (A ^ B): {set_a ^ set_b}") # Output: Symmetric Difference (A ^ B): {1, 2, 5, 6}\n\nset_c = {1, 2}\nprint(f"C is subset of A: {set_c.issubset(set_a)}")  # Output: C is subset of A: True\nprint(f"A is superset of C: {set_a.issuperset(set_c)}") # Output: A is superset of C: True',
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "4. Dictionaries: Unordered, Key-Value Pairs",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Dictionaries are unordered collections of data values, used to store data values in key:value pairs. Each key must be unique and immutable (like strings, numbers, or tuples), while values can be of any data type and can be duplicated. Dictionaries are optimized for retrieving values when the key is known.",
      },
      {
        type: "title",
        content: "a. Dictionary Creation",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Dictionaries are created by placing key:value pairs inside curly braces `{}`, separated by commas.",
      },
      {
        type: "codeblock",
        title: "Example: Dictionary Creation",
        code: "my_empty_dict = {}\nmy_person = {\n    \"name\": \"Alice\",\n    \"age\": 30,\n    \"city\": \"New York\"\n}\nmy_scores = {\"math\": 95, \"science\": 88, \"english\": 92}\n\n# Using dict() constructor with keyword arguments\nmy_dict_from_kwargs = dict(name=\"Bob\", age=25)\n\n# Using dict() constructor with a list of tuples (key, value pairs)\nmy_dict_from_tuples = dict([('a', 1), ('b', 2)])\n\nprint(f\"Empty dict: {my_empty_dict}\")\nprint(f\"Person dict: {my_person}\")\nprint(f\"Scores dict: {my_scores}\")\nprint(f\"Dict from kwargs: {my_dict_from_kwargs}\")\nprint(f\"Dict from tuples: {my_dict_from_tuples}\")\n\n# Output:\n# Empty dict: {}\n# Person dict: {'name': 'Alice', 'age': 30, 'city': 'New York'}\n# Scores dict: {'math': 95, 'science': 88, 'english': 92}\n# Dict from kwargs: {'name': 'Bob', 'age': 25}\n# Dict from tuples: {'a': 1, 'b': 2}",
        language: "python",
      },
      {
        type: "title",
        content: "b. Accessing Values",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Values are accessed using their corresponding keys inside square brackets `[]` or with the `get()` method. Using `get()` is safer as it returns `None` (or a specified default value) if the key doesn't exist, instead of raising a `KeyError`.",
      },
      {
        type: "codeblock",
        title: "Example: Accessing Dictionary Values",
        code: 'student = {\n    "name": "Jane Doe",\n    "id": "S12345",\n    "major": "Computer Science"\n}\n\nprint(f"Student name (bracket notation): {student[\'name\']}") # Output: Student name (bracket notation): Jane Doe\nprint(f"Student major (get() method): {student.get(\'major\')}") # Output: Student major (get() method): Computer Science\n\n# Accessing a non-existent key with brackets raises an error\n# print(student[\'gpa\']) # This would raise a KeyError\n\n# Accessing a non-existent key with get() returns None or default\nprint(f"Student GPA (get() without default): {student.get(\'gpa\')}") # Output: Student GPA (get() without default): None\nprint(f"Student GPA (get() with default): {student.get(\'gpa\', \'N/A\')}") # Output: Student GPA (get() with default): N/A',
        language: "python",
      },
      {
        type: "title",
        content: "c. Modifying Dictionaries",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Dictionaries are mutable. You can add new key-value pairs, change existing values, or remove pairs.",
      },
      {
        type: "codeblock",
        title: "Example: Modifying Dictionaries",
        code: "car = {\"brand\": \"Ford\", \"model\": \"Mustang\", \"year\": 1964}\n\n# Add a new key-value pair\ncar[\"color\"] = \"red\"\nprint(f\"After adding color: {car}\") # Output: After adding color: {'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'red'}\n\n# Change an existing value\ncar[\"year\"] = 2023\nprint(f\"After changing year: {car}\") # Output: After changing year: {'brand': 'Ford', 'model': 'Mustang', 'year': 2023, 'color': 'red'}\n\n# Remove a key-value pair using del\ndel car[\"model\"]\nprint(f\"After deleting model: {car}\") # Output: After deleting model: {'brand': 'Ford', 'year': 2023, 'color': 'red'}\n\n# Remove a key-value pair using pop() (and get value)\nremoved_color = car.pop(\"color\")\nprint(f\"After popping color: {car}, Removed: {removed_color}\") # Output: After popping color: {'brand': 'Ford', 'year': 2023}, Removed: red\n\n# Remove the last inserted item using popitem() (Python 3.7+ retains insertion order)\npopped_item = car.popitem() # Returns a (key, value) tuple\nprint(f\"After popping item: {car}, Popped: {popped_item}\") # Output: After popping item: {'brand': 'Ford'}, Popped: ('year', 2023)\n\n# Clear all items\ncar.clear()\nprint(f\"After clearing: {car}\") # Output: {}",
        language: "python",
      },
      {
        type: "title",
        content: "d. Common Dictionary Methods",
        level: 3,
      },
      {
        type: "table",
        headers: ["Method", "Description", "Example"],
        rows: [
          [
            "`keys()`",
            "Returns a view object of all keys.",
            "`my_dict.keys()`",
          ],
          [
            "`values()`",
            "Returns a view object of all values.",
            "`my_dict.values()`",
          ],
          [
            "`items()`",
            "Returns a view object of all key-value pairs as tuples.",
            "`my_dict.items()`",
          ],
          [
            "`get(key, default)`",
            "Returns the value for a key, or default if key not found.",
            "`my_dict.get('age', 0)`",
          ],
          [
            "`update(other_dict)`",
            "Updates the dictionary with key-value pairs from another dictionary or iterable.",
            "`dict1.update(dict2)`",
          ],
          [
            "`pop(key, default)`",
            "Removes the item with the specified key and returns its value.",
            "`my_dict.pop('city')`",
          ],
          [
            "`popitem()`",
            "Removes and returns a (key, value) pair. (Last inserted in Python 3.7+)",
            "`my_dict.popitem()`",
          ],
          [
            "`clear()`",
            "Removes all items from the dictionary.",
            "`my_dict.clear()`",
          ],
          [
            "`copy()`",
            "Returns a shallow copy of the dictionary.",
            "`new_dict = my_dict.copy()`",
          ],
        ],
      },
      {
        type: "codeblock",
        title: "Example: Dictionary Methods in Action",
        code: "person = {\"name\": \"Bob\", \"age\": 40, \"job\": \"Engineer\"}\n\nprint(f\"Keys: {person.keys()}\")   # Output: Keys: dict_keys(['name', 'age', 'job'])\nprint(f\"Values: {person.values()}\") # Output: Values: dict_values(['Bob', 40, 'Engineer'])\nprint(f\"Items: {person.items()}\")   # Output: Items: dict_items([('name', 'Bob'), ('age', 40), ('job', 'Engineer')])\n\nnew_info = {\"city\": \"London\", \"age\": 41} # 'age' will be updated\nperson.update(new_info)\nprint(f\"After update: {person}\") # Output: After update: {'name': 'Bob', 'age': 41, 'job': 'Engineer', 'city': 'London'}",
        language: "python",
      },
      {
        type: "title",
        content: "e. Dictionary Comprehensions",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Similar to list comprehensions, dictionary comprehensions provide a concise way to create dictionaries from iterables.",
      },
      {
        type: "codeblock",
        title: "Example: Dictionary Comprehensions",
        code: "# Create a dictionary of squares for numbers 1-5\nsquares_dict = {x: x**2 for x in range(1, 6)}\nprint(f\"Squares dict: {squares_dict}\") # Output: Squares dict: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n\n# Create a dictionary from a list, mapping item to its length\nwords = [\"apple\", \"banana\", \"cat\"]\nword_lengths = {word: len(word) for word in words}\nprint(f\"Word lengths: {word_lengths}\") # Output: Word lengths: {'apple': 5, 'banana': 6, 'cat': 3}\n\n# Filter and transform items from an existing dictionary\noriginal_dict = {'a': 10, 'b': 25, 'c': 5, 'd': 30}\nfiltered_dict = {k: v for k, v in original_dict.items() if v > 20}\nprint(f\"Filtered dict: {filtered_dict}\") # Output: Filtered dict: {'b': 25, 'd': 30}",
        language: "python",
      },
    ],
  },
  {
    key: "File Handling",
    title: "Python File Handling: Interacting with Files",
    sections: [
      {
        type: "title",
        content: "Python File Handling: Reading, Writing, and Appending",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "File handling is a crucial aspect of many programs, allowing them to interact with external data stored in files. Python provides straightforward ways to perform common file operations such as reading data from a file, writing data to a file, and appending data to an existing file. This involves opening a file, performing operations, and then closing the file.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "1. Opening Files: The open() Function",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Before you can read from or write to a file, you need to open it. The open() function is used for this purpose. It returns a file object, which has methods for reading, writing, and other file-related operations.",
      },
      {
        type: "codeblock",
        title: "Syntax for open()",
        code: "file_object = open('filename', 'mode', encoding='utf-8')",
        language: "python",
      },
      {
        type: "list",
        items: [
          "filename: A string representing the path to the file you want to open. If the file is not in the current working directory, you need to provide the full path.",
          "mode: A string indicating the purpose for which the file is being opened. This is crucial as it determines what operations you can perform.",
          "encoding: (Optional, but highly recommended for text files) Specifies the character encoding to use (e.g., 'utf-8', 'latin-1'). 'utf-8' is a good default for most text files.",
        ],
      },
      {
        type: "title",
        content: "Common File Modes",
        level: 3,
      },
      {
        type: "table",
        headers: ["Mode", "Description"],
        rows: [
          [
            "'r'",
            "Read (default). Opens a file for reading. If the file doesn't exist, it raises a `FileNotFoundError`.",
          ],
          [
            "'w'",
            "Write. Opens a file for writing. If the file exists, it truncates (empties) it. If the file doesn't exist, it creates a new one.",
          ],
          [
            "'a'",
            "Append. Opens a file for appending. If the file exists, new data is written to the end. If the file doesn't exist, it creates a new one.",
          ],
          [
            "'x'",
            "Exclusive Creation. Creates a new file for writing. If the file already exists, it raises a `FileExistsError`.",
          ],
          [
            "'b'",
            "Binary mode. Used with other modes (e.g., 'rb', 'wb', 'ab') for non-text files like images or executables.",
          ],
          [
            "'t'",
            "Text mode (default). Used with other modes (e.g., 'rt', 'wt', 'at') for text files. This is usually implicit.",
          ],
          [
            "'+'",
            "Open for updating (reading and writing). Used with other modes (e.g., 'r+', 'w+', 'a+').",
          ],
        ],
      },
      {
        type: "paragraph",
        content:
          "It's a best practice to always specify the encoding when dealing with text files to avoid issues with different character sets.",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "2. Reading from Files",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Once a file is opened in read mode ('r' or 'rt'), you can use various methods to retrieve its content.",
      },
      {
        type: "title",
        content: "a. read(): Read Entire Content",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The read() method reads the entire content of the file as a single string. You can optionally pass an integer argument to read a specific number of characters.",
      },
      {
        type: "codeblock",
        title: "Example: Reading Entire File with read()",
        code: "# First, let's create a sample file to read from\nwith open('sample_read.txt', 'w', encoding='utf-8') as f:\n    f.write(\"Hello, this is line 1.\\n\")\n    f.write(\"This is line 2.\\n\")\n    f.write(\"And finally, line 3.\")\n\n# Now, read the file\nprint(\"--- Reading entire file ---\")\nwith open('sample_read.txt', 'r', encoding='utf-8') as file:\n    content = file.read()\n    print(content)\n\n# Output (from print):\n# Hello, this is line 1.\n# This is line 2.\n# And finally, line 3.",
        language: "python",
      },
      {
        type: "title",
        content: "b. readline(): Read One Line at a Time",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The readline() method reads a single line from the file, including the newline character `\\n` at the end (if present). Each subsequent call reads the next line.",
      },
      {
        type: "codeblock",
        title: "Example: Reading Line by Line with readline()",
        code: "# Using the same 'sample_read.txt' from previous example\nprint(\"--- Reading line by line ---\")\nwith open('sample_read.txt', 'r', encoding='utf-8') as file:\n    line1 = file.readline()\n    line2 = file.readline()\n    line3 = file.readline()\n    line_empty = file.readline() # Reads an empty string at EOF\n\n    print(f\"Line 1: {line1.strip()}\") # .strip() removes leading/trailing whitespace, including newline\n    print(f\"Line 2: {line2.strip()}\")\n    print(f\"Line 3: {line3.strip()}\")\n    print(f\"Empty line read at EOF: '{line_empty}'\")\n\n# Output:\n# --- Reading line by line ---\n# Line 1: Hello, this is line 1.\n# Line 2: This is line 2.\n# Line 3: And finally, line 3.\n# Empty line read at EOF: ''",
        language: "python",
      },
      {
        type: "title",
        content: "c. readlines(): Read All Lines into a List",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The readlines() method reads all lines from the file and returns them as a list of strings, where each string represents a line including the newline character.",
      },
      {
        type: "codeblock",
        title: "Example: Reading All Lines with readlines()",
        code: "# Using the same 'sample_read.txt'\nprint(\"--- Reading all lines into a list ---\")\nwith open('sample_read.txt', 'r', encoding='utf-8') as file:\n    all_lines = file.readlines()\n    print(f\"List of lines: {all_lines}\")\n\n# Output:\n# --- Reading all lines into a list ---\n# List of lines: ['Hello, this is line 1.\\n', 'This is line 2.\\n', 'And finally, line 3.']",
        language: "python",
      },
      {
        type: "title",
        content: "d. Iterating Over a File Object (Most Common and Efficient)",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The most memory-efficient and Pythonic way to read a file line by line is to iterate directly over the file object itself. This reads lines lazily (one at a time) and is excellent for large files.",
      },
      {
        type: "codeblock",
        title: "Example: Iterating Over File Lines",
        code: "# Using the same 'sample_read.txt'\nprint(\"--- Iterating over file object ---\")\nwith open('sample_read.txt', 'r', encoding='utf-8') as file:\n    for line_num, line in enumerate(file, 1):\n        print(f\"Line {line_num}: {line.strip()}\")\n\n# Output:\n# --- Iterating over file object ---\n# Line 1: Hello, this is line 1.\n# Line 2: This is line 2.\n# Line 3: And finally, line 3.",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "3. Writing to Files",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "To write data to a file, open it in 'write' mode ('w' or 'wt'). Be cautious: if the file already exists, opening in 'w' mode will truncate (empty) its contents before writing.",
      },
      {
        type: "title",
        content: "a. `write()`: Write a String",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The `write()` method writes a string to the file. It does not automatically add a newline character, so you must include `\\n` yourself if you want to write multiple lines.",
      },
      {
        type: "codeblock",
        title: "Example: Writing to a File with `write()`",
        code: "print(\"--- Writing to file (overwrites existing content) ---\")\nwith open('output_write.txt', 'w', encoding='utf-8') as file:\n    file.write(\"This is the first line.\\n\")\n    file.write(\"And this is the second line.\")\n    file.write(\"This will be on the same line as second.\")\n\nprint(\"Content written to output_write.txt. Check the file.\")\n\n# Verify content by reading it back\nwith open('output_write.txt', 'r', encoding='utf-8') as file:\n    print(\"\\n--- Content of output_write.txt ---\")\n    print(file.read())\n\n# Expected content of output_write.txt:\n# This is the first line.\n# And this is the second line.This will be on the same line as second.",
        language: "python",
      },
      {
        type: "title",
        content: "b. `writelines()`: Write a List of Strings",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The `writelines()` method writes a list of strings to the file. Similar to `write()`, it does not add newline characters automatically, so ensure each string in the list ends with `\\n` if you want them on separate lines.",
      },
      {
        type: "codeblock",
        title: "Example: Writing Multiple Lines with `writelines()`",
        code: "lines_to_write = [\n    \"Item A: details here.\\n\",\n    \"Item B: more details.\\n\",\n    \"Item C: final details.\"\n]\n\nprint(\"--- Writing multiple lines with writelines() ---\")\nwith open('output_writelines.txt', 'w', encoding='utf-8') as file:\n    file.writelines(lines_to_write)\n\nprint(\"Content written to output_writelines.txt. Check the file.\")\n\n# Verify content by reading it back\nwith open('output_writelines.txt', 'r', encoding='utf-8') as file:\n    print(\"\\n--- Content of output_writelines.txt ---\")\n    print(file.read())\n\n# Expected content of output_writelines.txt:\n# Item A: details here.\n# Item B: more details.\n# Item C: final details.",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "4. Appending to Files",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "To add new data to the end of an existing file without overwriting its current content, open the file in 'append' mode ('a' or 'at'). If the file doesn't exist, Python will create it.",
      },
      {
        type: "codeblock",
        title: "Example: Appending to a File",
        code: "# First, create a file with some initial content\nwith open('log.txt', 'w', encoding='utf-8') as f:\n    f.write(\"Initial log entry: Program started.\\n\")\n\nprint(\"--- Appending to log.txt ---\")\nwith open('log.txt', 'a', encoding='utf-8') as file:\n    file.write(\"New entry: User logged in.\\n\")\n    file.write(\"Another entry: Data processed.\\n\")\n\nprint(\"Content appended to log.txt. Check the file.\")\n\n# Verify content by reading it back\nwith open('log.txt', 'r', encoding='utf-8') as file:\n    print(\"\\n--- Content of log.txt after appending ---\")\n    print(file.read())\n\n# Expected content of log.txt:\n# Initial log entry: Program started.\n# New entry: User logged in.\n# Another entry: Data processed.",
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "5. Closing Files (The `with` Statement)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "After performing file operations, it's crucial to close the file to free up system resources and ensure all changes are saved. Failing to close files can lead to data corruption or resource leaks.",
      },
      {
        type: "paragraph",
        content:
          "The most recommended and Pythonic way to handle file opening and closing is by using the `with` statement (also known as a context manager). This ensures that the file is automatically closed, even if errors occur during file operations.",
      },
      {
        type: "codeblock",
        title: "Example: Using `with` Statement (Recommended)",
        code: "print(\"--- Using 'with' statement for safe file handling ---\")\ntry:\n    with open('safe_file.txt', 'w', encoding='utf-8') as f:\n        f.write(\"This content is written safely.\")\n        # No need for f.close() here, 'with' handles it\n    print(\"File 'safe_file.txt' written successfully and closed automatically.\")\n\n    with open('safe_file.txt', 'r', encoding='utf-8') as f:\n        content = f.read()\n        print(f\"Read from safe_file.txt: {content}\")\n\nexcept IOError as e:\n    print(f\"An I/O error occurred: {e}\")\n\n# Output:\n# --- Using 'with' statement for safe file handling ---\n# File 'safe_file.txt' written successfully and closed automatically.\n# Read from safe_file.txt: This content is written safely.",
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "While you *can* use `file_object.close()` explicitly, it's generally discouraged in modern Python code because `with` offers better error handling and resource management.",
      },
      {
        type: "codeblock",
        title: "Example: Manual File Closing (Less Recommended)",
        code: "print(\"\\n--- Manual file closing (less recommended) ---\")\nfile_manual = None # Initialize to None\ntry:\n    file_manual = open('manual_close.txt', 'w', encoding='utf-8')\n    file_manual.write(\"This file is closed manually.\")\n    # If an error occurs here, file_manual.close() might not be called\nexcept IOError as e:\n    print(f\"An error occurred: {e}\")\nfinally:\n    if file_manual:\n        file_manual.close()\n        print(\"File 'manual_close.txt' closed manually in finally block.\")\n\n# Verify content\nwith open('manual_close.txt', 'r', encoding='utf-8') as f:\n    print(f\"Read from manual_close.txt: {f.read()}\")\n\n# Output:\n# --- Manual file closing (less recommended) ---\n# File 'manual_close.txt' closed manually in finally block.\n# Read from manual_close.txt: This file is closed manually.",
        language: "python",
      },
    ],
  },
];
