import { Card, CardContent } from '../ui/Card';
import { smoothies } from "../products/smoothies";
import { cereal, lacteos } from '../products/cereal';
import { ScrollReveal } from '../../hooks/ScrollReveal';
export default function Smoothie() {
  const precios = [
    { label: 'Jumbo', value: 100 },
    { label: 'Grande', value: 60 },
  ];

  return (
    <>
      <section id="smoothies" className="py-16 px-6 container mx-auto">
        <ScrollReveal once trigger="middle" offset={40}>
          {(active) => (
            <h3 className={`terciario text-3xl font-bold mb-8 text-zinc-950 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Arma tu licuado nutritivo
            </h3>
          )}
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {precios.map((p, i) => (
            <ScrollReveal key={p.label} once offset={40}>
              {(active) => (
                <h3
                  className={`terciario text-3xl font-bold mb-8 text-zinc-950 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {p.label}: ${p.value.toFixed(2)}
                </h3>
              )}
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {smoothies.map((product, i) => (
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

      <section id="cereales" className="py-16 px-6 container mx-auto justify-items-center">
        <ScrollReveal once trigger="middle" offset={40}>
          {(active) => (
            <h3 className={`terciario text-3xl font-bold mb-8 text-zinc-950 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Cereales para acompañar
            </h3>
          )}
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cereal.map((product, i) => (
            <ScrollReveal key={product.id} once offset={80}>
              {(active) => (
                <Card
                  className={`bg-neutro-claro shadow-lg transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-44 w-56 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                  <CardContent>
                    <h4 className="text-zinc-900 font-semibold mb-2">{product.name}</h4>

                  </CardContent>
                </Card>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="lacteos" className="py-16 px-6 container mx-auto justify-items-center">
        <ScrollReveal once trigger="middle" offset={40}>
          {(active) => (
            <h3 className={`terciario text-3xl font-bold mb-8 text-zinc-950 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              El lácteo de tu preferencia
            </h3>
          )}
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {lacteos.map((product, i) => (
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
