import React from 'react';
import { Button } from '../components/ui/Button';

export default function Hero() {
  return (
    <>
      <section
        id="inicio"
        className="relative h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-b-2xl" />
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-20 text-white">
          <h2 className="primario text-4xl md:text-6xl font-serif mb-4">
            Descubre el auténtico sabor de Chihuahua
          </h2>
          <p className="secundario text-lg md:text-2xl mb-6">
            Quesos artesanales y jugos naturales que nutren cuerpo y alma.
          </p>
          <div>
            <Button variant="outline">Ver productos</Button>
          </div>
        </div>
      </section>
    </>
  );
}
