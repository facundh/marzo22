import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "../components/dashboard/DashBoard";
import LoginForm from "../components/form/LoginForm";
import Layout from "../components/Layout/Layout";
import Error from "../components/errormanejo/Error";
import Reportes from "../views/supervisor/Reportes";
import Vehiculos from "../views/supervisor/Vehiculos";
import Agenda from "../views/supervisor/Agenda";
import Alta from "../views/supervisor/Alta";
import Vehiculo from '../views/riderViews/Vehiculo'
import Historial from '../views/riderViews/Historial';
import Reserva from '../views/riderViews/Reserva';
import Turnos from '../views/riderViews/Turnos';
import Devoluciones from "../views/shift/Devoluciones";
import Incidencias from "../views/shift/Incidencias";
import Notificaciones from "../views/riderViews/Notificaciones";



const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/rider" element={<Layout rutas="true" />}>
          <Route path="reserva" element={<Reserva />} />
          <Route path="historial" element={<Historial />} />
          <Route path="vehiculo" element={<Vehiculo />} />
          <Route path="turnos" element={<Turnos />} />
          <Route path="notificaciones" element={<Notificaciones />} />
        </Route>

        <Route path="/supervisor"  element={<Layout rutas="true" />}>
          <Route path="alta" element={<Alta />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="vehiculos" element={<Vehiculos />} />
          
        </Route>

        <Route path="/shift"  element={<Layout rutas="true" />}>
          <Route path="devoluciones" element={<Devoluciones />} />
          <Route path="incidencias" element={<Incidencias />} />
          <Route index element={<DashBoard />} />
        </Route>

      
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
