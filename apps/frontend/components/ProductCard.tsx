'use client';

// Temporalmente comentado hasta instalar dependencias necesarias
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import { ShoppingCart } from 'lucide-react';
// import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
}

export default function ProductCard({ id, title, price, imageUrl, description }: ProductCardProps) {
  // const { addToCart } = useCart();

  return (
    <div className="w-full max-w-sm overflow-hidden border rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full bg-gray-200">
        {/* <Image src={imageUrl} alt={title} fill className="object-cover" /> */}
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description?.substring(0, 100)}...</p>
        <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
      </div>
      <div className="p-4 pt-0">
        <button 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={() => console.log('Add to cart:', { id, title, price, quantity: 1 })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

