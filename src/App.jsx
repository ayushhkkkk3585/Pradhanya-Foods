import { useState } from 'react'
import Offerings from './components/Offerings'
import './App.css'
import CompanyPolicy from './components/CompanyPolicy'
import ServicesOffered from './components/ServicesOffered'
import Footer from './components/Footer'
import Servicesffered from './components/Servicesffered'
import RecipeMason from './components/RecipeMason'

function App() {
  return (
    <>
    <Servicesffered/>
    <Offerings/>
    {/* <RecipeMason/> */}
    {/* <ServicesOffered/> */}
    <CompanyPolicy/>
    <Footer/>
    
    </>
  )
}

export default App
