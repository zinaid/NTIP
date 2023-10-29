import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Dashboard from '../pages/dashboard/Dashboard'
import Body from '../components/body/Body'

function RoutesList() {
  return (
      <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      </Routes>
  );
}

export default RoutesList;