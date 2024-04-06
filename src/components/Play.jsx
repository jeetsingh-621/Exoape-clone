import React from 'react'

function Play() {
  return (
    <div className='w-full h-[100vh] bg-black py-20  text-zinc-300 relative'>
      <div className="motion mb-14 flex items-center justify-center gap-2 text-sm">
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
        <h2>Work in motion</h2>
      </div>

      <div className="video w-full h-[70%] flex justify-center items-center">
        <div className="heading flex gap-32 sm:text-[9.4rem] sm:gap-[36rem] text-5xl capitalize z-10">
          <h2>play</h2>
          <h2>reel</h2>
        </div>
        <div className="video-play w-[50%] sm:w-[30%] bg-red-400 absolute">
        <video muted autoPlay loop  className='w-full  h-full object-cover' src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
        </div>
        
      </div>

      <div className="para flex items-center justify-center w-full sm:mt-20  my-10 text-sm px-8 text-zinc-300">
       <p className='sm:w-[25%] text-center sm:text-center sm:text-[1rem]'>Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
      </div>
    </div>
  )
}

export default Play