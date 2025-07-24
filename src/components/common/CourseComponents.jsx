import React from "react";
import { toast } from "react-toastify";

const handleCopy = (code) => {
  navigator.clipboard.writeText(code);
  toast.success("Copied!");
};

// Reusable Components
export const CourseTitle = ({ children, level = 1 }) => {
  // console.log(children);
  
  const HeadingTag = `h${level}`;
  const sizeClasses = {
    1: "text-2xl",
    2: "text-xl",
    3: "text-lg",
  };

  return (
    <HeadingTag className={`${sizeClasses[level]} font-semibold mb-3`}>
      {children}
    </HeadingTag>
  );
};

export const Paragraph = ({ children, bold = false }) => (
  <p className={`mb-3 ${bold ? "font-semibold" : ""}`}>{children}</p>
);

export const List = ({ items, ordered = false }) => {
  const ListTag = ordered ? "ol" : "ul";
  return (
    <ListTag className="list-disc mx-4 mb-3">
      {items.map((item, index) => (
        <li key={index} className="mb-1">
          {typeof item === "string" ? item : item}
        </li>
      ))}
    </ListTag>
  );
};

export const CodeBlock = ({ code, title, language = "java" }) => (
  <div className="mb-4">
    {title && <p className="text-lg font-semibold mb-2">{title}</p>}
    <div className="relative shadow-lg rounded-md p-4 bg-gray-300">
      <button
        onClick={() => handleCopy(code)}
        className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-1 rounded text-sm"
      >
        Copy
      </button>
      <pre className="overflow-auto whitespace-pre-wrap">{code}</pre>
    </div>
  </div>
);

export const Highlight = ({ children, color = "red-500" }) => (
  <span className={`text-${color}`}>{children}</span>
);

export const Container = ({ children }) => (
  <div className="flex flex-col gap-3">{children}</div>
);
