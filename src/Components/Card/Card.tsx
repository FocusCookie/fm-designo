import React from "react";
import "./Card.css";

interface CardProps {
  /**
   * defines in which order the child will be disyplayed vertical
   */
  oriontation?: "column" | "row";
  /**
   * react children
   */
  children: React.ReactNode;
  /**
   *  no rounded corners
   */
  sharp?: boolean;
  /**
   *  gap between the childrens - CSS measurements
   */
  gap?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  oriontation = "column",
  sharp = false,
  gap = "1rem",
  children,
  ...props
}: CardProps) => {
  const modeSharp = sharp ? "image-card--sharp" : "";

  return (
    <div
      className={["card", modeSharp, `card--${oriontation}`].join(" ")}
      style={{ gap: gap }}
      {...props}
    >
      {children}
    </div>
  );
};
