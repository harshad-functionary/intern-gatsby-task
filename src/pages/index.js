import * as React from "react"
import Navbar from "../components/Navbar"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main className="">

      <Navbar navLinks={["Expertise","Contact"]}/>

      <div className="bg-cover bg-center flex items-center justify-center relative mx-[106px]">
        <StaticImage
              src="../images/Group 146.svg"
              alt="index-image"
              placeholder="none"
              layout="fullWidth"
              className="flex-auto"
            />     
        <div className=" w-[601px] h-[203px] bg-white absolute left-1/2 -translate-x-1/2 -translate-x-1.5 flex-auto text-center text-red-600">
          <h2 className="text-8xl leading-20">make your brand thrive.</h2>
        </div>
      </div>

      <div className="flex justify-center"> 
        <StaticImage
                src="../images/Vector (1).png"
                alt="down-arrow"
                placeholder="none"
                layout="constrained"
                className="mt-[58px] mb-[77px]"
          />
      </div>

      <div className="mb-44 cursor-default">     
      <div class="relative flex overflow-x-hidden uppercase">
        <div class="py-2.5 animate-marquee whitespace-nowrap">
          <span class="font-outline-1 text-7xl ">
            <span className="hover:text-red-600 ">Event Management</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Media Buying</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">360° Ground Branding</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">Radio Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Outdoor Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Digital Marketing</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">Television Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Print Advertising</span>&nbsp;&nbsp;&nbsp;
            </span>
        </div>
        <div class="absolute top-0 py-2.5 animate-marquee2 whitespace-nowrap ">
          <span class="font-outline-1 text-7xl ">
            <span className="hover:text-red-600 ">Event Management</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Media Buying</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">360° Ground Branding</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">Radio Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Outdoor Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Digital Marketing</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">Television Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Print Advertising</span>&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      <div class="relative flex overflow-x-hidden uppercase">
        <div class="py-2.5 animate-marquee whitespace-nowrap">
          <span class="font-outline-1 text-7xl ">
            <span className="hover:text-red-600 ">360° Ground Branding</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Radio Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Outdoor Advertising</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">Digital Marketing</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Television Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Print Advertising</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">Event Management</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Media Buying</span>&nbsp;&nbsp;&nbsp;
          </span>
        </div>
        <div class="absolute top-0 py-2.5 animate-marquee2 whitespace-nowrap ">
          <span class="font-outline-1 text-7xl ">
            <span className="hover:text-red-600 ">360° Ground Branding</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Radio Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Outdoor Advertising</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">Digital Marketing</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Television Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Print Advertising</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">Event Management</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Media Buying</span>&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      <div class="relative flex overflow-x-hidden uppercase">
        <div class="py-2.5 animate-marquee whitespace-nowrap">
          <span class="font-outline-1 text-7xl hover:text-red-600">
            <span className="hover:text-red-600 ">Outdoor Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Digital Marketing</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Television Advertising</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">Print Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Event Management</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Media Buying</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">360° Ground Branding</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Radio Advertising</span>&nbsp;&nbsp;&nbsp;
          </span>
        </div>
        <div class="absolute top-0 py-2.5 animate-marquee2 whitespace-nowrap">
          <span class="font-outline-1 text-7xl">
            <span className="hover:text-red-600 ">Outdoor Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Digital Marketing</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Television Advertising</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">Print Advertising</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Event Management</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Media Buying</span>&nbsp;&nbsp;&nbsp;
            <span className="hover:text-red-600 ">360° Ground Branding</span>&nbsp;&nbsp;&nbsp;<span className="hover:text-red-600 ">Radio Advertising</span>&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
      </div> 
        
      <div className="pt-[130px] mb-8 relative">
        <div className="absolute top-0 left-0 w-screen ">
          <StaticImage
              src="../images/Group 140.svg"
              alt="design-bg"
              placeholder="none"
              layout="fullWidth"
              className="w-full"
            />
        </div>
        <div className="mx-[105px] text-black relative z-10 flex gap-x-28">
          <div className="flex flex-col basis-5/12 justify-center"> 
            <h3 className="mb-[32px] text-6xl font-medium ">transform forward thinking ideas</h3>
            <p className="mb-[32px] text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
            <span className="text-3xl font-medium flex gap-x-2.5 items-center">
              <span>View more</span>
              <StaticImage
                src="../images/Vector (3).png"
                alt="design-bg"
                placeholder="none"
                width={16}
                layout="fixed"
                className=""
              />
            </span>
          </div>
          <div>
            <StaticImage
                  src="../images/Group 31.png"
                  alt="design-bg"
                  placeholder="none"
                  layout="fixed"
                  className="basis-1/2"
                />
          </div>
        </div>
      </div>

      <div className="h-[626px] flex items-center justify-center">
        <StaticImage
                    src="../images/Polygon 5.svg"
                    alt="triangle"
                    placeholder="none"
                    layout="constrained"
                    className=""
                  />
      </div>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
