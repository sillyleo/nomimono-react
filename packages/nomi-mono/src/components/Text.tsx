import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textStyle = tv({
	base: "font-body text-neutral-6 dark:text-dark-neutral-6",
	variants: {
		size: {
			"display-l": "font-heading text-9 font-bold leading-tight",
			"display-m": "font-heading text-8 font-bold leading-tight",
			"display-s": "font-heading text-7 font-bold leading-tight",
			"heading-l": "font-heading text-6 font-bold leading-normal",
			"heading-m": "font-heading text-5 font-bold leading-normal",
			"heading-s": "font-heading text-4 font-bold leading-normal",
			"title-l": "text-3 font-medium leading-normal",
			"title-m": "text-2 font-medium leading-normal",
			"title-s": "text-1 font-medium leading-snug",
			"title-xs": "text-0 font-medium leading-snug",
			"body-l": "text-3 leading-normal",
			"body-m": "text-2 leading-normal",
			"body-s": "text-1 leading-snug",
			"body-xs": "text-0 leading-snug",
		},
	},
});

type TextVariants = VariantProps<typeof textStyle>;

export interface TextProps extends TextVariants {
	children: React.ReactNode;
	/*
	 * For overriding the default className
	 *
	 * */
	className?: string;
}

export const Text = (props: TextProps) => {
	return (
		<div className={textStyle({ ...props, className: props.className })}>
			{props.children}
		</div>
	);
};
