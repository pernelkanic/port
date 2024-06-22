
import React from "react";
import MainPage from "./MainPage";
import ProjectPage from "./ProjectPage";
import WAVES from 'vanta/dist/vanta.waves.min'
import { useState, useEffect, useRef } from "react";
import BlogsComponent from "./BlogsComponent";
import ContactComponent from "./ContactComponent";
function ParentComponent() {
  //vantajs
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const myRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: window.outerHeight,

        minWidth: window.outerWidth,
        scale: 1.00,
        zoom: 0.61,
        scaleMobile: 5.00,
        color: 0x0e0d0d,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    
    <>
 
        <div style={{position:"fixed", display:"flex", justifyContent:"center" , flexDirection:"column" , width:"100%" , height:"100%"}} ref={myRef}></div> 
    <div  style={{ display:"flex", justifyContent:"center" , flexDirection:"column"}}>
            <MainPage/>
           <ProjectPage/>
           <BlogsComponent/>
           <ContactComponent/>
           <div className='copyright'>© 2024 Venkatakrishnan</div>
           </div>
        

      </>

  )
}

export default ParentComponent;
