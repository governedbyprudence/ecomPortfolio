import Product from "../components/product";
import MediaQuery from "react-responsive";
import {useQuery} from '@tanstack/react-query';
import { getAllProducts } from "../api/firestore";
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
      {data.map((item) => (
        <div key={item.id}><a href={`/products/${item.id}`}>{item.name}</a></div>
      ))}
    </div>
    );
}

export default AllProductPage;