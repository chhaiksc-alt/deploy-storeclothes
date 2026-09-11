

import Image from "next/image";
export type ProductType= {
    image: string;
    title: string;
    price : number;
    description: string;
    id?:number;
    category?:string;

};

export default function ProductComponent(props: ProductType) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image
        width={500}
        height={500}
        className="w-full object-cover"
        src={props.image}
        alt="Product Image"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{props.title}</h3>
        <p className="text-gray-600 text-sm mt-2">
          {props.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-orange-500">${props.price}</span>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

