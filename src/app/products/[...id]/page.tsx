
import ProductDetailListComponent from "@/components/product/productDetailListComponent";
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ id: number }>
 
}

async function getProductById(id: number) {
   try{
    const res = await fetch(`${process.env.FAKESTORE_API}/products/${id}`);
  if (!res.ok) return null;
  return res.json();
   } catch(error){
    console.log(error)
   }
}
 
// dynamic metadata & opengraph 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params;
 
  // fetch data
  const product = await getProductById(id);

 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [`${product.image}`, ...previousImages],
    },
  }
}

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
