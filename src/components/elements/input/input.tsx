import React from "react";
import { useField } from "formik";

interface Props {
  name: string;
  type?: string;
  multiline?: boolean;
  label?: string;
}

interface InputProps {
  multiline?: boolean;
}

const Comp: React.FC<InputProps> = ({ multiline, ...props }) =>
  multiline ? (
    <textarea
      className={"border-2 border-gray-light w-full mt-10 min-h-100"}
      {...props}
    />
  ) : (
    <input {...props} className={"border-2 border-gray-light w-full"} />
  );

const Input: React.FC<Props> = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Comp {...field} {...props} />
      {props.label && <label className={"block text-sm mt-10 text-gray"}>{props.label}</label>}
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
};

export default Input;
