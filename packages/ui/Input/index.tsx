import { styled } from "../stitches.config";

// TODO: move to nomimono lib later
export const BaseInput = styled("input", {
	boxSizing: "boder-box",
	bgTone1: "mauve",
	color: "$baseText",
	outlineColor: "$baseTextTertiary",
	"&::-webkit-outer-spin-button": {
		appearance: "none",
		margin: 0,
	},
	"&::-webkit-inner-spin-button": {
		appearance: "none",
		margin: 0,
	},
	fontWeight: 700,
	p: "$4",
	borderRadius: "$2xl",
	fontFamily: "$heading",
	fontSize: "$base",
	textAlign: "left",
	border: "1px solid $slate8",
	"&:hover": {
		borderColor: "$mauve9",
	},
	"&:focus": {
		borderColor: "$mauve9",
		bgTone1: "mauve",
	},
	"&:disabled": {
		opacity: 0.65,
	},
	"&:invalid": {
		border: "1px solid $red9",
		outline: "1px solid $red9",
	},
	"&:focus:invalid": {
		border: "1px solid $red9",
		outline: "1px solid $red9",
	},
	"&.error": {
		border: "1px solid $red9",
		outline: "1px solid $red9",
		bgTone2: "red",
	},

	// TODO: maybe sync size with button?
	variants: {
		fontSize: {
			xs: {
				fontSize: "$xs",
				p: "$2",
				borderRadius: "$lg",
			},
			sm: {
				fontSize: "$sm",
				p: "$2",
				borderRadius: "$lg",
			},
			base: {
				fontSize: "$base",
				p: "$2",
				borderRadius: "$xl",
			},
			lg: {
				fontSize: "$lg",
				p: "$3",
				borderRadius: "$2xl",
			},
			xl: {
				fontSize: "$xl",
				p: "$3",
				borderRadius: "$2xl",
			},
			"2xl": {
				fontSize: "$2xl",
			},
			"3xl": {
				fontSize: "$3xl",
			},
			"4xl": {
				fontSize: "$4xl",
			},
			"5xl": {
				fontSize: "$5xl",
			},
			"6xl": {
				fontSize: "$6xl",
			},
		},
		align: {
			left: {
				textAlign: "left",
			},
			center: {
				textAlign: "center",
			},
			right: {
				textAlign: "right",
			},
		},
	},
});
