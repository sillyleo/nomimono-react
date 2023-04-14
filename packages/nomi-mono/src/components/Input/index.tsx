import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

export const inputStyle = tv({
	slots: {
		base: "w-full border rounded-s px-3 border-neutral-4 bg-neutral-0 dark:border-dark-neutral-4 dark:bg-dark-neutral-0 focus:outline-none focus:border-neutral-7 focus:ring-1 focus:ring-neutral-7 hover:border-neutral-7",
	},
	variants: {
		error: {
			true: {
				base: "text-support-red border-support-red border focus:border-support-red focus:ring-support-red hover:border-support-red",
			},
		},
		disabled: {
			true: {
				base: "placeholder:text-neutral-4 border-neutral-4 hover:border-neutral-4 cursor-not-allowed",
			},
		},
		inputSize: {
			sm: {
				base: "text-1 h-10",
			},
			md: {
				base: "text-2 h-12",
			},
			lg: {
				base: "text-2 h-14",
			},
		},
		align: {
			left: {
				base: "text-left",
			},
			center: {
				base: "text-center",
			},
			right: {
				base: "text-right",
			},
		},
		asBackdrop: {
			true: {
				base: "inset-0 absolute",
			},
		},
	},
	defaultVariants: {
		inputSize: "sm",
		error: false,
		disabled: false,
	},
});

type InputVariants = VariantProps<typeof inputStyle>;

// extend input props with html input type
export interface InputProps
	extends InputVariants,
		React.InputHTMLAttributes<HTMLInputElement> {
	// custom props here
	children: React.ReactNode;
	placeholder?: string;
	className?: string;
}

export const Input = (props: InputProps) => {
	const {
		inputSize,
		error,
		disabled,
		align,
		asBackdrop,
		children,
		placeholder = "Input",
		className,
		...rest
	} = props;

	const { base } = inputStyle({
		inputSize,
		error,
		disabled,
		align,
		asBackdrop,
	});

	return (
		<input
			placeholder={placeholder}
			className={base({ class: className })}
			{...rest}
		/>
	);
};
