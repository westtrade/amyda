import { Meta } from "@storybook/html";
import { QHeader } from "./QHeader";

export default {
	title: "YandexQ/QHeader",
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {},
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

export const Default = () => <QHeader />;
