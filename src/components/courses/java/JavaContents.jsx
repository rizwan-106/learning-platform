// import React from "react";
// import { toast } from "react-toastify";

// const handleCopy = (code) => {
//   navigator.clipboard.writeText(code);
//   toast.success("Copied!");
// };
// const JavaContents = [
//   {
//     key: "Intro",
//     data: (
//       <div className="flex flex-col gap-3">
//         <h1 className="text-2xl font-semibold">What is Java</h1>
//         <p>
//           Java is a popular programming language, created in 1995 and it owned
//           by Oracle.
//         </p>
//         <p className=" font-semibold">Some Features of Java:</p>
//         <ul className="list-disc mx-4">
//           <li>Platfrom Independent</li>
//           <li>It is secure, fast and powerful, open-source and free</li>
//           <li>Oject Oriented Prog. Language</li>
//           <li>
//             Java works on different platforms (Windows, Mac, Linux, Raspberry
//             Pi, etc.)
//           </li>
//           <li>It is easy to learn and simple to use</li>
//           <li>
//             Java is an object oriented language which gives a clear structure to
//             programs and allows code to be reused, lowering development costs
//           </li>
//         </ul>
//         <p className=" font-semibold">Some uses of Java:</p>
//         <ul className="list-disc mx-4">
//           <li>Mobile Application/ Desktop Application</li>
//           <li>Web Application</li>
//           <li>Games</li>
//           <li>Web servers and application servers</li>
//         </ul>
//       </div>
//     ),
//   },

//   {
//     key: "Syntax",
//     data: (
//       <div className="flex flex-col gap-2">
//         <h1 className="text-2xl font-semibold">Java Syntax</h1>
//         <p>
//           First we create a file according to our requirement with .java
//           extension, then write this syntax on your IDE and make sure to make
//           class name (on ide) same as file name.
//         </p>
//         <p className="text-lg font-semibold">Example:</p>

//         {/* 🧠 Start of code block with copy */}
//         <div className="relative shadow-lg rounded-md p-4 bg-gray-300">
//           <button
//             onClick={() =>
//               handleCopy(`class Main{
//     public static void main(String [] args){
//         System.out.println("Hello World!")
//     }
// }`)
//             }
//             className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-1 rounded text-sm"
//           >
//             Copy
//           </button>

//           <pre className="overflow-auto whitespace-pre-wrap">
//             {`class Main{
//     public static void main(String [] args){
//         System.out.println("Hello World!")
//     }
// }`}
//           </pre>
//         </div>
//         {/* 🧠 End of code block with copy */}

//         <h1 className="text-xl font-semibold">Example Explained</h1>
//         <p>
//           Every line of code that runs in Java must be inside a{" "}
//           <span className="text-red-500">class</span> And the class name should
//           always start with an uppercase first letter. In our example, we named
//           the class Main.
//         </p>
//         <p>
//           <span className=" font-bold">Note</span>: Java is case-sensitive:
//           "MyClass" and "myclass" has different meaning.
//         </p>
//         <p>
//           The name of the java file must match the class name. When saving the
//           file, save it using the class name and add ".java" to the end of the
//           filename. To run the example above on your computer, make sure that
//           Java is properly installed: Go to the Get Started Chapter for how to
//           install Java.
//         </p>
//       </div>
//     ),
//   },

//   { key: "Keyword", data: "Hello" },

//   {
//     key: "Variable",
//     data: (
//       <div className="flex flex-col gap-3">
//         <h1 className="text-2xl font-semibold">Java Variables</h1>
//         <h2 className="font-semibold text-lg">What is variables in Java</h2>
//         <p className="text-lg">
//           Variables are containers for storing data values. In Java, there are
//           different types of variables, for example:
//         </p>
//         <ul className="list-disc mx-4">
//           <li>
//             <span className="text-red-600">String</span>- stores text, such as
//             "Hello". String values are surrounded by double quotes
//           </li>
//           <li>
//             <span className="text-red-600">int</span>- stores integers (whole
//             numbers), without decimals, such as 123 or -123
//           </li>
//           <li>
//             <span className="text-red-600">float</span>- stores floating point
//             numbers, with decimals, such as 19.99 or -19.99
//           </li>
//           <li>
//             <span className="text-red-600">char</span>- stores single
//             characters, such as 'a' or 'B'. Char values are surrounded by single
//             quotes
//           </li>
//           <li>
//             <span className="text-red-600">boolean</span>- stores values with
//             two states: true or false
//           </li>
//         </ul>

