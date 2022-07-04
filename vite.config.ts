const { defineConfig } = require("vite");
const solidPlugin = require("vite-plugin-solid");
const { default: babel } = require("vite-plugin-babel");

module.exports = defineConfig({
	plugins: [solidPlugin()],
	build: {
		target: "esnext",
		polyfillDynamicImport: false,
	},
});
