import { tv, type VariantProps } from 'tailwind-variants'
import { Box } from "../Box";
import { AutoSpinner } from "../Spinner";
import React from "react";

const baseButton = tv({
  base: "border-none select-none relative disabled:cursor-not-allowed disabled:opacity-75 active:translate-y-[1px] transition linear overflow-hidden font-heading font-bold cursor-pointer inline-flex gap-2 items-center",
  variants: {
    intent: {
      primary: "bg-slate-12 hover:bg-slate-12 active:bg-slate-12 text-white dark:text-black",
      secondary: "bg-slate-6 hover:bg-slate-7 active:bg-slate-8 text-slate-11",
      ghost: "bg-transparent hover:bg-slate-3 active:bg-slate-4 text-slate-11",
      "accent-primary": "bg-accent-9 hover:bg-accent-10 active:bg-accent-11 text-accent-1",
      "accent-secondary": "bg-accent-5 hover:bg-accent-6 active:bg-accent-7 text-accent-10",
      "accent-ghost": "bg-transparent hover:bg-accent-3 active:bg-accent-4 text-accent-10",
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
			around: "justify-around"
		}
  },
  defaultVariants: {
    size: 'md',
    align: 'center',
    intent: 'primary',
    isRound: true,
  },
})


type TailwindButtonVariants = VariantProps<typeof baseButton>

interface TailwindButtonProps extends TailwindButtonVariants {
  children: React.ReactNode;
  isLoading?: boolean;
  }

export const TailwindButton = ({
  children,
  isLoading = false,
  ...props
}: TailwindButtonProps) => {
  return <button className={baseButton({...props})}>



    {/*loading*/}
      {isLoading && (
        <div className="absolute flex items-center justify-center inset-0">
          <AutoSpinner />
        </div>
      )}
    <div style={{
      opacity: isLoading ? 0 : 1,
    }}>{children}</div>

  </button>;
};