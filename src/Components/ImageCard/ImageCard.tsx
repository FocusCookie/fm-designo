import React from "react";
import "./ImageCard.css";

interface ImageCardProps {
  /**
   * defines the background color of the card
   */
  variant?: "primary" | "light" | "dark";
  /**
   * inner padding of the card default is 1rem
   */
  padding?: string;
  /**
   * image src
   */
  image?: any; //TODO: solve this issue with imported images...
  /**
   * add a color layer in front of the image with a dimmlevel opacity
   */
  dimmlevel?: number;
  /**
   * react children
   */
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const ImageCard = ({
  variant = "primary",
  padding = "1rem",
  dimmlevel = 1,
  image,
  children,
  ...props
}: ImageCardProps) => {
  const modeVariant = variant ? variant : "";

  return (
    <div
      className={["image-card", `image-card--${modeVariant}`].join(" ")}
      style={{ padding: padding === "" ? "1rem" : padding }}
      {...props}
    >
      <Image />
      {children}
    </div>
  );
};
