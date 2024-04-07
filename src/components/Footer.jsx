import React from 'react'

function Footer() {
  return (
    <div className='w-full h-[80vh] bg-[#080608] text-white py-10 pl-4 overflow-hidden sm:pl-24 sm:h-[110vh] sm:py-20'>
        <div className='w-full h-[40%] moon-video flex justify-end relative '>
            <div className='text-5xl text-[#E0CCBB] absolute left-2 sm:text-[9.3rem] leading-none'>
                <h2>Our</h2>
                <h2>Story</h2>
            </div>
            <video className='w-[72%] h-[62%] sm:w-[80%] sm:ml-[35rem] sm:h-[150%] object-cover sm:object-center object-left' muted loop autoPlay src="https://www.exoape.com/video/video-6.mp4"></video>
      
        </div>
        <div className='pl-4 w-full text-[#B5A598] pb-10 sm:mt-20'>
            <p className='text-lg leading-tight sm:w-[30%] sm:text-2xl' >The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
        </div>
        <div className='w-full flex items-center gap-1 sm:hidden'>
            <div className='w-2 h-2 rounded-full border-[0.5px] border-red-800'></div>
            <h4 className='text-[#E0CCBB] border-b-[1px] border-red-500 w-fit' >Our Story</h4>
        </div>

        <hr className='border-[#B5A598] border-[1.5px] my-8 w-[95%] sm:ml-[1rem] sm:w-[91%]' />
        <div className='w-full flex gap-24 text-[#B5A598]  text-sm items-center '>
        <ul className='px-3 pb-3 hidden sm:block sm:text-[1.1rem]'>
                <li className='py-1  sm:my-1'>Willem II Singel 8</li>
                <li className='py-1 sm:my-1'>6041 HS, Roermond</li>
                <li className='py-1 sm:my-1'>The Netherlands</li>
                <li className='py-1 sm:my-1'>hello@exoape.com</li>
            </ul>

            <ul className='px-3 pb-3 sm:text-[1.1rem]'>
                <li className='py-1 sm:my-1'>Work</li>
                <li className='py-1 sm:my-1'>studio</li>
                <li className='py-1 sm:my-1'>news</li>
                <li className='py-1 sm:my-1'>contact</li>
            </ul>
            <ul className='px-3 pb-3 sm:text-[1.1rem]'>
                <li className='py-1 sm:my-1'>Behance</li>
                <li className='py-1 sm:my-1'>Dribble</li>
                <li className='py-1 sm:my-1'>Twitter</li>
                <li className='py-1 sm:my-1'>Instagram</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Footer