import React from "react";
import { motion } from "framer-motion";

function Work() {
  return (
    <div className="w-full px-6 py-20 h-[350vh] sm:relative sm:px-60 relative">
      <div className="feature flex gap-3 sm:absolute  sm:right-[21%] sm:top-[19%] sm:w-fit ">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 icon"
          data-v-669b4a84=""
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"
            data-v-669b4a84=""
          ></path>
        </svg>
        <h2 className="sm:text-lg sm:font-[400]">Featured Projects</h2>
      </div>

      < h2 className="work my-5 text-6xl sm:text-[15rem] font-[400] overflow-hidden  ">

        <motion.span 
         initial={{ rotate:90,  y: "40%", opacity: 0 }}
         whileInView={{ rotate:0, y: 0, opacity: 1 }}
         viewport={{once:true}}
         transition={{
           ease: [0.22,1,0.36,1],
           duration: 0.8,
           
         }} className="inline-block origin-left ">Work </motion.span></h2>
      <p className="px-1  font-[400]  sm:w-1/4 sm:absolute sm:right-[7%] sm:font-[400] sm:text-zinc-700 sm:text-2xl sm:top-[22%]">
        Highlights of cases that we passionately built with forward-thinking
        clients and friends over the years.
      </p>

      <div className=" video w-full my-4 mt-10 h-[70vh] sm:w-[60%] sm:h-[130vh] ">
        <div className="relative video-cont w-full h-[80%] bg-red-400 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
            alt=""
          />

          <video
            className="w-full h-full block sm:hidden   object-cover absolute top-0 scale-[1]"
            autoPlay
            muted
            loop
            src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
          ></video>
        </div>
        <div className="video-text mt-4 tracking-tight sm:flex gap-2 ">
          <h2 className="">Columbia pictures</h2>
          <p className=" text-zinc-900 sm:font-[500] sm:text-zinc-400 font-[350] text-md">
            {" "}
            Celebrating a Century of cinema
          </p>
        </div>
      </div>

      <div className=" video w-full my-2 h-[70vh] sm:w-[27%] sm:h-[90vh] sm:absolute sm:right-[8%]  sm:top-[32%] ">
        <div className="relative video-cont w-full h-[80%] bg-red-400 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
            alt=""
          />

          <video
            className="w-full h-full sm:hidden   object-cover absolute top-0 scale-[1]"
            autoPlay
            muted
            loop
            src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
          ></video>
        </div>
        <div className="video-text mt-4 tracking-tight sm:flex gap-2 ">
          <h2 className="">Rino &amp; Pelle</h2>
          <p className=" text-zinc-900 sm:font-[500] sm:text-zinc-400 font-[350] text-md">
            Effortless chic lifestyle
          </p>
        </div>
      </div>
      <div className=" video w-full my-2 h-[70vh] sm:w-[35%] sm:h-[120vh] sm:absolute sm:right-[18%] sm:top-[58%] ">
        <div className="relative video-cont w-full h-[80%] bg-red-400 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1100x1370/filters:quality(90)"
            alt=""
          />

          <video
            className="w-full h-full sm:hidden   object-cover absolute top-0 scale-[1]"
            autoPlay
            muted
            loop
            src="https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15"
          ></video>
        </div>
        <div className="video-text mt-4 tracking-tight sm:flex gap-2 ">
          <h2 className=""> Aebele Interiors</h2>
          <p className=" text-zinc-900 sm:font-[500] sm:text-zinc-400 font-[350] text-md">
            Luxurious design experience
          </p>
        </div>
      </div>
      <div className=" video w-full my-2 h-[70vh] sm:w-[20%] sm:h-[60vh] sm:absolute sm:top-[83%] sm:left-[20%]">
        <div className="relative video-cont w-full h-[80%] bg-red-400 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)"
            alt=""
          />

          <video
            className="w-full h-full sm:hidden   object-cover absolute top-0 scale-[1]"
            autoPlay
            muted
            loop
            src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
          ></video>
        </div>
        <div className="video-text mt-4 tracking-tight sm:flex gap-2 ">
          <h2 className="">Pixelflakes</h2>
          <p className=" text-zinc-900 sm:font-[500] sm:text-zinc-400 font-[350] text-md">
            Architectural marketing agency
          </p>
        </div>
      </div>
      <div className="w-fit flex justify-center items-center gap-1 sm:absolute sm:top-[99%] sm:right-[18%]  ">
        <div className="w-2 h-2 rounded-full border-[0.5px] border-zinc-500"></div>
        <h3 className="text-center border-b-[1px] w-fit border-zinc-400 leading-none">
          Browse all work
        </h3>
      </div>
    </div>
  );
}

export default Work;
