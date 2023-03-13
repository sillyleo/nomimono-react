import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import react from 'react';
import * as Stitches from '@stitches/react';

declare const config: {
    prefix: "";
    media: {
        sm: "(min-width: 480px)";
        md: "(min-width: 768px)";
        lg: "(min-width: 1024px)";
        xl: "(min-width: 1280px)";
        "2xl": "(min-width: 1536px)";
    };
    theme: {
        colors: {
            [x: string]: any;
        };
        space: {
            "0": string;
            "1": string;
            "2": string;
            "3": string;
            "4": string;
            "5": string;
            "6": string;
            "7": string;
            "8": string;
            "9": string;
            "10": string;
            "11": string;
            "12": string;
            "14": string;
            "16": string;
            "20": string;
            "24": string;
            "28": string;
            "32": string;
            "36": string;
            "40": string;
            "44": string;
            "48": string;
            "52": string;
            "56": string;
            "60": string;
            "64": string;
            "72": string;
            "80": string;
            "96": string;
            px: string;
            "100%": string;
        };
        sizes: {
            "0": string;
            "1": string;
            "2": string;
            "3": string;
            "4": string;
            "5": string;
            "6": string;
            "7": string;
            "8": string;
            "9": string;
            "10": string;
            "11": string;
            "12": string;
            "14": string;
            "16": string;
            "20": string;
            "24": string;
            "28": string;
            "32": string;
            "36": string;
            "40": string;
            "44": string;
            "48": string;
            "52": string;
            "56": string;
            "60": string;
            "64": string;
            "72": string;
            "80": string;
            "96": string;
            px: string;
            "100%": string;
        };
        fontSizes: {
            "6xl": string;
            "5xl": string;
            "4xl": string;
            "3xl": string;
            "2xl": string;
            xl: string;
            lg: string;
            base: string;
            sm: string;
            xs: string;
        };
        fonts: {
            heading: string;
            branding: string;
            body: string;
        };
        fontWeights: {
            normal: number;
            medium: number;
            bold: number;
            extrabold: number;
        };
        lineHeights: {
            heading: string;
            body: string;
            tight: string;
            single: string;
        };
        letterSpacings: {
            default: string;
            increased: string;
            decreased: string;
        };
        borderWidths: {
            "0": string;
            "1": string;
            "2": string;
            "4": string;
            "8": string;
            DEFAULT: string;
        };
        borderStyles: {
            solid: string;
            dashed: string;
        };
        radii: {
            none: string;
            sm: string;
            DEFAULT: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            full: string;
        };
        zIndices: unknown;
        transitions: {
            fast: string;
            slow: string;
        };
        shadows: {
            1: string;
            2: string;
            3: string;
            subtle: string;
        };
    };
    themeMap: {
        gap: "space";
        gridGap: "space";
        columnGap: "space";
        gridColumnGap: "space";
        rowGap: "space";
        gridRowGap: "space";
        inset: "space";
        insetBlock: "space";
        insetBlockEnd: "space";
        insetBlockStart: "space";
        insetInline: "space";
        insetInlineEnd: "space";
        insetInlineStart: "space";
        margin: "space";
        marginTop: "space";
        marginRight: "space";
        marginBottom: "space";
        marginLeft: "space";
        marginBlock: "space";
        marginBlockEnd: "space";
        marginBlockStart: "space";
        marginInline: "space";
        marginInlineEnd: "space";
        marginInlineStart: "space";
        padding: "space";
        paddingTop: "space";
        paddingRight: "space";
        paddingBottom: "space";
        paddingLeft: "space";
        paddingBlock: "space";
        paddingBlockEnd: "space";
        paddingBlockStart: "space";
        paddingInline: "space";
        paddingInlineEnd: "space";
        paddingInlineStart: "space";
        scrollMargin: "space";
        scrollMarginTop: "space";
        scrollMarginRight: "space";
        scrollMarginBottom: "space";
        scrollMarginLeft: "space";
        scrollMarginBlock: "space";
        scrollMarginBlockEnd: "space";
        scrollMarginBlockStart: "space";
        scrollMarginInline: "space";
        scrollMarginInlineEnd: "space";
        scrollMarginInlineStart: "space";
        scrollPadding: "space";
        scrollPaddingTop: "space";
        scrollPaddingRight: "space";
        scrollPaddingBottom: "space";
        scrollPaddingLeft: "space";
        scrollPaddingBlock: "space";
        scrollPaddingBlockEnd: "space";
        scrollPaddingBlockStart: "space";
        scrollPaddingInline: "space";
        scrollPaddingInlineEnd: "space";
        scrollPaddingInlineStart: "space";
        top: "space";
        right: "space";
        bottom: "space";
        left: "space";
        fontSize: "fontSizes";
        background: "colors";
        backgroundColor: "colors";
        backgroundImage: "colors";
        borderImage: "colors";
        border: "colors";
        borderBlock: "colors";
        borderBlockEnd: "colors";
        borderBlockStart: "colors";
        borderBottom: "colors";
        borderBottomColor: "colors";
        borderColor: "colors";
        borderInline: "colors";
        borderInlineEnd: "colors";
        borderInlineStart: "colors";
        borderLeft: "colors";
        borderLeftColor: "colors";
        borderRight: "colors";
        borderRightColor: "colors";
        borderTop: "colors";
        borderTopColor: "colors";
        caretColor: "colors";
        color: "colors";
        columnRuleColor: "colors";
        outline: "colors";
        outlineColor: "colors";
        fill: "colors";
        stroke: "colors";
        textDecorationColor: "colors";
        fontFamily: "fonts";
        fontWeight: "fontWeights";
        lineHeight: "lineHeights";
        letterSpacing: "letterSpacings";
        blockSize: "sizes";
        minBlockSize: "sizes";
        maxBlockSize: "sizes";
        inlineSize: "sizes";
        minInlineSize: "sizes";
        maxInlineSize: "sizes";
        width: "sizes";
        minWidth: "sizes";
        maxWidth: "sizes";
        height: "sizes";
        minHeight: "sizes";
        maxHeight: "sizes";
        flexBasis: "sizes";
        gridTemplateColumns: "sizes";
        gridTemplateRows: "sizes";
        borderWidth: "borderWidths";
        borderTopWidth: "borderWidths";
        borderLeftWidth: "borderWidths";
        borderRightWidth: "borderWidths";
        borderBottomWidth: "borderWidths";
        borderStyle: "borderStyles";
        borderTopStyle: "borderStyles";
        borderLeftStyle: "borderStyles";
        borderRightStyle: "borderStyles";
        borderBottomStyle: "borderStyles";
        borderRadius: "radii";
        borderTopLeftRadius: "radii";
        borderTopRightRadius: "radii";
        borderBottomRightRadius: "radii";
        borderBottomLeftRadius: "radii";
        boxShadow: "shadows";
        textShadow: "shadows";
        transition: "transitions";
        zIndex: "zIndices";
    };
    utils: {
        m: (value: any) => {
            margin: any;
        };
        mr: (value: any) => {
            marginRight: any;
        };
        mb: (value: any) => {
            marginBottom: any;
        };
        ml: (value: any) => {
            marginLeft: any;
        };
        mx: (value: any) => {
            marginLeft: any;
            marginRight: any;
        };
        my: (value: any) => {
            marginTop: any;
            marginBottom: any;
        };
        p: (value: any) => {
            padding: any;
        };
        pt: (value: any) => {
            paddingTop: any;
        };
        pr: (value: any) => {
            paddingRight: any;
        };
        pb: (value: any) => {
            paddingBottom: any;
        };
        pl: (value: any) => {
            paddingLeft: any;
        };
        px: (value: any) => {
            paddingLeft: any;
            paddingRight: any;
        };
        py: (value: any) => {
            paddingTop: any;
            paddingBottom: any;
        };
        flex: (value: any) => {
            display: string;
            flex: any;
        };
        grid: (value: any) => {
            display: string;
            grid: any;
        };
        boxSize: (value: any) => {
            width: any;
            height: any;
        };
        w: (value: any) => {
            width: any;
        };
        h: (value: any) => {
            height: any;
        };
        br: (value: any) => {
            borderRadius: any;
        };
        bg: (value: any) => {
            backgroundColor: any;
        };
        borderTone1: (value: string) => {
            borderColor: string;
        };
        borderTone2: (value: string) => {
            borderColor: string;
        };
        borderTone3: (value: string) => {
            borderColor: string;
        };
        borderTone4: (value: string) => {
            borderColor: string;
        };
        borderTone5: (value: string) => {
            borderColor: string;
        };
        borderTone6: (value: string) => {
            borderColor: string;
        };
        borderTone7: (value: string) => {
            borderColor: string;
        };
        borderTone8: (value: string) => {
            borderColor: string;
        };
        borderTone9: (value: string) => {
            borderColor: string;
        };
        borderTone10: (value: string) => {
            borderColor: string;
        };
        borderTone11: (value: string) => {
            borderColor: string;
        };
        borderTone12: (value: string) => {
            borderColor: string;
        };
        textTone1: (value: string) => {
            color: string;
        };
        textTone2: (value: string) => {
            color: string;
        };
        textTone3: (value: string) => {
            color: string;
        };
        textTone4: (value: string) => {
            color: string;
        };
        textTone5: (value: string) => {
            color: string;
        };
        textTone6: (value: string) => {
            color: string;
        };
        textTone7: (value: string) => {
            color: string;
        };
        textTone8: (value: string) => {
            color: string;
        };
        textTone9: (value: string) => {
            color: string;
        };
        textTone10: (value: string) => {
            color: string;
        };
        textTone11: (value: string) => {
            color: string;
        };
        textTone12: (value: string) => {
            color: string;
        };
        bgTone1: (value: string) => {
            backgroundColor: string;
        };
        bgTone2: (value: string) => {
            backgroundColor: string;
        };
        bgTone3: (value: string) => {
            backgroundColor: string;
        };
        bgTone4: (value: string) => {
            backgroundColor: string;
        };
        bgTone5: (value: string) => {
            backgroundColor: string;
        };
        bgTone6: (value: string) => {
            backgroundColor: string;
        };
        bgTone7: (value: string) => {
            backgroundColor: string;
        };
        bgTone8: (value: string) => {
            backgroundColor: string;
        };
        bgTone9: (value: string) => {
            backgroundColor: string;
        };
        bgTone10: (value: string) => {
            backgroundColor: string;
        };
        bgTone11: (value: string) => {
            backgroundColor: string;
        };
        bgTone12: (value: string) => {
            backgroundColor: string;
        };
    };
};
type CSS = Stitches.CSS<typeof config>;

