import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Work from './components/Work'
import Play from './components/Play'
import Images from './components/Images'
import Spread from './components/Spread'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-[100vh] bg-zinc-100'>
      <Navbar/>
      <Landingpage/>
      <Work/>
      <Play/>
      <Images/>
      <Spread/>
      <Footer/>

    </div>
  )
}

export default App