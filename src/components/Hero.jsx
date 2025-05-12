import React from 'react';

export default function Hero() {
  return (
    <>
      <section
        id="inicio"
        className="mt-20 relative w-full overflow-hidden min-h-[25vh] md:min-h-[80vh] flex items-center justify-center bg-center px-4"
      >
        <div className="absolute inset-0 w-full bg-amber-50 rounded-2xl" />
        <div className="relative z-10 max-w-4xl text-center">
          <h2 className="text-gray-800 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            Descubre el auténtico sabor de Chihuahua
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl">
            Quesos artesanales y jugos naturales que nutren cuerpo y alma.
          </p>
        </div>
      </section>
    </>
  );
}
