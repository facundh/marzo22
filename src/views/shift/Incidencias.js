import React from 'react'
import Table from '../../components/table/Table'

const Incidencias = () => {

  const incidencias = [
    {type: 'Reporte', text:'accidente en la via publica con peaton', estado:'Pendiente', fecha:'12-12-12'},
    {type: 'Reporte', text:'accidente en la via publica con auto', estado:'Cerrado', fecha:'11-11-11'},
  ]
  return (
    <>
      <Table 
        type='incidencias'
        data={incidencias}
      />
    </>
  )
}

export default Incidencias