import _ from "lodash";
import { BaseButton } from "../Button";
import { HeroIconOne } from "../HeroIconOne";
import { styled, Tone, CSS } from "../stitches.config";
import { getButtonShadowStyle, getButtonToneStyle } from "../util/tones";

export const IconButtonWrapper = styled(BaseButton, {
	aspectRatio: "1",
	p: 0,
	rowGap: 0,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
});

export interface IconButtonProps
	extends React.ComponentProps<typeof IconButtonWrapper> {
	tone?: Tone;
	intent?: "primary" | "secondary" | "ghost";
	depth?: "0" | "1" | "2" | "3";
	/**
	 * Defaults to HeroIconOne
	 *
	 */
	name?: string;
	/**
	 * Add your own icon with size 65% ~ 60%
	 */
	children?: React.ReactNode;
	css?: CSS;
	isRound?: boolean;
}

export const IconButton = ({
	children,
	name,
	tone = "slate",
	intent = "primary",
	depth,
	css,
	isRound = false,
	...props
}: IconButtonProps) => {
	//@ts-ignore
	return (
		<IconButtonWrapper
			isRound={isRound}
			css={_.merge(
				getButtonToneStyle(tone, intent),
				getButtonShadowStyle(tone, depth),
				{
					p: 0,
					rowGap: 0,
				},
				css
			)}
			{...props}
		>
			{children ? children : <HeroIconOne boxSize={"65%"} name={name} />}
		</IconButtonWrapper>
	);
};
