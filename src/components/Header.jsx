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
    <header className="mb-5 w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-md rounded-2xl relative">
      {/* Título */}
      <div className="flex justify-between items-center w-full md:w-auto">
        {/* Botón de menú para móviles */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="h-6 w-6 text-secundario" /> : <Menu className="h-6 w-6 text-secundario" />}
        </button>
      </div>

      {/* Navegación escritorio */}
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

      {/* Menú móvil desplegable */}
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
    </header>
  );
}
