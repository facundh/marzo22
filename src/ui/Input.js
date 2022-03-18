import React from "react";


const Input = ({ label, register, required, className }) => {
  return (
    <>
      <div className={className}>
        <label>{label}</label>
        <input {...register(label, { required })} />
      </div>
    </>
  );
};

export default Input;
