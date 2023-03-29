import React from "react";

import $ from "./Button.module.css";

interface PropsIf {
  children: React.ReactNode,
  onClick?: () => {},
  type?: "button" | "submit" | "reset"
  variant?: string
  disabled?: boolean
}

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary", // or 'secondary'
}: PropsIf) => {
  return (
    <button
      className={`${$.button} ${variant === 'secondary' ? $.secondary : $.primary}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
