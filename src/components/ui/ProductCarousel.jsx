import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardContent } from '../ui/Card';

export default function ProductCarousel({ products }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 center">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        showDots={false}
        arrows={true}
        keyBoardControl={false}
        containerClass="carousel-container"
        itemClass="px-4"
        renderDotsOutside={false}
      >
        {products.map((product) => (
          <Card key={product.id} className="p-4">
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-contain rounded-md p-2"
            />
            <CardContent>
              <h4 className="text-zinc-900 font-semibold text-lg">{product.name}</h4>
              <p className="secundario font-medium">{product.price}</p>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}
