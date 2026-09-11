"use client";
import { useEffect, useState } from "react";
import ProductComponent, { ProductType } from "./ProductComponent";
import ProductDetailComponent from "./ProductDetailComponent";
type ProductIDType = {
  id: number;
};

export default function ProductDetailListComponent({ id }: ProductIDType) {
  // create state in product in component
  const [products, setprodcuts] = useState<ProductType>();
  useEffect(() => {
    async function fecthData() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const products = await response.json();
      setprodcuts(products);
    }
    fecthData();
  }, [id]);
  return (
    <ProductDetailComponent 
    image={products?.image as string} 
    title={products?.title as string} 
    price={products?.price as number} 
    description={products?.description as string}
    category={products?.category}
    />
    
  )
  
}
