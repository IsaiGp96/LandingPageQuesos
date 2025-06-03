import { Card, CardContent } from '../ui/Card';
import { cheess } from "../products/cheeses";
import ProductCarousel from '../ui/ProductCarousel';

export default function Chese() {

    return (
        <>
            <section id="productos" className="py-16 px-6 container mx-auto">
                <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Quesos frescos</h3>
                <div className="secundario gap-8">
                    <ProductCarousel products={cheess} itemsPerSlide={3} />
                </div>
            </section>
        </>
    );
}