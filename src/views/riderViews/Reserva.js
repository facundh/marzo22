import  Table  from '../../components/table/Table'
import React from 'react'

const Reserva = () => {
  const data2 = [
    {
        id: 1,
        fecha: '12-12-12' ,
        estado:'Activo',
        vehiculo: '125cc',
        matricula:'aab334'
    },
    {
        id: 2,
        fecha: '12-12-12' ,
        estado:'Finalizado',
        vehiculo: '125cc',
        matricula:'aab334'
    },
  
  
  
  ]
  return (
    <>

<div>
    <Table 
      type='reserva'
      data={data2}
    />

</div>
    </>
  )
}

export default Reserva