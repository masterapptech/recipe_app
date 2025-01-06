"use client"
import axios from "axios";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import RecepieListing from "../recepielisting";
import RecipieLoading from "./recipieskeleton";
const RecipieInfo = () => {
let pathname=usePathname()

const [recipie, setrecipie] = useState({});
useEffect(() => {
    axios.get(`https://dummyjson.com/recipes${pathname}`)
    .then((response)=>{
        console.log(response.data);
        setrecipie(response.data)
    })
}, []);

 
return (Object.keys(recipie)!=0) 
        ? <RecepieListing key={recipie.id} recipie={recipie} width="w-full"></RecepieListing>
        : (<RecipieLoading></RecipieLoading>)
   


}
 
export default RecipieInfo;