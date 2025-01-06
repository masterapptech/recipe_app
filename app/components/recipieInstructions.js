const RecipieInstructions = (args) => {
    return (<div className="m-4 rounded-md border p-4 shadow-sm">
        <h3 className="font-semibold">Ingredients:</h3>
        <p className="font-medium m-2 p-2">
            {
                args.ingridents.map((ingredient, index)=>{
                    return <span key={"ing_"+index}> {ingredient}</span>
                })
            }
        </p>
        
        <h3 className="font-semibold">Instructions:</h3>
        <ul className="m-2 p-2">
        {
                args.instructions.map((instruction,index)=>{
                    return (<li key={index} className="m-1">
                       {index+1 +". "+ instruction}
                    </li>)
                })
        }
        </ul>
    </div>);
}
 
export default RecipieInstructions;