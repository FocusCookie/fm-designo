import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Illustration from "../../assets/home/desktop/illustration-friendly.svg";

import { Value } from "./Value";

const IMAGE = {
  src: Illustration,
  alt: "Alt text",
};

export default {
  title: "Components/Value",
  component: Value,
  args: {
    img: IMAGE,
    title: "title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corrupti nobis, voluptatum excepturi aut facere. Ducimus amet necessitatibus harum eligendi dolorem animi distinctio provident voluptatum ipsum. Placeat perferendis ab est!",
  },
} as ComponentMeta<typeof Value>;

const Template: ComponentStory<typeof Value> = (args) => <Value {...args} />;

export const Story = Template.bind({});
Story.args = {};
