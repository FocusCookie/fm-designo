import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Location } from "./Location";

export default {
  title: "Components/Location",
  component: Location,
  args: {},
} as ComponentMeta<typeof Location>;

const Template: ComponentStory<typeof Location> = (args) => (
  <Location {...args} />
);

export const Canada = Template.bind({});
Canada.args = {};

export const Australia = Template.bind({});
Australia.args = {
  country: "australia",
};

export const UnitedKingdom = Template.bind({});
UnitedKingdom.args = {
  country: "united kingdom",
};
