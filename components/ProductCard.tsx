import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: Product) => {
  return (
    <div className="group text-sm rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden relative">
        {product?.images && (
          <Link href={"/product"}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              alt="product image"
              priority
              className={`w-full h-72 object-contain overflow-hidden  hoverEffect ${!product.stock ? "cursor-auto" : "group-hover:scale-105"}`}
            />
          </Link>
        )}
        {!product.stock && (
          <div className="absolute top-0 left-0 w-full h-full bg-darkColor/65 flex items-center justify-center">
            <p className="font-semibold text-lg text-white/75">Out of stock</p>
          </div>
        )}
      </div>
      <div className="py-3 px-2 flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-md rounded-tl-none rounded-tr-none">
        <h2 className="font-semibold line-clamp-1">{product?.name}</h2>
        <p>{product?.productIntro}</p>
        <PriceView
          className="text-lg"
          price={product?.price}
          discount={product?.discount}
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
