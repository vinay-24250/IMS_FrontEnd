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
        setMessage("This Product ID does not exist. Please check and try again!");
        setProduct(null)
        setTimeout(() => {
          setMessage("");
        }, 2000);
        return;
      }
      setProduct(response.data);
    } catch (error) {
      setProduct(null);
      setMessage("Error Finding the product.");
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
      setProduct(null)
    } catch (error) {
      setMessage("Error deleting product. Try again.");
      console.error("Delete error:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
    <div className="flex flex-col items-center pt-20 h-[580px] w-screen bg-emerald-100 font-serif">
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4 font-serif">REMOVE PRODUCT</h2>

        <input
          className="h-12 focus:outline-none w-[400px] rounded-full placeholder:text-center placeholder:text-black text-xl pl-5 pr-5 border border-gray-300 shadow-md shadow-pink-600"
          type="id"
          placeholder="Enter Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />

        <div className="flex gap-3 mt-2">
          <button
            onClick={fetchProduct}
            className="bg-blue-500 font-[Roboto] h-12 w-40 text-xl flex justify-center place-items-center transition delay-150 duration-300 ease-in-out mt-8 rounded-3xl hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 hover:text-white"
          >
            Fetch Product
          </button>
          <button
            onClick={handleDelete}
            disabled={!product || loading ||product.productId!=productId}
            className={`${
              product
                ? "bg-blue-500 font-[Roboto] h-12 w-40 text-xl flex justify-center place-items-center text-black mt-8 transition delay-150 duration-300 ease-in-out rounded-3xl hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 hover:text-white"
                : "bg-gray-300 cursor-not-allowed font-[Roboto] h-12 w-40 text-xl flex justify-center place-items-center"
            } text-black font-[Roboto] h-10 w-40 text-xl rounded-3xl transition mt-8`}
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
        <p className="text-red-700 text-xl font-serif mt-6">{message}</p>
      )}
    </div>
    </>
  );
};

export default Remove;
