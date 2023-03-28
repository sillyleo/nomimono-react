var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// components/Button/index.tsx
import _ from "lodash";
import React from "react";

// stitches.config.ts
import { createStitches, defaultThemeMap } from "@stitches/react";

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

// ../../node_modules/@radix-ui/colors/index.mjs
var colors_exports = {};
__export(colors_exports, {
  amber: () => amber,
  amberA: () => amberA,
  amberDark: () => amber$1,
  amberDarkA: () => amberA$1,
  blackA: () => blackA,
  blue: () => blue,
  blueA: () => blueA,
  blueDark: () => blue$1,
  blueDarkA: () => blueA$1,
  bronze: () => bronze,
  bronzeA: () => bronzeA,
  bronzeDark: () => bronze$1,
  bronzeDarkA: () => bronzeA$1,
  brown: () => brown,
  brownA: () => brownA,
  brownDark: () => brown$1,
  brownDarkA: () => brownA$1,
  crimson: () => crimson,
  crimsonA: () => crimsonA,
  crimsonDark: () => crimson$1,
  crimsonDarkA: () => crimsonA$1,
  cyan: () => cyan,
  cyanA: () => cyanA,
  cyanDark: () => cyan$1,
  cyanDarkA: () => cyanA$1,
  gold: () => gold,
  goldA: () => goldA,
  goldDark: () => gold$1,
  goldDarkA: () => goldA$1,
  grass: () => grass,
  grassA: () => grassA,
  grassDark: () => grass$1,
  grassDarkA: () => grassA$1,
  gray: () => gray,
  grayA: () => grayA,
  grayDark: () => gray$1,
  grayDarkA: () => grayA$1,
  green: () => green,
  greenA: () => greenA,
  greenDark: () => green$1,
  greenDarkA: () => greenA$1,
  indigo: () => indigo,
  indigoA: () => indigoA,
  indigoDark: () => indigo$1,
  indigoDarkA: () => indigoA$1,
  lime: () => lime,
  limeA: () => limeA,
  limeDark: () => lime$1,
  limeDarkA: () => limeA$1,
  mauve: () => mauve,
  mauveA: () => mauveA,
  mauveDark: () => mauve$1,
  mauveDarkA: () => mauveA$1,
  mint: () => mint,
  mintA: () => mintA,
  mintDark: () => mint$1,
  mintDarkA: () => mintA$1,
  olive: () => olive,
  oliveA: () => oliveA,
  oliveDark: () => olive$1,
  oliveDarkA: () => oliveA$1,
  orange: () => orange,
  orangeA: () => orangeA,
  orangeDark: () => orange$1,
  orangeDarkA: () => orangeA$1,
  pink: () => pink,
  pinkA: () => pinkA,
  pinkDark: () => pink$1,
  pinkDarkA: () => pinkA$1,
  plum: () => plum,
  plumA: () => plumA,
  plumDark: () => plum$1,
  plumDarkA: () => plumA$1,
  purple: () => purple,
  purpleA: () => purpleA,
  purpleDark: () => purple$1,
  purpleDarkA: () => purpleA$1,
  red: () => red,
  redA: () => redA,
  redDark: () => red$1,
  redDarkA: () => redA$1,
  sage: () => sage,
  sageA: () => sageA,
  sageDark: () => sage$1,
  sageDarkA: () => sageA$1,
  sand: () => sand,
  sandA: () => sandA,
  sandDark: () => sand$1,
  sandDarkA: () => sandA$1,
  sky: () => sky,
  skyA: () => skyA,
  skyDark: () => sky$1,
  skyDarkA: () => skyA$1,
  slate: () => slate,
  slateA: () => slateA,
  slateDark: () => slate$1,
  slateDarkA: () => slateA$1,
  teal: () => teal,
  tealA: () => tealA,
  tealDark: () => teal$1,
  tealDarkA: () => tealA$1,
  tomato: () => tomato,
  tomatoA: () => tomatoA,
  tomatoDark: () => tomato$1,
  tomatoDarkA: () => tomatoA$1,
  violet: () => violet,
  violetA: () => violetA,
  violetDark: () => violet$1,
  violetDarkA: () => violetA$1,
  whiteA: () => whiteA,
  yellow: () => yellow,
  yellowA: () => yellowA,
  yellowDark: () => yellow$1,
  yellowDarkA: () => yellowA$1
});
var amber$1 = {
  amber1: "hsl(36, 100%, 6.1%)",
  amber2: "hsl(35, 100%, 7.6%)",
  amber3: "hsl(32, 100%, 10.2%)",
  amber4: "hsl(32, 100%, 12.4%)",
  amber5: "hsl(33, 100%, 14.6%)",
  amber6: "hsl(35, 100%, 17.1%)",
  amber7: "hsl(35, 91.0%, 21.6%)",
  amber8: "hsl(36, 100%, 25.5%)",
  amber9: "hsl(39, 100%, 57.0%)",
  amber10: "hsl(43, 100%, 64.0%)",
  amber11: "hsl(39, 90.0%, 49.8%)",
  amber12: "hsl(39, 97.0%, 93.2%)"
};
var blue$1 = {
  blue1: "hsl(212, 35.0%, 9.2%)",
  blue2: "hsl(216, 50.0%, 11.8%)",
  blue3: "hsl(214, 59.4%, 15.3%)",
  blue4: "hsl(214, 65.8%, 17.9%)",
  blue5: "hsl(213, 71.2%, 20.2%)",
  blue6: "hsl(212, 77.4%, 23.1%)",
  blue7: "hsl(211, 85.1%, 27.4%)",
  blue8: "hsl(211, 89.7%, 34.1%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(209, 100%, 60.6%)",
  blue11: "hsl(210, 100%, 66.1%)",
  blue12: "hsl(206, 98.0%, 95.8%)"
};
var bronze$1 = {
  bronze1: "hsl(17, 10.0%, 8.8%)",
  bronze2: "hsl(15, 14.8%, 10.6%)",
  bronze3: "hsl(15, 16.3%, 14.3%)",
  bronze4: "hsl(16, 17.1%, 17.2%)",
  bronze5: "hsl(16, 17.6%, 19.6%)",
  bronze6: "hsl(16, 18.1%, 22.9%)",
  bronze7: "hsl(17, 18.8%, 28.8%)",
  bronze8: "hsl(17, 19.6%, 38.0%)",
  bronze9: "hsl(17, 20.0%, 54.0%)",
  bronze10: "hsl(18, 24.0%, 59.0%)",
  bronze11: "hsl(18, 35.0%, 68.5%)",
  bronze12: "hsl(18, 57.0%, 94.1%)"
};
var brown$1 = {
  brown1: "hsl(22, 15.0%, 8.7%)",
  brown2: "hsl(20, 28.3%, 10.4%)",
  brown3: "hsl(20, 28.0%, 14.0%)",
  brown4: "hsl(21, 28.4%, 16.5%)",
  brown5: "hsl(22, 28.7%, 18.9%)",
  brown6: "hsl(23, 29.0%, 22.3%)",
  brown7: "hsl(25, 29.5%, 27.8%)",
  brown8: "hsl(27, 30.1%, 35.9%)",
  brown9: "hsl(28, 34.0%, 51.0%)",
  brown10: "hsl(28, 41.4%, 55.8%)",
  brown11: "hsl(28, 60.0%, 64.5%)",
  brown12: "hsl(30, 67.0%, 94.0%)"
};
var crimson$1 = {
  crimson1: "hsl(335, 20.0%, 9.6%)",
  crimson2: "hsl(335, 32.2%, 11.6%)",
  crimson3: "hsl(335, 42.5%, 16.5%)",
  crimson4: "hsl(335, 47.2%, 19.3%)",
  crimson5: "hsl(335, 50.9%, 21.8%)",
  crimson6: "hsl(335, 55.7%, 25.3%)",
  crimson7: "hsl(336, 62.9%, 30.8%)",
  crimson8: "hsl(336, 74.9%, 39.0%)",
  crimson9: "hsl(336, 80.0%, 57.8%)",
  crimson10: "hsl(339, 84.1%, 62.6%)",
  crimson11: "hsl(341, 90.0%, 67.3%)",
  crimson12: "hsl(332, 87.0%, 96.0%)"
};
var cyan$1 = {
  cyan1: "hsl(192, 60.0%, 7.2%)",
  cyan2: "hsl(192, 71.4%, 8.2%)",
  cyan3: "hsl(192, 75.9%, 10.8%)",
  cyan4: "hsl(192, 79.3%, 12.8%)",
  cyan5: "hsl(192, 82.5%, 14.6%)",
  cyan6: "hsl(192, 86.6%, 16.9%)",
  cyan7: "hsl(192, 92.6%, 20.1%)",
  cyan8: "hsl(192, 100%, 24.5%)",
  cyan9: "hsl(190, 95.0%, 39.0%)",
  cyan10: "hsl(188, 100%, 40.0%)",
  cyan11: "hsl(186, 100%, 42.2%)",
  cyan12: "hsl(185, 73.0%, 93.2%)"
};
var gold$1 = {
  gold1: "hsl(44, 9.0%, 8.3%)",
  gold2: "hsl(43, 14.3%, 9.6%)",
  gold3: "hsl(42, 15.5%, 13.0%)",
  gold4: "hsl(41, 16.4%, 15.6%)",
  gold5: "hsl(41, 16.9%, 17.8%)",
  gold6: "hsl(40, 17.6%, 20.8%)",
  gold7: "hsl(38, 18.5%, 26.4%)",
  gold8: "hsl(36, 19.6%, 35.1%)",
  gold9: "hsl(36, 20.0%, 49.5%)",
  gold10: "hsl(36, 22.3%, 54.5%)",
  gold11: "hsl(35, 30.0%, 64.0%)",
  gold12: "hsl(49, 52.0%, 93.8%)"
};
var grass$1 = {
  grass1: "hsl(146, 30.0%, 7.4%)",
  grass2: "hsl(136, 33.3%, 8.8%)",
  grass3: "hsl(137, 36.0%, 11.4%)",
  grass4: "hsl(137, 37.6%, 13.7%)",
  grass5: "hsl(136, 38.7%, 16.0%)",
  grass6: "hsl(135, 39.6%, 19.1%)",
  grass7: "hsl(134, 40.3%, 23.8%)",
  grass8: "hsl(131, 40.1%, 30.8%)",
  grass9: "hsl(131, 41.0%, 46.5%)",
  grass10: "hsl(131, 39.0%, 52.1%)",
  grass11: "hsl(131, 43.0%, 57.2%)",
  grass12: "hsl(137, 72.0%, 94.0%)"
};
var gray$1 = {
  gray1: "hsl(0, 0%, 8.5%)",
  gray2: "hsl(0, 0%, 11.0%)",
  gray3: "hsl(0, 0%, 13.6%)",
  gray4: "hsl(0, 0%, 15.8%)",
  gray5: "hsl(0, 0%, 17.9%)",
  gray6: "hsl(0, 0%, 20.5%)",
  gray7: "hsl(0, 0%, 24.3%)",
  gray8: "hsl(0, 0%, 31.2%)",
  gray9: "hsl(0, 0%, 43.9%)",
  gray10: "hsl(0, 0%, 49.4%)",
  gray11: "hsl(0, 0%, 62.8%)",
  gray12: "hsl(0, 0%, 93.0%)"
};
var green$1 = {
  green1: "hsl(146, 30.0%, 7.4%)",
  green2: "hsl(155, 44.2%, 8.4%)",
  green3: "hsl(155, 46.7%, 10.9%)",
  green4: "hsl(154, 48.4%, 12.9%)",
  green5: "hsl(154, 49.7%, 14.9%)",
  green6: "hsl(154, 50.9%, 17.6%)",
  green7: "hsl(153, 51.8%, 21.8%)",
  green8: "hsl(151, 51.7%, 28.4%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(151, 49.3%, 46.5%)",
  green11: "hsl(151, 50.0%, 53.2%)",
  green12: "hsl(137, 72.0%, 94.0%)"
};
var indigo$1 = {
  indigo1: "hsl(229, 24.0%, 10.0%)",
  indigo2: "hsl(230, 36.4%, 12.9%)",
  indigo3: "hsl(228, 43.3%, 17.5%)",
  indigo4: "hsl(227, 47.2%, 21.0%)",
  indigo5: "hsl(227, 50.0%, 24.1%)",
  indigo6: "hsl(226, 52.9%, 28.2%)",
  indigo7: "hsl(226, 56.0%, 34.5%)",
  indigo8: "hsl(226, 58.2%, 44.1%)",
  indigo9: "hsl(226, 70.0%, 55.5%)",
  indigo10: "hsl(227, 75.2%, 61.6%)",
  indigo11: "hsl(228, 100%, 75.9%)",
  indigo12: "hsl(226, 83.0%, 96.3%)"
};
var lime$1 = {
  lime1: "hsl(75, 55.0%, 6.0%)",
  lime2: "hsl(74, 56.8%, 7.3%)",
  lime3: "hsl(78, 50.2%, 9.9%)",
  lime4: "hsl(79, 50.3%, 12.1%)",
  lime5: "hsl(79, 52.6%, 14.2%)",
  lime6: "hsl(78, 55.7%, 16.7%)",
  lime7: "hsl(77, 59.7%, 20.1%)",
  lime8: "hsl(75, 64.8%, 24.5%)",
  lime9: "hsl(81, 67.0%, 50.0%)",
  lime10: "hsl(75, 85.0%, 60.0%)",
  lime11: "hsl(81, 70.0%, 43.8%)",
  lime12: "hsl(84, 79.0%, 92.6%)"
};
var mint$1 = {
  mint1: "hsl(173, 50.0%, 6.6%)",
  mint2: "hsl(176, 73.0%, 7.3%)",
  mint3: "hsl(175, 79.3%, 8.9%)",
  mint4: "hsl(174, 84.8%, 10.3%)",
  mint5: "hsl(174, 90.2%, 11.9%)",
  mint6: "hsl(173, 96.0%, 13.8%)",
  mint7: "hsl(172, 100%, 16.8%)",
  mint8: "hsl(170, 100%, 21.4%)",
  mint9: "hsl(167, 65.0%, 66.0%)",
  mint10: "hsl(163, 80.0%, 77.0%)",
  mint11: "hsl(167, 70.0%, 48.0%)",
  mint12: "hsl(165, 80.0%, 94.8%)"
};
var olive$1 = {
  olive1: "hsl(110, 5.0%, 8.6%)",
  olive2: "hsl(105, 7.4%, 10.6%)",
  olive3: "hsl(106, 6.4%, 13.1%)",
  olive4: "hsl(106, 5.8%, 15.3%)",
  olive5: "hsl(107, 5.3%, 17.4%)",
  olive6: "hsl(107, 4.9%, 19.9%)",
  olive7: "hsl(108, 4.4%, 23.6%)",
  olive8: "hsl(110, 3.8%, 30.6%)",
  olive9: "hsl(110, 6.0%, 42.5%)",
  olive10: "hsl(111, 4.8%, 48.2%)",
  olive11: "hsl(110, 5.0%, 61.8%)",
  olive12: "hsl(110, 6.0%, 93.0%)"
};
var orange$1 = {
  orange1: "hsl(30, 70.0%, 7.2%)",
  orange2: "hsl(28, 100%, 8.4%)",
  orange3: "hsl(26, 91.1%, 11.6%)",
  orange4: "hsl(25, 88.3%, 14.1%)",
  orange5: "hsl(24, 87.6%, 16.6%)",
  orange6: "hsl(24, 88.6%, 19.8%)",
  orange7: "hsl(24, 92.4%, 24.0%)",
  orange8: "hsl(25, 100%, 29.0%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 58.5%)",
  orange11: "hsl(24, 100%, 62.2%)",
  orange12: "hsl(24, 97.0%, 93.2%)"
};
var pink$1 = {
  pink1: "hsl(318, 25.0%, 9.6%)",
  pink2: "hsl(319, 32.2%, 11.6%)",
  pink3: "hsl(319, 41.0%, 16.0%)",
  pink4: "hsl(320, 45.4%, 18.7%)",
  pink5: "hsl(320, 49.0%, 21.1%)",
  pink6: "hsl(321, 53.6%, 24.4%)",
  pink7: "hsl(321, 61.1%, 29.7%)",
  pink8: "hsl(322, 74.9%, 37.5%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(323, 72.8%, 59.2%)",
  pink11: "hsl(325, 90.0%, 66.4%)",
  pink12: "hsl(322, 90.0%, 95.8%)"
};
var plum$1 = {
  plum1: "hsl(301, 20.0%, 9.4%)",
  plum2: "hsl(300, 29.8%, 11.2%)",
  plum3: "hsl(298, 34.4%, 15.3%)",
  plum4: "hsl(297, 36.8%, 18.3%)",
  plum5: "hsl(296, 38.5%, 21.1%)",
  plum6: "hsl(295, 40.4%, 24.7%)",
  plum7: "hsl(294, 42.7%, 30.6%)",
  plum8: "hsl(292, 45.1%, 40.0%)",
  plum9: "hsl(292, 45.0%, 51.0%)",
  plum10: "hsl(295, 50.0%, 55.4%)",
  plum11: "hsl(300, 60.0%, 62.0%)",
  plum12: "hsl(296, 74.0%, 95.7%)"
};
var purple$1 = {
  purple1: "hsl(284, 20.0%, 9.6%)",
  purple2: "hsl(283, 30.0%, 11.8%)",
  purple3: "hsl(281, 37.5%, 16.5%)",
  purple4: "hsl(280, 41.2%, 20.0%)",
  purple5: "hsl(279, 43.8%, 23.3%)",
  purple6: "hsl(277, 46.4%, 27.5%)",
  purple7: "hsl(275, 49.3%, 34.6%)",
  purple8: "hsl(272, 52.1%, 45.9%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(273, 57.3%, 59.1%)",
  purple11: "hsl(275, 80.0%, 71.0%)",
  purple12: "hsl(279, 75.0%, 95.7%)"
};
var mauve$1 = {
  mauve1: "hsl(246, 6.0%, 9.0%)",
  mauve2: "hsl(240, 5.1%, 11.6%)",
  mauve3: "hsl(241, 5.0%, 14.3%)",
  mauve4: "hsl(242, 4.9%, 16.5%)",
  mauve5: "hsl(243, 4.9%, 18.8%)",
  mauve6: "hsl(244, 4.9%, 21.5%)",
  mauve7: "hsl(245, 4.9%, 25.4%)",
  mauve8: "hsl(247, 4.8%, 32.5%)",
  mauve9: "hsl(252, 4.0%, 45.2%)",
  mauve10: "hsl(247, 3.4%, 50.7%)",
  mauve11: "hsl(253, 4.0%, 63.7%)",
  mauve12: "hsl(256, 6.0%, 93.2%)"
};
var red$1 = {
  red1: "hsl(353, 23.0%, 9.8%)",
  red2: "hsl(357, 34.4%, 12.0%)",
  red3: "hsl(356, 43.4%, 16.4%)",
  red4: "hsl(356, 47.6%, 19.2%)",
  red5: "hsl(356, 51.1%, 21.9%)",
  red6: "hsl(356, 55.2%, 25.9%)",
  red7: "hsl(357, 60.2%, 31.8%)",
  red8: "hsl(358, 65.0%, 40.4%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 85.3%, 64.0%)",
  red11: "hsl(358, 100%, 69.5%)",
  red12: "hsl(351, 89.0%, 96.0%)"
};
var sage$1 = {
  sage1: "hsl(155, 7.0%, 8.4%)",
  sage2: "hsl(150, 7.4%, 10.6%)",
  sage3: "hsl(150, 6.7%, 13.1%)",
  sage4: "hsl(150, 6.4%, 15.3%)",
  sage5: "hsl(150, 6.1%, 17.4%)",
  sage6: "hsl(150, 5.8%, 19.9%)",
  sage7: "hsl(150, 5.5%, 23.6%)",
  sage8: "hsl(150, 5.1%, 30.6%)",
  sage9: "hsl(155, 6.0%, 42.5%)",
  sage10: "hsl(153, 4.8%, 48.2%)",
  sage11: "hsl(155, 5.0%, 61.8%)",
  sage12: "hsl(155, 6.0%, 93.0%)"
};
var sand$1 = {
  sand1: "hsl(61, 2.0%, 8.3%)",
  sand2: "hsl(60, 3.7%, 10.6%)",
  sand3: "hsl(58, 3.7%, 13.1%)",
  sand4: "hsl(57, 3.6%, 15.3%)",
  sand5: "hsl(56, 3.7%, 17.4%)",
  sand6: "hsl(55, 3.7%, 19.9%)",
  sand7: "hsl(53, 3.7%, 23.6%)",
  sand8: "hsl(50, 3.8%, 30.6%)",
  sand9: "hsl(50, 4.0%, 42.7%)",
  sand10: "hsl(52, 3.1%, 48.3%)",
  sand11: "hsl(50, 4.0%, 61.8%)",
  sand12: "hsl(56, 4.0%, 92.8%)"
};
var sky$1 = {
  sky1: "hsl(205, 45.0%, 8.6%)",
  sky2: "hsl(202, 71.4%, 9.6%)",
  sky3: "hsl(201, 74.6%, 12.2%)",
  sky4: "hsl(201, 77.4%, 14.4%)",
  sky5: "hsl(200, 80.3%, 16.5%)",
  sky6: "hsl(200, 84.1%, 18.9%)",
  sky7: "hsl(199, 90.2%, 22.1%)",
  sky8: "hsl(198, 100%, 26.1%)",
  sky9: "hsl(193, 98.0%, 70.0%)",
  sky10: "hsl(192, 100%, 77.0%)",
  sky11: "hsl(192, 85.0%, 55.8%)",
  sky12: "hsl(198, 98.0%, 95.8%)"
};
var slate$1 = {
  slate1: "hsl(200, 7.0%, 8.8%)",
  slate2: "hsl(195, 7.1%, 11.0%)",
  slate3: "hsl(197, 6.8%, 13.6%)",
  slate4: "hsl(198, 6.6%, 15.8%)",
  slate5: "hsl(199, 6.4%, 17.9%)",
  slate6: "hsl(201, 6.2%, 20.5%)",
  slate7: "hsl(203, 6.0%, 24.3%)",
  slate8: "hsl(207, 5.6%, 31.6%)",
  slate9: "hsl(206, 6.0%, 43.9%)",
  slate10: "hsl(206, 5.2%, 49.5%)",
  slate11: "hsl(206, 6.0%, 63.0%)",
  slate12: "hsl(210, 6.0%, 93.0%)"
};
var teal$1 = {
  teal1: "hsl(168, 48.0%, 6.5%)",
  teal2: "hsl(169, 77.8%, 7.1%)",
  teal3: "hsl(170, 76.1%, 9.2%)",
  teal4: "hsl(171, 75.8%, 11.0%)",
  teal5: "hsl(171, 75.7%, 12.8%)",
  teal6: "hsl(172, 75.8%, 15.1%)",
  teal7: "hsl(172, 76.7%, 18.6%)",
  teal8: "hsl(173, 80.2%, 23.7%)",
  teal9: "hsl(173, 80.0%, 36.0%)",
  teal10: "hsl(174, 83.9%, 38.2%)",
  teal11: "hsl(174, 90.0%, 40.7%)",
  teal12: "hsl(166, 73.0%, 93.1%)"
};
var tomato$1 = {
  tomato1: "hsl(10, 23.0%, 9.4%)",
  tomato2: "hsl(9, 44.8%, 11.4%)",
  tomato3: "hsl(8, 52.0%, 15.3%)",
  tomato4: "hsl(7, 56.3%, 18.0%)",
  tomato5: "hsl(7, 60.1%, 20.6%)",
  tomato6: "hsl(8, 64.8%, 24.0%)",
  tomato7: "hsl(8, 71.2%, 29.1%)",
  tomato8: "hsl(10, 80.2%, 35.7%)",
  tomato9: "hsl(10, 78.0%, 54.0%)",
  tomato10: "hsl(10, 81.7%, 59.0%)",
  tomato11: "hsl(10, 85.0%, 62.8%)",
  tomato12: "hsl(10, 89.0%, 96.0%)"
};
var violet$1 = {
  violet1: "hsl(250, 20.0%, 10.2%)",
  violet2: "hsl(255, 30.3%, 12.9%)",
  violet3: "hsl(253, 37.0%, 18.4%)",
  violet4: "hsl(252, 40.1%, 22.5%)",
  violet5: "hsl(252, 42.2%, 26.2%)",
  violet6: "hsl(251, 44.3%, 31.1%)",
  violet7: "hsl(250, 46.8%, 38.9%)",
  violet8: "hsl(250, 51.8%, 51.2%)",
  violet9: "hsl(252, 56.0%, 57.5%)",
  violet10: "hsl(251, 63.2%, 63.2%)",
  violet11: "hsl(250, 95.0%, 76.8%)",
  violet12: "hsl(252, 87.0%, 96.4%)"
};
var yellow$1 = {
  yellow1: "hsl(45, 100%, 5.5%)",
  yellow2: "hsl(46, 100%, 6.7%)",
  yellow3: "hsl(45, 100%, 8.7%)",
  yellow4: "hsl(45, 100%, 10.4%)",
  yellow5: "hsl(47, 100%, 12.1%)",
  yellow6: "hsl(49, 100%, 14.3%)",
  yellow7: "hsl(49, 90.3%, 18.4%)",
  yellow8: "hsl(50, 100%, 22.0%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(54, 100%, 68.0%)",
  yellow11: "hsl(48, 100%, 47.0%)",
  yellow12: "hsl(53, 100%, 91.0%)"
};
var amberA$1 = {
  amberA1: "hsla(0, 0%, 0%, 0)",
  amberA2: "hsla(31, 100%, 49.7%, 0.036)",
  amberA3: "hsla(27, 100%, 49.9%, 0.094)",
  amberA4: "hsla(29, 100%, 50.0%, 0.143)",
  amberA5: "hsla(31, 100%, 50.0%, 0.192)",
  amberA6: "hsla(35, 100%, 50.0%, 0.250)",
  amberA7: "hsla(34, 99.6%, 52.9%, 0.331)",
  amberA8: "hsla(36, 100%, 50.0%, 0.442)",
  amberA9: "hsla(40, 100%, 57.2%, 0.980)",
  amberA10: "hsla(44, 100%, 64.2%, 0.980)",
  amberA11: "hsla(39, 99.9%, 52.7%, 0.938)",
  amberA12: "hsla(45, 100%, 94.2%, 0.980)"
};
var blueA$1 = {
  blueA1: "hsla(0, 0%, 0%, 0)",
  blueA2: "hsla(221, 97.8%, 52.4%, 0.059)",
  blueA3: "hsla(215, 99.3%, 54.2%, 0.135)",
  blueA4: "hsla(215, 99.3%, 53.8%, 0.198)",
  blueA5: "hsla(213, 99.4%, 52.8%, 0.252)",
  blueA6: "hsla(212, 99.9%, 51.7%, 0.323)",
  blueA7: "hsla(211, 100%, 50.7%, 0.435)",
  blueA8: "hsla(211, 99.8%, 50.9%, 0.597)",
  blueA9: "hsla(205, 100%, 50.0%, 0.980)",
  blueA10: "hsla(208, 100%, 60.7%, 0.980)",
  blueA11: "hsla(209, 100%, 66.3%, 0.980)",
  blueA12: "hsla(196, 100%, 96.8%, 0.980)"
};
var bronzeA$1 = {
  bronzeA1: "hsla(0, 0%, 0%, 0)",
  bronzeA2: "hsla(20, 88.2%, 74.2%, 0.027)",
  bronzeA3: "hsla(10, 99.4%, 83.0%, 0.074)",
  bronzeA4: "hsla(18, 96.0%, 81.1%, 0.114)",
  bronzeA5: "hsla(18, 99.4%, 81.7%, 0.148)",
  bronzeA6: "hsla(15, 98.1%, 82.4%, 0.192)",
  bronzeA7: "hsla(16, 99.2%, 82.9%, 0.270)",
  bronzeA8: "hsla(18, 99.5%, 82.6%, 0.396)",
  bronzeA9: "hsla(18, 99.3%, 85.0%, 0.592)",
  bronzeA10: "hsla(18, 99.6%, 85.2%, 0.657)",
  bronzeA11: "hsla(17, 99.9%, 86.1%, 0.774)",
  bronzeA12: "hsla(20, 99.8%, 96.4%, 0.974)"
};
var brownA$1 = {
  brownA1: "hsla(0, 0%, 0%, 0)",
  brownA2: "hsla(22, 99.6%, 53.6%, 0.035)",
  brownA3: "hsla(18, 97.8%, 69.0%, 0.088)",
  brownA4: "hsla(21, 98.2%, 71.0%, 0.123)",
  brownA5: "hsla(25, 98.4%, 72.1%, 0.158)",
  brownA6: "hsla(25, 98.7%, 73.5%, 0.206)",
  brownA7: "hsla(25, 99.0%, 74.6%, 0.289)",
  brownA8: "hsla(28, 99.2%, 75.3%, 0.407)",
  brownA9: "hsla(28, 100%, 74.8%, 0.642)",
  brownA10: "hsla(28, 99.9%, 74.9%, 0.712)",
  brownA11: "hsla(28, 99.9%, 74.9%, 0.843)",
  brownA12: "hsla(32, 98.2%, 95.7%, 0.979)"
};
var crimsonA$1 = {
  crimsonA1: "hsla(0, 0%, 0%, 0)",
  crimsonA2: "hsla(336, 96.8%, 53.2%, 0.045)",
  crimsonA3: "hsla(335, 98.7%, 59.3%, 0.138)",
  crimsonA4: "hsla(336, 99.1%, 59.9%, 0.191)",
  crimsonA5: "hsla(335, 99.4%, 59.4%, 0.244)",
  crimsonA6: "hsla(335, 99.4%, 59.4%, 0.315)",
  crimsonA7: "hsla(336, 99.5%, 57.8%, 0.439)",
  crimsonA8: "hsla(336, 99.9%, 55.4%, 0.642)",
  crimsonA9: "hsla(336, 99.9%, 62.8%, 0.903)",
  crimsonA10: "hsla(339, 99.9%, 66.3%, 0.934)",
  crimsonA11: "hsla(341, 99.9%, 69.5%, 0.965)",
  crimsonA12: "hsla(327, 100%, 97.1%, 0.980)"
};
var cyanA$1 = {
  cyanA1: "hsla(0, 0%, 0%, 0)",
  cyanA2: "hsla(196, 100%, 50.0%, 0.031)",
  cyanA3: "hsla(192, 98.0%, 50.9%, 0.085)",
  cyanA4: "hsla(194, 99.6%, 51.3%, 0.133)",
  cyanA5: "hsla(192, 99.5%, 51.3%, 0.173)",
  cyanA6: "hsla(193, 99.7%, 50.4%, 0.226)",
  cyanA7: "hsla(192, 100%, 50.0%, 0.310)",
  cyanA8: "hsla(193, 100%, 50.0%, 0.425)",
  cyanA9: "hsla(190, 99.8%, 50.8%, 0.731)",
  cyanA10: "hsla(188, 100%, 50.0%, 0.775)",
  cyanA11: "hsla(186, 100%, 49.9%, 0.824)",
  cyanA12: "hsla(185, 99.8%, 95.1%, 0.978)"
};
var goldA$1 = {
  goldA1: "hsla(0, 0%, 0%, 0)",
  goldA2: "hsla(40, 93.7%, 70.6%, 0.022)",
  goldA3: "hsla(40, 97.5%, 80.6%, 0.065)",
  goldA4: "hsla(40, 95.9%, 80.8%, 0.100)",
  goldA5: "hsla(38, 97.3%, 82.1%, 0.130)",
  goldA6: "hsla(39, 97.2%, 82.5%, 0.169)",
  goldA7: "hsla(37, 99.3%, 82.4%, 0.246)",
  goldA8: "hsla(35, 98.7%, 82.2%, 0.363)",
  goldA9: "hsla(36, 99.7%, 82.8%, 0.552)",
  goldA10: "hsla(35, 99.2%, 83.7%, 0.613)",
  goldA11: "hsla(35, 99.3%, 85.3%, 0.725)",
  goldA12: "hsla(49, 98.6%, 96.7%, 0.966)"
};
var grassA$1 = {
  grassA1: "hsla(0, 0%, 0%, 0)",
  grassA2: "hsla(107, 97.2%, 61.9%, 0.022)",
  grassA3: "hsla(128, 96.5%, 69.8%, 0.066)",
  grassA4: "hsla(130, 100%, 70.2%, 0.100)",
  grassA5: "hsla(130, 98.2%, 69.1%, 0.140)",
  grassA6: "hsla(132, 99.9%, 69.3%, 0.187)",
  grassA7: "hsla(132, 99.9%, 69.8%, 0.261)",
  grassA8: "hsla(130, 99.6%, 70.5%, 0.370)",
  grassA9: "hsla(130, 99.7%, 70.6%, 0.618)",
  grassA10: "hsla(131, 100%, 73.5%, 0.674)",
  grassA11: "hsla(130, 99.7%, 75.6%, 0.731)",
  grassA12: "hsla(137, 100%, 95.8%, 0.980)"
};
var grayA$1 = {
  grayA1: "hsla(0, 0%, 100%, 0)",
  grayA2: "hsla(0, 0%, 100%, 0.026)",
  grayA3: "hsla(0, 0%, 100%, 0.056)",
  grayA4: "hsla(0, 0%, 100%, 0.077)",
  grayA5: "hsla(0, 0%, 100%, 0.103)",
  grayA6: "hsla(0, 0%, 100%, 0.129)",
  grayA7: "hsla(0, 0%, 100%, 0.172)",
  grayA8: "hsla(0, 0%, 100%, 0.249)",
  grayA9: "hsla(0, 0%, 100%, 0.386)",
  grayA10: "hsla(0, 0%, 100%, 0.446)",
  grayA11: "hsla(0, 0%, 100%, 0.592)",
  grayA12: "hsla(0, 0%, 100%, 0.923)"
};
var greenA$1 = {
  greenA1: "hsla(0, 0%, 0%, 0)",
  greenA2: "hsla(169, 100%, 48.5%, 0.027)",
  greenA3: "hsla(162, 98.7%, 57.9%, 0.070)",
  greenA4: "hsla(158, 98.6%, 59.7%, 0.105)",
  greenA5: "hsla(158, 98.6%, 60.7%, 0.140)",
  greenA6: "hsla(156, 99.9%, 62.0%, 0.187)",
  greenA7: "hsla(154, 99.5%, 63.1%, 0.257)",
  greenA8: "hsla(152, 99.7%, 64.2%, 0.370)",
  greenA9: "hsla(151, 99.7%, 63.8%, 0.605)",
  greenA10: "hsla(152, 99.9%, 66.5%, 0.661)",
  greenA11: "hsla(151, 99.7%, 69.2%, 0.740)",
  greenA12: "hsla(137, 100%, 95.8%, 0.980)"
};
var indigoA$1 = {
  indigoA1: "hsla(0, 0%, 0%, 0)",
  indigoA2: "hsla(234, 97.4%, 59.9%, 0.059)",
  indigoA3: "hsla(228, 99.2%, 61.7%, 0.144)",
  indigoA4: "hsla(227, 99.7%, 62.0%, 0.211)",
  indigoA5: "hsla(227, 99.2%, 62.3%, 0.270)",
  indigoA6: "hsla(226, 99.9%, 62.1%, 0.350)",
  indigoA7: "hsla(226, 99.9%, 62.0%, 0.471)",
  indigoA8: "hsla(226, 99.9%, 62.1%, 0.655)",
  indigoA9: "hsla(226, 99.9%, 63.6%, 0.848)",
  indigoA10: "hsla(227, 99.8%, 67.7%, 0.893)",
  indigoA11: "hsla(227, 100%, 76.3%, 0.980)",
  indigoA12: "hsla(226, 100%, 97.5%, 0.980)"
};
var limeA$1 = {
  limeA1: "hsla(0, 0%, 0%, 0)",
  limeA2: "hsla(75, 96.4%, 59.6%, 0.022)",
  limeA3: "hsla(88, 98.0%, 70.4%, 0.061)",
  limeA4: "hsla(81, 97.8%, 67.4%, 0.096)",
  limeA5: "hsla(82, 98.4%, 65.6%, 0.135)",
  limeA6: "hsla(79, 99.7%, 64.3%, 0.182)",
  limeA7: "hsla(77, 99.1%, 62.1%, 0.252)",
  limeA8: "hsla(75, 100%, 60.0%, 0.342)",
  limeA9: "hsla(81, 99.8%, 59.7%, 0.819)",
  limeA10: "hsla(75, 99.8%, 63.7%, 0.936)",
  limeA11: "hsla(81, 99.9%, 58.7%, 0.719)",
  limeA12: "hsla(83, 100%, 94.2%, 0.980)"
};
var mintA$1 = {
  mintA1: "hsla(0, 0%, 0%, 0)",
  mintA2: "hsla(180, 100%, 49.2%, 0.031)",
  mintA3: "hsla(176, 100%, 49.7%, 0.070)",
  mintA4: "hsla(173, 100%, 49.7%, 0.105)",
  mintA5: "hsla(173, 100%, 49.8%, 0.144)",
  mintA6: "hsla(172, 100%, 49.8%, 0.192)",
  mintA7: "hsla(171, 100%, 49.9%, 0.266)",
  mintA8: "hsla(169, 100%, 49.9%, 0.366)",
  mintA9: "hsla(167, 99.8%, 75.0%, 0.870)",
  mintA10: "hsla(163, 99.9%, 80.7%, 0.948)",
  mintA11: "hsla(167, 99.9%, 58.7%, 0.796)",
  mintA12: "hsla(169, 100%, 96.2%, 0.980)"
};
var oliveA$1 = {
  oliveA1: "hsla(0, 0%, 0%, 0)",
  oliveA2: "hsla(91, 97.0%, 84.0%, 0.026)",
  oliveA3: "hsla(101, 87.4%, 87.7%, 0.057)",
  oliveA4: "hsla(92, 91.8%, 94.1%, 0.078)",
  oliveA5: "hsla(101, 92.6%, 93.5%, 0.104)",
  oliveA6: "hsla(102, 91.1%, 94.6%, 0.130)",
  oliveA7: "hsla(102, 92.5%, 95.9%, 0.173)",
  oliveA8: "hsla(107, 100%, 96.5%, 0.250)",
  oliveA9: "hsla(110, 98.3%, 94.1%, 0.397)",
  oliveA10: "hsla(109, 99.6%, 95.3%, 0.457)",
  oliveA11: "hsla(113, 95.3%, 97.2%, 0.600)",
  oliveA12: "hsla(120, 93.5%, 99.6%, 0.927)"
};
var orangeA$1 = {
  orangeA1: "hsla(0, 0%, 0%, 0)",
  orangeA2: "hsla(13, 100%, 49.7%, 0.054)",
  orangeA3: "hsla(20, 100%, 49.7%, 0.117)",
  orangeA4: "hsla(23, 100%, 49.8%, 0.166)",
  orangeA5: "hsla(23, 99.4%, 50.1%, 0.215)",
  orangeA6: "hsla(23, 99.8%, 51.1%, 0.286)",
  orangeA7: "hsla(23, 99.7%, 50.6%, 0.389)",
  orangeA8: "hsla(24, 100%, 49.9%, 0.523)",
  orangeA9: "hsla(24, 99.9%, 51.6%, 0.965)",
  orangeA10: "hsla(25, 100%, 58.6%, 0.980)",
  orangeA11: "hsla(24, 100%, 62.4%, 0.980)",
  orangeA12: "hsla(26, 100%, 94.2%, 0.980)"
};
var pinkA$1 = {
  pinkA1: "hsla(0, 0%, 0%, 0)",
  pinkA2: "hsla(320, 98.1%, 64.1%, 0.036)",
  pinkA3: "hsla(320, 99.1%, 63.1%, 0.121)",
  pinkA4: "hsla(320, 99.5%, 62.7%, 0.170)",
  pinkA5: "hsla(319, 99.7%, 61.5%, 0.219)",
  pinkA6: "hsla(322, 99.4%, 60.8%, 0.291)",
  pinkA7: "hsla(321, 99.6%, 58.7%, 0.407)",
  pinkA8: "hsla(322, 99.7%, 55.4%, 0.608)",
  pinkA9: "hsla(322, 100%, 64.6%, 0.817)",
  pinkA10: "hsla(323, 100%, 66.3%, 0.875)",
  pinkA11: "hsla(325, 99.9%, 68.6%, 0.960)",
  pinkA12: "hsla(314, 100%, 96.9%, 0.980)"
};
var plumA$1 = {
  plumA1: "hsla(0, 0%, 0%, 0)",
  plumA2: "hsla(300, 96.4%, 58.4%, 0.036)",
  plumA3: "hsla(300, 99.4%, 67.1%, 0.102)",
  plumA4: "hsla(295, 99.8%, 66.3%, 0.155)",
  plumA5: "hsla(295, 99.4%, 67.1%, 0.204)",
  plumA6: "hsla(294, 99.0%, 67.8%, 0.262)",
  plumA7: "hsla(294, 99.9%, 67.7%, 0.363)",
  plumA8: "hsla(292, 99.8%, 67.5%, 0.527)",
  plumA9: "hsla(292, 99.9%, 69.2%, 0.695)",
  plumA10: "hsla(295, 99.9%, 70.8%, 0.748)",
  plumA11: "hsla(300, 99.8%, 72.9%, 0.828)",
  plumA12: "hsla(300, 100%, 97.1%, 0.980)"
};
var purpleA$1 = {
  purpleA1: "hsla(0, 0%, 0%, 0)",
  purpleA2: "hsla(280, 96.5%, 57.5%, 0.045)",
  purpleA3: "hsla(279, 98.7%, 62.8%, 0.129)",
  purpleA4: "hsla(279, 99.1%, 64.0%, 0.191)",
  purpleA5: "hsla(278, 99.8%, 64.2%, 0.248)",
  purpleA6: "hsla(276, 99.6%, 64.6%, 0.328)",
  purpleA7: "hsla(274, 99.9%, 64.6%, 0.456)",
  purpleA8: "hsla(272, 99.7%, 64.6%, 0.660)",
  purpleA9: "hsla(272, 99.9%, 69.1%, 0.748)",
  purpleA10: "hsla(273, 100%, 71.3%, 0.801)",
  purpleA11: "hsla(275, 99.9%, 75.3%, 0.934)",
  purpleA12: "hsla(286, 100%, 97.1%, 0.980)"
};
var mauveA$1 = {
  mauveA1: "hsla(0, 0%, 0%, 0)",
  mauveA2: "hsla(240, 76.7%, 91.2%, 0.031)",
  mauveA3: "hsla(240, 86.0%, 95.8%, 0.061)",
  mauveA4: "hsla(240, 91.8%, 94.7%, 0.087)",
  mauveA5: "hsla(240, 91.5%, 95.8%, 0.113)",
  mauveA6: "hsla(240, 92.0%, 93.8%, 0.148)",
  mauveA7: "hsla(240, 94.8%, 95.3%, 0.191)",
  mauveA8: "hsla(249, 98.1%, 95.2%, 0.273)",
  mauveA9: "hsla(248, 97.6%, 96.2%, 0.416)",
  mauveA10: "hsla(248, 95.5%, 96.6%, 0.477)",
  mauveA11: "hsla(250, 98.0%, 98.0%, 0.615)",
  mauveA12: "hsla(240, 93.9%, 99.6%, 0.931)"
};
var redA$1 = {
  redA1: "hsla(0, 0%, 0%, 0)",
  redA2: "hsla(5, 98.5%, 53.8%, 0.045)",
  redA3: "hsla(359, 99.1%, 61.1%, 0.130)",
  redA4: "hsla(358, 98.8%, 61.0%, 0.184)",
  redA5: "hsla(357, 99.6%, 60.3%, 0.237)",
  redA6: "hsla(358, 99.6%, 60.3%, 0.322)",
  redA7: "hsla(357, 100%, 59.5%, 0.442)",
  redA8: "hsla(358, 99.8%, 59.1%, 0.621)",
  redA9: "hsla(358, 100%, 65.5%, 0.884)",
  redA10: "hsla(358, 100%, 67.5%, 0.942)",
  redA11: "hsla(358, 100%, 69.7%, 0.980)",
  redA12: "hsla(352, 100%, 97.1%, 0.980)"
};
var sageA$1 = {
  sageA1: "hsla(0, 0%, 0%, 0)",
  sageA2: "hsla(123, 94.4%, 91.4%, 0.026)",
  sageA3: "hsla(123, 82.9%, 91.0%, 0.057)",
  sageA4: "hsla(124, 97.9%, 94.5%, 0.082)",
  sageA5: "hsla(125, 90.0%, 95.2%, 0.104)",
  sageA6: "hsla(142, 95.1%, 94.8%, 0.134)",
  sageA7: "hsla(143, 92.8%, 95.7%, 0.173)",
  sageA8: "hsla(146, 94.7%, 95.3%, 0.255)",
  sageA9: "hsla(151, 98.2%, 94.4%, 0.397)",
  sageA10: "hsla(148, 99.5%, 95.5%, 0.457)",
  sageA11: "hsla(152, 95.1%, 97.3%, 0.600)",
  sageA12: "hsla(149, 93.3%, 99.6%, 0.927)"
};
var sandA$1 = {
  sandA1: "hsla(0, 0%, 0%, 0)",
  sandA2: "hsla(60, 89.8%, 91.4%, 0.026)",
  sandA3: "hsla(60, 95.5%, 92.5%, 0.056)",
  sandA4: "hsla(60, 75.6%, 96.4%, 0.078)",
  sandA5: "hsla(60, 81.9%, 95.2%, 0.104)",
  sandA6: "hsla(41, 87.6%, 94.8%, 0.134)",
  sandA7: "hsla(60, 95.4%, 96.2%, 0.172)",
  sandA8: "hsla(49, 93.5%, 95.7%, 0.254)",
  sandA9: "hsla(52, 97.3%, 96.2%, 0.391)",
  sandA10: "hsla(52, 97.8%, 96.7%, 0.451)",
  sandA11: "hsla(51, 97.0%, 97.8%, 0.597)",
  sandA12: "hsla(60, 88.7%, 99.8%, 0.923)"
};
var skyA$1 = {
  skyA1: "hsla(0, 0%, 0%, 0)",
  skyA2: "hsla(208, 100%, 49.8%, 0.045)",
  skyA3: "hsla(201, 100%, 49.8%, 0.099)",
  skyA4: "hsla(201, 100%, 50.0%, 0.148)",
  skyA5: "hsla(200, 100%, 49.8%, 0.198)",
  skyA6: "hsla(199, 100%, 49.9%, 0.256)",
  skyA7: "hsla(199, 100%, 49.9%, 0.337)",
  skyA8: "hsla(199, 100%, 50.0%, 0.453)",
  skyA9: "hsla(192, 100%, 70.8%, 0.980)",
  skyA10: "hsla(190, 100%, 77.6%, 0.980)",
  skyA11: "hsla(192, 99.9%, 59.6%, 0.924)",
  skyA12: "hsla(189, 100%, 96.8%, 0.980)"
};
var slateA$1 = {
  slateA1: "hsla(0, 0%, 0%, 0)",
  slateA2: "hsla(181, 98.9%, 91.8%, 0.026)",
  slateA3: "hsla(182, 86.7%, 91.4%, 0.057)",
  slateA4: "hsla(209, 86.7%, 93.9%, 0.083)",
  slateA5: "hsla(200, 90.3%, 93.4%, 0.109)",
  slateA6: "hsla(209, 95.3%, 93.5%, 0.139)",
  slateA7: "hsla(204, 98.5%, 93.9%, 0.182)",
  slateA8: "hsla(209, 94.0%, 94.7%, 0.265)",
  slateA9: "hsla(207, 97.3%, 94.0%, 0.412)",
  slateA10: "hsla(209, 99.4%, 95.2%, 0.472)",
  slateA11: "hsla(208, 98.7%, 96.8%, 0.615)",
  slateA12: "hsla(211, 86.7%, 99.6%, 0.927)"
};
var tealA$1 = {
  tealA1: "hsla(0, 0%, 0%, 0)",
  tealA2: "hsla(171, 100%, 49.2%, 0.031)",
  tealA3: "hsla(172, 100%, 49.7%, 0.070)",
  tealA4: "hsla(175, 100%, 49.7%, 0.105)",
  tealA5: "hsla(174, 98.9%, 50.1%, 0.140)",
  tealA6: "hsla(174, 100%, 51.8%, 0.187)",
  tealA7: "hsla(173, 99.6%, 53.2%, 0.257)",
  tealA8: "hsla(174, 99.6%, 53.3%, 0.366)",
  tealA9: "hsla(173, 99.9%, 54.6%, 0.609)",
  tealA10: "hsla(174, 99.9%, 53.8%, 0.670)",
  tealA11: "hsla(174, 100%, 52.0%, 0.748)",
  tealA12: "hsla(166, 98.6%, 95.0%, 0.979)"
};
var tomatoA$1 = {
  tomatoA1: "hsla(0, 0%, 0%, 0)",
  tomatoA2: "hsla(5, 100%, 49.6%, 0.058)",
  tomatoA3: "hsla(6, 99.6%, 54.9%, 0.133)",
  tomatoA4: "hsla(6, 99.2%, 55.4%, 0.191)",
  tomatoA5: "hsla(6, 99.5%, 55.8%, 0.244)",
  tomatoA6: "hsla(7, 99.7%, 55.9%, 0.319)",
  tomatoA7: "hsla(8, 99.8%, 54.8%, 0.434)",
  tomatoA8: "hsla(10, 99.8%, 53.5%, 0.598)",
  tomatoA9: "hsla(10, 100%, 59.7%, 0.885)",
  tomatoA10: "hsla(10, 100%, 63.6%, 0.916)",
  tomatoA11: "hsla(10, 99.7%, 66.4%, 0.939)",
  tomatoA12: "hsla(12, 100%, 97.1%, 0.980)"
};
var violetA$1 = {
  violetA1: "hsla(0, 0%, 0%, 0)",
  violetA2: "hsla(258, 98.2%, 61.0%, 0.054)",
  violetA3: "hsla(252, 98.8%, 65.8%, 0.148)",
  violetA4: "hsla(253, 99.7%, 65.7%, 0.219)",
  violetA5: "hsla(252, 99.7%, 66.4%, 0.286)",
  violetA6: "hsla(251, 99.7%, 66.2%, 0.371)",
  violetA7: "hsla(250, 99.7%, 66.3%, 0.514)",
  violetA8: "hsla(250, 99.7%, 66.1%, 0.733)",
  violetA9: "hsla(252, 99.9%, 70.3%, 0.786)",
  violetA10: "hsla(251, 99.9%, 72.9%, 0.844)",
  violetA11: "hsla(250, 100%, 77.9%, 0.980)",
  violetA12: "hsla(254, 100%, 97.5%, 0.980)"
};
var yellowA$1 = {
  yellowA1: "hsla(0, 0%, 0%, 0)",
  yellowA2: "hsla(49, 100%, 49.1%, 0.027)",
  yellowA3: "hsla(45, 100%, 49.7%, 0.071)",
  yellowA4: "hsla(46, 100%, 49.7%, 0.111)",
  yellowA5: "hsla(47, 100%, 49.9%, 0.150)",
  yellowA6: "hsla(51, 100%, 49.8%, 0.199)",
  yellowA7: "hsla(51, 99.8%, 53.6%, 0.269)",
  yellowA8: "hsla(51, 100%, 49.9%, 0.371)",
  yellowA9: "hsla(53, 100%, 52.0%, 0.956)",
  yellowA10: "hsla(56, 100%, 68.4%, 0.980)",
  yellowA11: "hsla(48, 100%, 50.0%, 0.934)",
  yellowA12: "hsla(60, 100%, 91.8%, 0.980)"
};
var amber = {
  amber1: "hsl(39, 70.0%, 99.0%)",
  amber2: "hsl(40, 100%, 96.5%)",
  amber3: "hsl(44, 100%, 91.7%)",
  amber4: "hsl(43, 100%, 86.8%)",
  amber5: "hsl(42, 100%, 81.8%)",
  amber6: "hsl(38, 99.7%, 76.3%)",
  amber7: "hsl(36, 86.1%, 67.1%)",
  amber8: "hsl(35, 85.2%, 55.1%)",
  amber9: "hsl(39, 100%, 57.0%)",
  amber10: "hsl(35, 100%, 55.5%)",
  amber11: "hsl(30, 100%, 34.0%)",
  amber12: "hsl(20, 80.0%, 17.0%)"
};
var blue = {
  blue1: "hsl(206, 100%, 99.2%)",
  blue2: "hsl(210, 100%, 98.0%)",
  blue3: "hsl(209, 100%, 96.5%)",
  blue4: "hsl(210, 98.8%, 94.0%)",
  blue5: "hsl(209, 95.0%, 90.1%)",
  blue6: "hsl(209, 81.2%, 84.5%)",
  blue7: "hsl(208, 77.5%, 76.9%)",
  blue8: "hsl(206, 81.9%, 65.3%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(208, 100%, 47.3%)",
  blue11: "hsl(211, 100%, 43.2%)",
  blue12: "hsl(211, 100%, 15.0%)"
};
var bronze = {
  bronze1: "hsl(15, 30.0%, 99.1%)",
  bronze2: "hsl(17, 63.6%, 97.8%)",
  bronze3: "hsl(17, 42.1%, 95.2%)",
  bronze4: "hsl(17, 35.2%, 92.1%)",
  bronze5: "hsl(17, 31.5%, 88.2%)",
  bronze6: "hsl(17, 29.0%, 83.0%)",
  bronze7: "hsl(17, 26.9%, 75.6%)",
  bronze8: "hsl(17, 25.1%, 66.5%)",
  bronze9: "hsl(17, 20.0%, 54.0%)",
  bronze10: "hsl(17, 18.1%, 50.1%)",
  bronze11: "hsl(15, 20.0%, 43.1%)",
  bronze12: "hsl(12, 22.0%, 21.5%)"
};
var brown = {
  brown1: "hsl(30, 40.0%, 99.1%)",
  brown2: "hsl(30, 50.0%, 97.6%)",
  brown3: "hsl(30, 52.5%, 94.6%)",
  brown4: "hsl(30, 53.0%, 91.2%)",
  brown5: "hsl(29, 52.9%, 86.8%)",
  brown6: "hsl(29, 52.5%, 80.9%)",
  brown7: "hsl(29, 51.5%, 72.8%)",
  brown8: "hsl(28, 50.0%, 63.1%)",
  brown9: "hsl(28, 34.0%, 51.0%)",
  brown10: "hsl(27, 31.8%, 47.6%)",
  brown11: "hsl(25, 30.0%, 41.0%)",
  brown12: "hsl(20, 30.0%, 19.0%)"
};
var crimson = {
  crimson1: "hsl(332, 100%, 99.4%)",
  crimson2: "hsl(330, 100%, 98.4%)",
  crimson3: "hsl(331, 85.6%, 96.6%)",
  crimson4: "hsl(331, 78.1%, 94.2%)",
  crimson5: "hsl(332, 72.1%, 91.1%)",
  crimson6: "hsl(333, 67.0%, 86.7%)",
  crimson7: "hsl(335, 63.5%, 80.4%)",
  crimson8: "hsl(336, 62.3%, 72.9%)",
  crimson9: "hsl(336, 80.0%, 57.8%)",
  crimson10: "hsl(336, 73.7%, 53.5%)",
  crimson11: "hsl(336, 75.0%, 47.2%)",
  crimson12: "hsl(340, 65.0%, 14.5%)"
};
var cyan = {
  cyan1: "hsl(185, 60.0%, 98.7%)",
  cyan2: "hsl(185, 73.3%, 97.1%)",
  cyan3: "hsl(186, 70.2%, 94.4%)",
  cyan4: "hsl(186, 63.8%, 90.6%)",
  cyan5: "hsl(187, 58.3%, 85.4%)",
  cyan6: "hsl(188, 54.6%, 78.4%)",
  cyan7: "hsl(189, 53.7%, 68.7%)",
  cyan8: "hsl(189, 60.3%, 52.5%)",
  cyan9: "hsl(190, 95.0%, 39.0%)",
  cyan10: "hsl(191, 91.2%, 36.8%)",
  cyan11: "hsl(192, 85.0%, 31.0%)",
  cyan12: "hsl(192, 88.0%, 12.5%)"
};
var gold = {
  gold1: "hsl(50, 20.0%, 99.1%)",
  gold2: "hsl(47, 52.9%, 96.7%)",
  gold3: "hsl(46, 38.2%, 93.7%)",
  gold4: "hsl(44, 32.7%, 90.1%)",
  gold5: "hsl(43, 29.9%, 85.7%)",
  gold6: "hsl(41, 28.3%, 79.8%)",
  gold7: "hsl(39, 27.6%, 71.9%)",
  gold8: "hsl(36, 27.2%, 61.8%)",
  gold9: "hsl(36, 20.0%, 49.5%)",
  gold10: "hsl(36, 19.8%, 45.7%)",
  gold11: "hsl(36, 20.0%, 39.0%)",
  gold12: "hsl(36, 16.0%, 20.0%)"
};
var grass = {
  grass1: "hsl(116, 50.0%, 98.9%)",
  grass2: "hsl(120, 60.0%, 97.1%)",
  grass3: "hsl(120, 53.6%, 94.8%)",
  grass4: "hsl(121, 47.5%, 91.4%)",
  grass5: "hsl(122, 42.6%, 86.5%)",
  grass6: "hsl(124, 39.0%, 79.7%)",
  grass7: "hsl(126, 37.1%, 70.2%)",
  grass8: "hsl(131, 38.1%, 56.3%)",
  grass9: "hsl(131, 41.0%, 46.5%)",
  grass10: "hsl(132, 43.1%, 42.2%)",
  grass11: "hsl(133, 50.0%, 32.5%)",
  grass12: "hsl(130, 30.0%, 14.9%)"
};
var gray = {
  gray1: "hsl(0, 0%, 99.0%)",
  gray2: "hsl(0, 0%, 97.3%)",
  gray3: "hsl(0, 0%, 95.1%)",
  gray4: "hsl(0, 0%, 93.0%)",
  gray5: "hsl(0, 0%, 90.9%)",
  gray6: "hsl(0, 0%, 88.7%)",
  gray7: "hsl(0, 0%, 85.8%)",
  gray8: "hsl(0, 0%, 78.0%)",
  gray9: "hsl(0, 0%, 56.1%)",
  gray10: "hsl(0, 0%, 52.3%)",
  gray11: "hsl(0, 0%, 43.5%)",
  gray12: "hsl(0, 0%, 9.0%)"
};
var green = {
  green1: "hsl(136, 50.0%, 98.9%)",
  green2: "hsl(138, 62.5%, 96.9%)",
  green3: "hsl(139, 55.2%, 94.5%)",
  green4: "hsl(140, 48.7%, 91.0%)",
  green5: "hsl(141, 43.7%, 86.0%)",
  green6: "hsl(143, 40.3%, 79.0%)",
  green7: "hsl(146, 38.5%, 69.0%)",
  green8: "hsl(151, 40.2%, 54.1%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(152, 57.5%, 37.6%)",
  green11: "hsl(153, 67.0%, 28.5%)",
  green12: "hsl(155, 40.0%, 14.0%)"
};
var indigo = {
  indigo1: "hsl(225, 60.0%, 99.4%)",
  indigo2: "hsl(223, 100%, 98.6%)",
  indigo3: "hsl(223, 98.4%, 97.1%)",
  indigo4: "hsl(223, 92.9%, 95.0%)",
  indigo5: "hsl(224, 87.1%, 92.0%)",
  indigo6: "hsl(224, 81.9%, 87.8%)",
  indigo7: "hsl(225, 77.4%, 82.1%)",
  indigo8: "hsl(226, 75.4%, 74.5%)",
  indigo9: "hsl(226, 70.0%, 55.5%)",
  indigo10: "hsl(226, 58.6%, 51.3%)",
  indigo11: "hsl(226, 55.0%, 45.0%)",
  indigo12: "hsl(226, 62.0%, 17.0%)"
};
var lime = {
  lime1: "hsl(85, 50.0%, 98.7%)",
  lime2: "hsl(85, 66.7%, 96.5%)",
  lime3: "hsl(85, 76.0%, 92.3%)",
  lime4: "hsl(84, 75.3%, 87.5%)",
  lime5: "hsl(84, 71.5%, 81.9%)",
  lime6: "hsl(82, 65.0%, 74.6%)",
  lime7: "hsl(79, 53.2%, 61.8%)",
  lime8: "hsl(76, 61.7%, 45.1%)",
  lime9: "hsl(81, 67.0%, 50.0%)",
  lime10: "hsl(80, 68.3%, 46.9%)",
  lime11: "hsl(75, 80.0%, 26.0%)",
  lime12: "hsl(78, 70.0%, 11.5%)"
};
var mint = {
  mint1: "hsl(165, 80.0%, 98.8%)",
  mint2: "hsl(164, 88.2%, 96.7%)",
  mint3: "hsl(164, 76.6%, 93.3%)",
  mint4: "hsl(165, 68.8%, 89.5%)",
  mint5: "hsl(165, 60.6%, 84.5%)",
  mint6: "hsl(165, 53.5%, 76.9%)",
  mint7: "hsl(166, 50.7%, 66.1%)",
  mint8: "hsl(168, 52.8%, 51.0%)",
  mint9: "hsl(167, 65.0%, 66.0%)",
  mint10: "hsl(167, 59.3%, 63.1%)",
  mint11: "hsl(172, 72.0%, 28.5%)",
  mint12: "hsl(172, 70.0%, 12.0%)"
};
var olive = {
  olive1: "hsl(110, 20.0%, 99.0%)",
  olive2: "hsl(120, 16.7%, 97.6%)",
  olive3: "hsl(119, 10.1%, 95.2%)",
  olive4: "hsl(118, 8.1%, 93.0%)",
  olive5: "hsl(117, 7.1%, 90.8%)",
  olive6: "hsl(115, 6.4%, 88.5%)",
  olive7: "hsl(114, 5.9%, 85.4%)",
  olive8: "hsl(110, 5.2%, 77.3%)",
  olive9: "hsl(110, 3.5%, 55.5%)",
  olive10: "hsl(111, 2.8%, 51.7%)",
  olive11: "hsl(110, 3.0%, 43.0%)",
  olive12: "hsl(110, 25.0%, 9.5%)"
};
var orange = {
  orange1: "hsl(24, 70.0%, 99.0%)",
  orange2: "hsl(24, 83.3%, 97.6%)",
  orange3: "hsl(24, 100%, 95.3%)",
  orange4: "hsl(25, 100%, 92.2%)",
  orange5: "hsl(25, 100%, 88.2%)",
  orange6: "hsl(25, 100%, 82.8%)",
  orange7: "hsl(24, 100%, 75.3%)",
  orange8: "hsl(24, 94.5%, 64.3%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 46.5%)",
  orange11: "hsl(24, 100%, 37.0%)",
  orange12: "hsl(15, 60.0%, 17.0%)"
};
var pink = {
  pink1: "hsl(322, 100%, 99.4%)",
  pink2: "hsl(323, 100%, 98.4%)",
  pink3: "hsl(323, 86.3%, 96.5%)",
  pink4: "hsl(323, 78.7%, 94.2%)",
  pink5: "hsl(323, 72.2%, 91.1%)",
  pink6: "hsl(323, 66.3%, 86.6%)",
  pink7: "hsl(323, 62.0%, 80.1%)",
  pink8: "hsl(323, 60.3%, 72.4%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(322, 63.9%, 50.7%)",
  pink11: "hsl(322, 75.0%, 46.0%)",
  pink12: "hsl(320, 70.0%, 13.5%)"
};
var plum = {
  plum1: "hsl(292, 90.0%, 99.4%)",
  plum2: "hsl(300, 100%, 98.6%)",
  plum3: "hsl(299, 71.2%, 96.4%)",
  plum4: "hsl(299, 62.0%, 93.8%)",
  plum5: "hsl(298, 56.1%, 90.5%)",
  plum6: "hsl(296, 51.3%, 85.8%)",
  plum7: "hsl(295, 48.2%, 78.9%)",
  plum8: "hsl(292, 47.7%, 70.8%)",
  plum9: "hsl(292, 45.0%, 51.0%)",
  plum10: "hsl(292, 50.2%, 46.9%)",
  plum11: "hsl(292, 60.0%, 42.5%)",
  plum12: "hsl(291, 66.0%, 14.0%)"
};
var purple = {
  purple1: "hsl(280, 65.0%, 99.4%)",
  purple2: "hsl(276, 100%, 99.0%)",
  purple3: "hsl(276, 83.1%, 97.0%)",
  purple4: "hsl(275, 76.4%, 94.7%)",
  purple5: "hsl(275, 70.8%, 91.8%)",
  purple6: "hsl(274, 65.4%, 87.8%)",
  purple7: "hsl(273, 61.0%, 81.7%)",
  purple8: "hsl(272, 60.0%, 73.5%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(272, 46.8%, 50.3%)",
  purple11: "hsl(272, 50.0%, 45.8%)",
  purple12: "hsl(272, 66.0%, 16.0%)"
};
var mauve = {
  mauve1: "hsl(300, 20.0%, 99.0%)",
  mauve2: "hsl(300, 7.7%, 97.5%)",
  mauve3: "hsl(294, 5.5%, 95.3%)",
  mauve4: "hsl(289, 4.7%, 93.3%)",
  mauve5: "hsl(283, 4.4%, 91.3%)",
  mauve6: "hsl(278, 4.1%, 89.1%)",
  mauve7: "hsl(271, 3.9%, 86.3%)",
  mauve8: "hsl(255, 3.7%, 78.8%)",
  mauve9: "hsl(252, 4.0%, 57.3%)",
  mauve10: "hsl(253, 3.5%, 53.5%)",
  mauve11: "hsl(252, 4.0%, 44.8%)",
  mauve12: "hsl(260, 25.0%, 11.0%)"
};
var red = {
  red1: "hsl(359, 100%, 99.4%)",
  red2: "hsl(359, 100%, 98.6%)",
  red3: "hsl(360, 100%, 96.8%)",
  red4: "hsl(360, 97.9%, 94.8%)",
  red5: "hsl(360, 90.2%, 91.9%)",
  red6: "hsl(360, 81.7%, 87.8%)",
  red7: "hsl(359, 74.2%, 81.7%)",
  red8: "hsl(359, 69.5%, 74.3%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 69.4%, 55.2%)",
  red11: "hsl(358, 65.0%, 48.7%)",
  red12: "hsl(354, 50.0%, 14.6%)"
};
var sage = {
  sage1: "hsl(155, 30.0%, 98.8%)",
  sage2: "hsl(150, 16.7%, 97.6%)",
  sage3: "hsl(151, 10.6%, 95.2%)",
  sage4: "hsl(151, 8.8%, 93.0%)",
  sage5: "hsl(151, 7.8%, 90.8%)",
  sage6: "hsl(152, 7.2%, 88.4%)",
  sage7: "hsl(153, 6.7%, 85.3%)",
  sage8: "hsl(154, 6.1%, 77.5%)",
  sage9: "hsl(155, 3.5%, 55.5%)",
  sage10: "hsl(154, 2.8%, 51.7%)",
  sage11: "hsl(155, 3.0%, 43.0%)",
  sage12: "hsl(155, 24.0%, 9.0%)"
};
var sand = {
  sand1: "hsl(50, 20.0%, 99.0%)",
  sand2: "hsl(60, 7.7%, 97.5%)",
  sand3: "hsl(59, 6.5%, 95.1%)",
  sand4: "hsl(58, 6.1%, 92.9%)",
  sand5: "hsl(57, 6.0%, 90.7%)",
  sand6: "hsl(56, 5.9%, 88.4%)",
  sand7: "hsl(55, 5.9%, 85.2%)",
  sand8: "hsl(51, 6.0%, 77.1%)",
  sand9: "hsl(50, 2.0%, 55.7%)",
  sand10: "hsl(55, 1.7%, 51.9%)",
  sand11: "hsl(50, 2.0%, 43.1%)",
  sand12: "hsl(50, 6.0%, 10.0%)"
};
var sky = {
  sky1: "hsl(193, 100%, 98.8%)",
  sky2: "hsl(193, 100%, 97.3%)",
  sky3: "hsl(193, 99.0%, 94.7%)",
  sky4: "hsl(193, 91.4%, 91.4%)",
  sky5: "hsl(194, 82.0%, 86.6%)",
  sky6: "hsl(194, 74.1%, 79.5%)",
  sky7: "hsl(194, 72.3%, 69.6%)",
  sky8: "hsl(193, 77.9%, 53.9%)",
  sky9: "hsl(193, 98.0%, 70.0%)",
  sky10: "hsl(193, 87.0%, 66.5%)",
  sky11: "hsl(195, 100%, 31.5%)",
  sky12: "hsl(195, 100%, 13.0%)"
};
var slate = {
  slate1: "hsl(206, 30.0%, 98.8%)",
  slate2: "hsl(210, 16.7%, 97.6%)",
  slate3: "hsl(209, 13.3%, 95.3%)",
  slate4: "hsl(209, 12.2%, 93.2%)",
  slate5: "hsl(208, 11.7%, 91.1%)",
  slate6: "hsl(208, 11.3%, 88.9%)",
  slate7: "hsl(207, 11.1%, 85.9%)",
  slate8: "hsl(205, 10.7%, 78.0%)",
  slate9: "hsl(206, 6.0%, 56.1%)",
  slate10: "hsl(206, 5.8%, 52.3%)",
  slate11: "hsl(206, 6.0%, 43.5%)",
  slate12: "hsl(206, 24.0%, 9.0%)"
};
var teal = {
  teal1: "hsl(165, 60.0%, 98.8%)",
  teal2: "hsl(169, 64.7%, 96.7%)",
  teal3: "hsl(169, 59.8%, 94.0%)",
  teal4: "hsl(169, 53.1%, 90.2%)",
  teal5: "hsl(170, 47.1%, 85.0%)",
  teal6: "hsl(170, 42.6%, 77.9%)",
  teal7: "hsl(170, 39.9%, 68.1%)",
  teal8: "hsl(172, 42.1%, 52.5%)",
  teal9: "hsl(173, 80.0%, 36.0%)",
  teal10: "hsl(173, 83.4%, 32.5%)",
  teal11: "hsl(174, 90.0%, 25.2%)",
  teal12: "hsl(170, 50.0%, 12.5%)"
};
var tomato = {
  tomato1: "hsl(10, 100%, 99.4%)",
  tomato2: "hsl(8, 100%, 98.4%)",
  tomato3: "hsl(8, 100%, 96.6%)",
  tomato4: "hsl(8, 100%, 94.3%)",
  tomato5: "hsl(8, 92.8%, 91.0%)",
  tomato6: "hsl(9, 84.7%, 86.3%)",
  tomato7: "hsl(10, 77.3%, 79.5%)",
  tomato8: "hsl(10, 71.6%, 71.0%)",
  tomato9: "hsl(10, 78.0%, 54.0%)",
  tomato10: "hsl(10, 71.5%, 50.0%)",
  tomato11: "hsl(10, 82.0%, 43.5%)",
  tomato12: "hsl(10, 50.0%, 13.5%)"
};
var violet = {
  violet1: "hsl(255, 65.0%, 99.4%)",
  violet2: "hsl(252, 100%, 99.0%)",
  violet3: "hsl(252, 96.9%, 97.4%)",
  violet4: "hsl(252, 91.5%, 95.5%)",
  violet5: "hsl(252, 85.1%, 93.0%)",
  violet6: "hsl(252, 77.8%, 89.4%)",
  violet7: "hsl(252, 71.0%, 83.7%)",
  violet8: "hsl(252, 68.6%, 76.3%)",
  violet9: "hsl(252, 56.0%, 57.5%)",
  violet10: "hsl(251, 48.1%, 53.5%)",
  violet11: "hsl(250, 43.0%, 48.0%)",
  violet12: "hsl(254, 60.0%, 18.5%)"
};
var yellow = {
  yellow1: "hsl(60, 54.0%, 98.5%)",
  yellow2: "hsl(52, 100%, 95.5%)",
  yellow3: "hsl(55, 100%, 90.9%)",
  yellow4: "hsl(54, 100%, 86.6%)",
  yellow5: "hsl(52, 97.9%, 82.0%)",
  yellow6: "hsl(50, 89.4%, 76.1%)",
  yellow7: "hsl(47, 80.4%, 68.0%)",
  yellow8: "hsl(48, 100%, 46.1%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(50, 100%, 48.5%)",
  yellow11: "hsl(42, 100%, 29.0%)",
  yellow12: "hsl(40, 55.0%, 13.5%)"
};
var amberA = {
  amberA1: "hsla(40, 94.9%, 38.7%, 0.016)",
  amberA2: "hsla(40, 100%, 50.3%, 0.071)",
  amberA3: "hsla(44, 100%, 50.1%, 0.165)",
  amberA4: "hsla(43, 100%, 50.0%, 0.263)",
  amberA5: "hsla(42, 100%, 50.0%, 0.365)",
  amberA6: "hsla(38, 100%, 50.1%, 0.475)",
  amberA7: "hsla(36, 99.9%, 46.2%, 0.612)",
  amberA8: "hsla(35, 99.8%, 46.0%, 0.832)",
  amberA9: "hsla(39, 100%, 50.0%, 0.859)",
  amberA10: "hsla(35, 100%, 50.0%, 0.891)",
  amberA11: "hsla(29, 100%, 33.6%, 0.980)",
  amberA12: "hsla(20, 99.8%, 14.1%, 0.965)"
};
var blueA = {
  blueA1: "hsla(210, 100%, 51.0%, 0.016)",
  blueA2: "hsla(210, 100%, 51.0%, 0.040)",
  blueA3: "hsla(210, 100%, 50.3%, 0.071)",
  blueA4: "hsla(210, 100%, 50.1%, 0.118)",
  blueA5: "hsla(208, 99.1%, 47.1%, 0.189)",
  blueA6: "hsla(209, 99.5%, 45.3%, 0.283)",
  blueA7: "hsla(208, 99.9%, 43.8%, 0.412)",
  blueA8: "hsla(206, 99.8%, 45.1%, 0.632)",
  blueA9: "hsla(206, 100%, 50.0%, 0.980)",
  blueA10: "hsla(208, 100%, 47.2%, 0.980)",
  blueA11: "hsla(212, 100%, 43.0%, 0.980)",
  blueA12: "hsla(213, 100%, 14.4%, 0.980)"
};
var bronzeA = {
  bronzeA1: "hsla(0, 89.3%, 18.3%, 0.012)",
  bronzeA2: "hsla(17, 95.1%, 40.1%, 0.036)",
  bronzeA3: "hsla(18, 98.3%, 29.8%, 0.067)",
  bronzeA4: "hsla(17, 99.6%, 26.0%, 0.106)",
  bronzeA5: "hsla(19, 99.6%, 23.8%, 0.157)",
  bronzeA6: "hsla(17, 99.2%, 22.5%, 0.220)",
  bronzeA7: "hsla(18, 99.7%, 21.6%, 0.310)",
  bronzeA8: "hsla(17, 99.5%, 20.2%, 0.420)",
  bronzeA9: "hsla(18, 99.9%, 16.7%, 0.553)",
  bronzeA10: "hsla(17, 99.2%, 15.4%, 0.589)",
  bronzeA11: "hsla(15, 99.9%, 13.2%, 0.655)",
  bronzeA12: "hsla(12, 98.7%, 5.7%, 0.832)"
};
var brownA = {
  brownA1: "hsla(30, 94.3%, 34.6%, 0.012)",
  brownA2: "hsla(30, 94.3%, 34.6%, 0.036)",
  brownA3: "hsla(30, 97.7%, 33.9%, 0.083)",
  brownA4: "hsla(31, 98.5%, 34.2%, 0.134)",
  brownA5: "hsla(29, 100%, 34.3%, 0.200)",
  brownA6: "hsla(28, 99.2%, 34.6%, 0.291)",
  brownA7: "hsla(29, 99.8%, 33.8%, 0.412)",
  brownA8: "hsla(28, 100%, 33.3%, 0.553)",
  brownA9: "hsla(28, 99.9%, 25.5%, 0.655)",
  brownA10: "hsla(27, 99.7%, 22.4%, 0.675)",
  brownA11: "hsla(25, 99.8%, 17.3%, 0.714)",
  brownA12: "hsla(21, 99.4%, 6.6%, 0.867)"
};
var crimsonA = {
  crimsonA1: "hsla(340, 100%, 51.0%, 0.012)",
  crimsonA2: "hsla(330, 100%, 51.0%, 0.032)",
  crimsonA3: "hsla(332, 99.1%, 47.1%, 0.063)",
  crimsonA4: "hsla(331, 99.9%, 44.3%, 0.102)",
  crimsonA5: "hsla(333, 99.9%, 42.3%, 0.153)",
  crimsonA6: "hsla(333, 99.5%, 40.5%, 0.224)",
  crimsonA7: "hsla(335, 99.7%, 39.1%, 0.322)",
  crimsonA8: "hsla(336, 99.5%, 38.5%, 0.440)",
  crimsonA9: "hsla(336, 99.9%, 44.3%, 0.761)",
  crimsonA10: "hsla(336, 100%, 42.5%, 0.808)",
  crimsonA11: "hsla(336, 99.8%, 40.3%, 0.883)",
  crimsonA12: "hsla(340, 99.0%, 10.0%, 0.950)"
};
var cyanA = {
  cyanA1: "hsla(195, 95.2%, 41.2%, 0.020)",
  cyanA2: "hsla(185, 99.9%, 42.3%, 0.051)",
  cyanA3: "hsla(186, 97.8%, 42.2%, 0.095)",
  cyanA4: "hsla(186, 99.9%, 38.5%, 0.153)",
  cyanA5: "hsla(187, 99.3%, 36.6%, 0.232)",
  cyanA6: "hsla(188, 99.4%, 35.4%, 0.334)",
  cyanA7: "hsla(189, 99.6%, 35.0%, 0.483)",
  cyanA8: "hsla(189, 99.9%, 37.6%, 0.761)",
  cyanA9: "hsla(190, 100%, 37.8%, 0.980)",
  cyanA10: "hsla(191, 99.9%, 34.6%, 0.969)",
  cyanA11: "hsla(192, 100%, 27.6%, 0.953)",
  cyanA12: "hsla(192, 100%, 11.0%, 0.980)"
};
var goldA = {
  goldA1: "hsla(60, 89.3%, 18.3%, 0.012)",
  goldA2: "hsla(47, 99.9%, 34.6%, 0.051)",
  goldA3: "hsla(45, 97.0%, 27.9%, 0.087)",
  goldA4: "hsla(46, 98.0%, 25.4%, 0.134)",
  goldA5: "hsla(43, 98.4%, 22.6%, 0.185)",
  goldA6: "hsla(41, 99.7%, 22.0%, 0.259)",
  goldA7: "hsla(38, 99.8%, 21.5%, 0.357)",
  goldA8: "hsla(36, 99.3%, 21.5%, 0.487)",
  goldA9: "hsla(36, 99.9%, 16.2%, 0.604)",
  goldA10: "hsla(36, 99.2%, 14.6%, 0.636)",
  goldA11: "hsla(35, 99.1%, 11.2%, 0.687)",
  goldA12: "hsla(38, 98.0%, 3.8%, 0.832)"
};
var grassA = {
  grassA1: "hsla(120, 94.9%, 38.7%, 0.016)",
  grassA2: "hsla(120, 94.9%, 38.7%, 0.048)",
  grassA3: "hsla(120, 98.0%, 35.5%, 0.079)",
  grassA4: "hsla(120, 98.7%, 31.5%, 0.126)",
  grassA5: "hsla(122, 98.5%, 29.9%, 0.193)",
  grassA6: "hsla(125, 99.2%, 27.9%, 0.283)",
  grassA7: "hsla(125, 99.9%, 27.0%, 0.408)",
  grassA8: "hsla(131, 100%, 27.6%, 0.604)",
  grassA9: "hsla(131, 99.7%, 26.3%, 0.726)",
  grassA10: "hsla(132, 99.9%, 24.0%, 0.761)",
  grassA11: "hsla(133, 99.5%, 19.5%, 0.840)",
  grassA12: "hsla(128, 98.0%, 4.9%, 0.895)"
};
var grayA = {
  grayA1: "hsla(0, 0%, 0%, 0.012)",
  grayA2: "hsla(0, 0%, 0%, 0.027)",
  grayA3: "hsla(0, 0%, 0%, 0.047)",
  grayA4: "hsla(0, 0%, 0%, 0.071)",
  grayA5: "hsla(0, 0%, 0%, 0.090)",
  grayA6: "hsla(0, 0%, 0%, 0.114)",
  grayA7: "hsla(0, 0%, 0%, 0.141)",
  grayA8: "hsla(0, 0%, 0%, 0.220)",
  grayA9: "hsla(0, 0%, 0%, 0.439)",
  grayA10: "hsla(0, 0%, 0%, 0.478)",
  grayA11: "hsla(0, 0%, 0%, 0.565)",
  grayA12: "hsla(0, 0%, 0%, 0.910)"
};
var greenA = {
  greenA1: "hsla(140, 94.9%, 38.7%, 0.016)",
  greenA2: "hsla(138, 99.9%, 38.5%, 0.051)",
  greenA3: "hsla(139, 97.7%, 36.9%, 0.087)",
  greenA4: "hsla(139, 98.5%, 32.7%, 0.134)",
  greenA5: "hsla(141, 100%, 30.4%, 0.200)",
  greenA6: "hsla(142, 99.0%, 28.9%, 0.295)",
  greenA7: "hsla(146, 99.5%, 27.6%, 0.428)",
  greenA8: "hsla(151, 99.5%, 28.8%, 0.644)",
  greenA9: "hsla(151, 99.9%, 28.0%, 0.812)",
  greenA10: "hsla(152, 99.6%, 25.8%, 0.840)",
  greenA11: "hsla(153, 99.9%, 21.0%, 0.906)",
  greenA12: "hsla(155, 99.4%, 6.2%, 0.918)"
};
var indigoA = {
  indigoA1: "hsla(240, 92.6%, 26.5%, 0.008)",
  indigoA2: "hsla(223, 100%, 51.0%, 0.028)",
  indigoA3: "hsla(224, 100%, 50.1%, 0.059)",
  indigoA4: "hsla(223, 98.0%, 48.5%, 0.099)",
  indigoA5: "hsla(225, 98.6%, 46.4%, 0.150)",
  indigoA6: "hsla(224, 99.5%, 44.9%, 0.224)",
  indigoA7: "hsla(225, 99.7%, 43.9%, 0.318)",
  indigoA8: "hsla(226, 99.5%, 43.1%, 0.448)",
  indigoA9: "hsla(226, 100%, 41.2%, 0.757)",
  indigoA10: "hsla(226, 99.8%, 37.1%, 0.773)",
  indigoA11: "hsla(226, 99.6%, 31.1%, 0.797)",
  indigoA12: "hsla(226, 99.3%, 11.4%, 0.938)"
};
var limeA = {
  limeA1: "hsla(80, 93.8%, 31.4%, 0.020)",
  limeA2: "hsla(85, 99.3%, 40.2%, 0.059)",
  limeA3: "hsla(84, 98.7%, 43.2%, 0.138)",
  limeA4: "hsla(84, 99.6%, 43.0%, 0.220)",
  limeA5: "hsla(85, 99.8%, 41.8%, 0.310)",
  limeA6: "hsla(82, 99.8%, 39.3%, 0.420)",
  limeA7: "hsla(79, 99.7%, 34.6%, 0.585)",
  limeA8: "hsla(76, 99.8%, 33.7%, 0.828)",
  limeA9: "hsla(81, 99.8%, 40.2%, 0.836)",
  limeA10: "hsla(80, 100%, 37.6%, 0.851)",
  limeA11: "hsla(75, 99.5%, 22.0%, 0.950)",
  limeA12: "hsla(78, 99.6%, 8.4%, 0.965)"
};
var mintA = {
  mintA1: "hsla(168, 95.4%, 42.8%, 0.024)",
  mintA2: "hsla(164, 99.1%, 47.1%, 0.063)",
  mintA3: "hsla(164, 99.3%, 43.5%, 0.118)",
  mintA4: "hsla(164, 99.3%, 41.3%, 0.177)",
  mintA5: "hsla(165, 99.0%, 37.5%, 0.248)",
  mintA6: "hsla(165, 100%, 35.0%, 0.353)",
  mintA7: "hsla(166, 99.9%, 33.5%, 0.510)",
  mintA8: "hsla(168, 99.6%, 34.6%, 0.750)",
  mintA9: "hsla(167, 99.9%, 39.5%, 0.561)",
  mintA10: "hsla(167, 99.7%, 37.4%, 0.589)",
  mintA11: "hsla(172, 99.8%, 22.4%, 0.922)",
  mintA12: "hsla(172, 99.7%, 8.8%, 0.965)"
};
var oliveA = {
  oliveA1: "hsla(120, 89.3%, 18.3%, 0.012)",
  oliveA2: "hsla(120, 87.7%, 16.0%, 0.028)",
  oliveA3: "hsla(120, 99.5%, 7.7%, 0.051)",
  oliveA4: "hsla(120, 92.3%, 8.5%, 0.075)",
  oliveA5: "hsla(120, 86.0%, 6.9%, 0.099)",
  oliveA6: "hsla(120, 94.8%, 6.8%, 0.122)",
  oliveA7: "hsla(120, 99.3%, 5.2%, 0.153)",
  oliveA8: "hsla(110, 93.8%, 5.2%, 0.240)",
  oliveA9: "hsla(111, 98.7%, 3.0%, 0.459)",
  oliveA10: "hsla(111, 93.5%, 2.9%, 0.499)",
  oliveA11: "hsla(111, 95.2%, 2.5%, 0.585)",
  oliveA12: "hsla(110, 97.6%, 2.6%, 0.930)"
};
var orangeA = {
  orangeA1: "hsla(20, 94.9%, 38.7%, 0.016)",
  orangeA2: "hsla(24, 95.8%, 46.5%, 0.044)",
  orangeA3: "hsla(25, 100%, 50.5%, 0.095)",
  orangeA4: "hsla(26, 100%, 50.0%, 0.157)",
  orangeA5: "hsla(25, 100%, 50.1%, 0.236)",
  orangeA6: "hsla(25, 100%, 50.1%, 0.346)",
  orangeA7: "hsla(24, 100%, 50.1%, 0.495)",
  orangeA8: "hsla(24, 99.7%, 48.7%, 0.695)",
  orangeA9: "hsla(24, 99.9%, 48.4%, 0.969)",
  orangeA10: "hsla(23, 100%, 46.4%, 0.980)",
  orangeA11: "hsla(23, 100%, 36.8%, 0.980)",
  orangeA12: "hsla(15, 99.4%, 11.0%, 0.934)"
};
var pinkA = {
  pinkA1: "hsla(320, 100%, 51.0%, 0.012)",
  pinkA2: "hsla(323, 100%, 51.0%, 0.032)",
  pinkA3: "hsla(323, 98.9%, 47.3%, 0.067)",
  pinkA4: "hsla(323, 99.9%, 44.3%, 0.102)",
  pinkA5: "hsla(324, 99.9%, 42.3%, 0.153)",
  pinkA6: "hsla(323, 99.5%, 39.6%, 0.224)",
  pinkA7: "hsla(323, 99.7%, 38.5%, 0.322)",
  pinkA8: "hsla(323, 99.5%, 37.7%, 0.444)",
  pinkA9: "hsla(322, 99.7%, 39.3%, 0.750)",
  pinkA10: "hsla(322, 100%, 39.1%, 0.808)",
  pinkA11: "hsla(322, 99.8%, 39.0%, 0.887)",
  pinkA12: "hsla(321, 99.8%, 10.0%, 0.961)"
};
var plumA = {
  plumA1: "hsla(280, 100%, 51.0%, 0.012)",
  plumA2: "hsla(300, 100%, 51.0%, 0.028)",
  plumA3: "hsla(300, 99.0%, 40.9%, 0.063)",
  plumA4: "hsla(300, 99.9%, 38.5%, 0.102)",
  plumA5: "hsla(298, 98.2%, 35.9%, 0.150)",
  plumA6: "hsla(297, 99.6%, 33.7%, 0.216)",
  plumA7: "hsla(295, 99.7%, 32.6%, 0.314)",
  plumA8: "hsla(292, 99.6%, 32.4%, 0.432)",
  plumA9: "hsla(292, 99.9%, 31.0%, 0.710)",
  plumA10: "hsla(292, 99.9%, 30.8%, 0.765)",
  plumA11: "hsla(292, 99.8%, 30.7%, 0.832)",
  plumA12: "hsla(291, 99.9%, 9.7%, 0.953)"
};
var purpleA = {
  purpleA1: "hsla(300, 94.3%, 34.6%, 0.012)",
  purpleA2: "hsla(276, 100%, 51.0%, 0.020)",
  purpleA3: "hsla(277, 99.6%, 46.5%, 0.055)",
  purpleA4: "hsla(274, 97.9%, 44.3%, 0.095)",
  purpleA5: "hsla(276, 98.6%, 42.0%, 0.142)",
  purpleA6: "hsla(275, 100%, 39.2%, 0.200)",
  purpleA7: "hsla(273, 99.2%, 38.2%, 0.295)",
  purpleA8: "hsla(272, 99.7%, 37.6%, 0.424)",
  purpleA9: "hsla(272, 99.6%, 34.0%, 0.695)",
  purpleA10: "hsla(272, 99.7%, 32.0%, 0.730)",
  purpleA11: "hsla(272, 99.8%, 29.7%, 0.773)",
  purpleA12: "hsla(272, 99.2%, 11.3%, 0.946)"
};
var mauveA = {
  mauveA1: "hsla(300, 89.3%, 18.3%, 0.012)",
  mauveA2: "hsla(300, 78.1%, 9.0%, 0.028)",
  mauveA3: "hsla(300, 99.5%, 7.7%, 0.051)",
  mauveA4: "hsla(270, 90.5%, 6.1%, 0.071)",
  mauveA5: "hsla(270, 83.0%, 5.2%, 0.091)",
  mauveA6: "hsla(300, 93.5%, 3.7%, 0.114)",
  mauveA7: "hsla(270, 82.6%, 3.3%, 0.142)",
  mauveA8: "hsla(255, 95.2%, 3.7%, 0.220)",
  mauveA9: "hsla(255, 94.8%, 3.7%, 0.444)",
  mauveA10: "hsla(253, 96.5%, 3.8%, 0.483)",
  mauveA11: "hsla(247, 97.9%, 3.2%, 0.569)",
  mauveA12: "hsla(261, 98.7%, 3.0%, 0.918)"
};
var redA = {
  redA1: "hsla(0, 100%, 51.0%, 0.012)",
  redA2: "hsla(0, 100%, 51.0%, 0.032)",
  redA3: "hsla(0, 100%, 50.2%, 0.063)",
  redA4: "hsla(0, 100%, 50.0%, 0.102)",
  redA5: "hsla(0, 99.9%, 47.5%, 0.153)",
  redA6: "hsla(0, 99.5%, 44.9%, 0.224)",
  redA7: "hsla(359, 99.7%, 42.7%, 0.318)",
  redA8: "hsla(359, 99.6%, 41.1%, 0.436)",
  redA9: "hsla(358, 99.9%, 42.9%, 0.718)",
  redA10: "hsla(358, 99.9%, 41.0%, 0.761)",
  redA11: "hsla(358, 99.8%, 38.3%, 0.832)",
  redA12: "hsla(355, 99.3%, 7.9%, 0.926)"
};
var sageA = {
  sageA1: "hsla(150, 92.6%, 26.5%, 0.016)",
  sageA2: "hsla(150, 87.7%, 16.0%, 0.028)",
  sageA3: "hsla(160, 98.4%, 10.9%, 0.055)",
  sageA4: "hsla(140, 92.3%, 8.5%, 0.075)",
  sageA5: "hsla(160, 86.0%, 6.9%, 0.099)",
  sageA6: "hsla(156, 95.1%, 8.2%, 0.126)",
  sageA7: "hsla(156, 98.6%, 6.3%, 0.157)",
  sageA8: "hsla(154, 94.6%, 6.0%, 0.240)",
  sageA9: "hsla(154, 98.7%, 3.0%, 0.459)",
  sageA10: "hsla(154, 93.5%, 2.9%, 0.499)",
  sageA11: "hsla(154, 95.2%, 2.5%, 0.585)",
  sageA12: "hsla(158, 97.0%, 2.4%, 0.934)"
};
var sandA = {
  sandA1: "hsla(60, 89.3%, 18.3%, 0.012)",
  sandA2: "hsla(60, 78.1%, 9.0%, 0.028)",
  sandA3: "hsla(60, 99.0%, 3.9%, 0.051)",
  sandA4: "hsla(60, 88.9%, 5.9%, 0.075)",
  sandA5: "hsla(60, 86.0%, 6.9%, 0.099)",
  sandA6: "hsla(60, 93.2%, 5.2%, 0.122)",
  sandA7: "hsla(60, 98.3%, 5.1%, 0.157)",
  sandA8: "hsla(51, 94.1%, 6.0%, 0.244)",
  sandA9: "hsla(60, 99.8%, 1.7%, 0.451)",
  sandA10: "hsla(60, 90.7%, 1.8%, 0.491)",
  sandA11: "hsla(45, 93.7%, 1.5%, 0.577)",
  sandA12: "hsla(60, 98.0%, 0.7%, 0.906)"
};
var skyA = {
  skyA1: "hsla(190, 100%, 51.0%, 0.024)",
  skyA2: "hsla(193, 100%, 50.1%, 0.055)",
  skyA3: "hsla(193, 100%, 50.1%, 0.106)",
  skyA4: "hsla(194, 99.6%, 47.7%, 0.165)",
  skyA5: "hsla(194, 99.2%, 45.4%, 0.244)",
  skyA6: "hsla(194, 99.9%, 42.3%, 0.357)",
  skyA7: "hsla(194, 99.8%, 42.2%, 0.526)",
  skyA8: "hsla(193, 99.9%, 43.8%, 0.820)",
  skyA9: "hsla(193, 99.7%, 49.4%, 0.593)",
  skyA10: "hsla(193, 99.8%, 46.6%, 0.628)",
  skyA11: "hsla(196, 100%, 31.2%, 0.980)",
  skyA12: "hsla(196, 100%, 12.2%, 0.980)"
};
var slateA = {
  slateA1: "hsla(210, 92.6%, 26.5%, 0.016)",
  slateA2: "hsla(210, 87.7%, 16.0%, 0.028)",
  slateA3: "hsla(210, 98.8%, 14.4%, 0.055)",
  slateA4: "hsla(210, 94.1%, 11.1%, 0.075)",
  slateA5: "hsla(216, 91.1%, 10.9%, 0.099)",
  slateA6: "hsla(206, 96.4%, 11.3%, 0.126)",
  slateA7: "hsla(210, 99.1%, 10.1%, 0.157)",
  slateA8: "hsla(205, 96.5%, 10.0%, 0.244)",
  slateA9: "hsla(206, 98.8%, 5.9%, 0.467)",
  slateA10: "hsla(206, 99.6%, 5.4%, 0.506)",
  slateA11: "hsla(206, 97.0%, 4.8%, 0.593)",
  slateA12: "hsla(202, 97.0%, 2.4%, 0.934)"
};
var tealA = {
  tealA1: "hsla(165, 95.2%, 41.2%, 0.020)",
  tealA2: "hsla(169, 99.5%, 39.4%, 0.055)",
  tealA3: "hsla(167, 97.6%, 38.1%, 0.095)",
  tealA4: "hsla(168, 98.1%, 34.6%, 0.150)",
  tealA5: "hsla(170, 99.4%, 32.3%, 0.220)",
  tealA6: "hsla(170, 99.7%, 30.1%, 0.314)",
  tealA7: "hsla(170, 99.3%, 28.7%, 0.448)",
  tealA8: "hsla(172, 99.8%, 29.7%, 0.675)",
  tealA9: "hsla(173, 99.8%, 31.1%, 0.930)",
  tealA10: "hsla(173, 99.7%, 28.7%, 0.946)",
  tealA11: "hsla(174, 99.8%, 23.3%, 0.977)",
  tealA12: "hsla(171, 98.8%, 6.8%, 0.938)"
};
var tomatoA = {
  tomatoA1: "hsla(0, 100%, 51.0%, 0.012)",
  tomatoA2: "hsla(8, 100%, 51.0%, 0.032)",
  tomatoA3: "hsla(7, 100%, 50.2%, 0.067)",
  tomatoA4: "hsla(8, 100%, 50.1%, 0.114)",
  tomatoA5: "hsla(7, 99.5%, 47.9%, 0.173)",
  tomatoA6: "hsla(9, 99.9%, 46.2%, 0.255)",
  tomatoA7: "hsla(10, 99.8%, 43.6%, 0.365)",
  tomatoA8: "hsla(10, 99.5%, 41.8%, 0.499)",
  tomatoA9: "hsla(10, 99.9%, 43.8%, 0.820)",
  tomatoA10: "hsla(10, 100%, 41.8%, 0.859)",
  tomatoA11: "hsla(10, 99.9%, 38.8%, 0.922)",
  tomatoA12: "hsla(10, 99.0%, 7.4%, 0.934)"
};
var violetA = {
  violetA1: "hsla(270, 94.3%, 34.6%, 0.012)",
  violetA2: "hsla(252, 100%, 51.0%, 0.020)",
  violetA3: "hsla(254, 100%, 50.0%, 0.051)",
  violetA4: "hsla(251, 98.3%, 48.2%, 0.087)",
  violetA5: "hsla(252, 99.0%, 45.7%, 0.130)",
  violetA6: "hsla(251, 99.1%, 44.0%, 0.189)",
  violetA7: "hsla(252, 99.5%, 41.7%, 0.279)",
  violetA8: "hsla(252, 100%, 40.7%, 0.400)",
  violetA9: "hsla(252, 99.9%, 35.8%, 0.663)",
  violetA10: "hsla(251, 99.6%, 32.5%, 0.691)",
  violetA11: "hsla(250, 99.8%, 28.4%, 0.726)",
  violetA12: "hsla(254, 99.5%, 11.9%, 0.926)"
};
var yellowA = {
  yellowA1: "hsla(60, 94.3%, 34.6%, 0.024)",
  yellowA2: "hsla(52, 100%, 50.4%, 0.091)",
  yellowA3: "hsla(55, 100%, 50.2%, 0.181)",
  yellowA4: "hsla(54, 100%, 50.1%, 0.267)",
  yellowA5: "hsla(52, 99.9%, 49.5%, 0.357)",
  yellowA6: "hsla(50, 100%, 47.4%, 0.451)",
  yellowA7: "hsla(47, 99.8%, 44.6%, 0.577)",
  yellowA8: "hsla(48, 100%, 46.0%, 0.980)",
  yellowA9: "hsla(53, 100%, 48.0%, 0.961)",
  yellowA10: "hsla(50, 100%, 48.4%, 0.980)",
  yellowA11: "hsla(42, 100%, 28.6%, 0.980)",
  yellowA12: "hsla(41, 98.9%, 8.0%, 0.942)"
};
var blackA = {
  blackA1: "hsla(0, 0%, 0%, 0.012)",
  blackA2: "hsla(0, 0%, 0%, 0.027)",
  blackA3: "hsla(0, 0%, 0%, 0.047)",
  blackA4: "hsla(0, 0%, 0%, 0.071)",
  blackA5: "hsla(0, 0%, 0%, 0.090)",
  blackA6: "hsla(0, 0%, 0%, 0.114)",
  blackA7: "hsla(0, 0%, 0%, 0.141)",
  blackA8: "hsla(0, 0%, 0%, 0.220)",
  blackA9: "hsla(0, 0%, 0%, 0.439)",
  blackA10: "hsla(0, 0%, 0%, 0.478)",
  blackA11: "hsla(0, 0%, 0%, 0.565)",
  blackA12: "hsla(0, 0%, 0%, 0.910)"
};
var whiteA = {
  whiteA1: "hsla(0, 0%, 100%, 0)",
  whiteA2: "hsla(0, 0%, 100%, 0.013)",
  whiteA3: "hsla(0, 0%, 100%, 0.034)",
  whiteA4: "hsla(0, 0%, 100%, 0.056)",
  whiteA5: "hsla(0, 0%, 100%, 0.086)",
  whiteA6: "hsla(0, 0%, 100%, 0.124)",
  whiteA7: "hsla(0, 0%, 100%, 0.176)",
  whiteA8: "hsla(0, 0%, 100%, 0.249)",
  whiteA9: "hsla(0, 0%, 100%, 0.386)",
  whiteA10: "hsla(0, 0%, 100%, 0.446)",
  whiteA11: "hsla(0, 0%, 100%, 0.592)",
  whiteA12: "hsla(0, 0%, 100%, 0.923)"
};

