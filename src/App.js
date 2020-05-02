import React, { useEffect, useRef, useState, useContext  } from "react";
import './App.scss';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import { AppContext } from './context/AppContext';
import ServiceType from "./pages/ServiceType";
import ServiceDetails from "./pages/ServiceDetails";
import Artist from './pages/Artist';
import Quotes from "./pages/Quotes";

function App() {
  const { isSticky, stickyRef, isShowX, showHandleHamburger } = useContext(AppContext);

  return (
    <div className="App">
      <NavBar sticky={isSticky} isShowX={isShowX} showHandleHamburger={showHandleHamburger}/>
      {/* <Content> */}
        <Home stickyRef={stickyRef}/>
        {/* <Home2/> */}
        <ServiceType/>
        <ServiceDetails/>
        {/* <ServiceType/> */}
        <Artist/>
        <Quotes/>
      {/* </Content> */}

    </div>
  );
}

export default App;
