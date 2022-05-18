import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  args: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <h1 className="px-4">Title</h1>
    <p className="px-4">world this is a text</p>
  </Card>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomGap = Template.bind({});
CustomGap.args = {
  gap: "2rem",
};
