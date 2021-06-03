import React from "react";
import { useField } from "formik";

interface Props {
  name: string;
  label: string;
}

const Checkbox: React.FC<Props> = (props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div>
      <input type="checkbox" {...field} {...props} />
      <label> {props.label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Checkbox;
