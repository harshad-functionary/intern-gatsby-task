import React from "react";
import {StaticImage} from "gatsby-plugin-image"
import { Link } from "gatsby";

const Footer = () => {

    return(
        <div>
            <div className="py-40 flex flex-col bg-white text-black items-center text-center">
                <h4 className="text-6xl font-medium mb-8 max-w-2xl">Let’s create something amazing together.</h4>
                <span className="text-3xl font-medium flex gap-x-2.5 items-center">
                    <span>Schedule a call</span>
                    <StaticImage
                        src="../images/Vector (3).png"
                        alt="arrow-for-more"
                        placeholder="none"
                        width={16}
                        layout="fixed"
                        className=""
                    />
                </span>
            </div>

            <div className="grid grid-cols-5 mx-[6.5rem] gap-0 text-2xl font-normal">
                <Link to="/about" className="border border-black border-r-0  h-24  flex items-center  justify-center p-auto ">About</Link>
                <Link to="/" className="border border-black border-r-0  h-24  flex items-center  justify-center p-auto ">Expertise</Link>
                <Link to="/" className="border border-black border-r-0  h-24  flex items-center  justify-center p-auto ">Works</Link>
                <Link to="/" className="border border-black border-r-0  h-24  flex items-center  justify-center p-auto ">Career</Link>
                <Link to="/" className="border border-black  h-24  flex items-center  justify-center p-auto ">Contact</Link>
            </div>

            <div className="mt-20 flex mx-[6.5rem] h-[3.7rem] items-center">
                <div className="mr-auto">
                    <span className="mr-6 pt-3 pb-3 border-y border-black">
                        <StaticImage
                                src="../images/telephone-symbol-button 1.png"
                                alt="logo"
                                placeholder="none"
                                layout="constrained"
                                height={34}
                                className=""
                            />
                    </span>
                    <span className="mr-6 py-3 border-y border-black">
                        <StaticImage
                            src="../images/Group.svg"
                            alt="logo"
                            placeholder="none"
                            layout="constrained"
                            height={34}
                            className=""
                        />
                    </span>
                    <span>
                        <StaticImage
                            src="../images/46.location.png"
                            alt="logo"
                            placeholder="none"
                            layout="constrained"
                            height={34}
                            className=""
                        />
                    </span>
                </div>
                <StaticImage
                        src="../images/Group (1).svg"
                        alt="logo"
                        placeholder="none"
                        layout="constrained"
                        className=""
                    />
                <div className="ml-auto">
                    <span className="mr-6 py-3 border-y border-black">
                        <StaticImage
                                src="../images/instagram-logo 1.png"
                                alt="logo"
                                placeholder="none"
                                layout="constrained"
                                height={34}
                                className=""
                            />
                    </span>
                    <span className="mr-6 py-3 border-y border-black">
                        <StaticImage
                            src="../images/youtube 1.svg"
                            alt="logo"
                            placeholder="none"
                            layout="constrained"
                            height={34}
                            className=""
                        />
                    </span>
                    <span>
                        <StaticImage
                            src="../images/facebook (2) 1.svg"
                            alt="logo"
                            placeholder="none"
                            layout="constrained"
                            height={34}
                            className=""
                        />
                    </span>
                </div>
            </div>
        </div>
    )

}

export default Footer