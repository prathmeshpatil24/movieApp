import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import ExplorePage from './pages/ExplorePage'
import Footer from './components/Footer';
import Error from './components/Error';

function App() {


  return (
    <>
      <div>
        <NavBar></NavBar>{/* NavBar is now within the Router context */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExplorePage />} />

          <Route path='*' element={<Error/>} />
        </Routes>

        <Footer></Footer>
      </div>
    </>
  )
}

export default App
