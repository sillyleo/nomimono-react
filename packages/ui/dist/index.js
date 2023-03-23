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

// Button/index.tsx
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

// stitches.config.ts
import * as RadixColors from "@radix-ui/colors";
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

// Box/index.tsx
var Box = styled("div", {});
var Stack = styled(Box, {
  display: "flex",
  flexDirection: "column",
  gap: "$4"
});

// Spinner/index.tsx
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
import * as RadixColors2 from "@radix-ui/colors";
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
      [`.${stitchesDarkTheme} &`]: {
        $$shadowColor: shadowColor[tone + "A6"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,                
                0 0.8px 1px -1.2px $$shadowColor,
                0 2px 2.5px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "2") {
    return {
      [`.${stitchesDarkTheme} &`]: {
        $$shadowColor: shadowColor[tone + "A4"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 1.6px 2px -0.8px $$shadowColor,
                0 4.1px 5.2px -1.7px $$shadowColor,
                0 10px 12.6px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "3") {
    return {
      [`.${stitchesDarkTheme} &`]: {
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
          css3
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
import { motion } from "framer-motion";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Display(_a) {
  var _b = _a, { label, css: css3 } = _b, rest = __objRest(_b, ["label", "css"]);
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
            }, css3)
          }, rest)
        )
      ]
    }
  );
}

// Checkbox/index.tsx
import React2 from "react";
import {
  Checkbox as CheckboxPrimitive,
  useCheckboxState
} from "reakit/Checkbox";
import { VisuallyHidden } from "react-aria";
import _3 from "lodash";

// LucideIcon/index.tsx
import _2 from "lodash";
import * as icons from "lucide-react";
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
  const LucideIcon3 = icons[IconNameUpperCase];
  return /* @__PURE__ */ jsx4(
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
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
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
  const checkbox = useCheckboxState({
    state: defaultChecked
  });
  console.log(checkbox);
  return /* @__PURE__ */ jsxs4(
    CheckboxLabel,
    {
      "data-state": props.disabled ? "disabled" : void 0,
      css: { fontSize: `$${fontSize}`, color: "$baseText" },
      children: [
        /* @__PURE__ */ jsx5(VisuallyHidden, { children: /* @__PURE__ */ jsx5(
          CheckboxPrimitive,
          __spreadValues(__spreadValues({
            ref
          }, checkbox), props)
        ) }),
        /* @__PURE__ */ jsx5(
          CheckboxRoot,
          {
            "data-state": checkbox.state ? "checked" : "unchecked",
            css: _3.merge(getCheckboxToneStyle(tone), css3),
            children: /* @__PURE__ */ jsx5(CheckboxIndicator, { checked: !!checkbox.state, children: /* @__PURE__ */ jsx5(LucideIcon, { strokeWidth: 2.5, name: "check" }) })
          }
        ),
        /* @__PURE__ */ jsx5(Text, { css: { fontSize: "inherit" }, children })
      ]
    }
  );
}
var Checkbox = React2.forwardRef(CheckboxWithLabel);
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

// Dialog/index.tsx
import * as DialogPrimitive4 from "@radix-ui/react-dialog";
import { blackA as blackA4 } from "@radix-ui/colors";

