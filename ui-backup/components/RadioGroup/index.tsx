import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import _ from "lodash";
import { styled, Tone } from "../../stitches.config";
import { getRadioGroupToneStyle } from "../../util/tones";
import { Text } from "../Text";

export const RadioGroup = () => {
	// this is instructions for the user of the component
	return (
		<code>
			<pre>
				{`<RadioGroup.Root
			className="RadioGroupRoot"
			defaultValue="default"
			aria-label="View density"
		>
			<RadioGroup.ItemWithLabel value="Default">
				Default
			</RadioGroup.ItemWithLabel>
			<RadioGroup.ItemWithLabel value="Compact">
				Compact
			</RadioGroup.ItemWithLabel>
			<RadioGroup.ItemWithLabel value="Comfortable">
				Comfortable
			</RadioGroup.ItemWithLabel>
		</RadioGroup.Root>`}
			</pre>
		</code>
	);
};

// Root
export const Root = styled(RadioGroupPrimitive.Root, {
	display: "flex",
	flexDirection: "column",
	gap: "$1",
});
RadioGroup.Root = Root;

// Item
export const Item = styled(RadioGroupPrimitive.Item, {
	bgTone1: "slate",
	width: "1em",
	height: "1em",
	aspectRatio: "1",
	borderRadius: "$full",
	boxShadow: "0 0 2px",
	boxShadowTone11: "slate",
	"&:hover": {
		bgTone3: "slate",
		boxShadow: "0 0 2px",
		boxShadowTone10: "slate",
	},

	"&[data-state=checked]": {
		bgTone10: "slate",
	},
	cursor: "default",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	outline: "none",
});

RadioGroup.Item = Item;

// Indicator
export const Indicator = styled(RadioGroupPrimitive.Indicator, {
	width: "45%",
	height: "45%",
	bgTone2: "slate",
	borderRadius: "$full",
});

RadioGroup.Indicator = Indicator;

const ItemLabel = styled("label", {
	display: "flex",
	gap: "0.36em",
	alignItems: "center",
});

export interface ItemWithLabelProps
	extends RadioGroupPrimitive.RadioGroupItemProps {
	fontSize?: string;
	tone?: Tone;
}
// Item with Label
export const ItemWithLabel = (props: ItemWithLabelProps) => {
	const { children, value, fontSize = "base", tone = "slate", ...rest } = props;
	return (
		<ItemLabel css={{ fontSize: `$${fontSize}` }}>
			<Item {...rest} value={value} css={_.merge(getRadioGroupToneStyle(tone))}>
				<Indicator />
			</Item>
			<Text css={{ fontSize: "inherit" }}>{children}</Text>
		</ItemLabel>
	);
};

RadioGroup.ItemWithLabel = ItemWithLabel;
