import React, { useEffect, useState } from "react";
import axios from "axios";

const Remove = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  // Fetch Product by ID
  const fetchProduct = async () => {
    if (!productId) {
      setMessage("Please enter a Product ID.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.get(`http://localhost:8080/api/products/fetchById/${productId}`);
      if (!response.data) {
        // If API response is empty or undefined, show error
        setMessage("Product does not exist.");
        setTimeout(() => {
          setMessage("");
        }, 2000); // Hide after 2 seconds
        return;
      }
      setProduct(response.data); // Store fetched product
    } catch (error) {
      setProduct(null);
      setMessage("Product not found. Please check the ID.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  

  // Delete Product
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
      setProductId(""); // Clear input
    } catch (error) {
      setMessage("Error deleting product. Try again.")
      console.error("Delete error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
  
    <div className="flex flex-col items-center pt-20 h-[650px] w-screen bg-emerald-100">
      <div className="mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4 font-serif">Remove Product</h2>

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
            product ? "bg-red-500 hover:bg-red-600" : "bg-gray-400 cursor-not-allowed"
          } text-white font-[Roboto] h-10 w-40 text-xl rounded-3xl transition`}
        >
          
          {loading ? "Deleting..." : "Remove Product"}
        </button>
        </div>
      </div>

      {product && <div className="h-auto w-56 p-5 rounded-lg border-2 border-black mt-16 text-center font-serif text-blue-950"><ul>
          <li>Product ID : {product.productId}</li>
          <li>Product NAME : {product.productName}</li>
          <li>Category : {product.category}</li>
          </ul></div>}
    
      
     {message && <p className="text-red-700 text-xl font-serif mt-4">{message}</p>}
    </div>
  );
};

export default Remove;
