import * as React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { StaticImage } from "gatsby-plugin-image"
import HeroImage from "../components/HeroImage"
import { useState } from "react"

const IndexPage = () => {

  const [playing, setPlaying] = useState(false);

  const handlePlayVideo = () => {
    setPlaying(true);
  };

  return (
    <main className="font-sans pt-20 pb-10">

      <Navbar navLinks={["Expertise","Contact"]} theme={["black","black"]}/>

      <section className="bg-cover bg-center flex items-center justify-center relative mx-[106px]">
        {/* <StaticImage
              src="../images/home/Group 146.svg"
              alt="index-image"
              placeholder="none"
              layout="fullWidth"
              className="flex-auto w-full"
            />   */}

        <HeroImage className="flex-auto w-full"/>

        <div className=" w-[601px] h-[203px] bg-white absolute left-1/2 -translate-x-1/2 -translate-x-1.5 flex-auto text-center text-red-600">
          <h2 className="text-8xl leading-20">make your brand thrive.</h2>
        </div>
      </section>

      <div className="flex justify-center"> 
          <StaticImage
                  src="../images/home/Vector (1).png"
                  alt="down-arrow"
                  placeholder="none"
                  layout="constrained"
                  className="mt-[58px] mb-[77px]"
            />
        </div>

      <section className="mb-44 cursor-default">     
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
          <span class="font-outline-1 text-7xl">
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
      </section> 
        
      <section className="pt-[130px] mb-8 relative">
        <div className="absolute top-0 left-0 w-screen ">
          <StaticImage
              src="../images/home/Group 140.svg"
              alt="design-bg"
              placeholder="none"
              layout="fullWidth"
              className="w-full"
            />
        </div>
        <article className="mx-[105px] text-black relative z-10 flex gap-x-28">
          <div className="flex flex-col basis-5/12 justify-center"> 
            <h3 className="mb-[32px] text-6xl font-medium ">transform forward thinking ideas</h3>
            <p className="mb-[32px] text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
            <span className="text-3xl font-medium flex gap-x-2.5 items-center">
              <p>View more</p>
              <StaticImage
                src="../images/home/Vector (3).png"
                alt="arrow-for-more"
                placeholder="none"
                width={16}
                layout="fixed"
                className=""
              />
            </span>
          </div>
          <div>
            <StaticImage
                  src="../images/home/Group 31.png"
                  alt="design-bg"
                  placeholder="none"
                  layout="fixed"
                  className="basis-1/2"
                />
          </div>
        </article>
      </section>

      <div className="h-[626px] flex items-center justify-center">
        <StaticImage
                    src="../images/home/Polygon 5.svg"
                    alt="triangle"
                    placeholder="none"
                    layout="constrained"
                    className=""
                  />
      </div>

      <div className=" relative bg-black text-center">

        <div className="realtive text-white flex flex-col gap-y-10 items-center pt-44 pb-32 px-[306px]">
          <span className="text-[39px] font-light leading-[57px]">
            Are you looking to build your brand,Reimagine your brand, Grow your business,Go to market, Engage with customers, Make an impact,
            Clarify your message, Sell a product or Build a community?
          </span>
          <span className="text-lg font-light px-48">
          Leveling up in today’s Marketing and Advertising landscape is increasingly complex. You need a specialized partner that unifies strategy & execution. 
          We are a full service agency with the expertise and passion required to deliver results.
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-screen ">
          <StaticImage
              src="../images/home/Vector.svg"
              alt="design-bg"
              placeholder="none"
              layout="fullWidth"
              className="w-full"
            />
        </div>

        <div>
          {/* neeed to position ellipsss and polygons
           */}
        </div>
      </div>

      <div className="flex flex-col pt-44 pb-28 items-center  bg-black text-white">
        <h3 className="mb-16 text-5xl font-semibold">Our Clients</h3>
        <StaticImage
              src="../images/home/Group 48.svg"
              alt="client-companies"
              placeholder="none"
              layout="constrained"
              className="mb-20"
            />
        <span className="text-3xl font-medium flex gap-x-2.5 items-center">
              <span>See our works</span>
              <StaticImage
                src="../images/home/Vector (3).png"
                alt="arrow-for-more"
                placeholder="none"
                width={16}
                layout="fixed"
                className=""
              />
        </span>
      </div>

      <div className="bg-black text-white relative">
        <StaticImage
                  src="../images/home/Group 128.svg"
                  alt="reel-bg"
                  placeholder="none"
                  layout="fullWidth"
                  className="w-full relative z-0"
                />
        <div className="absolute bottom-[222px] left-[658px] z-40 w-[638px] h-[388px] bg-[url('/images/home/Rectangle 221.png')]">
          {!playing && (
            <button onClick={handlePlayVideo} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2">
              Play Video
            </button>
          )}
          {playing && (
            <iframe
              className="w-full h-full object-contain"
              title="Youtube player"
              sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
              src="https://youtube.com/embed/BKMmLqv0IXA?autoplay=1"
            ></iframe>
          )}
        </div>
        <div className="absolute bg-black bottom-[109px] left-[223px] z-50 w-[596px] h-[320px] pl-12 pr-11 pt-12 pb-15 flex flex-col">
           <button className="text-xl font-bold mb-3.5">Show Reel</button>
           <p className="text-base font-light mb-8">
           Thunder storms and rain followed our tour routing throughout Europe but I'm so glad we didn't have to cancel the shows. 
           Thank you so much for coming back to the festival in Poland after it being evacuated because of safety reasons. You saved this show!
           </p>
           <button onClick={handlePlayVideo} className="border-solid border border-red-600 text-red-600 bg-transparent p-2 w-32 text-xl font-medium">Play Video</button>
        </div>
      </div>

      <Footer />

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
