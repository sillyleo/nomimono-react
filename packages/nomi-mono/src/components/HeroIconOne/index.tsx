import { FC } from "react";
import * as HeroIcons from "react-icons/hi";

// https://github.com/tailwindlabs/heroicons/issues/278#issuecomment-851594776
const HeroIcon: FC<{ icon: string }> = (props) => {
	const { ...icons } = HeroIcons;
	// console.log(props.icon);
	// @ts-ignore
	const OutlineIcon: JSX.Element = icons[props.icon] || icons["HiArchive"];
	return (
		<>
			{/* @ts-ignore */}
			<OutlineIcon
				style={{ width: "100%", height: "100%" }}
				aria-hidden="true"
			/>
		</>
	);
};
export interface HeroIconOneProps {
	/*
	 * Get icon name from https://react-icons.github.io/react-icons/icons?name=hi
	 *
	 * @type {string}
	 * @memberOf HeroIconOneProps
	 * */
	name?: string;
	boxSize?: string;
}

// from react-icons
export const HeroIconOne = ({
	name = "HiArchive",
	boxSize = "24px",
	...props
}: HeroIconOneProps) => {
	return (
		<div style={{ width: boxSize, height: boxSize }} {...props}>
			<HeroIcon icon={name} />
		</div>
	);
};

// a function to return a array of all icons names from HeroIcons
export const getHeroIconOneList = () => {
	const { ...icons } = HeroIcons;
	return Object.keys(icons);
};
