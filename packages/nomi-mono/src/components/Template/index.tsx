import { tv, type VariantProps } from "tailwind-variants";

const componentStyle = tv({
	base: "px-3 py-2 bg-slate-800 text-slate-100 font-mono",
});

type ComponentVariant = VariantProps<typeof componentStyle>;

export interface ComponentProps extends ComponentVariant {
	children: React.ReactNode;
	/*
	 * For overriding the default className
	 *
	 * */
	className?: string;
}

export const Template = (props: ComponentProps) => {
	return (
		<div className={componentStyle({ ...props, className: props.className })}>
			{props.children}
		</div>
	);
};
