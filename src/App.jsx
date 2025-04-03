import React from 'react'
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact"; // Update import
import Test from "./pages/Test";
import Supplychain from './components/Servicecomponent/Supplychain';
import Ai from './components/Servicecomponent/Ai';
import Webapp from './components/Servicecomponent/Webapp';
import Mobileapp from './components/Servicecomponent/Mobileapp';

const App = () => {
  return (
    <>
      <Nav/>
      
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/About" element = {<About/>}/>
        <Route path ='/Services' element = {<Supplychain/>}/>
        <Route path='/Contact' element={<Contact />} /> {/* Update route */}
        <Route path='/Test' element={<Test />} />
        <Route path='/services/supplychain' element={<Supplychain />} />
        <Route path='/services/ai' element={<Ai />} />
        <Route path='/services/webapp' element={<Webapp />} />
        <Route path='/services/mobileapp' element={<Mobileapp />} />
      </Routes>
      <Footer/>
    </>
  )
};

export default App;