import { BiMessageRoundedMinus } from "react-icons/bi"
import { FaRegHeart } from "react-icons/fa"

const Header = () => {
    return (
        <header className="w-full flex justify-between p-3 shadow-sm sticky top-0 left-0 ">
            <h1 className="font-logofont tracking-wide text-xl ">Instagram</h1>
            <div className="flex items-center gap-2 text-xl">
                <div className="relative">
                    <FaRegHeart />
                    <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-600"></span>
                </div>
                <div className="relative">
                    <BiMessageRoundedMinus className="text-2xl" />
                    <span className="absolute top-0 -right-1 rounded-full  bg-red-600 text-[8px] w-3 h-3 flex justify-center items-center text-stone-50">5</span>
                </div>

            </div>
        </header>
    )
}

export default Header