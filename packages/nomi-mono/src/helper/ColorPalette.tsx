import { ColorPalette, ColorItem } from "@storybook/addon-docs";
import theme from "../../tokens-light.json";
import dark from "../../tokens-dark.json";

export const Colors = () => {
	return (
		<ColorPalette>
			{Object.keys(theme.color).map((name) => {
				console.log(typeof name);
				const colorName = name;
				console.log(theme.color[colorName as keyof typeof theme.color]);
				return (
					<ColorItem
						subtitle=""
						key={name}
						title={name}
						colors={theme.color[colorName as keyof typeof theme.color]}
					/>
				);
			})}
		</ColorPalette>
	);
};
export const Dark = () => {
	return (
		<ColorPalette>
			{Object.keys(dark.color).map((name) => {
				console.log(typeof name);
				const colorName = name;
				console.log(dark.color[colorName as keyof typeof dark.color]);
				return (
					<ColorItem
						subtitle=""
						key={name}
						title={name}
						colors={dark.color[colorName as keyof typeof dark.color]}
					/>
				);
			})}
		</ColorPalette>
	);
};
