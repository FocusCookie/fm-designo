import "./Web.css";
import { ImageCard } from "../../Components/ImageCard/ImageCard";
import { Card } from "../../Components/Card/Card";
import { Projects } from "../Shared/Projects/Projects";

import useResize from "../../hooks/useResize";

import HeroBackground from "../../assets/web-design/desktop/bg-pattern-intro-web.svg";
import ExpressImg from "../../assets/web-design/desktop/image-express.jpg";
import BuilderImg from "../../assets/web-design/desktop/image-builder.jpg";
import CampImg from "../../assets/web-design/desktop/image-camp.jpg";
import PhotonImg from "../../assets/web-design/desktop/image-photon.jpg";
import TransferImg from "../../assets/web-design/desktop/image-transfer.jpg";
import BlogrImg from "../../assets/web-design/desktop/image-blogr.jpg";

type WebReference = {
  title: string;
  image: string;
  description: string;
};

export const Web = () => {
  const windowSize = useResize();

  const BREAKPOINT_TABLET = 640;
  const BREAKPOINT_DESKTOP = 1024;

  const HERO_BACK = {
    src: HeroBackground,
    alt: "background circle",
    position: "left center",
  };

  const refs: WebReference[] = [
    {
      image: ExpressImg,
      title: "express",
      description: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      image: TransferImg,
      title: "transfer",
      description:
        "Site for low-cost money transfers and sending money within secondst",
    },
    {
      image: PhotonImg,
      title: "Photon",
      description:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      image: BuilderImg,
      title: "builder",
      description:
        "Connects users with local contractors based on their location",
    },
    {
      image: BlogrImg,
      title: "blogr",
      description:
        "Blogr is a platform for creating an online blog or publication",
    },
    {
      image: CampImg,
      title: "camp",
      description:
        "Get expert training in coding, data, design, and digital marketing",
    },
  ];

  function renderReferences(refs: WebReference[]): any {
    return (
      <>
        {refs.map((ref, index) => (
          <Card
            key={`reference-${index}`}
            oriontation={
              windowSize.width > BREAKPOINT_TABLET &&
              windowSize.width < BREAKPOINT_DESKTOP
                ? "row"
                : "column"
            }
            gap="0"
          >
            <img
              src={ref.image}
              alt="Express Landing Page"
              className="web__reference__img"
            />
            <div className="web__references__desc">
              <h1 className="web__references__title">{ref.title}</h1>
              <p className="web__references__text">{ref.description}</p>
            </div>
          </Card>
        ))}
      </>
    );
  }

  return (
    <div className="web">
      <ImageCard
        image={{
          ...HERO_BACK,
          position:
            windowSize.width < BREAKPOINT_TABLET ? "right top" : "left center",
        }}
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
      <section className="web__references">{renderReferences(refs)}</section>
      <Projects app graphic />
    </div>
  );
};
