export const javaContentData = [
  {
    key: "Intro",
    title: "What is Java",
    sections: [
      {
        type: "title",
        content: "What is Java",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "Java is a popular programming language, created in 1995 and it owned by Oracle.",
      },
      {
        type: "paragraph",
        content: "Some Features of Java:",
        bold: true,
      },
      {
        type: "list",
        items: [
          "Platform Independent",
          "It is secure, fast and powerful, open-source and free",
          "Object Oriented Prog. Language",
          "Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)",
          "It is easy to learn and simple to use",
          "Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs",
        ],
      },
      {
        type: "paragraph",
        content: "Some uses of Java:",
        bold: true,
      },
      {
        type: "list",
        items: [
          "Mobile Application/ Desktop Application",
          "Web Application",
          "Games",
          "Web servers and application servers",
        ],
      },
    ],
  },
  {
    key: "Syntax",
    title: "Java Syntax",
    sections: [
      {
        type: "title",
        content: "Java Syntax",
        level: 1,
      },
      {
        type: "paragraph",
        content:
          "First we create a file according to our requirement with .java extension, then write this syntax on your IDE and make sure to make class name (on ide) same as file name.",
      },
      {
        type: "codeblock",
        title: "Example:",
        code: `class Main{
    public static void main(String [] args){
        System.out.println("Hello World!")
    }
}`,
        language: "java",
      },
      {
        type: "title",
        content: "Example Explained",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Every line of code that runs in Java must be inside a class And the class name should always start with an uppercase first letter. In our example, we named the class Main.",
        highlights: [{ text: "class", color: "red-500" }],
      },
    ],
  },
  {
    key: "Variable",
    title: "Java Variables",
    sections: [
      {
        type: "title",
        content: "Java Variables",
        level: 1,
      },
      {
        type: "title",
        content: "What is variables in Java",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Variables are containers for storing data values. In Java, there are different types of variables, for example:",
      },
      {
        type: "list",
        items: [
          {
            text: 'String - stores text, such as "Hello". String values are surrounded by double quotes',
            highlight: { text: "String", color: "red-600" },
          },
          {
            text: "int - stores integers (whole numbers), without decimals, such as 123 or -123",
            highlight: { text: "int", color: "red-600" },
          },
          {
            text: "float - stores floating point numbers, with decimals, such as 19.99 or -19.99",
            highlight: { text: "float", color: "red-600" },
          },
        ],
      },
    ],
  },
];
