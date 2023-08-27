import {HiChartPie,HiArchive} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { CustomNavbar } from '../../core/components/navbar';
import {MdPreview} from "react-icons/md";
import {AiFillEdit} from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../core/api/firestore';
const AddProduct = () => {
    const [images,setImages] = useState([]);
    
    function addImage(eventData){
        setImages([...eventData.target.files]);
    }

    return (
       <div className='mt-2 ml-5 p-4 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        <div className=''>
            <form>
            <h4 className='text-sm my-4'>Name</h4>
            <input type="text" className="p-4 bg-gray-100 rounded-xl min-w-[90%]" placeholder="Enter product name" />

            <h4 className='text-sm my-4'>Description</h4>
            <textarea className=" resize-none h-[140px] p-4 bg-gray-100 rounded-xl min-w-[90%]" placeholder="Enter product description"></textarea>

            <h4 className='text-sm my-4'>Price</h4>
            <input className="p-4 bg-gray-100 rounded-xl min-w-[90%]" type="number" placeholder="Enter product price" />

            <h4 className='text-sm my-4'>Features</h4>
            <input className="p-4 bg-gray-100 rounded-xl min-w-[90%]" placeholder="Enter product features"/>
            </form>
        </div>
        <div>
            <h4 className='text-sm py-4'>Add Images (Max 3)</h4>
            <input id="img" className="hidden" type="file" multiple accept='images/*' placeholder='Upload Images' onChange={addImage}/>
            <label for="img" className='text-xs p-2 rounded-lg bg-black text-white'>Choose Images</label>
            <div className='grid grid-cols-2 gap-2 mt-4'>
                {images.map(image=><img className="m-2 h-[100px] w-[100px]"src={URL.createObjectURL(image)}></img>)}
            </div>
        </div>
       </div>
       <div className='flex flex-row justify-center items-center h-20'>
        <button className='rounded-md shadow-md w-[20vw] h-[30px] text-[10px] sm:text-[14px] bg-yellow-700 hover:bg-black text-white'>Save Product</button>
       </div>
       </div>
    );
}


const ProductList = (props) =>{
    const products = props.products;
    return (
        <div className='p-4'>
            <div className="overflow-x-auto text-[10px] md:text-sm lg:text-md text-center">
               <table className='min-w-full min-h-full'>
                <thead>
                <tr className="border-b">
                    <th className='px-2 py-4'>Name</th>
                    <th className='px-2 py-4'>Description</th>
                    <th className='px-2 py-4'>Price</th>
                    <th className='px-2 py-4'>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        products.map((e)=>
                        <tr className="border-b" key={e}>
                        <th className='py-4'>{e.name}</th>
                        <td className='py-4'>{e.description}</td>
                        <td className='py-4'>{e.price}</td>
                        <td className='py-2'><div className=' inline-flex'><MdPreview size={30}/><AiFillEdit size={30}/></div></td>

                        </tr>
                        )
                    }
                </tbody>
               </table>
            </div>
        </div>
    )
} 
 
const DashboardPage = ()=> {
    const {data,isLoading,isError} = useQuery(["allProducts"],getAllProducts);
    
    const [index,setIndex] = useState(0);
    return(
        <div className='min-w-screen min-h-screen'>
            <div className='h-[50px] flex justify-center items-center bg-black text-white w-screen'>
                <h1 className='text-xl font-semibold'>Admin Panel</h1>
            </div>
            <div className='flex flex-row flex-wrap'>
             <div id="nav" className="hidden md:flex flex-col bg-gray-900 text-white min-h-screen w-[200px] p-5">
                <div>
                    <h1 className="text-xl my-5 mx-2">Ozswell Industries</h1>
                </div>
                <ul>
                    <li>
                    <button onClick={()=>setIndex(0)} className={`my-10 px-4 py-2 rounded-md text-left flex items-center ${index==0?"bg-white text-black":"text-white"} text-lg ${index!=0?"hover:text-yellow-300":""}`}>
                        <span className="mr-2"><HiArchive size={20} /></span>
                        <span className='text-[14px]'>Add Product</span>
                    </button>
                    </li>
                    <li>
                    <button onClick={()=>setIndex(1)} className={`my-10 px-4 py-2 rounded-md text-left flex items-center ${index==1?"bg-white text-black":"text-white"} text-lg ${index!=1?"hover:text-yellow-300":""}`}>
                        <span className="mr-2"><HiArchive size={20} /></span>
                        <span className='text-[14px]'>View Products</span>
                    </button>
                    </li>
                    <li>
                    <button onClick={()=>setIndex(2)} className={`my-10 px-4 py-2 rounded-md flex items-center ${index==2?"bg-white text-black":"text-white"} text-lg ${index!=2?"hover:text-yellow-300":""}`}>
                        <span className="mr-2"><HiChartPie size={20} /></span>
                        <span className='text-[14px]'>Analytics</span>
                    </button>
                    </li>
                
                </ul>
             </div>
             <div id="nav-small" className="flex min-h-screen md:hidden flex-col bg-black text-white w-[100px] p-5">
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
             <div className='flex-1 flex-wrap'>
                    {index==0?<AddProduct/>:index==1?<ProductList products={data}/>:<></>}
            </div>
        </div>
        </div>
    );
}



export default DashboardPage;
