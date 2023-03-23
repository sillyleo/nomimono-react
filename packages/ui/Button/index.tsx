import _ from "lodash";
import React from "react";
import { Box } from "../Box";
import { AutoSpinner } from "../Spinner";
import { CSS, stitchesDarkTheme, Tone } from "../stitches.config";
import { styled } from "../stitches.config";
import { getButtonShadowStyle, getButtonToneStyle } from "../util/tones";

export const BaseButton = styled("button", {
	all: "unset",
	border: "none",
	boxSizing: "border-box",
	userSelect: "none",
	position: "relative",
	"&:disabled": {
		cursor: "not-allowed",
		opacity: 0.75,
	},
	// "&:hover": {
	// 	transform: "translateY(-1px)",
	// },
	"&:active": {
		transform: "translateY(1px)",
	},
	// mdx fix
	"& .button-text p": {
		lineHeight: 1,
		// opacity: 0,
	},
	overflow: "hidden",
	fontFamily: "$heading",
	fontWeight: "$bold",
	cursor: "pointer",
	display: "inline-flex",
	gap: "$2",
	// lineHeight: ,
	alignItems: "center",
	fontSize: "$base",
	transition: "$fast",
	variants: {
		size: {
			sm: {
				borderRadius: "$lg",
				fontSize: 11,
				height: 30,
				px: "$3",
				py: "$2",
			},
			md: {
				borderRadius: "$lg",
				fontSize: 13,
				height: "$8",
				px: "$3",
				py: "$2",
			},
			lg: {
				borderRadius: "$xl",
				fontSize: 15,
				height: "$10",
				px: "$4",
				py: "$3",
			},
			xl: {
				borderRadius: "$xl",
				fontSize: 17,
				height: "$11",
				px: "$5",
				py: "$4",
			},
		},
		isRound: {
			true: {
				borderRadius: "$full",
			},
		},

		align: {
			left: {
				justifyContent: "flex-start",
			},
			center: {
				justifyContent: "center",
			},
			right: {
				justifyContent: "flex-end",
			},
			between: {
				justifyContent: "space-between",
			},
			around: {
				justifyContent: "space-around",
			},
		},
	},
	compoundVariants: [
		{
			size: "sm",
			isRound: true,
			css: {
				borderRadius: "$full",
			},
		},
		{
			size: "md",
			isRound: true,
			css: {
				borderRadius: "$full",
			},
		},
		{
			size: "lg",
			isRound: true,
			css: {
				borderRadius: "$full",
			},
		},
		{
			size: "xl",
			isRound: true,
			css: {
				borderRadius: "$full",
			},
		},
	],

	defaultVariants: {
		size: "md",
		isRound: true,
		align: "center",
	},
});

export interface ButtonProps extends React.ComponentProps<typeof BaseButton> {
	size?: "sm" | "md" | "lg" | "xl";
	/**
	 * No brand color here
	 */
	tone?: Tone;
	intent?: "primary" | "secondary" | "ghost";
	/**
	 * Use with leftIcon or rightIcon
	 */
	align?: "left" | "center" | "right" | "between" | "around";
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	isLoading?: boolean;
	children?: React.ReactNode;
	depth?: "0" | "1" | "2" | "3";
	css?: CSS;
	isDark?: boolean;
}
// add forwardRef to the component
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			size,
			align,
			tone = "slate",
			intent = "primary",
			isLoading,
			children,
			leftIcon,
			rightIcon,
			depth,
			css,
			isDark,
			...props
		}: ButtonProps,
		ref: React.ForwardedRef<HTMLButtonElement>
	) => {
		return (
			<BaseButton
				className={isDark ? stitchesDarkTheme : undefined}
				ref={ref}
				size={size}
				align={align}
				css={_.merge(
					getButtonToneStyle(tone, intent),
					getButtonShadowStyle(tone, depth),
					css
				)}
				{...props}
			>
				{/*left icon*/}
				{leftIcon && (
					<Box
						style={{
							opacity: isLoading ? 0 : 1,
						}}
					>
						{leftIcon}
					</Box>
				)}
				{/*loading*/}
				{isLoading && (
					<Box
						style={{
							position: "absolute",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							inset: 0,
						}}
					>
						<AutoSpinner />
					</Box>
				)}

				<Box
					className="button-text"
					style={{
						opacity: isLoading ? 0 : 1,
					}}
				>
					{children}
				</Box>
				{/*right icon*/}
				{rightIcon && (
					<Box
						style={{
							opacity: isLoading ? 0 : 1,
						}}
					>
						{rightIcon}
					</Box>
				)}
			</BaseButton>
		);
	}
);
