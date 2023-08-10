import { useQuery } from "@tanstack/react-query"
import { getSingleProduct } from "../api/firestore"
import { useParams } from "react-router";
import { useEffect } from "react";

export default function SingleProductPage(){
    const params = useParams();
    const {data,isLoading,isError,error} = useQuery([`singleProduct`],()=>getSingleProduct(params.productId));
    
    if(isLoading){
        return <>loading</>
    }
    return <>
        <div>
           {data.name}
           {data.description}
        </div>
    </>
}