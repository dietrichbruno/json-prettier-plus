import React from "react";
import { format } from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import Toastify from "toastify-js";
import "../App.css";

export const Prettify = (props) => {
  return (<a
    href
    className="btn"
    onClick={() => {
      try {
        const newText = format(props.text, {
          parser: "json",
          printWidth: 0,
          trailingComma: "all",
          plugins: [parserBabel],
        });

        props.instance.setValue(newText);
      } catch (e) {
        console.error(e);

        Toastify({
          text: "Invalid JSON",
          duration: 3000,
          newWindow: true,
          gravity: "top",
          position: "right",
          backgroundColor:
            "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))",
          stopOnFocus: true,
        }).showToast();
      }
    }}
  >
    <span>Prettify</span>
  </a>)
}