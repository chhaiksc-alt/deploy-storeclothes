import { Metadata } from "next";

// static metadata & opengraph
export const metadata: Metadata = {
  title: 'HomePage',
  description: "LEGOBiz is the platform which review about the e-commerce products which supported with the store of clothes, trouser, for Cambodia.",
  keywords:"Clothes for women, Clothes for men, Clothes for kid, E-commerce, discount, popular T-Shirt, online shop.",
  openGraph:{
    title: {
    template:'%s | LEGOBiz',
    default: 'LEGOBiz'
  },
    description: "LEGOBiz is the platform which review about the e-commerce products which supported with the store of clothes, trouser, for Cambodia.",
    images:['M2_Thumbnail.png']
  }
};

export default function Home() {
  return (
    <h1>hello world</h1>
  );
}
