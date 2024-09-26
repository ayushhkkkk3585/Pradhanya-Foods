import React, {useState, useEffect} from 'react'
import Home from './Home'
import Servicesffered from './Servicesffered'
import Offerings from './Offerings'
import Mason from './Mason'
import CompanyPolicy from './CompanyPolicy'
import Footer from './Footer'
import Lenis from 'lenis'

const CoreComponent = () => {
    useEffect(() => {
      const lenis= new Lenis();
      function raf(time){
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

    }, [])
    
  return (
    <>
    <Home/>
    <Servicesffered/>
    <Offerings/>
    <Mason /> 
    <CompanyPolicy/>
    <Footer/>
    
    
    
    
    
    </>
  )
}

export default CoreComponent