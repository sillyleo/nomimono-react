import { tv, type VariantProps } from "tailwind-variants";
import { AutoSpinner } from "./Spinner";

const buttonStyle = tv({
	base: "px-3 py-2 bg-slate-800 text-slate-100 font-mono",
});

type ButtonVariants = VariantProps<typeof buttonStyle>;

export interface ButtonProps extends ButtonVariants {
	children: React.ReactNode;
	/*
	 * For overriding the default className
	 *
	 * */
	className?: string;
}

export const Button = (props: ButtonProps) => {
	return (
		<button className={buttonStyle({ ...props, className: props.className })}>
			{props.children}
		</button>
	);
};
