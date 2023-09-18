"use client";

import usePreviewModal from "@/hooks/usePreviewModal";
import Modal from "@/components/ui/Modal";
import Gallery from "./Gallery";
import ProductInfo from "./ProductInfo";



const PreviewModal = () => {
  const { isOpen, onClose, data: product } = usePreviewModal();

  if (!product) {
    return null;
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <ProductInfo {...product} />
        </div>
      </div>
    </Modal>
  );
}

export default PreviewModal;