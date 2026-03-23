import { Link, Mic, Sparkles } from "lucide-react";
const Builder = () => {
    
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-linear-to-br from-blue-400 to-blue-800">
            <div className="flex flex-col items-start justify-center rounded-lg p-8 gap-10 bg-blue-800 w-1/2 h-1/2">
                <h1 className=" border p-4 border-gray-300 rounded-t-2xl rounded-br-2xl mb-4 text-white "> Hi, I make your profile. tell us about your experience </h1>
                <div className="relative w-full border border-gray-300 rounded-full h-14 p-2 text-gray-300 bg-blue-700 mb-4">
                <input type="text" className=" w-[87%] h-full outline-none placeholder:text-gray-200 p-2" placeholder="Enter your experience" />
                <div className="flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-2">
                    <Mic />
                    <Sparkles />
                    <Link/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Builder