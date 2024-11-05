import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LogiPage from '../public/pages/LoginPage';
import RegistrationPage from '../public/pages/RegistrationPage';
import './login.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
     <Route index element={<LogiPage />} />
     <Route path="/RegistrationPage" element={<RegistrationPage />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
