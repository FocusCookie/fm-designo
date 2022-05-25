import React from "react";
import "./Location.css";
import { Button } from "../Button/Button";
import { Illustration } from "../Illustration/Illustration";

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
  function countryIllustration(country: string): string {
    if (country === "canada") return Canada;
    if (country === "australia") return Australia;
    return UK;
  }
  function countryBackgroundRotation(country: string): number {
    if (country === "canada") return 0;
    if (country === "australia") return -90;
    return 180;
  }

  return (
    <div className="location" {...props}>
      <Illustration
        img={{ src: countryIllustration(country), alt: `${country}` }}
        rotation={countryBackgroundRotation(country)}
      />
      <span className="location__title">{country}</span>
      <Button label="see location" onClick={onClick} />
    </div>
  );
};
