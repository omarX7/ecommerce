import { List } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <div className="p-1 hover:border hover:shadow-md rounded-lg border-teal-400 hover:cursor-pointer">
      <Link href={`/product-details/${product?.id}`} className="">
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="bannar-card"
          width={400}
          height={350}
          className="rounded-t-lg h-52 object-cover"
        />
        <div className="flex items-center p-3 justify-between bg-gray-800 rounded-b-lg">
          <div className="">
            <h2 className="text-[20px] font-medium line-clamp-1">
              {product?.attributes?.title}
            </h2>
            <h2 className="text-gray-500 text-[14px] flex gap-1 items-center">
              <List className="w-5 h-5" />
              {product?.attributes?.category}
            </h2>
          </div>
          <h2>{product?.attributes?.price}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
