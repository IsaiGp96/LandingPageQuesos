import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const products = [
  { id: 1, name: 'Queso Laurel', price: '150 MXN/kg', image: '/src/assets/images/laurel.png' },
  { id: 2, name: 'Licuado Jumbo', price: '90 MXN', image: '/src/assets/images/licuado.png' },
  { id: 3, name: 'Jugo Grande', price: '60 MXN', image: '/src/assets/images/jugo.png' },
];

export default function Products() {
  return (
    <section id="productos" className="py-16 px-6 container mx-auto">
      <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Nuestros Productos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <Card key={product.id} className="bg-neutro-claro shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="h-50 w-50 place-self-center object-fill rounded-t-lg"
            />
            <CardContent>
              <h4 className="text-zinc-900 font-semibold mb-2">{product.name}</h4>
              <p className="secundario mb-4">{product.price}</p>
              <Button className="w-full">Ver más</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
