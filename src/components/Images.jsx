import React from 'react'

function Images() {
  return (
    <div className='w-full sm:h-[135vh] h-[70vh] bg-white sm:pt-32 py-10 px-2 flex items-center justify-center'>
        <div className='sm:w-[27%] sm:h-[85%] w-[40%] h-[64%] bg-red-400 relative'>
            <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" alt="" />
            <div className='absolute w-16 sm:w-[48%] sm:h-[40%] h-24 bg-red-400 top-[7%] sm:right-[-10%] right-[-20%]'>
              <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)" alt="" />
            </div>
            <div className='absolute w-32 sm:w-[100%] aspect-video  bg-red-400 top-[34%] sm:left-[-50%] left-[-55%]'>
              <video className='w-full h-full object-cover' muted loop autoPlay src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
            </div>
            <div className='absolute sm:w-[95%] w-[9rem] aspect-video bg-red-400 top-[80%] left-[-50%]'>
              <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)" alt="" />
            </div>
            <div className='absolute sm:w-[100%] sm:h-[60%] w-36 h-28 bg-red-400 top-[90%] right-[-70%]'>
              <video muted loop autoPlay className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
            </div>

        </div>
    </div>
  )
}

export default Images