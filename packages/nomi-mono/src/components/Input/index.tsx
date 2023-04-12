import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

// also used in IconInput
export const inputStyle = tv({
  base: "w-full border border-neutral-4 px-3 py-2 rounded-s bg-neutral-6",
  variants: {
    size: {
      sm: "text-1 h-10",
      md: "text-2 h-12",
      lg: "text-2 h-14"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

type InputVariants = VariantProps<typeof inputStyle>;

export interface InputProps extends InputVariants {
  // custom props here
  children: React.ReactNode;
  className?: string;
}

export const Input = (props: InputProps) => {
  const {
    children,
    className
  } = props;


  return (
    <input className={
      inputStyle({ ...props, className: className })
    } />
  );
};