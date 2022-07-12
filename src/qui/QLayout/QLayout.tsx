import clsx from "clsx";
import { Component } from "solid-js";
import "./QLayout.css";

export interface QLayout {
	class?: string;
	left?: Element;
	right?: Element;
}

export const QLayout: Component<QLayout> = (props) => {
	return (
		<div class={clsx("q-layout", props.class)}>
			<div class="q-layout__left">{props.left}</div>
			<div class="q-layout__right">{props.right}</div>
		</div>
	);
};
