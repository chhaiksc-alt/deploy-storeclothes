
// static metadata & opengraph
export const metadata: Metadata = {
  title: 'Products',
  description: "LEGOBiz Product Page will mentioned about listing popular product, arrival and modern clothes for men, women, and kids",
  keywords:"Sell, clothing, T-Shirt for men, T-shirt for women, discount products, free shiping, payment, credit card.",
  openGraph:{
    title: 'Products',
    description: "LEGOBiz Product Page will mentioned about listing popular product, arrival and modern clothes for men, women, and kids",
    images:['M2_Thumbnail.png']
  }
};
import ProductListComponent from "@/components/product/ProductListComponent";
import { Metadata } from "next";


export default function page() {
  return (
    <div>
      <ProductListComponent/>
    </div>
  );
}
