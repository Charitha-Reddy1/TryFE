import {Link} from 'react-router-dom'
import axios from 'axios'
import {useContext} from 'react'
import {AppContext} from '../App'
import {useNavigate} from 'react-router-dom'
import "./Auth.css"



function Login(){

    const {user,setUser}=useContext(AppContext)
    const API_URL=import.meta.env.VITE_API_URL
    const navigate=useNavigate()
    const handleLogin = async (e) => {
      e.preventDefault()
  try {
    const url = API_URL + "/auth/signin"
    const response = await axios.post(url, user)

    if (response.data.error) {
      alert(response.data.error)
      return
    }

    setUser(response.data)
    navigate("/")   // ✅ redirect to home
  } catch (error) {
    console.log(error)
    alert("Login failed")
  }

    //     if(cart.length>0) navigate("/cart")
    //     else navigate("/")
    // }

  }
      return (

    <form onSubmit={handleLogin}>
    <div className='auth-page'>
    <div className='auth-container'>
      
      <h2>Login here(Hope you remember your password XD)</h2>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Name"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
      </p>
      <p>
        <button type="submit">Login</button>
      </p>
      <p>
        New user ?👇🏻</p>
        <p><Link to="/register"> 
        <button className="nav-btn">Register</button>
            </Link>
      </p>
   </div>
    </div>
    </form>
  );
}

export default Login