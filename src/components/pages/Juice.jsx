import { Card, CardContent } from '../ui/Card';
import {juicies} from '../products/juicies';

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
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {juicies.map(product => (
                        <Card key={product.id} className="bg-neutro-claro shadow-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-50 w-50 place-self-center object-fill rounded-t-lg"
                            />
                            <CardContent>
                                <h4 className="text-zinc-900 font-semibold mb-2">{product.name}</h4>
                                <p className="secundario mb-4">{product.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
}