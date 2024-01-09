import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesList from './routes/routesList';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function App() {
  const [auth, setAuth] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    // Function to fetch data
    const verifyToken = async () => {
      const authToken = Cookies.get('authData');
      if(authToken){
        try {
          const response = await fetch('http://localhost:3001/api/auth/verify-token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${authToken}`,
            },
          });
          const data = await response.json();
          setAuth(data.token); // Set auth to token
        } catch (error) {
          setAuth(false); // Set auth to false if there is an error or the token is invalid
          navigate("/login");
        }
      }else{
        console.log("Empty token")
        setAuth(false); 
      }
    };

    // Call the verify token function
    verifyToken();
  }, [navigate]); // Empty dependency array means this effect runs once after the initial render
  
  return (
    <div className="flex flex-col min-h-screen">
        <Header auth={auth} setAuth={setAuth} />
        <RoutesList auth={auth} setAuth={setAuth} />
        <Footer />
    </div>
  );
}

export default App;
