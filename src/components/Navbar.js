import React, {useState}from "react";
import {StaticImage} from "gatsby-plugin-image"
import { Link } from "gatsby";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";

const Navbar =({navLinks,theme})=>{

    const [isOpen,setIsOpen] = useState(false)

    console.log(theme[0])
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <header className="relative flex items-center justify-between mb-8 mx-[106px] bg-transparent font-sans">

            <Link to="/">
                {theme[1]==="black" ? 
                <Logo fill={"#010101"}/> : <Logo fill={"white"}/>
                }
            </Link>

            <nav>
            <div className="flex items-center">
               {navLinks.map((link,index)=> 
                    <Link key={index} to={`/${link.toLowerCase()}`} className={`ml-[24px] text-2xl loading-23 ${theme[0]==='black' ? 'text-black' : 'text-gray-500 underline underline-offset-1'}`} >{link}</Link>
                )}
            <button onClick={toggleMenu}> 
                    <StaticImage
                        src="../images/navbar/Group 37.svg"
                        alt="hamburger button"
                        placeholder="none"
                        layout="constrained"
                        className= {`ml-[24px] ${ theme[1]==='black' ? '' : 'white-icon'}`}
                    />
                </button>
            </div>

            <div className={`absolute z-10 top-[-81px] right-[-106px] w-screen ${isOpen ? '' : 'hidden'}`}>
                    <BurgerMenu toggleMenu={toggleMenu}/>
            </div>
            </nav>
           
        </header>
    )
}

export default Navbar