import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config/baseURL.js";
import axios from "axios";

export const Productdetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const fecthproductdetails = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/products/${id}`);
      setProducts(res.data);
    } catch (errors) {
      setErrors(errors.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthproductdetails();
  }, [id]);

  if (loading) {
    return <div>Loading......</div>;
  }
  if (errors) {
    return (
      <div>
        <div className="py-10">
          <div className="text-center">
            <p className="text-base font-semibold text-black">404</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-600">{errors}</p>
            <div className="mt-4 flex items-center justify-center gap-x-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Go back
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="overflow-hidden justify-between">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={products.thumbnail}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
              {products.brand}
            </h2>
            <h1 className="my-4 text-3xl font-semibold text-black">
              {products.title}
            </h1>
            <p className="leading-relaxed">{products.description}</p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">Color</span>
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">
                ${products.price}
              </span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
