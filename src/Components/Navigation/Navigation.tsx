import React from "react";
import "./Navigation.css";
import { Button } from "../Button/Button";

interface NavigationProps {
  /**
   * navigation handler emitted by the buttons
   */
  onNavigate: (to: string) => void;
}

export const Navigation = ({ onNavigate, ...props }: NavigationProps) => {
  function handleNavigate(to: string) {
    onNavigate(to);
  }

  return (
    <div className="navigation" {...props}>
      <Button label="our company" onClick={() => handleNavigate("company")} />
      <Button label="locations" onClick={() => handleNavigate("locations")} />
      <Button label="contact" onClick={() => handleNavigate("contact")} />
    </div>
  );
};
