import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutro text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h5 className="text-primario font-semibold mb-4">Quesos de los Campos</h5>
          <p className="text-secundario">Av. Principal S/N, Chihuahua, México</p>
          <p className="text-secundario">Contacto: +52 614 123 4567</p>
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
        <div>
          <h5 className="text-primario font-semibold mb-4">Síguenos</h5>
          <div className="flex space-x-4">
            <a href="#" className="text-acento2 hover:text-acento">Facebook</a>
            <a href="#" className="text-acento2 hover:text-acento">Instagram</a>
            <a href="#" className="text-acento2 hover:text-acento">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
