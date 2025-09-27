import Hero from './components/Hero';
import Products from './components/Products';
import Chese from './components/pages/Chese';
import Juice from './components/pages/Juice';
import Smoothie from './components/pages/Smoothie';
import Footer from './components/pages/Footer';
import Header from './components/Header';
import './App.css';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Products />
        <Chese />
        <Juice />
        <Smoothie />
      </main>
      <Footer />
    </div>
  );
}
