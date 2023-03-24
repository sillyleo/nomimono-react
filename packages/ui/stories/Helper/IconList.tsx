import { HeroIconOneList, HeroIconOne } from "../../HeroIconOne";
import { IconGallery, IconItem } from "@storybook/addon-docs";

export function AllHeroIcons() {
	const allIcons = HeroIconOneList();
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
