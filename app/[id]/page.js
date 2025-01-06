"use client"
import axios from "axios";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import RecepieListing from "../components/recepieListing";
import RecipieLoading from "../components/recipieskeleton";
import RecipieInstructions from "../components/recipieInstructions";
import InstructionsSkelton from "../components/instructionskeleton";
import Comments from "../components/comments";
const RecipieInfo = () => {
let pathname=usePathname()

const [recipie, setrecipie] = useState({});
const [comments, setcomments] = useState([]);

useEffect(() => {
    axios.get(`https://dummyjson.com/recipes${pathname}`)
    .then((response)=>{
        setrecipie(response.data)
    })

    
    //fetch comments
    axios.get("https://dummyjson.com/comments").then((resp)=>{
        setcomments(resp.data.comments)
      })

}, []);

 
return (Object.keys(recipie)!=0) 
        ?<> 
        <RecepieListing key={recipie.id} recipie={recipie} width="w-full" />
        <RecipieInstructions instructions={recipie.instructions} ingridents={recipie.ingredients}/>
        
        <div className="m-4 p-4 border rounded-md shadow-sm">
            <p className="font-bold mb-4"> Comments: </p>
            {
            comments.slice(0,5).map((comment,index)=>{ 
            return <Comments key={"cmnt_"+comment.id} comment={comment} userimg=""  width="w-72"/>
            })
            }
        </div>
        

        </>
        : 
        <>
        <RecipieLoading/>
        <InstructionsSkelton/>
        </>
        

           
            

        
   


}
 
export default RecipieInfo;