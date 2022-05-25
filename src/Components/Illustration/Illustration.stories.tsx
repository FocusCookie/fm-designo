import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Illustration } from "./Illustration";
import Image from "../../assets/home/desktop/illustration-friendly.svg";

const IMAGE = {
  src: Image,
  alt: "Alt text",
};

export default {
  title: "Components/Illustration",
  component: Illustration,
  args: {
    img: IMAGE,
  },
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = (args) => (
  <Illustration {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const BackgroundShapeRotation = Template.bind({});
BackgroundShapeRotation.args = {
  rotation: 90,
};
