import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Link } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
  args: {
    label: "link to click",
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.args = {
  color: "dark",
};
export const Light = Template.bind({});
Light.args = {
  color: "light",
};
export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const AdditionalClass = Template.bind({});
AdditionalClass.args = {
  className: "text-2xl",
};
