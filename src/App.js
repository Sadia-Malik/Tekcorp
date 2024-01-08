import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Topsection from './Component/Header/Topsection';
import Footer from './Component/Footer/Footer';
import OurStrategic from './Component/OurStrategic';


function App(){
  return(
    <div>
      <Routes>
        <Route exact path="/" element= {<> 
        <Topsection/>
        <OurStrategic/>
         <Footer/> </> } /> 
        {/* <Route exact path="/" element={<Footer/>} /> */}
     
     </Routes>
    </div>
  );
}








  export default App;

