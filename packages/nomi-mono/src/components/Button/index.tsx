import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

const buttonStyle = tv({
  slots: {
    base: "items-center rounded-full flex",
    content: "font-medium font-body text-center",
    icon: "flex items-center justify-center w-[1em] h-[1em]"
  },
  variants: {
    disabled: {
      true: {
        base: "cursor-not-allowed"
      }
    },
    isLoading: {
      true: {
        base: "opacity-50"
      }
    },
    intent: {
      primary: {
        base: "text-neutral-6 bg-primary-500 hover:bg-primary-400"
      },
      secondary: {
        base: "text-neutral-1 bg-neutral-6 hover:bg-neutral-5"
      },
      outline: {
        base: "text-neutral-6 bg-neutral-0 hover:bg-neutral-1 outline outline-1 outline-neutral-6 hover:outline-neutral-5"
      },
      text: {
        base: "text-neutral-6 bg-transparent hover:bg-neutral-1"
      }
    },
    size: {
      xs: {
        base: "px-4 py-2",
        content: "text-1 px-2 h-5 leading-[20px]"
      },
      sm: {
        base: "px-4 py-2.5",
        content: "text-1 px-2 h-5 leading-[20px]"
      },
      md: {
        base: "px-6 py-3",
        content: "text-2 px-1.5 h-6 leading-[24px]"
      },
      lg: {
        base: "px-6 py-4",
        content: "text-2 px-1.5 h-6 leading-[24px]"
      }
    }
  },
  compoundVariants: [
    {
      size: ["xs", "sm", "md", "lg"],
      intent: "primary",
      disabled: true,
      class: {
        base: "text-neutral-5 bg-neutral-3 hover:bg-neutral-3 cursor-not-allowed"
      }
    },
    {
      size: ["xs", "sm", "md", "lg"],
      intent: "secondary",
      disabled: true,
      class: {
        base: "text-neutral-0 bg-neutral-5 hover:bg-neutral-5 cursor-not-allowed"
      }
    },
    {
      size: ["xs", "sm", "md", "lg"],
      intent: "outline",
      disabled: true,
      class: {
        base: "text-neutral-3 bg-neutral-0 hover:bg-neutral-0 cursor-not-allowed outline-neutral-3 hover:outline-neutral-3"
      }
    },
    {
      size: ["xs", "sm", "md", "lg"],
      intent: "text",
      disabled: true,
      class: {
        base: "px-2 text-neutral-3 bg-neutral-0 hover:bg-neutral-0 cursor-not-allowed"
      }
    },
    {
      size: ["xs", "sm", "md", "lg"],
      intent: "text",
      disabled: false,
      class: {
        base: "px-2"
      }
    }
  ],
  defaultVariants: {
    size: "sm",
    intent: "primary",
    disabled: false,
    isLoading: false
  }
});


type ButtonVariants = VariantProps<typeof buttonStyle>;

export interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}


export const Button = (props: ButtonProps) => {

  const {
    size,
    disabled,
    isLoading,
    intent
  } = props;

  const { base, content, icon } = buttonStyle(
    { size, disabled, isLoading, intent }
  );
  return (
    <button className={base()}>
      {props.leftIcon && <div className={icon()}>{props.leftIcon}</div>}
      <div className={content()}>
        {props.children}
      </div>
      {props.rightIcon && <div className={icon()}>{props.rightIcon}</div>}
    </button>
  );
};