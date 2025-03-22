import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import UpdateProduct from "./updateProduct";
import { useNavigate, useNavigationType } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/all")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setMessage("Failed to load products");
        setLoading(false);
      });

    const timeout = setTimeout(() => {
      setMessage("");
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const generateReport = () => {
    if (products.length === 0) {
      alert("No products available for report.");
      return;
    }

    const doc = new jsPDF();
    doc.text("Products Report", 80, 10);

    const tableColumn = [
      "Product ID",
      "Name",
      "Price",
      "Rating",
      "Quantity",
      "Category",
    ];
    const tableRows = products.map((item) => [
      item.productId,
      item.productName,
      item.price,
      item.rating,
      item.quantity,
      item.category,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("products_report.pdf");
  };

  return (
    <div className="flex-col justify-center place-items-center bg-emerald-100 min-h-screen p-6">
      <h2 className="text-2xl font-bold pt-4 font-serif text-center">
        Products
      </h2>

      <table className="mt-6 w-full max-w-4xl mx-auto bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-400">
            <th className="font-serif text-center p-2 border border-gray-800">
              Product ID
            </th>
            <th className="font-serif text-center p-2 border border-gray-800">
              Product Name
            </th>
            <th className="font-serif text-center p-2 border border-gray-800">
              Price
            </th>
            <th className="font-serif text-center p-2 border border-gray-800">
              Rating
            </th>
            <th className="font-serif text-center p-2 border border-gray-800">
              Quantity
            </th>
            <th className="font-serif text-center p-2 border border-gray-800">
              Category
            </th>
            <th className="font-serif text-center p-2 border border-gray-800">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.productId} className="text-center">
                <td className="p-2 border border-gray-800">
                  {product.productId}
                </td>
                <td className="p-2 border border-gray-800">
                  {product.productName}
                </td>
                <td className="p-2 border border-gray-800">
                  {product.price} Rupees
                </td>
                <td className="p-2 border border-gray-800">{product.rating}</td>
                <td className="p-2 border border-gray-800">
                  {product.quantity}
                </td>
                <td className="p-2 border border-gray-800">
                  {product.category}
                </td>
                <td className="p-2 border border-gray-800">
                <button
  onClick={() => navigate(`/update/${product.productId}`)}
  className="bg-stone-400 font-[Roboto] text-sm h-7 transition delay-150 duration-300 ease-in-out rounded-3xl hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 hover:text-white"
>
  Update
</button>
</td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center p-4 text-red-600">
                There are no products available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <button
        onClick={generateReport}
        className="bg-stone-400  font-[Roboto] h-10 flex justify-center place-items-center transition delay-150 duration-300 ease-in-out my-11 rounded-3xl hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 hover:text-white"
      >
        📄 Download Stock Report
      </button>
    </div>
  );
};

export default Products;
