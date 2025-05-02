import React from "react";
import { Card, CardContent } from '../ui/Card';

const products = [
    { id: 1, name: 'Laurel', price: '150 MXN/kg', image: './src/assets/images/laurel.png' },
    { id: 2, name: 'Ranchero', price: '90 MXN', image: './src/assets/images/laurel.png' },
    { id: 3, name: 'Los pinos', price: '60 MXN', image: './src/assets/images/laurel.png' },
    { id: 4, name: 'Asadero', price: '60 MXN', image: './src/assets/images/laurel.png' },
  ];

export default function Chese ()  {

    return (
        <>
            <section id="productos" className="py-16 px-6 container mx-auto">
                <h3 className="terciario text-3xl font-bold mb-8 text-zinc-950">Quesos frescos</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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