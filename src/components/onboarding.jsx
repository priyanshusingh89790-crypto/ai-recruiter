import { useNavigate } from "react-router-dom"

const Onboarding = () => {
    
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-linear-to-br from-blue-400 to-blue-800">
            <div className="flex flex-col items-center justify-center rounded-lg p-8">
                <h1 className="text-4xl font-bold mb-4 text-white ">Welcome to AI Recruiter</h1>
                <h2 className="text-white mb-4 text-2xl font-extralight">Let AI help you build your profile</h2>
                <button onClick={() => navigate("/builder")} className="bg-gray-100 hover:bg-gray-200 text-blue-900 font-bold rounded-md p-2 w-full cursor-pointer">Get Started</button>

            </div>
        </div>
    )
}

export default Onboarding