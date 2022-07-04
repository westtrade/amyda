import { render } from "solid-js/web";
import "../src/style.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

let disposeStory;

export const decorators = [
	(Story) => {
		if (disposeStory) {
			disposeStory();
		}

		const root = document.getElementById("root");
		const solid = document.createElement("div");

		solid.setAttribute("id", "solid-root");
		root.appendChild(solid);

		disposeStory = render(Story, solid);

		return solid;
		// return createRoot(() => Story()); // do not work correctly https://github.com/solidjs/solid/issues/553
	},
];
