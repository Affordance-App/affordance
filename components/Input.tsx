import React from "react";
import { useField } from "formik";

interface InputProps extends React.ComponentPropsWithRef<"input"> {
  textarea?: boolean;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  className,
  textarea,
  error,
  ...props
}) => {
  return React.createElement(textarea ? "textarea" : "input", {
    className: `bg-snow focus:bg-white focus:shadow-sm border border-lightGray rounded-lg placeholder-text-gray text-black px-4 py-2.5 focus:outline-none w-full ${className} ${
      textarea ? "resize-none" : ""
    }`,
    ...props,
  });
};

export const InputField: React.FC<InputProps> = ({
  textarea,
  error: _,
  ...props
}) => {
  const [field, meta] = useField(props as any);

  return (
    <div className={`h-full w-full`}>
      <Input
        error={meta.touched && !!meta.error}
        textarea={textarea}
        {...field}
        {...props}
      />
      {meta.touched && !!meta.error ? (
        <p className="mt-1 small text-primary">{JSON.stringify(meta.error)}</p>
      ) : null}
    </div>
  );
};
