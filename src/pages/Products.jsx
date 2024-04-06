import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { BASE_URL } from "../config/baseURL";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const fetchproducts = async () => {
    try {
      const res = await axios.get(BASE_URL + "/products");
      setProducts(res.data.products);
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
    return <div>Loading.....</div>;
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
