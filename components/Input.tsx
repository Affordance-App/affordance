import React from "react";

interface InputProps extends React.ComponentPropsWithRef<"input"> {
  textarea?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  textarea,
  ...props
}) => {
  return React.createElement(textarea ? "textarea" : "input", {
    className: `bg-snow border border-lightGray rounded-lg placeholder-text-gray text-black px-4 py-2.5 focus:outline-none w-full ${className}`,
    ...props,
  });
};
