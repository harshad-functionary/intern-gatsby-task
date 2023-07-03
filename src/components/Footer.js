import React from "react";
import {StaticImage} from "gatsby-plugin-image"
import { Link } from "gatsby";
import FooterLogo from "./FooterLogo";

const Footer = () => {

    return(
        <footer>
            <section className="py-40 flex flex-col bg-white text-black items-center text-center">
                <h4 className="text-6xl font-medium mb-8 max-w-2xl">Let’s create something amazing together.</h4>
                <span className="text-3xl font-medium flex gap-x-2.5 items-center">
                    <p>Schedule a call</p>
                    <StaticImage
                        src="../images/home/Vector (3).png"
                        alt=""
                        placeholder="none"
                        width={16}
                        layout="fixed"
                        className=""
                    />
                </span>
            </section>

            <section className="grid grid-cols-5 mx-[6.5rem] gap-0 text-2xl font-normal">
                <Link to="/about" className="border border-black border-r-0  h-24  flex items-center  justify-center p-auto ">About</Link>
                <Link to="/" className="border border-black border-r-0  h-24  flex items-center  justify-center p-auto ">Expertise</Link>
                <Link to="/" className="border border-black border-r-0  h-24  flex items-center  justify-center p-auto ">Works</Link>
                <Link to="/" className="border border-black border-r-0  h-24  flex items-center  justify-center p-auto ">Career</Link>
                <Link to="/" className="border border-black  h-24  flex items-center  justify-center p-auto ">Contact</Link>
            </section>

            <section className="mt-20 mb-[6.75rem] flex mx-[6.5rem] h-[3.7rem] items-center">
                <div className="mr-auto flex items-center">
                    <i className="mr-6 pt-3 pb-3 border-y border-black">
                        <StaticImage
                                src="../images/footer/telephone-symbol-button 1.png"
                                alt="call us"
                                placeholder="none"
                                layout="fixed"
                                height={34}
                                className=""
                            />
                    </i>
                    <i className="mr-6 py-3 border-y border-black">
                        <StaticImage
                            src="../images/footer/Group.svg"
                            alt="mail us"
                            placeholder="none"
                            layout="fixed"
                            height={34}
                            className=""
                        />
                    </i>
                    <i className="mr-6 py-3 border-y border-black">
                        <StaticImage
                            src="../images/footer/46.location.png"
                            alt="our location on maps"
                            placeholder="none"
                            layout="fixed"
                            height={34}
                            className=""
                        />
                    </i>
                </div>
                <FooterLogo/>
                <div className="ml-auto flex items-center">
                    <i className="ml-6 py-3 border-y border-black">
                        <StaticImage
                                src="../images/footer/instagram-logo 1.png"
                                alt="find us in instagram"
                                placeholder="none"
                                layout="fixed"
                                height={34}
                                className=""
                            />
                    </i>
                    <i className="ml-6 py-3 border-y border-black">
                        <StaticImage
                            src="../images/footer/youtube 1.svg"
                            alt="find us on youtube"
                            placeholder="none"
                            layout="fixed"
                            height={34}
                            className=""
                        />
                    </i>
                    <i className="ml-6 py-3 border-y border-black">
                        <StaticImage
                            src="../images/footer/facebook (2) 1.svg"
                            alt="find us in facebook"
                            placeholder="none"
                            layout="fixed"
                            height={34}
                            className=""
                        />
                    </i>
                </div>
            </section>

            <p className="text-[23px] font-normal flex justify-center">&copy; Equity Plus 2023 all rights reserved.</p>
        </footer>
    )

}

export default Footer