import { useState } from 'react'
import './App.css'
import { images } from './components/Portfolio/images/images'
import { Portfolio } from './components/Portfolio/Portfolio.jsx'

const filters = ["All", "Websites", "Flayers", "Business Cards"];
  
function App() {
  return (
    <>
      <Portfolio 
        filters={filters}
        projects={images}
      />
    </>
  )
}

export default App
