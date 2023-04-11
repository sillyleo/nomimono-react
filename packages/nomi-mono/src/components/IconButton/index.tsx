import { tv, type VariantProps } from "tailwind-variants";

import { Spinner } from "../Spinner";
import { buttonStyle } from "../Button";

// export const iconButtonStyle = tv({
// 	slots: {
// 		base: "relative items-center inline-flex active:translate-y-[1px] transition-transform duration-200 ease-in-out",
// 		content: "font-medium font-body text-center",
// 		icon: "flex items-center justify-center w-[1em] h-[1em]",
// 		spinner: "absolute inset-0 flex items-center justify-center",
// 	},
// 	variants: {
// 		rounded: {
// 			s: {
// 				base: "rounded-s",
// 			},
// 			m: {
// 				base: "rounded-m",
// 			},
// 			l: {
// 				base: "rounded-l",
// 			},
// 			full: {
// 				base: "rounded-full",
// 			},
// 		},
// 		disabled: {
// 			true: {
// 				base: "cursor-not-allowed",
// 			},
// 		},
// 		isLoading: {
// 			true: {},
// 		},
// 		intent: {
// 			primary: {
// 				base: "text-neutral-6 bg-primary-500 hover:bg-primary-400",
// 			},
// 			secondary: {
// 				base: "text-neutral-1 bg-neutral-6 dark:text-dark-neutral-1 dark:bg-dark-neutral-6 hover:bg-neutral-5 dark:hover:bg-neutral-5",
// 			},
// 			outline: {
// 				base: "text-neutral-6 dark:text-dark-neutral-6 hover:bg-neutral-1 dark:hover:bg-dark-neutral-1 outline outline-1 outline-neutral-6 dark:outline-dark-neutral-6 hover:outline-neutral-6 dark:hover:outline-dark-neutral-6",
// 			},
// 			text: {
// 				base: "text-neutral-6 dark:text-dark-neutral-6 bg-transparent hover:bg-neutral-1 dark:hover:bg-dark-neutral-1",
// 			},
// 		},
// 		size: {
// 			xs: {
// 				base: "px-4 py-2",
// 				content: "text-1 px-2 h-5 leading-[20px]",
// 			},
// 			sm: {
// 				base: "px-4 py-2.5",
// 				content: "text-1 px-2 h-5 leading-[20px]",
// 			},
// 			md: {
// 				base: "px-6 py-3",
// 				content: "text-2 px-1.5 h-6 leading-[24px]",
// 			},
// 			lg: {
// 				base: "px-6 py-4",
// 				content: "text-2 px-1.5 h-6 leading-[24px]",
// 			},
// 		},
// 	},
// 	compoundVariants: [
// 		{
// 			isLoading: true,
// 			class: {
// 				content: "opacity-0",
// 				icon: "opacity-0",
// 			},
// 		},
// 		{
// 			size: ["xs", "sm", "md", "lg"],
// 			intent: "primary",
// 			disabled: true,
// 			class: {
// 				base:
// 					"text-neutral-5 bg-neutral-3 hover:bg-neutral-3 " +
// 					"dark:text-dark-neutral-5 dark:bg-dark-neutral-3 dark:hover:bg-dark-neutral-3 " +
// 					"cursor-not-allowed",
// 			},
// 		},
// 		{
// 			size: ["xs", "sm", "md", "lg"],
// 			intent: "secondary",
// 			disabled: true,
// 			class: {
// 				base:
// 					"text-neutral-0 bg-neutral-5 hover:bg-neutral-5 " +
// 					"dark:text-dark-neutral-0 dark:bg-dark-neutral-5 dark:hover:bg-dark-neutral-5 " +
// 					"cursor-not-allowed",
// 			},
// 		},
// 		{
// 			size: ["xs", "sm", "md", "lg"],
// 			intent: "outline",
// 			disabled: true,
// 			class: {
// 				base:
// 					"text-neutral-3 outline-neutral-3 hover:outline-neutral-3" +
// 					"dark:text-dark-neutral-3 dark:outline-dark-neutral-3 dark:hover:outline-dark-neutral-3" +
// 					" cursor-not-allowed ",
// 			},
// 		},
// 		{
// 			size: ["xs", "sm", "md", "lg"],
// 			intent: "text",
// 			disabled: true,
// 			class: {
// 				base:
// 					"px-2 " +
// 					"text-neutral-3 bg-neutral-0 hover:bg-neutral-0" +
// 					"dark:text-dark-neutral-3 dark:bg-dark-neutral-0 dark:hover:bg-dark-neutral-0" +
// 					" cursor-not-allowed",
// 			},
// 		},
// 		{
// 			size: ["xs", "sm", "md", "lg"],
// 			intent: "text",
// 			disabled: false,
// 			class: {
// 				base: "px-2",
// 			},
// 		},
// 	],
// 	defaultVariants: {
// 		size: "sm",
// 		intent: "primary",
// 		disabled: false,
// 		isLoading: false,
// 		rounded: "m",
// 	},
// });

const iconButtonStyle = tv({
	extend: buttonStyle,
});

type ComponentVariant = VariantProps<typeof iconButtonStyle>;

export interface IconButtonProps extends ComponentVariant {
	children: React.ReactNode;
}

export const IconButton = (props: IconButtonProps) => {
	const { size, disabled, rounded, isLoading, intent, children } = props;
	// slot names here
	const { base, content, icon, spinner } = iconButtonStyle({
		isLoading,
		intent,
		disabled,
		size,
		rounded,
	});

	return (
		<button className={base()}>
			{isLoading && (
				<div className={spinner()}>
					<Spinner />
				</div>
			)}
			<div className={content()}>{children}</div>
		</button>
	);
};
