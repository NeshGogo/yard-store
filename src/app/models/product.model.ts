export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  category: Category;
  description: string;
}

export interface Category{
  id: string;
  name: string;
}

export interface CreateProductDTO extends Omit<Product, 'id'|'category'>{
  categoryId: string;
}