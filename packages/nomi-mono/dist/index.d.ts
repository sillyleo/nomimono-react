import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config';
import React$1 from 'react';
import * as CSS from 'csstype';

declare const buttonStyle: tailwind_variants.TVReturnType<{
    rounded: {
        s: {
            base: string;
        };
        m: {
            base: string;
        };
        l: {
            base: string;
        };
        full: {
            base: string;
        };
    };
    disabled: {
        true: {
            base: string;
        };
    };
    isLoading: {
        true: {};
    };
    intent: {
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        outline: {
            base: string;
        };
        text: {
            base: string;
        };
    };
    size: {
        xs: {
            base: string;
            content: string;
        };
        sm: {
            base: string;
            content: string;
        };
        md: {
            base: string;
            content: string;
        };
        lg: {
            base: string;
            content: string;
        };
    };
}, unknown, {
    base: string;
    content: string;
    icon: string;
    spinner: string;
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    rounded: {
        s: {
            base: string;
        };
        m: {
            base: string;
        };
        l: {
            base: string;
        };
        full: {
            base: string;
        };
    };
    disabled: {
        true: {
            base: string;
        };
    };
    isLoading: {
        true: {};
    };
    intent: {
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        outline: {
            base: string;
        };
        text: {
            base: string;
        };
    };
    size: {
        xs: {
            base: string;
            content: string;
        };
        sm: {
            base: string;
            content: string;
        };
        md: {
            base: string;
            content: string;
        };
        lg: {
            base: string;
            content: string;
        };
    };
}, unknown>>;
type ButtonVariants = VariantProps<typeof buttonStyle>;
interface ButtonProps extends ButtonVariants {
    children: React$1.ReactNode;
    leftIcon?: React$1.ReactNode;
    rightIcon?: React$1.ReactNode;
}
declare const Button: (props: ButtonProps) => JSX.Element;

declare const iconButtonStyle: tailwind_variants.TVReturnType<{
    rounded: {
        s: {
            base: string;
        };
        m: {
            base: string;
        };
        l: {
            base: string;
        };
        full: {
            base: string;
        };
    };
    disabled: {
        true: {
            base: string;
        };
    };
    isLoading: {
        true: {};
    };
    intent: {
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        outline: {
            base: string;
        };
        text: {
            base: string;
        };
    };
    size: {
        xs: {
            base: string;
            icon: string;
        };
        sm: {
            base: string;
            icon: string;
        };
        md: {
            base: string;
            icon: string;
        };
        lg: {
            base: string;
            icon: string;
        };
        xl: {
            base: string;
            icon: string;
        };
    };
}, unknown, {
    base: string;
    icon: string;
    spinner: string;
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    rounded: {
        s: {
            base: string;
        };
        m: {
            base: string;
        };
        l: {
            base: string;
        };
        full: {
            base: string;
        };
    };
    disabled: {
        true: {
            base: string;
        };
    };
    isLoading: {
        true: {};
    };
    intent: {
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        outline: {
            base: string;
        };
        text: {
            base: string;
        };
    };
    size: {
        xs: {
            base: string;
            icon: string;
        };
        sm: {
            base: string;
            icon: string;
        };
        md: {
            base: string;
            icon: string;
        };
        lg: {
            base: string;
            icon: string;
        };
        xl: {
            base: string;
            icon: string;
        };
    };
}, unknown>>;
type ComponentVariant = VariantProps<typeof iconButtonStyle>;
interface IconButtonProps extends ComponentVariant {
    children: React.ReactNode;
    iconName?: string;
    iconStyle?: "outline" | "solid" | "mini";
}
declare const IconButton: (props: IconButtonProps) => JSX.Element;

declare const textStyle: tailwind_variants.TVReturnType<{
    size: {
        "display-l": string;
        "display-m": string;
        "display-s": string;
        "heading-l": string;
        "heading-m": string;
        "heading-s": string;
        "title-l": string;
        "title-m": string;
        "title-s": string;
        "title-xs": string;
        "body-l": string;
        "body-m": string;
        "body-s": string;
        "body-xs": string;
    };
}, unknown, undefined, undefined, "font-body text-neutral-6 dark:text-dark-neutral-6", tailwind_variants_dist_config.TVConfig<{
    size: {
        "display-l": string;
        "display-m": string;
        "display-s": string;
        "heading-l": string;
        "heading-m": string;
        "heading-s": string;
        "title-l": string;
        "title-m": string;
        "title-s": string;
        "title-xs": string;
        "body-l": string;
        "body-m": string;
        "body-s": string;
        "body-xs": string;
    };
}, unknown>>;
type TextVariants = VariantProps<typeof textStyle>;
interface TextProps extends TextVariants {
    children: React$1.ReactNode;
    className?: string;
}
declare const Text: (props: TextProps) => JSX.Element;

interface HeroIconProps {
    name?: string;
    boxSize?: CSS.Properties["width"];
    iconStyle?: "outline" | "solid" | "mini";
}
declare function HeroIcon({ name, iconStyle, boxSize, ...props }: HeroIconProps): JSX.Element;

interface HeroIconOneProps {
    name?: string;
    boxSize?: string;
}
declare const HeroIconOne: ({ name, boxSize, ...props }: HeroIconOneProps) => JSX.Element;

interface IconProps {
    name: string;
    color?: string;
    size?: number;
    strokeWidth?: number;
    fill?: string;
    boxSize?: CSS.Properties["width"];
    className?: string;
}
declare const LucideIcon: ({ name, color, size, boxSize, fill, strokeWidth, className, ...props }: IconProps) => JSX.Element;

declare function FixedSizeSpinner(props: React$1.SVGProps<SVGSVGElement>): JSX.Element;
interface SpinnerProps extends React$1.SVGProps<SVGSVGElement> {
    /**
     * The size of the spinner. Defaults to 100% of the parent element.
     * */
    size?: string | number;
}
declare const Spinner: (props: SpinnerProps) => JSX.Element;

export { Button, FixedSizeSpinner, HeroIcon, HeroIconOne, IconButton, LucideIcon, Spinner, Text };
