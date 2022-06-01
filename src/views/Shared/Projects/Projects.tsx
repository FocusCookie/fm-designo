import React from "react";
import "./Projects.css";
import { ImageCard } from "../../../Components/ImageCard/ImageCard";
import useResize from "../../../hooks/useResize";
import { Link } from "react-router-dom";

import WebMobile from "../../../assets/home/mobile/image-web-design.jpg";
import AppMobile from "../../../assets/home/mobile/image-app-design.jpg";
import GraphicMobile from "../../../assets/home/mobile/image-graphic-design.jpg";
import WebTablet from "../../../assets/home/tablet/image-web-design.jpg";
import AppTablet from "../../../assets/home/tablet/image-app-design.jpg";
import GraphicTablet from "../../../assets/home/tablet/image-graphic-design.jpg";
import WebDesktop from "../../../assets/home/desktop/image-web-design-large.jpg";
import AppDesktop from "../../../assets/home/desktop/image-app-design.jpg";
import GraphicDesktop from "../../../assets/home/desktop/image-graphic-design.jpg";
import ArrowImage from "../../../assets/shared/desktop/icon-right-arrow.svg";

interface ProjectsProps {
  /**
   * displays the web design card
   */
  web?: boolean;
  /**
   * displays the web app card
   */
  app?: boolean;
  /**
   * displays the web graphic card
   */
  graphic?: boolean;
}

export const Projects = ({ web, app, graphic, ...props }: ProjectsProps) => {
  const windowSize = useResize();
  const BREAKPOINT_TABLET = 640;
  const BREAKPOINT_DESKTOP = 1024;
  const PROJECTS_DIMMER = 0.5;

  const WEB_BACK = {
    src: WebMobile,
    alt: "laptop",
    position: "center center",
  };
  const APP_BACK = {
    src: AppMobile,
    alt: "smartphone",
    position: "center center",
  };
  const GRAPHIC_BACK = {
    src: GraphicMobile,
    alt: "smartphone",
    position: "center center",
  };

  function responsiveBackground(
    width: number,
    mobile: string,
    tablet: string,
    desktop: string
  ): string {
    if (width >= BREAKPOINT_TABLET && width < BREAKPOINT_DESKTOP) {
      return tablet;
    }
    if (width >= BREAKPOINT_DESKTOP) return desktop;
    return mobile;
  }

  return (
    <section className="projects" {...props}>
      {web && (
        <ImageCard
          image={{
            ...WEB_BACK,
            src: responsiveBackground(
              windowSize.width,
              WebMobile,
              WebTablet,
              WebDesktop
            ),
          }}
          dimmlevel={PROJECTS_DIMMER}
          variant="dark"
          className="projects__web"
          cover
        >
          <div className="projects__content">
            <h1 className="projects__headline">web design</h1>
            <Link to={"/web-design"} className="project__link">
              view projects <img src={ArrowImage} alt="right arrow" />
            </Link>
          </div>
        </ImageCard>
      )}

      {app && (
        <ImageCard
          image={{
            ...APP_BACK,
            src: responsiveBackground(
              windowSize.width,
              AppMobile,
              AppTablet,
              AppDesktop
            ),
          }}
          dimmlevel={PROJECTS_DIMMER}
          variant="dark"
          cover
        >
          <div className="projects__content">
            <h1 className="projects__headline">app design</h1>
            <Link to={"/app-design"} className="project__link">
              view projects <img src={ArrowImage} alt="right arrow" />
            </Link>
          </div>
        </ImageCard>
      )}

      {graphic && (
        <ImageCard
          image={{
            ...GRAPHIC_BACK,
            src: responsiveBackground(
              windowSize.width,
              GraphicMobile,
              GraphicTablet,
              GraphicDesktop
            ),
          }}
          dimmlevel={PROJECTS_DIMMER}
          variant="dark"
          cover
        >
          <div className="projects__content">
            <h1 className="projects__headline">graphic design</h1>
            <Link to={"/graphic-design"} className="project__link">
              view projects <img src={ArrowImage} alt="right arrow" />
            </Link>
          </div>
        </ImageCard>
      )}
    </section>
  );
};
