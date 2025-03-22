import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewProduct = () => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !productId ||
      !productName ||
      !rating ||
      !price ||
      !category ||
      !quantity
    ) {
      setMessage("Please fill all fields");
      setTimeout();
      return;
    }

    const newProduct = {
      productId,
      productName,
      rating,
      price,
      category,
      quantity,
    };

    setLoading(true);
    setMessage("");

    try {
      axios
        .post("http://localhost:8080/api/products/new", newProduct, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Product added successfully:", newProduct);
        })
        .catch((error) => {
          if (error.response) {
            console.error("Error response:", error.response.data);
            setMessage("Product with this ID already Exist");
          } else if (error.request) {
            setMessage("No response received:");
            console.error("No response received:", error.request);
          } else {
            console.error("Error setting up request:", error.message);
          }
        });

      setMessage("Product added successfully!");
      setTimeout(() => {
        setMessage("");
      }, 2000);

      setProductId("");
      setProductName("");
      setRating("");
      setPrice("");
      setCategory("");
      setQuantity("");
    } catch (error) {
      setMessage("Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-emerald-100 h-[580px] w-full flex-cols justify-items-center border-l-8 border-cyan-900">
      <div className="h-16 w-auto flex justify-center items-center py-10">
        <h2 className="text-black font-serif font-bold text-xl md:text-2xl lg:2xl mt-10">
          ADD NEW PRODUCT
        </h2>
      </div>

      <form
        onSubmit={() => {
          e.preventDefault();
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-5 mt-14 mb-10"
      >
        <input
          className="placeholder:text-black rounded-3xl font-thin border-spacing-1 h-10 font-mono px-3 w-48 text-sm md:w-96 md:text-base"
          type="text"
          placeholder="Enter Product Id (Numeric)"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <input
          className="placeholder:text-black rounded-3xl font-thin border-spacing-1 h-10 font-mono px-3 w-48 text-sm md:w-96 md:text-base"
          type="text"
          placeholder="Product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <div className="placeholder:text-black rounded-3xl font-thin border-spacing-1 h-10 font-mono px-3 w-96 bg-white flex items-center">
          <span className="">Rating :</span>
          {[1, 2, 3, 4, 5].map((index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={`text-md cursor-pointer transition ml-2 ${
                index <= rating ? "text-yellow-300" : "text-gray-400"
              }`}
              onClick={() => setRating(index)}
            />
          ))}
        </div>
        <input
          className="placeholder:text-black rounded-3xl font-thin border-spacing-1 h-10 font-mono px-3 w-48 text-sm md:w-96 md:text-base"
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="placeholder:text-black rounded-3xl font-thin border-spacing-1 h-10 font-mono px-3 w-48 text-sm md:w-96 md:text-base"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="placeholder:text-black rounded-3xl font-thin border-spacing-1 h-10 font-mono px-3 w-48 text-sm md:w-96 md:text-base"
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </form>

      {message && <p className="text-center text-red-500">{message}</p>}

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-slate-50 font-[Roboto] h-10 flex justify-center place-items-center transition delay-150 duration-300 ease-in-out my-11 rounded-3xl hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 hover:text-white"
        >
          {loading ? "Adding Product..." : "ADD PRODUCT"}
        </button>
      </div>
    </div>
  );
};

export default NewProduct;
