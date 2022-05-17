import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Button",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const BlockDark = Template.bind({});
BlockDark.args = {
  block: true,
  dark: true,
};

export const BlockDefault = Template.bind({});
BlockDefault.args = {
  block: true,
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
};