// dist/index.js
import _4 from "lodash";
import React4 from "react";
import { createStitches as createStitches2, defaultThemeMap as defaultThemeMap2 } from "@stitches/react";
import * as RadixColors3 from "@radix-ui/colors";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
import * as RadixColors22 from "@radix-ui/colors";
import { jsx as jsx22, jsxs as jsxs22 } from "react/jsx-runtime";
import { motion as motion2 } from "framer-motion";
import { jsx as jsx32, jsxs as jsxs32 } from "react/jsx-runtime";
import React22 from "react";
import {
  Checkbox as CheckboxPrimitive2,
  useCheckboxState as useCheckboxState2
} from "reakit/Checkbox";
import { VisuallyHidden as VisuallyHidden2 } from "react-aria";
import _32 from "lodash";
import _22 from "lodash";
import * as icons2 from "lucide-react";
import { jsx as jsx42 } from "react/jsx-runtime";
import { jsx as jsx52, jsxs as jsxs42 } from "react/jsx-runtime";
import { GraphQLClient as GraphQLClient2, gql as gql2 } from "graphql-request";
import React32, { useEffect as useEffect2 } from "react";
import { jsx as jsx62, jsxs as jsxs52 } from "react/jsx-runtime";
import * as DialogPrimitive3 from "@radix-ui/react-dialog";
import { blackA as blackA3 } from "@radix-ui/colors";
import _42 from "lodash";
import React42 from "react";
import { createStitches as createStitches22, defaultThemeMap as defaultThemeMap22 } from "@stitches/react";
import * as RadixColors32 from "@radix-ui/colors";
import { jsx as jsx72, jsxs as jsxs62 } from "react/jsx-runtime";
import * as RadixColors222 from "@radix-ui/colors";
import { jsx as jsx222, jsxs as jsxs222 } from "react/jsx-runtime";
import { motion as motion22 } from "framer-motion";
import { jsx as jsx322, jsxs as jsxs322 } from "react/jsx-runtime";
import React222 from "react";
import {
  Checkbox as CheckboxPrimitive22,
  useCheckboxState as useCheckboxState22
} from "reakit/Checkbox";
import { VisuallyHidden as VisuallyHidden22 } from "react-aria";
import _322 from "lodash";
import _222 from "lodash";
import * as icons22 from "lucide-react";
import { jsx as jsx422 } from "react/jsx-runtime";
import { jsx as jsx522, jsxs as jsxs422 } from "react/jsx-runtime";
import { GraphQLClient as GraphQLClient22, gql as gql22 } from "graphql-request";
import React322, { useEffect as useEffect22 } from "react";
import { jsx as jsx622, jsxs as jsxs522 } from "react/jsx-runtime";
import * as DialogPrimitive2 from "@radix-ui/react-dialog";
import { blackA as blackA2 } from "@radix-ui/colors";
import _422 from "lodash";
import React422 from "react";
import { createStitches as createStitches222, defaultThemeMap as defaultThemeMap222 } from "@stitches/react";
import * as RadixColors322 from "@radix-ui/colors";
import { jsx as jsx722, jsxs as jsxs622 } from "react/jsx-runtime";
import * as RadixColors2222 from "@radix-ui/colors";
import { jsx as jsx2222, jsxs as jsxs2222 } from "react/jsx-runtime";
import { motion as motion222 } from "framer-motion";
import { jsx as jsx3222, jsxs as jsxs3222 } from "react/jsx-runtime";
import React2222 from "react";
import {
  Checkbox as CheckboxPrimitive222,
  useCheckboxState as useCheckboxState222
} from "reakit/Checkbox";
import { VisuallyHidden as VisuallyHidden222 } from "react-aria";
import _3222 from "lodash";
import _2222 from "lodash";
import * as icons222 from "lucide-react";
import { jsx as jsx4222 } from "react/jsx-runtime";
import { jsx as jsx5222, jsxs as jsxs4222 } from "react/jsx-runtime";
import { GraphQLClient as GraphQLClient222, gql as gql222 } from "graphql-request";
import React3222, { useEffect as useEffect222 } from "react";
import { jsx as jsx6222, jsxs as jsxs5222 } from "react/jsx-runtime";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { blackA } from "@radix-ui/colors";
import _4222 from "lodash";
import * as HeroIcons from "react-icons/hi";
import { Fragment, jsx as jsx7222 } from "react/jsx-runtime";
import { jsx as jsx8 } from "react/jsx-runtime";
import { jsx as jsx9, jsxs as jsxs6222 } from "react/jsx-runtime";
import _5 from "lodash";
import * as HeroIcons2 from "react-icons/hi";
import { Fragment as Fragment2, jsx as jsx10 } from "react/jsx-runtime";
import { jsx as jsx11 } from "react/jsx-runtime";
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
import _6 from "lodash";
import * as HeroIcons3 from "react-icons/hi";
import { Fragment as Fragment3, jsx as jsx13 } from "react/jsx-runtime";
import { jsx as jsx14 } from "react/jsx-runtime";
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
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
} = createStitches2({
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
  themeMap: __spreadValues2({}, defaultThemeMap2)
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
  return /* @__PURE__ */ jsx7(
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
      children: /* @__PURE__ */ jsx7(
        "path",
        {
          fill: "currentColor",
          d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
          children: /* @__PURE__ */ jsx7(
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
      [`.${stitchesDarkTheme2} &`]: {
        $$shadowColor: shadowColor[tone + "A6"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,                
                0 0.8px 1px -1.2px $$shadowColor,
                0 2px 2.5px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "2") {
    return {
      [`.${stitchesDarkTheme2} &`]: {
        $$shadowColor: shadowColor[tone + "A4"],
        boxShadow: `0 0.5px 0.7px $$shadowColor,
                0 1.6px 2px -0.8px $$shadowColor,
                0 4.1px 5.2px -1.7px $$shadowColor,
                0 10px 12.6px -2.5px $$shadowColor;`
      }
    };
  } else if (depth === "3") {
    return {
      [`.${stitchesDarkTheme2} &`]: {
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
var Button2 = React4.forwardRef(
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
    return /* @__PURE__ */ jsxs22(
      BaseButton2,
      __spreadProps2(__spreadValues2({
        className: isDark ? stitchesDarkTheme2 : void 0,
        ref,
        size,
        align,
        css: _4.merge(
          getButtonToneStyle2(tone, intent),
          getButtonShadowStyle2(tone, depth),
          css3
        )
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ jsx22(
            Box2,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: leftIcon
            }
          ),
          isLoading && /* @__PURE__ */ jsx22(
            Box2,
            {
              style: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                inset: 0
              },
              children: /* @__PURE__ */ jsx22(AutoSpinner2, {})
            }
          ),
          /* @__PURE__ */ jsx22(
            Box2,
            {
              className: "button-text",
              style: {
                opacity: isLoading ? 0 : 1
              },
              children
            }
          ),
          rightIcon && /* @__PURE__ */ jsx22(
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
  const iconNameCamelCase = _22.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  const LucideIcon3 = icons2[IconNameUpperCase];
  return /* @__PURE__ */ jsx42(
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
  const checkbox = useCheckboxState2({
    state: defaultChecked
  });
  console.log(checkbox);
  return /* @__PURE__ */ jsxs42(
    CheckboxLabel2,
    {
      "data-state": props.disabled ? "disabled" : void 0,
      css: { fontSize: `$${fontSize}`, color: "$baseText" },
      children: [
        /* @__PURE__ */ jsx52(VisuallyHidden2, { children: /* @__PURE__ */ jsx52(
          CheckboxPrimitive2,
          __spreadValues2(__spreadValues2({
            ref
          }, checkbox), props)
        ) }),
        /* @__PURE__ */ jsx52(
          CheckboxRoot2,
          {
            "data-state": checkbox.state ? "checked" : "unchecked",
            css: _32.merge(getCheckboxToneStyle2(tone), css3),
            children: /* @__PURE__ */ jsx52(CheckboxIndicator2, { checked: !!checkbox.state, children: /* @__PURE__ */ jsx52(LucideIcon2, { strokeWidth: 2.5, name: "check" }) })
          }
        ),
        /* @__PURE__ */ jsx52(Text2, { css: { fontSize: "inherit" }, children })
      ]
    }
  );
}
var Checkbox2 = React22.forwardRef(CheckboxWithLabel2);
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
var hygraph2 = new GraphQLClient2(
  "https://ap-northeast-1.cdn.hygraph.com/content/clf0ox8k023ql01t56zef5n6w/master"
);
var QUERY2 = gql2`
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
} = createStitches22({
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
  themeMap: __spreadValues22({}, defaultThemeMap22)
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
  return /* @__PURE__ */ jsx72(
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
      children: /* @__PURE__ */ jsx72(
        "path",
        {
          fill: "currentColor",
          d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
          children: /* @__PURE__ */ jsx72(
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
var Button22 = React42.forwardRef(
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
    return /* @__PURE__ */ jsxs222(
      BaseButton22,
      __spreadProps22(__spreadValues22({
        className: isDark ? stitchesDarkTheme22 : void 0,
        ref,
        size,
        align,
        css: _42.merge(
          getButtonToneStyle22(tone, intent),
          getButtonShadowStyle22(tone, depth),
          css3
        )
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ jsx222(
            Box22,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: leftIcon
            }
          ),
          isLoading && /* @__PURE__ */ jsx222(
            Box22,
            {
              style: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                inset: 0
              },
              children: /* @__PURE__ */ jsx222(AutoSpinner22, {})
            }
          ),
          /* @__PURE__ */ jsx222(
            Box22,
            {
              className: "button-text",
              style: {
                opacity: isLoading ? 0 : 1
              },
              children
            }
          ),
          rightIcon && /* @__PURE__ */ jsx222(
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
  const iconNameCamelCase = _222.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  const LucideIcon3 = icons22[IconNameUpperCase];
  return /* @__PURE__ */ jsx422(
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
  const checkbox = useCheckboxState22({
    state: defaultChecked
  });
  console.log(checkbox);
  return /* @__PURE__ */ jsxs422(
    CheckboxLabel22,
    {
      "data-state": props.disabled ? "disabled" : void 0,
      css: { fontSize: `$${fontSize}`, color: "$baseText" },
      children: [
        /* @__PURE__ */ jsx522(VisuallyHidden22, { children: /* @__PURE__ */ jsx522(
          CheckboxPrimitive22,
          __spreadValues22(__spreadValues22({
            ref
          }, checkbox), props)
        ) }),
        /* @__PURE__ */ jsx522(
          CheckboxRoot22,
          {
            "data-state": checkbox.state ? "checked" : "unchecked",
            css: _322.merge(getCheckboxToneStyle22(tone), css3),
            children: /* @__PURE__ */ jsx522(CheckboxIndicator22, { checked: !!checkbox.state, children: /* @__PURE__ */ jsx522(LucideIcon22, { strokeWidth: 2.5, name: "check" }) })
          }
        ),
        /* @__PURE__ */ jsx522(Text22, { css: { fontSize: "inherit" }, children })
      ]
    }
  );
}
var Checkbox22 = React222.forwardRef(CheckboxWithLabel22);
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
var hygraph22 = new GraphQLClient22(
  "https://ap-northeast-1.cdn.hygraph.com/content/clf0ox8k023ql01t56zef5n6w/master"
);
var QUERY22 = gql22`
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
} = createStitches222({
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
  themeMap: __spreadValues222({}, defaultThemeMap222)
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
  return /* @__PURE__ */ jsx722(
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
      children: /* @__PURE__ */ jsx722(
        "path",
        {
          fill: "currentColor",
          d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
          children: /* @__PURE__ */ jsx722(
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
    align: "center"
  }
});
var Button222 = React422.forwardRef(
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
      css: css2222,
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
    return /* @__PURE__ */ jsxs2222(
      BaseButton222,
      __spreadProps222(__spreadValues222({
        className: isDark ? stitchesDarkTheme222 : void 0,
        ref,
        size,
        align,
        css: _422.merge(
          getButtonToneStyle222(tone, intent),
          getButtonShadowStyle222(tone, depth),
          css2222
        )
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ jsx2222(
            Box222,
            {
              style: {
                opacity: isLoading ? 0 : 1
              },
              children: leftIcon
            }
          ),
          isLoading && /* @__PURE__ */ jsx2222(
            Box222,
            {
              style: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                inset: 0
              },
              children: /* @__PURE__ */ jsx2222(AutoSpinner222, {})
            }
          ),
          /* @__PURE__ */ jsx2222(
            Box222,
            {
              className: "button-text",
              style: {
                opacity: isLoading ? 0 : 1
              },
              children
            }
          ),
          rightIcon && /* @__PURE__ */ jsx2222(
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
  const iconNameCamelCase = _2222.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  const LucideIcon2222 = icons222[IconNameUpperCase];
  return /* @__PURE__ */ jsx4222(
    LucideIcon2222,
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
    css: css2222
  } = _b, props = __objRest222(_b, [
    "defaultChecked",
    "children",
    "fontSize",
    "tone",
    "css"
  ]);
  const checkbox = useCheckboxState222({
    state: defaultChecked
  });
  console.log(checkbox);
  return /* @__PURE__ */ jsxs4222(
    CheckboxLabel222,
    {
      "data-state": props.disabled ? "disabled" : void 0,
      css: { fontSize: `$${fontSize}`, color: "$baseText" },
      children: [
        /* @__PURE__ */ jsx5222(VisuallyHidden222, { children: /* @__PURE__ */ jsx5222(
          CheckboxPrimitive222,
          __spreadValues222(__spreadValues222({
            ref
          }, checkbox), props)
        ) }),
        /* @__PURE__ */ jsx5222(
          CheckboxRoot222,
          {
            "data-state": checkbox.state ? "checked" : "unchecked",
            css: _3222.merge(getCheckboxToneStyle222(tone), css2222),
            children: /* @__PURE__ */ jsx5222(CheckboxIndicator222, { checked: !!checkbox.state, children: /* @__PURE__ */ jsx5222(LucideIcon222, { strokeWidth: 2.5, name: "check" }) })
          }
        ),
        /* @__PURE__ */ jsx5222(Text222, { css: { fontSize: "inherit" }, children })
      ]
    }
  );
}
var Checkbox222 = React2222.forwardRef(CheckboxWithLabel222);
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
var hygraph222 = new GraphQLClient222(
  "https://ap-northeast-1.cdn.hygraph.com/content/clf0ox8k023ql01t56zef5n6w/master"
);
var QUERY222 = gql222`
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
var HeroIcon = (props) => {
  const icons2222 = __objRest222(HeroIcons, []);
  const OutlineIcon = icons2222[props.icon] || icons2222["HiArchive"];
  return /* @__PURE__ */ jsx7222(Fragment, { children: /* @__PURE__ */ jsx7222(
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
  } = _b, props = __objRest222(_b, [
    "name",
    "boxSize"
  ]);
  return /* @__PURE__ */ jsx7222(Box222, __spreadProps222(__spreadValues222({ css: { boxSize } }, props), { children: /* @__PURE__ */ jsx7222(HeroIcon, { icon: name }) }));
};
var IconButtonWrapper = styled222(BaseButton222, {
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
    css: css2222,
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
  return /* @__PURE__ */ jsx8(
    IconButtonWrapper,
    __spreadProps222(__spreadValues222({
      isRound,
      css: _4222.merge(
        getButtonToneStyle222(tone, intent),
        getButtonShadowStyle222(tone, depth),
        {
          p: 0,
          rowGap: 0
        },
        css2222
      )
    }, props), {
      children: children ? children : /* @__PURE__ */ jsx8(HeroIconOne, { boxSize: "65%", name })
    })
  );
};
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
var Root22 = styled222(DialogPrimitive.Root, {
  boxSizing: "border-box"
});
Root22.displayName = "Root";
Dialog.Root = Root22;
var Trigger22 = styled222(DialogPrimitive.Trigger, {});
Trigger22.displayName = "Trigger";
Dialog.Trigger = Trigger22;
var Portal22 = styled222(DialogPrimitive.Portal, {});
Portal22.displayName = "Portal";
Dialog.Portal = Portal22;
var Title22 = styled222(DialogPrimitive.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold"
});
Title22.displayName = "Title";
Dialog.Title = Title22;
var Description22 = styled222(DialogPrimitive.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary"
});
Description22.displayName = "Description";
Dialog.Description = Description22;
var Close22 = styled222(DialogPrimitive.Close, {});
Close22.displayName = "Close";
Dialog.Close = Close22;
var Overlay22 = styled222(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA8,
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
Overlay22.displayName = "Overlay";
Dialog.Overlay = Overlay22;
var Content22 = styled222(DialogPrimitive.Content, {
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
  return /* @__PURE__ */ jsxs6222(Content22, __spreadProps222(__spreadValues222({}, props), { children: [
    /* @__PURE__ */ jsx9(
      Box222,
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
ContentWithClose.displayName = "ContentWithClose";
Dialog.ContentWithClose = ContentWithClose;
var HeroIcon2 = (props) => {
  const icons3 = __objRest22(HeroIcons2, []);
  const OutlineIcon = icons3[props.icon] || icons3["HiArchive"];
  return /* @__PURE__ */ jsx10(Fragment2, { children: /* @__PURE__ */ jsx10(
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
  } = _b, props = __objRest22(_b, [
    "name",
    "boxSize"
  ]);
  return /* @__PURE__ */ jsx10(Box22, __spreadProps22(__spreadValues22({ css: { boxSize } }, props), { children: /* @__PURE__ */ jsx10(HeroIcon2, { icon: name }) }));
};
var IconButtonWrapper2 = styled22(BaseButton22, {
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
  } = _b, props = __objRest22(_b, [
    "children",
    "name",
    "tone",
    "intent",
    "depth",
    "css",
    "isRound"
  ]);
  return /* @__PURE__ */ jsx11(
    IconButtonWrapper2,
    __spreadProps22(__spreadValues22({
      isRound,
      css: _5.merge(
        getButtonToneStyle22(tone, intent),
        getButtonShadowStyle22(tone, depth),
        {
          p: 0,
          rowGap: 0
        },
        css3
      )
    }, props), {
      children: children ? children : /* @__PURE__ */ jsx11(HeroIconOne2, { boxSize: "65%", name })
    })
  );
};
var Dialog2 = () => {
  return /* @__PURE__ */ jsx12("code", { children: /* @__PURE__ */ jsx12("pre", { children: `<Dialog.Root>
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
var Root4 = styled22(DialogPrimitive2.Root, {
  boxSizing: "border-box"
});
Root4.displayName = "Root";
Dialog2.Root = Root4;
var Trigger4 = styled22(DialogPrimitive2.Trigger, {});
Trigger4.displayName = "Trigger";
Dialog2.Trigger = Trigger4;
var Portal4 = styled22(DialogPrimitive2.Portal, {});
Portal4.displayName = "Portal";
Dialog2.Portal = Portal4;
var Title4 = styled22(DialogPrimitive2.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold"
});
Title4.displayName = "Title";
Dialog2.Title = Title4;
var Description4 = styled22(DialogPrimitive2.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary"
});
Description4.displayName = "Description";
Dialog2.Description = Description4;
var Close4 = styled22(DialogPrimitive2.Close, {});
Close4.displayName = "Close";
Dialog2.Close = Close4;
var Overlay4 = styled22(DialogPrimitive2.Overlay, {
  backgroundColor: blackA2.blackA8,
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
Overlay4.displayName = "Overlay";
Dialog2.Overlay = Overlay4;
var Content4 = styled22(DialogPrimitive2.Content, {
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
Content4.displayName = "Content";
Dialog2.Content = Content4;
var ContentWithClose2 = (props) => {
  return /* @__PURE__ */ jsxs7(Content4, __spreadProps22(__spreadValues22({}, props), { children: [
    /* @__PURE__ */ jsx12(
      Box222,
      {
        css: {
          position: "absolute",
          top: "$2",
          right: "$2",
          zIndex: 50
        },
        children: /* @__PURE__ */ jsx12(DialogPrimitive2.Close, { asChild: true, children: /* @__PURE__ */ jsx12(IconButton2, { isRound: true, name: "HiOutlineX", intent: "ghost" }) })
      }
    ),
    /* @__PURE__ */ jsx12(
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
ContentWithClose2.displayName = "ContentWithClose";
Dialog2.ContentWithClose = ContentWithClose2;
var HeroIcon3 = (props) => {
  const icons3 = __objRest2(HeroIcons3, []);
  const OutlineIcon = icons3[props.icon] || icons3["HiArchive"];
  return /* @__PURE__ */ jsx13(Fragment3, { children: /* @__PURE__ */ jsx13(
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
  } = _b, props = __objRest2(_b, [
    "name",
    "boxSize"
  ]);
  return /* @__PURE__ */ jsx13(Box2, __spreadProps2(__spreadValues2({ css: { boxSize } }, props), { children: /* @__PURE__ */ jsx13(HeroIcon3, { icon: name }) }));
};
var IconButtonWrapper3 = styled2(BaseButton2, {
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
  } = _b, props = __objRest2(_b, [
    "children",
    "name",
    "tone",
    "intent",
    "depth",
    "css",
    "isRound"
  ]);
  return /* @__PURE__ */ jsx14(
    IconButtonWrapper3,
    __spreadProps2(__spreadValues2({
      isRound,
      css: _6.merge(
        getButtonToneStyle2(tone, intent),
        getButtonShadowStyle2(tone, depth),
        {
          p: 0,
          rowGap: 0
        },
        css3
      )
    }, props), {
      children: children ? children : /* @__PURE__ */ jsx14(HeroIconOne3, { boxSize: "65%", name })
    })
  );
};
var Dialog3 = () => {
  return /* @__PURE__ */ jsx15("code", { children: /* @__PURE__ */ jsx15("pre", { children: `<Dialog.Root>
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
var Root5 = styled2(DialogPrimitive3.Root, {
  boxSizing: "border-box"
});
Root5.displayName = "Root";
Dialog3.Root = Root5;
var Trigger5 = styled2(DialogPrimitive3.Trigger, {});
Trigger5.displayName = "Trigger";
Dialog3.Trigger = Trigger5;
var Portal5 = styled2(DialogPrimitive3.Portal, {});
Portal5.displayName = "Portal";
Dialog3.Portal = Portal5;
var Title5 = styled2(DialogPrimitive3.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold"
});
Title5.displayName = "Title";
Dialog3.Title = Title5;
var Description5 = styled2(DialogPrimitive3.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary"
});
Description5.displayName = "Description";
Dialog3.Description = Description5;
var Close5 = styled2(DialogPrimitive3.Close, {});
Close5.displayName = "Close";
Dialog3.Close = Close5;
var Overlay5 = styled2(DialogPrimitive3.Overlay, {
  backgroundColor: blackA3.blackA8,
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
Overlay5.displayName = "Overlay";
Dialog3.Overlay = Overlay5;
var Content5 = styled2(DialogPrimitive3.Content, {
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
Content5.displayName = "Content";
Dialog3.Content = Content5;
var ContentWithClose3 = (props) => {
  return /* @__PURE__ */ jsxs8(Content5, __spreadProps2(__spreadValues2({}, props), { children: [
    /* @__PURE__ */ jsx15(
      Box22,
      {
        css: {
          position: "absolute",
          top: "$2",
          right: "$2",
          zIndex: 50
        },
        children: /* @__PURE__ */ jsx15(DialogPrimitive3.Close, { asChild: true, children: /* @__PURE__ */ jsx15(IconButton3, { isRound: true, name: "HiOutlineX", intent: "ghost" }) })
      }
    ),
    /* @__PURE__ */ jsx15(
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
ContentWithClose3.displayName = "ContentWithClose";
Dialog3.ContentWithClose = ContentWithClose3;

// IconButton/index.tsx
import _7 from "lodash";

// HeroIconOne/index.tsx
import * as HeroIcons4 from "react-icons/hi";
import { Fragment as Fragment4, jsx as jsx16 } from "react/jsx-runtime";
var HeroIcon4 = (props) => {
  const icons3 = __objRest(HeroIcons4, []);
  const OutlineIcon = icons3[props.icon] || icons3["HiArchive"];
  return /* @__PURE__ */ jsx16(Fragment4, { children: /* @__PURE__ */ jsx16(
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
  } = _b, props = __objRest(_b, [
    "name",
    "boxSize"
  ]);
  return /* @__PURE__ */ jsx16(Box, __spreadProps(__spreadValues({ css: { boxSize } }, props), { children: /* @__PURE__ */ jsx16(HeroIcon4, { icon: name }) }));
};

// IconButton/index.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var IconButtonWrapper4 = styled(BaseButton, {
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
  } = _b, props = __objRest(_b, [
    "children",
    "name",
    "tone",
    "intent",
    "depth",
    "css",
    "isRound"
  ]);
  return /* @__PURE__ */ jsx17(
    IconButtonWrapper4,
    __spreadProps(__spreadValues({
      isRound,
      css: _7.merge(
        getButtonToneStyle(tone, intent),
        getButtonShadowStyle(tone, depth),
        {
          p: 0,
          rowGap: 0
        },
        css3
      )
    }, props), {
      children: children ? children : /* @__PURE__ */ jsx17(HeroIconOne4, { boxSize: "65%", name })
    })
  );
};

// Dialog/index.tsx
import { jsx as jsx18, jsxs as jsxs9 } from "react/jsx-runtime";
var Dialog4 = () => {
  return /* @__PURE__ */ jsx18("code", { children: /* @__PURE__ */ jsx18("pre", { children: `<Dialog.Root>
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
var Root7 = styled(DialogPrimitive4.Root, {
  boxSizing: "border-box"
});
Root7.displayName = "Root";
Dialog4.Root = Root7;
var Trigger7 = styled(DialogPrimitive4.Trigger, {});
Trigger7.displayName = "Trigger";
Dialog4.Trigger = Trigger7;
var Portal7 = styled(DialogPrimitive4.Portal, {});
Portal7.displayName = "Portal";
Dialog4.Portal = Portal7;
var Title7 = styled(DialogPrimitive4.Title, {
  fontSize: "$base",
  color: "$baseText",
  fontWeight: "$bold"
});
Title7.displayName = "Title";
Dialog4.Title = Title7;
var Description7 = styled(DialogPrimitive4.Description, {
  fontSize: "$sm",
  color: "$baseTextTertiary"
});
Description7.displayName = "Description";
Dialog4.Description = Description7;
var Close7 = styled(DialogPrimitive4.Close, {});
Close7.displayName = "Close";
Dialog4.Close = Close7;
var Overlay7 = styled(DialogPrimitive4.Overlay, {
  backgroundColor: blackA4.blackA8,
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
Overlay7.displayName = "Overlay";
Dialog4.Overlay = Overlay7;
var Content7 = styled(DialogPrimitive4.Content, {
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
  return /* @__PURE__ */ jsxs9(Content7, __spreadProps(__spreadValues({}, props), { children: [
    /* @__PURE__ */ jsx18(
      Box2,
      {
        css: {
          position: "absolute",
          top: "$2",
          right: "$2",
          zIndex: 50
        },
        children: /* @__PURE__ */ jsx18(DialogPrimitive4.Close, { asChild: true, children: /* @__PURE__ */ jsx18(IconButton4, { isRound: true, name: "HiOutlineX", intent: "ghost" }) })
      }
    ),
    /* @__PURE__ */ jsx18(
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
ContentWithClose4.displayName = "ContentWithClose";
Dialog4.ContentWithClose = ContentWithClose4;
export {
  AutoSpinner,
  BaseButton,
  Box,
  Button,
  Checkbox,
  Dialog4 as Dialog,
  Display,
  Footer,
  NomiStyle_default as NomiStyle,
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
  theme as stitchesTheme,
  styled
};
