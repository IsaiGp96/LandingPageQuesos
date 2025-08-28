import { useState } from 'react';
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
    </>
  );
}
