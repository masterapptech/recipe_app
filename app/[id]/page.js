"use client"
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import RecepieListing from "../recepielisting";
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
        ? <RecepieListing key={recipie.id} recipie={recipie} ></RecepieListing>
        : (<></>)
   
}
 
export default RecipieInfo;