// stitches.config.ts
var Radix = colors_exports;
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
} = createStitches({
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
  themeMap: __spreadValues({}, defaultThemeMap)
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

// components/Box/index.tsx
var Box = styled("div", {});
var Stack = styled(Box, {
  display: "flex",
  flexDirection: "column",
  gap: "$4"
});

// components/Spinner/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Spinner(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    __spreadProps(__spreadValues({
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: [
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
          children: /* @__PURE__ */ jsx(
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
  const colorFromRadix = __objRest(colors_exports, []);
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

// components/Button/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
var Button = React.forwardRef(
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
      css: css2,
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
    return /* @__PURE__ */ jsxs2(
      BaseButton,
      __spreadProps(__spreadValues({
        className: isDark ? stitchesDarkTheme : void 0,
        ref,
        size,
        align,
        css: _.merge(
          getButtonToneStyle(tone, intent),
          getButtonShadowStyle(tone, depth),
          css2
        )
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ jsx2(
            Box,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: leftIcon
            }
          ),
          isLoading && /* @__PURE__ */ jsx2(
            Box,
            {
              style: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                inset: 0
              },
              children: /* @__PURE__ */ jsx2(AutoSpinner, {})
            }
          ),
          /* @__PURE__ */ jsx2(
            Box,
            {
              className: "button-text",
              style: {
                opacity: isLoading ? 0 : 1
              },
              children
            }
          ),
          rightIcon && /* @__PURE__ */ jsx2(
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

// components/Text/index.tsx
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

// components/NomiStyle/index.tsx
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
import { motion } from "framer-motion";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Display(_a) {
  var _b = _a, { label, css: css2 } = _b, rest = __objRest(_b, ["label", "css"]);
  return /* @__PURE__ */ jsxs3(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      style: {
        marginTop: "2em",
        marginBottom: "2em"
      },
      children: [
        /* @__PURE__ */ jsx3(Text, { css: { mb: "$2" }, size: "overline", color: "slate10", children: label }),
        /* @__PURE__ */ jsx3(
          Box,
          __spreadValues({
            css: __spreadValues({
              borderWidth: 1,
              p: "$6",
              overflow: "hidden",
              borderColor: "$slate6",
              borderRadius: "$xl"
            }, css2)
          }, rest)
        )
      ]
    }
  );
}

// components/Checkbox/index.tsx
import React2 from "react";
import {
  Checkbox as CheckboxPrimitive,
  useCheckboxState
} from "reakit/Checkbox";
import { VisuallyHidden } from "react-aria";
import _3 from "lodash";

// components/LucideIcon/index.tsx
import _2 from "lodash";
import * as LucideIcons from "lucide-react";
import { jsx as jsx4 } from "react/jsx-runtime";
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
  const iconNameCamelCase = _2.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  const LucideIcon2 = LucideIcons[IconNameUpperCase] || LucideIcons["Activity"];
  return /* @__PURE__ */ jsx4(
    LucideIcon2,
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

// components/Checkbox/index.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function CheckboxWithLabelNoref(_a, ref) {
  var _b = _a, {
    defaultChecked,
    children,
    fontSize = "base",
    tone = "slate",
    css: css2
  } = _b, props = __objRest(_b, [
    "defaultChecked",
    "children",
    "fontSize",
    "tone",
    "css"
  ]);
  const checkbox = useCheckboxState({
    state: defaultChecked
  });
  return /* @__PURE__ */ jsxs4(
    CheckboxLabel,
    {
      "data-state": props.disabled ? "disabled" : void 0,
      css: { fontSize: `$${fontSize}`, color: "$baseText" },
      children: [
        /* @__PURE__ */ jsxs4(
          CheckboxRoot,
          {
            "data-state": checkbox.state ? "checked" : "unchecked",
            css: _3.merge(getCheckboxToneStyle(tone), css2),
            children: [
              /* @__PURE__ */ jsx5(VisuallyHidden, { children: /* @__PURE__ */ jsx5(
                CheckboxPrimitive,
                __spreadValues(__spreadValues({
                  ref
                }, checkbox), props)
              ) }),
              /* @__PURE__ */ jsx5(CheckboxIndicator, { checked: !!checkbox.state, children: /* @__PURE__ */ jsx5(LucideIcon, { strokeWidth: 2.5, name: "check" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx5(Text, { css: { fontSize: "inherit" }, children })
      ]
    }
  );
}
var CheckboxWithLabel = React2.forwardRef(CheckboxWithLabelNoref);
function CheckboxNoref(_a, ref) {
  var _b = _a, {
    defaultChecked,
    children,
    tone = "slate"
  } = _b, props = __objRest(_b, [
    "defaultChecked",
    "children",
    "tone"
  ]);
  const checkbox = useCheckboxState({
    state: defaultChecked
  });
  return /* @__PURE__ */ jsxs4(
    CheckboxRoot,
    {
      "data-state": checkbox.state ? "checked" : "unchecked",
      css: _3.merge(getCheckboxToneStyle(tone)),
      children: [
        /* @__PURE__ */ jsx5(VisuallyHidden, { children: /* @__PURE__ */ jsx5(
          CheckboxPrimitive,
          __spreadValues(__spreadValues({
            ref
          }, checkbox), props)
        ) }),
        /* @__PURE__ */ jsx5(CheckboxIndicator, { checked: !!checkbox.state, children: /* @__PURE__ */ jsx5(LucideIcon, { strokeWidth: 2.5, name: "check" }) })
      ]
    }
  );
}
var Checkbox = React2.forwardRef(CheckboxNoref);
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

// components/Footer/index.tsx
import { GraphQLClient, gql } from "graphql-request";
import React3, { useEffect } from "react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var hygraph = new GraphQLClient(
  "https://ap-northeast-1.cdn.hygraph.com/content/clf0ox8k023ql01t56zef5n6w/master"
);
var QUERY = gql`
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
  const [footerData, setFooterData] = React3.useState(null);
  useEffect(() => {
    getFooterData().then((data) => {
      setFooterData(data);
    });
  }, []);
  return /* @__PURE__ */ jsx6(FooterContainer, { className: isDark ? stitchesDarkTheme : "defaultColor", children: footerData && footerData.footers.map(
    (section, i) => /* @__PURE__ */ jsxs5(FooterSection, { children: [
      /* @__PURE__ */ jsx6(Text, { size: "subtitle1", children: section.sectionTitle }),
      /* @__PURE__ */ jsx6(FooterContent, { children: section.sectionContent.map((sectionContent, j) => {
        return /* @__PURE__ */ jsx6(FooterLink, { children: /* @__PURE__ */ jsxs5("a", { href: sectionContent.url, children: [
          sectionContent.icon && /* @__PURE__ */ jsx6("img", { alt: "icon", src: sectionContent.icon.url }),
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

// components/Dialog/index.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";

// components/IconButton/index.tsx
import _5 from "lodash";

// components/HeroIconOne/index.tsx
import * as HeroIcons from "react-icons/hi";
import _4 from "lodash";
import { Fragment, jsx as jsx7 } from "react/jsx-runtime";
var HeroIcon = (props) => {
  const icons = __objRest(HeroIcons, []);
  const OutlineIcon2 = icons[props.icon] || icons["HiArchive"];
  return /* @__PURE__ */ jsx7(Fragment, { children: /* @__PURE__ */ jsx7(
    OutlineIcon2,
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
  } = _b, props = __objRest(_b, [
    "name",
    "boxSize"
  ]);
  return /* @__PURE__ */ jsx7(Box, __spreadProps(__spreadValues({ css: _4.merge({ boxSize }, props.css) }, props), { children: /* @__PURE__ */ jsx7(HeroIcon, { icon: name }) }));
};

// components/IconButton/index.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var IconButtonWrapper = styled(BaseButton, {
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
    css: css2,
    isRound = false
  } = _b, props = __objRest(_b, [
    "children",
    "name",
    "tone",
    "intent",
    "depth",
    "css",
    "isRound"
  ]);
  return /* @__PURE__ */ jsx8(
    IconButtonWrapper,
    __spreadProps(__spreadValues({
      isRound,
      css: _5.merge(
        getButtonToneStyle(tone, intent),
        getButtonShadowStyle(tone, depth),
        {
          p: 0,
          rowGap: 0
        },
        css2
      )
    }, props), {
      children: children ? children : /* @__PURE__ */ jsx8(HeroIconOne, { boxSize: "65%", name })
    })
  );
};

// components/Dialog/index.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var Dialog = () => {
  return /* @__PURE__ */ jsx9("code", { children: /* @__PURE__ */ jsx9("pre", { children: `<Dialog.Root>
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
var Root2 = styled(DialogPrimitive.Root, {
  boxSizing: "border-box"
});
Root2.displayName = "Root";
Dialog.Root = Root2;
var Trigger2 = styled(DialogPrimitive.Trigger, {});
Trigger2.displayName = "Trigger";
Dialog.Trigger = Trigger2;
var Portal2 = styled(DialogPrimitive.Portal, {});
Portal2.displayName = "Portal";
Dialog.Portal = Portal2;
var Title2 = styled(DialogPrimitive.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold"
});
Title2.displayName = "Title";
Dialog.Title = Title2;
var Description2 = styled(DialogPrimitive.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary"
});
Description2.displayName = "Description";
Dialog.Description = Description2;
var Close2 = styled(DialogPrimitive.Close, {});
Close2.displayName = "Close";
Dialog.Close = Close2;
var Overlay2 = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA8,
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
Overlay2.displayName = "Overlay";
Dialog.Overlay = Overlay2;
var Content2 = styled(DialogPrimitive.Content, {
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
Content2.displayName = "Content";
Dialog.Content = Content2;
var ContentWithClose = (props) => {
  return /* @__PURE__ */ jsxs6(Content2, __spreadProps(__spreadValues({}, props), { children: [
    /* @__PURE__ */ jsx9(
      Box,
      {
        css: {
          position: "absolute",
          top: "$2",
          right: "$2",
          zIndex: 50
        },
        children: /* @__PURE__ */ jsx9(DialogPrimitive.Close, { asChild: true, children: /* @__PURE__ */ jsx9(IconButton, { isRound: true, name: "HiOutlineX", intent: "ghost" }) })
      }
    ),
    /* @__PURE__ */ jsx9(
      Box,
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

// components/HeroIcon/index.tsx
import * as OutlineIcons from "@heroicons/react/24/outline";
import * as SolidIcons from "@heroicons/react/24/solid";
import * as MiniIcons from "@heroicons/react/20/solid";
import _6 from "lodash";
import { Fragment as Fragment2, jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
var MiniIcon = (props) => {
  const icons = __objRest(MiniIcons, []);
  const Icon = (
    // @ts-ignore
    icons[props.name + "Icon"] || icons["QuestionMarkCircleIcon"]
  );
  return /* @__PURE__ */ jsx10(Fragment2, { children: /* @__PURE__ */ jsx10(Icon, { width: "100%", height: "100%", "aria-hidden": "true" }) });
};
var OutlineIcon = (props) => {
  const icons = __objRest(OutlineIcons, []);
  const Icon = (
    // @ts-ignore
    icons[props.name + "Icon"] || icons["QuestionMarkCircleIcon"]
  );
  return /* @__PURE__ */ jsx10(Fragment2, { children: /* @__PURE__ */ jsx10(Icon, { width: "100%", height: "100%", "aria-hidden": "true" }) });
};
var SolidIcon = (props) => {
  const icons = __objRest(SolidIcons, []);
  const Icon = (
    // @ts-ignore
    icons[props.name + "Icon"] || icons["QuestionMarkCircleIcon"]
  );
  return /* @__PURE__ */ jsx10(Fragment2, { children: /* @__PURE__ */ jsx10(Icon, { width: "100%", height: "100%", "aria-hidden": "true" }) });
};
function HeroIcon2(_a) {
  var _b = _a, {
    name: name = "squares-2x2",
    iconStyle = "outline",
    boxSize = "24px"
  } = _b, props = __objRest(_b, [
    // Get icon name from Hero v2 https://heroicons.com/
    "name",
    "iconStyle",
    "boxSize"
  ]);
  const iconNameCamelCase = _6.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  return /* @__PURE__ */ jsxs7(Box, __spreadProps(__spreadValues({ css: { boxSize } }, props), { children: [
    iconStyle === "outline" && /* @__PURE__ */ jsx10(OutlineIcon, { name: IconNameUpperCase }),
    iconStyle === "solid" && /* @__PURE__ */ jsx10(SolidIcon, { name: IconNameUpperCase }),
    iconStyle === "mini" && /* @__PURE__ */ jsx10(MiniIcon, { name: IconNameUpperCase })
  ] }));
}

// components/Tooltip/index.tsx
import {
  Tooltip as TooltipPrimitive,
  TooltipAnchor,
  useTooltipState
} from "ariakit/tooltip";
import { Fragment as Fragment3, jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
var StyledTooltip = styled(TooltipPrimitive, {
  backgroundColor: Radix.blackA.blackA11,
  backdropFilter: "blur(4px)",
  color: "$mauve1",
  borderRadius: "$2xl",
  px: "$3",
  py: "$2",
  fontSize: "$xs",
  fontWeight: 400,
  fontFamily: "$body",
  boxShadow: "0 0 0 1px $mauve12"
});
function Tooltip({
  label,
  children
}) {
  const tooltip = useTooltipState();
  return /* @__PURE__ */ jsxs8(Fragment3, { children: [
    /* @__PURE__ */ jsx11(TooltipAnchor, { style: { display: "inline-block" }, state: tooltip, children }),
    /* @__PURE__ */ jsx11(StyledTooltip, { state: tooltip, children: label })
  ] });
}

// components/Input/index.tsx
var BaseInput = styled("input", {
  boxSizing: "boder-box",
  bgTone1: "mauve",
  color: "$baseText",
  outlineColor: "$baseTextTertiary",
  "&::-webkit-outer-spin-button": {
    appearance: "none",
    margin: 0
  },
  "&::-webkit-inner-spin-button": {
    appearance: "none",
    margin: 0
  },
  fontWeight: 700,
  p: "$5",
  borderRadius: "$2xl",
  fontFamily: "$heading",
  fontSize: "$base",
  textAlign: "left",
  border: "1px solid $slate9",
  "&:hover": {
    borderColor: "$mauve10"
  },
  "&:focus": {
    borderColor: "$mauve10",
    bgTone1: "mauve"
  },
  "&:disabled": {
    opacity: 0.65
  },
  "&:invalid": {
    border: "1px solid $red9",
    outline: "1px solid $red9"
  },
  "&:focus:invalid": {
    border: "1px solid $red9",
    outline: "1px solid $red9"
  },
  "&.error": {
    border: "1px solid $red9",
    outline: "1px solid $red9",
    bgTone2: "red"
  },
  variants: {
    fontSize: {
      xs: {
        fontSize: "$xs",
        py: "$2",
        px: "$3",
        borderRadius: "$lg"
      },
      sm: {
        fontSize: "$sm",
        py: "$2",
        px: "$3",
        borderRadius: "$lg"
      },
      base: {
        fontSize: "$base",
        py: "$2",
        px: "$3",
        borderRadius: "$xl"
      },
      lg: {
        fontSize: "$lg",
        py: "$3",
        px: "$4",
        borderRadius: "$2xl"
      },
      xl: {
        fontSize: "$xl",
        py: "$3",
        px: "$4",
        borderRadius: "$2xl"
      },
      "2xl": {
        fontSize: "$2xl"
      },
      "3xl": {
        fontSize: "$3xl"
      },
      "4xl": {
        fontSize: "$4xl"
      },
      "5xl": {
        fontSize: "$5xl"
      },
      "6xl": {
        fontSize: "$6xl"
      }
    },
    align: {
      left: {
        textAlign: "left"
      },
      center: {
        textAlign: "center"
      },
      right: {
        textAlign: "right"
      }
    },
    asBackdrop: {
      true: {
        position: "absolute",
        inset: 0
      }
    }
  },
  defaultVariants: {
    fontSize: "base",
    align: "left"
  }
});

// components/Slot/index.tsx
var Slot = styled("div", {
  position: "absolute",
  // bgTone5: "mauve",
  // boxSize: 80,
  borderRadius: "$xl",
  zIndex: 1,
  variants: {
    position: {
      left: {
        left: 2,
        top: "50%",
        transform: "translateY(-50%)"
      },
      right: {
        right: 2,
        top: "50%",
        transform: "translateY(-50%)"
      },
      top: {
        top: 2,
        left: "50%",
        transform: "translateX(-50%)"
      },
      bottom: {
        bottom: 2,
        left: "50%",
        transform: "translateX(-50%)"
      },
      topLeft: {
        top: 2,
        left: 2
      },
      topRight: {
        top: 2,
        right: 2
      },
      bottomLeft: {
        bottom: 2,
        left: 2
      },
      bottomRight: {
        bottom: 2,
        right: 2
      }
    }
  },
  defaultVariants: {
    position: "left"
  }
});
var SlotWrapper = styled("div", {
  position: "relative",
  display: "block"
});

// components/TailwindButton/index.tsx
import { tv } from "tailwind-variants";
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
var baseButton = tv({
  base: "border-none select-none relative disabled:cursor-not-allowed disabled:opacity-75 active:translate-y-[1px] transition linear overflow-hidden font-heading font-bold cursor-pointer inline-flex gap-2 items-center",
  variants: {
    intent: {
      primary: "bg-slate-12 hover:bg-slate-12 active:bg-slate-12 text-white dark:text-black",
      secondary: "bg-slate-6 hover:bg-slate-7 active:bg-slate-8 text-slate-11",
      ghost: "bg-transparent hover:bg-slate-3 active:bg-slate-4 text-slate-11",
      "accent-primary": "bg-accent-9 hover:bg-accent-10 active:bg-accent-11 text-accent-1",
      "accent-secondary": "bg-accent-5 hover:bg-accent-6 active:bg-accent-7 text-accent-10",
      "accent-ghost": "bg-transparent hover:bg-accent-3 active:bg-accent-4 text-accent-10"
    },
    size: {
      sm: "rounded-lg text-[11px] h-[30px] px-3 py-2",
      md: "rounded-lg text-[13px] h-8 px-3 py-2",
      lg: "rounded-xl text-[15px] h-10 px-4 py-3",
      xl: "rounded-xl text-[17px] h-11 px-5 py-4"
    },
    isRound: {
      true: "rounded-full"
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
    size: "md",
    align: "center",
    intent: "primary",
    isRound: false
  }
});
var TailwindButton = (_a) => {
  var _b = _a, {
    children,
    isLoading = false,
    leftIcon,
    rightIcon
  } = _b, props = __objRest(_b, [
    "children",
    "isLoading",
    "leftIcon",
    "rightIcon"
  ]);
  return /* @__PURE__ */ jsxs9("button", { className: baseButton(__spreadValues({}, props)), children: [
    leftIcon && /* @__PURE__ */ jsx12("div", { style: {
      opacity: isLoading ? 0 : 1
    }, children: leftIcon }),
    isLoading && /* @__PURE__ */ jsx12("div", { className: "absolute flex items-center justify-center inset-0", children: /* @__PURE__ */ jsx12(AutoSpinner, {}) }),
    /* @__PURE__ */ jsx12("div", { style: {
      opacity: isLoading ? 0 : 1
    }, children }),
    rightIcon && /* @__PURE__ */ jsx12("div", { style: {
      opacity: isLoading ? 0 : 1
    }, children: rightIcon })
  ] });
};
export {
  AutoSpinner,
  BaseButton,
  BaseInput,
  Box,
  Button,
  Checkbox,
  Dialog,
  Display,
  Footer,
  HeroIcon2 as HeroIcon,
  HeroIconOne,
  LucideIcon,
  NomiStyle_default as NomiStyle,
  Radix,
  Slot,
  SlotWrapper,
  Spinner,
  Stack,
  TailwindButton,
  Text,
  Tooltip,
  brandFonts,
  css,
  globalCss,
  keyframes,
  nomiClass,
  reset,
  stitchesDarkTheme,
  theme as stitchesTheme,
  styled
};
