"use client"
import useIsMounted from '@/hooks/useIsMounted'
import { priceFormatter } from '@/lib/utils'

const Currency = ({ value }: { value: String | Number }) => {
  const isMounted = useIsMounted();
  if (!isMounted) {
    return null
  }
  return (
    <div className='font-semibold'>
      {priceFormatter(Number(value))}
    </div>
  )
}

export default Currency