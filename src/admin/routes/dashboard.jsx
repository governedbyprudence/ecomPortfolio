import {HiChartPie,HiArchive} from 'react-icons/hi';
import { useState } from 'react';
const DashboardPage = ()=> {
    const [index,setIndex] = useState(0);
    return(
        <div>
             <div id="nav" className="hidden md:flex flex-col bg-black text-white h-screen w-[200px] p-5">
                <div>
                    <h1 className="text-xl my-5 mx-2">Ozswell Industries</h1>
                </div>
                <ul>
                    <li>
                    <button onClick={()=>setIndex(0)} className={`my-10 p-2 rounded-md flex items-center ${index==0?"bg-white text-black":"text-white"} text-lg ${index!=0?"hover:text-yellow-300":""}`}>
                        <span className="mr-2"><HiArchive size={20} /></span>
                        <span>Add Product</span>
                    </button>
                    </li>
                    <li>
                    <button onClick={()=>setIndex(1)} className={`my-10 p-2 rounded-md flex items-center ${index==1?"bg-white text-black":"text-white"} text-lg ${index!=1?"hover:text-yellow-300":""}`}>
                        <span className="mr-2"><HiArchive size={20} /></span>
                        <span>View Products</span>
                    </button>
                    </li>
                    <li>
                    <button onClick={()=>setIndex(2)} className={`my-10 p-2 rounded-md flex items-center ${index==2?"bg-white text-black":"text-white"} text-lg ${index!=2?"hover:text-yellow-300":""}`}>
                        <span className="mr-2"><HiChartPie size={20} /></span>
                        <span>Analytics</span>
                    </button>
                    </li>
                
                </ul>
             </div>
             <div id="nav" className="flex md:hidden flex-col bg-black text-white h-screen w-[100px] p-5">
                <div>
                    <h1 className="text-sm font-bold my-5">Ozswell Industries</h1>
                </div>
                <ul>
                    <li>
                    <button onClick={()=>setIndex(0)} className={`my-10 p-2 rounded-md flex items-center ${index==0?"bg-white text-black":"text-white"} text-lg ${index!=0?"hover:text-yellow-300":""}`}>
                        <span className="mr-2"><HiArchive size={20} /></span>
                    </button>
                    </li>
                    <li>
                    <button onClick={()=>setIndex(1)} className={`my-10 p-2 rounded-md flex items-center ${index==1?"bg-white text-black":"text-white"} text-lg ${index!=1?"hover:text-yellow-300":""}`}>
                        <span className="mr-2"><HiArchive size={20} /></span>
                    </button>
                    </li>
                    <li>
                    <button onClick={()=>setIndex(2)} className={`my-10 p-2 rounded-md flex items-center ${index==2?"bg-white text-black":"text-white"} text-lg ${index!=2?"hover:text-yellow-300":""}`}>
                        <span className="mr-2"><HiChartPie size={20} /></span>
                    </button>
                    </li>
                
                </ul>
             </div>
        </div>
    );
}

export default DashboardPage;