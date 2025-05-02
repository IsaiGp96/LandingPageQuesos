import React from "react";
import { Card, CardContent } from '../ui/Card';

const products = [
    { id: 1, name: 'Los tres mosqueteros', price: '150 MXN/kg', image: './src/assets/images/jugo.png' },
    { id: 2, name: 'Vampiro', price: '90 MXN', image: './src/assets/images/jugo.png' },
    { id: 3, name: 'Naranja', price: '60 MXN', image: './src/assets/images/jugo.png' },
    { id: 4, name: 'Verde', price: '60 MXN', image: './src/assets/images/jugo.png' },
];

export default function Juice() {

    return (
        <>
            <section id="productos" className="py-16 px-6 container mx-auto">
                <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Jugos frescos la vitamina</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Jumbo:</h3>
                    <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Mediano:</h3>
                    <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Chico:</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {products.map(product => (
                        <Card key={product.id} className="bg-neutro-claro shadow-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-50 w-50 place-self-center object-fill rounded-t-lg"
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