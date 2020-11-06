import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);
  return (
    <>
      {label &&
        <label
          style={{
            fontSize: 20,
            fontFamily: "Alata"
          }}
          htmlFor={fieldName}>{label}<br />
          {error &&
            <span
              style={{
                fontSize: 17,
                color: "#f00"
              }}>{error}
            </span>
          }
        </label>
      }

      <input
        style={{
          width: "100%",
          padding: "5px 10px",
          margin: "5px 0",
          background: "transparent",
          fontSize: "20px",
          border: "2px solid #000",
          fontFamily: "Roboto"
        }}
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />


    </>
  );
}
