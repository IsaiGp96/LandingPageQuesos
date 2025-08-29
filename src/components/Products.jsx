import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { ScrollReveal } from '../hooks/ScrollReveal';

const products = [
  { id: 1, name: 'Queso Laurel', price: '150 MXN/kg', image: '/images/laurel.png' },
  { id: 2, name: 'Licuado Jumbo', price: '90 MXN', image: '/images/licuado.png' },
  { id: 3, name: 'Jugo Grande', price: '60 MXN', image: '/images/jugo.png' },
];

export default function Products() {
  return (
    <section
      id="productos-destacados" 
      className="py-16 px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto overflow-hidden"
    >
      {/* Título con trigger centrado */}
      <ScrollReveal once trigger="middle" offset={40}>
        {(active) => (
          <h3
            className={[
              "terciario text-2xl sm:text-3xl font-bold mb-8 text-zinc-950",
              "text-center sm:text-left transition-all duration-700 will-change-transform",
              active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            Nuestros Productos
          </h3>
        )}
      </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <ScrollReveal key={product.id} once offset={80}>
            {(active) => (
              <Card
                className={[
                  "bg-neutro-claro flex flex-col transition-all duration-700 will-change-transform hover:shadow-xl",
                  active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 object-contain rounded-t-xl p-4"
                  loading="lazy"
                />
                <CardContent className="flex flex-col flex-grow justify-between gap-4 p-4">
                  <div>
                    <h4 className="text-zinc-900 font-semibold text-lg sm:text-xl mb-1">
                      {product.name}
                    </h4>
                    <p className="text-zinc-900 font-bold text-base sm:text-lg">
                      {product.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
