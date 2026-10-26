import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register({ setUser }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form,
      );
      setUser(res.data);
      navigate("/login");
    } catch (error) {
      setError("Invalid Credential!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          className="border p-2 w-full mb-3 "
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="border p-2 w-full mb-3 "
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="border p-2 w-full mb-3 "
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          className="bg-blue-600 text-white p-2 w-full"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  );
}
