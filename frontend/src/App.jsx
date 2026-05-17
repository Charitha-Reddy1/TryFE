import { useEffect, useState ,createContext} from "react";
import {BrowserRouter,Route,Routes} from  "react-router-dom"

import "./App.css";

import axios from "axios";
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import Header from './components/Header'
import Home from './components/Home'
import QuizQues from './components/QuizQues'
import QuizTopics from './components/QuizTopics'
import Leaderboard from './components/Leaderboard'


export const AppContext =createContext()

function App() {
  const [user,setUser]=useState({})
  const [cart,setCart]=useState([])
  const [theme, setTheme] = useState("light");

  return (
  <div className={theme}> 
    <AppContext.Provider value={{user,setUser,cart,setCart,theme,
          setTheme,}}>
  <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      <Route path="logout" element={<Logout/>} />
      <Route path="quiz/:topic" element={<QuizQues/>} />
      <Route path="topics" element={<QuizTopics/>}/>
      <Route path='leaderboard' element={<Leaderboard/>}/>
      
      </Routes>

    </BrowserRouter>
    </AppContext.Provider>
    </div>
  )
}


export default App;