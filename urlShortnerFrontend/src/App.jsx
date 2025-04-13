import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Homepage'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'
import URLShortener from './components/AddurlShortner'
import UserSpecifiedHomepage from './components/UserSpecifiedHomepage'
import ModalLogin from './components/ModelLogin';

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/url' element={<UserSpecifiedHomepage/>}/>
          <Route path='/url/add' element={<URLShortener/>}/>
          <Route path='/modellogin' element={<ModalLogin/>}/>
           
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
