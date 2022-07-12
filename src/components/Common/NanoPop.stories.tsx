console.log(
	["top", "right", "bottom", "left"].reduce((result, sideA) => {
		return [
			...result,
			["start", "middle", "end"].map((sideB) => `${sideA}-${sideB}`),
		];
	}, [])
);

export default {
	title: "Amyda/NanoPop",
	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {
		margin: {
			control: "number",
			defaultValue: 8,
		},
		position: {
			control: { type: "select" },
			options: ["top", "right", "bottom", "left"].reduce((result, sideA) => {
				return [
					...result,
					["start", "middle", "end"].map((sideB) => `${sideA}-${sideB}`),
				];
			}, []),
			defaultValue: "top-start",
		},

		// backgroundColor: { control: "color" },
		// children: { control: "text", defaultValue: "" },
		// onClick: { action: "onClick" },
		// primary: { control: "boolean" },
		// size: {
		// 	control: { type: "select" },
		// 	options: ["small", "medium", "large"],
		// },
	},
} as Meta;

const Template: Story<{ margin: number; position: string }> = (props) => {
	// You can either use a function to create DOM elements or use a plain html string!
	return <div>{props.children}</div>;
};

export const Default = Template.bind({});
Default.args = {};
