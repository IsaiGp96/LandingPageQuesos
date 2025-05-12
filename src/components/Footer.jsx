import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black opacity-50 text-neutro py-10 px-6 rounded-t-2xl">
      <div className="container mx-auto gap-8">
        <div className='justify-self-center'>
          <h5 className="text-primario font-semibold mb-4">Quesos de los Campos</h5>
          <p className="text-secundario">Av Fedor Dostoyevzki 303-E Col, Quintas Quijote II Etapa, Chihuahua 2000, 31136 Chihuahua, Chih.</p>
          <p className="text-secundario">Contacto: +52 614-123-4567</p>
          <div className="w-full">
            <iframe
              className="w-full h-48 sm:h-64 rounded-2xl"
              loading="lazy"
              src="https://maps.google.com/maps?q=Av+Fedor+Dostoyevzki+303-E+Col,+Quintas+Quijote+II+Etapa,+Chihuahua+2000,+31136+Chihuahua,+Chih.&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
              title="Ubicación"
              aria-label="Ubicación Quesos de los Campos"
            ></iframe>
          </div>        </div>
      </div>
    </footer>
  );
}
