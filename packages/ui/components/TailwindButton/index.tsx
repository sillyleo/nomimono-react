import { tv, type VariantProps } from "tailwind-variants";
import { AutoSpinner } from "../Spinner";
import React from "react";

const baseButton = tv({
	base: "border-none select-none relative disabled:cursor-not-allowed disabled:opacity-75 active:translate-y-[1px] transition linear overflow-hidden font-heading font-bold cursor-pointer inline-flex gap-2 items-center",
	variants: {
		intent: {
			primary:
				"bg-slate-12 hover:bg-slate-12 active:bg-slate-12 text-white dark:text-black",
			secondary: "bg-slate-6 hover:bg-slate-7 active:bg-slate-8 text-slate-11",
			ghost: "bg-transparent hover:bg-slate-3 active:bg-slate-4 text-slate-11",
			"accent-primary":
				"bg-accent-9 hover:bg-accent-10 active:bg-accent-11 text-accent-1",
			"accent-secondary":
				"bg-accent-5 hover:bg-accent-6 active:bg-accent-7 text-accent-10",
			"accent-ghost":
				"bg-transparent hover:bg-accent-3 active:bg-accent-4 text-accent-10",
		},
		size: {
			sm: "rounded-lg text-[11px] h-[30px] px-3 py-2",
			md: "rounded-lg text-[13px] h-8 px-3 py-2",
			lg: "rounded-xl text-[15px] h-10 px-4 py-3",
			xl: "rounded-xl text-[17px] h-11 px-5 py-4",
		},
		isRound: {
			true: "rounded-full",
		},
		align: {
			left: "justify-start",
			center: "justify-center",
			right: "justify-end",
			between: "justify-between",
			around: "justify-around",
		},
	},
	defaultVariants: {
		size: "md",
		align: "center",
		intent: "primary",
		isRound: false,
	},
});

type TailwindButtonVariants = VariantProps<typeof baseButton>;

interface TailwindButtonProps extends TailwindButtonVariants {
	children: React.ReactNode;
	isLoading?: boolean;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

// TODO: lacks dynamic tones variants

export const TailwindButton = ({
	children,
	isLoading = false,
	leftIcon,
	rightIcon,
	...props
}: TailwindButtonProps) => {
	return (
		<button className={baseButton({ ...props })}>
			{leftIcon && (
				<div
					style={{
						opacity: isLoading ? 0 : 1,
					}}
				>
					{leftIcon}
				</div>
			)}
			{/*loading*/}
			{isLoading && (
				<div className="absolute flex items-center justify-center inset-0">
					<AutoSpinner />
				</div>
			)}
			<div
				style={{
					opacity: isLoading ? 0 : 1,
				}}
			>
				{children}
			</div>
			{rightIcon && (
				<div
					style={{
						opacity: isLoading ? 0 : 1,
					}}
				>
					{rightIcon}
				</div>
			)}
		</button>
	);
};



const demoButton = tv({
  slots: {
    base: "inline-flex items-center rounded-full bg-[#3ceaaa]",
    children: "font-medium leading-[140%] inline-block text-[14px] text-center"
  },
  variants: {
    size: {
      sm: {base: "px-4 py-2",
          
          children: "px-2.5"
          },
      md: {base: "px-4 py-2.5",
                    children: "px-2.5"
},
      lg: {base: "px-6 py-3",
                              children: "px-1.5"
},
      xl: {base:"px-6 py-4",
                                        children: "px-1.5"
}
    }
  },
  defaultVariants: {
    size: "md"
}
})

type DemoButtonVariants = VariantProps<typeof demoButton>;

export const DemoButton = (props: DemoButtonVariants) => {
const { base, children } = demoButton(props);
	return (
		<button className={base()}>
			<div className={children()}>
				Enable
			</div>
		</button>
	);
};

  
TailwindButton.DemoButton = DemoButton;


const secondaryButton = tv({
  base: "inline-flex items-center rounded-full bg-black",
  variants: {
    size: {
      sm: "px-4 py-2",
      md: "px-4 py-2.5",
      lg: "px-6 py-3",
      xl: "px-6 py-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type SecondaryButtonVariants = VariantProps<typeof secondaryButton>;

const SecondaryButton = (props: SecondaryButtonVariants) => {
  return (
    <div className={secondaryButton(props)}>
      <div className="px-2.5 py-1 text-white font-medium text-sm text-center leading-snug">
        Button
      </div>
    </div>
  );
};
TailwindButton.SecondaryButton = SecondaryButton;
