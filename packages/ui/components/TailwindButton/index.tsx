import React from 'react';


export const TailwindButton = (props: any) => {
  return (
    <button
      className="text-tomato-11 px-6 bg-teal-3"
    >
      {props.children}
    </button>
  );
};