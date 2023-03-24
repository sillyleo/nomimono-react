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
	fontSize: "$xl",
	fontWeight: 700,
	p: "$4",
	borderRadius: "$2xl",
	fontFamily: "$heading",
	textAlign: "right",
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
});
