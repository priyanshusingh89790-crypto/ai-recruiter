import { User } from "lucide-react";
import {useEffect, useState} from "react";
import {auth,db} from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if(!user){
                navigate("/");
            }
            const docref = doc(db, "users", user.uid);
            const docSnap = await getDoc(docref);
            if(docSnap.exists()){
                setProfile(docSnap.data());
            }
        })
        return unsubscribe;
    }, []);
    console.log(profile);
    return (
        <div className="flex flex-col h-screen w-full p-10 gap-5">
            <div className="flex flex-col items-end justify-start bg-linear-to-br from-blue-200 to-blue-800 w-full h-[30%] rounded-2xl">
                <div onClick={handleLogout} className="text-white pt-10 pr-10 cursor-pointer group"><button className="text-red-500 bg-white p-2 rounded-md group-hover:bg-red-100 cursor-pointer group-hover:text-red-500 transition-all duration-300">Logout</button></div>
                <p className="text-white text-end w-full pr-10">{auth.currentUser?.email ||"No email"}</p>

                <div className="absolute top-[18%] left-[5%] bg-linear-to-br from-blue-800 to-blue-200 rounded-full p-5 text-blue-100"><User size={100}/></div>
            </div>
            <div className="flex flex-col items-start justify-start pt-17 pl-[4.5%] pr-[4.5%] bg-linear-to-br from-blue-800 to-blue-200 border gap-10 border-b-blue-800 border-l-blue-800 border-gray-400 w-full h-full rounded-2xl">
                <h1 className="text-2xl font-semibold text-white">{auth.currentUser?.displayName ||"No name"}</h1>
                <div className="flex flex-col items-start justify-start gap-10 h-full w-full">
                    <p className=" font-semibold text-lg items-start gap-5 flex bg-gray-100 p-2 rounded-md"> <span className="text-yellow-700 text-2xl">{profile?.role}</span></p>
                    <p className=" font-semibold text-lg items-start text-white gap-5 text-wrap w-1/2">{profile?.summary}</p>
                    <div className=" font-semibold text-lg w-full items-start text-white gap-4 flex flex-col"><span className="text-gray-200 text-xl rounded-md">Skills:</span> 
                    <div className=" flex gap-5 text-sm">{profile?.skills.map((skill, index) => (
                     <span key={index} className="bg-amber-500 text-white px-2 py-1 rounded-md font-medium">{skill}</span>
                    ))}</div> </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
