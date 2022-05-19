import React from "react";
import "./Link.css";

interface LinkProps {
  /**
   * changes the font color of the link
   */
  color?: "primary" | "dark" | "light" | "white";
  /**
   * defines in which order the child will be disyplayed vertical
   */
  className?: string;
  /**
   * handler argument
   */
  clickArg?: string | null;
  /**
   *  label of the link
   */
  label: string;
  /**
   *  click handler
   */
  onClick: (arg: string | null | undefined) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Link = ({
  color = "white",
  onClick,
  label,
  className,
  clickArg,
  ...props
}: LinkProps) => {
  function handleClick() {
    onClick(clickArg);
  }

  return (
    <span
      className={["link", className, `link--${color}`].join(" ")}
      {...props}
      onClick={handleClick}
    >
      {label}
    </span>
  );
};
