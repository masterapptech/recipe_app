"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import RecepieListing from "./recepielisting";

const Home = () => {
 
  const [recepies, setrecepies] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/recipes").then((resp)=>{
      setrecepies(resp.data.recipes)
    })
  }, []);
 
  return<div  className="flex flex-wrap">
    
  {
    recepies.map((recipie,index)=>{
      return <RecepieListing key={recipie.id} recipie={recipie} ></RecepieListing>
    })
      
  }
  </div>;

  
}
 
export default Home;
