import React from "react";
import "./ImageCard.css";

const DIMM_MAX = 1;
const DIMM_MIN = 0;

interface Image {
  /**
   * image src
   */
  src: string;
  /**
   * alt description for the image
   */
  alt: string;
  /**
   * background position for the image
   */
  position: string;
}

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
   * additional classes
   */
  className?: string;
  /**
   * image - src, alt, position
   */
  image: Image;
  /**
   * add a color layer in front of the image with a dimmlevel opacity
   */
  dimmlevel?: number;
  /**
   * react children
   */
  children: React.ReactNode;
  /**
   *  no rounded corners
   */
  sharp?: boolean;
  /**
   *  image should be used as cover
   */
  cover?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const ImageCard = ({
  variant = "primary",
  padding = "1rem",
  dimmlevel = 0,
  image,
  sharp = false,
  cover = false,
  className = "",
  children,
  ...props
}: ImageCardProps) => {
  const modeVariant = variant ? variant : "primary";
  const modeSharp = sharp ? "image-card--sharp" : "";

  function secureDimmlevel(dimmlevel: number) {
    if (dimmlevel === undefined) return 0;
    if (dimmlevel < DIMM_MIN) return 0;
    if (dimmlevel > DIMM_MAX) return 1;
    return dimmlevel;
  }

  return (
    <div
      className={[
        "image-card",
        `image-card--${modeVariant}`,
        modeSharp,
        className,
      ].join(" ")}
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundPosition: image.position || "left center",
        backgroundSize: cover ? "cover" : "initial",
      }}
      role="img"
      aria-label={image.alt}
      {...props}
    >
      <div
        className={[
          "image-card__dimmer",
          `image-card__dimmer--${modeVariant}`,
        ].join(" ")}
        style={{ opacity: `${secureDimmlevel(dimmlevel)}` }}
      ></div>
      <div
        className="image-card__content"
        style={{
          padding: padding === "" ? "1rem" : padding,
        }}
      >
        {children}
      </div>
    </div>
  );
};
