import React from "react";
import ProductItem from "./ProductItem";
import { v4 as uuidv4 } from 'uuid';

const ProductList = ({productList}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {productList.map(item => (
        <div key={uuidv4()}><ProductItem product={item} /></div>
      ))}
    </div>
  );
};

export default ProductList;