declare const BaseButton: _stitches_react_types_styled_component.StyledComponent<"button", {
    size?: "sm" | "md" | "lg" | "xl" | undefined;
    align?: "left" | "right" | "center" | "between" | "around" | undefined;
}, {
    sm: "(min-width: 480px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 1024px)";
    xl: "(min-width: 1280px)";
    "2xl": "(min-width: 1536px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 480px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 1024px)";
    xl: "(min-width: 1280px)";
    "2xl": "(min-width: 1536px)";
}, {
    colors: {
        [x: string]: any;
    };
    space: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "14": string;
        "16": string;
        "20": string;
        "24": string;
        "28": string;
        "32": string;
        "36": string;
        "40": string;
        "44": string;
        "48": string;
        "52": string;
        "56": string;
        "60": string;
        "64": string;
        "72": string;
        "80": string;
        "96": string;
        px: string;
        "100%": string;
    };
    sizes: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "14": string;
        "16": string;
        "20": string;
        "24": string;
        "28": string;
        "32": string;
        "36": string;
        "40": string;
        "44": string;
        "48": string;
        "52": string;
        "56": string;
        "60": string;
        "64": string;
        "72": string;
        "80": string;
        "96": string;
        px: string;
        "100%": string;
    };
    fontSizes: {
        "6xl": string;
        "5xl": string;
        "4xl": string;
        "3xl": string;
        "2xl": string;
        xl: string;
        lg: string;
        base: string;
        sm: string;
        xs: string;
    };
    fonts: {
        heading: string;
        branding: string;
        body: string;
    };
    fontWeights: {
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    lineHeights: {
        heading: string;
        body: string;
        tight: string;
        single: string;
    };
    letterSpacings: {
        default: string;
        increased: string;
        decreased: string;
    };
    borderWidths: {
        "0": string;
        "1": string;
        "2": string;
        "4": string;
        "8": string;
        DEFAULT: string;
    };
    borderStyles: {
        solid: string;
        dashed: string;
    };
    radii: {
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        full: string;
    };
    zIndices: unknown;
    transitions: {
        fast: string;
        slow: string;
    };
    shadows: {
        1: string;
        2: string;
        3: string;
        subtle: string;
    };
}, {
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    width: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    height: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    m: (value: any) => {
        margin: any;
    };
    mr: (value: any) => {
        marginRight: any;
    };
    mb: (value: any) => {
        marginBottom: any;
    };
    ml: (value: any) => {
        marginLeft: any;
    };
    mx: (value: any) => {
        marginLeft: any;
        marginRight: any;
    };
    my: (value: any) => {
        marginTop: any;
        marginBottom: any;
    };
    p: (value: any) => {
        padding: any;
    };
    pt: (value: any) => {
        paddingTop: any;
    };
    pr: (value: any) => {
        paddingRight: any;
    };
    pb: (value: any) => {
        paddingBottom: any;
    };
    pl: (value: any) => {
        paddingLeft: any;
    };
    px: (value: any) => {
        paddingLeft: any;
        paddingRight: any;
    };
    py: (value: any) => {
        paddingTop: any;
        paddingBottom: any;
    };
    flex: (value: any) => {
        display: string;
        flex: any;
    };
    grid: (value: any) => {
        display: string;
        grid: any;
    };
    boxSize: (value: any) => {
        width: any;
        height: any;
    };
    w: (value: any) => {
        width: any;
    };
    h: (value: any) => {
        height: any;
    };
    br: (value: any) => {
        borderRadius: any;
    };
    bg: (value: any) => {
        backgroundColor: any;
    };
    borderTone1: (value: string) => {
        borderColor: string;
    };
    borderTone2: (value: string) => {
        borderColor: string;
    };
    borderTone3: (value: string) => {
        borderColor: string;
    };
    borderTone4: (value: string) => {
        borderColor: string;
    };
    borderTone5: (value: string) => {
        borderColor: string;
    };
    borderTone6: (value: string) => {
        borderColor: string;
    };
    borderTone7: (value: string) => {
        borderColor: string;
    };
    borderTone8: (value: string) => {
        borderColor: string;
    };
    borderTone9: (value: string) => {
        borderColor: string;
    };
    borderTone10: (value: string) => {
        borderColor: string;
    };
    borderTone11: (value: string) => {
        borderColor: string;
    };
    borderTone12: (value: string) => {
        borderColor: string;
    };
    textTone1: (value: string) => {
        color: string;
    };
    textTone2: (value: string) => {
        color: string;
    };
    textTone3: (value: string) => {
        color: string;
    };
    textTone4: (value: string) => {
        color: string;
    };
    textTone5: (value: string) => {
        color: string;
    };
    textTone6: (value: string) => {
        color: string;
    };
    textTone7: (value: string) => {
        color: string;
    };
    textTone8: (value: string) => {
        color: string;
    };
    textTone9: (value: string) => {
        color: string;
    };
    textTone10: (value: string) => {
        color: string;
    };
    textTone11: (value: string) => {
        color: string;
    };
    textTone12: (value: string) => {
        color: string;
    };
    bgTone1: (value: string) => {
        backgroundColor: string;
    };
    bgTone2: (value: string) => {
        backgroundColor: string;
    };
    bgTone3: (value: string) => {
        backgroundColor: string;
    };
    bgTone4: (value: string) => {
        backgroundColor: string;
    };
    bgTone5: (value: string) => {
        backgroundColor: string;
    };
    bgTone6: (value: string) => {
        backgroundColor: string;
    };
    bgTone7: (value: string) => {
        backgroundColor: string;
    };
    bgTone8: (value: string) => {
        backgroundColor: string;
    };
    bgTone9: (value: string) => {
        backgroundColor: string;
    };
    bgTone10: (value: string) => {
        backgroundColor: string;
    };
    bgTone11: (value: string) => {
        backgroundColor: string;
    };
    bgTone12: (value: string) => {
        backgroundColor: string;
    };
}>>;
interface ButtonProps extends react.ComponentProps<typeof BaseButton> {
    size?: "sm" | "md" | "lg" | "xl";
    align?: "left" | "center" | "right" | "between" | "around";
    tone?: string;
    intent?: "primary" | "secondary" | "ghost";
    leftIcon?: react.ReactNode;
    rightIcon?: react.ReactNode;
    isLoading?: boolean;
    children?: react.ReactNode;
    depth?: "0" | "1" | "2" | "3";
    css?: CSS;
    isDark?: boolean;
}
declare const _default: react.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;

export { _default as Button };
