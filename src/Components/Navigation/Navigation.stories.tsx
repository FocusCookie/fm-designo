import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Navigation } from "./Navigation";

export default {
  title: "Components/Navigation",
  component: Navigation,
  args: {
    links: [
      { label: "first", route: "/first" },
      { label: "sec", route: "/sec" },
    ],
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <MemoryRouter>
    <Navigation {...args} />
  </MemoryRouter>
);

export const Story = Template.bind({});
Story.args = {};
