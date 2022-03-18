import React from 'react'

const useAlert = () => {

    

    const alertaVehiculos = (fn) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {

            if (result.isConfirmed) {
                fn()
                return Swal.fire(
                'Reservado!',
                'Tu vehiculo fue reservado',
                'success'
              )
            }
          })
    }
  return (
    <div>useAlert</div>
  )
}

export default useAlert