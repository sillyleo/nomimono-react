import { stitchesDarkTheme, styled } from "../stitches.config";

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
		asBackdrop: {
			true: {
				position: "absolute",
				inset: 0,
			},
		},
	},
	defaultVariants: {
		fontSize: "base",
		align: "left",
	},
});

const Slot = styled("div", {
	position: "absolute",
	bgTone5: "mauve",
	boxSize: 80,
	borderRadius: "$xl",
	zIndex: 1,
	variants: {
		position: {
			left: {
				left: 2,
				top: "50%",
				transform: "translateY(-50%)",
			},
			right: {
				right: 2,
				top: "50%",
				transform: "translateY(-50%)",
			},
			top: {
				top: 2,
				left: "50%",
				transform: "translateX(-50%)",
			},
			bottom: {
				bottom: 2,
				left: "50%",
				transform: "translateX(-50%)",
			},
			topLeft: {
				top: 2,
				left: 2,
			},
			topRight: {
				top: 2,
				right: 2,
			},
			bottomLeft: {
				bottom: 2,
				left: 2,
			},
			bottomRight: {
				bottom: 2,
				right: 2,
			},
		},
	},
	defaultVariants: {
		position: "left",
	},
});

const SlotWrapper = styled("div", {
	position: "relative",
	display: "block",
});

export const Input = ({
	label,
	helperText,
	leftSlot,
	rightSlot,
	topSlot,
	bottomSlot,
	...props
}: any) => {
	return (
		<SlotWrapper
			as="label"
			css={{
				boxSize: 400,
			}}
		>
			<Slot position="bottomLeft" />
			<Slot position="bottomRight" />
			<Slot position="topRight" />
			<Slot position="topLeft" />
			<Slot position="top" />
			<Slot position="bottom" />
			<Slot position="left" />
			<Slot position="right" />

			<BaseInput align="center" asBackdrop {...props} />
		</SlotWrapper>
	);
};
