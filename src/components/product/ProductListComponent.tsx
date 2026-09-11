'use client'
import { useEffect, useState } from "react";
import ProductComponent, { ProductType } from "./ProductComponent";

import Link from "next/link";

export default function ProductListComponent() {
  // create state in product in component
  const [products, setprodcuts] = useState<ProductType[]>([]);
  useEffect(() => {
    async function fecthData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setprodcuts(products);
    }
    fecthData();
  }, []);
  return (
    <div className="grid grid-cols-4 p-4 gap-8">
      {
      products.map((items, _ ) => {
        return <Link key={_} href={`/products/${items.id}`}>
        <ProductComponent
          image={items?.image}
          title={items.title}
          price={items.price}
          description={items.description} />
        </Link>
        
      })
      }
    </div>
    
  );
}




