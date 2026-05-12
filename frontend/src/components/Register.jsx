import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Auth.css'

function Register(){
    const [user,setUser]=useState({})
    const API_URL=import.meta.env.VITE_API_URL
    const navigate=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault()

    try {

        const url=API_URL+"/auth/signup"
        const res= await axios.post(url,user)

        if (res.data.error) {
            alert(res.data.error)
            return
        }

        navigate("/login")
    }
    catch (error) {
    console.log(error)
    alert("Registration failed")
    }
}
    return (
    <form  onSubmit={handleSubmit}>
    <div className='auth-page'>
    <div className='auth-container'>
    <h1>Registration Page</h1>
    <p><input type="text" onChange={(e)=>setUser({...user,name:e.target.value})} placeholder="Name"></input></p>
    <p><input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password"></input></p>
    <p><button type="submit">Submit</button></p>
    <p>Already a User?👇🏻</p>
    <p><Link to='/login'><button className="nav-btn">Login</button></Link></p>
    </div>
    </div>
    </form>
)
}

export default Register