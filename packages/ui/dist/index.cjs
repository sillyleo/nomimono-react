"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  AutoSpinner: () => AutoSpinner,
  BaseButton: () => BaseButton,
  Box: () => Box,
  Button: () => Button,
  Checkbox: () => Checkbox,
  Dialog: () => Dialog6,
  Display: () => Display,
  Footer: () => Footer,
  NomiStyle: () => NomiStyle_default,
  Radix: () => Radix,
  Spinner: () => Spinner,
  Stack: () => Stack,
  Text: () => Text,
  brandFonts: () => brandFonts,
  css: () => css,
  globalCss: () => globalCss,
  keyframes: () => keyframes,
  nomiClass: () => nomiClass,
  reset: () => reset,
  stitchesDarkTheme: () => stitchesDarkTheme,
  stitchesTheme: () => theme,
  styled: () => styled
});
module.exports = __toCommonJS(ui_exports);

// Button/index.tsx
var import_lodash = __toESM(require("lodash"), 1);
var import_react2 = __toESM(require("react"), 1);

// stitches.config.ts
var import_react = require("@stitches/react");

// theme.json
var theme_default = {
  brand: {
    hover: "#6DEFBF",
    primary: "#3CEAAA",
    pressed: "#33C790",
    disable: "#1E7555",
    secondary: "#03BCE4"
  },
  support: {
    red: "#F16769",
    orange: "#FFB459",
    blue: "#4EA3FE",
    purpple: "#C692E0",
    silver: "#D3D5F2",
    yellow: "#FFED70"
  },
  colors: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  borderWidth: {
    "0": "0px",
    "1": "1px",
    "2": "2px",
    "4": "4px",
    "8": "8px",
    DEFAULT: "1px"
  },
  opacity: {
    "0": "0%",
    "5": "50%",
    "10": "10%",
    "20": "20%",
    "25": "25%",
    "30": "30%",
    "40": "40%",
    "50": "50%",
    "60": "60%",
    "70": "70%",
    "75": "75%",
    "80": "80%",
    "95": "95%",
    "100": "100%"
  },
  fontFamilies: {
    heading: "Sk-Modernist",
    body: "Inter"
  },
  lineHeights: {
    heading: "110%",
    body: "150%",
    tight: "140%",
    single: "100%"
  },
  letterSpacing: {
    default: "0%",
    increased: "2%",
    decreased: "-2%"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
  },
  fontSizes: {
    "6xl": "72px",
    "5xl": "64px",
    "4xl": "56px",
    "3xl": "48px",
    "2xl": "36px",
    xl: "24px",
    lg: "18px",
    base: "16px",
    sm: "14px",
    xs: "11px"
  },
  typography: {
    "page-title": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "72px",
      letterSpacing: "-2%"
    },
    "page-title2": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "64px",
      letterSpacing: "-2%"
    },
    title1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "48px",
      letterSpacing: "-2%"
    },
    title2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "36px",
      letterSpacing: "-2%"
    },
    title3: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "24px",
      letterSpacing: "-2%"
    },
    subtitle1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "18px",
      letterSpacing: "-2%"
    },
    subtitle2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "16px",
      letterSpacing: "-2%"
    },
    overline: {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "11px",
      letterSpacing: "2%",
      textCase: "uppercase"
    },
    "body-heading": {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "18px",
      letterSpacing: "0%",
      paragraphSpacing: "1.5rem"
    },
    body: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    "body-bold": {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    label: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "140%",
      fontSize: "14px",
      letterSpacing: "0%"
    },
    caption: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "11px",
      letterSpacing: "0%"
    }
  },
  paragraphSpacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  light: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  dark: {
    tomato: {
      "1": "#1d1412",
      "2": "#2a1410",
      "3": "#3b1813",
      "4": "#481a14",
      "5": "#541c15",
      "6": "#652016",
      "7": "#7f2315",
      "8": "#a42a12",
      "9": "#e54d2e",
      "10": "#ec5e41",
      "11": "#f16a50",
      "12": "#feefec"
    },
    red: {
      "1": "#1f1315",
      "2": "#291415",
      "3": "#3c181a",
      "4": "#481a1d",
      "5": "#541b1f",
      "6": "#671e22",
      "7": "#822025",
      "8": "#aa2429",
      "9": "#e5484d",
      "10": "#f2555a",
      "11": "#ff6369",
      "12": "#feecee"
    },
    crimson: {
      "1": "#1d1418",
      "2": "#27141c",
      "3": "#3c1827",
      "4": "#481a2d",
      "5": "#541b33",
      "6": "#641d3b",
      "7": "#801d45",
      "8": "#ae1955",
      "9": "#e93d82",
      "10": "#f04f88",
      "11": "#f76190",
      "12": "#feecf4"
    },
    pink: {
      "1": "#1f121b",
      "2": "#271421",
      "3": "#3a182f",
      "4": "#451a37",
      "5": "#501b3f",
      "6": "#601d48",
      "7": "#7a1d5a",
      "8": "#a71873",
      "9": "#d6409f",
      "10": "#e34ba9",
      "11": "#f65cb6",
      "12": "#feebf7"
    },
    plum: {
      "1": "#1d131d",
      "2": "#251425",
      "3": "#341a34",
      "4": "#3e1d40",
      "5": "#48214b",
      "6": "#542658",
      "7": "#692d6f",
      "8": "#883894",
      "9": "#ab4aba",
      "10": "#bd54c6",
      "11": "#d864d8",
      "12": "#fbecfc"
    },
    purple: {
      "1": "#1b141d",
      "2": "#221527",
      "3": "#301a3a",
      "4": "#3a1e48",
      "5": "#432155",
      "6": "#4e2667",
      "7": "#5f2d84",
      "8": "#7938b2",
      "9": "#8e4ec6",
      "10": "#9d5bd2",
      "11": "#bf7af0",
      "12": "#f7ecfc"
    },
    violet: {
      "1": "#17151f",
      "2": "#1c172b",
      "3": "#251e40",
      "4": "#2c2250",
      "5": "#32275f",
      "6": "#392c72",
      "7": "#443592",
      "8": "#5842c3",
      "9": "#6e56cf",
      "10": "#7c66dc",
      "11": "#9e8cfc",
      "12": "#f1eefe"
    },
    indigo: {
      "1": "#131620",
      "2": "#15192d",
      "3": "#192140",
      "4": "#1c274f",
      "5": "#1f2c5c",
      "6": "#22346e",
      "7": "#273e89",
      "8": "#2f4eb2",
      "9": "#3e63dd",
      "10": "#5373e7",
      "11": "#849dff",
      "12": "#eef1fd"
    },
    blue: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    cyan: {
      "1": "#07191d",
      "2": "#061e24",
      "3": "#072830",
      "4": "#07303b",
      "5": "#073844",
      "6": "#064150",
      "7": "#045063",
      "8": "#00647d",
      "9": "#05a2c2",
      "10": "#00b1cc",
      "11": "#00c2d7",
      "12": "#e1f8fa"
    },
    teal: {
      "1": "#091915",
      "2": "#04201b",
      "3": "#062923",
      "4": "#07312b",
      "5": "#083932",
      "6": "#09443c",
      "7": "#0b544a",
      "8": "#0c6d62",
      "9": "#12a594",
      "10": "#10b3a3",
      "11": "#0ac5b3",
      "12": "#e1faf4"
    },
    green: {
      "1": "#0d1912",
      "2": "#0c1f17",
      "3": "#0f291e",
      "4": "#113123",
      "5": "#133929",
      "6": "#164430",
      "7": "#1b543a",
      "8": "#236e4a",
      "9": "#30a46c",
      "10": "#3cb179",
      "11": "#4cc38a",
      "12": "#e5fbeb"
    },
    grass: {
      "1": "#0d1912",
      "2": "#0f1e13",
      "3": "#132819",
      "4": "#16301d",
      "5": "#193921",
      "6": "#1d4427",
      "7": "#245530",
      "8": "#2f6e3b",
      "9": "#46a758",
      "10": "#55b467",
      "11": "#63c174",
      "12": "#e5fbeb"
    },
    brown: {
      "1": "#191513",
      "2": "#221813",
      "3": "#2e201a",
      "4": "#36261e",
      "5": "#3e2c22",
      "6": "#493528",
      "7": "#5c4332",
      "8": "#775940",
      "9": "#ad7f58",
      "10": "#bd8b60",
      "11": "#dba16e",
      "12": "#faf0e5"
    },
    orange: {
      "1": "#1f1206",
      "2": "#2b1400",
      "3": "#391a03",
      "4": "#441f04",
      "5": "#4f2305",
      "6": "#5f2a06",
      "7": "#763205",
      "8": "#943e00",
      "9": "#f76808",
      "10": "#ff802b",
      "11": "#ff8b3e",
      "12": "#feeadd"
    },
    sky: {
      "1": "#0c1820",
      "2": "#071d2a",
      "3": "#082636",
      "4": "#082d41",
      "5": "#08354c",
      "6": "#083e59",
      "7": "#064b6b",
      "8": "#005d85",
      "9": "#68ddfd",
      "10": "#8ae8ff",
      "11": "#2ec8ee",
      "12": "#eaf8ff"
    },
    mint: {
      "1": "#081917",
      "2": "#05201e",
      "3": "#052926",
      "4": "#04312c",
      "5": "#033a34",
      "6": "#01453d",
      "7": "#00564a",
      "8": "#006d5b",
      "9": "#70e1c8",
      "10": "#95f3d9",
      "11": "#25d0ab",
      "12": "#e7fcf7"
    },
    lime: {
      "1": "#141807",
      "2": "#181d08",
      "3": "#1e260d",
      "4": "#252e0f",
      "5": "#2b3711",
      "6": "#344213",
      "7": "#415215",
      "8": "#536716",
      "9": "#99d52a",
      "10": "#c4f042",
      "11": "#87be22",
      "12": "#effbdd"
    },
    yellow: {
      "1": "#1c1500",
      "2": "#221a00",
      "3": "#2c2100",
      "4": "#352800",
      "5": "#3e3000",
      "6": "#493c00",
      "7": "#594a05",
      "8": "#705e00",
      "9": "#f5d90a",
      "10": "#ffef5c",
      "11": "#f0c000",
      "12": "#fffad1"
    },
    amber: {
      "1": "#1f1300",
      "2": "#271700",
      "3": "#341c00",
      "4": "#3f2200",
      "5": "#4a2900",
      "6": "#573300",
      "7": "#693f05",
      "8": "#824e00",
      "9": "#ffb224",
      "10": "#ffcb47",
      "11": "#f1a10d",
      "12": "#fef3dd"
    },
    gold: {
      "1": "#171613",
      "2": "#1c1a15",
      "3": "#26231c",
      "4": "#2e2a21",
      "5": "#353026",
      "6": "#3e382c",
      "7": "#504737",
      "8": "#6b5d48",
      "9": "#978365",
      "10": "#a59071",
      "11": "#bfa888",
      "12": "#f7f4e7"
    },
    bronze: {
      "1": "#191514",
      "2": "#1f1917",
      "3": "#2a211f",
      "4": "#332824",
      "5": "#3b2e29",
      "6": "#453530",
      "7": "#57433c",
      "8": "#74594e",
      "9": "#a18072",
      "10": "#b08c7d",
      "11": "#cba393",
      "12": "#f9ede7"
    },
    gray: {
      "1": "#161616",
      "2": "#1c1c1c",
      "3": "#232323",
      "4": "#282828",
      "5": "#2e2e2e",
      "6": "#343434",
      "7": "#3e3e3e",
      "8": "#505050",
      "9": "#707070",
      "10": "#7e7e7e",
      "11": "#a0a0a0",
      "12": "#ededed"
    },
    mauve: {
      "1": "#161618",
      "2": "#1c1c1f",
      "3": "#232326",
      "4": "#28282c",
      "5": "#2e2e32",
      "6": "#34343a",
      "7": "#3e3e44",
      "8": "#504f57",
      "9": "#706f78",
      "10": "#7e7d86",
      "11": "#a09fa6",
      "12": "#ededef"
    },
    slate: {
      "1": "#151718",
      "2": "#1a1d1e",
      "3": "#202425",
      "4": "#26292b",
      "5": "#2b2f31",
      "6": "#313538",
      "7": "#3a3f42",
      "8": "#4c5155",
      "9": "#697177",
      "10": "#787f85",
      "11": "#9ba1a6",
      "12": "#ecedee"
    },
    sage: {
      "1": "#141716",
      "2": "#191d1b",
      "3": "#1f2421",
      "4": "#252a27",
      "5": "#2a2f2c",
      "6": "#303633",
      "7": "#393f3c",
      "8": "#4a524e",
      "9": "#66736d",
      "10": "#75817b",
      "11": "#99a29e",
      "12": "#eceeed"
    },
    olive: {
      "1": "#151715",
      "2": "#1a1d19",
      "3": "#20241f",
      "4": "#262925",
      "5": "#2b2f2a",
      "6": "#313530",
      "7": "#3b3f3a",
      "8": "#4c514b",
      "9": "#687366",
      "10": "#778175",
      "11": "#9aa299",
      "12": "#eceeec"
    },
    sand: {
      "1": "#161615",
      "2": "#1c1c1a",
      "3": "#232320",
      "4": "#282826",
      "5": "#2e2e2b",
      "6": "#353431",
      "7": "#3e3e3a",
      "8": "#51504b",
      "9": "#717069",
      "10": "#7f7e77",
      "11": "#a1a09a",
      "12": "#ededec"
    },
    accent: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    base: {
      text: "#ecedee",
      textSecondary: "#9ba1a6",
      textTertiary: "#697177",
      background: "#151718",
      backgroundSecondary: "#1a1d1e",
      backgroundTertiary: "#202425",
      pureForeground: "#FFFFFF",
      pureBackground: "black"
    }
  },
  spacing: {
    "0": "0px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "11": "2.75rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "36": "9rem",
    "40": "10rem",
    "44": "11rem",
    "48": "12rem",
    "52": "13rem",
    "56": "14rem",
    "60": "15rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "96": "24rem",
    px: "1px"
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  boxShadow: {
    sm: {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      color: "rgba(0 ,0 ,0,0.05)",
      type: "dropShadow"
    },
    DEFAULT: [
      {
        x: 0,
        y: 1,
        blur: 3,
        spread: 0,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 1,
        blur: 2,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    md: [
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 2,
        blur: 4,
        spread: -2,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    lg: [
      {
        x: 0,
        y: 10,
        blur: 15,
        spread: "03",
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -4,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    xl: [
      {
        x: 0,
        y: 20,
        blur: 25,
        spread: -5,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 8,
        blur: 10,
        spread: -6,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    "2xl": [
      {
        x: 0,
        y: 25,
        blur: 50,
        spread: -12,
        color: "rgba(0,0,0,0.25)",
        type: "dropShadow"
      }
    ],
    inner: {
      x: 0,
      y: 2,
      blur: 4,
      spread: 0,
      color: "rgba(0,0,0,0.05)",
      type: "innerShadow"
    }
  },
  tokenSetOrder: {
    "0": "global",
    "1": "light",
    "2": "dark",
    "3": "theme"
  }
};

// stitches.config.ts
var RadixColors = __toESM(require("@radix-ui/colors"), 1);
var Radix = RadixColors;
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function flattenKeys(obj, sep = "", parentKey = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? parentKey + sep + capitalize(key) : key;
    if (typeof value === "object") {
      Object.assign(acc, flattenKeys(value, sep, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
}
var lightColors = flattenKeys(theme_default.light);
var brandColors = flattenKeys(theme_default.brand);
var supportColors = flattenKeys(theme_default.support);
var darkColors = flattenKeys(theme_default.dark);
var bgToneScales = {
  bgTone1: (value) => ({
    backgroundColor: `$${value}1`
  }),
  bgTone2: (value) => ({
    backgroundColor: `$${value}2`
  }),
  bgTone3: (value) => ({
    backgroundColor: `$${value}3`
  }),
  bgTone4: (value) => ({
    backgroundColor: `$${value}4`
  }),
  bgTone5: (value) => ({
    backgroundColor: `$${value}5`
  }),
  bgTone6: (value) => ({
    backgroundColor: `$${value}6`
  }),
  bgTone7: (value) => ({
    backgroundColor: `$${value}7`
  }),
  bgTone8: (value) => ({
    backgroundColor: `$${value}8`
  }),
  bgTone9: (value) => ({
    backgroundColor: `$${value}9`
  }),
  bgTone10: (value) => ({
    backgroundColor: `$${value}10`
  }),
  bgTone11: (value) => ({
    backgroundColor: `$${value}11`
  }),
  bgTone12: (value) => ({
    backgroundColor: `$${value}12`
  })
};
var textToneScales = {
  textTone1: (value) => ({
    color: `$${value}1`
  }),
  textTone2: (value) => ({
    color: `$${value}2`
  }),
  textTone3: (value) => ({
    color: `$${value}3`
  }),
  textTone4: (value) => ({
    color: `$${value}4`
  }),
  textTone5: (value) => ({
    color: `$${value}5`
  }),
  textTone6: (value) => ({
    color: `$${value}6`
  }),
  textTone7: (value) => ({
    color: `$${value}7`
  }),
  textTone8: (value) => ({
    color: `$${value}8`
  }),
  textTone9: (value) => ({
    color: `$${value}9`
  }),
  textTone10: (value) => ({
    color: `$${value}10`
  }),
  textTone11: (value) => ({
    color: `$${value}11`
  }),
  textTone12: (value) => ({
    color: `$${value}12`
  })
};
var borderToneScales = {
  borderTone1: (value) => ({
    borderColor: `$${value}1`
  }),
  borderTone2: (value) => ({
    borderColor: `$${value}2`
  }),
  borderTone3: (value) => ({
    borderColor: `$${value}3`
  }),
  borderTone4: (value) => ({
    borderColor: `$${value}4`
  }),
  borderTone5: (value) => ({
    borderColor: `$${value}5`
  }),
  borderTone6: (value) => ({
    borderColor: `$${value}6`
  }),
  borderTone7: (value) => ({
    borderColor: `$${value}7`
  }),
  borderTone8: (value) => ({
    borderColor: `$${value}8`
  }),
  borderTone9: (value) => ({
    borderColor: `$${value}9`
  }),
  borderTone10: (value) => ({
    borderColor: `$${value}10`
  }),
  borderTone11: (value) => ({
    borderColor: `$${value}11`
  }),
  borderTone12: (value) => ({
    borderColor: `$${value}12`
  })
};
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  theme: {
    colors: __spreadValues(__spreadValues(__spreadValues({}, lightColors), brandColors), supportColors),
    space: __spreadValues({
      "100%": "100%"
    }, theme_default.spacing),
    sizes: __spreadValues({
      "100%": "100%"
    }, theme_default.spacing),
    fontSizes: __spreadValues({}, theme_default.fontSizes),
    fonts: {
      heading: `${theme_default.fontFamilies.heading},'SkModernistBold',SkModernistBold,'Sk-Modernist-Bold',sans-serif`,
      branding: `${theme_default.fontFamilies.heading},'SkModernistRegular',SkModernistRegular,'Sk-Modernist-Regular',sans-serif`,
      body: `'Inter Tight',${theme_default.fontFamilies.body}, sans-serif`
    },
    fontWeights: __spreadValues({}, theme_default.fontWeights),
    lineHeights: __spreadValues({}, theme_default.lineHeights),
    letterSpacings: __spreadValues({}, theme_default.letterSpacing),
    borderWidths: __spreadValues({}, theme_default.borderWidth),
    borderStyles: {
      solid: "solid",
      dashed: "dashed"
    },
    radii: __spreadValues({}, theme_default.borderRadius),
    zIndices: {},
    transitions: {
      fast: "all 0.1s",
      slow: "all 0.4s ease-in-out"
    },
    shadows: {
      1: `0.3px 0.5px 0.7px ${Radix.blackA.blackA5},
          0.4px 0.8px 1px -1.2px ${Radix.blackA.blackA5},
          1px 2px 2.5px -2.5px ${Radix.blackA.blackA5}`,
      2: `0.3px 0.5px 0.7px ${Radix.blackA.blackA5},
          0.8px 1.6px 2px -0.8px ${Radix.blackA.blackA5},
          2.1px 4.1px 5.2px -1.7px ${Radix.blackA.blackA5},
          5px 10px 12.6px -2.5px ${Radix.blackA.blackA5}`,
      3: `0.3px 0.5px 0.7px ${Radix.blackA.blackA5},
          1.5px 2.9px 3.7px -0.4px ${Radix.blackA.blackA4},
          2.7px 5.4px 6.8px -0.7px ${Radix.blackA.blackA4},
          4.5px 8.9px 11.2px -1.1px ${Radix.blackA.blackA4},
          7.1px 14.3px 18px -1.4px ${Radix.blackA.blackA4},
          11.2px 22.3px 28.1px -1.8px ${Radix.blackA.blackA4}`,
      subtle: `0.3px 0.5px 0.7px ${Radix.blackA.blackA3},
          0.8px 1.6px 2px -0.8px ${Radix.blackA.blackA3},
          2.1px 4.1px 5.2px -1.7px ${Radix.blackA.blackA3}`
    }
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)"
  },
  utils: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, bgToneScales), textToneScales), borderToneScales), {
    m: (value) => ({
      margin: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    // Abbreviated padding properties
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    // A property for applying flex together
    flex: (value) => ({
      display: "flex",
      flex: value
    }),
    // A property for applying grid together
    grid: (value) => ({
      display: "grid",
      grid: value
    }),
    // A property for applying width/height together
    boxSize: (value) => ({
      width: value,
      height: value
    }),
    w: (value) => ({
      width: value
    }),
    h: (value) => ({
      height: value
    }),
    // An abbreviated property for border-radius
    br: (value) => ({
      borderRadius: value
    }),
    bg: (value) => ({
      backgroundColor: value
    })
  }),
  themeMap: __spreadValues({}, import_react.defaultThemeMap)
});
var stitchesDarkTheme = createTheme("dark", {
  colors: __spreadValues({}, darkColors)
});
var reset = globalCss({
  "*": { margin: 0, boxSizing: "border-box" }
});
var brandFonts = globalCss({
  "@font-face": [
    {
      fontFamily: "skModernistBold",
      src: 'url("/fonts/sk-modernist-bold-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-bold-webfont.woff") format("woff"),url("/fonts/sk-modernist-bold-webfont.ttf") format("truetype")',
      fontWeight: "bold"
    },
    {
      fontFamily: "skModernistRegular",
      src: 'url("/fonts/sk-modernist-regular-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-regular-webfont.woff") format("woff"),url("/fonts/sk-modernist-regular-webfont.ttf") format("truetype")',
      fontWeight: 400
    }
  ]
});

// Box/index.tsx
var Box = styled("div", {});
var Stack = styled(Box, {
  display: "flex",
  flexDirection: "column",
  gap: "$4"
});

// Spinner/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Spinner(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    __spreadProps(__spreadValues({
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "animateTransform",
          {
            attributeName: "transform",
            type: "rotate",
            from: "0 0 0",
            to: "360 0 0",
            begin: "0s",
            dur: "1s",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.6667 8C12.6667 5.42267 10.5773 3.33333 8 3.33333V2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8H3.33333C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8Z",
            fill: "currentColor"
          }
        )
      ]
    })
  );
}
var AutoSpinner = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      version: "1.1",
      id: "L9",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 100 100",
      enableBackground: "new 0 0 0 0",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "animateTransform",
            {
              attributeName: "transform",
              attributeType: "XML",
              type: "rotate",
              dur: "1s",
              from: "0 50 50",
              to: "360 50 50",
              repeatCount: "indefinite"
            }
          )
        }
      )
    }
  );
};

