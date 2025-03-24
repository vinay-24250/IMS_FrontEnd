import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { productId } = useParams(); // Get productId from URL
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productName: "",
    price: "",
    rating: "",
    category: "",
    quantity: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
          setTimeout(() => {
            setMessage("");
          }, 2000);
          return;
        }
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        setProduct(null);
        console.log(error);
        setMessage("Error Finding the product.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.put(
        `http://localhost:8080/api/products/update/${productId}`,
        product,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setMessage("Product updated successfully!");
      setTimeout(() => {
        navigate("/Products"); // Redirect back to product list
      }, 2000);
    } catch (error) {
      console.error("Update failed:", error);
      setMessage("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-emerald-100 p-6 font-serif">
      <h2 className="text-2xl font-bold text-center mb-6 font-serif">
        Update Product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 grid grid-col-1 rounded-lg w-96"
      >
        <div>
          <label className="block mb-2">Product Name:</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-full shadow-md shadow-pink-600 focus:outline-none"
            required
          />
        </div>

        <div>
          {" "}
          <label className="block mb-2">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-full shadow-md shadow-pink-600 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Rating:</label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            min="1"
            max="5"
            className="w-full p-2 mb-3 border rounded-full shadow-md shadow-pink-600 focus:outline-none"
            required
          />
        </div>

        <div>
          {" "}
          <label className="block mb-2">Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-full shadow-md shadow-pink-600 focus:outline-none"
            required
          />
        </div>

        <div>
          {" "}
          <label className="block mb-2">Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded-full shadow-md shadow-pink-600 focus:outline-none"
            required
          />
        </div>

        {message && <p className="text-center text-red-500 mb-3">{message}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 font-[Roboto] h-10 w-full text-xl flex justify-center place-items-center transition delay-150 duration-300 ease-in-out mt-8 rounded-3xl hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 hover:text-white"
        >
          {loading ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
