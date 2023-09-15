import { Product } from "@/types";
import qs from 'query-string'


type Query = {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

const filteredProducts = ({ url, query }: { url: string, query: Query }) => {
  const res = qs.stringifyUrl({
    url,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured
    }
  })
  return { url: res }
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;
  const res = await fetch(filteredProducts({ url, query }).url);
  return res.json();
}

export const getProductById = async (id: string): Promise<Product> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;
  const res = await fetch(url);
  return res.json();
}