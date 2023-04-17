"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/components/index.tsx
var components_exports = {};
__export(components_exports, {
  Button: () => Button,
  FixedSizeSpinner: () => FixedSizeSpinner,
  HeroIcon: () => HeroIcon,
  HeroIconOne: () => HeroIconOne,
  IconButton: () => IconButton,
  LucideIcon: () => LucideIcon,
  Spinner: () => Spinner,
  Text: () => Text
});
module.exports = __toCommonJS(components_exports);

// src/components/Button/index.tsx
var import_tailwind_variants = require("tailwind-variants");

// src/components/Spinner/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function FixedSizeSpinner(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
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
    }
  );
}
var Spinner = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      version: "1.1",
      id: "L9",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      width: props.size || "100%",
      height: props.size || "100%",
      viewBox: "0 0 100 100",
      enableBackground: "new 0 0 0 0",
      xmlSpace: "preserve",
      ...props,
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

// src/components/Button/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var buttonStyle = (0, import_tailwind_variants.tv)({
  slots: {
    base: "relative items-center inline-flex active:translate-y-[1px] transition-transform duration-200 ease-in-out",
    content: "font-medium font-body text-center",
    icon: "flex items-center justify-center w-[1em] h-[1em]",
    spinner: "absolute inset-0 flex items-center justify-center"
  },
  variants: {
    rounded: {
      s: {
        base: "rounded-s"
      },
      m: {
        base: "rounded-m"
      },
      l: {
        base: "rounded-l"
      },
      full: {
        base: "rounded-full"
      }
    },
    disabled: {
      true: {
        base: "cursor-not-allowed"
      }
    },
    isLoading: {
      true: {}
    },
    intent: {
      primary: {
        base: "text-neutral-6 bg-primary-500 hover:bg-primary-400"
      },
      secondary: {
        base: "text-neutral-1 bg-neutral-7 dark:text-dark-neutral-1 dark:bg-dark-neutral-7 hover:bg-neutral-6 dark:hover:bg-neutral-6"
      },
      outline: {
        base: "text-neutral-6 dark:text-dark-neutral-6 hover:bg-neutral-1 dark:hover:bg-dark-neutral-1 outline outline-1 outline-neutral-6 dark:outline-dark-neutral-6 hover:outline-neutral-6 dark:hover:outline-dark-neutral-6"
      },
      text: {
        base: "text-neutral-6 dark:text-dark-neutral-6 bg-transparent hover:bg-neutral-1 dark:hover:bg-dark-neutral-1"
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
      isLoading: true,
      class: {
        content: "opacity-0",
        icon: "opacity-0"
      }
    },
    {
      size: ["xs", "sm", "md", "lg"],
      intent: "primary",
      disabled: true,
      class: {
        base: "text-neutral-5 bg-neutral-3 hover:bg-neutral-3 dark:text-dark-neutral-5 dark:bg-dark-neutral-3 dark:hover:bg-dark-neutral-3 cursor-not-allowed"
      }
    },
    {
      size: ["xs", "sm", "md", "lg"],
      intent: "secondary",
      disabled: true,
      class: {
        base: "text-neutral-0 bg-neutral-7 hover:bg-neutral-6 dark:text-dark-neutral-0 dark:bg-dark-neutral-6 dark:hover:bg-dark-neutral-6 cursor-not-allowed"
      }
    },
    {
      size: ["xs", "sm", "md", "lg"],
      intent: "outline",
      disabled: true,
      class: {
        base: "text-neutral-3 outline-neutral-3 hover:outline-neutral-3dark:text-dark-neutral-3 dark:outline-dark-neutral-3 dark:hover:outline-dark-neutral-3 cursor-not-allowed "
      }
    },
    {
      size: ["xs", "sm", "md", "lg"],
      intent: "text",
      disabled: true,
      class: {
        base: "px-2 text-neutral-3 bg-neutral-0 hover:bg-neutral-0dark:text-dark-neutral-3 dark:bg-dark-neutral-0 dark:hover:bg-dark-neutral-0 cursor-not-allowed"
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
    isLoading: false,
    rounded: "full"
  }
});
var Button = (props) => {
  const {
    size,
    disabled,
    rounded,
    isLoading,
    intent,
    children,
    leftIcon,
    rightIcon,
    ...rest
  } = props;
  const { base, content, icon, spinner } = buttonStyle(
    // variants here
    { size, disabled, isLoading, intent, rounded }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { className: base(), ...rest, children: [
    isLoading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: spinner(), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spinner, {}) }),
    leftIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: icon(), children: leftIcon }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: content(), children }),
    rightIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: icon(), children: rightIcon })
  ] });
};

