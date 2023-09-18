import {create} from 'zustand';
import { Product } from '@/types';

type PreviewModalStore = {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => ({data, isOpen : true}),
  onClose: () => ({ isOpen : false}),
}))

export default usePreviewModal