import React from "react";
import { motion, stagger } from "framer-motion";

function Spread() {
  return (
    <div className="w-full sm:h-[120vh] h-[70vh] py-10 sm:py-32 bg-white px-4">
      <div className="w-full  flex items-center justify-center gap-2 sm:text-md text-sm">
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
        <h2>In the media</h2>
      </div>
      <div className=" w-full p-3 text-center my-7 sm:my-12 text-[3.5rem] sm:text-[10rem] sm:tracking-tighter tracking-tight leading-none">
        {["spread","the news"].map((item,index)=>{
          return    <h2 className="overflow-hidden">
          {" "}
          <motion.span
            initial={{ rotate: 30, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 0.8,
              delay: index * 0.1,
            }}
            className="inline-block origin-left"
          >
           {item}
          </motion.span>
        </h2>
        })}
     
      </div>
      <div className="w-full text-center flex justify-center">
        <p className="w-[80%] sm:w-[35%] leading-tight sm:text-[1.6rem] sm:font-[400] text-lg">
          Find out more about our work on these leading design and technology
          platforms.
        </p>
      </div>
      <div className="w-full flex items-center gap-1 my-10 justify-center">
        <div className="w-2 h-2 rounded-full border-[1px] border-red-400"></div>
        <h4 className="w-fit border-b-[1px] border-red-900 leading-none sm:text-md ">
          Browse all news
        </h4>
      </div>
    </div>
  );
}

export default Spread;
