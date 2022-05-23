import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Footer } from "./Footer";

const NAV_LINKS = [
  { label: "our company", route: "/company" },
  { label: "locations", route: "/locations" },
  { label: "contact", route: "/contact" },
];

export default {
  title: "Components/Footer",
  component: Footer,
  args: {
    links: NAV_LINKS,
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <MemoryRouter>
    <Footer {...args} />
  </MemoryRouter>
);

export const Story = Template.bind({});
Story.args = {};
