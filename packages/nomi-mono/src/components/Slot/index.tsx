import { tv, type VariantProps } from "tailwind-variants";

const slotContainerStyle = tv({
	base: "inline-block w-40 h-40 relative bg-neutral-3",
});

type SlotContainerVariants = VariantProps<typeof slotContainerStyle>;

export interface SlotContainerProps extends SlotContainerVariants {
	children: React.ReactNode;
	/*
	 * For overriding the default className
	 *
	 * */
	className?: string;
}

export const SlotContainer = (props: SlotContainerProps) => {
	return (
		<div
			className={slotContainerStyle({ ...props, className: props.className })}
		>
			{props.children}
		</div>
	);
};

// slot

const slotStyle = tv({
	base: "inline-block w-40 h-40 relative bg-neutral-4",
});

type SlotVariants = VariantProps<typeof slotStyle>;

export interface SlotProps extends SlotVariants {
	children: React.ReactNode;
	/*
	 * For overriding the default className
	 *
	 * */
	className?: string;
}

export const Slot = (props: SlotProps) => {
	return (
		<div className={slotStyle({ ...props, className: props.className })}>
			{props.children}
		</div>
	);
};
