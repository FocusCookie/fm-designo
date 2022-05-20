import React, { useEffect, useState } from "react";
import "./Navigation.css";
import Logo from "../../assets/shared/desktop/logo-dark.png";
import Hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import Close from "../../assets/shared/mobile/icon-close.svg";
// import { Link } from "../Link/Link";

import { Link } from "react-router-dom";

const BREAKPOINT_SM = 640;

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
   * the children are placed on the right side of the nav
   */
  children: React.ReactNode;
  /**
   * links to render
   */
  links: Array<NavigationLink>;
}

export const Navigation = ({ children, links, ...props }: NavigationProps) => {
  const [width, setWidth] = useState<React.SetStateAction<number>>(0);
  const [modal, setModal] = useState<boolean>(false);

  const ref = React.useRef<HTMLDivElement>(null);

  function updateWidthAfterResize() {
    setWidth(ref.current?.offsetWidth || 0);
  }

  useEffect(() => {
    if (ref) {
      setWidth(ref.current?.offsetWidth || 0);
      window.addEventListener("resize", () => updateWidthAfterResize());
    }

    return () => {
      window.removeEventListener("resize", () => updateWidthAfterResize());
    };
  }, []);

  useEffect(() => {
    if (width && width >= BREAKPOINT_SM) setModal(false);
  }, [width]);

  function handleModal() {
    setModal((current) => !current);
  }

  function responsiveLinkSize(width: React.SetStateAction<number>) {
    return width >= BREAKPOINT_SM ? "default" : "large";
  }

  function responsiveLinkColor(width: React.SetStateAction<number>) {
    return width >= BREAKPOINT_SM ? "dark" : "white";
  }

  function menuIcon(isOpen: boolean) {
    return isOpen ? Close : Hamburger;
  }

  function renderLinks() {
    return (
      <>
        {links.map((link, index) => (
          <Link key={`nav-link-${link.label}-${index}`} to={link.route}>
            {link.label}
          </Link>
          /*  <Link
            key={`nav-link-${link.label}-${index}`}
            label={link.label}
            color={responsiveLinkColor(width)}
            size={responsiveLinkSize(width)}
            onClick={() => console.log(link.route)}
          /> */
        ))}
      </>
    );
  }

  return (
    <div className="navigation" {...props} ref={ref}>
      <div className="navigation__bar">
        <img
          src={Logo}
          alt="Designo Logo"
          width="202"
          className="navigation__logo"
        />
        <div className="navigation__items">
          {width && width >= BREAKPOINT_SM && renderLinks()}
          {width && width < BREAKPOINT_SM && (
            <>
              <button>
                <img
                  width="20"
                  src={menuIcon(modal)}
                  alt="open menue"
                  onClick={handleModal}
                />
              </button>
            </>
          )}
        </div>
      </div>
      {modal && <div className="navigation__modal">{renderLinks()}</div>}
    </div>
  );
};
