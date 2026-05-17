import { useState } from "react";
import axios from "axios";

function Product() {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: ""
  });

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Submit Product
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://127.0.0.1:8000/products",
        formData
      );

      console.log(res.data);

      alert("Product Added Successfully");

      // Clear form
      setFormData({
        name: "",
        description: "",
        price: "",
        quantity: ""
      });

    } catch (err) {

      console.log(err);

      alert("Failed To Add Product");

    }

  };

  return (
    <div>

      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>

        {/* Product Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Product Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br /><br />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
          value={formData.price}
          onChange={handleChange}
        />

        <br /><br />

        {/* Quantity */}
        <input
          type="number"
          name="quantity"
          placeholder="Enter Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Product
        </button>

      </form>

    </div>
  );
}

export default Product;