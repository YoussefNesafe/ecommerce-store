"use client";

import PreviewModal from "@/components/PreviewModal";
import useIsMounted from "@/hooks/useIsMounted";


const ModalProvider = () => {
  const isMounted = useIsMounted()

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
}

export default ModalProvider;