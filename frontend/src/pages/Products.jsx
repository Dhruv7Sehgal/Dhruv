import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const fetchproducts = async () => {
    try {
      const res = await axios.get("/api/products");
      setProducts(res.data);
      // console.log(res.data.products);
    } catch (errors) {
      setErrors(errors.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <svg
            fill="none"
            class="w-6 h-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>

          <div>Loading ...</div>
        </div>
      </div>
    );
  }
  if (errors) {
    return <div>{errors}</div>;
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
      {products.map((item, key) => (
        <ProductCard key={key} product={item} />
      ))}
    </div>
  );
};

export default Products;
