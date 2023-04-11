import { tv, type VariantProps } from "tailwind-variants";

import { Spinner } from "../Spinner";
import { HeroIcon } from "../HeroIcon";

export const iconButtonStyle = tv({
	slots: {
		base: "relative items-center inline-flex justify-center	 active:translate-y-[1px] transition-transform duration-200 ease-in-out",
		icon: "flex items-center justify-center",
		spinner: "absolute inset-0 flex items-center justify-center",
	},
	variants: {
		rounded: {
			s: {
				base: "rounded-s",
			},
			m: {
				base: "rounded-m",
			},
			l: {
				base: "rounded-l",
			},
			full: {
				base: "rounded-full",
			},
		},
		disabled: {
			true: {
				base: "cursor-not-allowed",
			},
		},
		isLoading: {
			true: {},
		},
		intent: {
			primary: {
				base: "text-neutral-6 bg-primary-500 hover:bg-primary-400",
			},
			secondary: {
				base: "text-neutral-1 bg-neutral-7 dark:text-dark-neutral-1 dark:bg-dark-neutral-7 hover:bg-neutral-6 dark:hover:bg-neutral-6",
			},
			outline: {
				base: "text-neutral-6 dark:text-dark-neutral-6 hover:bg-neutral-1 dark:hover:bg-dark-neutral-1 outline outline-1 outline-neutral-6 dark:outline-dark-neutral-6 hover:outline-neutral-6 dark:hover:outline-dark-neutral-6",
			},
			text: {
				base: "text-neutral-6 dark:text-dark-neutral-6 bg-transparent hover:bg-neutral-1 dark:hover:bg-dark-neutral-1",
			},
		},
		size: {
			xs: {
				base: "p-2",
				icon: "w-5 h-5",
			},
			sm: {
				base: "p-2",
				icon: "w-6 h-6",
			},
			md: {
				base: "p-3",
				icon: "w-6 h-6",
			},
			lg: {
				base: "p-4",
				icon: "w-6 h-6",
			},
			xl: {
				base: "w-24 h-24",
				icon: "w-9 h-9",
			},
		},
	},
	compoundVariants: [
		{
			isLoading: true,
			class: {
				icon: "opacity-0",
			},
		},
		{
			size: ["xs", "sm", "md", "lg", "xl"],
			intent: "primary",
			disabled: true,
			class: {
				base:
					"text-neutral-5 bg-neutral-3 hover:bg-neutral-3 " +
					"dark:text-dark-neutral-5 dark:bg-dark-neutral-3 dark:hover:bg-dark-neutral-3 " +
					"cursor-not-allowed",
			},
		},
		{
			size: ["xs", "sm", "md", "lg", "xl"],
			intent: "secondary",
			disabled: true,
			class: {
				base:
					"text-neutral-0 bg-neutral-5 hover:bg-neutral-5 " +
					"dark:text-dark-neutral-0 dark:bg-dark-neutral-5 dark:hover:bg-dark-neutral-5 " +
					"cursor-not-allowed",
			},
		},
		{
			size: ["xs", "sm", "md", "lg", "xl"],
			intent: "outline",
			disabled: true,
			class: {
				base:
					"text-neutral-3 outline-neutral-3 hover:outline-neutral-3" +
					"dark:text-dark-neutral-3 dark:outline-dark-neutral-3 dark:hover:outline-dark-neutral-3" +
					" cursor-not-allowed ",
			},
		},
		{
			size: ["xs", "sm", "md", "lg", "xl"],
			intent: "text",
			disabled: true,
			class: {
				base:
					"text-neutral-3 bg-neutral-0 hover:bg-neutral-0" +
					"dark:text-dark-neutral-3 dark:bg-dark-neutral-0 dark:hover:bg-dark-neutral-0" +
					" cursor-not-allowed",
			},
		},
	],
	defaultVariants: {
		size: "sm",
		intent: "primary",
		disabled: false,
		isLoading: false,
		rounded: "full",
	},
});

type ComponentVariant = VariantProps<typeof iconButtonStyle>;

export interface IconButtonProps extends ComponentVariant {
	children: React.ReactNode;
	iconName?: string;
	iconStyle?: "outline" | "solid" | "mini";
}

export const IconButton = (props: IconButtonProps) => {
	const {
		size,
		disabled,
		rounded,
		isLoading,
		intent,
		children,
		iconName,
		iconStyle = "mini",
	} = props;
	// slot names here
	const { base, icon, spinner } = iconButtonStyle({
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
			<div className={icon()}>
				{children ? (
					children
				) : (
					<HeroIcon
						boxSize="100%"
						iconStyle={iconStyle}
						name={iconName || "plus"}
					/>
				)}
			</div>
		</button>
	);
};
