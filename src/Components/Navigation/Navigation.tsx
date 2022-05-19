import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { Link } from "../Link/Link";
import Logo from "../../assets/shared/desktop/logo-dark.png";

interface NavigationProps {
  /**
   * navigation handler emitted by the buttons
   */
  onNavigate: (to: string | null | undefined) => void;
}

export const Navigation = ({ onNavigate, ...props }: NavigationProps) => {
  function handleNavigate(to: string | undefined) {
    onNavigate(to);
  }
  const [width, setWidth] = useState<number | undefined>(0);

  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref) {
      window.addEventListener("resize", () => {
        setWidth(ref.current?.offsetWidth);
      });
    }

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(ref.current?.offsetWidth);
      });
    };
  }, []);

  return (
    <div className="navigation" {...props} ref={ref}>
      <img src={Logo} alt="Designo Logo" width="202" />
      <div className="navigation__items">
        <Link
          label="our company"
          color="dark"
          onClick={() => handleNavigate("company")}
        />
        <Link
          label="locations"
          color="dark"
          onClick={() => handleNavigate("locations")}
        />
        <Link
          label="contact"
          color="dark"
          onClick={() => handleNavigate("contact")}
        />
      </div>
    </div>
  );
};
