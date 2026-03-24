import { User } from "lucide-react";
import {auth,db} from "../firebase/config";
import {getDoc, doc} from "firebase/firestore";
import {useEffect, useState} from "react";
const Profile = () => {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
            const user = auth.currentUser;
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            setProfile(docSnap.data());

        };
        fetchProfile();
    }, []);
    console.log(profile);
    return (
        <div className="flex flex-col h-screen w-full p-10 gap-5">
            <div className="flex flex-col items-center justify-start bg-linear-to-br from-blue-200 to-blue-800 w-full h-[30%] rounded-2xl">
                <p className="text-white text-end w-full pt-10 pr-10">{auth.currentUser?.email ||"No email"}</p>

                <div className="absolute top-[18%] left-[5%] bg-linear-to-br from-blue-800 to-blue-200 rounded-full p-5 text-blue-100"><User size={100}/></div>
            </div>
            <div className="flex flex-col items-start justify-start pt-17 pl-[4.5%] bg-linear-to-br from-blue-800 to-blue-200 border gap-10 border-b-blue-800 border-l-blue-800 border-gray-400 w-full h-full rounded-2xl">
                <h1 className="text-2xl font-semibold text-white">{auth.currentUser?.displayName ||"No name"}</h1>
                <div className="flex flex-col items-start justify-start gap-10 h-full w-full">
                    <p className=" font-semibold h-full text-lg w-full items-center text-white gap-5 flex"> <span className="text-white text-2xl">{profile?.role}</span></p>
                    <p className=" font-semibold h-full text-lg w-full items-start text-white gap-5 flex-col">Skills: {profile?.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-800 text-white px-2 py-1 rounded-md flex">{skill}</span>
                    ))} </p>
                    <p className=" font-semibold h-full text-lg w-full items-start text-white gap-5 flex">Summary: <span className="text-white text-2xl">{profile?.summary}</span></p>
                </div>
            </div>
        </div>
    )
}
export default Profile;
