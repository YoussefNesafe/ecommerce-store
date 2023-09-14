export type Billboard = {
  id: String;
  label: String;
  imageUrl: String
}

export type Category = {
  id: String;
  name: String;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: String;
  price: String
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Image{
  id: string;
  url:String;
}

export interface Size {
  id: String;
  name: String;
  value: String
}
export interface Color {
  id: String;
  name: String;
  value: String
}