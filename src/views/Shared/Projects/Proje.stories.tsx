import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Projects } from "./Projects";

export default {
  title: "Views/Projects",
  component: Projects,
  args: {
    web: true,
    app: true,
    graphic: true,
  },
} as ComponentMeta<typeof Projects>;

const Template: ComponentStory<typeof Projects> = (args) => (
  <MemoryRouter>
    <Projects {...args} />{" "}
  </MemoryRouter>
);

export const Story = Template.bind({});
Story.args = {};
