import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Dashboard from '../pages/dashboard/Dashboard'
import Reservations from '../pages/reservations/Reservations'
import Books from '../pages/books/Books'
import Body from '../components/body/Body'
import AddBook from '../pages/books/addBook'
import EditBook from '../pages/books/editBook'

function RoutesList({auth, setAuth}) {
  
  return (
      <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={auth ? <Dashboard /> : <Login setAuth={setAuth} />} />
        <Route path="login" element={<Login setAuth={setAuth} />} />
        <Route path="logout" element={<Login setAuth={setAuth} />} />
        <Route path="register" element={<Register />} />
        <Route path="books" element={<Books />} />
        <Route path="add-book" element={<AddBook />} />
        <Route path="edit-book/:id" element={<EditBook />} />
        <Route path="reservations" element={<Reservations />} />
      </Route>
      </Routes>
  );
}

export default RoutesList;