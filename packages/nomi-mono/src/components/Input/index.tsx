import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

// also used in IconInput
export const inputStyle = tv({
  base: "w-full border rounded-s px-3 border-neutral-4 bg-neutral-0 dark:border-dark-neutral-4 dark:bg-dark-neutral-0 focus:outline-none focus:border-neutral-7 focus:ring-1 focus:ring-neutral-7 hover:border-neutral-7",
  variants: {
    error: {
      true: "text-support-red border-support-red border focus:border-support-red focus:ring-support-red hover:border-support-red"
    },
    disabled: {
      true: "placeholder:text-neutral-4 border-neutral-4 hover:border-neutral-4 cursor-not-allowed"
    },
    size: {
      sm: "text-1 h-10",
      md: "text-2 h-12",
      lg: "text-2 h-14"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    asBackdrop: {
      true: "inset-0 absolute"
    }
  },
  defaultVariants: {
    size: "sm",
    error: false,
    disabled: false
  }
});

type InputVariants = VariantProps<typeof inputStyle>;

export interface InputProps extends InputVariants {
  // custom props here
  children: React.ReactNode;
  className?: string;
  placeholder?: string;
}

export const Input = (props: InputProps) => {
  const {
    children,
    className,
    disabled,
    placeholder = "Input"
  } = props;


  return (
    <input
      placeholder={placeholder}
      disabled={disabled}
      className={
        inputStyle({ ...props, className: className })
      } />
  );
};