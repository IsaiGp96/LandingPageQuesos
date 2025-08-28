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

        <ScrollReveal once offset={60}>
          {(active) => (
            <div className={`secundario gap-8 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <ProductCarousel products={cheess} itemsPerSlide={3} />
            </div>
          )}
        </ScrollReveal>
      </section>
    </>
  );
}
