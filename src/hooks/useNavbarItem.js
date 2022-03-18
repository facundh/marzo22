import  { useEffect, useState } from "react";
import { Rider, Shift, Supervisor } from "../constantes";

const useNavbarItem = (param) => {

    const [data, setData]  = useState([]);
    

    useEffect(() => {
        setData(getData(param))
    }, [param]);
    
  

  const getData = (param) => {
   switch (param) {
     case 'supervisor':
       return Supervisor;
      
    case 'rider':
      return Rider;

    
    case 'shift':
      return Shift;
   
   
   }
  };


  return {
      data
  };
};

export default useNavbarItem;