// util/tones.ts
var RadixColors2 = __toESM(require("@radix-ui/colors"), 1);
function getButtonToneStyle(tone, intent) {
  if (!tone) {
    return;
  } else if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "black"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else if (intent === "ghost") {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    if (intent === "primary") {
      return {
        bgTone12: tone,
        "&:hover": {
          bgTone12: tone
        },
        "&:active": {
          bgTone12: tone
        },
        color: `$${tone}2`
      };
    } else if (intent === "secondary") {
      return {
        bgTone6: tone,
        "&:hover": {
          bgTone7: tone
        },
        "&:active": {
          bgTone8: tone
        },
        color: `$${tone}12`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "white"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  }
}
function getButtonShadowStyle(tone, depth) {
  const colorFromRadix = __objRest(RadixColors2, []);
  const shadowColor = colorFromRadix[tone + "A"];
  if (depth === "0") {
    return {
      boxShadow: "none"
    };
  } else if (depth === "1") {
    return {
      [`:not(.${stitchesDarkTheme}) &`]: {
        $$shadowColor: shadowColor[tone + "A6"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,                
                0 0.8px 1px -1.2px $$shadowColor,
                0 2px 2.5px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "2") {
    return {
      [`:not(.${stitchesDarkTheme}) &`]: {
        $$shadowColor: shadowColor[tone + "A4"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 1.6px 2px -0.8px $$shadowColor,
                0 4.1px 5.2px -1.7px $$shadowColor,
                0 10px 12.6px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "3") {
    return {
      [`:not(.${stitchesDarkTheme}) &`]: {
        $$shadowColor: shadowColor[tone + "A5"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 2.9px 3.7px -0.4px $$shadowColor,
                0 5.4px 6.8px -0.7px $$shadowColor,
                0 8.9px 11.2px -1.1px $$shadowColor,
                0 14.3px 18px -1.4px $$shadowColor,
                0 22.3px 28.1px -1.8px $$shadowColor`
      }
    };
  } else
    return {};
}
function getCheckboxToneStyle(tone) {
  if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "black"
    };
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    return {
      bgTone3: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "8"}`,
      "&:active": {
        bgTone4: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  } else {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  }
}

// Button/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var BaseButton = styled("button", {
  all: "unset",
  border: "none",
  boxSizing: "border-box",
  userSelect: "none",
  position: "relative",
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.75
  },
  // "&:hover": {
  // 	transform: "translateY(-1px)",
  // },
  "&:active": {
    transform: "translateY(1px)"
  },
  // mdx fix
  "& .button-text p": {
    lineHeight: 1
    // opacity: 0,
  },
  overflow: "hidden",
  fontFamily: "$heading",
  fontWeight: "$bold",
  cursor: "pointer",
  display: "inline-flex",
  gap: "$2",
  // lineHeight: ,
  alignItems: "center",
  fontSize: "$base",
  transition: "$fast",
  variants: {
    size: {
      sm: {
        borderRadius: "$lg",
        fontSize: 11,
        height: 30,
        px: "$3",
        py: "$2"
      },
      md: {
        borderRadius: "$lg",
        fontSize: 13,
        height: "$8",
        px: "$3",
        py: "$2"
      },
      lg: {
        borderRadius: "$xl",
        fontSize: 15,
        height: "$10",
        px: "$4",
        py: "$3"
      },
      xl: {
        borderRadius: "$xl",
        fontSize: 17,
        height: "$11",
        px: "$5",
        py: "$4"
      }
    },
    isRound: {
      true: {
        borderRadius: "$full"
      }
    },
    align: {
      left: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      right: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      },
      around: {
        justifyContent: "space-around"
      }
    }
  },
  compoundVariants: [
    {
      size: "sm",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    },
    {
      size: "md",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    },
    {
      size: "lg",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    },
    {
      size: "xl",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    }
  ],
  defaultVariants: {
    size: "md",
    isRound: true,
    align: "center"
  }
});
var Button = import_react2.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      size,
      align,
      tone = "slate",
      intent = "primary",
      isLoading,
      children,
      leftIcon,
      rightIcon,
      depth,
      css: css3,
      isDark
    } = _b, props = __objRest(_b, [
      "size",
      "align",
      "tone",
      "intent",
      "isLoading",
      "children",
      "leftIcon",
      "rightIcon",
      "depth",
      "css",
      "isDark"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      BaseButton,
      __spreadProps(__spreadValues({
        className: isDark ? stitchesDarkTheme : void 0,
        ref,
        size,
        align,
        css: import_lodash.default.merge(
          getButtonToneStyle(tone, intent),
          getButtonShadowStyle(tone, depth),
          css3
        )
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Box,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: leftIcon
            }
          ),
          isLoading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Box,
            {
              style: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                inset: 0
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AutoSpinner, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Box,
            {
              className: "button-text",
              style: {
                opacity: isLoading ? 0 : 1
              },
              children
            }
          ),
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Box,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: rightIcon
            }
          )
        ]
      })
    );
  }
);

// Text/index.tsx
var Text = styled("div", {
  fontFamily: "$heading",
  variants: {
    size: {
      "page-title": {
        fontWeight: "$bold",
        fontSize: "$6xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      "page-title2": {
        fontWeight: "$bold",
        fontSize: "$5xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title1: {
        fontWeight: "$bold",
        fontSize: "$3xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title2: {
        fontWeight: "$bold",
        fontSize: "$2xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title3: {
        fontWeight: "$bold",
        fontSize: "$xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle1: {
        fontWeight: "$bold",
        fontSize: "$lg",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle2: {
        fontWeight: "$bold",
        fontSize: "$base",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      overline: {
        fontFamily: "$body",
        fontWeight: "$bold",
        fontSize: "$xs",
        lineHeight: "$heading",
        letterSpacing: "$increased",
        textTransform: "$uppercase"
      },
      body: {
        fontFamily: "$body",
        fontWeight: "$normal",
        fontSize: "$base",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      "body-bold": {
        fontWeight: "$bold",
        fontFamily: "$body",
        fontSize: "$base",
        lineHeight: "body",
        letterSpacing: "$default"
      },
      label: {
        fontFamily: "$body",
        fontSize: "$sm",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      caption: {
        fontFamily: "$body",
        fontSize: "$xs",
        lineHeight: "$body",
        letterSpacing: "$default"
      }
    }
  },
  defaultVariants: {
    size: "body"
  }
});

// NomiStyle/index.tsx
var nomiObject = {
  fontSize: "$base",
  fontFamily: "$body",
  lineHeight: "$body",
  webkitFontSmoothing: "antialiased",
  "& h1": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$2xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h2": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h3": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$lg",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h4": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$base",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& > *": {
    marginBottom: "$6"
  },
  "& > *:last-child": {
    marginBottom: 0
  },
  "& a": {
    color: "$grass9"
  },
  "& a:hover": {
    color: "$grass11"
  },
  "& ul,& ol": {
    paddingLeft: "$4"
  },
  "& li": {
    marginBottom: "$2"
  },
  "& img": {
    maxWidth: "100%",
    height: "auto"
  }
};
var NomiStyle = styled("div", nomiObject);
var nomiClass = css(nomiObject);
var NomiStyle_default = NomiStyle;

// util/Display.tsx
var import_framer_motion = require("framer-motion");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Display(_a) {
  var _b = _a, { label, css: css3 } = _b, rest = __objRest(_b, ["label", "css"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_framer_motion.motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      style: {
        marginTop: "2em",
        marginBottom: "2em"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { css: { mb: "$2" }, size: "overline", color: "slate10", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Box,
          __spreadValues({
            css: __spreadValues({
              borderWidth: 1,
              p: "$6",
              overflow: "hidden",
              borderColor: "$slate6",
              borderRadius: "$xl"
            }, css3)
          }, rest)
        )
      ]
    }
  );
}

// Checkbox/index.tsx
var import_react3 = __toESM(require("react"), 1);
var import_Checkbox = require("reakit/Checkbox");
var import_react_aria = require("react-aria");
var import_lodash3 = __toESM(require("lodash"), 1);

// LucideIcon/index.tsx
var import_lodash2 = __toESM(require("lodash"), 1);
var icons = __toESM(require("lucide-react"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var LucideIcon = (_a) => {
  var _b = _a, {
    name = "activity",
    color,
    size,
    boxSize,
    fill = "none",
    strokeWidth,
    className
  } = _b, props = __objRest(_b, [
    "name",
    "color",
    "size",
    "boxSize",
    "fill",
    "strokeWidth",
    "className"
  ]);
  const iconNameCamelCase = import_lodash2.default.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  const LucideIcon3 = icons[IconNameUpperCase];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    LucideIcon3,
    __spreadValues({
      color,
      size: size ? size : "100%",
      strokeWidth,
      fill,
      style: {
        flexShrink: 1,
        height: boxSize ? boxSize : void 0,
        width: boxSize ? boxSize : void 0,
        aspectRatio: "1"
      },
      className
    }, props)
  );
};

// Checkbox/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function CheckboxWithLabel(_a, ref) {
  var _b = _a, {
    defaultChecked,
    children,
    fontSize = "lg",
    tone = "slate",
    css: css3
  } = _b, props = __objRest(_b, [
    "defaultChecked",
    "children",
    "fontSize",
    "tone",
    "css"
  ]);
  const checkbox = (0, import_Checkbox.useCheckboxState)({
    state: defaultChecked
  });
  console.log(checkbox);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    CheckboxLabel,
    {
      "data-state": props.disabled ? "disabled" : void 0,
      css: { fontSize: `$${fontSize}`, color: "$baseText" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_aria.VisuallyHidden, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_Checkbox.Checkbox,
          __spreadValues(__spreadValues({
            ref
          }, checkbox), props)
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          CheckboxRoot,
          {
            "data-state": checkbox.state ? "checked" : "unchecked",
            css: import_lodash3.default.merge(getCheckboxToneStyle(tone), css3),
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CheckboxIndicator, { checked: !!checkbox.state, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(LucideIcon, { strokeWidth: 2.5, name: "check" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, { css: { fontSize: "inherit" }, children })
      ]
    }
  );
}
var Checkbox = import_react3.default.forwardRef(CheckboxWithLabel);
var CheckboxLabel = styled("label", {
  lineHeight: 1,
  height: "1em",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4em",
  userSelect: "none",
  variants: {
    status: {
      enabled: {
        cursor: "pointer"
      },
      disabled: {
        opacity: 0.65,
        cursor: "not-allowed"
      }
    }
  },
  "&[data-state=disabled]": {
    opacity: 0.65,
    cursor: "not-allowed"
  }
});
var CheckboxRoot = styled("div", {
  aspectRatio: "1",
  fontSize: "inherit",
  width: "auto",
  height: "100%",
  overflow: "hidden",
  flexShrink: 1,
  borderRadius: "25%",
  justifyContent: "center",
  padding: "0",
  border: "none",
  display: "inline-flex",
  transition: "all 0.2s",
  alignItems: "center",
  ":active": { transform: "scale(0.9)" }
});
var CheckboxIndicator = styled("div", {
  aspectRatio: "1/1",
  height: "1em",
  width: "1em",
  position: "relative",
  textAlign: "center",
  overflow: "hidden",
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  justifyContent: "center",
  padding: 0,
  opacity: 0,
  variants: {
    checked: {
      true: {
        opacity: 1
      }
    }
  }
});

// Footer/index.tsx
var import_graphql_request = require("graphql-request");
var import_react4 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var hygraph = new import_graphql_request.GraphQLClient(
  "https://ap-northeast-1.cdn.hygraph.com/content/clf0ox8k023ql01t56zef5n6w/master"
);
var QUERY = import_graphql_request.gql`
	query Footers {
		footers {
			id
			sectionTitle
			sectionContent {
				icon {
					url
				}
				linkTitle
				url
			}
		}
	}
`;
var Footer = ({ isDark }) => {
  function getFooterData() {
    return __async(this, null, function* () {
      const data = yield hygraph.request(QUERY);
      return data;
    });
  }
  const [footerData, setFooterData] = import_react4.default.useState(null);
  (0, import_react4.useEffect)(() => {
    getFooterData().then((data) => {
      setFooterData(data);
    });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FooterContainer, { className: isDark ? stitchesDarkTheme : "defaultColor", children: footerData && footerData.footers.map(
    (section, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(FooterSection, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Text, { size: "subtitle1", children: section.sectionTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FooterContent, { children: section.sectionContent.map((sectionContent, j) => {
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FooterLink, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("a", { href: sectionContent.url, children: [
          sectionContent.icon && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { alt: "icon", src: sectionContent.icon.url }),
          sectionContent.linkTitle
        ] }) }, j);
      }) })
    ] }, i)
  ) });
};
var FooterContainer = styled("div", {
  boxSizing: "border-box",
  maxWidth: "1000px",
  m: "0 auto",
  p: 48,
  pb: 128,
  pt: 0,
  gap: 48,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  width: "100%",
  color: "$baseText",
  right: "0%",
  position: "relative",
  "@sm": {
    display: "grid",
    right: "-5%",
    position: "relative",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@md": {
    right: "-12%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@lg": {
    right: "-2.5%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)"
  },
  "& a": {
    color: "$baseText",
    opacity: 0.6,
    fontFamily: "$body",
    textDecoration: "none"
  },
  "& a:hover": {
    opacity: 1
  }
});
var FooterSection = styled("div", {
  flexGrow: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterContent = styled("ul", {
  flex: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterLink = styled("li", {
  m: 0,
  p: 0,
  listStyle: "none",
  "& a": {
    display: "inline-flex",
    gap: 4,
    alignItems: "center"
  },
  "& img": {
    filter: "invert(1)"
  },
  [`.${stitchesDarkTheme} & img`]: {
    filter: "invert(0)"
  }
});

// Dialog/index.tsx
var DialogPrimitive6 = __toESM(require("@radix-ui/react-dialog"), 1);
var import_colors6 = require("@radix-ui/colors");

// dist/index.js
var import_lodash4 = __toESM(require("lodash"), 1);
var import_react5 = __toESM(require("react"), 1);
var import_react6 = require("@stitches/react");
var RadixColors3 = __toESM(require("@radix-ui/colors"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var RadixColors22 = __toESM(require("@radix-ui/colors"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime9 = require("react/jsx-runtime");
var import_react7 = __toESM(require("react"), 1);
var import_Checkbox2 = require("reakit/Checkbox");
var import_react_aria2 = require("react-aria");
var import_lodash5 = __toESM(require("lodash"), 1);
var import_lodash6 = __toESM(require("lodash"), 1);
var icons2 = __toESM(require("lucide-react"), 1);
var import_jsx_runtime10 = require("react/jsx-runtime");
var import_jsx_runtime11 = require("react/jsx-runtime");
var import_graphql_request2 = require("graphql-request");
var import_react8 = __toESM(require("react"), 1);
var import_jsx_runtime12 = require("react/jsx-runtime");
var DialogPrimitive5 = __toESM(require("@radix-ui/react-dialog"), 1);
var import_colors = require("@radix-ui/colors");
var import_lodash7 = __toESM(require("lodash"), 1);
var import_react9 = __toESM(require("react"), 1);
var import_react10 = require("@stitches/react");
var RadixColors32 = __toESM(require("@radix-ui/colors"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
var RadixColors222 = __toESM(require("@radix-ui/colors"), 1);
var import_jsx_runtime14 = require("react/jsx-runtime");
var import_framer_motion3 = require("framer-motion");
var import_jsx_runtime15 = require("react/jsx-runtime");
var import_react11 = __toESM(require("react"), 1);
var import_Checkbox3 = require("reakit/Checkbox");
var import_react_aria3 = require("react-aria");
var import_lodash8 = __toESM(require("lodash"), 1);
var import_lodash9 = __toESM(require("lodash"), 1);
var icons22 = __toESM(require("lucide-react"), 1);
var import_jsx_runtime16 = require("react/jsx-runtime");
var import_jsx_runtime17 = require("react/jsx-runtime");
var import_graphql_request3 = require("graphql-request");
var import_react12 = __toESM(require("react"), 1);
var import_jsx_runtime18 = require("react/jsx-runtime");
var DialogPrimitive4 = __toESM(require("@radix-ui/react-dialog"), 1);
var import_colors2 = require("@radix-ui/colors");
var import_lodash10 = __toESM(require("lodash"), 1);
var import_react13 = __toESM(require("react"), 1);
var import_react14 = require("@stitches/react");
var RadixColors322 = __toESM(require("@radix-ui/colors"), 1);
var import_jsx_runtime19 = require("react/jsx-runtime");
var RadixColors2222 = __toESM(require("@radix-ui/colors"), 1);
var import_jsx_runtime20 = require("react/jsx-runtime");
var import_framer_motion4 = require("framer-motion");
var import_jsx_runtime21 = require("react/jsx-runtime");
var import_react15 = __toESM(require("react"), 1);
var import_Checkbox4 = require("reakit/Checkbox");
var import_react_aria4 = require("react-aria");
var import_lodash11 = __toESM(require("lodash"), 1);
var import_lodash12 = __toESM(require("lodash"), 1);
var icons222 = __toESM(require("lucide-react"), 1);
var import_jsx_runtime22 = require("react/jsx-runtime");
var import_jsx_runtime23 = require("react/jsx-runtime");
var import_graphql_request4 = require("graphql-request");
var import_react16 = __toESM(require("react"), 1);
var import_jsx_runtime24 = require("react/jsx-runtime");
var DialogPrimitive3 = __toESM(require("@radix-ui/react-dialog"), 1);
var import_colors3 = require("@radix-ui/colors");
var import_lodash13 = __toESM(require("lodash"), 1);
var import_react17 = __toESM(require("react"), 1);
var import_react18 = require("@stitches/react");
var RadixColors3222 = __toESM(require("@radix-ui/colors"), 1);
var import_jsx_runtime25 = require("react/jsx-runtime");
var RadixColors22222 = __toESM(require("@radix-ui/colors"), 1);
var import_jsx_runtime26 = require("react/jsx-runtime");
var import_framer_motion5 = require("framer-motion");
var import_jsx_runtime27 = require("react/jsx-runtime");
var import_react19 = __toESM(require("react"), 1);
var import_Checkbox5 = require("reakit/Checkbox");
var import_react_aria5 = require("react-aria");
var import_lodash14 = __toESM(require("lodash"), 1);
var import_lodash15 = __toESM(require("lodash"), 1);
var icons2222 = __toESM(require("lucide-react"), 1);
var import_jsx_runtime28 = require("react/jsx-runtime");
var import_jsx_runtime29 = require("react/jsx-runtime");
var import_graphql_request5 = require("graphql-request");
var import_react20 = __toESM(require("react"), 1);
var import_jsx_runtime30 = require("react/jsx-runtime");
var DialogPrimitive2 = __toESM(require("@radix-ui/react-dialog"), 1);
var import_colors4 = require("@radix-ui/colors");
var import_lodash16 = __toESM(require("lodash"), 1);
var import_react21 = __toESM(require("react"), 1);
var import_react22 = require("@stitches/react");
var RadixColors32222 = __toESM(require("@radix-ui/colors"), 1);
var import_jsx_runtime31 = require("react/jsx-runtime");
var RadixColors222222 = __toESM(require("@radix-ui/colors"), 1);
var import_jsx_runtime32 = require("react/jsx-runtime");
var import_framer_motion6 = require("framer-motion");
var import_jsx_runtime33 = require("react/jsx-runtime");
var import_react23 = __toESM(require("react"), 1);
var import_Checkbox6 = require("reakit/Checkbox");
var import_react_aria6 = require("react-aria");
var import_lodash17 = __toESM(require("lodash"), 1);
var import_lodash18 = __toESM(require("lodash"), 1);
var icons22222 = __toESM(require("lucide-react"), 1);
var import_jsx_runtime34 = require("react/jsx-runtime");
var import_jsx_runtime35 = require("react/jsx-runtime");
var import_graphql_request6 = require("graphql-request");
var import_react24 = __toESM(require("react"), 1);
var import_jsx_runtime36 = require("react/jsx-runtime");
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"), 1);
var import_colors5 = require("@radix-ui/colors");
var import_lodash19 = __toESM(require("lodash"), 1);
var HeroIcons = __toESM(require("react-icons/hi"), 1);
var import_jsx_runtime37 = require("react/jsx-runtime");
var import_jsx_runtime38 = require("react/jsx-runtime");
var import_jsx_runtime39 = require("react/jsx-runtime");
var import_lodash20 = __toESM(require("lodash"), 1);
var HeroIcons2 = __toESM(require("react-icons/hi"), 1);
var import_jsx_runtime40 = require("react/jsx-runtime");
var import_jsx_runtime41 = require("react/jsx-runtime");
var import_jsx_runtime42 = require("react/jsx-runtime");
var import_lodash21 = __toESM(require("lodash"), 1);
var HeroIcons3 = __toESM(require("react-icons/hi"), 1);
var import_jsx_runtime43 = require("react/jsx-runtime");
var import_jsx_runtime44 = require("react/jsx-runtime");
var import_jsx_runtime45 = require("react/jsx-runtime");
var import_lodash22 = __toESM(require("lodash"), 1);
var HeroIcons4 = __toESM(require("react-icons/hi"), 1);
var import_jsx_runtime46 = require("react/jsx-runtime");
var import_jsx_runtime47 = require("react/jsx-runtime");
var import_jsx_runtime48 = require("react/jsx-runtime");
var import_lodash23 = __toESM(require("lodash"), 1);
var HeroIcons5 = __toESM(require("react-icons/hi"), 1);
var import_jsx_runtime49 = require("react/jsx-runtime");
var import_jsx_runtime50 = require("react/jsx-runtime");
var import_jsx_runtime51 = require("react/jsx-runtime");
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var theme_default2 = {
  brand: {
    hover: "#6DEFBF",
    primary: "#3CEAAA",
    pressed: "#33C790",
    disable: "#1E7555",
    secondary: "#03BCE4"
  },
  support: {
    red: "#F16769",
    orange: "#FFB459",
    blue: "#4EA3FE",
    purpple: "#C692E0",
    silver: "#D3D5F2",
    yellow: "#FFED70"
  },
  colors: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  borderWidth: {
    "0": "0px",
    "1": "1px",
    "2": "2px",
    "4": "4px",
    "8": "8px",
    DEFAULT: "1px"
  },
  opacity: {
    "0": "0%",
    "5": "50%",
    "10": "10%",
    "20": "20%",
    "25": "25%",
    "30": "30%",
    "40": "40%",
    "50": "50%",
    "60": "60%",
    "70": "70%",
    "75": "75%",
    "80": "80%",
    "95": "95%",
    "100": "100%"
  },
  fontFamilies: {
    heading: "Sk-Modernist",
    body: "Inter"
  },
  lineHeights: {
    heading: "110%",
    body: "150%",
    tight: "140%",
    single: "100%"
  },
  letterSpacing: {
    default: "0%",
    increased: "2%",
    decreased: "-2%"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
  },
  fontSizes: {
    "6xl": "72px",
    "5xl": "64px",
    "4xl": "56px",
    "3xl": "48px",
    "2xl": "36px",
    xl: "24px",
    lg: "18px",
    base: "16px",
    sm: "14px",
    xs: "11px"
  },
  typography: {
    "page-title": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "72px",
      letterSpacing: "-2%"
    },
    "page-title2": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "64px",
      letterSpacing: "-2%"
    },
    title1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "48px",
      letterSpacing: "-2%"
    },
    title2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "36px",
      letterSpacing: "-2%"
    },
    title3: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "24px",
      letterSpacing: "-2%"
    },
    subtitle1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "18px",
      letterSpacing: "-2%"
    },
    subtitle2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "16px",
      letterSpacing: "-2%"
    },
    overline: {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "11px",
      letterSpacing: "2%",
      textCase: "uppercase"
    },
    "body-heading": {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "18px",
      letterSpacing: "0%",
      paragraphSpacing: "1.5rem"
    },
    body: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    "body-bold": {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    label: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "140%",
      fontSize: "14px",
      letterSpacing: "0%"
    },
    caption: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "11px",
      letterSpacing: "0%"
    }
  },
  paragraphSpacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  light: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  dark: {
    tomato: {
      "1": "#1d1412",
      "2": "#2a1410",
      "3": "#3b1813",
      "4": "#481a14",
      "5": "#541c15",
      "6": "#652016",
      "7": "#7f2315",
      "8": "#a42a12",
      "9": "#e54d2e",
      "10": "#ec5e41",
      "11": "#f16a50",
      "12": "#feefec"
    },
    red: {
      "1": "#1f1315",
      "2": "#291415",
      "3": "#3c181a",
      "4": "#481a1d",
      "5": "#541b1f",
      "6": "#671e22",
      "7": "#822025",
      "8": "#aa2429",
      "9": "#e5484d",
      "10": "#f2555a",
      "11": "#ff6369",
      "12": "#feecee"
    },
    crimson: {
      "1": "#1d1418",
      "2": "#27141c",
      "3": "#3c1827",
      "4": "#481a2d",
      "5": "#541b33",
      "6": "#641d3b",
      "7": "#801d45",
      "8": "#ae1955",
      "9": "#e93d82",
      "10": "#f04f88",
      "11": "#f76190",
      "12": "#feecf4"
    },
    pink: {
      "1": "#1f121b",
      "2": "#271421",
      "3": "#3a182f",
      "4": "#451a37",
      "5": "#501b3f",
      "6": "#601d48",
      "7": "#7a1d5a",
      "8": "#a71873",
      "9": "#d6409f",
      "10": "#e34ba9",
      "11": "#f65cb6",
      "12": "#feebf7"
    },
    plum: {
      "1": "#1d131d",
      "2": "#251425",
      "3": "#341a34",
      "4": "#3e1d40",
      "5": "#48214b",
      "6": "#542658",
      "7": "#692d6f",
      "8": "#883894",
      "9": "#ab4aba",
      "10": "#bd54c6",
      "11": "#d864d8",
      "12": "#fbecfc"
    },
    purple: {
      "1": "#1b141d",
      "2": "#221527",
      "3": "#301a3a",
      "4": "#3a1e48",
      "5": "#432155",
      "6": "#4e2667",
      "7": "#5f2d84",
      "8": "#7938b2",
      "9": "#8e4ec6",
      "10": "#9d5bd2",
      "11": "#bf7af0",
      "12": "#f7ecfc"
    },
    violet: {
      "1": "#17151f",
      "2": "#1c172b",
      "3": "#251e40",
      "4": "#2c2250",
      "5": "#32275f",
      "6": "#392c72",
      "7": "#443592",
      "8": "#5842c3",
      "9": "#6e56cf",
      "10": "#7c66dc",
      "11": "#9e8cfc",
      "12": "#f1eefe"
    },
    indigo: {
      "1": "#131620",
      "2": "#15192d",
      "3": "#192140",
      "4": "#1c274f",
      "5": "#1f2c5c",
      "6": "#22346e",
      "7": "#273e89",
      "8": "#2f4eb2",
      "9": "#3e63dd",
      "10": "#5373e7",
      "11": "#849dff",
      "12": "#eef1fd"
    },
    blue: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    cyan: {
      "1": "#07191d",
      "2": "#061e24",
      "3": "#072830",
      "4": "#07303b",
      "5": "#073844",
      "6": "#064150",
      "7": "#045063",
      "8": "#00647d",
      "9": "#05a2c2",
      "10": "#00b1cc",
      "11": "#00c2d7",
      "12": "#e1f8fa"
    },
    teal: {
      "1": "#091915",
      "2": "#04201b",
      "3": "#062923",
      "4": "#07312b",
      "5": "#083932",
      "6": "#09443c",
      "7": "#0b544a",
      "8": "#0c6d62",
      "9": "#12a594",
      "10": "#10b3a3",
      "11": "#0ac5b3",
      "12": "#e1faf4"
    },
    green: {
      "1": "#0d1912",
      "2": "#0c1f17",
      "3": "#0f291e",
      "4": "#113123",
      "5": "#133929",
      "6": "#164430",
      "7": "#1b543a",
      "8": "#236e4a",
      "9": "#30a46c",
      "10": "#3cb179",
      "11": "#4cc38a",
      "12": "#e5fbeb"
    },
    grass: {
      "1": "#0d1912",
      "2": "#0f1e13",
      "3": "#132819",
      "4": "#16301d",
      "5": "#193921",
      "6": "#1d4427",
      "7": "#245530",
      "8": "#2f6e3b",
      "9": "#46a758",
      "10": "#55b467",
      "11": "#63c174",
      "12": "#e5fbeb"
    },
    brown: {
      "1": "#191513",
      "2": "#221813",
      "3": "#2e201a",
      "4": "#36261e",
      "5": "#3e2c22",
      "6": "#493528",
      "7": "#5c4332",
      "8": "#775940",
      "9": "#ad7f58",
      "10": "#bd8b60",
      "11": "#dba16e",
      "12": "#faf0e5"
    },
    orange: {
      "1": "#1f1206",
      "2": "#2b1400",
      "3": "#391a03",
      "4": "#441f04",
      "5": "#4f2305",
      "6": "#5f2a06",
      "7": "#763205",
      "8": "#943e00",
      "9": "#f76808",
      "10": "#ff802b",
      "11": "#ff8b3e",
      "12": "#feeadd"
    },
    sky: {
      "1": "#0c1820",
      "2": "#071d2a",
      "3": "#082636",
      "4": "#082d41",
      "5": "#08354c",
      "6": "#083e59",
      "7": "#064b6b",
      "8": "#005d85",
      "9": "#68ddfd",
      "10": "#8ae8ff",
      "11": "#2ec8ee",
      "12": "#eaf8ff"
    },
    mint: {
      "1": "#081917",
      "2": "#05201e",
      "3": "#052926",
      "4": "#04312c",
      "5": "#033a34",
      "6": "#01453d",
      "7": "#00564a",
      "8": "#006d5b",
      "9": "#70e1c8",
      "10": "#95f3d9",
      "11": "#25d0ab",
      "12": "#e7fcf7"
    },
    lime: {
      "1": "#141807",
      "2": "#181d08",
      "3": "#1e260d",
      "4": "#252e0f",
      "5": "#2b3711",
      "6": "#344213",
      "7": "#415215",
      "8": "#536716",
      "9": "#99d52a",
      "10": "#c4f042",
      "11": "#87be22",
      "12": "#effbdd"
    },
    yellow: {
      "1": "#1c1500",
      "2": "#221a00",
      "3": "#2c2100",
      "4": "#352800",
      "5": "#3e3000",
      "6": "#493c00",
      "7": "#594a05",
      "8": "#705e00",
      "9": "#f5d90a",
      "10": "#ffef5c",
      "11": "#f0c000",
      "12": "#fffad1"
    },
    amber: {
      "1": "#1f1300",
      "2": "#271700",
      "3": "#341c00",
      "4": "#3f2200",
      "5": "#4a2900",
      "6": "#573300",
      "7": "#693f05",
      "8": "#824e00",
      "9": "#ffb224",
      "10": "#ffcb47",
      "11": "#f1a10d",
      "12": "#fef3dd"
    },
    gold: {
      "1": "#171613",
      "2": "#1c1a15",
      "3": "#26231c",
      "4": "#2e2a21",
      "5": "#353026",
      "6": "#3e382c",
      "7": "#504737",
      "8": "#6b5d48",
      "9": "#978365",
      "10": "#a59071",
      "11": "#bfa888",
      "12": "#f7f4e7"
    },
    bronze: {
      "1": "#191514",
      "2": "#1f1917",
      "3": "#2a211f",
      "4": "#332824",
      "5": "#3b2e29",
      "6": "#453530",
      "7": "#57433c",
      "8": "#74594e",
      "9": "#a18072",
      "10": "#b08c7d",
      "11": "#cba393",
      "12": "#f9ede7"
    },
    gray: {
      "1": "#161616",
      "2": "#1c1c1c",
      "3": "#232323",
      "4": "#282828",
      "5": "#2e2e2e",
      "6": "#343434",
      "7": "#3e3e3e",
      "8": "#505050",
      "9": "#707070",
      "10": "#7e7e7e",
      "11": "#a0a0a0",
      "12": "#ededed"
    },
    mauve: {
      "1": "#161618",
      "2": "#1c1c1f",
      "3": "#232326",
      "4": "#28282c",
      "5": "#2e2e32",
      "6": "#34343a",
      "7": "#3e3e44",
      "8": "#504f57",
      "9": "#706f78",
      "10": "#7e7d86",
      "11": "#a09fa6",
      "12": "#ededef"
    },
    slate: {
      "1": "#151718",
      "2": "#1a1d1e",
      "3": "#202425",
      "4": "#26292b",
      "5": "#2b2f31",
      "6": "#313538",
      "7": "#3a3f42",
      "8": "#4c5155",
      "9": "#697177",
      "10": "#787f85",
      "11": "#9ba1a6",
      "12": "#ecedee"
    },
    sage: {
      "1": "#141716",
      "2": "#191d1b",
      "3": "#1f2421",
      "4": "#252a27",
      "5": "#2a2f2c",
      "6": "#303633",
      "7": "#393f3c",
      "8": "#4a524e",
      "9": "#66736d",
      "10": "#75817b",
      "11": "#99a29e",
      "12": "#eceeed"
    },
    olive: {
      "1": "#151715",
      "2": "#1a1d19",
      "3": "#20241f",
      "4": "#262925",
      "5": "#2b2f2a",
      "6": "#313530",
      "7": "#3b3f3a",
      "8": "#4c514b",
      "9": "#687366",
      "10": "#778175",
      "11": "#9aa299",
      "12": "#eceeec"
    },
    sand: {
      "1": "#161615",
      "2": "#1c1c1a",
      "3": "#232320",
      "4": "#282826",
      "5": "#2e2e2b",
      "6": "#353431",
      "7": "#3e3e3a",
      "8": "#51504b",
      "9": "#717069",
      "10": "#7f7e77",
      "11": "#a1a09a",
      "12": "#ededec"
    },
    accent: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    base: {
      text: "#ecedee",
      textSecondary: "#9ba1a6",
      textTertiary: "#697177",
      background: "#151718",
      backgroundSecondary: "#1a1d1e",
      backgroundTertiary: "#202425",
      pureForeground: "#FFFFFF",
      pureBackground: "black"
    }
  },
  spacing: {
    "0": "0px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "11": "2.75rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "36": "9rem",
    "40": "10rem",
    "44": "11rem",
    "48": "12rem",
    "52": "13rem",
    "56": "14rem",
    "60": "15rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "96": "24rem",
    px: "1px"
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  boxShadow: {
    sm: {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      color: "rgba(0 ,0 ,0,0.05)",
      type: "dropShadow"
    },
    DEFAULT: [
      {
        x: 0,
        y: 1,
        blur: 3,
        spread: 0,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 1,
        blur: 2,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    md: [
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 2,
        blur: 4,
        spread: -2,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    lg: [
      {
        x: 0,
        y: 10,
        blur: 15,
        spread: "03",
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -4,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    xl: [
      {
        x: 0,
        y: 20,
        blur: 25,
        spread: -5,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 8,
        blur: 10,
        spread: -6,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    "2xl": [
      {
        x: 0,
        y: 25,
        blur: 50,
        spread: -12,
        color: "rgba(0,0,0,0.25)",
        type: "dropShadow"
      }
    ],
    inner: {
      x: 0,
      y: 2,
      blur: 4,
      spread: 0,
      color: "rgba(0,0,0,0.05)",
      type: "innerShadow"
    }
  },
  tokenSetOrder: {
    "0": "global",
    "1": "light",
    "2": "dark",
    "3": "theme"
  }
};
var Radix2 = RadixColors3;
function capitalize2(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function flattenKeys2(obj, sep = "", parentKey = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? parentKey + sep + capitalize2(key) : key;
    if (typeof value === "object") {
      Object.assign(acc, flattenKeys2(value, sep, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
}
var lightColors2 = flattenKeys2(theme_default2.light);
var brandColors2 = flattenKeys2(theme_default2.brand);
var supportColors2 = flattenKeys2(theme_default2.support);
var darkColors2 = flattenKeys2(theme_default2.dark);
var bgToneScales2 = {
  bgTone1: (value) => ({
    backgroundColor: `$${value}1`
  }),
  bgTone2: (value) => ({
    backgroundColor: `$${value}2`
  }),
  bgTone3: (value) => ({
    backgroundColor: `$${value}3`
  }),
  bgTone4: (value) => ({
    backgroundColor: `$${value}4`
  }),
  bgTone5: (value) => ({
    backgroundColor: `$${value}5`
  }),
  bgTone6: (value) => ({
    backgroundColor: `$${value}6`
  }),
  bgTone7: (value) => ({
    backgroundColor: `$${value}7`
  }),
  bgTone8: (value) => ({
    backgroundColor: `$${value}8`
  }),
  bgTone9: (value) => ({
    backgroundColor: `$${value}9`
  }),
  bgTone10: (value) => ({
    backgroundColor: `$${value}10`
  }),
  bgTone11: (value) => ({
    backgroundColor: `$${value}11`
  }),
  bgTone12: (value) => ({
    backgroundColor: `$${value}12`
  })
};
var textToneScales2 = {
  textTone1: (value) => ({
    color: `$${value}1`
  }),
  textTone2: (value) => ({
    color: `$${value}2`
  }),
  textTone3: (value) => ({
    color: `$${value}3`
  }),
  textTone4: (value) => ({
    color: `$${value}4`
  }),
  textTone5: (value) => ({
    color: `$${value}5`
  }),
  textTone6: (value) => ({
    color: `$${value}6`
  }),
  textTone7: (value) => ({
    color: `$${value}7`
  }),
  textTone8: (value) => ({
    color: `$${value}8`
  }),
  textTone9: (value) => ({
    color: `$${value}9`
  }),
  textTone10: (value) => ({
    color: `$${value}10`
  }),
  textTone11: (value) => ({
    color: `$${value}11`
  }),
  textTone12: (value) => ({
    color: `$${value}12`
  })
};
var borderToneScales2 = {
  borderTone1: (value) => ({
    borderColor: `$${value}1`
  }),
  borderTone2: (value) => ({
    borderColor: `$${value}2`
  }),
  borderTone3: (value) => ({
    borderColor: `$${value}3`
  }),
  borderTone4: (value) => ({
    borderColor: `$${value}4`
  }),
  borderTone5: (value) => ({
    borderColor: `$${value}5`
  }),
  borderTone6: (value) => ({
    borderColor: `$${value}6`
  }),
  borderTone7: (value) => ({
    borderColor: `$${value}7`
  }),
  borderTone8: (value) => ({
    borderColor: `$${value}8`
  }),
  borderTone9: (value) => ({
    borderColor: `$${value}9`
  }),
  borderTone10: (value) => ({
    borderColor: `$${value}10`
  }),
  borderTone11: (value) => ({
    borderColor: `$${value}11`
  }),
  borderTone12: (value) => ({
    borderColor: `$${value}12`
  })
};
var {
  styled: styled2,
  css: css2,
  globalCss: globalCss2,
  keyframes: keyframes2,
  getCssText: getCssText2,
  theme: theme2,
  createTheme: createTheme2,
  config: config2
} = (0, import_react6.createStitches)({
  theme: {
    colors: __spreadValues2(__spreadValues2(__spreadValues2({}, lightColors2), brandColors2), supportColors2),
    space: __spreadValues2({
      "100%": "100%"
    }, theme_default2.spacing),
    sizes: __spreadValues2({
      "100%": "100%"
    }, theme_default2.spacing),
    fontSizes: __spreadValues2({}, theme_default2.fontSizes),
    fonts: {
      heading: `${theme_default2.fontFamilies.heading},'SkModernistBold',SkModernistBold,'Sk-Modernist-Bold',sans-serif`,
      branding: `${theme_default2.fontFamilies.heading},'SkModernistRegular',SkModernistRegular,'Sk-Modernist-Regular',sans-serif`,
      body: `'Inter Tight',${theme_default2.fontFamilies.body}, sans-serif`
    },
    fontWeights: __spreadValues2({}, theme_default2.fontWeights),
    lineHeights: __spreadValues2({}, theme_default2.lineHeights),
    letterSpacings: __spreadValues2({}, theme_default2.letterSpacing),
    borderWidths: __spreadValues2({}, theme_default2.borderWidth),
    borderStyles: {
      solid: "solid",
      dashed: "dashed"
    },
    radii: __spreadValues2({}, theme_default2.borderRadius),
    zIndices: {},
    transitions: {
      fast: "all 0.1s",
      slow: "all 0.4s ease-in-out"
    },
    shadows: {
      1: `0.3px 0.5px 0.7px ${Radix2.blackA.blackA5},
          0.4px 0.8px 1px -1.2px ${Radix2.blackA.blackA5},
          1px 2px 2.5px -2.5px ${Radix2.blackA.blackA5}`,
      2: `0.3px 0.5px 0.7px ${Radix2.blackA.blackA5},
          0.8px 1.6px 2px -0.8px ${Radix2.blackA.blackA5},
          2.1px 4.1px 5.2px -1.7px ${Radix2.blackA.blackA5},
          5px 10px 12.6px -2.5px ${Radix2.blackA.blackA5}`,
      3: `0.3px 0.5px 0.7px ${Radix2.blackA.blackA5},
          1.5px 2.9px 3.7px -0.4px ${Radix2.blackA.blackA4},
          2.7px 5.4px 6.8px -0.7px ${Radix2.blackA.blackA4},
          4.5px 8.9px 11.2px -1.1px ${Radix2.blackA.blackA4},
          7.1px 14.3px 18px -1.4px ${Radix2.blackA.blackA4},
          11.2px 22.3px 28.1px -1.8px ${Radix2.blackA.blackA4}`,
      subtle: `0.3px 0.5px 0.7px ${Radix2.blackA.blackA3},
          0.8px 1.6px 2px -0.8px ${Radix2.blackA.blackA3},
          2.1px 4.1px 5.2px -1.7px ${Radix2.blackA.blackA3}`
    }
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)"
  },
  utils: __spreadProps2(__spreadValues2(__spreadValues2(__spreadValues2({}, bgToneScales2), textToneScales2), borderToneScales2), {
    m: (value) => ({
      margin: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    // Abbreviated padding properties
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    // A property for applying flex together
    flex: (value) => ({
      display: "flex",
      flex: value
    }),
    // A property for applying grid together
    grid: (value) => ({
      display: "grid",
      grid: value
    }),
    // A property for applying width/height together
    boxSize: (value) => ({
      width: value,
      height: value
    }),
    w: (value) => ({
      width: value
    }),
    h: (value) => ({
      height: value
    }),
    // An abbreviated property for border-radius
    br: (value) => ({
      borderRadius: value
    }),
    bg: (value) => ({
      backgroundColor: value
    })
  }),
  themeMap: __spreadValues2({}, import_react6.defaultThemeMap)
});
var stitchesDarkTheme2 = createTheme2("dark", {
  colors: __spreadValues2({}, darkColors2)
});
var reset2 = globalCss2({
  "*": { margin: 0, boxSizing: "border-box" }
});
var brandFonts2 = globalCss2({
  "@font-face": [
    {
      fontFamily: "skModernistBold",
      src: 'url("/fonts/sk-modernist-bold-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-bold-webfont.woff") format("woff"),url("/fonts/sk-modernist-bold-webfont.ttf") format("truetype")',
      fontWeight: "bold"
    },
    {
      fontFamily: "skModernistRegular",
      src: 'url("/fonts/sk-modernist-regular-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-regular-webfont.woff") format("woff"),url("/fonts/sk-modernist-regular-webfont.ttf") format("truetype")',
      fontWeight: 400
    }
  ]
});
var Box2 = styled2("div", {});
var Stack2 = styled2(Box2, {
  display: "flex",
  flexDirection: "column",
  gap: "$4"
});
var AutoSpinner2 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "svg",
    {
      version: "1.1",
      id: "L9",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 100 100",
      enableBackground: "new 0 0 0 0",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "animateTransform",
            {
              attributeName: "transform",
              attributeType: "XML",
              type: "rotate",
              dur: "1s",
              from: "0 50 50",
              to: "360 50 50",
              repeatCount: "indefinite"
            }
          )
        }
      )
    }
  );
};
function getButtonToneStyle2(tone, intent) {
  if (!tone) {
    return;
  } else if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "black"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else if (intent === "ghost") {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    if (intent === "primary") {
      return {
        bgTone12: tone,
        "&:hover": {
          bgTone12: tone
        },
        "&:active": {
          bgTone12: tone
        },
        color: `$${tone}2`
      };
    } else if (intent === "secondary") {
      return {
        bgTone6: tone,
        "&:hover": {
          bgTone7: tone
        },
        "&:active": {
          bgTone8: tone
        },
        color: `$${tone}12`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "white"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  }
}
function getButtonShadowStyle2(tone, depth) {
  const colorFromRadix = __objRest2(RadixColors22, []);
  const shadowColor = colorFromRadix[tone + "A"];
  if (depth === "0") {
    return {
      boxShadow: "none"
    };
  } else if (depth === "1") {
    return {
      [`.${stitchesDarkTheme2}:not &`]: {
        $$shadowColor: shadowColor[tone + "A6"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,                
                0 0.8px 1px -1.2px $$shadowColor,
                0 2px 2.5px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "2") {
    return {
      [`.${stitchesDarkTheme2}:not &`]: {
        $$shadowColor: shadowColor[tone + "A4"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 1.6px 2px -0.8px $$shadowColor,
                0 4.1px 5.2px -1.7px $$shadowColor,
                0 10px 12.6px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "3") {
    return {
      [`.${stitchesDarkTheme2}:not &`]: {
        $$shadowColor: shadowColor[tone + "A5"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 2.9px 3.7px -0.4px $$shadowColor,
                0 5.4px 6.8px -0.7px $$shadowColor,
                0 8.9px 11.2px -1.1px $$shadowColor,
                0 14.3px 18px -1.4px $$shadowColor,
                0 22.3px 28.1px -1.8px $$shadowColor`
      }
    };
  } else
    return {};
}
function getCheckboxToneStyle2(tone) {
  if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "black"
    };
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    return {
      bgTone3: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "8"}`,
      "&:active": {
        bgTone4: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  } else {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  }
}
var BaseButton2 = styled2("button", {
  all: "unset",
  border: "none",
  boxSizing: "border-box",
  userSelect: "none",
  position: "relative",
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.75
  },
  // "&:hover": {
  // 	transform: "translateY(-1px)",
  // },
  "&:active": {
    transform: "translateY(1px)"
  },
  // mdx fix
  "& .button-text p": {
    lineHeight: 1
    // opacity: 0,
  },
  overflow: "hidden",
  fontFamily: "$heading",
  fontWeight: "$bold",
  cursor: "pointer",
  display: "inline-flex",
  gap: "$2",
  // lineHeight: ,
  alignItems: "center",
  fontSize: "$base",
  transition: "$fast",
  variants: {
    size: {
      sm: {
        borderRadius: "$lg",
        fontSize: 11,
        height: 30,
        px: "$3",
        py: "$2"
      },
      md: {
        borderRadius: "$lg",
        fontSize: 13,
        height: "$8",
        px: "$3",
        py: "$2"
      },
      lg: {
        borderRadius: "$xl",
        fontSize: 15,
        height: "$10",
        px: "$4",
        py: "$3"
      },
      xl: {
        borderRadius: "$xl",
        fontSize: 17,
        height: "$11",
        px: "$5",
        py: "$4"
      }
    },
    isRound: {
      true: {
        borderRadius: "$full"
      }
    },
    align: {
      left: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      right: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      },
      around: {
        justifyContent: "space-around"
      }
    }
  },
  compoundVariants: [
    {
      size: "sm",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    },
    {
      size: "md",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    },
    {
      size: "lg",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    },
    {
      size: "xl",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    }
  ],
  defaultVariants: {
    size: "md",
    isRound: true,
    align: "center"
  }
});
var Button2 = import_react5.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      size,
      align,
      tone = "slate",
      intent = "primary",
      isLoading,
      children,
      leftIcon,
      rightIcon,
      depth,
      css: css3,
      isDark
    } = _b, props = __objRest2(_b, [
      "size",
      "align",
      "tone",
      "intent",
      "isLoading",
      "children",
      "leftIcon",
      "rightIcon",
      "depth",
      "css",
      "isDark"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      BaseButton2,
      __spreadProps2(__spreadValues2({
        className: isDark ? stitchesDarkTheme2 : void 0,
        ref,
        size,
        align,
        css: import_lodash4.default.merge(
          getButtonToneStyle2(tone, intent),
          getButtonShadowStyle2(tone, depth),
          css3
        )
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            Box2,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: leftIcon
            }
          ),
          isLoading && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            Box2,
            {
              style: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                inset: 0
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AutoSpinner2, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            Box2,
            {
              className: "button-text",
              style: {
                opacity: isLoading ? 0 : 1
              },
              children
            }
          ),
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            Box2,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: rightIcon
            }
          )
        ]
      })
    );
  }
);
var Text2 = styled2("div", {
  fontFamily: "$heading",
  variants: {
    size: {
      "page-title": {
        fontWeight: "$bold",
        fontSize: "$6xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      "page-title2": {
        fontWeight: "$bold",
        fontSize: "$5xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title1: {
        fontWeight: "$bold",
        fontSize: "$3xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title2: {
        fontWeight: "$bold",
        fontSize: "$2xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title3: {
        fontWeight: "$bold",
        fontSize: "$xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle1: {
        fontWeight: "$bold",
        fontSize: "$lg",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle2: {
        fontWeight: "$bold",
        fontSize: "$base",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      overline: {
        fontFamily: "$body",
        fontWeight: "$bold",
        fontSize: "$xs",
        lineHeight: "$heading",
        letterSpacing: "$increased",
        textTransform: "$uppercase"
      },
      body: {
        fontFamily: "$body",
        fontWeight: "$normal",
        fontSize: "$base",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      "body-bold": {
        fontWeight: "$bold",
        fontFamily: "$body",
        fontSize: "$base",
        lineHeight: "body",
        letterSpacing: "$default"
      },
      label: {
        fontFamily: "$body",
        fontSize: "$sm",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      caption: {
        fontFamily: "$body",
        fontSize: "$xs",
        lineHeight: "$body",
        letterSpacing: "$default"
      }
    }
  },
  defaultVariants: {
    size: "body"
  }
});
var nomiObject2 = {
  fontSize: "$base",
  fontFamily: "$body",
  lineHeight: "$body",
  webkitFontSmoothing: "antialiased",
  "& h1": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$2xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h2": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h3": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$lg",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h4": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$base",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& > *": {
    marginBottom: "$6"
  },
  "& > *:last-child": {
    marginBottom: 0
  },
  "& a": {
    color: "$grass9"
  },
  "& a:hover": {
    color: "$grass11"
  },
  "& ul,& ol": {
    paddingLeft: "$4"
  },
  "& li": {
    marginBottom: "$2"
  },
  "& img": {
    maxWidth: "100%",
    height: "auto"
  }
};
var NomiStyle2 = styled2("div", nomiObject2);
var nomiClass2 = css2(nomiObject2);
var LucideIcon2 = (_a) => {
  var _b = _a, {
    name = "activity",
    color,
    size,
    boxSize,
    fill = "none",
    strokeWidth,
    className
  } = _b, props = __objRest2(_b, [
    "name",
    "color",
    "size",
    "boxSize",
    "fill",
    "strokeWidth",
    "className"
  ]);
  const iconNameCamelCase = import_lodash6.default.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  const LucideIcon3 = icons2[IconNameUpperCase];
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    LucideIcon3,
    __spreadValues2({
      color,
      size: size ? size : "100%",
      strokeWidth,
      fill,
      style: {
        flexShrink: 1,
        height: boxSize ? boxSize : void 0,
        width: boxSize ? boxSize : void 0,
        aspectRatio: "1"
      },
      className
    }, props)
  );
};
function CheckboxWithLabel2(_a, ref) {
  var _b = _a, {
    defaultChecked,
    children,
    fontSize = "lg",
    tone = "slate",
    css: css3
  } = _b, props = __objRest2(_b, [
    "defaultChecked",
    "children",
    "fontSize",
    "tone",
    "css"
  ]);
  const checkbox = (0, import_Checkbox2.useCheckboxState)({
    state: defaultChecked
  });
  console.log(checkbox);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    CheckboxLabel2,
    {
      "data-state": props.disabled ? "disabled" : void 0,
      css: { fontSize: `$${fontSize}`, color: "$baseText" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_aria2.VisuallyHidden, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          import_Checkbox2.Checkbox,
          __spreadValues2(__spreadValues2({
            ref
          }, checkbox), props)
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          CheckboxRoot2,
          {
            "data-state": checkbox.state ? "checked" : "unchecked",
            css: import_lodash5.default.merge(getCheckboxToneStyle2(tone), css3),
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CheckboxIndicator2, { checked: !!checkbox.state, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(LucideIcon2, { strokeWidth: 2.5, name: "check" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Text2, { css: { fontSize: "inherit" }, children })
      ]
    }
  );
}
var Checkbox2 = import_react7.default.forwardRef(CheckboxWithLabel2);
var CheckboxLabel2 = styled2("label", {
  lineHeight: 1,
  height: "1em",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4em",
  userSelect: "none",
  variants: {
    status: {
      enabled: {
        cursor: "pointer"
      },
      disabled: {
        opacity: 0.65,
        cursor: "not-allowed"
      }
    }
  },
  "&[data-state=disabled]": {
    opacity: 0.65,
    cursor: "not-allowed"
  }
});
var CheckboxRoot2 = styled2("div", {
  aspectRatio: "1",
  fontSize: "inherit",
  width: "auto",
  height: "100%",
  overflow: "hidden",
  flexShrink: 1,
  borderRadius: "25%",
  justifyContent: "center",
  padding: "0",
  border: "none",
  display: "inline-flex",
  transition: "all 0.2s",
  alignItems: "center",
  ":active": { transform: "scale(0.9)" }
});
var CheckboxIndicator2 = styled2("div", {
  aspectRatio: "1/1",
  height: "1em",
  width: "1em",
  position: "relative",
  textAlign: "center",
  overflow: "hidden",
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  justifyContent: "center",
  padding: 0,
  opacity: 0,
  variants: {
    checked: {
      true: {
        opacity: 1
      }
    }
  }
});
var hygraph2 = new import_graphql_request2.GraphQLClient(
  "https://ap-northeast-1.cdn.hygraph.com/content/clf0ox8k023ql01t56zef5n6w/master"
);
var QUERY2 = import_graphql_request2.gql`
	query Footers {
		footers {
			id
			sectionTitle
			sectionContent {
				icon {
					url
				}
				linkTitle
				url
			}
		}
	}
`;
var FooterContainer2 = styled2("div", {
  boxSizing: "border-box",
  maxWidth: "1000px",
  m: "0 auto",
  p: 48,
  pb: 128,
  pt: 0,
  gap: 48,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  width: "100%",
  color: "$baseText",
  right: "0%",
  position: "relative",
  "@sm": {
    display: "grid",
    right: "-5%",
    position: "relative",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@md": {
    right: "-12%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@lg": {
    right: "-2.5%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)"
  },
  "& a": {
    color: "$baseText",
    opacity: 0.6,
    fontFamily: "$body",
    textDecoration: "none"
  },
  "& a:hover": {
    opacity: 1
  }
});
var FooterSection2 = styled2("div", {
  flexGrow: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterContent2 = styled2("ul", {
  flex: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterLink2 = styled2("li", {
  m: 0,
  p: 0,
  listStyle: "none",
  "& a": {
    display: "inline-flex",
    gap: 4,
    alignItems: "center"
  },
  "& img": {
    filter: "invert(1)"
  },
  [`.${stitchesDarkTheme2} & img`]: {
    filter: "invert(0)"
  }
});
var __defProp22 = Object.defineProperty;
var __defProps22 = Object.defineProperties;
var __getOwnPropDescs22 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols22 = Object.getOwnPropertySymbols;
var __hasOwnProp22 = Object.prototype.hasOwnProperty;
var __propIsEnum22 = Object.prototype.propertyIsEnumerable;
var __defNormalProp22 = (obj, key, value) => key in obj ? __defProp22(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues22 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp22.call(b, prop))
      __defNormalProp22(a, prop, b[prop]);
  if (__getOwnPropSymbols22)
    for (var prop of __getOwnPropSymbols22(b)) {
      if (__propIsEnum22.call(b, prop))
        __defNormalProp22(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps22 = (a, b) => __defProps22(a, __getOwnPropDescs22(b));
var __objRest22 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp22.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols22)
    for (var prop of __getOwnPropSymbols22(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum22.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var theme_default22 = {
  brand: {
    hover: "#6DEFBF",
    primary: "#3CEAAA",
    pressed: "#33C790",
    disable: "#1E7555",
    secondary: "#03BCE4"
  },
  support: {
    red: "#F16769",
    orange: "#FFB459",
    blue: "#4EA3FE",
    purpple: "#C692E0",
    silver: "#D3D5F2",
    yellow: "#FFED70"
  },
  colors: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  borderWidth: {
    "0": "0px",
    "1": "1px",
    "2": "2px",
    "4": "4px",
    "8": "8px",
    DEFAULT: "1px"
  },
  opacity: {
    "0": "0%",
    "5": "50%",
    "10": "10%",
    "20": "20%",
    "25": "25%",
    "30": "30%",
    "40": "40%",
    "50": "50%",
    "60": "60%",
    "70": "70%",
    "75": "75%",
    "80": "80%",
    "95": "95%",
    "100": "100%"
  },
  fontFamilies: {
    heading: "Sk-Modernist",
    body: "Inter"
  },
  lineHeights: {
    heading: "110%",
    body: "150%",
    tight: "140%",
    single: "100%"
  },
  letterSpacing: {
    default: "0%",
    increased: "2%",
    decreased: "-2%"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
  },
  fontSizes: {
    "6xl": "72px",
    "5xl": "64px",
    "4xl": "56px",
    "3xl": "48px",
    "2xl": "36px",
    xl: "24px",
    lg: "18px",
    base: "16px",
    sm: "14px",
    xs: "11px"
  },
  typography: {
    "page-title": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "72px",
      letterSpacing: "-2%"
    },
    "page-title2": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "64px",
      letterSpacing: "-2%"
    },
    title1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "48px",
      letterSpacing: "-2%"
    },
    title2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "36px",
      letterSpacing: "-2%"
    },
    title3: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "24px",
      letterSpacing: "-2%"
    },
    subtitle1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "18px",
      letterSpacing: "-2%"
    },
    subtitle2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "16px",
      letterSpacing: "-2%"
    },
    overline: {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "11px",
      letterSpacing: "2%",
      textCase: "uppercase"
    },
    "body-heading": {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "18px",
      letterSpacing: "0%",
      paragraphSpacing: "1.5rem"
    },
    body: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    "body-bold": {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    label: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "140%",
      fontSize: "14px",
      letterSpacing: "0%"
    },
    caption: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "11px",
      letterSpacing: "0%"
    }
  },
  paragraphSpacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  light: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  dark: {
    tomato: {
      "1": "#1d1412",
      "2": "#2a1410",
      "3": "#3b1813",
      "4": "#481a14",
      "5": "#541c15",
      "6": "#652016",
      "7": "#7f2315",
      "8": "#a42a12",
      "9": "#e54d2e",
      "10": "#ec5e41",
      "11": "#f16a50",
      "12": "#feefec"
    },
    red: {
      "1": "#1f1315",
      "2": "#291415",
      "3": "#3c181a",
      "4": "#481a1d",
      "5": "#541b1f",
      "6": "#671e22",
      "7": "#822025",
      "8": "#aa2429",
      "9": "#e5484d",
      "10": "#f2555a",
      "11": "#ff6369",
      "12": "#feecee"
    },
    crimson: {
      "1": "#1d1418",
      "2": "#27141c",
      "3": "#3c1827",
      "4": "#481a2d",
      "5": "#541b33",
      "6": "#641d3b",
      "7": "#801d45",
      "8": "#ae1955",
      "9": "#e93d82",
      "10": "#f04f88",
      "11": "#f76190",
      "12": "#feecf4"
    },
    pink: {
      "1": "#1f121b",
      "2": "#271421",
      "3": "#3a182f",
      "4": "#451a37",
      "5": "#501b3f",
      "6": "#601d48",
      "7": "#7a1d5a",
      "8": "#a71873",
      "9": "#d6409f",
      "10": "#e34ba9",
      "11": "#f65cb6",
      "12": "#feebf7"
    },
    plum: {
      "1": "#1d131d",
      "2": "#251425",
      "3": "#341a34",
      "4": "#3e1d40",
      "5": "#48214b",
      "6": "#542658",
      "7": "#692d6f",
      "8": "#883894",
      "9": "#ab4aba",
      "10": "#bd54c6",
      "11": "#d864d8",
      "12": "#fbecfc"
    },
    purple: {
      "1": "#1b141d",
      "2": "#221527",
      "3": "#301a3a",
      "4": "#3a1e48",
      "5": "#432155",
      "6": "#4e2667",
      "7": "#5f2d84",
      "8": "#7938b2",
      "9": "#8e4ec6",
      "10": "#9d5bd2",
      "11": "#bf7af0",
      "12": "#f7ecfc"
    },
    violet: {
      "1": "#17151f",
      "2": "#1c172b",
      "3": "#251e40",
      "4": "#2c2250",
      "5": "#32275f",
      "6": "#392c72",
      "7": "#443592",
      "8": "#5842c3",
      "9": "#6e56cf",
      "10": "#7c66dc",
      "11": "#9e8cfc",
      "12": "#f1eefe"
    },
    indigo: {
      "1": "#131620",
      "2": "#15192d",
      "3": "#192140",
      "4": "#1c274f",
      "5": "#1f2c5c",
      "6": "#22346e",
      "7": "#273e89",
      "8": "#2f4eb2",
      "9": "#3e63dd",
      "10": "#5373e7",
      "11": "#849dff",
      "12": "#eef1fd"
    },
    blue: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    cyan: {
      "1": "#07191d",
      "2": "#061e24",
      "3": "#072830",
      "4": "#07303b",
      "5": "#073844",
      "6": "#064150",
      "7": "#045063",
      "8": "#00647d",
      "9": "#05a2c2",
      "10": "#00b1cc",
      "11": "#00c2d7",
      "12": "#e1f8fa"
    },
    teal: {
      "1": "#091915",
      "2": "#04201b",
      "3": "#062923",
      "4": "#07312b",
      "5": "#083932",
      "6": "#09443c",
      "7": "#0b544a",
      "8": "#0c6d62",
      "9": "#12a594",
      "10": "#10b3a3",
      "11": "#0ac5b3",
      "12": "#e1faf4"
    },
    green: {
      "1": "#0d1912",
      "2": "#0c1f17",
      "3": "#0f291e",
      "4": "#113123",
      "5": "#133929",
      "6": "#164430",
      "7": "#1b543a",
      "8": "#236e4a",
      "9": "#30a46c",
      "10": "#3cb179",
      "11": "#4cc38a",
      "12": "#e5fbeb"
    },
    grass: {
      "1": "#0d1912",
      "2": "#0f1e13",
      "3": "#132819",
      "4": "#16301d",
      "5": "#193921",
      "6": "#1d4427",
      "7": "#245530",
      "8": "#2f6e3b",
      "9": "#46a758",
      "10": "#55b467",
      "11": "#63c174",
      "12": "#e5fbeb"
    },
    brown: {
      "1": "#191513",
      "2": "#221813",
      "3": "#2e201a",
      "4": "#36261e",
      "5": "#3e2c22",
      "6": "#493528",
      "7": "#5c4332",
      "8": "#775940",
      "9": "#ad7f58",
      "10": "#bd8b60",
      "11": "#dba16e",
      "12": "#faf0e5"
    },
    orange: {
      "1": "#1f1206",
      "2": "#2b1400",
      "3": "#391a03",
      "4": "#441f04",
      "5": "#4f2305",
      "6": "#5f2a06",
      "7": "#763205",
      "8": "#943e00",
      "9": "#f76808",
      "10": "#ff802b",
      "11": "#ff8b3e",
      "12": "#feeadd"
    },
    sky: {
      "1": "#0c1820",
      "2": "#071d2a",
      "3": "#082636",
      "4": "#082d41",
      "5": "#08354c",
      "6": "#083e59",
      "7": "#064b6b",
      "8": "#005d85",
      "9": "#68ddfd",
      "10": "#8ae8ff",
      "11": "#2ec8ee",
      "12": "#eaf8ff"
    },
    mint: {
      "1": "#081917",
      "2": "#05201e",
      "3": "#052926",
      "4": "#04312c",
      "5": "#033a34",
      "6": "#01453d",
      "7": "#00564a",
      "8": "#006d5b",
      "9": "#70e1c8",
      "10": "#95f3d9",
      "11": "#25d0ab",
      "12": "#e7fcf7"
    },
    lime: {
      "1": "#141807",
      "2": "#181d08",
      "3": "#1e260d",
      "4": "#252e0f",
      "5": "#2b3711",
      "6": "#344213",
      "7": "#415215",
      "8": "#536716",
      "9": "#99d52a",
      "10": "#c4f042",
      "11": "#87be22",
      "12": "#effbdd"
    },
    yellow: {
      "1": "#1c1500",
      "2": "#221a00",
      "3": "#2c2100",
      "4": "#352800",
      "5": "#3e3000",
      "6": "#493c00",
      "7": "#594a05",
      "8": "#705e00",
      "9": "#f5d90a",
      "10": "#ffef5c",
      "11": "#f0c000",
      "12": "#fffad1"
    },
    amber: {
      "1": "#1f1300",
      "2": "#271700",
      "3": "#341c00",
      "4": "#3f2200",
      "5": "#4a2900",
      "6": "#573300",
      "7": "#693f05",
      "8": "#824e00",
      "9": "#ffb224",
      "10": "#ffcb47",
      "11": "#f1a10d",
      "12": "#fef3dd"
    },
    gold: {
      "1": "#171613",
      "2": "#1c1a15",
      "3": "#26231c",
      "4": "#2e2a21",
      "5": "#353026",
      "6": "#3e382c",
      "7": "#504737",
      "8": "#6b5d48",
      "9": "#978365",
      "10": "#a59071",
      "11": "#bfa888",
      "12": "#f7f4e7"
    },
    bronze: {
      "1": "#191514",
      "2": "#1f1917",
      "3": "#2a211f",
      "4": "#332824",
      "5": "#3b2e29",
      "6": "#453530",
      "7": "#57433c",
      "8": "#74594e",
      "9": "#a18072",
      "10": "#b08c7d",
      "11": "#cba393",
      "12": "#f9ede7"
    },
    gray: {
      "1": "#161616",
      "2": "#1c1c1c",
      "3": "#232323",
      "4": "#282828",
      "5": "#2e2e2e",
      "6": "#343434",
      "7": "#3e3e3e",
      "8": "#505050",
      "9": "#707070",
      "10": "#7e7e7e",
      "11": "#a0a0a0",
      "12": "#ededed"
    },
    mauve: {
      "1": "#161618",
      "2": "#1c1c1f",
      "3": "#232326",
      "4": "#28282c",
      "5": "#2e2e32",
      "6": "#34343a",
      "7": "#3e3e44",
      "8": "#504f57",
      "9": "#706f78",
      "10": "#7e7d86",
      "11": "#a09fa6",
      "12": "#ededef"
    },
    slate: {
      "1": "#151718",
      "2": "#1a1d1e",
      "3": "#202425",
      "4": "#26292b",
      "5": "#2b2f31",
      "6": "#313538",
      "7": "#3a3f42",
      "8": "#4c5155",
      "9": "#697177",
      "10": "#787f85",
      "11": "#9ba1a6",
      "12": "#ecedee"
    },
    sage: {
      "1": "#141716",
      "2": "#191d1b",
      "3": "#1f2421",
      "4": "#252a27",
      "5": "#2a2f2c",
      "6": "#303633",
      "7": "#393f3c",
      "8": "#4a524e",
      "9": "#66736d",
      "10": "#75817b",
      "11": "#99a29e",
      "12": "#eceeed"
    },
    olive: {
      "1": "#151715",
      "2": "#1a1d19",
      "3": "#20241f",
      "4": "#262925",
      "5": "#2b2f2a",
      "6": "#313530",
      "7": "#3b3f3a",
      "8": "#4c514b",
      "9": "#687366",
      "10": "#778175",
      "11": "#9aa299",
      "12": "#eceeec"
    },
    sand: {
      "1": "#161615",
      "2": "#1c1c1a",
      "3": "#232320",
      "4": "#282826",
      "5": "#2e2e2b",
      "6": "#353431",
      "7": "#3e3e3a",
      "8": "#51504b",
      "9": "#717069",
      "10": "#7f7e77",
      "11": "#a1a09a",
      "12": "#ededec"
    },
    accent: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    base: {
      text: "#ecedee",
      textSecondary: "#9ba1a6",
      textTertiary: "#697177",
      background: "#151718",
      backgroundSecondary: "#1a1d1e",
      backgroundTertiary: "#202425",
      pureForeground: "#FFFFFF",
      pureBackground: "black"
    }
  },
  spacing: {
    "0": "0px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "11": "2.75rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "36": "9rem",
    "40": "10rem",
    "44": "11rem",
    "48": "12rem",
    "52": "13rem",
    "56": "14rem",
    "60": "15rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "96": "24rem",
    px: "1px"
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  boxShadow: {
    sm: {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      color: "rgba(0 ,0 ,0,0.05)",
      type: "dropShadow"
    },
    DEFAULT: [
      {
        x: 0,
        y: 1,
        blur: 3,
        spread: 0,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 1,
        blur: 2,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    md: [
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 2,
        blur: 4,
        spread: -2,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    lg: [
      {
        x: 0,
        y: 10,
        blur: 15,
        spread: "03",
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -4,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    xl: [
      {
        x: 0,
        y: 20,
        blur: 25,
        spread: -5,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 8,
        blur: 10,
        spread: -6,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    "2xl": [
      {
        x: 0,
        y: 25,
        blur: 50,
        spread: -12,
        color: "rgba(0,0,0,0.25)",
        type: "dropShadow"
      }
    ],
    inner: {
      x: 0,
      y: 2,
      blur: 4,
      spread: 0,
      color: "rgba(0,0,0,0.05)",
      type: "innerShadow"
    }
  },
  tokenSetOrder: {
    "0": "global",
    "1": "light",
    "2": "dark",
    "3": "theme"
  }
};
var Radix22 = RadixColors32;
function capitalize22(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function flattenKeys22(obj, sep = "", parentKey = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? parentKey + sep + capitalize22(key) : key;
    if (typeof value === "object") {
      Object.assign(acc, flattenKeys22(value, sep, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
}
var lightColors22 = flattenKeys22(theme_default22.light);
var brandColors22 = flattenKeys22(theme_default22.brand);
var supportColors22 = flattenKeys22(theme_default22.support);
var darkColors22 = flattenKeys22(theme_default22.dark);
var bgToneScales22 = {
  bgTone1: (value) => ({
    backgroundColor: `$${value}1`
  }),
  bgTone2: (value) => ({
    backgroundColor: `$${value}2`
  }),
  bgTone3: (value) => ({
    backgroundColor: `$${value}3`
  }),
  bgTone4: (value) => ({
    backgroundColor: `$${value}4`
  }),
  bgTone5: (value) => ({
    backgroundColor: `$${value}5`
  }),
  bgTone6: (value) => ({
    backgroundColor: `$${value}6`
  }),
  bgTone7: (value) => ({
    backgroundColor: `$${value}7`
  }),
  bgTone8: (value) => ({
    backgroundColor: `$${value}8`
  }),
  bgTone9: (value) => ({
    backgroundColor: `$${value}9`
  }),
  bgTone10: (value) => ({
    backgroundColor: `$${value}10`
  }),
  bgTone11: (value) => ({
    backgroundColor: `$${value}11`
  }),
  bgTone12: (value) => ({
    backgroundColor: `$${value}12`
  })
};
var textToneScales22 = {
  textTone1: (value) => ({
    color: `$${value}1`
  }),
  textTone2: (value) => ({
    color: `$${value}2`
  }),
  textTone3: (value) => ({
    color: `$${value}3`
  }),
  textTone4: (value) => ({
    color: `$${value}4`
  }),
  textTone5: (value) => ({
    color: `$${value}5`
  }),
  textTone6: (value) => ({
    color: `$${value}6`
  }),
  textTone7: (value) => ({
    color: `$${value}7`
  }),
  textTone8: (value) => ({
    color: `$${value}8`
  }),
  textTone9: (value) => ({
    color: `$${value}9`
  }),
  textTone10: (value) => ({
    color: `$${value}10`
  }),
  textTone11: (value) => ({
    color: `$${value}11`
  }),
  textTone12: (value) => ({
    color: `$${value}12`
  })
};
var borderToneScales22 = {
  borderTone1: (value) => ({
    borderColor: `$${value}1`
  }),
  borderTone2: (value) => ({
    borderColor: `$${value}2`
  }),
  borderTone3: (value) => ({
    borderColor: `$${value}3`
  }),
  borderTone4: (value) => ({
    borderColor: `$${value}4`
  }),
  borderTone5: (value) => ({
    borderColor: `$${value}5`
  }),
  borderTone6: (value) => ({
    borderColor: `$${value}6`
  }),
  borderTone7: (value) => ({
    borderColor: `$${value}7`
  }),
  borderTone8: (value) => ({
    borderColor: `$${value}8`
  }),
  borderTone9: (value) => ({
    borderColor: `$${value}9`
  }),
  borderTone10: (value) => ({
    borderColor: `$${value}10`
  }),
  borderTone11: (value) => ({
    borderColor: `$${value}11`
  }),
  borderTone12: (value) => ({
    borderColor: `$${value}12`
  })
};
var {
  styled: styled22,
  css: css22,
  globalCss: globalCss22,
  keyframes: keyframes22,
  getCssText: getCssText22,
  theme: theme22,
  createTheme: createTheme22,
  config: config22
} = (0, import_react10.createStitches)({
  theme: {
    colors: __spreadValues22(__spreadValues22(__spreadValues22({}, lightColors22), brandColors22), supportColors22),
    space: __spreadValues22({
      "100%": "100%"
    }, theme_default22.spacing),
    sizes: __spreadValues22({
      "100%": "100%"
    }, theme_default22.spacing),
    fontSizes: __spreadValues22({}, theme_default22.fontSizes),
    fonts: {
      heading: `${theme_default22.fontFamilies.heading},'SkModernistBold',SkModernistBold,'Sk-Modernist-Bold',sans-serif`,
      branding: `${theme_default22.fontFamilies.heading},'SkModernistRegular',SkModernistRegular,'Sk-Modernist-Regular',sans-serif`,
      body: `'Inter Tight',${theme_default22.fontFamilies.body}, sans-serif`
    },
    fontWeights: __spreadValues22({}, theme_default22.fontWeights),
    lineHeights: __spreadValues22({}, theme_default22.lineHeights),
    letterSpacings: __spreadValues22({}, theme_default22.letterSpacing),
    borderWidths: __spreadValues22({}, theme_default22.borderWidth),
    borderStyles: {
      solid: "solid",
      dashed: "dashed"
    },
    radii: __spreadValues22({}, theme_default22.borderRadius),
    zIndices: {},
    transitions: {
      fast: "all 0.1s",
      slow: "all 0.4s ease-in-out"
    },
    shadows: {
      1: `0.3px 0.5px 0.7px ${Radix22.blackA.blackA5},
          0.4px 0.8px 1px -1.2px ${Radix22.blackA.blackA5},
          1px 2px 2.5px -2.5px ${Radix22.blackA.blackA5}`,
      2: `0.3px 0.5px 0.7px ${Radix22.blackA.blackA5},
          0.8px 1.6px 2px -0.8px ${Radix22.blackA.blackA5},
          2.1px 4.1px 5.2px -1.7px ${Radix22.blackA.blackA5},
          5px 10px 12.6px -2.5px ${Radix22.blackA.blackA5}`,
      3: `0.3px 0.5px 0.7px ${Radix22.blackA.blackA5},
          1.5px 2.9px 3.7px -0.4px ${Radix22.blackA.blackA4},
          2.7px 5.4px 6.8px -0.7px ${Radix22.blackA.blackA4},
          4.5px 8.9px 11.2px -1.1px ${Radix22.blackA.blackA4},
          7.1px 14.3px 18px -1.4px ${Radix22.blackA.blackA4},
          11.2px 22.3px 28.1px -1.8px ${Radix22.blackA.blackA4}`,
      subtle: `0.3px 0.5px 0.7px ${Radix22.blackA.blackA3},
          0.8px 1.6px 2px -0.8px ${Radix22.blackA.blackA3},
          2.1px 4.1px 5.2px -1.7px ${Radix22.blackA.blackA3}`
    }
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)"
  },
  utils: __spreadProps22(__spreadValues22(__spreadValues22(__spreadValues22({}, bgToneScales22), textToneScales22), borderToneScales22), {
    m: (value) => ({
      margin: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    // Abbreviated padding properties
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    // A property for applying flex together
    flex: (value) => ({
      display: "flex",
      flex: value
    }),
    // A property for applying grid together
    grid: (value) => ({
      display: "grid",
      grid: value
    }),
    // A property for applying width/height together
    boxSize: (value) => ({
      width: value,
      height: value
    }),
    w: (value) => ({
      width: value
    }),
    h: (value) => ({
      height: value
    }),
    // An abbreviated property for border-radius
    br: (value) => ({
      borderRadius: value
    }),
    bg: (value) => ({
      backgroundColor: value
    })
  }),
  themeMap: __spreadValues22({}, import_react10.defaultThemeMap)
});
var stitchesDarkTheme22 = createTheme22("dark", {
  colors: __spreadValues22({}, darkColors22)
});
var reset22 = globalCss22({
  "*": { margin: 0, boxSizing: "border-box" }
});
var brandFonts22 = globalCss22({
  "@font-face": [
    {
      fontFamily: "skModernistBold",
      src: 'url("/fonts/sk-modernist-bold-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-bold-webfont.woff") format("woff"),url("/fonts/sk-modernist-bold-webfont.ttf") format("truetype")',
      fontWeight: "bold"
    },
    {
      fontFamily: "skModernistRegular",
      src: 'url("/fonts/sk-modernist-regular-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-regular-webfont.woff") format("woff"),url("/fonts/sk-modernist-regular-webfont.ttf") format("truetype")',
      fontWeight: 400
    }
  ]
});
var Box22 = styled22("div", {});
var Stack22 = styled22(Box22, {
  display: "flex",
  flexDirection: "column",
  gap: "$4"
});
var AutoSpinner22 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "svg",
    {
      version: "1.1",
      id: "L9",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 100 100",
      enableBackground: "new 0 0 0 0",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "animateTransform",
            {
              attributeName: "transform",
              attributeType: "XML",
              type: "rotate",
              dur: "1s",
              from: "0 50 50",
              to: "360 50 50",
              repeatCount: "indefinite"
            }
          )
        }
      )
    }
  );
};
function getButtonToneStyle22(tone, intent) {
  if (!tone) {
    return;
  } else if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "black"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else if (intent === "ghost") {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    if (intent === "primary") {
      return {
        bgTone12: tone,
        "&:hover": {
          bgTone12: tone
        },
        "&:active": {
          bgTone12: tone
        },
        color: `$${tone}2`
      };
    } else if (intent === "secondary") {
      return {
        bgTone6: tone,
        "&:hover": {
          bgTone7: tone
        },
        "&:active": {
          bgTone8: tone
        },
        color: `$${tone}12`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "white"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  }
}
function getButtonShadowStyle22(tone, depth) {
  const colorFromRadix = __objRest22(RadixColors222, []);
  const shadowColor = colorFromRadix[tone + "A"];
  if (depth === "0") {
    return {
      boxShadow: "none"
    };
  } else if (depth === "1") {
    return {
      [`.${stitchesDarkTheme22} &`]: {
        $$shadowColor: shadowColor[tone + "A6"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,                
                0 0.8px 1px -1.2px $$shadowColor,
                0 2px 2.5px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "2") {
    return {
      [`.${stitchesDarkTheme22} &`]: {
        $$shadowColor: shadowColor[tone + "A4"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 1.6px 2px -0.8px $$shadowColor,
                0 4.1px 5.2px -1.7px $$shadowColor,
                0 10px 12.6px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "3") {
    return {
      [`.${stitchesDarkTheme22} &`]: {
        $$shadowColor: shadowColor[tone + "A5"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 2.9px 3.7px -0.4px $$shadowColor,
                0 5.4px 6.8px -0.7px $$shadowColor,
                0 8.9px 11.2px -1.1px $$shadowColor,
                0 14.3px 18px -1.4px $$shadowColor,
                0 22.3px 28.1px -1.8px $$shadowColor`
      }
    };
  } else
    return {};
}
function getCheckboxToneStyle22(tone) {
  if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "black"
    };
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    return {
      bgTone3: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "8"}`,
      "&:active": {
        bgTone4: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  } else {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  }
}
var BaseButton22 = styled22("button", {
  all: "unset",
  border: "none",
  boxSizing: "border-box",
  userSelect: "none",
  position: "relative",
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.75
  },
  // "&:hover": {
  // 	transform: "translateY(-1px)",
  // },
  "&:active": {
    transform: "translateY(1px)"
  },
  // mdx fix
  "& .button-text p": {
    lineHeight: 1
    // opacity: 0,
  },
  overflow: "hidden",
  fontFamily: "$heading",
  fontWeight: "$bold",
  cursor: "pointer",
  display: "inline-flex",
  gap: "$2",
  // lineHeight: ,
  alignItems: "center",
  fontSize: "$base",
  transition: "$fast",
  variants: {
    size: {
      sm: {
        borderRadius: "$lg",
        fontSize: 11,
        height: 30,
        px: "$3",
        py: "$2"
      },
      md: {
        borderRadius: "$lg",
        fontSize: 13,
        height: "$8",
        px: "$3",
        py: "$2"
      },
      lg: {
        borderRadius: "$xl",
        fontSize: 15,
        height: "$10",
        px: "$4",
        py: "$3"
      },
      xl: {
        borderRadius: "$xl",
        fontSize: 17,
        height: "$11",
        px: "$5",
        py: "$4"
      }
    },
    isRound: {
      true: {
        borderRadius: "$full"
      }
    },
    align: {
      left: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      right: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      },
      around: {
        justifyContent: "space-around"
      }
    }
  },
  compoundVariants: [
    {
      size: "sm",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    },
    {
      size: "md",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    },
    {
      size: "lg",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    },
    {
      size: "xl",
      isRound: true,
      css: {
        borderRadius: "$full"
      }
    }
  ],
  defaultVariants: {
    size: "md",
    isRound: true,
    align: "center"
  }
});
var Button22 = import_react9.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      size,
      align,
      tone = "slate",
      intent = "primary",
      isLoading,
      children,
      leftIcon,
      rightIcon,
      depth,
      css: css3,
      isDark
    } = _b, props = __objRest22(_b, [
      "size",
      "align",
      "tone",
      "intent",
      "isLoading",
      "children",
      "leftIcon",
      "rightIcon",
      "depth",
      "css",
      "isDark"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      BaseButton22,
      __spreadProps22(__spreadValues22({
        className: isDark ? stitchesDarkTheme22 : void 0,
        ref,
        size,
        align,
        css: import_lodash7.default.merge(
          getButtonToneStyle22(tone, intent),
          getButtonShadowStyle22(tone, depth),
          css3
        )
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            Box22,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: leftIcon
            }
          ),
          isLoading && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            Box22,
            {
              style: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                inset: 0
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AutoSpinner22, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            Box22,
            {
              className: "button-text",
              style: {
                opacity: isLoading ? 0 : 1
              },
              children
            }
          ),
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            Box22,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: rightIcon
            }
          )
        ]
      })
    );
  }
);
var Text22 = styled22("div", {
  fontFamily: "$heading",
  variants: {
    size: {
      "page-title": {
        fontWeight: "$bold",
        fontSize: "$6xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      "page-title2": {
        fontWeight: "$bold",
        fontSize: "$5xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title1: {
        fontWeight: "$bold",
        fontSize: "$3xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title2: {
        fontWeight: "$bold",
        fontSize: "$2xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title3: {
        fontWeight: "$bold",
        fontSize: "$xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle1: {
        fontWeight: "$bold",
        fontSize: "$lg",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle2: {
        fontWeight: "$bold",
        fontSize: "$base",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      overline: {
        fontFamily: "$body",
        fontWeight: "$bold",
        fontSize: "$xs",
        lineHeight: "$heading",
        letterSpacing: "$increased",
        textTransform: "$uppercase"
      },
      body: {
        fontFamily: "$body",
        fontWeight: "$normal",
        fontSize: "$base",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      "body-bold": {
        fontWeight: "$bold",
        fontFamily: "$body",
        fontSize: "$base",
        lineHeight: "body",
        letterSpacing: "$default"
      },
      label: {
        fontFamily: "$body",
        fontSize: "$sm",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      caption: {
        fontFamily: "$body",
        fontSize: "$xs",
        lineHeight: "$body",
        letterSpacing: "$default"
      }
    }
  },
  defaultVariants: {
    size: "body"
  }
});
var nomiObject22 = {
  fontSize: "$base",
  fontFamily: "$body",
  lineHeight: "$body",
  webkitFontSmoothing: "antialiased",
  "& h1": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$2xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h2": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h3": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$lg",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h4": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$base",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& > *": {
    marginBottom: "$6"
  },
  "& > *:last-child": {
    marginBottom: 0
  },
  "& a": {
    color: "$grass9"
  },
  "& a:hover": {
    color: "$grass11"
  },
  "& ul,& ol": {
    paddingLeft: "$4"
  },
  "& li": {
    marginBottom: "$2"
  },
  "& img": {
    maxWidth: "100%",
    height: "auto"
  }
};
var NomiStyle22 = styled22("div", nomiObject22);
var nomiClass22 = css22(nomiObject22);
var LucideIcon22 = (_a) => {
  var _b = _a, {
    name = "activity",
    color,
    size,
    boxSize,
    fill = "none",
    strokeWidth,
    className
  } = _b, props = __objRest22(_b, [
    "name",
    "color",
    "size",
    "boxSize",
    "fill",
    "strokeWidth",
    "className"
  ]);
  const iconNameCamelCase = import_lodash9.default.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  const LucideIcon3 = icons22[IconNameUpperCase];
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    LucideIcon3,
    __spreadValues22({
      color,
      size: size ? size : "100%",
      strokeWidth,
      fill,
      style: {
        flexShrink: 1,
        height: boxSize ? boxSize : void 0,
        width: boxSize ? boxSize : void 0,
        aspectRatio: "1"
      },
      className
    }, props)
  );
};
function CheckboxWithLabel22(_a, ref) {
  var _b = _a, {
    defaultChecked,
    children,
    fontSize = "lg",
    tone = "slate",
    css: css3
  } = _b, props = __objRest22(_b, [
    "defaultChecked",
    "children",
    "fontSize",
    "tone",
    "css"
  ]);
  const checkbox = (0, import_Checkbox3.useCheckboxState)({
    state: defaultChecked
  });
  console.log(checkbox);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    CheckboxLabel22,
    {
      "data-state": props.disabled ? "disabled" : void 0,
      css: { fontSize: `$${fontSize}`, color: "$baseText" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_aria3.VisuallyHidden, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          import_Checkbox3.Checkbox,
          __spreadValues22(__spreadValues22({
            ref
          }, checkbox), props)
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          CheckboxRoot22,
          {
            "data-state": checkbox.state ? "checked" : "unchecked",
            css: import_lodash8.default.merge(getCheckboxToneStyle22(tone), css3),
            children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CheckboxIndicator22, { checked: !!checkbox.state, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(LucideIcon22, { strokeWidth: 2.5, name: "check" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Text22, { css: { fontSize: "inherit" }, children })
      ]
    }
  );
}
var Checkbox22 = import_react11.default.forwardRef(CheckboxWithLabel22);
var CheckboxLabel22 = styled22("label", {
  lineHeight: 1,
  height: "1em",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4em",
  userSelect: "none",
  variants: {
    status: {
      enabled: {
        cursor: "pointer"
      },
      disabled: {
        opacity: 0.65,
        cursor: "not-allowed"
      }
    }
  },
  "&[data-state=disabled]": {
    opacity: 0.65,
    cursor: "not-allowed"
  }
});
var CheckboxRoot22 = styled22("div", {
  aspectRatio: "1",
  fontSize: "inherit",
  width: "auto",
  height: "100%",
  overflow: "hidden",
  flexShrink: 1,
  borderRadius: "25%",
  justifyContent: "center",
  padding: "0",
  border: "none",
  display: "inline-flex",
  transition: "all 0.2s",
  alignItems: "center",
  ":active": { transform: "scale(0.9)" }
});
var CheckboxIndicator22 = styled22("div", {
  aspectRatio: "1/1",
  height: "1em",
  width: "1em",
  position: "relative",
  textAlign: "center",
  overflow: "hidden",
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  justifyContent: "center",
  padding: 0,
  opacity: 0,
  variants: {
    checked: {
      true: {
        opacity: 1
      }
    }
  }
});
var hygraph22 = new import_graphql_request3.GraphQLClient(
  "https://ap-northeast-1.cdn.hygraph.com/content/clf0ox8k023ql01t56zef5n6w/master"
);
var QUERY22 = import_graphql_request3.gql`
	query Footers {
		footers {
			id
			sectionTitle
			sectionContent {
				icon {
					url
				}
				linkTitle
				url
			}
		}
	}
`;
var FooterContainer22 = styled22("div", {
  boxSizing: "border-box",
  maxWidth: "1000px",
  m: "0 auto",
  p: 48,
  pb: 128,
  pt: 0,
  gap: 48,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  width: "100%",
  color: "$baseText",
  right: "0%",
  position: "relative",
  "@sm": {
    display: "grid",
    right: "-5%",
    position: "relative",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@md": {
    right: "-12%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@lg": {
    right: "-2.5%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)"
  },
  "& a": {
    color: "$baseText",
    opacity: 0.6,
    fontFamily: "$body",
    textDecoration: "none"
  },
  "& a:hover": {
    opacity: 1
  }
});
var FooterSection22 = styled22("div", {
  flexGrow: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterContent22 = styled22("ul", {
  flex: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterLink22 = styled22("li", {
  m: 0,
  p: 0,
  listStyle: "none",
  "& a": {
    display: "inline-flex",
    gap: 4,
    alignItems: "center"
  },
  "& img": {
    filter: "invert(1)"
  },
  [`.${stitchesDarkTheme22} & img`]: {
    filter: "invert(0)"
  }
});
var __defProp222 = Object.defineProperty;
var __defProps222 = Object.defineProperties;
var __getOwnPropDescs222 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols222 = Object.getOwnPropertySymbols;
var __hasOwnProp222 = Object.prototype.hasOwnProperty;
var __propIsEnum222 = Object.prototype.propertyIsEnumerable;
var __defNormalProp222 = (obj, key, value) => key in obj ? __defProp222(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues222 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp222.call(b, prop))
      __defNormalProp222(a, prop, b[prop]);
  if (__getOwnPropSymbols222)
    for (var prop of __getOwnPropSymbols222(b)) {
      if (__propIsEnum222.call(b, prop))
        __defNormalProp222(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps222 = (a, b) => __defProps222(a, __getOwnPropDescs222(b));
var __objRest222 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp222.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols222)
    for (var prop of __getOwnPropSymbols222(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum222.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var theme_default222 = {
  brand: {
    hover: "#6DEFBF",
    primary: "#3CEAAA",
    pressed: "#33C790",
    disable: "#1E7555",
    secondary: "#03BCE4"
  },
  support: {
    red: "#F16769",
    orange: "#FFB459",
    blue: "#4EA3FE",
    purpple: "#C692E0",
    silver: "#D3D5F2",
    yellow: "#FFED70"
  },
  colors: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  borderWidth: {
    "0": "0px",
    "1": "1px",
    "2": "2px",
    "4": "4px",
    "8": "8px",
    DEFAULT: "1px"
  },
  opacity: {
    "0": "0%",
    "5": "50%",
    "10": "10%",
    "20": "20%",
    "25": "25%",
    "30": "30%",
    "40": "40%",
    "50": "50%",
    "60": "60%",
    "70": "70%",
    "75": "75%",
    "80": "80%",
    "95": "95%",
    "100": "100%"
  },
  fontFamilies: {
    heading: "Sk-Modernist",
    body: "Inter"
  },
  lineHeights: {
    heading: "110%",
    body: "150%",
    tight: "140%",
    single: "100%"
  },
  letterSpacing: {
    default: "0%",
    increased: "2%",
    decreased: "-2%"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
  },
  fontSizes: {
    "6xl": "72px",
    "5xl": "64px",
    "4xl": "56px",
    "3xl": "48px",
    "2xl": "36px",
    xl: "24px",
    lg: "18px",
    base: "16px",
    sm: "14px",
    xs: "11px"
  },
  typography: {
    "page-title": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "72px",
      letterSpacing: "-2%"
    },
    "page-title2": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "64px",
      letterSpacing: "-2%"
    },
    title1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "48px",
      letterSpacing: "-2%"
    },
    title2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "36px",
      letterSpacing: "-2%"
    },
    title3: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "24px",
      letterSpacing: "-2%"
    },
    subtitle1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "18px",
      letterSpacing: "-2%"
    },
    subtitle2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "16px",
      letterSpacing: "-2%"
    },
    overline: {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "11px",
      letterSpacing: "2%",
      textCase: "uppercase"
    },
    "body-heading": {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "18px",
      letterSpacing: "0%",
      paragraphSpacing: "1.5rem"
    },
    body: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    "body-bold": {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    label: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "140%",
      fontSize: "14px",
      letterSpacing: "0%"
    },
    caption: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "11px",
      letterSpacing: "0%"
    }
  },
  paragraphSpacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  light: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  dark: {
    tomato: {
      "1": "#1d1412",
      "2": "#2a1410",
      "3": "#3b1813",
      "4": "#481a14",
      "5": "#541c15",
      "6": "#652016",
      "7": "#7f2315",
      "8": "#a42a12",
      "9": "#e54d2e",
      "10": "#ec5e41",
      "11": "#f16a50",
      "12": "#feefec"
    },
    red: {
      "1": "#1f1315",
      "2": "#291415",
      "3": "#3c181a",
      "4": "#481a1d",
      "5": "#541b1f",
      "6": "#671e22",
      "7": "#822025",
      "8": "#aa2429",
      "9": "#e5484d",
      "10": "#f2555a",
      "11": "#ff6369",
      "12": "#feecee"
    },
    crimson: {
      "1": "#1d1418",
      "2": "#27141c",
      "3": "#3c1827",
      "4": "#481a2d",
      "5": "#541b33",
      "6": "#641d3b",
      "7": "#801d45",
      "8": "#ae1955",
      "9": "#e93d82",
      "10": "#f04f88",
      "11": "#f76190",
      "12": "#feecf4"
    },
    pink: {
      "1": "#1f121b",
      "2": "#271421",
      "3": "#3a182f",
      "4": "#451a37",
      "5": "#501b3f",
      "6": "#601d48",
      "7": "#7a1d5a",
      "8": "#a71873",
      "9": "#d6409f",
      "10": "#e34ba9",
      "11": "#f65cb6",
      "12": "#feebf7"
    },
    plum: {
      "1": "#1d131d",
      "2": "#251425",
      "3": "#341a34",
      "4": "#3e1d40",
      "5": "#48214b",
      "6": "#542658",
      "7": "#692d6f",
      "8": "#883894",
      "9": "#ab4aba",
      "10": "#bd54c6",
      "11": "#d864d8",
      "12": "#fbecfc"
    },
    purple: {
      "1": "#1b141d",
      "2": "#221527",
      "3": "#301a3a",
      "4": "#3a1e48",
      "5": "#432155",
      "6": "#4e2667",
      "7": "#5f2d84",
      "8": "#7938b2",
      "9": "#8e4ec6",
      "10": "#9d5bd2",
      "11": "#bf7af0",
      "12": "#f7ecfc"
    },
    violet: {
      "1": "#17151f",
      "2": "#1c172b",
      "3": "#251e40",
      "4": "#2c2250",
      "5": "#32275f",
      "6": "#392c72",
      "7": "#443592",
      "8": "#5842c3",
      "9": "#6e56cf",
      "10": "#7c66dc",
      "11": "#9e8cfc",
      "12": "#f1eefe"
    },
    indigo: {
      "1": "#131620",
      "2": "#15192d",
      "3": "#192140",
      "4": "#1c274f",
      "5": "#1f2c5c",
      "6": "#22346e",
      "7": "#273e89",
      "8": "#2f4eb2",
      "9": "#3e63dd",
      "10": "#5373e7",
      "11": "#849dff",
      "12": "#eef1fd"
    },
    blue: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    cyan: {
      "1": "#07191d",
      "2": "#061e24",
      "3": "#072830",
      "4": "#07303b",
      "5": "#073844",
      "6": "#064150",
      "7": "#045063",
      "8": "#00647d",
      "9": "#05a2c2",
      "10": "#00b1cc",
      "11": "#00c2d7",
      "12": "#e1f8fa"
    },
    teal: {
      "1": "#091915",
      "2": "#04201b",
      "3": "#062923",
      "4": "#07312b",
      "5": "#083932",
      "6": "#09443c",
      "7": "#0b544a",
      "8": "#0c6d62",
      "9": "#12a594",
      "10": "#10b3a3",
      "11": "#0ac5b3",
      "12": "#e1faf4"
    },
    green: {
      "1": "#0d1912",
      "2": "#0c1f17",
      "3": "#0f291e",
      "4": "#113123",
      "5": "#133929",
      "6": "#164430",
      "7": "#1b543a",
      "8": "#236e4a",
      "9": "#30a46c",
      "10": "#3cb179",
      "11": "#4cc38a",
      "12": "#e5fbeb"
    },
    grass: {
      "1": "#0d1912",
      "2": "#0f1e13",
      "3": "#132819",
      "4": "#16301d",
      "5": "#193921",
      "6": "#1d4427",
      "7": "#245530",
      "8": "#2f6e3b",
      "9": "#46a758",
      "10": "#55b467",
      "11": "#63c174",
      "12": "#e5fbeb"
    },
    brown: {
      "1": "#191513",
      "2": "#221813",
      "3": "#2e201a",
      "4": "#36261e",
      "5": "#3e2c22",
      "6": "#493528",
      "7": "#5c4332",
      "8": "#775940",
      "9": "#ad7f58",
      "10": "#bd8b60",
      "11": "#dba16e",
      "12": "#faf0e5"
    },
    orange: {
      "1": "#1f1206",
      "2": "#2b1400",
      "3": "#391a03",
      "4": "#441f04",
      "5": "#4f2305",
      "6": "#5f2a06",
      "7": "#763205",
      "8": "#943e00",
      "9": "#f76808",
      "10": "#ff802b",
      "11": "#ff8b3e",
      "12": "#feeadd"
    },
    sky: {
      "1": "#0c1820",
      "2": "#071d2a",
      "3": "#082636",
      "4": "#082d41",
      "5": "#08354c",
      "6": "#083e59",
      "7": "#064b6b",
      "8": "#005d85",
      "9": "#68ddfd",
      "10": "#8ae8ff",
      "11": "#2ec8ee",
      "12": "#eaf8ff"
    },
    mint: {
      "1": "#081917",
      "2": "#05201e",
      "3": "#052926",
      "4": "#04312c",
      "5": "#033a34",
      "6": "#01453d",
      "7": "#00564a",
      "8": "#006d5b",
      "9": "#70e1c8",
      "10": "#95f3d9",
      "11": "#25d0ab",
      "12": "#e7fcf7"
    },
    lime: {
      "1": "#141807",
      "2": "#181d08",
      "3": "#1e260d",
      "4": "#252e0f",
      "5": "#2b3711",
      "6": "#344213",
      "7": "#415215",
      "8": "#536716",
      "9": "#99d52a",
      "10": "#c4f042",
      "11": "#87be22",
      "12": "#effbdd"
    },
    yellow: {
      "1": "#1c1500",
      "2": "#221a00",
      "3": "#2c2100",
      "4": "#352800",
      "5": "#3e3000",
      "6": "#493c00",
      "7": "#594a05",
      "8": "#705e00",
      "9": "#f5d90a",
      "10": "#ffef5c",
      "11": "#f0c000",
      "12": "#fffad1"
    },
    amber: {
      "1": "#1f1300",
      "2": "#271700",
      "3": "#341c00",
      "4": "#3f2200",
      "5": "#4a2900",
      "6": "#573300",
      "7": "#693f05",
      "8": "#824e00",
      "9": "#ffb224",
      "10": "#ffcb47",
      "11": "#f1a10d",
      "12": "#fef3dd"
    },
    gold: {
      "1": "#171613",
      "2": "#1c1a15",
      "3": "#26231c",
      "4": "#2e2a21",
      "5": "#353026",
      "6": "#3e382c",
      "7": "#504737",
      "8": "#6b5d48",
      "9": "#978365",
      "10": "#a59071",
      "11": "#bfa888",
      "12": "#f7f4e7"
    },
    bronze: {
      "1": "#191514",
      "2": "#1f1917",
      "3": "#2a211f",
      "4": "#332824",
      "5": "#3b2e29",
      "6": "#453530",
      "7": "#57433c",
      "8": "#74594e",
      "9": "#a18072",
      "10": "#b08c7d",
      "11": "#cba393",
      "12": "#f9ede7"
    },
    gray: {
      "1": "#161616",
      "2": "#1c1c1c",
      "3": "#232323",
      "4": "#282828",
      "5": "#2e2e2e",
      "6": "#343434",
      "7": "#3e3e3e",
      "8": "#505050",
      "9": "#707070",
      "10": "#7e7e7e",
      "11": "#a0a0a0",
      "12": "#ededed"
    },
    mauve: {
      "1": "#161618",
      "2": "#1c1c1f",
      "3": "#232326",
      "4": "#28282c",
      "5": "#2e2e32",
      "6": "#34343a",
      "7": "#3e3e44",
      "8": "#504f57",
      "9": "#706f78",
      "10": "#7e7d86",
      "11": "#a09fa6",
      "12": "#ededef"
    },
    slate: {
      "1": "#151718",
      "2": "#1a1d1e",
      "3": "#202425",
      "4": "#26292b",
      "5": "#2b2f31",
      "6": "#313538",
      "7": "#3a3f42",
      "8": "#4c5155",
      "9": "#697177",
      "10": "#787f85",
      "11": "#9ba1a6",
      "12": "#ecedee"
    },
    sage: {
      "1": "#141716",
      "2": "#191d1b",
      "3": "#1f2421",
      "4": "#252a27",
      "5": "#2a2f2c",
      "6": "#303633",
      "7": "#393f3c",
      "8": "#4a524e",
      "9": "#66736d",
      "10": "#75817b",
      "11": "#99a29e",
      "12": "#eceeed"
    },
    olive: {
      "1": "#151715",
      "2": "#1a1d19",
      "3": "#20241f",
      "4": "#262925",
      "5": "#2b2f2a",
      "6": "#313530",
      "7": "#3b3f3a",
      "8": "#4c514b",
      "9": "#687366",
      "10": "#778175",
      "11": "#9aa299",
      "12": "#eceeec"
    },
    sand: {
      "1": "#161615",
      "2": "#1c1c1a",
      "3": "#232320",
      "4": "#282826",
      "5": "#2e2e2b",
      "6": "#353431",
      "7": "#3e3e3a",
      "8": "#51504b",
      "9": "#717069",
      "10": "#7f7e77",
      "11": "#a1a09a",
      "12": "#ededec"
    },
    accent: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    base: {
      text: "#ecedee",
      textSecondary: "#9ba1a6",
      textTertiary: "#697177",
      background: "#151718",
      backgroundSecondary: "#1a1d1e",
      backgroundTertiary: "#202425",
      pureForeground: "#FFFFFF",
      pureBackground: "black"
    }
  },
  spacing: {
    "0": "0px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "11": "2.75rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "36": "9rem",
    "40": "10rem",
    "44": "11rem",
    "48": "12rem",
    "52": "13rem",
    "56": "14rem",
    "60": "15rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "96": "24rem",
    px: "1px"
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  boxShadow: {
    sm: {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      color: "rgba(0 ,0 ,0,0.05)",
      type: "dropShadow"
    },
    DEFAULT: [
      {
        x: 0,
        y: 1,
        blur: 3,
        spread: 0,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 1,
        blur: 2,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    md: [
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 2,
        blur: 4,
        spread: -2,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    lg: [
      {
        x: 0,
        y: 10,
        blur: 15,
        spread: "03",
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -4,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    xl: [
      {
        x: 0,
        y: 20,
        blur: 25,
        spread: -5,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 8,
        blur: 10,
        spread: -6,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    "2xl": [
      {
        x: 0,
        y: 25,
        blur: 50,
        spread: -12,
        color: "rgba(0,0,0,0.25)",
        type: "dropShadow"
      }
    ],
    inner: {
      x: 0,
      y: 2,
      blur: 4,
      spread: 0,
      color: "rgba(0,0,0,0.05)",
      type: "innerShadow"
    }
  },
  tokenSetOrder: {
    "0": "global",
    "1": "light",
    "2": "dark",
    "3": "theme"
  }
};
var Radix222 = RadixColors322;
function capitalize222(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function flattenKeys222(obj, sep = "", parentKey = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? parentKey + sep + capitalize222(key) : key;
    if (typeof value === "object") {
      Object.assign(acc, flattenKeys222(value, sep, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
}
var lightColors222 = flattenKeys222(theme_default222.light);
var brandColors222 = flattenKeys222(theme_default222.brand);
var supportColors222 = flattenKeys222(theme_default222.support);
var darkColors222 = flattenKeys222(theme_default222.dark);
var bgToneScales222 = {
  bgTone1: (value) => ({
    backgroundColor: `$${value}1`
  }),
  bgTone2: (value) => ({
    backgroundColor: `$${value}2`
  }),
  bgTone3: (value) => ({
    backgroundColor: `$${value}3`
  }),
  bgTone4: (value) => ({
    backgroundColor: `$${value}4`
  }),
  bgTone5: (value) => ({
    backgroundColor: `$${value}5`
  }),
  bgTone6: (value) => ({
    backgroundColor: `$${value}6`
  }),
  bgTone7: (value) => ({
    backgroundColor: `$${value}7`
  }),
  bgTone8: (value) => ({
    backgroundColor: `$${value}8`
  }),
  bgTone9: (value) => ({
    backgroundColor: `$${value}9`
  }),
  bgTone10: (value) => ({
    backgroundColor: `$${value}10`
  }),
  bgTone11: (value) => ({
    backgroundColor: `$${value}11`
  }),
  bgTone12: (value) => ({
    backgroundColor: `$${value}12`
  })
};
var textToneScales222 = {
  textTone1: (value) => ({
    color: `$${value}1`
  }),
  textTone2: (value) => ({
    color: `$${value}2`
  }),
  textTone3: (value) => ({
    color: `$${value}3`
  }),
  textTone4: (value) => ({
    color: `$${value}4`
  }),
  textTone5: (value) => ({
    color: `$${value}5`
  }),
  textTone6: (value) => ({
    color: `$${value}6`
  }),
  textTone7: (value) => ({
    color: `$${value}7`
  }),
  textTone8: (value) => ({
    color: `$${value}8`
  }),
  textTone9: (value) => ({
    color: `$${value}9`
  }),
  textTone10: (value) => ({
    color: `$${value}10`
  }),
  textTone11: (value) => ({
    color: `$${value}11`
  }),
  textTone12: (value) => ({
    color: `$${value}12`
  })
};
var borderToneScales222 = {
  borderTone1: (value) => ({
    borderColor: `$${value}1`
  }),
  borderTone2: (value) => ({
    borderColor: `$${value}2`
  }),
  borderTone3: (value) => ({
    borderColor: `$${value}3`
  }),
  borderTone4: (value) => ({
    borderColor: `$${value}4`
  }),
  borderTone5: (value) => ({
    borderColor: `$${value}5`
  }),
  borderTone6: (value) => ({
    borderColor: `$${value}6`
  }),
  borderTone7: (value) => ({
    borderColor: `$${value}7`
  }),
  borderTone8: (value) => ({
    borderColor: `$${value}8`
  }),
  borderTone9: (value) => ({
    borderColor: `$${value}9`
  }),
  borderTone10: (value) => ({
    borderColor: `$${value}10`
  }),
  borderTone11: (value) => ({
    borderColor: `$${value}11`
  }),
  borderTone12: (value) => ({
    borderColor: `$${value}12`
  })
};
var {
  styled: styled222,
  css: css222,
  globalCss: globalCss222,
  keyframes: keyframes222,
  getCssText: getCssText222,
  theme: theme222,
  createTheme: createTheme222,
  config: config222
} = (0, import_react14.createStitches)({
  theme: {
    colors: __spreadValues222(__spreadValues222(__spreadValues222({}, lightColors222), brandColors222), supportColors222),
    space: __spreadValues222({
      "100%": "100%"
    }, theme_default222.spacing),
    sizes: __spreadValues222({
      "100%": "100%"
    }, theme_default222.spacing),
    fontSizes: __spreadValues222({}, theme_default222.fontSizes),
    fonts: {
      heading: `${theme_default222.fontFamilies.heading},'SkModernistBold',SkModernistBold,'Sk-Modernist-Bold',sans-serif`,
      branding: `${theme_default222.fontFamilies.heading},'SkModernistRegular',SkModernistRegular,'Sk-Modernist-Regular',sans-serif`,
      body: `'Inter Tight',${theme_default222.fontFamilies.body}, sans-serif`
    },
    fontWeights: __spreadValues222({}, theme_default222.fontWeights),
    lineHeights: __spreadValues222({}, theme_default222.lineHeights),
    letterSpacings: __spreadValues222({}, theme_default222.letterSpacing),
    borderWidths: __spreadValues222({}, theme_default222.borderWidth),
    borderStyles: {
      solid: "solid",
      dashed: "dashed"
    },
    radii: __spreadValues222({}, theme_default222.borderRadius),
    zIndices: {},
    transitions: {
      fast: "all 0.1s",
      slow: "all 0.4s ease-in-out"
    },
    shadows: {
      1: `0.3px 0.5px 0.7px ${Radix222.blackA.blackA5},
          0.4px 0.8px 1px -1.2px ${Radix222.blackA.blackA5},
          1px 2px 2.5px -2.5px ${Radix222.blackA.blackA5}`,
      2: `0.3px 0.5px 0.7px ${Radix222.blackA.blackA5},
          0.8px 1.6px 2px -0.8px ${Radix222.blackA.blackA5},
          2.1px 4.1px 5.2px -1.7px ${Radix222.blackA.blackA5},
          5px 10px 12.6px -2.5px ${Radix222.blackA.blackA5}`,
      3: `0.3px 0.5px 0.7px ${Radix222.blackA.blackA5},
          1.5px 2.9px 3.7px -0.4px ${Radix222.blackA.blackA4},
          2.7px 5.4px 6.8px -0.7px ${Radix222.blackA.blackA4},
          4.5px 8.9px 11.2px -1.1px ${Radix222.blackA.blackA4},
          7.1px 14.3px 18px -1.4px ${Radix222.blackA.blackA4},
          11.2px 22.3px 28.1px -1.8px ${Radix222.blackA.blackA4}`,
      subtle: `0.3px 0.5px 0.7px ${Radix222.blackA.blackA3},
          0.8px 1.6px 2px -0.8px ${Radix222.blackA.blackA3},
          2.1px 4.1px 5.2px -1.7px ${Radix222.blackA.blackA3}`
    }
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)"
  },
  utils: __spreadProps222(__spreadValues222(__spreadValues222(__spreadValues222({}, bgToneScales222), textToneScales222), borderToneScales222), {
    m: (value) => ({
      margin: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    // Abbreviated padding properties
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    // A property for applying flex together
    flex: (value) => ({
      display: "flex",
      flex: value
    }),
    // A property for applying grid together
    grid: (value) => ({
      display: "grid",
      grid: value
    }),
    // A property for applying width/height together
    boxSize: (value) => ({
      width: value,
      height: value
    }),
    w: (value) => ({
      width: value
    }),
    h: (value) => ({
      height: value
    }),
    // An abbreviated property for border-radius
    br: (value) => ({
      borderRadius: value
    }),
    bg: (value) => ({
      backgroundColor: value
    })
  }),
  themeMap: __spreadValues222({}, import_react14.defaultThemeMap)
});
var stitchesDarkTheme222 = createTheme222("dark", {
  colors: __spreadValues222({}, darkColors222)
});
var reset222 = globalCss222({
  "*": { margin: 0, boxSizing: "border-box" }
});
var brandFonts222 = globalCss222({
  "@font-face": [
    {
      fontFamily: "skModernistBold",
      src: 'url("/fonts/sk-modernist-bold-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-bold-webfont.woff") format("woff"),url("/fonts/sk-modernist-bold-webfont.ttf") format("truetype")',
      fontWeight: "bold"
    },
    {
      fontFamily: "skModernistRegular",
      src: 'url("/fonts/sk-modernist-regular-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-regular-webfont.woff") format("woff"),url("/fonts/sk-modernist-regular-webfont.ttf") format("truetype")',
      fontWeight: 400
    }
  ]
});
var Box222 = styled222("div", {});
var Stack222 = styled222(Box222, {
  display: "flex",
  flexDirection: "column",
  gap: "$4"
});
var AutoSpinner222 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "svg",
    {
      version: "1.1",
      id: "L9",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 100 100",
      enableBackground: "new 0 0 0 0",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
          children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "animateTransform",
            {
              attributeName: "transform",
              attributeType: "XML",
              type: "rotate",
              dur: "1s",
              from: "0 50 50",
              to: "360 50 50",
              repeatCount: "indefinite"
            }
          )
        }
      )
    }
  );
};
function getButtonToneStyle222(tone, intent) {
  if (!tone) {
    return;
  } else if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "black"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else if (intent === "ghost") {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    if (intent === "primary") {
      return {
        bgTone12: tone,
        "&:hover": {
          bgTone12: tone
        },
        "&:active": {
          bgTone12: tone
        },
        color: `$${tone}2`
      };
    } else if (intent === "secondary") {
      return {
        bgTone6: tone,
        "&:hover": {
          bgTone7: tone
        },
        "&:active": {
          bgTone8: tone
        },
        color: `$${tone}12`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "white"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  }
}
function getButtonShadowStyle222(tone, depth) {
  const colorFromRadix = __objRest222(RadixColors2222, []);
  const shadowColor = colorFromRadix[tone + "A"];
  if (depth === "0") {
    return {
      boxShadow: "none"
    };
  } else if (depth === "1") {
    return {
      [`.${stitchesDarkTheme222} &`]: {
        $$shadowColor: shadowColor[tone + "A6"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,                
                0 0.8px 1px -1.2px $$shadowColor,
                0 2px 2.5px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "2") {
    return {
      [`.${stitchesDarkTheme222} &`]: {
        $$shadowColor: shadowColor[tone + "A4"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 1.6px 2px -0.8px $$shadowColor,
                0 4.1px 5.2px -1.7px $$shadowColor,
                0 10px 12.6px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "3") {
    return {
      [`.${stitchesDarkTheme222} &`]: {
        $$shadowColor: shadowColor[tone + "A5"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 2.9px 3.7px -0.4px $$shadowColor,
                0 5.4px 6.8px -0.7px $$shadowColor,
                0 8.9px 11.2px -1.1px $$shadowColor,
                0 14.3px 18px -1.4px $$shadowColor,
                0 22.3px 28.1px -1.8px $$shadowColor`
      }
    };
  } else
    return {};
}
function getCheckboxToneStyle222(tone) {
  if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "black"
    };
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    return {
      bgTone3: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "8"}`,
      "&:active": {
        bgTone4: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  } else {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  }
}
var BaseButton222 = styled222("button", {
  all: "unset",
  border: "none",
  boxSizing: "border-box",
  userSelect: "none",
  position: "relative",
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.75
  },
  // "&:hover": {
  // 	transform: "translateY(-1px)",
  // },
  "&:active": {
    transform: "translateY(1px)"
  },
  // mdx fix
  "& .button-text p": {
    lineHeight: 1
    // opacity: 0,
  },
  overflow: "hidden",
  fontFamily: "$heading",
  fontWeight: "$bold",
  cursor: "pointer",
  display: "inline-flex",
  gap: "$2",
  // lineHeight: ,
  alignItems: "center",
  fontSize: "$base",
  transition: "$fast",
  variants: {
    size: {
      sm: {
        borderRadius: "$lg",
        fontSize: 11,
        height: 30,
        px: "$3",
        py: "$2"
      },
      md: {
        borderRadius: "$lg",
        fontSize: 13,
        height: "$8",
        px: "$3",
        py: "$2"
      },
      lg: {
        borderRadius: "$xl",
        fontSize: 15,
        height: "$10",
        px: "$4",
        py: "$3"
      },
      xl: {
        borderRadius: "$xl",
        fontSize: 17,
        height: "$11",
        px: "$5",
        py: "$4"
      }
    },
    isRound: {
      true: {
        borderRadius: "$full"
      }
    },
    align: {
      left: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      right: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      },
      around: {
        justifyContent: "space-around"
      }
    }
  },
  compoundVariants: [
    {
      size: "sm",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    },
    {
      size: "md",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    },
    {
      size: "lg",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    },
    {
      size: "xl",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    }
  ],
  defaultVariants: {
    size: "md",
    isRound: true,
    align: "center"
  }
});
var Button222 = import_react13.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      size,
      align,
      tone = "slate",
      intent = "primary",
      isLoading,
      children,
      leftIcon,
      rightIcon,
      depth,
      css: css3,
      isDark
    } = _b, props = __objRest222(_b, [
      "size",
      "align",
      "tone",
      "intent",
      "isLoading",
      "children",
      "leftIcon",
      "rightIcon",
      "depth",
      "css",
      "isDark"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      BaseButton222,
      __spreadProps222(__spreadValues222({
        className: isDark ? stitchesDarkTheme222 : void 0,
        ref,
        size,
        align,
        css: import_lodash10.default.merge(
          getButtonToneStyle222(tone, intent),
          getButtonShadowStyle222(tone, depth),
          css3
        )
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            Box222,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: leftIcon
            }
          ),
          isLoading && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            Box222,
            {
              style: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                inset: 0
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AutoSpinner222, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            Box222,
            {
              className: "button-text",
              style: {
                opacity: isLoading ? 0 : 1
              },
              children
            }
          ),
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            Box222,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: rightIcon
            }
          )
        ]
      })
    );
  }
);
var Text222 = styled222("div", {
  fontFamily: "$heading",
  variants: {
    size: {
      "page-title": {
        fontWeight: "$bold",
        fontSize: "$6xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      "page-title2": {
        fontWeight: "$bold",
        fontSize: "$5xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title1: {
        fontWeight: "$bold",
        fontSize: "$3xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title2: {
        fontWeight: "$bold",
        fontSize: "$2xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title3: {
        fontWeight: "$bold",
        fontSize: "$xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle1: {
        fontWeight: "$bold",
        fontSize: "$lg",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle2: {
        fontWeight: "$bold",
        fontSize: "$base",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      overline: {
        fontFamily: "$body",
        fontWeight: "$bold",
        fontSize: "$xs",
        lineHeight: "$heading",
        letterSpacing: "$increased",
        textTransform: "$uppercase"
      },
      body: {
        fontFamily: "$body",
        fontWeight: "$normal",
        fontSize: "$base",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      "body-bold": {
        fontWeight: "$bold",
        fontFamily: "$body",
        fontSize: "$base",
        lineHeight: "body",
        letterSpacing: "$default"
      },
      label: {
        fontFamily: "$body",
        fontSize: "$sm",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      caption: {
        fontFamily: "$body",
        fontSize: "$xs",
        lineHeight: "$body",
        letterSpacing: "$default"
      }
    }
  },
  defaultVariants: {
    size: "body"
  }
});
var nomiObject222 = {
  fontSize: "$base",
  fontFamily: "$body",
  lineHeight: "$body",
  webkitFontSmoothing: "antialiased",
  "& h1": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$2xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h2": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h3": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$lg",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h4": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$base",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& > *": {
    marginBottom: "$6"
  },
  "& > *:last-child": {
    marginBottom: 0
  },
  "& a": {
    color: "$grass9"
  },
  "& a:hover": {
    color: "$grass11"
  },
  "& ul,& ol": {
    paddingLeft: "$4"
  },
  "& li": {
    marginBottom: "$2"
  },
  "& img": {
    maxWidth: "100%",
    height: "auto"
  }
};
var NomiStyle222 = styled222("div", nomiObject222);
var nomiClass222 = css222(nomiObject222);
var LucideIcon222 = (_a) => {
  var _b = _a, {
    name = "activity",
    color,
    size,
    boxSize,
    fill = "none",
    strokeWidth,
    className
  } = _b, props = __objRest222(_b, [
    "name",
    "color",
    "size",
    "boxSize",
    "fill",
    "strokeWidth",
    "className"
  ]);
  const iconNameCamelCase = import_lodash12.default.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  const LucideIcon3 = icons222[IconNameUpperCase];
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    LucideIcon3,
    __spreadValues222({
      color,
      size: size ? size : "100%",
      strokeWidth,
      fill,
      style: {
        flexShrink: 1,
        height: boxSize ? boxSize : void 0,
        width: boxSize ? boxSize : void 0,
        aspectRatio: "1"
      },
      className
    }, props)
  );
};
function CheckboxWithLabel222(_a, ref) {
  var _b = _a, {
    defaultChecked,
    children,
    fontSize = "lg",
    tone = "slate",
    css: css3
  } = _b, props = __objRest222(_b, [
    "defaultChecked",
    "children",
    "fontSize",
    "tone",
    "css"
  ]);
  const checkbox = (0, import_Checkbox4.useCheckboxState)({
    state: defaultChecked
  });
  console.log(checkbox);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    CheckboxLabel222,
    {
      "data-state": props.disabled ? "disabled" : void 0,
      css: { fontSize: `$${fontSize}`, color: "$baseText" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react_aria4.VisuallyHidden, { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          import_Checkbox4.Checkbox,
          __spreadValues222(__spreadValues222({
            ref
          }, checkbox), props)
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          CheckboxRoot222,
          {
            "data-state": checkbox.state ? "checked" : "unchecked",
            css: import_lodash11.default.merge(getCheckboxToneStyle222(tone), css3),
            children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(CheckboxIndicator222, { checked: !!checkbox.state, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(LucideIcon222, { strokeWidth: 2.5, name: "check" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Text222, { css: { fontSize: "inherit" }, children })
      ]
    }
  );
}
var Checkbox222 = import_react15.default.forwardRef(CheckboxWithLabel222);
var CheckboxLabel222 = styled222("label", {
  lineHeight: 1,
  height: "1em",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4em",
  userSelect: "none",
  variants: {
    status: {
      enabled: {
        cursor: "pointer"
      },
      disabled: {
        opacity: 0.65,
        cursor: "not-allowed"
      }
    }
  },
  "&[data-state=disabled]": {
    opacity: 0.65,
    cursor: "not-allowed"
  }
});
var CheckboxRoot222 = styled222("div", {
  aspectRatio: "1",
  fontSize: "inherit",
  width: "auto",
  height: "100%",
  overflow: "hidden",
  flexShrink: 1,
  borderRadius: "25%",
  justifyContent: "center",
  padding: "0",
  border: "none",
  display: "inline-flex",
  transition: "all 0.2s",
  alignItems: "center",
  ":active": { transform: "scale(0.9)" }
});
var CheckboxIndicator222 = styled222("div", {
  aspectRatio: "1/1",
  height: "1em",
  width: "1em",
  position: "relative",
  textAlign: "center",
  overflow: "hidden",
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  justifyContent: "center",
  padding: 0,
  opacity: 0,
  variants: {
    checked: {
      true: {
        opacity: 1
      }
    }
  }
});
var hygraph222 = new import_graphql_request4.GraphQLClient(
  "https://ap-northeast-1.cdn.hygraph.com/content/clf0ox8k023ql01t56zef5n6w/master"
);
var QUERY222 = import_graphql_request4.gql`
	query Footers {
		footers {
			id
			sectionTitle
			sectionContent {
				icon {
					url
				}
				linkTitle
				url
			}
		}
	}
`;
var FooterContainer222 = styled222("div", {
  boxSizing: "border-box",
  maxWidth: "1000px",
  m: "0 auto",
  p: 48,
  pb: 128,
  pt: 0,
  gap: 48,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  width: "100%",
  color: "$baseText",
  right: "0%",
  position: "relative",
  "@sm": {
    display: "grid",
    right: "-5%",
    position: "relative",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@md": {
    right: "-12%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@lg": {
    right: "-2.5%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)"
  },
  "& a": {
    color: "$baseText",
    opacity: 0.6,
    fontFamily: "$body",
    textDecoration: "none"
  },
  "& a:hover": {
    opacity: 1
  }
});
var FooterSection222 = styled222("div", {
  flexGrow: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterContent222 = styled222("ul", {
  flex: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterLink222 = styled222("li", {
  m: 0,
  p: 0,
  listStyle: "none",
  "& a": {
    display: "inline-flex",
    gap: 4,
    alignItems: "center"
  },
  "& img": {
    filter: "invert(1)"
  },
  [`.${stitchesDarkTheme222} & img`]: {
    filter: "invert(0)"
  }
});
var __defProp2222 = Object.defineProperty;
var __defProps2222 = Object.defineProperties;
var __getOwnPropDescs2222 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2222 = Object.getOwnPropertySymbols;
var __hasOwnProp2222 = Object.prototype.hasOwnProperty;
var __propIsEnum2222 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2222 = (obj, key, value) => key in obj ? __defProp2222(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2222 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2222.call(b, prop))
      __defNormalProp2222(a, prop, b[prop]);
  if (__getOwnPropSymbols2222)
    for (var prop of __getOwnPropSymbols2222(b)) {
      if (__propIsEnum2222.call(b, prop))
        __defNormalProp2222(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2222 = (a, b) => __defProps2222(a, __getOwnPropDescs2222(b));
var __objRest2222 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2222.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2222)
    for (var prop of __getOwnPropSymbols2222(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2222.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var theme_default2222 = {
  brand: {
    hover: "#6DEFBF",
    primary: "#3CEAAA",
    pressed: "#33C790",
    disable: "#1E7555",
    secondary: "#03BCE4"
  },
  support: {
    red: "#F16769",
    orange: "#FFB459",
    blue: "#4EA3FE",
    purpple: "#C692E0",
    silver: "#D3D5F2",
    yellow: "#FFED70"
  },
  colors: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  borderWidth: {
    "0": "0px",
    "1": "1px",
    "2": "2px",
    "4": "4px",
    "8": "8px",
    DEFAULT: "1px"
  },
  opacity: {
    "0": "0%",
    "5": "50%",
    "10": "10%",
    "20": "20%",
    "25": "25%",
    "30": "30%",
    "40": "40%",
    "50": "50%",
    "60": "60%",
    "70": "70%",
    "75": "75%",
    "80": "80%",
    "95": "95%",
    "100": "100%"
  },
  fontFamilies: {
    heading: "Sk-Modernist",
    body: "Inter"
  },
  lineHeights: {
    heading: "110%",
    body: "150%",
    tight: "140%",
    single: "100%"
  },
  letterSpacing: {
    default: "0%",
    increased: "2%",
    decreased: "-2%"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
  },
  fontSizes: {
    "6xl": "72px",
    "5xl": "64px",
    "4xl": "56px",
    "3xl": "48px",
    "2xl": "36px",
    xl: "24px",
    lg: "18px",
    base: "16px",
    sm: "14px",
    xs: "11px"
  },
  typography: {
    "page-title": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "72px",
      letterSpacing: "-2%"
    },
    "page-title2": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "64px",
      letterSpacing: "-2%"
    },
    title1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "48px",
      letterSpacing: "-2%"
    },
    title2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "36px",
      letterSpacing: "-2%"
    },
    title3: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "24px",
      letterSpacing: "-2%"
    },
    subtitle1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "18px",
      letterSpacing: "-2%"
    },
    subtitle2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "16px",
      letterSpacing: "-2%"
    },
    overline: {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "11px",
      letterSpacing: "2%",
      textCase: "uppercase"
    },
    "body-heading": {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "18px",
      letterSpacing: "0%",
      paragraphSpacing: "1.5rem"
    },
    body: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    "body-bold": {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    label: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "140%",
      fontSize: "14px",
      letterSpacing: "0%"
    },
    caption: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "11px",
      letterSpacing: "0%"
    }
  },
  paragraphSpacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  light: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  dark: {
    tomato: {
      "1": "#1d1412",
      "2": "#2a1410",
      "3": "#3b1813",
      "4": "#481a14",
      "5": "#541c15",
      "6": "#652016",
      "7": "#7f2315",
      "8": "#a42a12",
      "9": "#e54d2e",
      "10": "#ec5e41",
      "11": "#f16a50",
      "12": "#feefec"
    },
    red: {
      "1": "#1f1315",
      "2": "#291415",
      "3": "#3c181a",
      "4": "#481a1d",
      "5": "#541b1f",
      "6": "#671e22",
      "7": "#822025",
      "8": "#aa2429",
      "9": "#e5484d",
      "10": "#f2555a",
      "11": "#ff6369",
      "12": "#feecee"
    },
    crimson: {
      "1": "#1d1418",
      "2": "#27141c",
      "3": "#3c1827",
      "4": "#481a2d",
      "5": "#541b33",
      "6": "#641d3b",
      "7": "#801d45",
      "8": "#ae1955",
      "9": "#e93d82",
      "10": "#f04f88",
      "11": "#f76190",
      "12": "#feecf4"
    },
    pink: {
      "1": "#1f121b",
      "2": "#271421",
      "3": "#3a182f",
      "4": "#451a37",
      "5": "#501b3f",
      "6": "#601d48",
      "7": "#7a1d5a",
      "8": "#a71873",
      "9": "#d6409f",
      "10": "#e34ba9",
      "11": "#f65cb6",
      "12": "#feebf7"
    },
    plum: {
      "1": "#1d131d",
      "2": "#251425",
      "3": "#341a34",
      "4": "#3e1d40",
      "5": "#48214b",
      "6": "#542658",
      "7": "#692d6f",
      "8": "#883894",
      "9": "#ab4aba",
      "10": "#bd54c6",
      "11": "#d864d8",
      "12": "#fbecfc"
    },
    purple: {
      "1": "#1b141d",
      "2": "#221527",
      "3": "#301a3a",
      "4": "#3a1e48",
      "5": "#432155",
      "6": "#4e2667",
      "7": "#5f2d84",
      "8": "#7938b2",
      "9": "#8e4ec6",
      "10": "#9d5bd2",
      "11": "#bf7af0",
      "12": "#f7ecfc"
    },
    violet: {
      "1": "#17151f",
      "2": "#1c172b",
      "3": "#251e40",
      "4": "#2c2250",
      "5": "#32275f",
      "6": "#392c72",
      "7": "#443592",
      "8": "#5842c3",
      "9": "#6e56cf",
      "10": "#7c66dc",
      "11": "#9e8cfc",
      "12": "#f1eefe"
    },
    indigo: {
      "1": "#131620",
      "2": "#15192d",
      "3": "#192140",
      "4": "#1c274f",
      "5": "#1f2c5c",
      "6": "#22346e",
      "7": "#273e89",
      "8": "#2f4eb2",
      "9": "#3e63dd",
      "10": "#5373e7",
      "11": "#849dff",
      "12": "#eef1fd"
    },
    blue: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    cyan: {
      "1": "#07191d",
      "2": "#061e24",
      "3": "#072830",
      "4": "#07303b",
      "5": "#073844",
      "6": "#064150",
      "7": "#045063",
      "8": "#00647d",
      "9": "#05a2c2",
      "10": "#00b1cc",
      "11": "#00c2d7",
      "12": "#e1f8fa"
    },
    teal: {
      "1": "#091915",
      "2": "#04201b",
      "3": "#062923",
      "4": "#07312b",
      "5": "#083932",
      "6": "#09443c",
      "7": "#0b544a",
      "8": "#0c6d62",
      "9": "#12a594",
      "10": "#10b3a3",
      "11": "#0ac5b3",
      "12": "#e1faf4"
    },
    green: {
      "1": "#0d1912",
      "2": "#0c1f17",
      "3": "#0f291e",
      "4": "#113123",
      "5": "#133929",
      "6": "#164430",
      "7": "#1b543a",
      "8": "#236e4a",
      "9": "#30a46c",
      "10": "#3cb179",
      "11": "#4cc38a",
      "12": "#e5fbeb"
    },
    grass: {
      "1": "#0d1912",
      "2": "#0f1e13",
      "3": "#132819",
      "4": "#16301d",
      "5": "#193921",
      "6": "#1d4427",
      "7": "#245530",
      "8": "#2f6e3b",
      "9": "#46a758",
      "10": "#55b467",
      "11": "#63c174",
      "12": "#e5fbeb"
    },
    brown: {
      "1": "#191513",
      "2": "#221813",
      "3": "#2e201a",
      "4": "#36261e",
      "5": "#3e2c22",
      "6": "#493528",
      "7": "#5c4332",
      "8": "#775940",
      "9": "#ad7f58",
      "10": "#bd8b60",
      "11": "#dba16e",
      "12": "#faf0e5"
    },
    orange: {
      "1": "#1f1206",
      "2": "#2b1400",
      "3": "#391a03",
      "4": "#441f04",
      "5": "#4f2305",
      "6": "#5f2a06",
      "7": "#763205",
      "8": "#943e00",
      "9": "#f76808",
      "10": "#ff802b",
      "11": "#ff8b3e",
      "12": "#feeadd"
    },
    sky: {
      "1": "#0c1820",
      "2": "#071d2a",
      "3": "#082636",
      "4": "#082d41",
      "5": "#08354c",
      "6": "#083e59",
      "7": "#064b6b",
      "8": "#005d85",
      "9": "#68ddfd",
      "10": "#8ae8ff",
      "11": "#2ec8ee",
      "12": "#eaf8ff"
    },
    mint: {
      "1": "#081917",
      "2": "#05201e",
      "3": "#052926",
      "4": "#04312c",
      "5": "#033a34",
      "6": "#01453d",
      "7": "#00564a",
      "8": "#006d5b",
      "9": "#70e1c8",
      "10": "#95f3d9",
      "11": "#25d0ab",
      "12": "#e7fcf7"
    },
    lime: {
      "1": "#141807",
      "2": "#181d08",
      "3": "#1e260d",
      "4": "#252e0f",
      "5": "#2b3711",
      "6": "#344213",
      "7": "#415215",
      "8": "#536716",
      "9": "#99d52a",
      "10": "#c4f042",
      "11": "#87be22",
      "12": "#effbdd"
    },
    yellow: {
      "1": "#1c1500",
      "2": "#221a00",
      "3": "#2c2100",
      "4": "#352800",
      "5": "#3e3000",
      "6": "#493c00",
      "7": "#594a05",
      "8": "#705e00",
      "9": "#f5d90a",
      "10": "#ffef5c",
      "11": "#f0c000",
      "12": "#fffad1"
    },
    amber: {
      "1": "#1f1300",
      "2": "#271700",
      "3": "#341c00",
      "4": "#3f2200",
      "5": "#4a2900",
      "6": "#573300",
      "7": "#693f05",
      "8": "#824e00",
      "9": "#ffb224",
      "10": "#ffcb47",
      "11": "#f1a10d",
      "12": "#fef3dd"
    },
    gold: {
      "1": "#171613",
      "2": "#1c1a15",
      "3": "#26231c",
      "4": "#2e2a21",
      "5": "#353026",
      "6": "#3e382c",
      "7": "#504737",
      "8": "#6b5d48",
      "9": "#978365",
      "10": "#a59071",
      "11": "#bfa888",
      "12": "#f7f4e7"
    },
    bronze: {
      "1": "#191514",
      "2": "#1f1917",
      "3": "#2a211f",
      "4": "#332824",
      "5": "#3b2e29",
      "6": "#453530",
      "7": "#57433c",
      "8": "#74594e",
      "9": "#a18072",
      "10": "#b08c7d",
      "11": "#cba393",
      "12": "#f9ede7"
    },
    gray: {
      "1": "#161616",
      "2": "#1c1c1c",
      "3": "#232323",
      "4": "#282828",
      "5": "#2e2e2e",
      "6": "#343434",
      "7": "#3e3e3e",
      "8": "#505050",
      "9": "#707070",
      "10": "#7e7e7e",
      "11": "#a0a0a0",
      "12": "#ededed"
    },
    mauve: {
      "1": "#161618",
      "2": "#1c1c1f",
      "3": "#232326",
      "4": "#28282c",
      "5": "#2e2e32",
      "6": "#34343a",
      "7": "#3e3e44",
      "8": "#504f57",
      "9": "#706f78",
      "10": "#7e7d86",
      "11": "#a09fa6",
      "12": "#ededef"
    },
    slate: {
      "1": "#151718",
      "2": "#1a1d1e",
      "3": "#202425",
      "4": "#26292b",
      "5": "#2b2f31",
      "6": "#313538",
      "7": "#3a3f42",
      "8": "#4c5155",
      "9": "#697177",
      "10": "#787f85",
      "11": "#9ba1a6",
      "12": "#ecedee"
    },
    sage: {
      "1": "#141716",
      "2": "#191d1b",
      "3": "#1f2421",
      "4": "#252a27",
      "5": "#2a2f2c",
      "6": "#303633",
      "7": "#393f3c",
      "8": "#4a524e",
      "9": "#66736d",
      "10": "#75817b",
      "11": "#99a29e",
      "12": "#eceeed"
    },
    olive: {
      "1": "#151715",
      "2": "#1a1d19",
      "3": "#20241f",
      "4": "#262925",
      "5": "#2b2f2a",
      "6": "#313530",
      "7": "#3b3f3a",
      "8": "#4c514b",
      "9": "#687366",
      "10": "#778175",
      "11": "#9aa299",
      "12": "#eceeec"
    },
    sand: {
      "1": "#161615",
      "2": "#1c1c1a",
      "3": "#232320",
      "4": "#282826",
      "5": "#2e2e2b",
      "6": "#353431",
      "7": "#3e3e3a",
      "8": "#51504b",
      "9": "#717069",
      "10": "#7f7e77",
      "11": "#a1a09a",
      "12": "#ededec"
    },
    accent: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    base: {
      text: "#ecedee",
      textSecondary: "#9ba1a6",
      textTertiary: "#697177",
      background: "#151718",
      backgroundSecondary: "#1a1d1e",
      backgroundTertiary: "#202425",
      pureForeground: "#FFFFFF",
      pureBackground: "black"
    }
  },
  spacing: {
    "0": "0px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "11": "2.75rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "36": "9rem",
    "40": "10rem",
    "44": "11rem",
    "48": "12rem",
    "52": "13rem",
    "56": "14rem",
    "60": "15rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "96": "24rem",
    px: "1px"
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  boxShadow: {
    sm: {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      color: "rgba(0 ,0 ,0,0.05)",
      type: "dropShadow"
    },
    DEFAULT: [
      {
        x: 0,
        y: 1,
        blur: 3,
        spread: 0,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 1,
        blur: 2,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    md: [
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 2,
        blur: 4,
        spread: -2,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    lg: [
      {
        x: 0,
        y: 10,
        blur: 15,
        spread: "03",
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -4,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    xl: [
      {
        x: 0,
        y: 20,
        blur: 25,
        spread: -5,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 8,
        blur: 10,
        spread: -6,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    "2xl": [
      {
        x: 0,
        y: 25,
        blur: 50,
        spread: -12,
        color: "rgba(0,0,0,0.25)",
        type: "dropShadow"
      }
    ],
    inner: {
      x: 0,
      y: 2,
      blur: 4,
      spread: 0,
      color: "rgba(0,0,0,0.05)",
      type: "innerShadow"
    }
  },
  tokenSetOrder: {
    "0": "global",
    "1": "light",
    "2": "dark",
    "3": "theme"
  }
};
var Radix2222 = RadixColors3222;
function capitalize2222(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function flattenKeys2222(obj, sep = "", parentKey = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? parentKey + sep + capitalize2222(key) : key;
    if (typeof value === "object") {
      Object.assign(acc, flattenKeys2222(value, sep, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
}
var lightColors2222 = flattenKeys2222(theme_default2222.light);
var brandColors2222 = flattenKeys2222(theme_default2222.brand);
var supportColors2222 = flattenKeys2222(theme_default2222.support);
var darkColors2222 = flattenKeys2222(theme_default2222.dark);
var bgToneScales2222 = {
  bgTone1: (value) => ({
    backgroundColor: `$${value}1`
  }),
  bgTone2: (value) => ({
    backgroundColor: `$${value}2`
  }),
  bgTone3: (value) => ({
    backgroundColor: `$${value}3`
  }),
  bgTone4: (value) => ({
    backgroundColor: `$${value}4`
  }),
  bgTone5: (value) => ({
    backgroundColor: `$${value}5`
  }),
  bgTone6: (value) => ({
    backgroundColor: `$${value}6`
  }),
  bgTone7: (value) => ({
    backgroundColor: `$${value}7`
  }),
  bgTone8: (value) => ({
    backgroundColor: `$${value}8`
  }),
  bgTone9: (value) => ({
    backgroundColor: `$${value}9`
  }),
  bgTone10: (value) => ({
    backgroundColor: `$${value}10`
  }),
  bgTone11: (value) => ({
    backgroundColor: `$${value}11`
  }),
  bgTone12: (value) => ({
    backgroundColor: `$${value}12`
  })
};
var textToneScales2222 = {
  textTone1: (value) => ({
    color: `$${value}1`
  }),
  textTone2: (value) => ({
    color: `$${value}2`
  }),
  textTone3: (value) => ({
    color: `$${value}3`
  }),
  textTone4: (value) => ({
    color: `$${value}4`
  }),
  textTone5: (value) => ({
    color: `$${value}5`
  }),
  textTone6: (value) => ({
    color: `$${value}6`
  }),
  textTone7: (value) => ({
    color: `$${value}7`
  }),
  textTone8: (value) => ({
    color: `$${value}8`
  }),
  textTone9: (value) => ({
    color: `$${value}9`
  }),
  textTone10: (value) => ({
    color: `$${value}10`
  }),
  textTone11: (value) => ({
    color: `$${value}11`
  }),
  textTone12: (value) => ({
    color: `$${value}12`
  })
};
var borderToneScales2222 = {
  borderTone1: (value) => ({
    borderColor: `$${value}1`
  }),
  borderTone2: (value) => ({
    borderColor: `$${value}2`
  }),
  borderTone3: (value) => ({
    borderColor: `$${value}3`
  }),
  borderTone4: (value) => ({
    borderColor: `$${value}4`
  }),
  borderTone5: (value) => ({
    borderColor: `$${value}5`
  }),
  borderTone6: (value) => ({
    borderColor: `$${value}6`
  }),
  borderTone7: (value) => ({
    borderColor: `$${value}7`
  }),
  borderTone8: (value) => ({
    borderColor: `$${value}8`
  }),
  borderTone9: (value) => ({
    borderColor: `$${value}9`
  }),
  borderTone10: (value) => ({
    borderColor: `$${value}10`
  }),
  borderTone11: (value) => ({
    borderColor: `$${value}11`
  }),
  borderTone12: (value) => ({
    borderColor: `$${value}12`
  })
};
var {
  styled: styled2222,
  css: css2222,
  globalCss: globalCss2222,
  keyframes: keyframes2222,
  getCssText: getCssText2222,
  theme: theme2222,
  createTheme: createTheme2222,
  config: config2222
} = (0, import_react18.createStitches)({
  theme: {
    colors: __spreadValues2222(__spreadValues2222(__spreadValues2222({}, lightColors2222), brandColors2222), supportColors2222),
    space: __spreadValues2222({
      "100%": "100%"
    }, theme_default2222.spacing),
    sizes: __spreadValues2222({
      "100%": "100%"
    }, theme_default2222.spacing),
    fontSizes: __spreadValues2222({}, theme_default2222.fontSizes),
    fonts: {
      heading: `${theme_default2222.fontFamilies.heading},'SkModernistBold',SkModernistBold,'Sk-Modernist-Bold',sans-serif`,
      branding: `${theme_default2222.fontFamilies.heading},'SkModernistRegular',SkModernistRegular,'Sk-Modernist-Regular',sans-serif`,
      body: `'Inter Tight',${theme_default2222.fontFamilies.body}, sans-serif`
    },
    fontWeights: __spreadValues2222({}, theme_default2222.fontWeights),
    lineHeights: __spreadValues2222({}, theme_default2222.lineHeights),
    letterSpacings: __spreadValues2222({}, theme_default2222.letterSpacing),
    borderWidths: __spreadValues2222({}, theme_default2222.borderWidth),
    borderStyles: {
      solid: "solid",
      dashed: "dashed"
    },
    radii: __spreadValues2222({}, theme_default2222.borderRadius),
    zIndices: {},
    transitions: {
      fast: "all 0.1s",
      slow: "all 0.4s ease-in-out"
    },
    shadows: {
      1: `0.3px 0.5px 0.7px ${Radix2222.blackA.blackA5},
          0.4px 0.8px 1px -1.2px ${Radix2222.blackA.blackA5},
          1px 2px 2.5px -2.5px ${Radix2222.blackA.blackA5}`,
      2: `0.3px 0.5px 0.7px ${Radix2222.blackA.blackA5},
          0.8px 1.6px 2px -0.8px ${Radix2222.blackA.blackA5},
          2.1px 4.1px 5.2px -1.7px ${Radix2222.blackA.blackA5},
          5px 10px 12.6px -2.5px ${Radix2222.blackA.blackA5}`,
      3: `0.3px 0.5px 0.7px ${Radix2222.blackA.blackA5},
          1.5px 2.9px 3.7px -0.4px ${Radix2222.blackA.blackA4},
          2.7px 5.4px 6.8px -0.7px ${Radix2222.blackA.blackA4},
          4.5px 8.9px 11.2px -1.1px ${Radix2222.blackA.blackA4},
          7.1px 14.3px 18px -1.4px ${Radix2222.blackA.blackA4},
          11.2px 22.3px 28.1px -1.8px ${Radix2222.blackA.blackA4}`,
      subtle: `0.3px 0.5px 0.7px ${Radix2222.blackA.blackA3},
          0.8px 1.6px 2px -0.8px ${Radix2222.blackA.blackA3},
          2.1px 4.1px 5.2px -1.7px ${Radix2222.blackA.blackA3}`
    }
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)"
  },
  utils: __spreadProps2222(__spreadValues2222(__spreadValues2222(__spreadValues2222({}, bgToneScales2222), textToneScales2222), borderToneScales2222), {
    m: (value) => ({
      margin: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    // Abbreviated padding properties
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    // A property for applying flex together
    flex: (value) => ({
      display: "flex",
      flex: value
    }),
    // A property for applying grid together
    grid: (value) => ({
      display: "grid",
      grid: value
    }),
    // A property for applying width/height together
    boxSize: (value) => ({
      width: value,
      height: value
    }),
    w: (value) => ({
      width: value
    }),
    h: (value) => ({
      height: value
    }),
    // An abbreviated property for border-radius
    br: (value) => ({
      borderRadius: value
    }),
    bg: (value) => ({
      backgroundColor: value
    })
  }),
  themeMap: __spreadValues2222({}, import_react18.defaultThemeMap)
});
var stitchesDarkTheme2222 = createTheme2222("dark", {
  colors: __spreadValues2222({}, darkColors2222)
});
var reset2222 = globalCss2222({
  "*": { margin: 0, boxSizing: "border-box" }
});
var brandFonts2222 = globalCss2222({
  "@font-face": [
    {
      fontFamily: "skModernistBold",
      src: 'url("/fonts/sk-modernist-bold-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-bold-webfont.woff") format("woff"),url("/fonts/sk-modernist-bold-webfont.ttf") format("truetype")',
      fontWeight: "bold"
    },
    {
      fontFamily: "skModernistRegular",
      src: 'url("/fonts/sk-modernist-regular-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-regular-webfont.woff") format("woff"),url("/fonts/sk-modernist-regular-webfont.ttf") format("truetype")',
      fontWeight: 400
    }
  ]
});
var Box2222 = styled2222("div", {});
var Stack2222 = styled2222(Box2222, {
  display: "flex",
  flexDirection: "column",
  gap: "$4"
});
var AutoSpinner2222 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      version: "1.1",
      id: "L9",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 100 100",
      enableBackground: "new 0 0 0 0",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
          children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            "animateTransform",
            {
              attributeName: "transform",
              attributeType: "XML",
              type: "rotate",
              dur: "1s",
              from: "0 50 50",
              to: "360 50 50",
              repeatCount: "indefinite"
            }
          )
        }
      )
    }
  );
};
function getButtonToneStyle2222(tone, intent) {
  if (!tone) {
    return;
  } else if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "black"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else if (intent === "ghost") {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    if (intent === "primary") {
      return {
        bgTone12: tone,
        "&:hover": {
          bgTone12: tone
        },
        "&:active": {
          bgTone12: tone
        },
        color: `$${tone}2`
      };
    } else if (intent === "secondary") {
      return {
        bgTone6: tone,
        "&:hover": {
          bgTone7: tone
        },
        "&:active": {
          bgTone8: tone
        },
        color: `$${tone}12`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "white"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  }
}
function getButtonShadowStyle2222(tone, depth) {
  const colorFromRadix = __objRest2222(RadixColors22222, []);
  const shadowColor = colorFromRadix[tone + "A"];
  if (depth === "0") {
    return {
      boxShadow: "none"
    };
  } else if (depth === "1") {
    return {
      [`.${stitchesDarkTheme2222} &`]: {
        $$shadowColor: shadowColor[tone + "A6"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,                
                0 0.8px 1px -1.2px $$shadowColor,
                0 2px 2.5px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "2") {
    return {
      [`.${stitchesDarkTheme2222} &`]: {
        $$shadowColor: shadowColor[tone + "A4"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 1.6px 2px -0.8px $$shadowColor,
                0 4.1px 5.2px -1.7px $$shadowColor,
                0 10px 12.6px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "3") {
    return {
      [`.${stitchesDarkTheme2222} &`]: {
        $$shadowColor: shadowColor[tone + "A5"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 2.9px 3.7px -0.4px $$shadowColor,
                0 5.4px 6.8px -0.7px $$shadowColor,
                0 8.9px 11.2px -1.1px $$shadowColor,
                0 14.3px 18px -1.4px $$shadowColor,
                0 22.3px 28.1px -1.8px $$shadowColor`
      }
    };
  } else
    return {};
}
function getCheckboxToneStyle2222(tone) {
  if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "black"
    };
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    return {
      bgTone3: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "8"}`,
      "&:active": {
        bgTone4: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  } else {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  }
}
var BaseButton2222 = styled2222("button", {
  all: "unset",
  border: "none",
  boxSizing: "border-box",
  userSelect: "none",
  position: "relative",
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.75
  },
  // "&:hover": {
  // 	transform: "translateY(-1px)",
  // },
  "&:active": {
    transform: "translateY(1px)"
  },
  // mdx fix
  "& .button-text p": {
    lineHeight: 1
    // opacity: 0,
  },
  overflow: "hidden",
  fontFamily: "$heading",
  fontWeight: "$bold",
  cursor: "pointer",
  display: "inline-flex",
  gap: "$2",
  // lineHeight: ,
  alignItems: "center",
  fontSize: "$base",
  transition: "$fast",
  variants: {
    size: {
      sm: {
        borderRadius: "$lg",
        fontSize: 11,
        height: 30,
        px: "$3",
        py: "$2"
      },
      md: {
        borderRadius: "$lg",
        fontSize: 13,
        height: "$8",
        px: "$3",
        py: "$2"
      },
      lg: {
        borderRadius: "$xl",
        fontSize: 15,
        height: "$10",
        px: "$4",
        py: "$3"
      },
      xl: {
        borderRadius: "$xl",
        fontSize: 17,
        height: "$11",
        px: "$5",
        py: "$4"
      }
    },
    isRound: {
      true: {
        borderRadius: "$full"
      }
    },
    align: {
      left: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      right: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      },
      around: {
        justifyContent: "space-around"
      }
    }
  },
  compoundVariants: [
    {
      size: "sm",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    },
    {
      size: "md",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    },
    {
      size: "lg",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    },
    {
      size: "xl",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    }
  ],
  defaultVariants: {
    size: "md",
    align: "center"
  }
});
var Button2222 = import_react17.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      size,
      align,
      tone = "slate",
      intent = "primary",
      isLoading,
      children,
      leftIcon,
      rightIcon,
      depth,
      css: css3,
      isDark
    } = _b, props = __objRest2222(_b, [
      "size",
      "align",
      "tone",
      "intent",
      "isLoading",
      "children",
      "leftIcon",
      "rightIcon",
      "depth",
      "css",
      "isDark"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
      BaseButton2222,
      __spreadProps2222(__spreadValues2222({
        className: isDark ? stitchesDarkTheme2222 : void 0,
        ref,
        size,
        align,
        css: import_lodash13.default.merge(
          getButtonToneStyle2222(tone, intent),
          getButtonShadowStyle2222(tone, depth),
          css3
        )
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            Box2222,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: leftIcon
            }
          ),
          isLoading && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            Box2222,
            {
              style: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                inset: 0
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(AutoSpinner2222, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            Box2222,
            {
              className: "button-text",
              style: {
                opacity: isLoading ? 0 : 1
              },
              children
            }
          ),
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            Box2222,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: rightIcon
            }
          )
        ]
      })
    );
  }
);
var Text2222 = styled2222("div", {
  fontFamily: "$heading",
  variants: {
    size: {
      "page-title": {
        fontWeight: "$bold",
        fontSize: "$6xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      "page-title2": {
        fontWeight: "$bold",
        fontSize: "$5xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title1: {
        fontWeight: "$bold",
        fontSize: "$3xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title2: {
        fontWeight: "$bold",
        fontSize: "$2xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title3: {
        fontWeight: "$bold",
        fontSize: "$xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle1: {
        fontWeight: "$bold",
        fontSize: "$lg",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle2: {
        fontWeight: "$bold",
        fontSize: "$base",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      overline: {
        fontFamily: "$body",
        fontWeight: "$bold",
        fontSize: "$xs",
        lineHeight: "$heading",
        letterSpacing: "$increased",
        textTransform: "$uppercase"
      },
      body: {
        fontFamily: "$body",
        fontWeight: "$normal",
        fontSize: "$base",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      "body-bold": {
        fontWeight: "$bold",
        fontFamily: "$body",
        fontSize: "$base",
        lineHeight: "body",
        letterSpacing: "$default"
      },
      label: {
        fontFamily: "$body",
        fontSize: "$sm",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      caption: {
        fontFamily: "$body",
        fontSize: "$xs",
        lineHeight: "$body",
        letterSpacing: "$default"
      }
    }
  },
  defaultVariants: {
    size: "body"
  }
});
var nomiObject2222 = {
  fontSize: "$base",
  fontFamily: "$body",
  lineHeight: "$body",
  webkitFontSmoothing: "antialiased",
  "& h1": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$2xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h2": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h3": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$lg",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h4": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$base",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& > *": {
    marginBottom: "$6"
  },
  "& > *:last-child": {
    marginBottom: 0
  },
  "& a": {
    color: "$grass9"
  },
  "& a:hover": {
    color: "$grass11"
  },
  "& ul,& ol": {
    paddingLeft: "$4"
  },
  "& li": {
    marginBottom: "$2"
  },
  "& img": {
    maxWidth: "100%",
    height: "auto"
  }
};
var NomiStyle2222 = styled2222("div", nomiObject2222);
var nomiClass2222 = css2222(nomiObject2222);
var LucideIcon2222 = (_a) => {
  var _b = _a, {
    name = "activity",
    color,
    size,
    boxSize,
    fill = "none",
    strokeWidth,
    className
  } = _b, props = __objRest2222(_b, [
    "name",
    "color",
    "size",
    "boxSize",
    "fill",
    "strokeWidth",
    "className"
  ]);
  const iconNameCamelCase = import_lodash15.default.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  const LucideIcon3 = icons2222[IconNameUpperCase];
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    LucideIcon3,
    __spreadValues2222({
      color,
      size: size ? size : "100%",
      strokeWidth,
      fill,
      style: {
        flexShrink: 1,
        height: boxSize ? boxSize : void 0,
        width: boxSize ? boxSize : void 0,
        aspectRatio: "1"
      },
      className
    }, props)
  );
};
function CheckboxWithLabel2222(_a, ref) {
  var _b = _a, {
    defaultChecked,
    children,
    fontSize = "lg",
    tone = "slate",
    css: css3
  } = _b, props = __objRest2222(_b, [
    "defaultChecked",
    "children",
    "fontSize",
    "tone",
    "css"
  ]);
  const checkbox = (0, import_Checkbox5.useCheckboxState)({
    state: defaultChecked
  });
  console.log(checkbox);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
    CheckboxLabel2222,
    {
      "data-state": props.disabled ? "disabled" : void 0,
      css: { fontSize: `$${fontSize}`, color: "$baseText" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react_aria5.VisuallyHidden, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          import_Checkbox5.Checkbox,
          __spreadValues2222(__spreadValues2222({
            ref
          }, checkbox), props)
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          CheckboxRoot2222,
          {
            "data-state": checkbox.state ? "checked" : "unchecked",
            css: import_lodash14.default.merge(getCheckboxToneStyle2222(tone), css3),
            children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(CheckboxIndicator2222, { checked: !!checkbox.state, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(LucideIcon2222, { strokeWidth: 2.5, name: "check" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Text2222, { css: { fontSize: "inherit" }, children })
      ]
    }
  );
}
var Checkbox2222 = import_react19.default.forwardRef(CheckboxWithLabel2222);
var CheckboxLabel2222 = styled2222("label", {
  lineHeight: 1,
  height: "1em",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4em",
  userSelect: "none",
  variants: {
    status: {
      enabled: {
        cursor: "pointer"
      },
      disabled: {
        opacity: 0.65,
        cursor: "not-allowed"
      }
    }
  },
  "&[data-state=disabled]": {
    opacity: 0.65,
    cursor: "not-allowed"
  }
});
var CheckboxRoot2222 = styled2222("div", {
  aspectRatio: "1",
  fontSize: "inherit",
  width: "auto",
  height: "100%",
  overflow: "hidden",
  flexShrink: 1,
  borderRadius: "25%",
  justifyContent: "center",
  padding: "0",
  border: "none",
  display: "inline-flex",
  transition: "all 0.2s",
  alignItems: "center",
  ":active": { transform: "scale(0.9)" }
});
var CheckboxIndicator2222 = styled2222("div", {
  aspectRatio: "1/1",
  height: "1em",
  width: "1em",
  position: "relative",
  textAlign: "center",
  overflow: "hidden",
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  justifyContent: "center",
  padding: 0,
  opacity: 0,
  variants: {
    checked: {
      true: {
        opacity: 1
      }
    }
  }
});
var hygraph2222 = new import_graphql_request5.GraphQLClient(
  "https://ap-northeast-1.cdn.hygraph.com/content/clf0ox8k023ql01t56zef5n6w/master"
);
var QUERY2222 = import_graphql_request5.gql`
	query Footers {
		footers {
			id
			sectionTitle
			sectionContent {
				icon {
					url
				}
				linkTitle
				url
			}
		}
	}
`;
var FooterContainer2222 = styled2222("div", {
  boxSizing: "border-box",
  maxWidth: "1000px",
  m: "0 auto",
  p: 48,
  pb: 128,
  pt: 0,
  gap: 48,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  width: "100%",
  color: "$baseText",
  right: "0%",
  position: "relative",
  "@sm": {
    display: "grid",
    right: "-5%",
    position: "relative",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@md": {
    right: "-12%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@lg": {
    right: "-2.5%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)"
  },
  "& a": {
    color: "$baseText",
    opacity: 0.6,
    fontFamily: "$body",
    textDecoration: "none"
  },
  "& a:hover": {
    opacity: 1
  }
});
var FooterSection2222 = styled2222("div", {
  flexGrow: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterContent2222 = styled2222("ul", {
  flex: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterLink2222 = styled2222("li", {
  m: 0,
  p: 0,
  listStyle: "none",
  "& a": {
    display: "inline-flex",
    gap: 4,
    alignItems: "center"
  },
  "& img": {
    filter: "invert(1)"
  },
  [`.${stitchesDarkTheme2222} & img`]: {
    filter: "invert(0)"
  }
});
var __defProp22222 = Object.defineProperty;
var __defProps22222 = Object.defineProperties;
var __getOwnPropDescs22222 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols22222 = Object.getOwnPropertySymbols;
var __hasOwnProp22222 = Object.prototype.hasOwnProperty;
var __propIsEnum22222 = Object.prototype.propertyIsEnumerable;
var __defNormalProp22222 = (obj, key, value) => key in obj ? __defProp22222(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues22222 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp22222.call(b, prop))
      __defNormalProp22222(a, prop, b[prop]);
  if (__getOwnPropSymbols22222)
    for (var prop of __getOwnPropSymbols22222(b)) {
      if (__propIsEnum22222.call(b, prop))
        __defNormalProp22222(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps22222 = (a, b) => __defProps22222(a, __getOwnPropDescs22222(b));
var __objRest22222 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp22222.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols22222)
    for (var prop of __getOwnPropSymbols22222(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum22222.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var theme_default22222 = {
  brand: {
    hover: "#6DEFBF",
    primary: "#3CEAAA",
    pressed: "#33C790",
    disable: "#1E7555",
    secondary: "#03BCE4"
  },
  support: {
    red: "#F16769",
    orange: "#FFB459",
    blue: "#4EA3FE",
    purpple: "#C692E0",
    silver: "#D3D5F2",
    yellow: "#FFED70"
  },
  colors: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  borderWidth: {
    "0": "0px",
    "1": "1px",
    "2": "2px",
    "4": "4px",
    "8": "8px",
    DEFAULT: "1px"
  },
  opacity: {
    "0": "0%",
    "5": "50%",
    "10": "10%",
    "20": "20%",
    "25": "25%",
    "30": "30%",
    "40": "40%",
    "50": "50%",
    "60": "60%",
    "70": "70%",
    "75": "75%",
    "80": "80%",
    "95": "95%",
    "100": "100%"
  },
  fontFamilies: {
    heading: "Sk-Modernist",
    body: "Inter"
  },
  lineHeights: {
    heading: "110%",
    body: "150%",
    tight: "140%",
    single: "100%"
  },
  letterSpacing: {
    default: "0%",
    increased: "2%",
    decreased: "-2%"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
  },
  fontSizes: {
    "6xl": "72px",
    "5xl": "64px",
    "4xl": "56px",
    "3xl": "48px",
    "2xl": "36px",
    xl: "24px",
    lg: "18px",
    base: "16px",
    sm: "14px",
    xs: "11px"
  },
  typography: {
    "page-title": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "72px",
      letterSpacing: "-2%"
    },
    "page-title2": {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "64px",
      letterSpacing: "-2%"
    },
    title1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "48px",
      letterSpacing: "-2%"
    },
    title2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "36px",
      letterSpacing: "-2%"
    },
    title3: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "24px",
      letterSpacing: "-2%"
    },
    subtitle1: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "18px",
      letterSpacing: "-2%"
    },
    subtitle2: {
      fontFamily: "Sk-Modernist",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "16px",
      letterSpacing: "-2%"
    },
    overline: {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "110%",
      fontSize: "11px",
      letterSpacing: "2%",
      textCase: "uppercase"
    },
    "body-heading": {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "18px",
      letterSpacing: "0%",
      paragraphSpacing: "1.5rem"
    },
    body: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    "body-bold": {
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: "150%",
      fontSize: "16px",
      letterSpacing: "0%"
    },
    label: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "140%",
      fontSize: "14px",
      letterSpacing: "0%"
    },
    caption: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "150%",
      fontSize: "11px",
      letterSpacing: "0%"
    }
  },
  paragraphSpacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  light: {
    tomato: {
      "1": "#fffcfc",
      "2": "#fff8f7",
      "3": "#fff0ee",
      "4": "#ffe6e2",
      "5": "#fdd8d3",
      "6": "#fac7be",
      "7": "#f3b0a2",
      "8": "#ea9280",
      "9": "#e54d2e",
      "10": "#db4324",
      "11": "#ca3214",
      "12": "#341711"
    },
    red: {
      "1": "#fffcfc",
      "2": "#fff8f8",
      "3": "#ffefef",
      "4": "#ffe5e5",
      "5": "#fdd8d8",
      "6": "#f9c6c6",
      "7": "#f3aeaf",
      "8": "#eb9091",
      "9": "#e5484d",
      "10": "#dc3d43",
      "11": "#cd2b31",
      "12": "#381316"
    },
    crimson: {
      "1": "#fffcfd",
      "2": "#fff7fb",
      "3": "#feeff6",
      "4": "#fce5f0",
      "5": "#f9d8e7",
      "6": "#f4c6db",
      "7": "#edadc8",
      "8": "#e58fb1",
      "9": "#e93d82",
      "10": "#e03177",
      "11": "#d31e66",
      "12": "#3d0d1d"
    },
    pink: {
      "1": "#fffcfe",
      "2": "#fff7fc",
      "3": "#feeef8",
      "4": "#fce5f3",
      "5": "#f9d8ec",
      "6": "#f3c6e2",
      "7": "#ecadd4",
      "8": "#e38ec3",
      "9": "#d6409f",
      "10": "#d23197",
      "11": "#cd1d8d",
      "12": "#3b0a2a"
    },
    plum: {
      "1": "#fefcff",
      "2": "#fff8ff",
      "3": "#fceffc",
      "4": "#f9e5f9",
      "5": "#f3d9f4",
      "6": "#ebc8ed",
      "7": "#dfafe3",
      "8": "#cf91d8",
      "9": "#ab4aba",
      "10": "#a43cb4",
      "11": "#9c2bad",
      "12": "#340c3b"
    },
    purple: {
      "1": "#fefcfe",
      "2": "#fdfaff",
      "3": "#f9f1fe",
      "4": "#f3e7fc",
      "5": "#eddbf9",
      "6": "#e3ccf4",
      "7": "#d3b4ed",
      "8": "#be93e4",
      "9": "#8e4ec6",
      "10": "#8445bc",
      "11": "#793aaf",
      "12": "#2b0e44"
    },
    violet: {
      "1": "#fdfcfe",
      "2": "#fbfaff",
      "3": "#f5f2ff",
      "4": "#ede9fe",
      "5": "#e4defc",
      "6": "#d7cff9",
      "7": "#c4b8f3",
      "8": "#aa99ec",
      "9": "#6e56cf",
      "10": "#644fc1",
      "11": "#5746af",
      "12": "#20134b"
    },
    indigo: {
      "1": "#fdfdfe",
      "2": "#f8faff",
      "3": "#f0f4ff",
      "4": "#e6edfe",
      "5": "#d9e2fc",
      "6": "#c6d4f9",
      "7": "#aec0f5",
      "8": "#8da4ef",
      "9": "#3e63dd",
      "10": "#3a5ccc",
      "11": "#3451b2",
      "12": "#101d46"
    },
    blue: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    cyan: {
      "1": "#fafdfe",
      "2": "#f2fcfd",
      "3": "#e7f9fb",
      "4": "#d8f3f6",
      "5": "#c4eaef",
      "6": "#aadee6",
      "7": "#84cdda",
      "8": "#3db9cf",
      "9": "#05a2c2",
      "10": "#0894b3",
      "11": "#0c7792",
      "12": "#04313c"
    },
    teal: {
      "1": "#fafefd",
      "2": "#f1fcfa",
      "3": "#e7f9f5",
      "4": "#d9f3ee",
      "5": "#c7ebe5",
      "6": "#afdfd7",
      "7": "#8dcec3",
      "8": "#53b9ab",
      "9": "#12a594",
      "10": "#0e9888",
      "11": "#067a6f",
      "12": "#10302b"
    },
    green: {
      "1": "#fbfefc",
      "2": "#f2fcf5",
      "3": "#e9f9ee",
      "4": "#ddf3e4",
      "5": "#ccebd7",
      "6": "#b4dfc4",
      "7": "#92ceac",
      "8": "#5bb98c",
      "9": "#30a46c",
      "10": "#299764",
      "11": "#18794e",
      "12": "#153226"
    },
    grass: {
      "1": "#fbfefb",
      "2": "#f3fcf3",
      "3": "#ebf9eb",
      "4": "#dff3df",
      "5": "#ceebcf",
      "6": "#b7dfba",
      "7": "#97cf9c",
      "8": "#65ba75",
      "9": "#46a758",
      "10": "#3d9a50",
      "11": "#297c3b",
      "12": "#1b311e"
    },
    brown: {
      "1": "#fefdfc",
      "2": "#fcf9f6",
      "3": "#f8f1ea",
      "4": "#f4e9dd",
      "5": "#efddcc",
      "6": "#e8cdb5",
      "7": "#ddb896",
      "8": "#d09e72",
      "9": "#ad7f58",
      "10": "#a07653",
      "11": "#886349",
      "12": "#3f2c22"
    },
    orange: {
      "1": "#fefcfb",
      "2": "#fef8f4",
      "3": "#fff1e7",
      "4": "#ffe8d7",
      "5": "#ffdcc3",
      "6": "#ffcca7",
      "7": "#ffb381",
      "8": "#fa934e",
      "9": "#f76808",
      "10": "#ed5f00",
      "11": "#bd4b00",
      "12": "#451e11"
    },
    sky: {
      "1": "#f9feff",
      "2": "#f1fcff",
      "3": "#e4f9ff",
      "4": "#d5f4fd",
      "5": "#c1ecf9",
      "6": "#a4dff1",
      "7": "#79cfea",
      "8": "#2ebde5",
      "9": "#68ddfd",
      "10": "#5fd4f4",
      "11": "#0078a1",
      "12": "#003242"
    },
    mint: {
      "1": "#f9fefd",
      "2": "#effefa",
      "3": "#e1fbf4",
      "4": "#d2f7ed",
      "5": "#c0efe3",
      "6": "#a5e4d4",
      "7": "#7dd4c0",
      "8": "#40c4aa",
      "9": "#70e1c8",
      "10": "#69d9c1",
      "11": "#147d6f",
      "12": "#09342e"
    },
    lime: {
      "1": "#fcfdfa",
      "2": "#f7fcf0",
      "3": "#eefadc",
      "4": "#e4f7c7",
      "5": "#d7f2b0",
      "6": "#c9e894",
      "7": "#b1d16a",
      "8": "#94ba2c",
      "9": "#99d52a",
      "10": "#93c926",
      "11": "#5d770d",
      "12": "#263209"
    },
    yellow: {
      "1": "#fdfdf9",
      "2": "#fffce8",
      "3": "#fffbd1",
      "4": "#fff8bb",
      "5": "#fef2a4",
      "6": "#f9e68c",
      "7": "#efd36c",
      "8": "#ebbc00",
      "9": "#f5d90a",
      "10": "#f7ce00",
      "11": "#946800",
      "12": "#35290f"
    },
    amber: {
      "1": "#fefdfb",
      "2": "#fff9ed",
      "3": "#fff4d5",
      "4": "#ffecbc",
      "5": "#ffe3a2",
      "6": "#ffd386",
      "7": "#f3ba63",
      "8": "#ee9d2b",
      "9": "#ffb224",
      "10": "#ffa01c",
      "11": "#ad5700",
      "12": "#4e2009"
    },
    gold: {
      "1": "#fdfdfc",
      "2": "#fbf9f2",
      "3": "#f5f2e9",
      "4": "#eeeadd",
      "5": "#e5dfd0",
      "6": "#dad1bd",
      "7": "#cbbda4",
      "8": "#b8a383",
      "9": "#978365",
      "10": "#8c795d",
      "11": "#776750",
      "12": "#3b352b"
    },
    bronze: {
      "1": "#fdfcfc",
      "2": "#fdf8f6",
      "3": "#f8f1ee",
      "4": "#f2e8e4",
      "5": "#eaddd7",
      "6": "#e0cec7",
      "7": "#d1b9b0",
      "8": "#bfa094",
      "9": "#a18072",
      "10": "#977669",
      "11": "#846358",
      "12": "#43302b"
    },
    gray: {
      "1": "#fcfcfc",
      "2": "#f8f8f8",
      "3": "#f3f3f3",
      "4": "#ededed",
      "5": "#e8e8e8",
      "6": "#e2e2e2",
      "7": "#dbdbdb",
      "8": "#c7c7c7",
      "9": "#8f8f8f",
      "10": "#858585",
      "11": "#6f6f6f",
      "12": "#171717"
    },
    mauve: {
      "1": "#fdfcfd",
      "2": "#f9f8f9",
      "3": "#f4f2f4",
      "4": "#eeedef",
      "5": "#e9e8ea",
      "6": "#e4e2e4",
      "7": "#dcdbdd",
      "8": "#c8c7cb",
      "9": "#908e96",
      "10": "#86848d",
      "11": "#6f6e77",
      "12": "#1a1523"
    },
    slate: {
      "1": "#fbfcfd",
      "2": "#f8f9fa",
      "3": "#f1f3f5",
      "4": "#eceef0",
      "5": "#e6e8eb",
      "6": "#dfe3e6",
      "7": "#d7dbdf",
      "8": "#c1c8cd",
      "9": "#889096",
      "10": "#7e868c",
      "11": "#687076",
      "12": "#11181c"
    },
    sage: {
      "1": "#fbfdfc",
      "2": "#f8faf9",
      "3": "#f1f4f3",
      "4": "#ecefed",
      "5": "#e6e9e8",
      "6": "#dfe4e2",
      "7": "#d7dcda",
      "8": "#c2c9c6",
      "9": "#8a918e",
      "10": "#808784",
      "11": "#6a716e",
      "12": "#111c18"
    },
    olive: {
      "1": "#fcfdfc",
      "2": "#f8faf8",
      "3": "#f2f4f2",
      "4": "#ecefec",
      "5": "#e6e9e6",
      "6": "#e0e4e0",
      "7": "#d8dcd8",
      "8": "#c3c8c2",
      "9": "#8b918a",
      "10": "#818780",
      "11": "#6b716a",
      "12": "#141e12"
    },
    sand: {
      "1": "#fdfdfc",
      "2": "#f9f9f8",
      "3": "#f3f3f2",
      "4": "#eeeeec",
      "5": "#e9e9e6",
      "6": "#e3e3e0",
      "7": "#dbdbd7",
      "8": "#c8c7c1",
      "9": "#90908c",
      "10": "#868682",
      "11": "#706f6c",
      "12": "#1b1b18"
    },
    accent: {
      "1": "#fbfdff",
      "2": "#f5faff",
      "3": "#edf6ff",
      "4": "#e1f0ff",
      "5": "#cee7fe",
      "6": "#b7d9f8",
      "7": "#96c7f2",
      "8": "#5eb0ef",
      "9": "#0091ff",
      "10": "#0081f1",
      "11": "#006adc",
      "12": "#00254d"
    },
    base: {
      text: "#11181c",
      textSecondary: "#687076",
      textTertiary: "#889096",
      background: "#fbfcfd",
      backgroundSecondary: "#f8f9fa",
      backgroundTertiary: "#f1f3f5",
      pureBackground: "#FFFFFF",
      pureForeground: "black"
    }
  },
  dark: {
    tomato: {
      "1": "#1d1412",
      "2": "#2a1410",
      "3": "#3b1813",
      "4": "#481a14",
      "5": "#541c15",
      "6": "#652016",
      "7": "#7f2315",
      "8": "#a42a12",
      "9": "#e54d2e",
      "10": "#ec5e41",
      "11": "#f16a50",
      "12": "#feefec"
    },
    red: {
      "1": "#1f1315",
      "2": "#291415",
      "3": "#3c181a",
      "4": "#481a1d",
      "5": "#541b1f",
      "6": "#671e22",
      "7": "#822025",
      "8": "#aa2429",
      "9": "#e5484d",
      "10": "#f2555a",
      "11": "#ff6369",
      "12": "#feecee"
    },
    crimson: {
      "1": "#1d1418",
      "2": "#27141c",
      "3": "#3c1827",
      "4": "#481a2d",
      "5": "#541b33",
      "6": "#641d3b",
      "7": "#801d45",
      "8": "#ae1955",
      "9": "#e93d82",
      "10": "#f04f88",
      "11": "#f76190",
      "12": "#feecf4"
    },
    pink: {
      "1": "#1f121b",
      "2": "#271421",
      "3": "#3a182f",
      "4": "#451a37",
      "5": "#501b3f",
      "6": "#601d48",
      "7": "#7a1d5a",
      "8": "#a71873",
      "9": "#d6409f",
      "10": "#e34ba9",
      "11": "#f65cb6",
      "12": "#feebf7"
    },
    plum: {
      "1": "#1d131d",
      "2": "#251425",
      "3": "#341a34",
      "4": "#3e1d40",
      "5": "#48214b",
      "6": "#542658",
      "7": "#692d6f",
      "8": "#883894",
      "9": "#ab4aba",
      "10": "#bd54c6",
      "11": "#d864d8",
      "12": "#fbecfc"
    },
    purple: {
      "1": "#1b141d",
      "2": "#221527",
      "3": "#301a3a",
      "4": "#3a1e48",
      "5": "#432155",
      "6": "#4e2667",
      "7": "#5f2d84",
      "8": "#7938b2",
      "9": "#8e4ec6",
      "10": "#9d5bd2",
      "11": "#bf7af0",
      "12": "#f7ecfc"
    },
    violet: {
      "1": "#17151f",
      "2": "#1c172b",
      "3": "#251e40",
      "4": "#2c2250",
      "5": "#32275f",
      "6": "#392c72",
      "7": "#443592",
      "8": "#5842c3",
      "9": "#6e56cf",
      "10": "#7c66dc",
      "11": "#9e8cfc",
      "12": "#f1eefe"
    },
    indigo: {
      "1": "#131620",
      "2": "#15192d",
      "3": "#192140",
      "4": "#1c274f",
      "5": "#1f2c5c",
      "6": "#22346e",
      "7": "#273e89",
      "8": "#2f4eb2",
      "9": "#3e63dd",
      "10": "#5373e7",
      "11": "#849dff",
      "12": "#eef1fd"
    },
    blue: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    cyan: {
      "1": "#07191d",
      "2": "#061e24",
      "3": "#072830",
      "4": "#07303b",
      "5": "#073844",
      "6": "#064150",
      "7": "#045063",
      "8": "#00647d",
      "9": "#05a2c2",
      "10": "#00b1cc",
      "11": "#00c2d7",
      "12": "#e1f8fa"
    },
    teal: {
      "1": "#091915",
      "2": "#04201b",
      "3": "#062923",
      "4": "#07312b",
      "5": "#083932",
      "6": "#09443c",
      "7": "#0b544a",
      "8": "#0c6d62",
      "9": "#12a594",
      "10": "#10b3a3",
      "11": "#0ac5b3",
      "12": "#e1faf4"
    },
    green: {
      "1": "#0d1912",
      "2": "#0c1f17",
      "3": "#0f291e",
      "4": "#113123",
      "5": "#133929",
      "6": "#164430",
      "7": "#1b543a",
      "8": "#236e4a",
      "9": "#30a46c",
      "10": "#3cb179",
      "11": "#4cc38a",
      "12": "#e5fbeb"
    },
    grass: {
      "1": "#0d1912",
      "2": "#0f1e13",
      "3": "#132819",
      "4": "#16301d",
      "5": "#193921",
      "6": "#1d4427",
      "7": "#245530",
      "8": "#2f6e3b",
      "9": "#46a758",
      "10": "#55b467",
      "11": "#63c174",
      "12": "#e5fbeb"
    },
    brown: {
      "1": "#191513",
      "2": "#221813",
      "3": "#2e201a",
      "4": "#36261e",
      "5": "#3e2c22",
      "6": "#493528",
      "7": "#5c4332",
      "8": "#775940",
      "9": "#ad7f58",
      "10": "#bd8b60",
      "11": "#dba16e",
      "12": "#faf0e5"
    },
    orange: {
      "1": "#1f1206",
      "2": "#2b1400",
      "3": "#391a03",
      "4": "#441f04",
      "5": "#4f2305",
      "6": "#5f2a06",
      "7": "#763205",
      "8": "#943e00",
      "9": "#f76808",
      "10": "#ff802b",
      "11": "#ff8b3e",
      "12": "#feeadd"
    },
    sky: {
      "1": "#0c1820",
      "2": "#071d2a",
      "3": "#082636",
      "4": "#082d41",
      "5": "#08354c",
      "6": "#083e59",
      "7": "#064b6b",
      "8": "#005d85",
      "9": "#68ddfd",
      "10": "#8ae8ff",
      "11": "#2ec8ee",
      "12": "#eaf8ff"
    },
    mint: {
      "1": "#081917",
      "2": "#05201e",
      "3": "#052926",
      "4": "#04312c",
      "5": "#033a34",
      "6": "#01453d",
      "7": "#00564a",
      "8": "#006d5b",
      "9": "#70e1c8",
      "10": "#95f3d9",
      "11": "#25d0ab",
      "12": "#e7fcf7"
    },
    lime: {
      "1": "#141807",
      "2": "#181d08",
      "3": "#1e260d",
      "4": "#252e0f",
      "5": "#2b3711",
      "6": "#344213",
      "7": "#415215",
      "8": "#536716",
      "9": "#99d52a",
      "10": "#c4f042",
      "11": "#87be22",
      "12": "#effbdd"
    },
    yellow: {
      "1": "#1c1500",
      "2": "#221a00",
      "3": "#2c2100",
      "4": "#352800",
      "5": "#3e3000",
      "6": "#493c00",
      "7": "#594a05",
      "8": "#705e00",
      "9": "#f5d90a",
      "10": "#ffef5c",
      "11": "#f0c000",
      "12": "#fffad1"
    },
    amber: {
      "1": "#1f1300",
      "2": "#271700",
      "3": "#341c00",
      "4": "#3f2200",
      "5": "#4a2900",
      "6": "#573300",
      "7": "#693f05",
      "8": "#824e00",
      "9": "#ffb224",
      "10": "#ffcb47",
      "11": "#f1a10d",
      "12": "#fef3dd"
    },
    gold: {
      "1": "#171613",
      "2": "#1c1a15",
      "3": "#26231c",
      "4": "#2e2a21",
      "5": "#353026",
      "6": "#3e382c",
      "7": "#504737",
      "8": "#6b5d48",
      "9": "#978365",
      "10": "#a59071",
      "11": "#bfa888",
      "12": "#f7f4e7"
    },
    bronze: {
      "1": "#191514",
      "2": "#1f1917",
      "3": "#2a211f",
      "4": "#332824",
      "5": "#3b2e29",
      "6": "#453530",
      "7": "#57433c",
      "8": "#74594e",
      "9": "#a18072",
      "10": "#b08c7d",
      "11": "#cba393",
      "12": "#f9ede7"
    },
    gray: {
      "1": "#161616",
      "2": "#1c1c1c",
      "3": "#232323",
      "4": "#282828",
      "5": "#2e2e2e",
      "6": "#343434",
      "7": "#3e3e3e",
      "8": "#505050",
      "9": "#707070",
      "10": "#7e7e7e",
      "11": "#a0a0a0",
      "12": "#ededed"
    },
    mauve: {
      "1": "#161618",
      "2": "#1c1c1f",
      "3": "#232326",
      "4": "#28282c",
      "5": "#2e2e32",
      "6": "#34343a",
      "7": "#3e3e44",
      "8": "#504f57",
      "9": "#706f78",
      "10": "#7e7d86",
      "11": "#a09fa6",
      "12": "#ededef"
    },
    slate: {
      "1": "#151718",
      "2": "#1a1d1e",
      "3": "#202425",
      "4": "#26292b",
      "5": "#2b2f31",
      "6": "#313538",
      "7": "#3a3f42",
      "8": "#4c5155",
      "9": "#697177",
      "10": "#787f85",
      "11": "#9ba1a6",
      "12": "#ecedee"
    },
    sage: {
      "1": "#141716",
      "2": "#191d1b",
      "3": "#1f2421",
      "4": "#252a27",
      "5": "#2a2f2c",
      "6": "#303633",
      "7": "#393f3c",
      "8": "#4a524e",
      "9": "#66736d",
      "10": "#75817b",
      "11": "#99a29e",
      "12": "#eceeed"
    },
    olive: {
      "1": "#151715",
      "2": "#1a1d19",
      "3": "#20241f",
      "4": "#262925",
      "5": "#2b2f2a",
      "6": "#313530",
      "7": "#3b3f3a",
      "8": "#4c514b",
      "9": "#687366",
      "10": "#778175",
      "11": "#9aa299",
      "12": "#eceeec"
    },
    sand: {
      "1": "#161615",
      "2": "#1c1c1a",
      "3": "#232320",
      "4": "#282826",
      "5": "#2e2e2b",
      "6": "#353431",
      "7": "#3e3e3a",
      "8": "#51504b",
      "9": "#717069",
      "10": "#7f7e77",
      "11": "#a1a09a",
      "12": "#ededec"
    },
    accent: {
      "1": "#0f1720",
      "2": "#0f1b2d",
      "3": "#10243e",
      "4": "#102a4c",
      "5": "#0f3058",
      "6": "#0d3868",
      "7": "#0a4481",
      "8": "#0954a5",
      "9": "#0091ff",
      "10": "#369eff",
      "11": "#52a9ff",
      "12": "#eaf6ff"
    },
    base: {
      text: "#ecedee",
      textSecondary: "#9ba1a6",
      textTertiary: "#697177",
      background: "#151718",
      backgroundSecondary: "#1a1d1e",
      backgroundTertiary: "#202425",
      pureForeground: "#FFFFFF",
      pureBackground: "black"
    }
  },
  spacing: {
    "0": "0px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "11": "2.75rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "36": "9rem",
    "40": "10rem",
    "44": "11rem",
    "48": "12rem",
    "52": "13rem",
    "56": "14rem",
    "60": "15rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "96": "24rem",
    px: "1px"
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  boxShadow: {
    sm: {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      color: "rgba(0 ,0 ,0,0.05)",
      type: "dropShadow"
    },
    DEFAULT: [
      {
        x: 0,
        y: 1,
        blur: 3,
        spread: 0,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 1,
        blur: 2,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    md: [
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -1,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 2,
        blur: 4,
        spread: -2,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    lg: [
      {
        x: 0,
        y: 10,
        blur: 15,
        spread: "03",
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -4,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    xl: [
      {
        x: 0,
        y: 20,
        blur: 25,
        spread: -5,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      },
      {
        x: 0,
        y: 8,
        blur: 10,
        spread: -6,
        color: "rgba(0,0,0,0.1)",
        type: "dropShadow"
      }
    ],
    "2xl": [
      {
        x: 0,
        y: 25,
        blur: 50,
        spread: -12,
        color: "rgba(0,0,0,0.25)",
        type: "dropShadow"
      }
    ],
    inner: {
      x: 0,
      y: 2,
      blur: 4,
      spread: 0,
      color: "rgba(0,0,0,0.05)",
      type: "innerShadow"
    }
  },
  tokenSetOrder: {
    "0": "global",
    "1": "light",
    "2": "dark",
    "3": "theme"
  }
};
var Radix22222 = RadixColors32222;
function capitalize22222(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function flattenKeys22222(obj, sep = "", parentKey = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? parentKey + sep + capitalize22222(key) : key;
    if (typeof value === "object") {
      Object.assign(acc, flattenKeys22222(value, sep, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
}
var lightColors22222 = flattenKeys22222(theme_default22222.light);
var brandColors22222 = flattenKeys22222(theme_default22222.brand);
var supportColors22222 = flattenKeys22222(theme_default22222.support);
var darkColors22222 = flattenKeys22222(theme_default22222.dark);
var bgToneScales22222 = {
  bgTone1: (value) => ({
    backgroundColor: `$${value}1`
  }),
  bgTone2: (value) => ({
    backgroundColor: `$${value}2`
  }),
  bgTone3: (value) => ({
    backgroundColor: `$${value}3`
  }),
  bgTone4: (value) => ({
    backgroundColor: `$${value}4`
  }),
  bgTone5: (value) => ({
    backgroundColor: `$${value}5`
  }),
  bgTone6: (value) => ({
    backgroundColor: `$${value}6`
  }),
  bgTone7: (value) => ({
    backgroundColor: `$${value}7`
  }),
  bgTone8: (value) => ({
    backgroundColor: `$${value}8`
  }),
  bgTone9: (value) => ({
    backgroundColor: `$${value}9`
  }),
  bgTone10: (value) => ({
    backgroundColor: `$${value}10`
  }),
  bgTone11: (value) => ({
    backgroundColor: `$${value}11`
  }),
  bgTone12: (value) => ({
    backgroundColor: `$${value}12`
  })
};
var textToneScales22222 = {
  textTone1: (value) => ({
    color: `$${value}1`
  }),
  textTone2: (value) => ({
    color: `$${value}2`
  }),
  textTone3: (value) => ({
    color: `$${value}3`
  }),
  textTone4: (value) => ({
    color: `$${value}4`
  }),
  textTone5: (value) => ({
    color: `$${value}5`
  }),
  textTone6: (value) => ({
    color: `$${value}6`
  }),
  textTone7: (value) => ({
    color: `$${value}7`
  }),
  textTone8: (value) => ({
    color: `$${value}8`
  }),
  textTone9: (value) => ({
    color: `$${value}9`
  }),
  textTone10: (value) => ({
    color: `$${value}10`
  }),
  textTone11: (value) => ({
    color: `$${value}11`
  }),
  textTone12: (value) => ({
    color: `$${value}12`
  })
};
var borderToneScales22222 = {
  borderTone1: (value) => ({
    borderColor: `$${value}1`
  }),
  borderTone2: (value) => ({
    borderColor: `$${value}2`
  }),
  borderTone3: (value) => ({
    borderColor: `$${value}3`
  }),
  borderTone4: (value) => ({
    borderColor: `$${value}4`
  }),
  borderTone5: (value) => ({
    borderColor: `$${value}5`
  }),
  borderTone6: (value) => ({
    borderColor: `$${value}6`
  }),
  borderTone7: (value) => ({
    borderColor: `$${value}7`
  }),
  borderTone8: (value) => ({
    borderColor: `$${value}8`
  }),
  borderTone9: (value) => ({
    borderColor: `$${value}9`
  }),
  borderTone10: (value) => ({
    borderColor: `$${value}10`
  }),
  borderTone11: (value) => ({
    borderColor: `$${value}11`
  }),
  borderTone12: (value) => ({
    borderColor: `$${value}12`
  })
};
var {
  styled: styled22222,
  css: css22222,
  globalCss: globalCss22222,
  keyframes: keyframes22222,
  getCssText: getCssText22222,
  theme: theme22222,
  createTheme: createTheme22222,
  config: config22222
} = (0, import_react22.createStitches)({
  theme: {
    colors: __spreadValues22222(__spreadValues22222(__spreadValues22222({}, lightColors22222), brandColors22222), supportColors22222),
    space: __spreadValues22222({
      "100%": "100%"
    }, theme_default22222.spacing),
    sizes: __spreadValues22222({
      "100%": "100%"
    }, theme_default22222.spacing),
    fontSizes: __spreadValues22222({}, theme_default22222.fontSizes),
    fonts: {
      heading: `${theme_default22222.fontFamilies.heading},'SkModernistBold',SkModernistBold,'Sk-Modernist-Bold',sans-serif`,
      branding: `${theme_default22222.fontFamilies.heading},'SkModernistRegular',SkModernistRegular,'Sk-Modernist-Regular',sans-serif`,
      body: `'Inter Tight',${theme_default22222.fontFamilies.body}, sans-serif`
    },
    fontWeights: __spreadValues22222({}, theme_default22222.fontWeights),
    lineHeights: __spreadValues22222({}, theme_default22222.lineHeights),
    letterSpacings: __spreadValues22222({}, theme_default22222.letterSpacing),
    borderWidths: __spreadValues22222({}, theme_default22222.borderWidth),
    borderStyles: {
      solid: "solid",
      dashed: "dashed"
    },
    radii: __spreadValues22222({}, theme_default22222.borderRadius),
    zIndices: {},
    transitions: {
      fast: "all 0.1s",
      slow: "all 0.4s ease-in-out"
    },
    shadows: {
      1: `0.3px 0.5px 0.7px ${Radix22222.blackA.blackA5},
          0.4px 0.8px 1px -1.2px ${Radix22222.blackA.blackA5},
          1px 2px 2.5px -2.5px ${Radix22222.blackA.blackA5}`,
      2: `0.3px 0.5px 0.7px ${Radix22222.blackA.blackA5},
          0.8px 1.6px 2px -0.8px ${Radix22222.blackA.blackA5},
          2.1px 4.1px 5.2px -1.7px ${Radix22222.blackA.blackA5},
          5px 10px 12.6px -2.5px ${Radix22222.blackA.blackA5}`,
      3: `0.3px 0.5px 0.7px ${Radix22222.blackA.blackA5},
          1.5px 2.9px 3.7px -0.4px ${Radix22222.blackA.blackA4},
          2.7px 5.4px 6.8px -0.7px ${Radix22222.blackA.blackA4},
          4.5px 8.9px 11.2px -1.1px ${Radix22222.blackA.blackA4},
          7.1px 14.3px 18px -1.4px ${Radix22222.blackA.blackA4},
          11.2px 22.3px 28.1px -1.8px ${Radix22222.blackA.blackA4}`,
      subtle: `0.3px 0.5px 0.7px ${Radix22222.blackA.blackA3},
          0.8px 1.6px 2px -0.8px ${Radix22222.blackA.blackA3},
          2.1px 4.1px 5.2px -1.7px ${Radix22222.blackA.blackA3}`
    }
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)"
  },
  utils: __spreadProps22222(__spreadValues22222(__spreadValues22222(__spreadValues22222({}, bgToneScales22222), textToneScales22222), borderToneScales22222), {
    m: (value) => ({
      margin: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    // Abbreviated padding properties
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    // A property for applying flex together
    flex: (value) => ({
      display: "flex",
      flex: value
    }),
    // A property for applying grid together
    grid: (value) => ({
      display: "grid",
      grid: value
    }),
    // A property for applying width/height together
    boxSize: (value) => ({
      width: value,
      height: value
    }),
    w: (value) => ({
      width: value
    }),
    h: (value) => ({
      height: value
    }),
    // An abbreviated property for border-radius
    br: (value) => ({
      borderRadius: value
    }),
    bg: (value) => ({
      backgroundColor: value
    })
  }),
  themeMap: __spreadValues22222({}, import_react22.defaultThemeMap)
});
var stitchesDarkTheme22222 = createTheme22222("dark", {
  colors: __spreadValues22222({}, darkColors22222)
});
var reset22222 = globalCss22222({
  "*": { margin: 0, boxSizing: "border-box" }
});
var brandFonts22222 = globalCss22222({
  "@font-face": [
    {
      fontFamily: "skModernistBold",
      src: 'url("/fonts/sk-modernist-bold-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-bold-webfont.woff") format("woff"),url("/fonts/sk-modernist-bold-webfont.ttf") format("truetype")',
      fontWeight: "bold"
    },
    {
      fontFamily: "skModernistRegular",
      src: 'url("/fonts/sk-modernist-regular-webfont.woff2") format("woff2"), url("/fonts/sk-modernist-regular-webfont.woff") format("woff"),url("/fonts/sk-modernist-regular-webfont.ttf") format("truetype")',
      fontWeight: 400
    }
  ]
});
var Box22222 = styled22222("div", {});
var Stack22222 = styled22222(Box22222, {
  display: "flex",
  flexDirection: "column",
  gap: "$4"
});
var AutoSpinner22222 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    "svg",
    {
      version: "1.1",
      id: "L9",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "100%",
      viewBox: "0 0 100 100",
      enableBackground: "new 0 0 0 0",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
          children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            "animateTransform",
            {
              attributeName: "transform",
              attributeType: "XML",
              type: "rotate",
              dur: "1s",
              from: "0 50 50",
              to: "360 50 50",
              repeatCount: "indefinite"
            }
          )
        }
      )
    }
  );
};
function getButtonToneStyle22222(tone, intent) {
  if (!tone) {
    return;
  } else if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "black"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else if (intent === "ghost") {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    if (intent === "primary") {
      return {
        bgTone12: tone,
        "&:hover": {
          bgTone12: tone
        },
        "&:active": {
          bgTone12: tone
        },
        color: `$${tone}2`
      };
    } else if (intent === "secondary") {
      return {
        bgTone6: tone,
        "&:hover": {
          bgTone7: tone
        },
        "&:active": {
          bgTone8: tone
        },
        color: `$${tone}12`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  } else {
    if (intent === "primary") {
      return {
        bgTone9: tone,
        "&:hover": {
          bgTone10: tone
        },
        "&:active": {
          bgTone11: tone
        },
        color: "white"
      };
    } else if (intent === "secondary") {
      return {
        bgTone4: tone,
        "&:hover": {
          bgTone5: tone
        },
        "&:active": {
          bgTone6: tone
        },
        color: `$${tone}11`
      };
    } else {
      return {
        bg: "transparent",
        "&:hover": {
          bgTone3: tone
        },
        "&:active": {
          bgTone4: tone
        },
        color: `$${tone}11`
      };
    }
  }
}
function getButtonShadowStyle22222(tone, depth) {
  const colorFromRadix = __objRest22222(RadixColors222222, []);
  const shadowColor = colorFromRadix[tone + "A"];
  if (depth === "0") {
    return {
      boxShadow: "none"
    };
  } else if (depth === "1") {
    return {
      [`.${stitchesDarkTheme22222} &`]: {
        $$shadowColor: shadowColor[tone + "A6"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,                
                0 0.8px 1px -1.2px $$shadowColor,
                0 2px 2.5px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "2") {
    return {
      [`.${stitchesDarkTheme22222} &`]: {
        $$shadowColor: shadowColor[tone + "A4"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 1.6px 2px -0.8px $$shadowColor,
                0 4.1px 5.2px -1.7px $$shadowColor,
                0 10px 12.6px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "3") {
    return {
      [`.${stitchesDarkTheme22222} &`]: {
        $$shadowColor: shadowColor[tone + "A5"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 2.9px 3.7px -0.4px $$shadowColor,
                0 5.4px 6.8px -0.7px $$shadowColor,
                0 8.9px 11.2px -1.1px $$shadowColor,
                0 14.3px 18px -1.4px $$shadowColor,
                0 22.3px 28.1px -1.8px $$shadowColor`
      }
    };
  } else
    return {};
}
function getCheckboxToneStyle22222(tone) {
  if (tone === "sky" || tone === "mint" || tone === "lime" || tone === "yellow" || tone === "amber") {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "black"
    };
  } else if (
    // grayscale series
    tone === "gray" || tone === "mauve" || tone === "slate" || tone === "sage" || tone === "olive" || tone === "sand"
  ) {
    return {
      bgTone3: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "8"}`,
      "&:active": {
        bgTone4: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  } else {
    return {
      bgTone2: tone,
      boxShadow: `0 0 0 1.5px $colors$${tone + "7"}`,
      "&:active": {
        bgTone3: tone
      },
      "&[data-state=checked]": {
        bgTone9: tone,
        boxShadow: `0 0 0 1.5px $colors$${tone + "9"}`
      },
      color: "white"
    };
  }
}
var BaseButton22222 = styled22222("button", {
  all: "unset",
  border: "none",
  boxSizing: "border-box",
  userSelect: "none",
  position: "relative",
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.75
  },
  // "&:hover": {
  // 	transform: "translateY(-1px)",
  // },
  "&:active": {
    transform: "translateY(1px)"
  },
  // mdx fix
  "& .button-text p": {
    lineHeight: 1
    // opacity: 0,
  },
  overflow: "hidden",
  fontFamily: "$heading",
  fontWeight: "$bold",
  cursor: "pointer",
  display: "inline-flex",
  gap: "$2",
  // lineHeight: ,
  alignItems: "center",
  fontSize: "$base",
  transition: "$fast",
  variants: {
    size: {
      sm: {
        borderRadius: "$lg",
        fontSize: 11,
        height: 30,
        px: "$3",
        py: "$2"
      },
      md: {
        borderRadius: "$lg",
        fontSize: 13,
        height: "$8",
        px: "$3",
        py: "$2"
      },
      lg: {
        borderRadius: "$xl",
        fontSize: 15,
        height: "$10",
        px: "$4",
        py: "$3"
      },
      xl: {
        borderRadius: "$xl",
        fontSize: 17,
        height: "$11",
        px: "$5",
        py: "$4"
      }
    },
    isRound: {
      true: {
        borderRadius: "$full"
      }
    },
    align: {
      left: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      right: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      },
      around: {
        justifyContent: "space-around"
      }
    }
  },
  compoundVariants: [
    {
      size: "sm",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    },
    {
      size: "md",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    },
    {
      size: "lg",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    },
    {
      size: "xl",
      isRound: true,
      css: {
        borderRadius: "full"
      }
    }
  ],
  defaultVariants: {
    size: "md",
    align: "center"
  }
});
var Button22222 = import_react21.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      size,
      align,
      tone = "slate",
      intent = "primary",
      isLoading,
      children,
      leftIcon,
      rightIcon,
      depth,
      css: css222222,
      isDark
    } = _b, props = __objRest22222(_b, [
      "size",
      "align",
      "tone",
      "intent",
      "isLoading",
      "children",
      "leftIcon",
      "rightIcon",
      "depth",
      "css",
      "isDark"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
      BaseButton22222,
      __spreadProps22222(__spreadValues22222({
        className: isDark ? stitchesDarkTheme22222 : void 0,
        ref,
        size,
        align,
        css: import_lodash16.default.merge(
          getButtonToneStyle22222(tone, intent),
          getButtonShadowStyle22222(tone, depth),
          css222222
        )
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            Box22222,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: leftIcon
            }
          ),
          isLoading && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            Box22222,
            {
              style: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                inset: 0
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(AutoSpinner22222, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            Box22222,
            {
              className: "button-text",
              style: {
                opacity: isLoading ? 0 : 1
              },
              children
            }
          ),
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            Box22222,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: rightIcon
            }
          )
        ]
      })
    );
  }
);
var Text22222 = styled22222("div", {
  fontFamily: "$heading",
  variants: {
    size: {
      "page-title": {
        fontWeight: "$bold",
        fontSize: "$6xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      "page-title2": {
        fontWeight: "$bold",
        fontSize: "$5xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title1: {
        fontWeight: "$bold",
        fontSize: "$3xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title2: {
        fontWeight: "$bold",
        fontSize: "$2xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      title3: {
        fontWeight: "$bold",
        fontSize: "$xl",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle1: {
        fontWeight: "$bold",
        fontSize: "$lg",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      subtitle2: {
        fontWeight: "$bold",
        fontSize: "$base",
        lineHeight: "$heading",
        letterSpacing: "$decreased"
      },
      overline: {
        fontFamily: "$body",
        fontWeight: "$bold",
        fontSize: "$xs",
        lineHeight: "$heading",
        letterSpacing: "$increased",
        textTransform: "$uppercase"
      },
      body: {
        fontFamily: "$body",
        fontWeight: "$normal",
        fontSize: "$base",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      "body-bold": {
        fontWeight: "$bold",
        fontFamily: "$body",
        fontSize: "$base",
        lineHeight: "body",
        letterSpacing: "$default"
      },
      label: {
        fontFamily: "$body",
        fontSize: "$sm",
        lineHeight: "$body",
        letterSpacing: "$default"
      },
      caption: {
        fontFamily: "$body",
        fontSize: "$xs",
        lineHeight: "$body",
        letterSpacing: "$default"
      }
    }
  },
  defaultVariants: {
    size: "body"
  }
});
var nomiObject22222 = {
  fontSize: "$base",
  fontFamily: "$body",
  lineHeight: "$body",
  webkitFontSmoothing: "antialiased",
  "& h1": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$2xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h2": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$xl",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h3": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$lg",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& h4": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    fontSize: "$base",
    lineHeight: "$heading",
    letterSpacing: "$decreased"
  },
  "& > *": {
    marginBottom: "$6"
  },
  "& > *:last-child": {
    marginBottom: 0
  },
  "& a": {
    color: "$grass9"
  },
  "& a:hover": {
    color: "$grass11"
  },
  "& ul,& ol": {
    paddingLeft: "$4"
  },
  "& li": {
    marginBottom: "$2"
  },
  "& img": {
    maxWidth: "100%",
    height: "auto"
  }
};
var NomiStyle22222 = styled22222("div", nomiObject22222);
var nomiClass22222 = css22222(nomiObject22222);
var LucideIcon22222 = (_a) => {
  var _b = _a, {
    name = "activity",
    color,
    size,
    boxSize,
    fill = "none",
    strokeWidth,
    className
  } = _b, props = __objRest22222(_b, [
    "name",
    "color",
    "size",
    "boxSize",
    "fill",
    "strokeWidth",
    "className"
  ]);
  const iconNameCamelCase = import_lodash18.default.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  const LucideIcon222222 = icons22222[IconNameUpperCase];
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    LucideIcon222222,
    __spreadValues22222({
      color,
      size: size ? size : "100%",
      strokeWidth,
      fill,
      style: {
        flexShrink: 1,
        height: boxSize ? boxSize : void 0,
        width: boxSize ? boxSize : void 0,
        aspectRatio: "1"
      },
      className
    }, props)
  );
};
function CheckboxWithLabel22222(_a, ref) {
  var _b = _a, {
    defaultChecked,
    children,
    fontSize = "lg",
    tone = "slate",
    css: css222222
  } = _b, props = __objRest22222(_b, [
    "defaultChecked",
    "children",
    "fontSize",
    "tone",
    "css"
  ]);
  const checkbox = (0, import_Checkbox6.useCheckboxState)({
    state: defaultChecked
  });
  console.log(checkbox);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    CheckboxLabel22222,
    {
      "data-state": props.disabled ? "disabled" : void 0,
      css: { fontSize: `$${fontSize}`, color: "$baseText" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react_aria6.VisuallyHidden, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          import_Checkbox6.Checkbox,
          __spreadValues22222(__spreadValues22222({
            ref
          }, checkbox), props)
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          CheckboxRoot22222,
          {
            "data-state": checkbox.state ? "checked" : "unchecked",
            css: import_lodash17.default.merge(getCheckboxToneStyle22222(tone), css222222),
            children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(CheckboxIndicator22222, { checked: !!checkbox.state, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(LucideIcon22222, { strokeWidth: 2.5, name: "check" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Text22222, { css: { fontSize: "inherit" }, children })
      ]
    }
  );
}
var Checkbox22222 = import_react23.default.forwardRef(CheckboxWithLabel22222);
var CheckboxLabel22222 = styled22222("label", {
  lineHeight: 1,
  height: "1em",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4em",
  userSelect: "none",
  variants: {
    status: {
      enabled: {
        cursor: "pointer"
      },
      disabled: {
        opacity: 0.65,
        cursor: "not-allowed"
      }
    }
  },
  "&[data-state=disabled]": {
    opacity: 0.65,
    cursor: "not-allowed"
  }
});
var CheckboxRoot22222 = styled22222("div", {
  aspectRatio: "1",
  fontSize: "inherit",
  width: "auto",
  height: "100%",
  overflow: "hidden",
  flexShrink: 1,
  borderRadius: "25%",
  justifyContent: "center",
  padding: "0",
  border: "none",
  display: "inline-flex",
  transition: "all 0.2s",
  alignItems: "center",
  ":active": { transform: "scale(0.9)" }
});
var CheckboxIndicator22222 = styled22222("div", {
  aspectRatio: "1/1",
  height: "1em",
  width: "1em",
  position: "relative",
  textAlign: "center",
  overflow: "hidden",
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  justifyContent: "center",
  padding: 0,
  opacity: 0,
  variants: {
    checked: {
      true: {
        opacity: 1
      }
    }
  }
});
var hygraph22222 = new import_graphql_request6.GraphQLClient(
  "https://ap-northeast-1.cdn.hygraph.com/content/clf0ox8k023ql01t56zef5n6w/master"
);
var QUERY22222 = import_graphql_request6.gql`
	query Footers {
		footers {
			id
			sectionTitle
			sectionContent {
				icon {
					url
				}
				linkTitle
				url
			}
		}
	}
`;
var FooterContainer22222 = styled22222("div", {
  boxSizing: "border-box",
  maxWidth: "1000px",
  m: "0 auto",
  p: 48,
  pb: 128,
  pt: 0,
  gap: 48,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  width: "100%",
  color: "$baseText",
  right: "0%",
  position: "relative",
  "@sm": {
    display: "grid",
    right: "-5%",
    position: "relative",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@md": {
    right: "-12%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@lg": {
    right: "-2.5%",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)"
  },
  "& a": {
    color: "$baseText",
    opacity: 0.6,
    fontFamily: "$body",
    textDecoration: "none"
  },
  "& a:hover": {
    opacity: 1
  }
});
var FooterSection22222 = styled22222("div", {
  flexGrow: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterContent22222 = styled22222("ul", {
  flex: 1,
  m: 0,
  p: 0,
  display: "inline-flex",
  flexDirection: "column",
  gap: 16
});
var FooterLink22222 = styled22222("li", {
  m: 0,
  p: 0,
  listStyle: "none",
  "& a": {
    display: "inline-flex",
    gap: 4,
    alignItems: "center"
  },
  "& img": {
    filter: "invert(1)"
  },
  [`.${stitchesDarkTheme22222} & img`]: {
    filter: "invert(0)"
  }
});
var HeroIcon = (props) => {
  const icons222222 = __objRest22222(HeroIcons, []);
  const OutlineIcon = icons222222[props.icon] || icons222222["HiArchive"];
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    OutlineIcon,
    {
      style: { width: "100%", height: "100%" },
      "aria-hidden": "true"
    }
  ) });
};
var HeroIconOne = (_a) => {
  var _b = _a, {
    name = "HiArchive",
    boxSize = "24px"
  } = _b, props = __objRest22222(_b, [
    "name",
    "boxSize"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Box22222, __spreadProps22222(__spreadValues22222({ css: { boxSize } }, props), { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(HeroIcon, { icon: name }) }));
};
var IconButtonWrapper = styled22222(BaseButton22222, {
  aspectRatio: "1",
  p: 0,
  rowGap: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});
var IconButton = (_a) => {
  var _b = _a, {
    children,
    name,
    tone = "slate",
    intent = "primary",
    depth,
    css: css222222,
    isRound
  } = _b, props = __objRest22222(_b, [
    "children",
    "name",
    "tone",
    "intent",
    "depth",
    "css",
    "isRound"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    IconButtonWrapper,
    __spreadProps22222(__spreadValues22222({
      isRound,
      css: import_lodash19.default.merge(
        getButtonToneStyle22222(tone, intent),
        getButtonShadowStyle22222(tone, depth),
        {
          p: 0,
          rowGap: 0
        },
        css222222
      )
    }, props), {
      children: children ? children : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(HeroIconOne, { boxSize: "65%", name })
    })
  );
};
var Dialog = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("code", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("pre", { children: `<Dialog.Root>
	<Dialog.Trigger asChild>
		<Button>Open Dialog with Close + Scroll</Button>
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay>
			<Dialog.ContentWithClose>
				{/* repeat paragraph 10 times */}
				{[...Array(20)].map((_, i) => (
					<Text key={i}>
						Lorem ipsum odor amet, consectetuer adipiscing elit. Ac
						purus in massa egestas mollis varius; dignissim elementum.
						Mollis tincidunt mattis hendrerit dolor eros enim, nisi
						ligula ornare. Hendrerit parturient habitant pharetra rutrum
						gravida porttitor eros feugiat. Mollis elit sodales taciti
						duis praesent id. Consequat urna vitae morbi nunc congue.
					</Text>
				))}
				<Dialog.Close asChild>
					<Button>Close Button in content</Button>
				</Dialog.Close>
			</Dialog.ContentWithClose>
		</Dialog.Overlay>
	</Dialog.Portal>
</Dialog.Root>` }) });
};
var Root22 = styled22222(DialogPrimitive.Root, {
  boxSizing: "border-box"
});
Root22.displayName = "Root";
Dialog.Root = Root22;
var Trigger22 = styled22222(DialogPrimitive.Trigger, {});
Trigger22.displayName = "Trigger";
Dialog.Trigger = Trigger22;
var Portal22 = styled22222(DialogPrimitive.Portal, {});
Portal22.displayName = "Portal";
Dialog.Portal = Portal22;
var Title22 = styled22222(DialogPrimitive.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold"
});
Title22.displayName = "Title";
Dialog.Title = Title22;
var Description22 = styled22222(DialogPrimitive.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary"
});
Description22.displayName = "Description";
Dialog.Description = Description22;
var Close22 = styled22222(DialogPrimitive.Close, {});
Close22.displayName = "Close";
Dialog.Close = Close22;
var Overlay22 = styled22222(DialogPrimitive.Overlay, {
  backgroundColor: import_colors5.blackA.blackA8,
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
Overlay22.displayName = "Overlay";
Dialog.Overlay = Overlay22;
var Content22 = styled22222(DialogPrimitive.Content, {
  boxSizing: "border-box",
  backgroundColor: "$baseBackground",
  borderRadius: "$2xl",
  boxShadow: "$2",
  zIndex: 40,
  position: "relative",
  width: "90vw",
  maxWidth: "650px",
  // maxHeight: "85vh",
  overflowY: "auto",
  "&:focus": { outline: "none" }
});
Content22.displayName = "Content";
Dialog.Content = Content22;
var ContentWithClose = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Content22, __spreadProps22222(__spreadValues22222({}, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      Box22222,
      {
        css: {
          position: "absolute",
          top: "$2",
          right: "$2",
          zIndex: 50
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DialogPrimitive.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(IconButton, { isRound: true, name: "HiOutlineX", intent: "ghost" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      Box22222,
      {
        css: {
          padding: "$6",
          pb: "$12",
          boxSizing: "border-box",
          position: "relative",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          width: "100%",
          minWidth: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          ":focus": { outline: "none" }
        },
        children: props.children
      }
    )
  ] }));
};
ContentWithClose.displayName = "ContentWithClose";
Dialog.ContentWithClose = ContentWithClose;
var HeroIcon2 = (props) => {
  const icons3 = __objRest2222(HeroIcons2, []);
  const OutlineIcon = icons3[props.icon] || icons3["HiArchive"];
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_jsx_runtime40.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    OutlineIcon,
    {
      style: { width: "100%", height: "100%" },
      "aria-hidden": "true"
    }
  ) });
};
var HeroIconOne2 = (_a) => {
  var _b = _a, {
    name = "HiArchive",
    boxSize = "24px"
  } = _b, props = __objRest2222(_b, [
    "name",
    "boxSize"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Box2222, __spreadProps2222(__spreadValues2222({ css: { boxSize } }, props), { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(HeroIcon2, { icon: name }) }));
};
var IconButtonWrapper2 = styled2222(BaseButton2222, {
  aspectRatio: "1",
  p: 0,
  rowGap: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});
var IconButton2 = (_a) => {
  var _b = _a, {
    children,
    name,
    tone = "slate",
    intent = "primary",
    depth,
    css: css3,
    isRound
  } = _b, props = __objRest2222(_b, [
    "children",
    "name",
    "tone",
    "intent",
    "depth",
    "css",
    "isRound"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    IconButtonWrapper2,
    __spreadProps2222(__spreadValues2222({
      isRound,
      css: import_lodash20.default.merge(
        getButtonToneStyle2222(tone, intent),
        getButtonShadowStyle2222(tone, depth),
        {
          p: 0,
          rowGap: 0
        },
        css3
      )
    }, props), {
      children: children ? children : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(HeroIconOne2, { boxSize: "65%", name })
    })
  );
};
var Dialog2 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("code", { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("pre", { children: `<Dialog.Root>
	<Dialog.Trigger asChild>
		<Button>Open Dialog with Close + Scroll</Button>
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay>
			<Dialog.ContentWithClose>
				{/* repeat paragraph 10 times */}
				{[...Array(20)].map((_, i) => (
					<Text key={i}>
						Lorem ipsum odor amet, consectetuer adipiscing elit. Ac
						purus in massa egestas mollis varius; dignissim elementum.
						Mollis tincidunt mattis hendrerit dolor eros enim, nisi
						ligula ornare. Hendrerit parturient habitant pharetra rutrum
						gravida porttitor eros feugiat. Mollis elit sodales taciti
						duis praesent id. Consequat urna vitae morbi nunc congue.
					</Text>
				))}
				<Dialog.Close asChild>
					<Button>Close Button in content</Button>
				</Dialog.Close>
			</Dialog.ContentWithClose>
		</Dialog.Overlay>
	</Dialog.Portal>
</Dialog.Root>` }) });
};
var Root42 = styled2222(DialogPrimitive2.Root, {
  boxSizing: "border-box"
});
Root42.displayName = "Root";
Dialog2.Root = Root42;
var Trigger42 = styled2222(DialogPrimitive2.Trigger, {});
Trigger42.displayName = "Trigger";
Dialog2.Trigger = Trigger42;
var Portal42 = styled2222(DialogPrimitive2.Portal, {});
Portal42.displayName = "Portal";
Dialog2.Portal = Portal42;
var Title42 = styled2222(DialogPrimitive2.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold"
});
Title42.displayName = "Title";
Dialog2.Title = Title42;
var Description42 = styled2222(DialogPrimitive2.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary"
});
Description42.displayName = "Description";
Dialog2.Description = Description42;
var Close42 = styled2222(DialogPrimitive2.Close, {});
Close42.displayName = "Close";
Dialog2.Close = Close42;
var Overlay42 = styled2222(DialogPrimitive2.Overlay, {
  backgroundColor: import_colors4.blackA.blackA8,
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
Overlay42.displayName = "Overlay";
Dialog2.Overlay = Overlay42;
var Content42 = styled2222(DialogPrimitive2.Content, {
  boxSizing: "border-box",
  backgroundColor: "$baseBackground",
  borderRadius: "$2xl",
  boxShadow: "$2",
  zIndex: 40,
  position: "relative",
  width: "90vw",
  maxWidth: "650px",
  // maxHeight: "85vh",
  overflowY: "auto",
  "&:focus": { outline: "none" }
});
Content42.displayName = "Content";
Dialog2.Content = Content42;
var ContentWithClose2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Content42, __spreadProps2222(__spreadValues2222({}, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      Box22222,
      {
        css: {
          position: "absolute",
          top: "$2",
          right: "$2",
          zIndex: 50
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(DialogPrimitive2.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(IconButton2, { isRound: true, name: "HiOutlineX", intent: "ghost" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      Box22222,
      {
        css: {
          padding: "$6",
          pb: "$12",
          boxSizing: "border-box",
          position: "relative",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          width: "100%",
          minWidth: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          ":focus": { outline: "none" }
        },
        children: props.children
      }
    )
  ] }));
};
ContentWithClose2.displayName = "ContentWithClose";
Dialog2.ContentWithClose = ContentWithClose2;
var HeroIcon3 = (props) => {
  const icons3 = __objRest222(HeroIcons3, []);
  const OutlineIcon = icons3[props.icon] || icons3["HiArchive"];
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_jsx_runtime43.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    OutlineIcon,
    {
      style: { width: "100%", height: "100%" },
      "aria-hidden": "true"
    }
  ) });
};
var HeroIconOne3 = (_a) => {
  var _b = _a, {
    name = "HiArchive",
    boxSize = "24px"
  } = _b, props = __objRest222(_b, [
    "name",
    "boxSize"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Box222, __spreadProps222(__spreadValues222({ css: { boxSize } }, props), { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(HeroIcon3, { icon: name }) }));
};
var IconButtonWrapper3 = styled222(BaseButton222, {
  aspectRatio: "1",
  p: 0,
  rowGap: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});
var IconButton3 = (_a) => {
  var _b = _a, {
    children,
    name,
    tone = "slate",
    intent = "primary",
    depth,
    css: css3,
    isRound
  } = _b, props = __objRest222(_b, [
    "children",
    "name",
    "tone",
    "intent",
    "depth",
    "css",
    "isRound"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    IconButtonWrapper3,
    __spreadProps222(__spreadValues222({
      isRound,
      css: import_lodash21.default.merge(
        getButtonToneStyle222(tone, intent),
        getButtonShadowStyle222(tone, depth),
        {
          p: 0,
          rowGap: 0
        },
        css3
      )
    }, props), {
      children: children ? children : /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(HeroIconOne3, { boxSize: "65%", name })
    })
  );
};
var Dialog3 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("code", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("pre", { children: `<Dialog.Root>
	<Dialog.Trigger asChild>
		<Button>Open Dialog with Close + Scroll</Button>
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay>
			<Dialog.ContentWithClose>
				{/* repeat paragraph 10 times */}
				{[...Array(20)].map((_, i) => (
					<Text key={i}>
						Lorem ipsum odor amet, consectetuer adipiscing elit. Ac
						purus in massa egestas mollis varius; dignissim elementum.
						Mollis tincidunt mattis hendrerit dolor eros enim, nisi
						ligula ornare. Hendrerit parturient habitant pharetra rutrum
						gravida porttitor eros feugiat. Mollis elit sodales taciti
						duis praesent id. Consequat urna vitae morbi nunc congue.
					</Text>
				))}
				<Dialog.Close asChild>
					<Button>Close Button in content</Button>
				</Dialog.Close>
			</Dialog.ContentWithClose>
		</Dialog.Overlay>
	</Dialog.Portal>
</Dialog.Root>` }) });
};
var Root52 = styled222(DialogPrimitive3.Root, {
  boxSizing: "border-box"
});
Root52.displayName = "Root";
Dialog3.Root = Root52;
var Trigger52 = styled222(DialogPrimitive3.Trigger, {});
Trigger52.displayName = "Trigger";
Dialog3.Trigger = Trigger52;
var Portal52 = styled222(DialogPrimitive3.Portal, {});
Portal52.displayName = "Portal";
Dialog3.Portal = Portal52;
var Title52 = styled222(DialogPrimitive3.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold"
});
Title52.displayName = "Title";
Dialog3.Title = Title52;
var Description52 = styled222(DialogPrimitive3.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary"
});
Description52.displayName = "Description";
Dialog3.Description = Description52;
var Close52 = styled222(DialogPrimitive3.Close, {});
Close52.displayName = "Close";
Dialog3.Close = Close52;
var Overlay52 = styled222(DialogPrimitive3.Overlay, {
  backgroundColor: import_colors3.blackA.blackA8,
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
Overlay52.displayName = "Overlay";
Dialog3.Overlay = Overlay52;
var Content52 = styled222(DialogPrimitive3.Content, {
  boxSizing: "border-box",
  backgroundColor: "$baseBackground",
  borderRadius: "$2xl",
  boxShadow: "$2",
  zIndex: 40,
  position: "relative",
  width: "90vw",
  maxWidth: "650px",
  // maxHeight: "85vh",
  overflowY: "auto",
  "&:focus": { outline: "none" }
});
Content52.displayName = "Content";
Dialog3.Content = Content52;
var ContentWithClose3 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Content52, __spreadProps222(__spreadValues222({}, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      Box2222,
      {
        css: {
          position: "absolute",
          top: "$2",
          right: "$2",
          zIndex: 50
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(DialogPrimitive3.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(IconButton3, { isRound: true, name: "HiOutlineX", intent: "ghost" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      Box2222,
      {
        css: {
          padding: "$6",
          pb: "$12",
          boxSizing: "border-box",
          position: "relative",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          width: "100%",
          minWidth: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          ":focus": { outline: "none" }
        },
        children: props.children
      }
    )
  ] }));
};
ContentWithClose3.displayName = "ContentWithClose";
Dialog3.ContentWithClose = ContentWithClose3;
var HeroIcon4 = (props) => {
  const icons3 = __objRest22(HeroIcons4, []);
  const OutlineIcon = icons3[props.icon] || icons3["HiArchive"];
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_jsx_runtime46.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    OutlineIcon,
    {
      style: { width: "100%", height: "100%" },
      "aria-hidden": "true"
    }
  ) });
};
var HeroIconOne4 = (_a) => {
  var _b = _a, {
    name = "HiArchive",
    boxSize = "24px"
  } = _b, props = __objRest22(_b, [
    "name",
    "boxSize"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Box22, __spreadProps22(__spreadValues22({ css: { boxSize } }, props), { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(HeroIcon4, { icon: name }) }));
};
var IconButtonWrapper4 = styled22(BaseButton22, {
  aspectRatio: "1",
  p: 0,
  rowGap: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});
var IconButton4 = (_a) => {
  var _b = _a, {
    children,
    name,
    tone = "slate",
    intent = "primary",
    depth,
    css: css3,
    isRound
  } = _b, props = __objRest22(_b, [
    "children",
    "name",
    "tone",
    "intent",
    "depth",
    "css",
    "isRound"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    IconButtonWrapper4,
    __spreadProps22(__spreadValues22({
      isRound,
      css: import_lodash22.default.merge(
        getButtonToneStyle22(tone, intent),
        getButtonShadowStyle22(tone, depth),
        {
          p: 0,
          rowGap: 0
        },
        css3
      )
    }, props), {
      children: children ? children : /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(HeroIconOne4, { boxSize: "65%", name })
    })
  );
};
var Dialog4 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("code", { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("pre", { children: `<Dialog.Root>
	<Dialog.Trigger asChild>
		<Button>Open Dialog with Close + Scroll</Button>
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay>
			<Dialog.ContentWithClose>
				{/* repeat paragraph 10 times */}
				{[...Array(20)].map((_, i) => (
					<Text key={i}>
						Lorem ipsum odor amet, consectetuer adipiscing elit. Ac
						purus in massa egestas mollis varius; dignissim elementum.
						Mollis tincidunt mattis hendrerit dolor eros enim, nisi
						ligula ornare. Hendrerit parturient habitant pharetra rutrum
						gravida porttitor eros feugiat. Mollis elit sodales taciti
						duis praesent id. Consequat urna vitae morbi nunc congue.
					</Text>
				))}
				<Dialog.Close asChild>
					<Button>Close Button in content</Button>
				</Dialog.Close>
			</Dialog.ContentWithClose>
		</Dialog.Overlay>
	</Dialog.Portal>
</Dialog.Root>` }) });
};
var Root7 = styled22(DialogPrimitive4.Root, {
  boxSizing: "border-box"
});
Root7.displayName = "Root";
Dialog4.Root = Root7;
var Trigger7 = styled22(DialogPrimitive4.Trigger, {});
Trigger7.displayName = "Trigger";
Dialog4.Trigger = Trigger7;
var Portal7 = styled22(DialogPrimitive4.Portal, {});
Portal7.displayName = "Portal";
Dialog4.Portal = Portal7;
var Title7 = styled22(DialogPrimitive4.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold"
});
Title7.displayName = "Title";
Dialog4.Title = Title7;
var Description7 = styled22(DialogPrimitive4.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary"
});
Description7.displayName = "Description";
Dialog4.Description = Description7;
var Close7 = styled22(DialogPrimitive4.Close, {});
Close7.displayName = "Close";
Dialog4.Close = Close7;
var Overlay7 = styled22(DialogPrimitive4.Overlay, {
  backgroundColor: import_colors2.blackA.blackA8,
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
Overlay7.displayName = "Overlay";
Dialog4.Overlay = Overlay7;
var Content7 = styled22(DialogPrimitive4.Content, {
  boxSizing: "border-box",
  backgroundColor: "$baseBackground",
  borderRadius: "$2xl",
  boxShadow: "$2",
  zIndex: 40,
  position: "relative",
  width: "90vw",
  maxWidth: "650px",
  // maxHeight: "85vh",
  overflowY: "auto",
  "&:focus": { outline: "none" }
});
Content7.displayName = "Content";
Dialog4.Content = Content7;
var ContentWithClose4 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(Content7, __spreadProps22(__spreadValues22({}, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      Box222,
      {
        css: {
          position: "absolute",
          top: "$2",
          right: "$2",
          zIndex: 50
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(DialogPrimitive4.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(IconButton4, { isRound: true, name: "HiOutlineX", intent: "ghost" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      Box222,
      {
        css: {
          padding: "$6",
          pb: "$12",
          boxSizing: "border-box",
          position: "relative",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          width: "100%",
          minWidth: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          ":focus": { outline: "none" }
        },
        children: props.children
      }
    )
  ] }));
};
ContentWithClose4.displayName = "ContentWithClose";
Dialog4.ContentWithClose = ContentWithClose4;
var HeroIcon5 = (props) => {
  const icons3 = __objRest2(HeroIcons5, []);
  const OutlineIcon = icons3[props.icon] || icons3["HiArchive"];
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_jsx_runtime49.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    OutlineIcon,
    {
      style: { width: "100%", height: "100%" },
      "aria-hidden": "true"
    }
  ) });
};
var HeroIconOne5 = (_a) => {
  var _b = _a, {
    name = "HiArchive",
    boxSize = "24px"
  } = _b, props = __objRest2(_b, [
    "name",
    "boxSize"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Box2, __spreadProps2(__spreadValues2({ css: { boxSize } }, props), { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(HeroIcon5, { icon: name }) }));
};
var IconButtonWrapper5 = styled2(BaseButton2, {
  aspectRatio: "1",
  p: 0,
  rowGap: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});
var IconButton5 = (_a) => {
  var _b = _a, {
    children,
    name,
    tone = "slate",
    intent = "primary",
    depth,
    css: css3,
    isRound
  } = _b, props = __objRest2(_b, [
    "children",
    "name",
    "tone",
    "intent",
    "depth",
    "css",
    "isRound"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    IconButtonWrapper5,
    __spreadProps2(__spreadValues2({
      isRound,
      css: import_lodash23.default.merge(
        getButtonToneStyle2(tone, intent),
        getButtonShadowStyle2(tone, depth),
        {
          p: 0,
          rowGap: 0
        },
        css3
      )
    }, props), {
      children: children ? children : /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(HeroIconOne5, { boxSize: "65%", name })
    })
  );
};
var Dialog5 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("code", { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("pre", { children: `<Dialog.Root>
	<Dialog.Trigger asChild>
		<Button>Open Dialog with Close + Scroll</Button>
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay>
			<Dialog.ContentWithClose>
				{/* repeat paragraph 10 times */}
				{[...Array(20)].map((_, i) => (
					<Text key={i}>
						Lorem ipsum odor amet, consectetuer adipiscing elit. Ac
						purus in massa egestas mollis varius; dignissim elementum.
						Mollis tincidunt mattis hendrerit dolor eros enim, nisi
						ligula ornare. Hendrerit parturient habitant pharetra rutrum
						gravida porttitor eros feugiat. Mollis elit sodales taciti
						duis praesent id. Consequat urna vitae morbi nunc congue.
					</Text>
				))}
				<Dialog.Close asChild>
					<Button>Close Button in content</Button>
				</Dialog.Close>
			</Dialog.ContentWithClose>
		</Dialog.Overlay>
	</Dialog.Portal>
</Dialog.Root>` }) });
};
var Root8 = styled2(DialogPrimitive5.Root, {
  boxSizing: "border-box"
});
Root8.displayName = "Root";
Dialog5.Root = Root8;
var Trigger8 = styled2(DialogPrimitive5.Trigger, {});
Trigger8.displayName = "Trigger";
Dialog5.Trigger = Trigger8;
var Portal8 = styled2(DialogPrimitive5.Portal, {});
Portal8.displayName = "Portal";
Dialog5.Portal = Portal8;
var Title8 = styled2(DialogPrimitive5.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold"
});
Title8.displayName = "Title";
Dialog5.Title = Title8;
var Description8 = styled2(DialogPrimitive5.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary"
});
Description8.displayName = "Description";
Dialog5.Description = Description8;
var Close8 = styled2(DialogPrimitive5.Close, {});
Close8.displayName = "Close";
Dialog5.Close = Close8;
var Overlay8 = styled2(DialogPrimitive5.Overlay, {
  backgroundColor: import_colors.blackA.blackA8,
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
Overlay8.displayName = "Overlay";
Dialog5.Overlay = Overlay8;
var Content8 = styled2(DialogPrimitive5.Content, {
  boxSizing: "border-box",
  backgroundColor: "$baseBackground",
  borderRadius: "$2xl",
  boxShadow: "$2",
  zIndex: 40,
  position: "relative",
  width: "90vw",
  maxWidth: "650px",
  // maxHeight: "85vh",
  overflowY: "auto",
  "&:focus": { outline: "none" }
});
Content8.displayName = "Content";
Dialog5.Content = Content8;
var ContentWithClose5 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(Content8, __spreadProps2(__spreadValues2({}, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      Box22,
      {
        css: {
          position: "absolute",
          top: "$2",
          right: "$2",
          zIndex: 50
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(DialogPrimitive5.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(IconButton5, { isRound: true, name: "HiOutlineX", intent: "ghost" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      Box22,
      {
        css: {
          padding: "$6",
          pb: "$12",
          boxSizing: "border-box",
          position: "relative",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          width: "100%",
          minWidth: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          ":focus": { outline: "none" }
        },
        children: props.children
      }
    )
  ] }));
};
ContentWithClose5.displayName = "ContentWithClose";
Dialog5.ContentWithClose = ContentWithClose5;

// IconButton/index.tsx
var import_lodash24 = __toESM(require("lodash"), 1);

// HeroIconOne/index.tsx
var HeroIcons6 = __toESM(require("react-icons/hi"), 1);
var import_jsx_runtime52 = require("react/jsx-runtime");
var HeroIcon6 = (props) => {
  const icons3 = __objRest(HeroIcons6, []);
  const OutlineIcon = icons3[props.icon] || icons3["HiArchive"];
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    OutlineIcon,
    {
      style: { width: "100%", height: "100%" },
      "aria-hidden": "true"
    }
  ) });
};
var HeroIconOne6 = (_a) => {
  var _b = _a, {
    name = "HiArchive",
    boxSize = "24px"
  } = _b, props = __objRest(_b, [
    "name",
    "boxSize"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Box, __spreadProps(__spreadValues({ css: { boxSize } }, props), { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(HeroIcon6, { icon: name }) }));
};

// IconButton/index.tsx
var import_jsx_runtime53 = require("react/jsx-runtime");
var IconButtonWrapper6 = styled(BaseButton, {
  aspectRatio: "1",
  p: 0,
  rowGap: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});
var IconButton6 = (_a) => {
  var _b = _a, {
    children,
    name,
    tone = "slate",
    intent = "primary",
    depth,
    css: css3,
    isRound
  } = _b, props = __objRest(_b, [
    "children",
    "name",
    "tone",
    "intent",
    "depth",
    "css",
    "isRound"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    IconButtonWrapper6,
    __spreadProps(__spreadValues({
      isRound,
      css: import_lodash24.default.merge(
        getButtonToneStyle(tone, intent),
        getButtonShadowStyle(tone, depth),
        {
          p: 0,
          rowGap: 0
        },
        css3
      )
    }, props), {
      children: children ? children : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(HeroIconOne6, { boxSize: "65%", name })
    })
  );
};

// Dialog/index.tsx
var import_jsx_runtime54 = require("react/jsx-runtime");
var Dialog6 = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("code", { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("pre", { children: `<Dialog.Root>
	<Dialog.Trigger asChild>
		<Button>Open Dialog with Close + Scroll</Button>
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay>
			<Dialog.ContentWithClose>
				{/* repeat paragraph 10 times */}
				{[...Array(20)].map((_, i) => (
					<Text key={i}>
						Lorem ipsum odor amet, consectetuer adipiscing elit. Ac
						purus in massa egestas mollis varius; dignissim elementum.
						Mollis tincidunt mattis hendrerit dolor eros enim, nisi
						ligula ornare. Hendrerit parturient habitant pharetra rutrum
						gravida porttitor eros feugiat. Mollis elit sodales taciti
						duis praesent id. Consequat urna vitae morbi nunc congue.
					</Text>
				))}
				<Dialog.Close asChild>
					<Button>Close Button in content</Button>
				</Dialog.Close>
			</Dialog.ContentWithClose>
		</Dialog.Overlay>
	</Dialog.Portal>
</Dialog.Root>` }) });
};
var Root9 = styled(DialogPrimitive6.Root, {
  boxSizing: "border-box"
});
Root9.displayName = "Root";
Dialog6.Root = Root9;
var Trigger9 = styled(DialogPrimitive6.Trigger, {});
Trigger9.displayName = "Trigger";
Dialog6.Trigger = Trigger9;
var Portal9 = styled(DialogPrimitive6.Portal, {});
Portal9.displayName = "Portal";
Dialog6.Portal = Portal9;
var Title9 = styled(DialogPrimitive6.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold"
});
Title9.displayName = "Title";
Dialog6.Title = Title9;
var Description9 = styled(DialogPrimitive6.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary"
});
Description9.displayName = "Description";
Dialog6.Description = Description9;
var Close9 = styled(DialogPrimitive6.Close, {});
Close9.displayName = "Close";
Dialog6.Close = Close9;
var Overlay9 = styled(DialogPrimitive6.Overlay, {
  backgroundColor: import_colors6.blackA.blackA8,
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
Overlay9.displayName = "Overlay";
Dialog6.Overlay = Overlay9;
var Content9 = styled(DialogPrimitive6.Content, {
  boxSizing: "border-box",
  backgroundColor: "$baseBackground",
  borderRadius: "$2xl",
  boxShadow: "$2",
  zIndex: 40,
  position: "relative",
  width: "90vw",
  maxWidth: "650px",
  // maxHeight: "85vh",
  overflowY: "auto",
  "&:focus": { outline: "none" }
});
Content9.displayName = "Content";
Dialog6.Content = Content9;
var ContentWithClose6 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(Content9, __spreadProps(__spreadValues({}, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
      Box2,
      {
        css: {
          position: "absolute",
          top: "$2",
          right: "$2",
          zIndex: 50
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(DialogPrimitive6.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(IconButton6, { isRound: true, name: "HiOutlineX", intent: "ghost" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
      Box2,
      {
        css: {
          padding: "$6",
          pb: "$12",
          boxSizing: "border-box",
          position: "relative",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
          width: "100%",
          minWidth: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          ":focus": { outline: "none" }
        },
        children: props.children
      }
    )
  ] }));
};
ContentWithClose6.displayName = "ContentWithClose";
Dialog6.ContentWithClose = ContentWithClose6;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AutoSpinner,
  BaseButton,
  Box,
  Button,
  Checkbox,
  Dialog,
  Display,
  Footer,
  NomiStyle,
  Radix,
  Spinner,
  Stack,
  Text,
  brandFonts,
  css,
  globalCss,
  keyframes,
  nomiClass,
  reset,
  stitchesDarkTheme,
  stitchesTheme,
  styled
});
