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

// this is other way to handled partial. Is usefull when we don't want to brake the pattern of DTO.
export interface UpdateProductDTO extends Partial<CreateProductDTO> {

}