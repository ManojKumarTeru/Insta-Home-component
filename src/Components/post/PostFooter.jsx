import { useState } from "react"
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa6"
import { FiSend } from "react-icons/fi"

const PostFooter = () => {
    const like = '255k'
    const comment = '120k'
    const share = "150k"
    const [isLiked, setIsLiked] = useState(false);
    return (
        <div className="p-2">
            <div className="flex gap-3">
                <div className="flex gap-1 text-xl" onClick={() => { setIsLiked(prev => !prev) }}>
                    {isLiked ? <FaHeart className="text-pink-600" /> : <FaRegHeart />}
                    <p className="text-sm">{like}</p>
                </div>
                <div className="flex gap-1 text-xl">
                    <FaRegComment />
                    <p className="text-sm">{comment}</p>
                </div>
                <div className="flex gap-1 text-xl">
                    <FiSend />
                    <p className="text-sm">{share}</p>
                </div>
            </div>
            <div className="py-2">
                <h1 className="text-slate-800">Embracing the art of effortless style. A simple pose with a touch of confidence</h1>
                <p className="text-slate-600 text-sm mt-2">20 hour ago</p>
            </div>
        </div>

    )
}

export default PostFooter