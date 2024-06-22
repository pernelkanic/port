import React from "react";
import { Sidebar } from "flowbite-react";  
function SideBar(){

    return(
        <>
        <div className="sidebar">
          <i className="fas fa-times"></i>
       
        <div className="sidebar_items">
          <div className="sidebar_item">
            <i className="fas fa-home"></i>
            <a>Home</a>
          </div>
          <div className="sidebar_item">
            <i className="fas fa-user"></i>
            <a style={{textAlign:"center"}} href="https://drive.google.com/file/d/1RDwZYG0CN-oJ4aCCbiRom9cZWL1TneiZ/view?usp=sharing">Resume</a>
          </div>
          <div className="sidebar_item">
            <i className="fas fa-envelope"></i>
            <a>Projects</a>
          </div>
          <div className="sidebar_item">
            <i className="fas fa-envelope"></i>
            <a>Blogs</a>
          </div>
          <div className="sidebar_item">
            <i className="fas fa-envelope"></i>
            <a>Contact</a>
          </div>
        </div>
        </div>
      </>
    )
}
export default SideBar
