import { Link, Mic, Camera, ArrowUp } from "lucide-react";
import { useState } from "react";
import { analyzeExperience, generateSummary } from "./utils/fakeAI";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../firebase/config";
import {auth} from "../firebase/config";
import {useNavigate} from "react-router-dom";
const Builder = () => {
    const [input, setInput] = useState("");
    const [message, setMessage] = useState([]);
    const [role, setRole] = useState("");
    const [skills, setSkills] = useState([]);
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSend = async () => {
        setLoading(true);
        setTimeout(() => {
            navigate("/profile");
        }, 5000);
        const userText = input.trim();
        if (!userText) return;
        const newMessage = { text: userText, sender: "user" };
        setMessage ((prev) => [...prev, newMessage]);
         const aiResponse = analyzeExperience(userText);
   const sum = generateSummary({role: aiResponse.role, skills: aiResponse.skills});
   setRole(aiResponse.role);
   setSkills(aiResponse.skills);
   setSummary(sum);

if (user) {
  await setDoc(doc(db, "users", user.uid), {
    role: aiResponse.role,
    skills: aiResponse.skills,
    summary: sum,
  });
}
        setInput("");

  };
  const user = auth.currentUser;
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
      handleSend();
    }
  };
 
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-linear-to-br from-blue-400 to-blue-800">
            {loading && <div className="absolute bg-blur-md backdrop-blur-md bg-white/10 z-10 h-screen w-screen flex items-center justify-center"> <p className="text-white font-semibold text-2xl">Loading...</p></div>}
            <div className="flex flex-col items-start justify-center rounded-lg p-8 gap-10 bg-blue-800 w-1/2 h-1/2">
            <div className="overflow-y-scroll scrollbar-hide w-full h-full gap-10 ">
                <h1 className=" border p-4 border-gray-300 rounded-t-2xl rounded-br-2xl mb-4 text-white w-fit "> Hi 👋 Tell me about your experience, and I’ll build your profile. </h1>
                {message.map((msg, index) => (
                    <div key={index} className="flex items-end justify-end w-full mb-4">
                        <p className=" border p-4 border-gray-300 rounded-t-2xl rounded-bl-2xl text-white ">{msg.text}</p>
                    </div>
                ))}
                </div>
                <div className="relative w-full border border-gray-300 rounded-full h-14 p-2 text-white bg-blue-700 mb-4">
                <input onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type="text" className=" w-[87%] h-full outline-none placeholder:text-white p-2" placeholder="Type your message..." />
                <div className="flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-2">
                 <Link size={20}/>
                    <Mic size={20}/>
                    <Camera size={20}/>
                  {input && <div onClick={handleSend} className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center cursor-pointer">
                        <ArrowUp size={20}/>
                    </div>}
                   
                </div>
                </div>
            </div>
        </div>
    )
}

export default Builder