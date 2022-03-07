
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashBoard from '../components/dashboard/DashBoard'
import LoginForm from '../components/form/LoginForm'
import RegisterForm from '../components/form/RegisterForm'
import Layout from '../components/Layout/Layout'
import PrivateRoute from './PrivateRoute'
import Error from '../components/errormanejo/Error'


const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Error />} />
        {/* <Route path='/' element={<PrivateRoute component={<Layout rutas='true'/>}/>}> */}
            <Route path="login" element={<LoginForm/>}/>
            <Route path="registro" element={<RegisterForm/>}/>
            <Route path="dashboard" element={<DashBoard />}/>
          {/* </Route> */}
      </Routes>
    </Router>
  )
}

export default Rutas