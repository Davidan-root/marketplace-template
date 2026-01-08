'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart'; // Hook custom con Zustand, genera después

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
}

export default function ProductCard({ id, title, price, imageUrl, description }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="w-full max-w-sm overflow-hidden transition-shadow hover:shadow-lg" role="article" aria-labelledby={`product-${id}-title`}>
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image src={imageUrl} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle id={`product-${id}-title`} className="text-lg font-semibold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">{description?.substring(0, 100)}...</p>
        <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="default" className="w-full" onClick={() => addToCart({ id, title, price, quantity: 1 })}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

