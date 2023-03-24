import { styled } from "../stitches.config";

// TODO: move to nomimono lib later
export const BaseInput = styled("input", {
	boxSizing: "boder-box",
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
	border: "1px solid $mauve10",
	"&:hover": {
		borderColor: "$mauve12",
	},
	"&:focus": {
		borderColor: "$mauve12",
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
	},

	// TODO: maybe sync size with button?
	variants: {
		fontSize: {
			xs: {
				fontSize: "$xs",
				p: "$2",
				borderRadius: "$md",
			},
			sm: {
				fontSize: "$sm",
				p: "$2",
				borderRadius: "$md",
			},
			base: {
				fontSize: "$base",
			},
			lg: {
				fontSize: "$lg",
			},
			xl: {
				fontSize: "$xl",
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
