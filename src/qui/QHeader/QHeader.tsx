import clsx from "clsx";
import { Component } from "solid-js";
import { QLayout } from "../QLayout/QLayout";
import { QLogo } from "../QLogo/QLogo";
import "./QHeader.css";

export interface QHeader {
	class?: string;
}

export const QHeader: Component<QHeader> = (props) => {
	return (
		<header class={clsx("q-header", props.class)}>
			<QLayout left={<QLogo />}></QLayout>
			<QLayout left={<QLogo />}></QLayout>
		</header>
	);
};
