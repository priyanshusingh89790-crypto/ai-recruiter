import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
 import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { updateProfile } from "firebase/auth";
const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
const signup = async (e) => {
    e.preventDefault();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user =userCredential.user;
    await updateProfile(user, {displayName: name});
    await setDoc(doc(db, "users", user.uid), {
        name,
        email,
    });
    console.log("User created:", user.user);
    navigate("/onboarding");
  } catch (error) {
    console.log(error.message);
  }
};
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-linear-to-br from-blue-950 to-blue-400">
      <div className="flex flex-col items-center justify-center w-1/3 h-1/2 bg-blue-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-white">Create account</h1>
        <form onSubmit={signup}
          action=""
          className="flex flex-col items-center justify-center gap-4 w-full"
        >
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500 placeholder:text-gray-200 text-white bg-blue-700"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500 placeholder:text-gray-200 text-white bg-blue-700"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500 placeholder:text-gray-200 text-white bg-blue-700"
          />
          <button
            type="submit"
            className="bg-gray-200 hover:bg-gray-100 text-blue-900 font-bold rounded-md p-2 w-full cursor-pointer"
          >
            Signup
          </button>
        </form>
        <p className="text-white mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
