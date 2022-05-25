import React, { useState, useEffect } from "react";
import "./Footer.css";
import { ImageCard } from "../ImageCard/ImageCard";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo-light.png";
import { Link } from "react-router-dom";
import TalkImg from "../../assets/shared/desktop/bg-pattern-call-to-action.svg";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Insta from "../../assets/shared/desktop/icon-instagram.svg";
import Pinterest from "../../assets/shared/desktop/icon-pinterest.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import YT from "../../assets/shared/desktop/icon-youtube.svg";

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

interface FooterProps {
  /**
   * links to render
   */
  links: Array<NavigationLink>;
}

export const Footer = ({ links, ...props }: FooterProps) => {
  const navigate = useNavigate();
  const [talkImage, setTalkImage] = useState({
    src: TalkImg,
    alt: "Circle shapes",
    position: "40% center",
  });

  useEffect(() => {
    const handleResize = () => {
      const width: number = window.innerWidth;
      setTalkImage((current) => {
        return {
          ...current,
          position: imgPosition(width),
        };
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function imgPosition(width: number) {
    if (width >= 640 && width < 1024) return "6% center";
    if (width >= 1024) return "right center";
    return "40% center";
  }

  function handleCTA() {
    navigate("/contact");
  }

  function renderLinks() {
    return (
      <>
        {links.map((link, index) => (
          <Link
            key={`footer__nav__item-${link.label}-${index}`}
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
    <div className="footer" {...props}>
      <div className="footer__talk">
        <ImageCard image={talkImage} dimmlevel={0} padding={"none"}>
          <div className="footer__talk__imgCard__wrapper">
            <div className="footer__talk__text__wrapper">
              <h1 className="footer__talk__text_headline">
                Let’s talk about your project
              </h1>
              <p className="footer__talk__text_para">
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>

            <Button dark label="get in touch" onClick={handleCTA} />
          </div>
        </ImageCard>
      </div>
      <div className="footer__content">
        <div className="footer__content__img-nav">
          <img src={Logo} alt="Designo Logo" className="footer__logo" />
          <div className="footer__nav">{renderLinks()}</div>
        </div>
        <div className="footer__notes">
          <div className="footer__contacts">
            <div className="footer__address">
              <span>Designo Central Office</span>
              <p>3886 Wellington Street</p>
              <p>Toronto Ontario M9C 3J5</p>
            </div>
            <div className="footer__contact">
              <span>Contact Us (Central Office)</span>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
          <div className="footer__social">
            <a target="_blank" href="https://facebook.com" rel="noreferrer">
              <img src={Facebook} alt="facebook logo" />
            </a>

            <a target="_blank" href="https://facebook.com" rel="noreferrer">
              <img src={YT} alt="Youtube logo" />
            </a>
            <a target="_blank" href="https://facebook.com" rel="noreferrer">
              <img src={Twitter} alt="Twitter logo" />
            </a>
            <a target="_blank" href="https://facebook.com" rel="noreferrer">
              <img src={Pinterest} alt="Pinterest logo" />
            </a>
            <a target="_blank" href="https://facebook.com" rel="noreferrer">
              <img src={Insta} alt="Instagram logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
