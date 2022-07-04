const { mergeConfig } = require("vite");
const viteConfig = require("../vite.config.ts");

const config = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"storybook-addon-pseudo-states",
	],
	// framework: "@storybook/html",

	core: {
		builder: "@storybook/builder-vite",
		disableTelemetry: true, // 👈 Disables telemetry
	},

	features: {
		storyStoreV7: true,
	},

	async viteFinal(config, { configType }) {
		return mergeConfig(viteConfig, config);
	},
};

module.exports = config;
