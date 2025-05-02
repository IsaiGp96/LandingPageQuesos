import React from 'react';

export default function Hero() {
  return (
    <>
      <section
        id="inicio"
        className="relative h-60 bg-center"
      >
        <div className="absolute inset-0 bg-amber-50 rounded-2xl shadow-2xl" />
        <div className="relative flex flex-col items-start justify-center h-full text-white">
          <h2 className="secundario break-normal sm:text-xl md:text-6xl mb-4">
            Descubre el auténtico sabor de Chihuahua
          </h2>
          <p className="secundario text-lg md:text-2xl mb-6">
            Quesos artesanales y jugos naturales que nutren cuerpo y alma.
          </p>
        </div>
      </section>
    </>
  );
}
