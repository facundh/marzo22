import React from "react";

import Table from '../../components/table/Table'

const Historial = () => {

  

const data = [
  {
      id: 1,
      fechaEntrega: '12-12-12' ,
      fechaReserva: '1988',
      vehiculo: '125cc',
      matricula:'aab334'
  },
  {
      id: 2,
      fechaEntrega: '12-12-12' ,
      fechaReserva: '1988',
      vehiculo: '125cc',
      matricula:'aab334'
  },



]

  return (
    <>
     <Table
            type='historial'
            data={data}
        />
    </>
  );
};

export default Historial;
