import { useState } from "react";
import "./Login.css";
import axios from "axios";  
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    try {
      const res = await axios.post("http://localhost:5003/user/login", formData);
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      alert("User Logged In Successfully!");
      navigate('/');
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
        <h4>Username : </h4>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
         <h4>Password : </h4>
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
