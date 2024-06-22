import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'

import './App.css'
import SideBar from './Components/SideBar'
import MainPage from './Components/MainPage'
import ProjectPage from './Components/ProjectPage'
import ParentComponent from './Components/ParentComponent'

function App() {

  return (
    <>
        <aside>
        <SideBar/>
        </aside>
        
        <ParentComponent/>
        
      </>

  )
}

export default App