// src/components/IconButton/index.tsx
var import_tailwind_variants2 = require("tailwind-variants");

// src/components/HeroIcon/index.tsx
var OutlineIcons = __toESM(require("@heroicons/react/24/outline"), 1);
var SolidIcons = __toESM(require("@heroicons/react/24/solid"), 1);
var MiniIcons = __toESM(require("@heroicons/react/20/solid"), 1);
var import_lodash = __toESM(require("lodash"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
var MiniIcon = (props) => {
  const { ...icons } = MiniIcons;
  const Icon = (
    // @ts-ignore
    icons[props.name + "Icon"] || icons["QuestionMarkCircleIcon"]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { width: "100%", height: "100%", "aria-hidden": "true" }) });
};
var OutlineIcon = (props) => {
  const { ...icons } = OutlineIcons;
  const Icon = (
    // @ts-ignore
    icons[props.name + "Icon"] || icons["QuestionMarkCircleIcon"]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { width: "100%", height: "100%", "aria-hidden": "true" }) });
};
var SolidIcon = (props) => {
  const { ...icons } = SolidIcons;
  const Icon = (
    // @ts-ignore
    icons[props.name + "Icon"] || icons["QuestionMarkCircleIcon"]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { width: "100%", height: "100%", "aria-hidden": "true" }) });
};
function HeroIcon({
  // Get icon name from Hero v2 https://heroicons.com/
  name = "squares-2x2",
  iconStyle = "outline",
  boxSize = "24px",
  ...props
}) {
  const iconNameCamelCase = import_lodash.default.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { width: boxSize, height: boxSize }, ...props, children: [
    iconStyle === "outline" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OutlineIcon, { name: IconNameUpperCase }),
    iconStyle === "solid" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SolidIcon, { name: IconNameUpperCase }),
    iconStyle === "mini" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MiniIcon, { name: IconNameUpperCase })
  ] });
}

// src/components/IconButton/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var iconButtonStyle = (0, import_tailwind_variants2.tv)({
  slots: {
    base: "relative items-center inline-flex justify-center	 active:translate-y-[1px] transition-transform duration-200 ease-in-out",
    icon: "flex items-center justify-center",
    spinner: "absolute inset-0 flex items-center justify-center"
  },
  variants: {
    rounded: {
      s: {
        base: "rounded-s"
      },
      m: {
        base: "rounded-m"
      },
      l: {
        base: "rounded-l"
      },
      full: {
        base: "rounded-full"
      }
    },
    disabled: {
      true: {
        base: "cursor-not-allowed"
      }
    },
    isLoading: {
      true: {}
    },
    intent: {
      primary: {
        base: "text-neutral-6 bg-primary-500 hover:bg-primary-400"
      },
      secondary: {
        base: "text-neutral-1 bg-neutral-7 dark:text-dark-neutral-1 dark:bg-dark-neutral-7 hover:bg-neutral-6 dark:hover:bg-neutral-6"
      },
      outline: {
        base: "text-neutral-6 dark:text-dark-neutral-6 hover:bg-neutral-1 dark:hover:bg-dark-neutral-1 outline outline-1 outline-neutral-6 dark:outline-dark-neutral-6 hover:outline-neutral-6 dark:hover:outline-dark-neutral-6"
      },
      text: {
        base: "text-neutral-6 dark:text-dark-neutral-6 bg-transparent hover:bg-neutral-1 dark:hover:bg-dark-neutral-1"
      }
    },
    size: {
      xs: {
        base: "p-2",
        icon: "w-5 h-5"
      },
      sm: {
        base: "p-2",
        icon: "w-6 h-6"
      },
      md: {
        base: "p-3",
        icon: "w-6 h-6"
      },
      lg: {
        base: "p-4",
        icon: "w-6 h-6"
      },
      xl: {
        base: "w-24 h-24",
        icon: "w-9 h-9"
      }
    }
  },
  compoundVariants: [
    {
      isLoading: true,
      class: {
        icon: "opacity-0"
      }
    },
    {
      size: ["xs", "sm", "md", "lg", "xl"],
      intent: "primary",
      disabled: true,
      class: {
        base: "text-neutral-5 bg-neutral-3 hover:bg-neutral-3 dark:text-dark-neutral-5 dark:bg-dark-neutral-3 dark:hover:bg-dark-neutral-3 cursor-not-allowed"
      }
    },
    {
      size: ["xs", "sm", "md", "lg", "xl"],
      intent: "secondary",
      disabled: true,
      class: {
        base: "text-neutral-0 bg-neutral-5 hover:bg-neutral-5 dark:text-dark-neutral-0 dark:bg-dark-neutral-5 dark:hover:bg-dark-neutral-5 cursor-not-allowed"
      }
    },
    {
      size: ["xs", "sm", "md", "lg", "xl"],
      intent: "outline",
      disabled: true,
      class: {
        base: "text-neutral-3 outline-neutral-3 hover:outline-neutral-3dark:text-dark-neutral-3 dark:outline-dark-neutral-3 dark:hover:outline-dark-neutral-3 cursor-not-allowed "
      }
    },
    {
      size: ["xs", "sm", "md", "lg", "xl"],
      intent: "text",
      disabled: true,
      class: {
        base: "text-neutral-3 bg-neutral-0 hover:bg-neutral-0dark:text-dark-neutral-3 dark:bg-dark-neutral-0 dark:hover:bg-dark-neutral-0 cursor-not-allowed"
      }
    }
  ],
  defaultVariants: {
    size: "sm",
    intent: "primary",
    disabled: false,
    isLoading: false,
    rounded: "full"
  }
});
var IconButton = (props) => {
  const {
    size,
    disabled,
    rounded,
    isLoading,
    intent,
    children,
    iconName,
    iconStyle = "mini"
  } = props;
  const { base, icon, spinner } = iconButtonStyle({
    isLoading,
    intent,
    disabled,
    size,
    rounded
  });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { className: base(), children: [
    isLoading && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: spinner(), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Spinner, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: icon(), children: children ? children : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      HeroIcon,
      {
        boxSize: "100%",
        iconStyle,
        name: iconName || "plus"
      }
    ) })
  ] });
};

