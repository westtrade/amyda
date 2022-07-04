import { Meta } from "@storybook/html";
import { Story } from "@storybook/store";
import { Button, ButtonProps } from "./Button";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
	title: "Amyda/Button",
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {
		// backgroundColor: { control: "color" },
		children: { control: "text", defaultValue: "Button" },
		// onClick: { action: "onClick" },
		// primary: { control: "boolean" },
		// size: {
		// 	control: { type: "select" },
		// 	options: ["small", "medium", "large"],
		// },
	},
} as Meta;

// // More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template: Story<{ label: string }> = (props) => {
	// You can either use a function to create DOM elements or use a plain html string!
	return <Button>{props.children}</Button>;
};

// export const Primary = Template.bind({
// 	test: 1234,
// });
// // More on args: https://storybook.js.org/docs/html/writing-stories/args
// // Primary.args = {
// // 	primary: true,
// // 	label: "Button",
// // };

export const Default = Template.bind({});
Default.args = {};
