import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import JoinRoom from './pages/JoinRoom'
import WhiteBoard from './pages/WhiteBoard'
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>

      <Route path='/' element={<JoinRoom/>}  />
      <Route path='/whiteboard/:roomId' element={<WhiteBoard/>}  />


    
    </Routes>
  <Toaster position="top-right" />

 
    </>
  )
}

export default App
