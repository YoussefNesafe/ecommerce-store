import { Category } from "@/types";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  return res.json();
}


export const getCategoryById = async (id: string): Promise<Category> => {
  const URL_ID = `${URL}/${id}`;
  const res = await fetch(URL_ID);
  return res.json();
}

