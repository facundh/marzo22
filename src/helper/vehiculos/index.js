import Swal from 'sweetalert2'

export const reservarAuto = ( data ) => {
 
    return (
        Swal.fire({
            title: 'Confirma la reserva?',
            text: `El vehiculo que intenta reservar es ${data.type} - ${data.modelo} - ${data.cc} - ${data.matricula}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, reservar'
          }).then((result) => {

            if (result.isConfirmed) {
                console.log(data);
                // fn() Hacer peticion a firebase
                return Swal.fire(
                'Reservado!',
                'Tu vehiculo fue reservado',
                'success'
              )
            }
          })
    )
}
export const devolucionVehiculo = ( data ) => {
 
    return (
        Swal.fire({
            title: 'Confirma la devolución?',
            text: `El vehiculo que intenta devolver es ${data.type} -  ${data.matricula}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, aceptar devolución'
          }).then((result) => {

            if (result.isConfirmed) {
                console.log(data);
                // fn() Hacer peticion a firebase
                return Swal.fire(
                'Vehiculo devuelto!',
                'Tu vehiculo fue devuelto',
                'success'
              )
            }
          })
    )
}