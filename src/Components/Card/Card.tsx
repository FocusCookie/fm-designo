import React from "react";
import "./Card.css";

interface CardProps {
  /**
   * defines in which order the child will be disyplayed vertical
   */
  oriontation?: "column" | "row";
  /**
   * defines in which order the child will be disyplayed vertical
   */
  variant?: "primary" | "light";
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
  variant = "primary",
  children,
  ...props
}: CardProps) => {
  const modeSharp = sharp ? "image-card--sharp" : "";

  return (
    <div
      className={["card", modeSharp, `card--${variant}`].join(" ")}
      style={{ gap: gap, flexDirection: oriontation }}
      {...props}
    >
      {children}
    </div>
  );
};
