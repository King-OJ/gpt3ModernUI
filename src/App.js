import React from 'react'
import { Brand, CTA,  Navbar } from './components'
import { Footer, Blog, Features, Possibility, WhatGPT3, Header } from './containers'
import './app.css'

function App() {
  return (
    <div className="App">
       <div className="gradient__bg">
         <Navbar />
         <Header />
       </div>
       <Brand />
       <WhatGPT3 />
       <Features />
       <Possibility />
       <CTA />
       <Blog />
       <Footer />
    </div>
  )
}

export default App