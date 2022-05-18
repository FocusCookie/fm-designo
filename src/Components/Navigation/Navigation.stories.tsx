import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Navigation } from "./Navigation";

export default {
  title: "Components/Navigation",
  component: Navigation,
  args: {},
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Story = Template.bind({});
Story.args = {};
