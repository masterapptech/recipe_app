const InstructionsSkelton = () => {
    return (<div className="m-4 rounded-md border p-4 shadow-sm animate-pulse">
        <div className="h-6 w-32 bg-gray-200 rounded-md mb-4"></div> {/* Placeholder for heading */}
        <ul>
          {Array(5) // Example: Replace 5 with the number of skeleton lines you want
            .fill("")
            .map((_, index) => (
              <li key={index} className="h-4 bg-gray-200 rounded-md my-2 w-full"></li> // Placeholder for list items
            ))}
        </ul>
      </div>
        );
}
 
export default InstructionsSkelton;