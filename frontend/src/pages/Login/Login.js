import { useState } from "react";
import "./Login.css";
import axios from "axios";  


export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    try {
      const res = await axios.post("http://localhost:5003/user/login", formData);
      console.log(res.data);
      alert("User Logged In Successfully!");
      // You could store the JWT token here, e.g., in localStorage or state
    } catch (error) {
      console.error(error.response.data);
      alert("Login Failed");
    }
  };
  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
