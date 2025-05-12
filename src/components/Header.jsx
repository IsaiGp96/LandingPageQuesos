import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Quesos', path: '/quesos' },
  { label: 'Jugos', path: '/jugos' },
  { label: 'Licuados', path: '/licuados' },
  { label: 'Contacto', path: '/contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div>
        <header className="fixed top-0 left-0 z-50 w-full text-gray-700 bg-white shadow-sm body-font">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0 text-shadow-lg/30">
              <h3>Quesos de los campos</h3>
            </div>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="h-6 w-6 text-secundario" /> : <Menu className="h-6 w-6 text-secundario" />}
            </button>
            <nav className="hidden md:flex space-x-6 transition delay-150 duration-300 ease-in-out">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="secundario hover:text-orange-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40">
              <nav className="flex flex-col items-center py-4 space-y-4">
                {navItems.map(item => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 font-medium hover:text-orange-500"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </header>
      </div>
      {/* <header className="mb-5 w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-md rounded-2xl relative">
      {/* Título 
      <div className="flex justify-between items-center w-full md:w-auto">
        {/* Botón de menú para móviles 
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="h-6 w-6 text-secundario" /> : <Menu className="h-6 w-6 text-secundario" />}
        </button>
      </div>

      {/* Navegación escritorio 
      <nav className="hidden md:flex space-x-6">
        {navItems.map(item => (
          <Link
            key={item.label}
            to={item.path}
            className="secundario hover:text-orange-500"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Menú móvil desplegable 
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md rounded-b-2xl z-10">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navItems.map(item => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="secundario hover:text-orange-500"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header> */}

    </>
  );
}
