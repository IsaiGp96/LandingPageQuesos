import { Card, CardContent } from '../ui/Card';
import { smoothies } from "../products/smoothies";
import { cereal, lacteos } from '../products/cereal';
import ProductCarousel from '../ui/ProductCarousel';

export default function Smoothie() {

    return (
        <>
            <section id="productos" className="py-16 px-6 container mx-auto">
                <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Arma tu licuado nutritivo</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                    <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Jumbo: $100.00</h3>
                    <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Grande: $60.00</h3>
                </div>
                <div className="secundario gap-8">
                    <ProductCarousel products={smoothies} itemsPerSlide={3} />
                </div>
            </section>
            <section id="productos" className="py-16 px-6 container mx-auto justify-items-center">
                <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Cereales para acompañar</h3>
                <div className="secundario gap-8">
                    <ProductCarousel products={cereal} itemsPerSlide={3} />
                </div>
            </section>
            <section id="productos" className="py-16 px-6 container mx-auto justify-items-center">
                <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">El lacteo de tu preferencia</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {lacteos.map(product => (
                        <Card key={product.id} className="bg-neutro-claro shadow-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-44 w-56 place-self-center object-fill rounded-t-lg"
                            />
                            <CardContent>
                                <h4 className="text-zinc-900 font-semibold mb-2">{product.name}</h4>
                                <p className="secundario mb-4">{product.price}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
}