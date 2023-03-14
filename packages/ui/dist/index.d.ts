import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import * as React from 'react';
import React__default from 'react';
import * as _stitches_react_types_theme from '@stitches/react/types/theme';
import * as _stitches_react_types_css from '@stitches/react/types/css';
import * as _stitches_react_types_stitches from '@stitches/react/types/stitches';
import * as _stitches_react_types_util from '@stitches/react/types/util';
import * as Stitches from '@stitches/react';
import * as RadixColors from '@radix-ui/colors';

declare const Radix: typeof RadixColors;
declare const styled: <Type extends _stitches_react_types_util.Function | keyof JSX.IntrinsicElements | React.ComponentType<any>, Composers extends (string | _stitches_react_types_util.Function | React.ComponentType<any> | {
    [name: string]: unknown;
})[], CSS_1 = _stitches_react_types_css_util.CSS<{
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
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | _stitches_react_types_util.Function | React.ComponentType<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : _stitches_react_types_util.WideObject) & {
        css: CSS_1;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : _stitches_react_types_util.WideObject) | undefined;
} & CSS_1 & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; } : never); }) => _stitches_react_types_styled_component.StyledComponent<Type, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
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
declare const css: <Composers extends (string | _stitches_react_types_util.Function | React.JSXElementConstructor<any> | React.ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS_1 = _stitches_react_types_css_util.CSS<{
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
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | _stitches_react_types_util.Function | React.JSXElementConstructor<any> | React.ExoticComponent<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : _stitches_react_types_util.WideObject) & {
        css: CSS_1;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : _stitches_react_types_util.WideObject) | undefined;
} & CSS_1 & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; } : never); }) => _stitches_react_types_styled_component.CssComponent<_stitches_react_types_styled_component.StyledComponentType<Composers>, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    sm: "(min-width: 480px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 1024px)";
    xl: "(min-width: 1280px)";
    "2xl": "(min-width: 1536px)";
}, CSS_1>;
declare const globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? _stitches_react_types_css.AtRule.FontFace | _stitches_react_types_css.AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: _stitches_react_types_css_util.CSS<{
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
    }>;
} : K extends `@property ${string}` ? _stitches_react_types_css.AtRule.Property : _stitches_react_types_css_util.CSS<{
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
}>; })[]) => () => string;
declare const keyframes: (style: {
    [offset: string]: _stitches_react_types_css_util.CSS<{
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
    }>;
}) => {
    (): string;
    name: string;
};
declare const theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        [x: string]: _stitches_react_types_theme.Token<string, string, "colors", "">;
    };
    space: {
        0: _stitches_react_types_theme.Token<"0", string, "space", "">;
        1: _stitches_react_types_theme.Token<"1", string, "space", "">;
        2: _stitches_react_types_theme.Token<"2", string, "space", "">;
        3: _stitches_react_types_theme.Token<"3", string, "space", "">;
        4: _stitches_react_types_theme.Token<"4", string, "space", "">;
        5: _stitches_react_types_theme.Token<"5", string, "space", "">;
        6: _stitches_react_types_theme.Token<"6", string, "space", "">;
        7: _stitches_react_types_theme.Token<"7", string, "space", "">;
        8: _stitches_react_types_theme.Token<"8", string, "space", "">;
        9: _stitches_react_types_theme.Token<"9", string, "space", "">;
        10: _stitches_react_types_theme.Token<"10", string, "space", "">;
        11: _stitches_react_types_theme.Token<"11", string, "space", "">;
        12: _stitches_react_types_theme.Token<"12", string, "space", "">;
        14: _stitches_react_types_theme.Token<"14", string, "space", "">;
        16: _stitches_react_types_theme.Token<"16", string, "space", "">;
        20: _stitches_react_types_theme.Token<"20", string, "space", "">;
        24: _stitches_react_types_theme.Token<"24", string, "space", "">;
        28: _stitches_react_types_theme.Token<"28", string, "space", "">;
        32: _stitches_react_types_theme.Token<"32", string, "space", "">;
        36: _stitches_react_types_theme.Token<"36", string, "space", "">;
        40: _stitches_react_types_theme.Token<"40", string, "space", "">;
        44: _stitches_react_types_theme.Token<"44", string, "space", "">;
        48: _stitches_react_types_theme.Token<"48", string, "space", "">;
        52: _stitches_react_types_theme.Token<"52", string, "space", "">;
        56: _stitches_react_types_theme.Token<"56", string, "space", "">;
        60: _stitches_react_types_theme.Token<"60", string, "space", "">;
        64: _stitches_react_types_theme.Token<"64", string, "space", "">;
        72: _stitches_react_types_theme.Token<"72", string, "space", "">;
        80: _stitches_react_types_theme.Token<"80", string, "space", "">;
        96: _stitches_react_types_theme.Token<"96", string, "space", "">;
        px: _stitches_react_types_theme.Token<"px", string, "space", "">;
        "100%": _stitches_react_types_theme.Token<"100%", string, "space", "">;
    };
    sizes: {
        0: _stitches_react_types_theme.Token<"0", string, "sizes", "">;
        1: _stitches_react_types_theme.Token<"1", string, "sizes", "">;
        2: _stitches_react_types_theme.Token<"2", string, "sizes", "">;
        3: _stitches_react_types_theme.Token<"3", string, "sizes", "">;
        4: _stitches_react_types_theme.Token<"4", string, "sizes", "">;
        5: _stitches_react_types_theme.Token<"5", string, "sizes", "">;
        6: _stitches_react_types_theme.Token<"6", string, "sizes", "">;
        7: _stitches_react_types_theme.Token<"7", string, "sizes", "">;
        8: _stitches_react_types_theme.Token<"8", string, "sizes", "">;
        9: _stitches_react_types_theme.Token<"9", string, "sizes", "">;
        10: _stitches_react_types_theme.Token<"10", string, "sizes", "">;
        11: _stitches_react_types_theme.Token<"11", string, "sizes", "">;
        12: _stitches_react_types_theme.Token<"12", string, "sizes", "">;
        14: _stitches_react_types_theme.Token<"14", string, "sizes", "">;
        16: _stitches_react_types_theme.Token<"16", string, "sizes", "">;
        20: _stitches_react_types_theme.Token<"20", string, "sizes", "">;
        24: _stitches_react_types_theme.Token<"24", string, "sizes", "">;
        28: _stitches_react_types_theme.Token<"28", string, "sizes", "">;
        32: _stitches_react_types_theme.Token<"32", string, "sizes", "">;
        36: _stitches_react_types_theme.Token<"36", string, "sizes", "">;
        40: _stitches_react_types_theme.Token<"40", string, "sizes", "">;
        44: _stitches_react_types_theme.Token<"44", string, "sizes", "">;
        48: _stitches_react_types_theme.Token<"48", string, "sizes", "">;
        52: _stitches_react_types_theme.Token<"52", string, "sizes", "">;
        56: _stitches_react_types_theme.Token<"56", string, "sizes", "">;
        60: _stitches_react_types_theme.Token<"60", string, "sizes", "">;
        64: _stitches_react_types_theme.Token<"64", string, "sizes", "">;
        72: _stitches_react_types_theme.Token<"72", string, "sizes", "">;
        80: _stitches_react_types_theme.Token<"80", string, "sizes", "">;
        96: _stitches_react_types_theme.Token<"96", string, "sizes", "">;
        px: _stitches_react_types_theme.Token<"px", string, "sizes", "">;
        "100%": _stitches_react_types_theme.Token<"100%", string, "sizes", "">;
    };
    fontSizes: {
        "6xl": _stitches_react_types_theme.Token<"6xl", string, "fontSizes", "">;
        "5xl": _stitches_react_types_theme.Token<"5xl", string, "fontSizes", "">;
        "4xl": _stitches_react_types_theme.Token<"4xl", string, "fontSizes", "">;
        "3xl": _stitches_react_types_theme.Token<"3xl", string, "fontSizes", "">;
        "2xl": _stitches_react_types_theme.Token<"2xl", string, "fontSizes", "">;
        xl: _stitches_react_types_theme.Token<"xl", string, "fontSizes", "">;
        lg: _stitches_react_types_theme.Token<"lg", string, "fontSizes", "">;
        base: _stitches_react_types_theme.Token<"base", string, "fontSizes", "">;
        sm: _stitches_react_types_theme.Token<"sm", string, "fontSizes", "">;
        xs: _stitches_react_types_theme.Token<"xs", string, "fontSizes", "">;
    };
    fonts: {
        heading: _stitches_react_types_theme.Token<"heading", string, "fonts", "">;
        branding: _stitches_react_types_theme.Token<"branding", string, "fonts", "">;
        body: _stitches_react_types_theme.Token<"body", string, "fonts", "">;
    };
    fontWeights: {
        normal: _stitches_react_types_theme.Token<"normal", string, "fontWeights", "">;
        medium: _stitches_react_types_theme.Token<"medium", string, "fontWeights", "">;
        bold: _stitches_react_types_theme.Token<"bold", string, "fontWeights", "">;
        extrabold: _stitches_react_types_theme.Token<"extrabold", string, "fontWeights", "">;
    };
    lineHeights: {
        heading: _stitches_react_types_theme.Token<"heading", string, "lineHeights", "">;
        body: _stitches_react_types_theme.Token<"body", string, "lineHeights", "">;
        tight: _stitches_react_types_theme.Token<"tight", string, "lineHeights", "">;
        single: _stitches_react_types_theme.Token<"single", string, "lineHeights", "">;
    };
    letterSpacings: {
        default: _stitches_react_types_theme.Token<"default", string, "letterSpacings", "">;
        increased: _stitches_react_types_theme.Token<"increased", string, "letterSpacings", "">;
        decreased: _stitches_react_types_theme.Token<"decreased", string, "letterSpacings", "">;
    };
    borderWidths: {
        0: _stitches_react_types_theme.Token<"0", string, "borderWidths", "">;
        1: _stitches_react_types_theme.Token<"1", string, "borderWidths", "">;
        2: _stitches_react_types_theme.Token<"2", string, "borderWidths", "">;
        4: _stitches_react_types_theme.Token<"4", string, "borderWidths", "">;
        8: _stitches_react_types_theme.Token<"8", string, "borderWidths", "">;
        DEFAULT: _stitches_react_types_theme.Token<"DEFAULT", string, "borderWidths", "">;
    };
    borderStyles: {
        solid: _stitches_react_types_theme.Token<"solid", string, "borderStyles", "">;
        dashed: _stitches_react_types_theme.Token<"dashed", string, "borderStyles", "">;
    };
    radii: {
        none: _stitches_react_types_theme.Token<"none", string, "radii", "">;
        sm: _stitches_react_types_theme.Token<"sm", string, "radii", "">;
        DEFAULT: _stitches_react_types_theme.Token<"DEFAULT", string, "radii", "">;
        md: _stitches_react_types_theme.Token<"md", string, "radii", "">;
        lg: _stitches_react_types_theme.Token<"lg", string, "radii", "">;
        xl: _stitches_react_types_theme.Token<"xl", string, "radii", "">;
        "2xl": _stitches_react_types_theme.Token<"2xl", string, "radii", "">;
        "3xl": _stitches_react_types_theme.Token<"3xl", string, "radii", "">;
        full: _stitches_react_types_theme.Token<"full", string, "radii", "">;
    };
    zIndices: {};
    transitions: {
        fast: _stitches_react_types_theme.Token<"fast", string, "transitions", "">;
        slow: _stitches_react_types_theme.Token<"slow", string, "transitions", "">;
    };
    shadows: {
        1: _stitches_react_types_theme.Token<"1", string, "shadows", "">;
        2: _stitches_react_types_theme.Token<"2", string, "shadows", "">;
        3: _stitches_react_types_theme.Token<"3", string, "shadows", "">;
        subtle: _stitches_react_types_theme.Token<"subtle", string, "shadows", "">;
    };
};
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
declare const stitchesDarkTheme: string & {
    className: string;
    selector: string;
} & _stitches_react_types_stitches.ThemeTokens<{
    colors: {
        [x: string]: string;
    };
}, "">;
declare const reset: () => string;
declare const brandFonts: () => string;

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
interface ButtonProps extends React__default.ComponentProps<typeof BaseButton> {
    size?: "sm" | "md" | "lg" | "xl";
    align?: "left" | "center" | "right" | "between" | "around";
    tone?: string;
    intent?: "primary" | "secondary" | "ghost";
    leftIcon?: React__default.ReactNode;
    rightIcon?: React__default.ReactNode;
    isLoading?: boolean;
    children?: React__default.ReactNode;
    depth?: "0" | "1" | "2" | "3";
    css?: CSS;
    isDark?: boolean;
}
declare const _default: React__default.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React__default.RefAttributes<HTMLButtonElement>> & {
    Adaptive: _stitches_react_types_styled_component.StyledComponent<_stitches_react_types_styled_component.StyledComponent<"button", {
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
    }>>, {}, {
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
};

declare const Text: _stitches_react_types_styled_component.StyledComponent<"div", {
    size?: "body" | "overline" | "caption" | "label" | "page-title" | "page-title2" | "title1" | "title2" | "title3" | "subtitle1" | "subtitle2" | "body-bold" | undefined;
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

declare const Box: _stitches_react_types_styled_component.StyledComponent<"div", {}, {
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

/**
 * Usage:
 * <NomiStyle>
 *  <h1>...</h1>
 *  <p>...</p>
 * </NomiStyle>
 */
declare const NomiStyle: _stitches_react_types_styled_component.StyledComponent<"div", {}, {
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
        /**
         * Usage:
         * <NomiStyle>
         *  <h1>...</h1>
         *  <p>...</p>
         * </NomiStyle>
         */
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
/**
 * Usage:
 * <div className={nomiClass}>
 *	<h1>...</h1>
 *	<p>...</p>
 * </div>
 */
declare const nomiClass: _stitches_react_types_styled_component.CssComponent<never, {}, {
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
        /**
         * Usage:
         * <NomiStyle>
         *  <h1>...</h1>
         *  <p>...</p>
         * </NomiStyle>
         */
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

export { Box, _default as Button, NomiStyle, Radix, Text, brandFonts, css, globalCss, keyframes, nomiClass, reset, stitchesDarkTheme, theme as stitchesTheme, styled };
