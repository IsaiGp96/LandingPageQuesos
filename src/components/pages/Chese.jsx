import { Card, CardContent } from '../ui/Card';
import { cheess } from "../products/cheeses";
import ProductCarousel from '../ui/ProductCarousel';
import { ScrollReveal } from '../../hooks/ScrollReveal';

export default function Chese() {
  return (
    <>
      <section id="quesos" className="py-16 px-6 container mx-auto">
        <ScrollReveal once trigger="middle" offset={40}>
          {(active) => (
            <h3 className={`terciario text-3xl font-bold mb-8 text-zinc-950 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Quesos frescos
            </h3>
          )}
        </ScrollReveal>
       <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {cheess.map((product, i) => (
            <ScrollReveal key={product.id} once offset={80}>
              {(active) => (
                <Card
                  className={`bg-neutro-claro shadow-lg transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-44 w-56 place-self-center object-cover rounded-t-lg"
                    loading="lazy"
                  />
                  <CardContent>
                    <h4 className="text-zinc-900 font-semibold mb-2">{product.name}</h4>
                    <p className="secundario mb-4">{product.price}</p>
                  </CardContent>
                </Card>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
