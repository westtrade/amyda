import { Component } from "solid-js";
import "./Button.css";

export interface ButtonProps {}

export const Button: Component<ButtonProps> = (props) => {
	return (
		<button type="button" className="button">
			{props.children}
		</button>
	);
};

export const DivButton: Component<ButtonProps> = (props) => {
	return (
		<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">
			Save
		</div>
	);
};
