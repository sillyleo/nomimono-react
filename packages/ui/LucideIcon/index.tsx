import _ from "lodash";
import * as icons from "lucide-react";
import React from "react";
import * as CSS from "csstype";

export interface IconProps {
	name: string;
	color?: string;
	size?: number;
	strokeWidth?: number;
	fill?: string;
	boxSize?: CSS.Properties["width"];
	className?: string;
}

export const LucideIcon = ({
	name,
	color,
	size,
	boxSize,
	fill = "none",
	strokeWidth,
	className,
	...props
}: IconProps) => {
	const iconNameCamelCase = _.camelCase(name);
	const IconNameUpperCase =
		iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);

	// @ts-ignore
	const LucideIcon = icons[IconNameUpperCase];
	return (
		<LucideIcon
			color={color}
			size={size ? size : "100%"}
			strokeWidth={strokeWidth}
			fill={fill}
			style={{
				flexShrink: 1,
				height: boxSize ? boxSize : undefined,
				width: boxSize ? boxSize : undefined,
				aspectRatio: "1",
			}}
			className={className}
			{...props}
		/>
	);
};
