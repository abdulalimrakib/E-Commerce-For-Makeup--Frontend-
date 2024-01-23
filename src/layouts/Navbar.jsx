import { BsBagHeartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion"
import { fadeIn } from "../variants";




const Navbar = () => {


    const [isMenuCliked, setIsMenuCliked] = useState(false)

    return (
        <div className="font-krona py-3">
            <div className="flex justify-between items-center container mx-auto">
                <div>
                    <a className="text-3xl" href="/">
                        Beauty
                    </a>
                </div>
                <ul className="hidden lg:flex gap-5">
                    <li><a href="/skincare">skincare</a></li>
                    <li><a href="/make-up">make-up</a></li>
                    <li><a href="/mens">mens</a></li>
                    <li><a href="/supplements">supplements</a></li>
                    <li><div className="bg-yellow rounded-full w-[20px] h-[20px]"><IoSearch className="translate-x-2 hover:translate-x-1 hover:cursor-pointer duration-200" /></div></li>
                    <li><div className="bg-yellow rounded-full w-[20px] h-[20px]"><FaHeart className="translate-x-2 hover:translate-x-1 hover:cursor-pointer duration-200" /></div></li>
                    <li><div className="bg-yellow rounded-full w-[20px] h-[20px]"><BsBagHeartFill className="translate-x-2 hover:translate-x-1 hover:cursor-pointer duration-200" /></div></li>
                </ul>

                <div className="lg:hidden">
                    <div className="flex items-center gap-5">
                        <ul className="flex gap-5">
                            <li><div className="bg-yellow rounded-full w-[20px] h-[20px]"><IoSearch className="translate-x-2 hover:translate-x-1 hover:cursor-pointer duration-200" /></div></li>
                            <li><div className="bg-yellow rounded-full w-[20px] h-[20px]"><FaHeart className="translate-x-2 hover:translate-x-1 hover:cursor-pointer duration-200" /></div></li>
                            <li><div className="bg-yellow rounded-full w-[20px] h-[20px]"><BsBagHeartFill className="translate-x-2 hover:translate-x-1 hover:cursor-pointer duration-200" /></div></li>
                        </ul>
                        {
                            isMenuCliked ? (<MdClose className="font-bold" onClick={() => setIsMenuCliked(false)} />) : (<FiMenu className="font-bold" onClick={() => setIsMenuCliked(true)} />)
                        }
                    </div>
                </div>
            </div>
            <motion.div variants={fadeIn('down', 0.05)} initial="hidden" animate={isMenuCliked ? "show" : "hidden"} className={`container ${isMenuCliked ? "block" : "hidden"}`}>
                <motion.ul variants={fadeIn('down', 0.08)} initial="hidden" animate={isMenuCliked ? "show" : "hidden"}>
                    <motion.li variants={fadeIn('down', 0.1)} initial="hidden" animate={isMenuCliked ? "show" : "hidden"}><a href="/skincare">skincare</a></motion.li>
                    <motion.li variants={fadeIn('down', 0.2)} initial="hidden" animate={isMenuCliked ? "show" : "hidden"}><a href="/make-up">make-up</a></motion.li>
                    <motion.li variants={fadeIn('down', 0.3)} initial="hidden" animate={isMenuCliked ? "show" : "hidden"}><a href="/mens">mens</a></motion.li>
                    <motion.li variants={fadeIn('down', 0.4)} initial="hidden" animate={isMenuCliked ? "show" : "hidden"}><a href="/supplements">supplements</a></motion.li>
                </motion.ul>
            </motion.div>
        </div>
    )
}

export default Navbar