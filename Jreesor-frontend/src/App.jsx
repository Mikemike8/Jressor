import { useState } from 'react'

import './App.css'
import { Nav } from './components/Nav'
import Hero from './components/Hero'
import { Who } from './components/Who'
import ServicesOverview from './components/Services'
import HowItWorks from './components/How'

function App() {

  return (
    <>
<Nav/>
<Hero/>
<Who/>
<ServicesOverview/>
<HowItWorks/>

    </>
  )
}

export default App
