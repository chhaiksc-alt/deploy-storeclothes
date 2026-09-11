
import ProductDetailListComponent from "@/components/product/productDetailListComponent";


export default async function DetailProductPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  return (
    <div>
      
       <ProductDetailListComponent id={id}/> 
      
    </div>
  );
}
