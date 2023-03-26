import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
	base: "font-semibold text-white text-sm py-1 px-4 rounded-full active:opacity-80",
	variants: {
		color: {
			primary: "bg-blue-500 hover:bg-blue-700",
			secondary: "bg-purple-500 hover:bg-purple-700",
			success: "bg-green-500 hover:bg-green-700",
		},
	},
	defaultVariants: {
		color: "primary",
	},
});

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps extends ButtonVariants {
	children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
	return <button className={button(props)}>{props.children}</button>;
};
