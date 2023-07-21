import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import Home from './component/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
