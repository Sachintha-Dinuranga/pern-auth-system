import { Link } from "react-router-dom";

export default function Home({ user, error, loading }) {
  // 1. Show a loading state while fetching
  if (loading) {
    return <p className="text-gray-600">Loading profile...</p>;
  }

  // 2. Show the error if the fetch failed
  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  // 3. Show the user data or the login prompt
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      {user ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center ">
          <h2 className="text-2xl text-gray-800 font-bold mb-4">
            Welcome {user.data.name}!
          </h2>
          <p className="text-gray-600">Email: {user.data.email}</p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center ">
          <h2 className="text-2xl font-bold text-gray-800 mt-1 ml-1 mb-6">
            Please login or register
          </h2>
          <div className="flex flex-col gap-y-4">
            <Link
              to="/login"
              className="w-full text-white bg-blue-500 p-3 ml-2 rounded-md hover:bg-blue-600 font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="w-full text-white bg-blue-300 p-3 ml-2 rounded-md hover:bg-blue-400 font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
