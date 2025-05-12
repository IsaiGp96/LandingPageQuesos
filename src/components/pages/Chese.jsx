import React from "react";
import { Card, CardContent } from '../ui/Card';

const products = [
    { id: 1, name: 'Queso Asadero Tortilla',    price: '$150.00', image: '' },
    { id: 2, name: 'Queso Laurel Barra',        price: '$158.00', image: './src/assets/images/laurel.png' },
    { id: 3, name: 'Queso Laurel De Rueda',     price: '$158.00', image: './src/assets/images/laurel.png' },
    { id: 3, name: 'Queso Los Pinos',           price: '$172.00', image: '' },
    { id: 4, name: 'Queso Panela',              price: '$136.00', image: '' },
    { id: 5, name: 'Queso Para Elote',          price: '$50.00',  image: '' },
    { id: 6, name: 'Queso Ranchero',            price: '$150.00', image: '' },
    { id: 7, name: 'Queso Requeson',            price: '$98.00',  image: '' },
    { id: 8, name: 'Queso Selecto',             price: '$178.00', image: '' },
    { id: 9, name: 'Queso Sello De Oro',        price: '$182.00', image: '' },
    { id: 10, name: 'Queso Sierra Verde',       price: '$166.00', image: '' },

];

export default function Chese() {

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