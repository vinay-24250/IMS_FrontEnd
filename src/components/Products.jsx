import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

 const timeout = setTimeout(() => {
    setMessage("");
  }, 2000);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/all")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((message) => {
        console.log(message);
        setMessage("Failed to load products");
        setLoading(false);
      });
  }, []);

  const updateProduct = ()=>{
    
  }
  return (
    <>
    <div className="flex-col justify-center place-items-center bg-emerald-100 h-screen">
      <h2 className="text-2xl font-bold pt-10 font-serif">Products</h2>
      <table className="mt-6">

          <tr className="bg-gray-400">
          <th className="font-serif text-center p-2 border-2 border-gray-800 w-40">Product ID</th>
            <th className="font-serif text-center p-2 border-2 border-gray-800 w-40">
              Product Name
            </th>
            <th className="font-serif text-center p-2 border-2 border-gray-800 w-40">Price</th>
            <th className="font-serif text-center p-2 border-2 border-gray-800 w-40">Rating</th>
            <th className="font-serif text-center p-2 border-2 border-gray-800 w-40">Quantity</th>
            <th className="font-serif text-center p-2 border-2 border-gray-800 w-40">Category</th>
          </tr>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.productId}>
                <td className="font-serif text-center p-2 border-2 border-gray-800 w-auto">{product.productId}</td>
                <td className="font-serif text-start p-2 border-2 border-gray-800 w-auto">{product.productName}</td>
                <td className="font-serif text-start p-2 border-2 border-gray-800 w-auto">{product.price}</td>
                <td className="font-serif text-start p-2 border-2 border-gray-800 w-auto">${product.rating}</td>
                <td className="font-serif text-start p-2 border-2 border-gray-800 w-auto">{product.quantity}</td>
                <td className="font-serif text-start p-2 border-2 border-gray-800 w-auto">{product.category}</td>
                  <button className="rounded-full bg-gray-100 text-center mx-3 mt-1 hover:bg-pink-00 transition delay-75 "
                >Update</button>
              </tr>
            ))
          ) : (
            <p className="text-center mt-20 font-serif text-red-600">There is no product present</p>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Products;
