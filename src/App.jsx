import React from 'react'
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <>
      <Nav/>
      
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/About" element = {<About/>}/>
        <Route path ='/Services' element = {<Services/>}/>
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
};

export default App;