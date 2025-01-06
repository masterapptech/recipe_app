import Image from "next/image";

const Comments = (args) => {
    const {comment} = args;
    return (
    <div className="m-2 p-2 border rounded-md">

    <div className="flex">
        <Image src={args.userimg} />
        <div>
            <h2 className="font-bold">{comment.user.fullName}</h2>
            <p className="text-gray-700 font-thin">@{comment.user.username}</p>
        </div>
    </div> 
    <p>
        {comment.body}
    </p>

    </div>);
}
 
export default Comments;