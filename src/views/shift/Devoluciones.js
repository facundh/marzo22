import React from 'react'
import Table from '../../components/table/Table'

const Devoluciones = () => {

  const devoluciones = [
    {type: 'Moto', matricula:'vva111', estado:'Devuelto'},
    {type: 'Bici', matricula:'-', estado:' No devuelto'}
  ]
  return (
    <>
      <Table
       type='devoluciones'
       data={devoluciones}
       />
    </>
  )
}

export default Devoluciones