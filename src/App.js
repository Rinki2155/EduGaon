import './App.css';
import React from 'react';
import Why from './Component2/Why';
import AboutFeild from './Components/Homepage/AboutFeild';
//simport Navbar from './Components/Homepage/Navbar';
import Slider from './Components/Homepage/Slider';
 import Footer from './Footer';
import Registration from './Login/Registration';
import Header from './common/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        {/* <Navbar/> */}
      <Slider/>
      <AboutFeild/> 
      <Registration/>
      <Why/><br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
