import React from "react";

const Button = ({ className, type, text, func }) => {
  return (
    <button className={className} type={type} onClick={func && (() => func()) }>
      {text}
    </button>
  );
};

export default Button;
