import React from 'react';
import Gallery from 'react-photo-gallery';
import { p1, p10, p11, p12, p2, p3, p4, p5, p6, p7, p8, p9 } from '../Assets';

// Array of product images
const ProductGallery = [
  { id: 1, name: 'Chair', imageUrl: p1, width: 4, height: 3 },
  { id: 2, name: 'Table', imageUrl: p2, width: 1, height: 1 },
  { id: 3, name: 'Sofa', imageUrl: p3, width: 3, height: 4 },
  { id: 4, name: 'Desk', imageUrl: p4, width: 4, height: 3 },
  { id: 5, name: 'Bed', imageUrl: p5, width: 1, height: 1 },
  { id: 6, name: 'Lamp', imageUrl: p6, width: 3, height: 4 },
  { id: 7, name: 'Cabinet', imageUrl: p7, width: 4, height: 3 },
  { id: 8, name: 'Shelf', imageUrl: p8, width: 1, height: 1 },
  { id: 9, name: 'Armchair', imageUrl: p9, width: 3, height: 4 },
  { id: 10, name: 'Rug', imageUrl: p10, width: 4, height: 3 },
  { id: 11, name: 'Curtain', imageUrl: p11, width: 1, height: 1 },
  { id: 12, name: 'Mirror', imageUrl: p12, width: 3, height: 4 },
];

const Products = () => {
  // Map products into the format react-photo-gallery expects
  const photos = ProductGallery.map((product) => ({
    src: product.imageUrl,
    width: product.width,
    height: product.height,
    alt: product.name,
  }));
  console.log();
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="bg-white p-2 rounded-lg shadow-md">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
