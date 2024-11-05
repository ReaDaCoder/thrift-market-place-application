import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LogiPage from '../public/pages/LoginPage';
import RegistrationPage from '../public/pages/RegistrationPage';
import HomePage from '../public/pages/HomePage';
import SellPage from '../public/pages/SellPage';
import './login.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
     <Route index element={<LogiPage />} />
     <Route path="/RegistrationPage" element={<RegistrationPage />} />
     <Route path="/HomePage" element={<HomePage />} />
     <Route path="/SellPage" element={<SellPage />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
