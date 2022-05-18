import React from "react";
import "./Location.css";
import { Button } from "../Button/Button";
import Canada from "../../assets/shared/desktop/illustration-canada.svg";
import Australia from "../../assets/shared/desktop/illustration-australia.svg";
import UK from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import Sphere from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

interface LocationProps {
  /**
   * label for the button and the location
   */
  country: "canada" | "australia" | "united kingdom";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Location = ({
  country = "canada",
  onClick,
  ...props
}: LocationProps) => {
  return (
    <div className="location" {...props}>
      <div
        className="location__illustration"
        style={{ backgroundImage: `url(${Sphere})` }}
      >
        {country === "canada" && <img src={Canada} alt="Canada" />}
        {country === "australia" && <img src={Australia} alt="Australia" />}
        {country === "united kingdom" && <img src={UK} alt="United Kingdom" />}
      </div>
      <span className="location__title">{country}</span>
      <Button label="see location" onClick={onClick} />
    </div>
  );
};
