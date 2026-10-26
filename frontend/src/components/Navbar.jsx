import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.get("http://localhost:5000/api/auth/logout");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="font-bold">
        Auth Sytem
      </Link>
      <div>
        {user ? (
          <button
            className="bg-red-600 font-bold px-3 py-1 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            {" "}
            <Link to="/login" className="mx-2">
              Login
            </Link>{" "}
            <Link to="/register" className="mx-2">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
