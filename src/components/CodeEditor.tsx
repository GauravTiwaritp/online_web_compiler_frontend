import { useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage, langs } from "@uiw/codemirror-extensions-langs";
loadLanguage("jsx");
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import "codemirror/theme/yonce.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  updateFullCode,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
const CodeEditor = () => {
  const currentCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.CurrentLanguage
  );
  console.log(currentLanguage);

  const dispatch = useDispatch();
  const onChange = useCallback(
    (val: string) => {
      console.log(`${currentLanguage} on change ke andar call hua`);
      dispatch(updateFullCode({ language: currentLanguage, code: val }));
    },
    [currentLanguage, dispatch]
  );

  switch (currentLanguage) {
    case "javascript":
      console.log(`${currentLanguage} switach ke andar call hua`);
      return (
        <CodeMirror
          value={currentCode.javascript}
          height="calc(100vh - 60px)"
          extensions={[langs.javascript()]}
          onChange={onChange}
          theme={vscodeDark}
        />
      );
    case "html":
      console.log(`${currentLanguage} switach ke andar call hua`);
      return (
        <CodeMirror
          value={currentCode.html}
          height="calc(100vh - 60px)"
          extensions={[langs.html()]}
          onChange={onChange}
          theme={vscodeDark}
        />
      );
    case "css":
      console.log(`${currentLanguage} switach ke andar call hua`);
      return (
        <CodeMirror
          value={currentCode.css}
          height="calc(100vh - 60px)"
          extensions={[langs.css()]}
          onChange={onChange}
          theme={vscodeDark}
        />
      );
  }
};
export default CodeEditor;
