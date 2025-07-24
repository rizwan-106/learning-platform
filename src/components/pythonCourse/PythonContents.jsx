import React from "react";

const PythonContents = [
  {
    key: "Intro",
    data: (
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">What is Python</h1>
        <p>
          Python is a popular programming language. It was created by Guido van
          Rossum, and released in 1991.
        </p>
        <p className=" font-semibold">It is used for:</p>
        <ul className="list-disc mx-4">
          <li>web development (server-side)</li>
          <li>software development</li>
          <li>mathematics</li>
        </ul>
        <p className=" font-semibold">What can Python do?</p>
        <ul className="list-disc mx-4">
          <li>Python can be used on a server to create web applications.</li>
          <li>Python can be used alongside software to create workflows.</li>
          <li>
            Python can be used for rapid prototyping, or for production-ready
            software development.
          </li>
          <li>
            Python can be used to handle big data and perform complex
            mathematics.
          </li>
        </ul>
        <p className=" font-semibold">Why Python?</p>
        <ul className="list-disc mx-4">
          <li>
            Python works on different platforms (Windows, Mac, Linux, Raspberry
            Pi, etc).
          </li>
          <li>Python has a simple syntax similar to the English language.</li>
          <li>
            Python has syntax that allows developers to write programs with
            fewer lines than some other programming languages.
          </li>
          <li>
            Python runs on an interpreter system, meaning that code can be
            executed as soon as it is written. This means that prototyping can
            be very quick.
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "Syntax",
    data: (
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Execute Python Syntax</h1>
        <p>
          Python syntax can be executed by writing directly in the Command Line:
        </p>
        <div className="shadow-lg rounded-md p-4 bg-gray-300">
          <p className="text-lg font-semibold">Example:</p>
          <pre className="overflow-auto whitespace-pre-wrap">
            {`print("Hello World")
output: Hello World`}
          </pre>
        </div>
        <h1 className="text-xl font-semibold">Python Indentation</h1>
        <p>Indentation refers to the spaces at the beginning of a code line.</p>
        <p>
          Where in other programming languages the indentation in code is for
          readability only, the indentation in Python is very important.
        </p>
        <p>Python uses indentation to indicate a block of code.</p>
        <div className="shadow-lg p-4 rounded-md bg-green-100">
          <h5 className="font-semibold text-xl">Example:</h5>
          <pre className="overflow-auto whitespace-pre-wrap">{`if 5 > 2: 
   print("Five is greater than two!")`}</pre>
        </div>
        <p>Python will give you an error if you skip the indentation:</p>
        <div className="shadow-lg p-4 rounded-md bg-red-100">
          <h5 className="font-semibold text-xl">Example:</h5>
          <pre className="overflow-auto whitespace-pre-wrap">{`if 5 > 2: 
print("Five is greater than two!")`}</pre>
        </div>
        <p>
          The number of spaces is up to you as a programmer, the most common use
          is four, but it has to be at least one.
        </p>
        <div className="shadow-lg p-4 rounded-md bg-green-100">
          <h5 className="font-semibold text-xl">Example:</h5>
          <pre className="overflow-auto whitespace-pre-wrap">{`if 5 > 2: 
   print("Five is greater than two!")
if 5 > 2:
        print("Five is greater than two!")`}</pre>
        </div>
        <p>
          You have to use the same number of spaces in the same block of code,
          otherwise Python will give you an error:
        </p>
        <div className="shadow-lg p-4 rounded-md bg-red-100">
          <h5 className="font-semibold text-xl">Example:</h5>
          <pre className="overflow-auto whitespace-pre-wrap">{`if 5 > 2: 
   print("Five is greater than two!")
        print("Five is greater than two!")`}</pre>
        </div>
      </div>
    ),
  },
  {
    key: "Comment",
    data: (
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Comments in Python</h1>
        <p>Comments can be used to explain Python code.</p>
        <p>Comments can be used to make the code more readable.</p>
        <p>Comments can be used to prevent execution when testing code.</p>
        {/* Single Line Comment */}
        <h1 className="text-xl font-semibold">Single Line Comments</h1>
        <p>Comments starts with a #, and Python will ignore them:</p>
        <div className="shadow-lg p-4 rounded-md bg-gray-200">
          <h5 className="font-semibold text-xl">Example:</h5>
          <pre className="overflow-auto whitespace-pre-wrap">{`#This is a comment 
print("Hello World!")`}</pre>
        </div>
        <p>
          Comments can be placed at the end of a line, and Python will ignore
          the rest of the line:
        </p>
        <div className="shadow-lg p-4 rounded-md bg-gray-200">
          <h5 className="font-semibold text-xl">Example:</h5>
          <pre className="overflow-auto whitespace-pre-wrap">{`print("Hello World!") # This is a Comment`}</pre>
        </div>
        <hr />
        <h2 className="text-xl font-semibold">Multi Line Comments</h2>
        <p>Python does not really have a syntax for multiline comments.</p>
        <p>To add a multiline comment you could insert a # for each line:</p>
        <div className="shadow-lg p-4 rounded-md bg-gray-200">
          <h5 className="font-semibold text-xl">Example:</h5>
          <pre className="overflow-auto whitespace-pre-wrap">{`#This is a comment 
#which is written
#in multiple line
print("Hello World!")`}</pre>
        </div>
        <p>
          Since Python will ignore string literals that are not assigned to a
          variable, you can add a multiline string (triple quotes) in your code,
          and place your comment inside it:
        </p>
        <div className="shadow-lg p-4 rounded-md bg-gray-200">
          <h5 className="font-semibold text-xl">Example:</h5>
          <pre className="overflow-auto whitespace-pre-wrap">{`"""
This is a comment 
which is written
in multiple line
"""
print("Hello World!")`}</pre>
        </div>
        <p></p>
      </div>
    ),
  },
  {
    key: "Variable",
    data: (
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Python Variables</h1>
        <h2 className="font-semibold text-lg">Variables</h2>
        <p>Variables are containers for storing data values.</p>
        <h1 className="text-lg font-semibold">Creating Variables</h1>
        <p>Python has no command for declaring a variable.</p>
        <p>A variable is created the moment you first assign a value to it.</p>
        <div className="shadow-lg p-4 rounded-md bg-gray-200">
          <p className="font-semibold">Example:</p>
          <p>x = 25</p>
          <p>y = "Neha"</p>
          <p>
            print(x) <span className="text-green-600">output:</span> 25
          </p>

          <p>
            print(y) <span className="text-green-600">output:</span> Neha
          </p>
        </div>
        <p>
          Variables do not need to be declared with any particular type, and can
          even change type after they have been set.
        </p>
        <div className="shadow-lg p-4 rounded-md bg-gray-200">
          <p className="font-semibold">Example:</p>
          <p>a = 10</p>
          <p>b = "Bhoomi"</p>
          <p>
            print(a) <span className="text-green-600">output:</span> Bhoomi
          </p>
        </div>
        <h1 className="text-lg font-semibold">Casting</h1>
        <p>
          If you want to specify the data type of a variable, this can be done
          with casting.
        </p>
        <div className="shadow-lg p-4 rounded-md bg-gray-200">
          <p className="font-semibold">Example:</p>
          <p>
            a = str(15) <span className="text-green-600"> output: </span> a =
            '15'
          </p>
          <p>
            a = int(15) <span className="text-green-600"> output: </span> a = 15
          </p>
          <p>
            a = float(15) <span className="text-green-600">output:</span> a =
            15.0
          </p>
        </div>

        <h1>Get Type of Variables</h1>
        <p>
          You can get the data type of a variable with the{" "}
          <span className="text-red-600">type()</span> function.
        </p>
        <div className="shadow-lg p-4 rounded-md bg-gray-200">
          <p className="font-semibold">Example:</p>
          <p>x = 20</p>
          <p>y = "Riddhi"</p>
          <p>
            print(type(x)) <span className="text-green-600">output:</span>{" "}
            &lt;class 'int' &gt;
          </p>
          <p>
            print(type(y)) <span className="text-green-600">output:</span>{" "}
            &lt;class 'str' &gt;
          </p>
        </div>
      </div>
    ),
  },

  { key: "Datatype", data: {} },
  { key: "Type casting", data: {} },
  { key: "Operators", data: {} },
  { key: "String", data: {} },
  { key: "Arrays", data:  (<p>Helldkjfaksdjhfkasjdhfakjsdh</p>)},
];

export default PythonContents;
