import React from "react";
import Typed from 'typed.js';
import WAVES from 'vanta/dist/vanta.waves.min'
import { useState, useEffect, useRef } from "react";
import venkat from '../assets/venkat.png'
import ProjectPage from "./ProjectPage";


function MainPage() {

  //typedjs
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Student', 'Web Developer', 'Freelancer'],
      typeSpeed: 50,
      backSpeed: 60,
      loop: true,
      smartBackspace: true

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      
        <div className="flex-container">
          <div className="mainpage-container">
            <p>Venkata Krishnan R</p>

            <span ref={el} className="typed-container" />

          </div>


          <div className="flip-card ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={venkat} alt="Avatar" style={{ borderRadius:"10px" , width: "400px", height: "450px" }} />
              </div>
             
            </div>
          </div>


        </div>
        
      
      
    </>
  )
}
export default MainPage
