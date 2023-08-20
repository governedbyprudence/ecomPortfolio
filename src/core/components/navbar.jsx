import React from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai/';
import { Link } from "react-router-dom";
 
export function CustomNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 

  return (
    <div className="w-full flex justify-between items-center h-24 mx-auto">
        <div className="w-full flex justify-evenly items-center">
        <h1 className="text-3xl font-bold pl-3">Ozswell Industries</h1>
        <ul className="hidden md:flex pr-5">
          <li className="p-4" ><Link className="hover:text-red-300" to="/">Home</Link></li>
          <li className="p-4"><Link className="hover:text-red-300" to="/products">Products</Link></li>
          <li className="p-4">About</li>
          <li className="p-4"><Link className="py-4 px-8 h-full w-full rounded bg-black hover:bg-red-300 text-white" to="/contact">Contact</Link></li>
        </ul>
        </div>
        <div className="block md:hidden">
          {!openNav?<AiOutlineMenu size={30} onClick={()=>setOpenNav(true)}/>:<AiOutlineClose size={30} onClick={()=>setOpenNav(false)}/>}
        </div>
        <div className={openNav?"fixed md:hidden left-0 top-0 w-[70%] h-full bg-black text-white ease-in-out duration-500":"fixed hidden"}>
        <h1 className="w-full text-2xl font-bold mt-8 ml-8 ">Ozswell Industries</h1>

        <ul className=" p-[20px]">
          <li className="p-4 border-white border-b-[1px]"><Link onClick={()=>setOpenNav(false)} className="hover:text-red-300" to="/">Home</Link></li>
          <li className="p-4 border-white border-b-[1px]"><Link onClick={()=>setOpenNav(false)} className="hover:text-red-300" to="/products">Products</Link></li>
          <li className="p-4 border-white border-b-[1px]">About</li>
          <li className="p-4"><Link onClick={()=>setOpenNav(false)} className="hover:text-red-300" to="/contact">Contact</Link></li>
        </ul>
        </div>
    </div>
  );
}