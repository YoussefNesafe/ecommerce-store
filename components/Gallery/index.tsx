"use client"
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { Image as ImageType } from '@/types'
import GallerTab from './GallerTab'


type Props = {
  images: ImageType[]
}
const Gallery = ({ images }: Props) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (<GallerTab key={image.id} image={image} />))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Gallery