import { Close } from "assets/icons";
import React from "react";

export default function Modal({ open, setOpen, children }) {
  return (
    <div
      className={`p-4 ${
        open ? "inline" : "hidden"
      } absolute  inset-y-1/3 border border-accentLight-400 shadow-lg rounded-md`}
    >
      {setOpen && (
        <p
          className="absolute top-0 right-0 cursor-pointer"
          onClick={() => {
            console.log("first");
            setOpen(false);
          }}
        >
          <Close size="24px" />
        </p>
      )}
      {children}
    </div>
  );
}
