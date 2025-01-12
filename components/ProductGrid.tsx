"use client";

import React, { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import ProductCard from "./ProductCard";
import NoProducts from "./NoProducts";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const query = `*[_type == "product" && variant ==$variant] | order(name asc)`;
  const params = { variant: selectedTab.toLocaleLowerCase() };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await client.fetch(query, params);
        setProducts(res);
      } catch (error) {
        console.log("Product fetching error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTab]);

  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div className="flex flex-col items-center py-10 justify-center min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
          <motion.div className="flex items-center space-x-2 text-blue-600/75">
            <Loader2 className="animate-spin w-5 h-5" />
            <span className="text-xl font-semibold">
              Products are loading...
            </span>
          </motion.div>
        </div>
      ) : (
        <>
          {products?.length ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10  w-full">
              {products?.map((item) => {
                return (
                  <div key={item._id}>
                    <ProductCard product={item} />
                  </div>
                );
              })}
            </div>
          ) : (
            <NoProducts selectedTab={selectedTab} />
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
