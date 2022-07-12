import { Meta } from "@storybook/html";
import { QLayout } from "./QLayout";

export default {
	title: "YandexQ/QLayout",
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {},
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

export const Default = () => <QLayout left={1234} right={1234} />;
