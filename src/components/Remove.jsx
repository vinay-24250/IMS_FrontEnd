import axios from "axios";
import React, { useState } from "react";

const Remove = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchProduct = async () => {
    if (!productId) {
      setMessage("Please enter a Product ID.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.get(
        `http://localhost:8080/api/products/fetchById/${productId}`
      );
      if (!response.data) {
        setMessage("Product does not exist.");
        setTimeout(() => {
          setMessage("");
        }, 2000);
        return;
      }
      setProduct(response.data);
    } catch (error) {
      setProduct(null);
      setMessage("Product not found. Please check the ID.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  

  const handleDelete = async () => {
    if (!productId) {
      alert("Enter valid Id");
      return;
    }

    if (!product) {
      alert("No product found with this ID. Fetch the product first.");
      return;
    }

    setLoading(true);
    try {
      await axios.delete(`http://localhost:8080/api/products/${productId}`, {
        headers: { "Content-Type": "application/json" },
      });
      setProductId("");
    } catch (error) {
      setMessage("Error deleting product. Try again.");
      console.error("Delete error:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
    <div className="flex flex-col items-center pt-20 h-[580px] w-screen bg-emerald-100">
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4 font-serif">REMOVE PRODUCT</h2>

        <input
          className="h-14 w-[400px] rounded-full placeholder:text-center placeholder:text-black text-xl pl-5 pr-5 border border-gray-300"
          type="id"
          placeholder="Enter Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />

        <div className="flex gap-4 mt-4">
          <button
            onClick={fetchProduct}
            className="bg-blue-500 text-white font-[Roboto] h-10 w-40 text-xl rounded-3xl hover:bg-blue-600 transition"
          >
            Fetch Product
          </button>
          <button
            onClick={handleDelete}
            disabled={!product || loading}
            className={`${
              product
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-[Roboto] h-10 w-40 text-xl rounded-3xl transition`}
          >
            {loading ? "Deleting..." : "Remove Product"}
          </button>
          
        </div>
      </div>

      {product && (
        <table className="w-[800px] mt-16 border-black">
          <tr className="h-10 bg-gray-400">
            <th className="font-sans text-start px-4 border-x-4">Product ID</th>
            <th className="font-sans text-start px-4 border-x-4">
              Product Name
            </th>
            <th className="font-sans text-start px-4 border-x-4">Price</th>
            <th className="font-sans text-start px-4 border-x-4">Rating</th>
            <th className="font-sans text-start px-4 border-x-4">Quantity</th>
            <th className="font-sans text-start px-4 border-x-4">Category</th>
          </tr>
          <tr className="h-10">
            <td className="font-sans text-start px-4 border-x-4 bg-white">
              {product.productId}
            </td>
            <td className="font-sans text-start px-4 border-x-4 bg-white">
              {product.productName}
            </td>
            <td className="font-sans text-start px-4 border-x-4 bg-white">
              {product.price}
            </td>
            <td className="font-sans text-start px-4 border-x-4 bg-white">
              {product.rating}
            </td>
            <td className="font-sans text-start px-4 border-x-4 bg-white">
              {product.quantity}
            </td>
            <td className="font-sans text-start px-4 border-x-4 bg-white">
              {product.category}
            </td>
          </tr>
        </table>
      )}
      {message && (
        <p className="text-red-700 text-xl font-serif mt-4">{message}</p>
      )}
    </div>
    </>
  );
};

export default Remove;
