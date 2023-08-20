import { Link, useNavigate } from "react-router-dom";
const Hero = () =>{
    const navigate = useNavigate();
    return (
        <div className="h-[600px] bg-black w-full flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-3xl lg:text-4xl text-center m-4">Elevate Your Standards:<br/> Unleashing Industry-Grade Excellence</h1>
        <button className="bg-white text-black rounded p-3 text-sm hover:text-white  hover:bg-gray-900 mt-5" onClick={()=>navigate("/products")}>See our Products</button>
    </div>
    );
}

export default Hero;