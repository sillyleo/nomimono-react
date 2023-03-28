import React from 'react';
import { brandFonts } from "../../stitches.config";

brandFonts()

export const TailwindButton = (props: any) => {
  return (
    <button
      className="bg-sky-700
      hover:bg-sky-800 text-skyA-9 px-4 py-3 font-heading hover:font-heading font-bold"
    >
      {props.children}
    </button>
  );
};