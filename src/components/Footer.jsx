import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black opacity-50 text-neutro py-10 px-6 items-center rounded-t-2xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h5 className="text-primario font-semibold mb-4">Quesos de los Campos</h5>
          <p className="text-secundario">Av Fedor Dostoyevzki 303-E Col, Quintas Quijote II Etapa, Chihuahua 2000, 31136 Chihuahua, Chih.</p>
          <p className="text-secundario">Contacto: +52 614-123-4567</p>
        </div>
        <div>
          <h5 className="text-primario font-semibold mb-4">Enlaces</h5>
          <ul className="space-y-2">
            {['Políticas', 'Términos', 'Mapa del sitio'].map(item => (
              <li key={item}>
                <a href="#" className="text-secundario hover:text-acento">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
