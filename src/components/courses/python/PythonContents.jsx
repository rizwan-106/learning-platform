import React from "react";
import { pythonData } from "./pythonData";
import ContentRenderer from "../../common/ContentRenderer";

const PythonContents = pythonData.map((topic) => ({
  key: topic.key,
  data: <ContentRenderer sections={topic.sections} />,
}));

export default PythonContents;
