import React from "react";
import {StaticImage} from "gatsby-plugin-image"
import { Link } from "gatsby";
import Logo from "./Logo";


const BurgerMenu=({toggleMenu})=> {
    return(
        <nav className="px-[106px] py-[81px] bg-black h-screen font-sans">
            <section className="flex items-center justify-between mb-[126px]">
                <Logo fill={"white"}/>
                <button onClick={toggleMenu} className="flex items-center gap-1 text-white focus:outline-none">
                    <span className="font-semibold text-xl loading-6">Close</span>
                    <StaticImage
                    src="../images/navbar/Group 45.svg"
                    alt="close-icon"
                    placeholder="none"
                    layout="constrained"
                    className="w-8.5 h-8.5"

                        />
                </button>
            </section>
            
            <section className="flex items-center text-white justify-center">
                <StaticImage
                    src="../images/navbar/Rectangle 29.png"
                    alt="toggle-image"
                    placeholder="none"
                    layout="constrained"
                    className="mr-[89px]"
                        />
                <div className="flex flex-col text-3xl font-normal leading-10 tracking-normal text-left w-[400px]"> 
                    <Link to="/about" className=" mb-[32px] pb-[32px] border-b-2 border-gray-300 ">About</Link>
                    <Link to="" className="mb-[32px] pb-[16px] border-b-2 border-gray-300">Expertise</Link>
                    <Link to="" className="mb-[32px] pb-[16px] border-b-2 border-gray-300">Work</Link>
                    <Link to="" className="mb-[32px] pb-[16px] border-b-2 border-gray-300">Career</Link>
                    <Link to="" className="pb-[16px] border-b-2 border-gray-300">Contact</Link>
                </div>
            </section>

        </nav>
    )
}

export default BurgerMenu