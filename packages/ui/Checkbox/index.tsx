import React from "react";
import {
	Checkbox as CheckboxPrimitive,
	CheckboxProps,
	useCheckboxState,
} from "reakit/Checkbox";

import { VisuallyHidden } from "react-aria";

import _ from "lodash";
import { LucideIcon } from "../LucideIcon";
import { CSS, styled, Tone } from "../stitches.config";
import { Text } from "../Text";
import { getCheckboxToneStyle } from "../util/tones";
export interface CheckboxExtendedProps extends CheckboxProps {
	defaultChecked?: boolean | undefined;
	children?: React.ReactNode;
	tone?: Tone;
	fontSize?:
		| "xs"
		| "sm"
		| "base"
		| "lg"
		| "xl"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl";
	checkEmoji?: React.ReactNode;
	css?: CSS;
}

function CheckboxWithLabel(
	{
		defaultChecked,
		children,
		fontSize = "lg",
		tone = "slate",
		css,
		...props
	}: CheckboxExtendedProps,
	ref: React.ForwardedRef<HTMLInputElement>
) {
	const checkbox = useCheckboxState({
		state: defaultChecked,
	});
	console.log(checkbox);
	return (
		<CheckboxLabel
			data-state={props.disabled ? "disabled" : undefined}
			css={{ fontSize: `$${fontSize}`, color: "$baseText" }}
		>
			<VisuallyHidden>
				<CheckboxPrimitive
					// disabled={disabled}
					ref={ref}
					{...checkbox}
					{...props}
				/>
			</VisuallyHidden>
			<CheckboxRoot
				data-state={checkbox.state ? "checked" : "unchecked"}
				css={_.merge(getCheckboxToneStyle(tone), css)}
			>
				<CheckboxIndicator checked={!!checkbox.state}>
					<LucideIcon strokeWidth={2.5} name="check" />
				</CheckboxIndicator>
			</CheckboxRoot>
			<Text css={{ fontSize: "inherit" }}>{children}</Text>
		</CheckboxLabel>
	);
}

export const Checkbox = React.forwardRef(CheckboxWithLabel);

const CheckboxLabel = styled("label", {
	lineHeight: 1,
	height: "1em",
	display: "inline-flex",
	alignItems: "center",
	gap: "0.4em",
	userSelect: "none",
	variants: {
		status: {
			enabled: {
				cursor: "pointer",
			},
			disabled: {
				opacity: 0.65,
				cursor: "not-allowed",
			},
		},
	},
	"&[data-state=disabled]": {
		opacity: 0.65,
		cursor: "not-allowed",
	},
});

const CheckboxRoot = styled("div", {
	aspectRatio: "1",
	fontSize: "inherit",
	width: "auto",
	height: "100%",
	overflow: "hidden",
	flexShrink: 1,
	borderRadius: "25%",
	justifyContent: "center",
	padding: "0",
	border: "none",
	display: "inline-flex",
	transition: "all 0.2s",
	alignItems: "center",
	":active": { transform: "scale(0.9)" },
});

const CheckboxIndicator = styled("div", {
	aspectRatio: "1/1",
	height: "1em",
	width: "1em",
	position: "relative",
	textAlign: "center",
	overflow: "hidden",
	display: "inline-flex",
	alignItems: "center",
	color: "inherit",
	justifyContent: "center",
	padding: 0,
	opacity: 0,
	variants: {
		checked: {
			true: {
				opacity: 1,
			},
		},
	},
});
