import React from 'react'
import DataTable from 'react-data-table-component';
import useTableColumn from '../../hooks/useTableColumn';

const Table = ({type, data}) => {
    
  const {column} = useTableColumn(type);
  console.log(column);
 

  return (
    <>
          <DataTable
            columns={column}
            data={data}
           
           
        />
    </>
  )
}

export default Table