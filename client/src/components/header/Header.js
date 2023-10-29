import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="flex flex-row mx-auto">
        <Link to="/" className="text-white text-2xl font-bold w-full">Napredne tehnike internet programiranja</Link>
        <div className="flex justify-end font-bold text-white w-full">
          <Link to="/login" className="mr-2">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
