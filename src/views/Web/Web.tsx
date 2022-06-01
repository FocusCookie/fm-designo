import "./Web.css";
import { ImageCard } from "../../Components/ImageCard/ImageCard";
import { Card } from "../../Components/Card/Card";

import useResize from "../../hooks/useResize";

import HeroBackground from "../../assets/web-design/desktop/bg-pattern-intro-web.svg";
import ExpressImg from "../../assets/web-design/desktop/image-express.jpg";

export const Web = () => {
  const windowSize = useResize();

  const BREAKPOINT_TABLET = 640;
  const BREAKPOINT_DESKTOP = 1024;

  const HERO_BACK = {
    src: HeroBackground,
    alt: "background circle",
    position: "left center",
  };

  return (
    <div className="web">
      <ImageCard
        image={{ ...HERO_BACK, position: "right top" }}
        padding="0"
        sharp={windowSize.width < BREAKPOINT_TABLET}
      >
        <div className="web__hero">
          <h1 className="web__hero_headline">Web Design</h1>
          <p className="web__hero_para">
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </div>
      </ImageCard>
      <section className="web__references">
        <Card variant="light">
          {/*  // TODO die card in eine function tun und ein array mit den
          verschiedenen referenzen mappen */}
          <img src={ExpressImg} alt="Express Landing Page" />
          <div className="web__references__desc">
            <h1 className="web__references__title">Express</h1>
            <p className="web__references__text">
              A multi-carrier shipping website for ecommerce businesses
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
};
