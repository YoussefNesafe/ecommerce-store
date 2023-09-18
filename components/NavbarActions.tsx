"use client"

import Button from "@/components/ui/Button"
import useCart from "@/hooks/useCart"
import useIsMounted from "@/hooks/useIsMounted"
import { ShoppingBag } from "lucide-react"

const NavbarActions = () => {
  const isMounted = useIsMounted();
  const cart = useCart()
  if (!isMounted) return null
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
      </Button>
    </div>
  )
}

export default NavbarActions