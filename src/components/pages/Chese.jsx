import ProductCarousel from '../ui/ProductCarousel';
import { ScrollReveal } from '../../hooks/ScrollReveal';
import { cheess } from "../products/cheeses";

const priceList = [
  { id: 'sierra-verde', name: 'Queso Sierra Verde', price: 166 },
  { id: 'sello-oro', name: 'Queso Sello De Oro', price: 182 },
  { id: 'selecto', name: 'Queso Selecto', price: 178 },
  { id: 'para-elote', name: 'Queso Para Elote', price: 50 },
  { id: 'los-pinos', name: 'Queso Los Pinos', price: 172 },
  { id: 'requeson', name: 'Queso Requeson', price: 98 },
  { id: 'asadero-tortilla', name: 'Queso Asadero Tortilla', price: 150 },
  { id: 'ranchero', name: 'Queso Ranchero', price: 150 },
  { id: 'panela', name: 'Queso Panela', price: 136 },
  { id: 'laurel-barra', name: 'Queso Laurel Barra', price: 158 },
  { id: 'laurel-rueda', name: 'Queso Laurel De Rueda', price: 158 },
];

const fmt = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  minimumFractionDigits: 2,
});

export default function Chese() {
  return (
    <section id="quesos" className="py-16 px-6 container mx-auto">
      {/* Título */}
      <ScrollReveal once trigger="middle" offset={40}>
        {(active) => (
          <h3
            className={`terciario text-3xl font-bold mb-8 text-zinc-950 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Quesos frescos
          </h3>
        )}
      </ScrollReveal>

      {/* Listado de productos y precios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
        {priceList.map((item, i) => (
          <ScrollReveal key={item.id} once offset={60}>
            {(active) => (
              <div
                className={`flex items-baseline justify-between border-b border-zinc-200 py-3 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="text-zinc-900">{item.name}</span>
                <span className="text-zinc-900 font-semibold">{fmt.format(item.price)}</span>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>

    </section>
  );
}