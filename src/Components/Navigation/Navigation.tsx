import React, { useState } from "react";
import "./Navigation.css";
import Logo from "../../assets/shared/desktop/logo-dark.png";
import Hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import Close from "../../assets/shared/mobile/icon-close.svg";
import { Link } from "react-router-dom";

interface NavigationLink {
  /**
   * label for the link element
   */
  label: string;
  /**
   * route for the subroute
   */
  route: string;
}

interface NavigationProps {
  /**
   * links to render
   */
  links: Array<NavigationLink>;
}

export const Navigation = ({ links, ...props }: NavigationProps) => {
  const [modal, setModal] = useState<boolean>(false);

  function handleModal() {
    setModal((current) => !current);
  }

  function menuIcon(isOpen: boolean) {
    return isOpen ? Close : Hamburger;
  }

  function renderLinks() {
    return (
      <>
        {links.map((link, index) => (
          <Link
            key={`nav-link-${link.label}-${index}`}
            to={link.route}
            className="navigation__link"
          >
            {link.label}
          </Link>
        ))}
      </>
    );
  }

  return (
    <div className="navigation" {...props}>
      <div className="navigation__bar">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="Designo Logo"
            width="202"
            className="navigation__logo"
          />
        </Link>
        <div>
          <div className="navigation__items">{renderLinks()}</div>
          <button className="navigation__items__toggle">
            <img
              width="20"
              src={menuIcon(modal)}
              alt="open menue"
              onClick={handleModal}
            />
          </button>
        </div>
      </div>
      <div
        className={[
          "navigation__modal",
          `navigation__modal--${modal ? "" : "close"}`,
        ].join(" ")}
      >
        {renderLinks()}
      </div>
    </div>
  );
};
