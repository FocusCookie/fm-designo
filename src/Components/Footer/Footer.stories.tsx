import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Footer } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  args: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Story = Template.bind({});
Story.args = {};
