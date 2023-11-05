import {Link, useNavigate} from 'react-router-dom';

function Header({auth, setAuth}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/login');
  };

  return (
    <header className="bg-blue-500 p-4">
      <div className="flex flex-row mx-auto">
        <Link to="/" className="text-white text-2xl font-bold w-full">Napredne tehnike internet programiranja</Link>
        <div className="flex justify-end font-bold text-white w-full">
          {!auth ? (
          <>
          <Link to="/login" className="mr-2">Login</Link>
          <Link to="/register">Register</Link>
          </>) : (
            <Link to="/logout" onClick={handleLogout} className="mr-2">Logout</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
