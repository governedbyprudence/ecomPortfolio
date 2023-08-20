import Product from "../components/product";
import {useQuery} from '@tanstack/react-query';
import { getAllProducts } from "../api/firestore";
import { CustomNavbar } from "../components/navbar";
export const AllProductPage = ()=>{
    const {data,isLoading,isError} = useQuery(["allProducts"],getAllProducts);
    
    if(isLoading)
    {
        return <>Loading</>
    }
    if(isError){
        return<>error</>
    }
    return (
       <div>
        <CustomNavbar/>
          <h1 className="text-2xl font-bold m-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-8">
          {data.map((e)=><Product product={e}/>)}

        </div>
     </div>
    );
}

export default AllProductPage;