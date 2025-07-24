import React from "react";
import {
  CourseTitle,
  Paragraph,
  List,
  CodeBlock,
  Highlight,
  Container,
} from "./CourseComponents";

const ContentRenderer = ({ sections }) => {
  const renderSection = (section, index) => {
    switch (section.type) {
      case "title":
        return (
          <CourseTitle key={index} level={section.level || 1}>
            {section.content}
          </CourseTitle>
        );

      case "paragraph":
        return (
          <Paragraph key={index} bold={section.bold}>
            {section.highlights
              ? renderWithHighlights(section.content, section.highlights)
              : section.content}
          </Paragraph>
        );

      case "list":
        return (
          <List key={index} items={section.items} ordered={section.ordered} />
        );

      case "codeblock":
        return (
          <CodeBlock
            key={index}
            code={section.code}
            title={section.title}
            language={section.language}
          />
        );

      default:
        return null;
    }
  };

  const renderWithHighlights = (content, highlights) => {
    let result = content;
    highlights.forEach((highlight) => {
      result = result.replace(
        highlight.text,
        `<span class="text-${highlight.color}">${highlight.text}</span>`
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <Container>
      {sections.map((section, index) => renderSection(section, index))}
    </Container>
  );
};

export default ContentRenderer;
