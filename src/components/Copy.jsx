import React from "react";
import Toastify from "toastify-js";
import "../App.css";

export const Copy = (props) => {
  return (
    <a
    href
    className="btn btnCopy"
    onClick={() => {
      Toastify({
        text: "Copied",
        duration: 3000,
        newWindow: true,
        gravity: "top",
        position: "right",
        backgroundColor:
          "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))",
        stopOnFocus: true,
      }).showToast();
    }}
  >
    <span>Copy</span>
  </a>
  )
}