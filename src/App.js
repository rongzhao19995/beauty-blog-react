import React, { useEffect, useRef, useState, useContext  } from "react";
import './App.scss';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import { AppContext } from './context/AppContext';
import ServiceType from "./pages/ServiceType";
import ServiceDetails from "./pages/ServiceDetails";

function App() {

  // useEffect(() => {
  //   return () => {
  //     window.removeEventListener("scroll", () => handleScroll);
  //   };
  // }, []);

  // const [isSticky, setSticky] = useState(false);

  // const stickyRef = useRef(null);
  // const handleScroll = () => {
  //   window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
  //     ? setSticky(true)
  //     : setSticky(false);
  // };

  // // This function handle the scroll performance issue
  // const debounce = (func, wait = 20, immediate = true) => {
  //   let timeOut;
  //   return () => {
  //     let context = this,
  //       args = arguments;
  //     const later = () => {
  //       timeOut = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     const callNow = immediate && !timeOut;
  //     clearTimeout(timeOut);
  //     timeOut = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  // window.addEventListener("scroll", debounce(handleScroll));

  const { isSticky, stickyRef, isShowX, showHandleHamburger } = useContext(AppContext);

  return (
    <div className="App">
      <NavBar sticky={isSticky} isShowX={isShowX} showHandleHamburger={showHandleHamburger}/>
      {/* <Content> */}
        <Home stickyRef={stickyRef}/>
        {/* <Home2/> */}
        <ServiceType/>
        <ServiceDetails/>
        <ServiceType/>
        <Home2/> 
      {/* </Content> */}

    </div>
  );
}

export default App;
