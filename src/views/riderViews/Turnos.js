import React from 'react'
import Table from '../../components/table/Table'

const Turnos = () => {
  const turnos = [
    {
        id: 1,
        fechaInicio: '12-12-12' ,
        fechaFin:'13-13-13'

    },
    {
        id: 2,
        fechaInicio: '12-12-12' ,
        fechaFin:'13-13-13'
    },
  
  
  
  ]
  return (
    <>
    
    <div>

    <Table 
       type= 'turnos'
       data={turnos}
 
    />
    </div>
    </>
  )
}

export default Turnos