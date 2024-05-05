import { useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage, langs } from "@uiw/codemirror-extensions-langs";
loadLanguage("jsx");
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import "codemirror/theme/yonce.css";
const CodeEditor = () => {
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      height="100vh"
      extensions={[langs.jsx()]}
      onChange={onChange}
      theme={vscodeDark}
    />
  );
};

export default CodeEditor;
