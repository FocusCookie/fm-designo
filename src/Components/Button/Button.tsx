import React from "react";
import "./Button.css";

interface ButtonProps {
  /**
   * is the button displayed on a dark background
   */
  dark?: boolean;
  /**
   * button should spant over the whole width of the parent
   */
  block?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  dark = false,
  block = false,
  label = "Button",
  ...props
}: ButtonProps) => {
  const blockMode = block ? "button--block" : "";
  const darkMode = dark ? "button--dark" : "";
  return (
    <button
      type="button"
      className={["button", `${blockMode}`, `${darkMode}`].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
