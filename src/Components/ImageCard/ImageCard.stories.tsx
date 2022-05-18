import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { ImageCard } from "./ImageCard";
import imageFile from "../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";

const IMAGE = {
  src: imageFile,
  alt: "description text for the image",
  position: "left top",
};

export default {
  title: "Components/ImageCard",
  component: ImageCard,
  args: {
    image: IMAGE,
  },
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => (
  <ImageCard {...args}>
    <div className="flex flex-col items-center text-center">
      <h1>Web Design</h1>
      <p className="w-1/2">
        We build websites that serve as powerful marketing tools and bring
        memorable brand experiences.
      </p>
    </div>
  </ImageCard>
);

export const Default = Template.bind({});
Default.args = {};

export const SharpBorderRadius = Template.bind({});
SharpBorderRadius.args = {
  sharp: true,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
};

export const Light = Template.bind({});
Light.args = {
  variant: "light",
};

export const CustomImagePosition = Template.bind({});
CustomImagePosition.args = {
  image: { ...IMAGE, position: "right bottom" },
};

export const Dimmed = Template.bind({});
Dimmed.args = {
  dimmlevel: 0.5,
};
