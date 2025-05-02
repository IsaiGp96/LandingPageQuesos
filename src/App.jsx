import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'


import Home from './pages/Home';
import Chese from './components/pages/Chese';
import Jugos from './components/pages/Juice';
// import Licuados from './components/pages/Licuados';
// import Contacto from './components/pages/Contacto';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quesos" element={<Chese />} />
            <Route path="/jugos" element={<Jugos />} />
            {/* <Route path="/licuados" element={<Licuados />} />
            <Route path="/contacto" element={<Contacto />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
