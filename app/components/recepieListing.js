"use client"
import { AiVideoIcon, AutomotiveBattery01Icon, Dish02Icon, EnergyEllipseIcon, Timer02Icon } from "hugeicons-react";
import Image from "next/image"; 
import { redirect, useRouter } from "next/navigation";

const RecepieListing = (args) => { 
 
    const {id,image,name,difficulty,prepTimeMinutes,servings,cuisine,tags,caloriesPerServing} = args.recipie;    
    
    let  route=useRouter()

    
    let handleClick=()=>{
        /*
        redirect() : window.location.replace()
        router.push() : window.location.href
         */
        //    args.width==="w-72" ? redirect(`/${id}`) : "" //redirect if on first page
    args.width==="w-72" ? route.push(`/${id}`) : "" //redirect if on first page
    
}
 

  return(
    <div className={`container border rounded-md shadow-md  m-4 ${args.width}  place-items-center`} onClick={handleClick}>
        <Image src={image} width={150} height={200} alt={name} className="rounded-md w-full sm:w-72"></Image>
        <p className="text-pretty text-stone-950 p-2 text-center">{name}</p>
        <div className="flex flex-wrap place-content-center">
            <div className="m-2 p-2 border-2 place-items-center shadow-sm rounded-md ">
                <AiVideoIcon className="items-center"/> 
                <p className="text-sm m-1">
                {difficulty}
                </p>
            </div>

            <div className="m-2 p-2 border-2 place-items-center shadow-sm rounded-md ">
                <Timer02Icon className="items-center"/> 
                <p className="text-sm m-1">
                {prepTimeMinutes} Mins 
                </p>
            </div>

            <div className="m-2 p-2 border-2 place-items-center shadow-sm rounded-md ">
                <Dish02Icon className="items-center"/>
              
                <p className="text-sm m-1 ">
                  {servings} Servings  
                </p>
            </div>

            <div className="m-2 p-2 border-2 place-items-center shadow-sm rounded-md ">
                <EnergyEllipseIcon className="items-center"/>
              
                <p className="text-sm m-1 ">
                  {caloriesPerServing} Callories
                </p>
            </div>
        </div>
        <p className="p-2 font-semibold  ">
             {cuisine}
        </p>
           
        <p className="p-1 w-auto pb-4">
            Tags: 
            {
                tags.map((tag , index)=>{
                    return (
                        <span className="m-2" key={index}>

                             {tag}{index < tags.length - 1 && ' |'}
                        </span>
                    );
                })    
            }
       
        </p>
        
    </div>
  );
}

export default RecepieListing;