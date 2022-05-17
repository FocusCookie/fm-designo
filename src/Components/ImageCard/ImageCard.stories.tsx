import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { ImageCard } from "./ImageCard";

export default {
  title: "Components/ImageCard",
  component: ImageCard,
  args: {},
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => (
  <ImageCard {...args}>
    <h1>Storybook children</h1>
  </ImageCard>
);

export const Story = Template.bind({});
Story.args = {};
