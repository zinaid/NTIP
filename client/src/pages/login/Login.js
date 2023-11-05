import { useNavigate } from 'react-router-dom';

function Login({setAuth}) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      setAuth(true);
      navigate('/');
    }

    return (
      <div className="flex flex-col justify-center items-center p-4 min-w-[600px]">
        <h1 className="text-2xl">LOGIN</h1>
        <form onSubmit={handleSubmit} id="login_form" className="w-full">
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Username</label>
            <input className="border-2 bg-gray-100" name="username" placeholder ="Username" type="text" />
          </div>
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Password</label>
            <input className="border-2 bg-gray-100" name="password" placeholder="Password" type="password" />
          </div>
          <div className="p-2 flex flex-col">
            <button type="submit" className="w-full bg-green-500 text-white text-xl p-2">Login</button>
          </div>
        </form>
      </div>
    );
  }
  
export default Login;
 