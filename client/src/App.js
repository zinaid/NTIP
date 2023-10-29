// App.js
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesList from './routes/routesList'; 

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <RoutesList />
        <Footer />
    </div>
  );
}

export default App;
