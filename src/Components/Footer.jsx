import { BiMoviePlay } from "react-icons/bi"
import { CgAddR } from "react-icons/cg"
import { GoHomeFill } from "react-icons/go"
import { IoSearch } from "react-icons/io5"
import userProfile from '/src/assets/Images/AzeemSaifiLogo.png'

const Footer = () => {
    return (
        <footer className="flex items-center  p-3 w-full border-t-[1px] max-w-sm">
            <div className="flex justify-between w-full items-center text-2xl mr-[40px]">
            <GoHomeFill />
            <IoSearch/>
            <CgAddR/>
            <BiMoviePlay/>
            </div>
            <div className="w-9 -h-9 rounded-full overflow-hidden border-2 border-slate-900">
                <img src={userProfile} alt="user" />
            </div>
        </footer>
    )
}

export default Footer