import { useState } from "react";
import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/register",
        formData
      );

      alert("User Registered Successfully");

      console.log(response.data);

      // clear form
      setFormData({
        username: "",
        email: "",
        password: ""
      });

    } catch (error) {

      console.log(error);

      alert("Registration Failed");
    }
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "100px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px"
      }}
    >

      <h2>Register Page</h2>

      <form onSubmit={handleSubmit}>

        {/* username */}
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px"
          }}
        />

        {/* email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px"
          }}
        />

        {/* password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px"
          }}
        />

        {/* button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer"
          }}
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;