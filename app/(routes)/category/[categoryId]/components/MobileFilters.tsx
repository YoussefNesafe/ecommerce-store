"use client"
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Color, Size } from "@/types"
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./Filter";


type Props = {
  colors: Color[];
  sizes: Size[];
}

const MobileFilters = ({ colors, sizes }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog onClose={onClose} open={open} as="div" className="relative z-40 lg:hidden" >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">

            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter
                valueKey="sizeId"
                name="Sizes"
                data={sizes}
              />
              <Filter
                valueKey="colorId"
                name="Colors"
                data={colors}
              />
              <hr className="my-8" />
              <Button onClick={onClose} className="w-full">Submit</Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilters