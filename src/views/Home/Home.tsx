import "./Home.css";
import { ImageCard } from "../../Components/ImageCard/ImageCard";
import { Button } from "../../Components/Button/Button";
import HeroBackground from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import HeroImage from "../../assets/home/desktop/image-hero-phone.png";
import useResize from "../../hooks/useResize";

export const Home = () => {
  const windowSize = useResize();

  const HERO_BACK = {
    src: HeroBackground,
    alt: "background circle",
    position: "left center",
  };

  function heroPosition(width: number) {
    if (width >= 640 && width < 1024) return "205% 60%";
    if (width >= 1024) return "right top";

    return HERO_BACK.position;
  }

  return (
    <div className="home">
      <ImageCard
        image={{ ...HERO_BACK, position: heroPosition(windowSize.width) }}
        padding="0"
        sharp={windowSize.width < 640}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="text-center flex flex-col items-center lg:items-start lg:text-left lg:justify-center pt-20 px-6 pb-0 lg:pl-24 lg:pr-0 ">
            <h1 className="text-footer font-medium mb-[0.875rem] sm:w-[33.5625rem] sm:text-5xl">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="text-button mb-6 sm:w-[27.8125rem] sm:text-base">
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
    </div>
  );
};
