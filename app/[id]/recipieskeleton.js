const RecipieLoading = () => {
    return (  <div className="container border rounded-md shadow-md m-4 max-w-72 animate-pulse">
        {/* Image Placeholder */}
        <div className="bg-gray-300 rounded-md w-72 h-48"></div>
  
        {/* Name Placeholder */}
        <div className="bg-gray-300 h-6 w-3/4 my-4 mx-auto"></div>
  
        {/* Details Placeholder */}
        <div className="flex flex-wrap place-content-center">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="m-2 p-2 bg-gray-300 border-2 rounded-md shadow-sm w-20 h-12"
            ></div>
          ))}
        </div>
  
        {/* Cuisine Placeholder */}
        <div className="bg-gray-300 h-4 w-1/2 my-4 mx-auto"></div>
  
        {/* Tags Placeholder */}
        <div className="p-1 flex flex-wrap">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 m-2 rounded-md w-16 h-6"
            ></div>
          ))}
        </div>
      </div> );
}
 
export default RecipieLoading;