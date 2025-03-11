import React, { useState } from 'react'

const Products = () => {

  const [productId, setProductId] = useState("")
  const fetchProduct = async () => {
    if (!productId) {
      setMessage("Please enter a Product ID.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.get(`http://localhost:8080/api/products/fetch/${productId}`);
      setProduct(response.data); // Store fetched product
      if(!product){
      setMessage("Empty data");}
    } catch (error) {
      setProduct(null);
      setMessage("Product not found. Please check the ID.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };



  return (
   <>
  
   </>
  )
}

export default Products
