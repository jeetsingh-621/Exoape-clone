import React from "react";
import { motion, stagger } from "framer-motion";
import { Power4 } from "gsap/all";

function Landingpage() {
  return (
    <div  className="w-full ">
      <div   className="w-full sm:h-[250vh]  h-[150vh] relative overflow-hidden">
        <img data-scroll data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
        <div className="inner w-full absolute top-0 mt-[35vh] sm:mt-[45vh]">
          <div className="para p-5 text-white text-md sm:px-[11vw] sm:text-3xl font-[400] sm:font-[500]">
            {[
              "Global digital design studio partnering with",
              " brands and businesses that create exceptional",
              "   experiences where people live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p className=" text-md tracking-tighter sm:tracking-normal overflow-hidden  ">
                  <motion.span
                    initial={{ rotate: 90, y: "-100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.7,
                      delay: index * 0.1,
                    }}
                    className="inline-block origin-left   translate-y-7"
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="heading text-6xl sm:text-[16vw] sm:leading-none sm:px-[10vw]  text-white px-4 py-2 font-[400] tracking-tight sm:tracking-normal leading-none  capitalize">
            {["Digital","Design","Experience"].map((item,index)=>{
              return   <h1 className="overflow-hidden py-5 -mt-10 ">
              <motion.span
                initial={{ rotate:90, y: "100%", opacity: 0 }}
                animate={{ rotate:0,y: 0, opacity: 1 }}
                transition={{ ease: [0.22,1,0.36,1], duration: 0.8 ,delay:index*0.2}}
                className="inline-block w-fit origin-left "
              >
                
                {item}
              </motion.span>
            </h1>
            })}
{/*           
            <h1 className="">design</h1>
            <h1 className="">experience</h1> */}
          </div>

          <div className=" px-5 mt-2 sm:mt-5">
            <span className="text-white text-lg sm:hidden">
              <i class="ri-arrow-down-line"></i>
            </span>
          </div>
          <div className="para2 text-white px-6 mt-8 text-lg leading-tight font-[400]  sm:text-zinc-200 sm:w-[510px] sm:ml-[11vw] sm:px-2 sm:text-2xl sm:mt-20">
            <p>
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
          </div>
          <div className=" stdio  text-white px-5 mt-10 flex items-center gap-2 sm:pl-[10rem]">
            <div className="circle w-2 h-2 rounded-full border-[2px] border-red-800"></div>
            {/* <div className=" w-full  bg-blue-400 flex justify-between items-center px-5"> */}

            <h3 className=" text-md  sm:text-xl border-b-[1px] w-fit border-zinc-300 leading-1">
              The Studio
            </h3>
            {/* <div className="flex w-2/4  justify-between px-32 py-5 text-xl">
                <ul>
                  <li className="mt-1">Work</li>
                  <li className="mt-1">Studio</li>
                  <li className="mt-1">News</li>
                  <li className="mt-1">Contact</li>
                </ul>
                <div className="text-xl">
                  <h5>hello@exoape.com</h5>
                  <span className="mt-2 inline-block">+31 772 086 200</span>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
