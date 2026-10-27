import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", form);
      setUser(res.data);
      navigate("/");
    } catch (error) {
      setError("Invalid Credential!");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
          Log in
        </button>
      </form>
    </div>
  );
}
