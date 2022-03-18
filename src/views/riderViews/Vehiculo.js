import React from 'react';

import Table from '../../components/table/Table'

const Vehiculo = () => {
  const vehiculos = [
    {
      type: 'Moto', modelo: ' Zanella', cc: 125 , matricula: 'aab111', estado: 'Disponible'
    },
    {
      type: 'Moto', modelo: ' Zanella', cc: 50 ,matricula: 'vva111' , estado: 'Disponible'
    },
    {
      type: 'Bici', modelo: ' Electrica', cc: '-', matricula: '-' , estado: 'Ocupado'
    },
  ];
  return (
    <>
     
       <Table
        type='vehiculos'
        data={vehiculos}
       />
     
    </>
  )
}

export default Vehiculo