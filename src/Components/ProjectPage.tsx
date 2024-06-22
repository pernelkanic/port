import React from "react";
import Typed from 'typed.js';
import WAVES from 'vanta/dist/vanta.waves.min'
import { useState, useEffect, useRef } from "react";
import venkat from '../assets/venkat.png'


function ProjectPage() {
 

  return (
    <>
    <div className="projectpage-parent">
      <div className="projectPage-container">
      <h2 className="cyberpunk">01</h2>
      <h3 className="title">Online ticketing system using <br />microservices</h3>
      <button onClick={()=>{
        window.location.href="https://github.com/pernelkanic/MovieBooking_Microservices"
      }} className="viewproject"><span>View project</span></button>
      </div>
      <div>
        <img src={venkat}  alt="" />
      </div>
      </div>
      <div className="projectpage-parent1">
      <div className="projectPage-container">
      <h2 className="cyberpunk1">02</h2>
      <h3 className="title">Coding Platform using <br/>Node JS</h3>
      <button  onClick={()=>{
        window.location.href="https://github.com/pernelkanic/coding-platform-serious"
      }} className="viewproject"><span>View project</span></button>
      </div>
      <div>
        <img src={venkat}  alt="" />
      </div>
      </div>
      <div className="projectpage-parent2">
      <div className="projectPage-container">
      <h2 className="cyberpunk2">03</h2>
      <h3 className="title">Assignment Submission Application <br />using Spring</h3>
      <button onClick={()=>{
        window.location.href="https://github.com/pernelkanic/Assignment-Application"
      }} className="viewproject"><span>View project</span></button>
      </div>
      <div>
        <img src={venkat}  alt="" />
      </div>
      </div>
    </>
  )
}
export default ProjectPage
