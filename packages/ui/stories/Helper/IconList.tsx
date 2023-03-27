import { IconGallery, IconItem } from "@storybook/addon-docs";
import { getHeroIconOneList, HeroIconOne } from "../../components/HeroIconOne";
import { getHeroIconList, HeroIcon } from "../../components/HeroIcon";
import { LucideIcon, getLucideIconList } from "../../components/LucideIcon";

export function HeroIconOneList() {
	const allIcons = getHeroIconOneList();
	return (
		<IconGallery>
			{allIcons.map((icon) => (
				<IconItem name={icon} key={icon}>
					<HeroIconOne name={icon} />
				</IconItem>
			))}
		</IconGallery>
	);
}

export function HeroIconListSolid() {
	const allIcons = getHeroIconList();
	return (
		<IconGallery>
			{allIcons.map((icon) => (
				<IconItem name={icon} key={icon}>
					<HeroIcon iconStyle={"mini"} name={icon} />
				</IconItem>
			))}
		</IconGallery>
	);
}

export function HeroIconListMini() {
	const allIcons = getHeroIconList();
	return (
		<IconGallery>
			{allIcons.map((icon) => (
				<IconItem name={icon} key={icon}>
					<HeroIcon iconStyle={"solid"} name={icon} />
				</IconItem>
			))}
		</IconGallery>
	);
}
export function HeroIconListOutline() {
	const allIcons = getHeroIconList();
	return (
		<IconGallery>
			{allIcons.map((icon) => (
				<IconItem name={icon} key={icon}>
					<HeroIcon iconStyle={"outline"} name={icon} />
				</IconItem>
			))}
		</IconGallery>
	);
}

export function LucideIconList() {
	const allIcons = getLucideIconList();
	return (
		<IconGallery>
			{allIcons.map((icon) => (
				<IconItem name={icon} key={icon}>
					<LucideIcon name={icon} />
				</IconItem>
			))}
		</IconGallery>
	);
}