// src/components/Text/index.tsx
var import_tailwind_variants3 = require("tailwind-variants");
var import_react_slot = require("@radix-ui/react-slot");
var import_jsx_runtime5 = require("react/jsx-runtime");
var textStyle = (0, import_tailwind_variants3.tv)({
  base: "font-body text-neutral-6 dark:text-dark-neutral-6",
  variants: {
    size: {
      "display-l": "font-heading text-9 font-bold leading-tight",
      "display-m": "font-heading text-8 font-bold leading-tight",
      "display-s": "font-heading text-7 font-bold leading-tight",
      "heading-l": "font-heading text-6 font-bold leading-normal",
      "heading-m": "font-heading text-5 font-bold leading-normal",
      "heading-s": "font-heading text-4 font-bold leading-normal",
      "title-l": "text-3 font-medium leading-normal",
      "title-m": "text-2 font-medium leading-normal",
      "title-s": "text-1 font-medium leading-snug",
      "title-xs": "text-0 font-medium leading-snug",
      "body-l": "text-3 leading-normal",
      "body-m": "text-2 leading-normal",
      "body-s": "text-1 leading-snug",
      "body-xs": "text-0 leading-snug"
    }
  }
});
var Text = (props) => {
  const { size, children, className, asChild, ...rest } = props;
  const Comp = asChild ? import_react_slot.Slot : "p";
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Comp, { className: textStyle({ size, className }), ...rest, children });
};

// src/components/HeroIconOne/index.tsx
var HeroIcons = __toESM(require("react-icons/hi"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var HeroIcon2 = (props) => {
  const { ...icons } = HeroIcons;
  const OutlineIcon2 = icons[props.icon] || icons["HiArchive"];
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    OutlineIcon2,
    {
      style: { width: "100%", height: "100%" },
      "aria-hidden": "true"
    }
  ) });
};
var HeroIconOne = ({
  name = "HiArchive",
  boxSize = "24px",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { width: boxSize, height: boxSize }, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(HeroIcon2, { icon: name }) });
};

// src/components/LucideIcon/index.tsx
var import_lodash2 = __toESM(require("lodash"), 1);
var LucideIcons = __toESM(require("lucide-react"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var LucideIcon = ({
  name = "activity",
  color,
  size,
  boxSize,
  fill = "none",
  strokeWidth,
  className,
  ...props
}) => {
  const iconNameCamelCase = import_lodash2.default.camelCase(name);
  const IconNameUpperCase = iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);
  const LucideIcon2 = LucideIcons[IconNameUpperCase] || LucideIcons["Activity"];
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    LucideIcon2,
    {
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
      className,
      ...props
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  FixedSizeSpinner,
  HeroIcon,
  HeroIconOne,
  IconButton,
  LucideIcon,
  Spinner,
  Text
});
