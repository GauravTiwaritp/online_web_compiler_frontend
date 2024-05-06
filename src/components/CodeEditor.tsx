import { useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage, langs } from "@uiw/codemirror-extensions-langs";
loadLanguage("jsx");
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import "codemirror/theme/yonce.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const CodeEditor = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.CurrentLanguage
  );
  const codeLanguage = `langs.${currentLanguage}` + `()`;
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      height="100vh"
      extensions={[loadLanguage(currentLanguage)]}
      onChange={onChange}
      theme={vscodeDark}
    />
  );
};

export default CodeEditor;
