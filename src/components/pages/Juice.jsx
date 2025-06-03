import { Card, CardContent } from '../ui/Card';
import { juicies } from '../products/juicies';
import ProductCarousel from '../ui/ProductCarousel';

export default function Juice() {

    return (
        <>
            <section id="productos" className="py-16 px-6 container mx-auto">
                <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Jugos frescos la vitamina</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Jumbo: $100.00</h3>
                    <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Mediano: $60.00</h3>
                    <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Chico: $40.00</h3>
                </div>
                <div className="overflow-x-hidden" style={{ textalign: '-webkit-center' }}>
                    <ProductCarousel products={juicies} itemsPerSlide={3} />

                </div>
            </section>
        </>
    );
}