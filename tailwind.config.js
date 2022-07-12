/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"title-active": "#14142B",
				body: "#4E4B66",
				label: "#6E7191",
				placeholder: "#A0A3BD",
				line: "#D9DBE9",
				"input-background": "#EFF0F6",
				background: "#F7F7FC",
				"off-white": "#FCFCFC",
				primary: {
					100: "#F3EFFF",
					300: "#E4DAFF",
					500: "#BCA4FF",
					700: "#5F2EEA",
					900: "#2A00A2",
				},
				secondary: {
					100: "#F1FCFF",
					300: "#DEF9FF",
					500: "#82E9FF",
					700: "#1CC8EE",
					900: "#0096B7",
				},

				error: {
					100: "#FFF3F8",
					300: "#FFDFED",
					500: "#FF84B7",
					700: "#ED2E7E",
					900: "#C30052",
				},

				success: {
					100: "#F2FFFB",
					300: "#DFFFF6",
					500: "#34EAB9",
					700: "#00BA88",
					900: "#00966D",
				},
			},
		},
	},
	plugins: [],
};
