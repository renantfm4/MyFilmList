import Login from './components/login/Login'
import Register from './components/register/Register'
import Home from './components/home/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthProvider } from './components/Auth';

export default function App(){

  return(
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </AuthProvider>
    </Router>
    
  )
}
