import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Deals from './components/Deals'
import SpecialMenu from './components/SpecialMenu'
import Review from './components/Review'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
     <Navbar/>

     <Hero/>

     <div id="menu">
      <Menu/>
     </div>

     <div id="deals">
      <Deals/>
     </div>
     
     <div id="special">
      <SpecialMenu/>
     </div>

     <div id="reivew">
       <Review/>
     </div>

      <Footer/>
    </>
    
  )
}

export default App
