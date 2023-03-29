import React from "react";

import $ from "./InputText.module.css";

const InputText = ({ name, onChange, placeholder, value, error }) => {
  return (
    <input
      className={`${$.inputText} ${error && $.error}`}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
};

export default InputText;
