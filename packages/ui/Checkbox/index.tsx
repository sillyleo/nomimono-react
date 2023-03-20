import React from "react";
import {
	Checkbox as CheckboxPrimitive,
	CheckboxCheck as CheckboxCheckPrimitive,
	useCheckboxState,
} from "ariakit/checkbox";
import { VisuallyHidden } from "ariakit/visually-hidden";

import { keyframes, styled } from "../stitches.config";

const StyledCheckbox = styled(CheckboxPrimitive, {});

const StyledCheckboxCheck = styled(CheckboxCheckPrimitive, {});

export const Checkbox = () => {
	return (
		<div>
			<StyledCheckbox />
			<StyledCheckboxCheck checked />
		</div>
	);
};

const up = keyframes({
	"0%": {
		transform: "scale(0.75)",
		opacity: 0,
	},
	"65%": {
		transform: " scale(1.38)",
		opacity: 1,
	},

	"100%": {
		transform: "scale(1)",
		opacity: 1,
	},
});
