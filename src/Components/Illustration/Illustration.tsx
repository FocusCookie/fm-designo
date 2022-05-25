import React from "react";
import "./Illustration.css";
import ShapeBG from "../../assets/home/desktop/bg-pattern-hero-home.svg";

interface Image {
  /**
   * image src
   */
  src: string;
  /**
   * alt description for the image
   */
  alt: string;
}

interface IllustrationProps {
  /**
   *  illustration image
   */
  img: Image;
  /**
   * roation of the circle shape behind the illustration
   */
  rotation?: number;
}

export const Illustration = ({
  img,
  rotation = 0,
  ...props
}: IllustrationProps) => {
  return (
    <div className="illustration" {...props}>
      <img
        style={{ transform: `rotate(${rotation}deg)` }}
        src={ShapeBG}
        alt="Circled background shape"
      />
      <img src={img.src} alt={img.alt} className="illustration__image" />
    </div>
  );
};
