import { tv, type VariantProps } from "tailwind-variants";

export const Slot = (props: any) => {
	return (
		<Slot.Container className="w-80 h-32">
			<Slot.Backdrop>
				<div className="w-full h-full inline-flex items-center justify-center">
					<span>Backdrop</span>
				</div>
			</Slot.Backdrop>
			<Slot.Child className="text-center leading-[36px]" position="top">
				😀
			</Slot.Child>
			<Slot.Child className="text-center leading-[36px]" position="bottom">
				😁
			</Slot.Child>
			<Slot.Child className="text-center leading-[36px]" position="left">
				🤨
			</Slot.Child>
			<Slot.Child className="text-center leading-[36px]" position="right">
				😊
			</Slot.Child>
			<Slot.Child className="text-center leading-[36px]" position="leftTop">
				😌
			</Slot.Child>
			<Slot.Child className="text-center leading-[36px]" position="leftBottom">
				😚
			</Slot.Child>
			<Slot.Child className="text-center leading-[36px]" position="rightTop">
				😜
			</Slot.Child>
			<Slot.Child className="text-center leading-[36px]" position="rightBottom">
				😎
			</Slot.Child>
		</Slot.Container>
	);
};

const slotContainerStyle = tv({
	base: "inline-flex item-center justify-center w-40 h-40 relative",
	variants: {
		showGuide: {
			true: "border border-dashed border-neutral-4 rounded-s bg-neutral-2",
		},
	},
	defaultVariants: {
		showGuide: true,
	},
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

Slot.Container = SlotContainer;

export const SlotBackdrop = (props: any) => {
	return <div className="absolute inset-0">{props.children}</div>;
};

Slot.Backdrop = SlotBackdrop;
// slot

const slotChildStyle = tv({
	base: "inline-block w-10 h-10 absolute",
	variants: {
		showGuide: {
			true: "border border-dashed border-neutral-4 rounded-s bg-blue-100",
		},
		position: {
			left: "left-0 top-[50%] translate-y-[-50%]",
			right: "right-0 top-[50%] translate-y-[-50%]",
			top: "top-0 left-[50%] translate-x-[-50%]",
			bottom: "bottom-0 left-[50%] translate-x-[-50%]",
			leftTop: "left-0 top-0",
			leftBottom: "left-0 bottom-0",
			rightTop: "right-0 top-0",
			rightBottom: "right-0 bottom-0",
		},
		defaultVariants: {
			position: "left",
		},
	},
	defaultVariants: {
		showGuide: true,
	},
});

type SlotChildVariants = VariantProps<typeof slotChildStyle>;

export interface SlotProps extends SlotChildVariants {
	children: React.ReactNode;
	/*
	 * For overriding the default className
	 *
	 * */
	className?: string;
}

export const SlotChild = (props: SlotProps) => {
	return (
		<div className={slotChildStyle({ ...props, className: props.className })}>
			{props.children}
		</div>
	);
};

Slot.Child = SlotChild;
