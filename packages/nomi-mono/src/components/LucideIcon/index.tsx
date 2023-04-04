import _ from "lodash";
import * as LucideIcons from "lucide-react";
import React from "react";
import * as CSS from "csstype";

export interface IconProps {
  /*
   * Get icon name from https://lucide.dev/
   *
   * @type {string}
   * @memberOf IconProps
   * */
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  fill?: string;
  boxSize?: CSS.Properties["width"];
  className?: string;
}

export const LucideIcon = ({
                             name = "activity",
                             color,
                             size,
                             boxSize,
                             fill = "none",
                             strokeWidth,
                             className,
                             ...props
                           }: IconProps) => {
  const iconNameCamelCase = _.camelCase(name);
  const IconNameUpperCase =
    iconNameCamelCase.charAt(0).toUpperCase() + iconNameCamelCase.slice(1);

  // @ts-ignore
  const LucideIcon = LucideIcons[IconNameUpperCase] || LucideIcons["Activity"];
  return (
    <LucideIcon
      color={color}
      size={size ? size : 24}
      strokeWidth={strokeWidth}
      fill={fill}
      style={{
        flexShrink: 1,
        height: boxSize ? boxSize : undefined,
        width: boxSize ? boxSize : undefined,
        aspectRatio: "1"
      }}
      className={className}
      {...props}
    />
  );
};

// a function to return a array of all icons names from Lucide
export const getLucideIconList = () => {
  const { ...icons } = LucideIcons;
  // filter the icon names not ending with "Icon"
  const iconList = Object.keys(icons).filter((icon) => icon.endsWith("Icon"));
  // remove Icon from the end of the name
  const iconNames = iconList.map((icon) => icon.slice(0, -4));
  return iconNames;
};