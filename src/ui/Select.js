import React from 'react'

const Select = ({className, change, name, required, text }) => {
  return (
    <>
    <select
      className={className}
      onChange={change}
      name={name}
      required={required}
    >{text}</select>
    </>
  )
}

export default Select


