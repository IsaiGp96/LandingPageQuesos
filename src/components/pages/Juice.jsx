import { Card, CardContent } from '../ui/Card';
import { juicies } from '../products/juicies';
import { ScrollReveal } from '../../hooks/ScrollReveal';

export default function Juice() {
  const precios = [
    { label: 'Jumbo', value: 100 },
    { label: 'Mediano', value: 60 },
    { label: 'Chico', value: 40 },
  ];

  return (
    <>
      <section id="jugos" className="py-16 px-6 container mx-auto">
        <ScrollReveal once trigger="middle" offset={40}>
          {(active) => (
            <h3 className={`terciario text-3xl font-bold mb-8 text-zinc-950 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Jugos frescos la vitamina
            </h3>
          )}
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {precios.map((p, i) => (
            <ScrollReveal key={p.label} once offset={40}>
              {(active) => (
                <h3
                  className={`terciario text-3xl font-bold mb-8 text-zinc-950 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {p.label}: ${p.value.toFixed(2)}
                </h3>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="jugos-lista" className="py-16 px-6 container mx-auto justify-items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {juicies.map((product, i) => (
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
