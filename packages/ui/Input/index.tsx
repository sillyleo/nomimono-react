import { stitchesDarkTheme, styled } from "../stitches.config";

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
	p: "$5",
	borderRadius: "$2xl",
	fontFamily: "$heading",
	fontSize: "$base",
	textAlign: "left",
	border: "1px solid $slate9",
	"&:hover": {
		borderColor: "$mauve10",
	},
	"&:focus": {
		borderColor: "$mauve10",
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

	variants: {
		fontSize: {
			xs: {
				fontSize: "$xs",
				py: "$2",
				px: "$3",
				borderRadius: "$lg",
			},
			sm: {
				fontSize: "$sm",
				py: "$2",
				px: "$3",
				borderRadius: "$lg",
			},
			base: {
				fontSize: "$base",
				py: "$2",
				px: "$3",
				borderRadius: "$xl",
			},
			lg: {
				fontSize: "$lg",
				py: "$3",
				px: "$4",
				borderRadius: "$2xl",
			},
			xl: {
				fontSize: "$xl",
				py: "$3",
				px: "$4",
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
	defaultVariants: {
		fontSize: "base",
		align: "left",
	},
});
