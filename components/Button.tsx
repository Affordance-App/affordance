import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: string;
}

const colors = {
  black: "bg-black text-white",
  white: "bg-white border border-lightGray",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "white",
  ...props
}) => {
  return (
    <button
      className={`py-2.5 px-6 rounded-lg ${colors[color]} font-bold shadow-sm focus:outline-none focus:ring transition`}
      {...props}
    >
      {children}
    </button>
  );
};
