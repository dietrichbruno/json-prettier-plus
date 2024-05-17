import React, { useState, useEffect } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import Clipboard from "clipboard";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "./App.css";
import "toastify-js/src/toastify.css";
import Icon from "./components/Icon/Icon";
import { Prettify } from "./components/Prettify";
import { Copy } from "./components/Copy";
import Sidebar from "./components/Sidebar";

require("codemirror/mode/javascript/javascript");

let instance;
const GITHUB_REPOSITORY =
  "https://github.com/augusto-jm-amaral/json-prettier-app";

function App(props) {
  const [text, setText] = useState("");

  useEffect(() => {
    const clipboard = new Clipboard(".btnCopy", {
      text: () => text,
    });
    return () => clipboard.destroy();
  }, [text]);

  return (
    <div className="wrapper">
      <Sidebar />
      <CodeMirror
        editorDidMount={(editor) => {
          instance = editor;
        }}
        onChange={(editor, data, value) => {
          setText(value);
        }}
        className="CodeMirror"
        options={{
          mode: { name: "javascript", json: true },
          theme: "dracula",
          lineNumbers: true,
          viewportMargin: Infinity,
        }}
      />
      <div className="button-container">
        <Copy />
        <Prettify text={text} instance={instance} />
      </div>
    </div>
  );
}

export default App;
