import "./Home.css";
import { ImageCard } from "../../Components/ImageCard/ImageCard";
import { Button } from "../../Components/Button/Button";
import { Value } from "../../Components/Value/Value";
import useResize from "../../hooks/useResize";
import { Projects } from "../Shared/Projects/Projects";

import HeroBackground from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import HeroImage from "../../assets/home/desktop/image-hero-phone.png";

import Passionate from "../../assets/home/desktop/illustration-passionate.svg";
import Resourceful from "../../assets/home/desktop/illustration-resourceful.svg";
import Friendly from "../../assets/home/desktop/illustration-friendly.svg";

export const Home = () => {
  const windowSize = useResize();

  const BREAKPOINT_TABLET = 640;
  const BREAKPOINT_DESKTOP = 1024;

  const HERO_BACK = {
    src: HeroBackground,
    alt: "background circle",
    position: "left center",
  };

  const VALUE_PASSIONATE = {
    title: "passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    img: {
      src: Passionate,
      alt: "A Person sits in front of an tablet with a pencil in the hand.",
    },
  };
  const VALUE_RESOURCEFUL = {
    title: "RESOURCEFUL",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    img: {
      src: Resourceful,
      alt: "A Person sits in front of an tablet with a pencil in the hand.",
    },
  };
  const VALUE_FRIENDLY = {
    title: "friendly",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    img: {
      src: Friendly,
      alt: "Two person hold together a poster.",
    },
  };

  function heroPosition(width: number) {
    if (width >= BREAKPOINT_TABLET && width < BREAKPOINT_DESKTOP)
      return "205% 60%";
    if (width >= BREAKPOINT_DESKTOP) return "right top";

    return HERO_BACK.position;
  }

  return (
    <div className="home">
      <ImageCard
        image={{ ...HERO_BACK, position: heroPosition(windowSize.width) }}
        padding="0"
        sharp={windowSize.width < 640}
      >
        <div className="hero">
          <div className="hero__text">
            <h1 className="hero__text__headline">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="hero__text__para">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, apps, and engaging brand experiences.
              Find out more about our services.
            </p>
            <Button label="learn more" dark />
          </div>
          <div
            className="home__hero__phone"
            role="img"
            aria-label="Smartphone which displayes Frame above a vase and a closet."
            style={{
              backgroundImage: `url(${HeroImage})`,
            }}
          />
        </div>
      </ImageCard>

      <Projects web app graphic />

      <section className="home__values">
        <Value
          img={VALUE_PASSIONATE.img}
          rotation={-90}
          title={VALUE_PASSIONATE.title}
          description={VALUE_PASSIONATE.description}
        />

        <Value
          img={VALUE_RESOURCEFUL.img}
          rotation={180}
          title={VALUE_RESOURCEFUL.title}
          description={VALUE_RESOURCEFUL.description}
        />

        <Value
          img={VALUE_FRIENDLY.img}
          rotation={0}
          title={VALUE_FRIENDLY.title}
          description={VALUE_FRIENDLY.description}
        />
      </section>
    </div>
  );
};
