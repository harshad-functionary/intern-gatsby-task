import React, {useState}from "react";
import {StaticImage} from "gatsby-plugin-image"
import { Link } from "gatsby";
import BurgerMenu from "./BurgerMenu";

const Navbar =({navLinks})=>{

    const [isOpen,setIsOpen] = useState(false)


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <nav className="relative flex items-center justify-between mb-8 mx-[106px]">
            <Link to="/">
                <StaticImage
                    src="../images/Group 33.svg"
                    alt="logo"
                    placeholder="none"
                    layout="constrained"
                    className="h-39"
                />
            </Link>

            <div className="flex items-center">
               {navLinks.map((link,index)=> 
                    <Link key={index} to={`/${link.toLowerCase()}`} className="ml-[24px] text-2xl loading-23">{link}</Link>
                )}

                <button onClick={toggleMenu}> 
                    <StaticImage
                        src="../images/Group 37.svg"
                        alt="hamburger button"
                        placeholder="none"
                        layout="constrained"
                        className="ml-[24px]"
                    />
                </button>
            </div>

            <div className={`absolute z-10 top-[-81px] right-[-106px] w-screen ${isOpen ? '' : 'hidden'}`}>
                    <BurgerMenu toggleMenu={toggleMenu}/>
            </div>
           
        </nav>
    )
}

export default Navbar