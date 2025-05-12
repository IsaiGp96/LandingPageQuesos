import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const products = [
  { id: 1, name: 'Queso Laurel', price: '150 MXN/kg', image: '/images/laurel.png' },
  { id: 2, name: 'Licuado Jumbo', price: '90 MXN', image: '/images/licuado.png' },
  { id: 3, name: 'Jugo Grande', price: '60 MXN', image: '/images/jugo.png' },
];

export default function Products() {
  return (
    <section id="productos" className="py-16 px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto overflow-hidden">
      <h3 className="terciario text-2xl sm:text-3xl font-bold mb-8 text-zinc-950 text-center sm:text-left">
        Nuestros Productos
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map(product => (
          <Card key={product.id} className="bg-neutro-claro flex flex-col transition hover:shadow-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-56 object-contain rounded-t-xl p-4"
            />
            <CardContent className="flex flex-col flex-grow justify-between gap-4 p-4">
              <div>
                <h4 className="text-zinc-900 font-semibold text-lg sm:text-xl mb-1">{product.name}</h4>
                <p className="text-zinc-900 font-bold text-base sm:text-lg">{product.price}</p>
              </div>
              <Button className="w-full mt-auto">Ver más</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
