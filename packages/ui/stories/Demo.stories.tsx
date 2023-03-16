import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Demo from "../Macaron";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Demo",
	component: Demo,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	//  argTypes: {
	//    backgroundColor: { control: 'color' },
	//  },
} as ComponentMeta<typeof Demo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Demo> = (args) => <Demo />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
