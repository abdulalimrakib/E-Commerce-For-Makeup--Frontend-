import { BsBagHeartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className="flex justify-between font-krona py-3 items-center container mx-auto">
            <div>
                <a className="text-3xl" href="/">
                    Beauty
                </a>
            </div>
            <div className="flex gap-5">
                <ul className="flex gap-5 text-sm">
                    <li><a href="/skincare">skincare</a></li>
                    <li><a href="/make-up">make-up</a></li>
                    <li><a href="/mens">mens</a></li>
                    <li><a href="/supplements">supplements</a></li>
                </ul>
                <div className="flex gap-5 text-lg">
                    <div className="bg-yellow rounded-full w-[20px] h-[20px]"><IoSearch className="translate-x-2" /></div>
                    <div className="bg-yellow rounded-full w-[20px] h-[20px]"><FaHeart className="translate-x-2" /></div>
                    <div className="bg-yellow rounded-full w-[20px] h-[20px]"><BsBagHeartFill className="translate-x-2" /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar