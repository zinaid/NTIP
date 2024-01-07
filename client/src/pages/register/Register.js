import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [formData, setFormData] = useState({
      username: '',
      password: '',
      confirm_password: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Make a POST request to register the user
        const response = await fetch('http://localhost:3001/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to register user');
        }

        navigate('/login');
                
      } catch (error) {
        console.error('Error registering user:', error.message);
      }
    };

    return (
      <div className="flex flex-col justify-center items-center p-4 min-w-[600px]">
        <h1 className="text-2xl">REGISTER</h1>
        <form onSubmit={handleSubmit} id="register_form" className="w-full">
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Username</label>
            <input className="border-2 bg-gray-100" 
                  name="username" 
                  placeholder ="Username" 
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Password</label>
            <input className="border-2 bg-gray-100" 
                  name="password" 
                  placeholder="Password" 
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Confirm password</label>
            <input className="border-2 bg-gray-100" 
                  name="confirm_password" 
                  placeholder="Password" 
                  type="password" 
                  value={formData.confirm_password}
                  onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
            />
          </div>
          <div className="p-2 flex flex-col">
            <button type="submit" for="register_form" className="w-full bg-green-500 text-white text-xl p-2">Register</button>
          </div>
        </form>
      </div>
    )
  }

  export default Register;
