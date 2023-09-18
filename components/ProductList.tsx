import { Product } from '@/types';
import React from 'react'
import NoResults from '@/components/ui/NoResults';
import ProductCard from './ui/ProductCard';

type Props = {
  title: string;
  items: Product[]
}

const ProductList = ({ items, title }: Props) => {
  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-3xl'>{title}</h3>
      {items.length === 0 ? <NoResults /> : ''}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((item, idx) => <ProductCard key={`${idx}`} data={item} />)}
      </div>
    </div>
  )
}

export default ProductList