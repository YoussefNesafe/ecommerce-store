"use client"

import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./IconButton"
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from "./Currency"
import { useRouter } from "next/navigation"


const ProductCard = ({ category, color, id, images, isFeatured, name, price, size }: Product) => {
  const router = useRouter()
  const handleClick = () => router.push(`/product/${id}`)
  const ImageAndActions = () => {
    return (<div className="aspect-square rounded-xl bg-gray-100 relative">
      <Image src={images?.[0]?.url as string} fill alt="product" className="aspect-square object-cover rounded-md" />
      <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
        <div className="flex gap-x-6 justify-center">
          <IconButton onClick={() => { }} icon={<Expand size={20} className="tetx-gray-600" />} />
          <IconButton onClick={() => { }} icon={<ShoppingCart size={20} className="tetx-gray-600" />} />
        </div>
      </div>
    </div>)
  }
  const Description = () => {
    return (
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="tetx-sm text-gray-500">{category.name}</p>
      </div>
    )
  }
  const Price = () => {
    return (
      <div className="flex items-center justify-between">
        <Currency value={price} />
      </div>
    )
  }
  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <ImageAndActions />
      <Description />
      <Price />
    </div>
  )
}

export default ProductCard