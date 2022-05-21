import React from "react";
import "./Footer.css";
import { ImageCard } from "../ImageCard/ImageCard";
import { Button } from "../Button/Button";
import TalkImg from "../../assets/shared/desktop/bg-pattern-call-to-action.svg";

interface FooterProps {}

const TALK_IMAGE = {
  src: TalkImg,
  alt: "Circle shapes",
  position: "40% center",
};

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <div className="footer" {...props}>
      <div className="footer__talk">
        <ImageCard image={TALK_IMAGE} dimmlevel={0}>
          <div className="flex flex-col items-center text-center px-6 py-12 gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <h1 className="text-footer font-medium">
                Let’s talk about your project
              </h1>
              <p>
                {" "}
                //todo: an p klasse für sm:w-2/3 das gleiche filt für die
                headline nur das dort 1/3 Ready to take it to the next level?
                Contact us today and find out how our expertise can help your
                business grow.
              </p>
            </div>

            <Button dark label="get in touch" />
          </div>
        </ImageCard>
      </div>
      <div className="footer__void"></div>
      <div className="footer__content">content</div>
    </div>
  );
};
