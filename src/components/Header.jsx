import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const navItems = ['Inicio', 'Quesos', 'Jugos', 'Licuados', 'Contacto'];

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-6 bg-white shadow-md rounded-t-2xl">
      <h1 className="secundario text-xl font-bold">Quesos de los Campos</h1>
      <nav className="hidden md:flex space-x-6">
        {navItems.map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s/g, '')}`}
            className="secundario hover:text-orange-500"
          >
            {item}
          </a>
        ))}
      </nav>
      <Button title="Próximamente">Haz tu pedido</Button>
      <Menu className="md:hidden h-6 w-6 text-secundario" />
    </header>
  );
}
