import React from "react";
import "./Value.css";

import { Illustration } from "../Illustration/Illustration";

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

interface ValueProps {
  /**
   * defines in which order the child will be disyplayed vertical
   */
  orientation?: "column" | "row";
  /**
   *  illustration image
   */
  img: Image;
  /**
   * roation of the circled background shape behind the illustration
   */
  rotation?: number;
  /**
   * title of the value
   */
  title: string;
  /**
   * description of the value
   */
  description: string;
}

export const Value = ({
  orientation = "column",
  img,
  title,
  description,
  rotation = 0,
  ...props
}: ValueProps) => {
  return (
    <div className={["value", `value--${orientation}`].join(" ")} {...props}>
      <Illustration img={img} rotation={rotation} />
      <div className="value__text">
        <h1 className="value__title">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
