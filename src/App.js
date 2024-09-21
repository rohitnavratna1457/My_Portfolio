import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Component/Home';
// import Aboutpage from './Component/About';
import Projectpage from './Component/Project'
// import Blogpage from './Component/Blog';
import Servicepage from './Component/Service';
import Navbar from './Component/Navbar';
import Contactpage from './Component/Contact';
import Footer from './Component/Footer';
// import Project1 from './Component/Project/Project1';
import Project1 from './Component/Project/Project1';
import Chat from './Component/Chatbot/Chat';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> {/* Navbar is now included here */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          {/* <Route path='/about' element={<Aboutpage />} /> */}
          <Route path='/Project' element={<Projectpage />} />
          <Route path='/service' element={<Servicepage />} />
          <Route path='/Contact' element={<Contactpage />} />
        </Routes>
      </BrowserRouter>
      {/* <Project1/> */}
      {/* <Chat/> */}
      <Footer/>
     
    </div>
  );
}

export default App;
