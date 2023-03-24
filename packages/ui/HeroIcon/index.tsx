import React, { FC } from "react";
import * as CSS from "csstype";
import * as OutlineIcons from "@heroicons/react/24/outline";
import * as SolidIcons from "@heroicons/react/24/solid";
import * as MiniIcons from "@heroicons/react/20/solid";
import _ from "lodash";
import { Box } from "../Box";

// Parse name from @heroicons/react/24/outline into a type
// type IconName = keyof typeof OutlineIcons;

const MiniIcon: FC<{ name: string }> = (props) => {
	const { ...icons } = MiniIcons;
	const Icon: JSX.Element =
		// @ts-ignore
		icons[props.name + "Icon"] || icons["QuestionMarkCircleIcon"];
	return (
		<>
			{/* @ts-ignore */}
			<Icon width="100%" height="100%" aria-hidden="true" />
		</>
	);
};

const OutlineIcon: FC<{ name: string }> = (props) => {
	const { ...icons } = OutlineIcons;
	// @ts-ignore
	const Icon: JSX.Element =
		// @ts-ignore

		icons[props.name + "Icon"] || icons["QuestionMarkCircleIcon"];
	return (
		<>
			{/* @ts-ignore */}
			<Icon width="100%" height="100%" aria-hidden="true" />
		</>
	);
};

const SolidIcon: FC<{ name: string }> = (props) => {
	const { ...icons } = SolidIcons;
	// @ts-ignore
	const Icon: JSX.Element =
		// @ts-ignore

		icons[props.name + "Icon"] || icons["QuestionMarkCircleIcon"];
	return (
		<>
			{/* @ts-ignore */}
			<Icon width="100%" height="100%" aria-hidden="true" />
		</>
	);
};

export interface HeroIconProps {
	/*
	 * Get icon name from Hero v2 https://heroicons.com/
	 *
	 * @type {string}
	 * @memberOf HeroIconProps
	 * */
	name?: string;
	boxSize?: CSS.Properties["width"];
	iconStyle?: "outline" | "solid" | "mini";
}

// https://github.com/tailwindlabs/heroicons/issues/278#issuecomment-851594776
export function HeroIcon({
	name = "squares-2x2",
	iconStyle = "outline",
	boxSize = "24px",
	...props
}: HeroIconProps) {
	// handle text transformation so you can copy and paste icon name directly
	const iconNameCamelCase = _.camelCase(name);
	const IconNameUpperCase =
		iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);

	return (
		<Box css={{ boxSize: boxSize }} {...props}>
			{iconStyle === "outline" && <OutlineIcon name={IconNameUpperCase} />}
			{iconStyle === "solid" && <SolidIcon name={IconNameUpperCase} />}
			{iconStyle === "mini" && <MiniIcon name={IconNameUpperCase} />}
		</Box>
	);
}
