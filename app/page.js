"use client"

import axios from "axios";
import { useEffect, useState } from "react"; 
import RecipieLoading from "./components/recipieskeleton";
import Comments from "./components/comments";
import RecepieListing from "./components/recepieListing";

const Home = () => {
 
  const [recepies, setrecepies] = useState([]);
  useEffect(() => {
    //fetch recepies
    axios.get("https://dummyjson.com/recipes").then((resp)=>{
      setrecepies(resp.data.recipes)
    })

    

  }, []);

  console.log(recepies.length);
 
  return<div  className="flex flex-wrap">
  {
    recepies.length!=0 ?
        <>
        {recepies.map((recipie,index)=>{
          
          return <RecepieListing key={recipie.id} recipie={recipie}  width="w-72"/>
        })
      } 
        </>

    : <div className="flex ">
    {
      
        [...Array(3)].map((ele,index)=>{
          return <RecipieLoading key={"skl_"+index}/>
        })

    }
    </div>
      
  }
  </div>;

  
}
 
export default Home;
