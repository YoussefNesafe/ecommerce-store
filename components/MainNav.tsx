
'use client'
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type MainNavProps = {
  data: Category[]
}

const MainNav = ({ data }: MainNavProps) => {

  const pathname = usePathname()
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))

  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {
        routes.map(({ active, href, label }) => <Link key={href} href={href} className={cn('tetx-sm text-neutral-500 font-medium transition-colors hover:text-black ', active && 'text-black')} >{label}</Link>)
      }
    </nav>
  )
}

export default MainNav