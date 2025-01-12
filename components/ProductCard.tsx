import { Product } from "@/sanity.types";
import React from "react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return <div>{product.name}</div>;
};

export default ProductCard;
