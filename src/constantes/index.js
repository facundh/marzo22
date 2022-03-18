import { devolucionVehiculo, reservarAuto } from "../helper/vehiculos";


export const Historial = [
    {
        name:'Fecha Entrega',
        selector: row => row.fechaEntrega
    
    },
    {
       name:'Fecha Reserva',
       selector: row => row.fechaReserva 
    },
    {
        name:'Vehiculo',
        selector: row => row.vehiculo
    },

    {
        name:'Matricula',
        selector: row => row.matricula
    }
];

export const Reserva = [
    {
        name:'Fecha',
        selector: row => row.fecha 
    
    },
    {
        name:'Vehiculo',
        selector: row => row.vehiculo
    },
    {
        name:'Matricula',
        selector: row => row.matricula
    },
    {
        name:'Estado',
        selector: row => row.estado
    }
];
export const Vehiculo = [
    
    {
        name:'Vehiculo',
        selector: row => row.vehiculo
    },
    {
        name:'Matricula',
        selector: row => row.matricula
    },
    {
        name:'Estado',
        selector: row => row.estado
    }
];
export const Turnos = [
    
    {
        name:'Fecha Inicio',
        selector: row => row.fechaInicio
    },
    {
        name:'Fecha fin',
        selector: row => row.fechaFin
    },
   
];

export const Vehiculos = [
    { name: 'Tipo',
      selector: row => row.type  
    },
    { name: 'Modelo',
      selector: row => row.modelo  
    },
    { name: 'CC',
      selector: row => row.cc  
    },
    { name: 'Matricula',
      selector: row => row.matricula  
    },
    {
        name:'Estado',
        selector: row => row.estado,
        sortable: true
    },
  
    {
        button: true,
        cell: (row) => (
            <button onClick={() => reservarAuto(row)} disabled={row.estado === 'Ocupado'} > Reservar </button>
        )
    }
    

];

export const Incidencias = [
    { name: 'tipo',
      selector: row => row.type  
    },
    { name: 'text',
      selector: row => row.text  
    },
    { name: 'estado',
      selector: row => row.estado  
    },
    { name: 'fecha',
      selector: row => row.fecha  
    },
    {
        button: true,
        cell: (row) => (
            <button onClick={() => reservarAuto(row)} disabled={row.estado === 'Ocupado'} > Aceptar </button>
        )
    }
]

export const Devoluciones = [
    {
        name: 'Tipo',
        selector: row => row.type
    },
    {
        name: 'Matricula',
        selector: row => row.matricula
    },
    {
        name: 'Estado',
        selector: row => row.estado
    },
    {
        button: true,
        cell: (row) => (
            <button onClick={() => devolucionVehiculo(row)} > Confirmar </button>
        )
    }
]


//  Hook Navbar Items

export const Supervisor = [
    { text: "Reportes", link: "/supervisor/reportes" },
    { text: "Vehiculos", link: "/supervisor/vehiculos" },
    { text: "Registro de Trabajador", link: "/supervisor/alta" },
    { text: "Asingar Turnos", link: "/supervisor/agenda" }
  ];
 export  const Rider = [
    { text: "Historial", link: "/rider/historial" },
    { text: "Reserva", link: "/rider/reserva" },
    { text: "Vehiculo", link: "/rider/vehiculo" },
    { text: "Turnos", link: "/rider/turnos" },
    { text: "Notificaciones", link: "/rider/notificaciones" },
  ];

  export const Shift = [
      {text:'Devolucion', link:"/shift/devoluciones"},
      {text:'Incidencias', link:"/shift/incidencias"}

  ]