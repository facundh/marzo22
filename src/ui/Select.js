import React from 'react'

const Option = ({label, value}) => {
  return <option value={value}>{label}</option>
}

const Select = ({className , onChange, onBlur, name, label }, ref ) => {
  return (
    <>
    <div className={className}>
      <label for='validationCustom04' className='form-label'>
        {label}
      </label>
      <select
      className='form-select'
      id='validationCustom04'
      name={name} ref={ref} onChange={onChange} onBlur={onBlur}
      >
       <option value='Rider'>Rider</option>
       <option value='Shift'>Shift Lead</option>

      </select>
      <div className='invalid-feedback'>Seleccione rol asignado</div>
    </div>
    
    </>
  )
}

export default Select


