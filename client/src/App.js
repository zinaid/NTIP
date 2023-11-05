import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesList from './routes/routesList';

import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
        <Header auth={auth} setAuth={setAuth} />
        <RoutesList auth={auth} setAuth={setAuth} />
        <Footer />
    </div>
  );
}

export default App;