//         <hr />
//         <div className="text-lg flex flex-col gap-2">
//           <h2 className="text-xl">Variable Declaration and Initialization</h2>
//           <p>
//             Providing datatype to a variable is called
//             <span className="font-semibold"> Declaration</span>
//           </p>
//           <p className="font-semibold">Example:</p>
//           <div className="shadow-lg p-4 rounded-md bg-gray-200">
//             <p>int age;</p>
//             <p>
//               int is <span className="text-blue-600">datatype</span> and age is
//               variable
//             </p>
//           </div>
//           <p>
//             Providing value to a variable is called{" "}
//             <span className="font-semibold">Initialization</span>
//           </p>
//           <p className="font-semibold">Example:</p>
//           <div className="shadow-lg p-4 rounded-md bg-gray-200">
//             <p>age=23;</p>
//             <p>age is variable and 23 is a value which assign to age</p>
//           </div>
//           <p>
//             We can <span className="font-semibold">Declare</span> and
//             <span className="font-semibold"> Initialize</span> a variable at a
//             time
//           </p>
//           <p className="font-semibold">Example:</p>
//           <div className="shadow-lg p-4 rounded-md bg-gray-200">
//             <p>String name="Neha";</p>
//             <p>
//               String is datatype, name is variable and Neha is a value which
//               assign to age
//             </p>
//           </div>
//         </div>
//       </div>
//     ),
//   },

//   {
//     key: "Comment",
//     data: (
//       <div className="flex flex-col gap-4">
//         <h1 className="text-2xl font-semibold">Comments in Java</h1>
//         <p>
//           Comments can be used to explain Java code, and to make it more
//           readable. It can also be used to prevent execution when testing
//           alternative code. In Java, comments are very similar to C and C++.
//         </p>
//         <p>In Java, there are three types of comments:</p>
//         <ul className="font-mono list-disc ml-4" typeof="">
//           <li>Single Line Comment</li>
//           <li>Multi Line Comment</li>
//           <li>Documentation Comment</li>
//         </ul>
//         <hr />
//         <h2 className="text-xl font-semibold">Single Line Comments</h2>
//         <div className="text-lg flex flex-col gap-2">
//           <p>Single-line comments start with two forward slashes (//). </p>
//           <p>
//             Any text between // and the end of the line is ignored by Java (will
//             not be executed).
//           </p>
//           <p>This example uses a single-line comment before a line of code:</p>
//           <div className="shadow-lg p-4 rounded-md bg-gray-200">
//             <h5 className="font-semibold text-xl">Example 1:</h5>
//             <p>// This is a comment -&gt; compiler will not read it</p>
//             <p>
//               <span className="text-red-600">System</span>.out.
//               <span className="text-red-600">println</span>("Hello World");
//             </p>
//             <h5 className="font-semibold text-xl">Example 2:</h5>
//             <p>
//               <span className="text-red-600">System</span>.out.
//               <span className="text-red-600">println</span>("Hello World");
//               //This is a comment
//             </p>
//           </div>
//         </div>
//         <h2 className="text-xl font-semibold">Multi Line Comments</h2>
//         <div className="text-lg flex flex-col gap-2">
//           <p>Multi-line comments start with /* and ends with */.</p>
//           <p>Any text between /* and */ will be ignored by Java.</p>
//           <p>
//             This example uses a multi-line comment (a comment block) to explain
//             the code:
//           </p>
//           <h5 className="font-semibold text-xl">Example:</h5>
//           <div className="relative shadow-lg p-4 rounded-md bg-gray-300">
//             <button
//               onClick={() =>
//                 handleCopy(
//                   <p>
//                     <span className="text-red-600">System</span>.out.
//                     <span className="text-red-600">println</span>("Hello
//                     World");
//                   </p>
//                 )
//               }
//               className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-1 rounded text-sm"
//             >
//               Copy
//             </button>
//             <p>
//               /* The code below will print the words Hello World to the screen,
//               and it is amazing */
//             </p>
//             <p>
//               <span className="text-red-600">System</span>.out.
//               <span className="text-red-600">println</span>("Hello World");
//             </p>
//           </div>
//         </div>

//         <div>
//           <h1 className="text-lg font-semibold">Short Cut</h1>
//           <p>
//             Select the content (Line of code) that you want to comment then
//             press ctrl+forward slash (/)
//           </p>
//           <p>ctrl+/</p>
//         </div>
//       </div>
//     ),
//   },

//   { key: "Datatype", data: {} },

//   { key: "Type casting", data: {} },

//   { key: "Operators", data: {} },

//   { key: "String", data: {} },
// ];

// export default JavaContents;

import { javaContentData } from "./javaData";
import ContentRenderer from "../../common/ContentRenderer";

const JavaContents = javaContentData.map((topic) => ({
  key: topic.key,
  data: <ContentRenderer sections={topic.sections} />,
}));

export default JavaContents;
