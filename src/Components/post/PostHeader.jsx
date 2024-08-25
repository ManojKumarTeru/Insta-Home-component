import { BsThreeDotsVertical } from "react-icons/bs"

const PostHeader = () => {
    return (
        <div className="flex  items-center  gap-3 px-3">
            <div className="h-12 w-12 border-2 border-slate-900 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=54" alt="user" />
            </div>
            <h1 className="text-xl font-semibold ">George</h1>
            <BsThreeDotsVertical className="ml-auto" />
        </div>
    )
}

export default PostHeader