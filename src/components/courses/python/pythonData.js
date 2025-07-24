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
          "Python can be used on a server to create web applications.",
          "Python can be used alongside software to create workflows.",
          "Python can be used for rapid prototyping, or for production-ready software development.",
          "Python can be used to handle big data and perform complex mathematics.",
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
          "Python has a simple syntax similar to the English language.",
          "Python has syntax that allows developers to write programs with fewer lines than some other programming languages.",
          "Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.",
        ],
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
          "Python syntax can be executed by writing directly in the Command Line:",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `print("Hello World")
output: Hello World`,
        language: "python",
      },
      {
        type: "title",
        content: "Python Indentation",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Indentation refers to the spaces at the beginning of a code line.",
      },
      {
        type: "paragraph",
        content:
          "Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.",
      },
      {
        type: "paragraph",
        content: "Python uses indentation to indicate a block of code.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `if 5 > 2: 
   print("Five is greater than two!")`,
        language: "python",
        bgColor: "bg-green-100",
      },
      {
        type: "paragraph",
        content: "Python will give you an error if you skip the indentation:",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `if 5 > 2: 
print("Five is greater than two!")`,
        language: "python",
        bgColor: "bg-red-100",
      },
      {
        type: "paragraph",
        content:
          "The number of spaces is up to you as a programmer, the most common use is four, but it has to be at least one.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `if 5 > 2: 
   print("Five is greater than two!")
if 5 > 2:
        print("Five is greater than two!")`,
        language: "python",
        bgColor: "bg-green-100",
      },
      {
        type: "paragraph",
        content:
          "You have to use the same number of spaces in the same block of code, otherwise Python will give you an error:",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `if 5 > 2: 
   print("Five is greater than two!")
        print("Five is greater than two!")`,
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
        content: "Comments can be used to explain Python code.",
      },
      {
        type: "paragraph",
        content: "Comments can be used to make the code more readable.",
      },
      {
        type: "paragraph",
        content: "Comments can be used to prevent execution when testing code.",
      },
      {
        type: "title",
        content: "Single Line Comments",
        level: 2,
      },
      {
        type: "paragraph",
        content: "Comments starts with a #, and Python will ignore them:",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `#This is a comment 
print("Hello World!")`,
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Comments can be placed at the end of a line, and Python will ignore the rest of the line:",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `print("Hello World!") # This is a Comment`,
        language: "python",
      },
      {
        type: "separator",
      },
      {
        type: "title",
        content: "Multi Line Comments",
        level: 2,
      },
      {
        type: "paragraph",
        content: "Python does not really have a syntax for multiline comments.",
      },
      {
        type: "paragraph",
        content:
          "To add a multiline comment you could insert a # for each line:",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `#This is a comment 
#which is written
#in multiple line
print("Hello World!")`,
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Since Python will ignore string literals that are not assigned to a variable, you can add a multiline string (triple quotes) in your code, and place your comment inside it:",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `"""
This is a comment 
which is written
in multiple line
"""
print("Hello World!")`,
        language: "python",
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
        content: "Variables",
        level: 2,
      },
      {
        type: "paragraph",
        content: "Variables are containers for storing data values.",
      },
      {
        type: "title",
        content: "Creating Variables",
        level: 3,
      },
      {
        type: "paragraph",
        content: "Python has no command for declaring a variable.",
      },
      {
        type: "paragraph",
        content:
          "A variable is created the moment you first assign a value to it.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `x = 25
y = "Neha"
print(x)  # output: 25
print(y)  # output: Neha`,
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "Variables do not need to be declared with any particular type, and can even change type after they have been set.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `a = 10
a = "Bhoomi"
print(a)  # output: Bhoomi`,
        language: "python",
      },
      {
        type: "title",
        content: "Casting",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "If you want to specify the data type of a variable, this can be done with casting.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `a = str(15)    # output: a = '15'
a = int(15)    # output: a = 15
a = float(15)  # output: a = 15.0`,
        language: "python",
      },
      {
        type: "title",
        content: "Get Type of Variables",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "You can get the data type of a variable with the type() function.",
        highlights: [{ text: "type()", color: "red-600" }],
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `x = 20
y = "Riddhi"
print(type(x))  # output: <class 'int'>
print(type(y))  # output: <class 'str'>`,
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
        content: "Coming Soon...",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "This section will cover Python data types including int, float, str, bool, list, tuple, dict, and set.",
      },
    ],
  },

  {
    key: "Type casting",
    title: "Python Type Casting",
    sections: [
      {
        type: "title",
        content: "Coming Soon...",
        level: 1,
      },
      {
        type: "paragraph",
        content: "This section will cover type conversion in Python.",
      },
    ],
  },

  {
    key: "Operators",
    title: "Python Operators",
    sections: [
      {
        type: "title",
        content: "Coming Soon...",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "This section will cover arithmetic, comparison, logical, and other operators.",
      },
    ],
  },

  {
    key: "String",
    title: "Python Strings",
    sections: [
      {
        type: "title",
        content: "Coming Soon...",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "This section will cover string operations, methods, and formatting.",
      },
    ],
  },

  {
    key: "Arrays",
    title: "Python Arrays",
    sections: [
      {
        type: "title",
        content: "Python Arrays (Lists)",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "Python does not have built-in support for Arrays, but Python Lists can be used instead.",
      },
      {
        type: "paragraph",
        content:
          "Arrays are used to store multiple values in one single variable.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `cars = ["Ford", "Volvo", "BMW"]
print(cars)  # output: ['Ford', 'Volvo', 'BMW']`,
        language: "python",
      },
    ],
  },
];
