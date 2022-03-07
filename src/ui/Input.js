import React from "react";

const Input = ({
  className,
  type,
  labelText,
  change,
  labelClass,
  name,
  register,
  required,
}) => {
  return (
    <>
      <label className={labelClass}>{labelText}</label>
      <input
        className={className}
        type={type}
        name={name}
        {...register(name, { required: required })}
        onChange={change}
      />
    </>
  );
};

export default Input;
