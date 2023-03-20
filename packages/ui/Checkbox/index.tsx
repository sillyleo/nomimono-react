import React, { useState } from "react";
import {
	Checkbox as CheckboxPrimitive,
	CheckboxProps,
	useCheckboxState,
} from "reakit/Checkbox";

import { VisuallyHidden } from "react-aria";

import { CSS, keyframes, styled, Tone } from "../stitches.config";
import _ from "lodash";
import { getCheckboxToneStyle } from "../util/tones";
import { Box } from "../Box";
import { LucideIcon } from "../LucideIcon";
export interface CheckboxExtendedProps extends CheckboxProps {
	//realkit
	disabled?: boolean | undefined;
	//custom
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
		disabled,
		defaultChecked,
		children,
		checkEmoji,
		fontSize,
		tone = "gray",
		css,
		...props
	}: CheckboxExtendedProps,
	ref: React.ForwardedRef<HTMLInputElement>
) {
	const checkbox = useCheckboxState({
		state: defaultChecked,
	});
	// console.log(checkbox.state);
	return (
		<CheckboxLabel
			css={{
				fontSize: fontSize,
			}}
			status={!!disabled ? "disabled" : "enabled"}
		>
			<VisuallyHidden>
				<CheckboxPrimitive
					disabled={disabled}
					ref={ref}
					{...checkbox}
					{...props}
				/>
			</VisuallyHidden>
			<CheckboxRoot
				css={_.merge(getCheckboxToneStyle(tone), css)}
				data-state={
					props.checked !== undefined
						? props.checked
							? "checked"
							: "unchecked"
						: checkbox.state
						? "checked"
						: "unchecked"
				} // styling based on state
			>
				{/* use checked if it's present, else use state */}
				{props.checked === true ? (
					<CheckboxIndicator>
						{checkEmoji ? checkEmoji : <LucideIcon name="check" />}
					</CheckboxIndicator>
				) : (
					checkbox.state && (
						<CheckboxIndicator>
							{checkEmoji ? checkEmoji : <LucideIcon name="check" />}
						</CheckboxIndicator>
					)
				)}
			</CheckboxRoot>

			<Box as="span">{children}</Box>
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
	height: "24px",
	width: "24px",
	position: "relative",
	textAlign: "center",
	overflow: "hidden",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 0,
});
