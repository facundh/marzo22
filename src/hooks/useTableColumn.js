import  { useEffect, useState } from 'react'
import {Devoluciones, Historial, Incidencias, Reserva, Turnos, Vehiculos} from '../constantes';

const useTableColumn = (param) => {

    const [column, setColumn] = useState([]);
  
   
    useEffect(() => {
        setColumn(getColumn(param))
    },[param]);

  
    const getColumn = (param) => {
      
        switch (param) {
            case 'historial':
              return Historial;   
            
            case 'reserva':
                return Reserva;

            case 'turnos':
                return Turnos;

            case 'vehiculos':
                return Vehiculos;

            case 'incidencias':
                return Incidencias;
            
            case 'devoluciones':
                return Devoluciones;
            
        }
    }
   

  return {
        column
   }
  
}

export default useTableColumn;