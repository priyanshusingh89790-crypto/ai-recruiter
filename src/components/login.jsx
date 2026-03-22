import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", user.user);
      navigate("/onboarding");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-linear-to-br from-blue-400 to-blue-950">
      <div className="flex flex-col items-center justify-center w-1/3 h-1/2 bg-blue-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-white">Login</h1>
        <form
          onSubmit={login}
          className="flex flex-col items-center justify-center gap-4 w-full"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500 placeholder:text-gray-200 text-white bg-blue-700"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500 placeholder:text-gray-200 text-white bg-blue-700"
          />
          <button
            type="submit"
            className="bg-gray-100 hover:bg-gray-200 text-blue-900 font-bold rounded-md p-2 w-full cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="text-white mt-4">
          Don't have an account?{" "}
          <Link to="/" className="text-blue-400">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
