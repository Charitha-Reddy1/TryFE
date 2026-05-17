import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Auth.css'

function Register(){
    const [user,setUser]=useState({})
    const [error,setError]=useState("");
    const [showPass,setShowPass]=useState(false);
    const API_URL=import.meta.env.VITE_API_URL
    const navigate=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault();
     
    if(user.name.length < 3){
   setError("Name must be atleast 3 characters");
   return;
}

    if(!user.email || !user.password){
        setError("All fields are required");
        return;
    }
    if(!user.email.includes("@")){
    setError("Enter valid email");
    return;
}

    if(user.password.length<6){
        setError("Password must be atleast 6 characters");
        return;
    }

    const passRegex=/^(?=.*[A-Z])(?=.*[0-9]).+$/;

    if(!passRegex.test(user.password)){
        setError("Password must contain 1 uppercase letter and 1 number");
        return;
    }

    try {

        const url=API_URL+"/auth/signup"
        const res= await axios.post(url,user)

        if (res.data.error) {
            setError(res.data.error)
            return
        }

        navigate("/login")
    }
    catch (error) {
    console.log(error)
    setError("Registration failed")
    }
}
    return (
    <form  onSubmit={handleSubmit}>
    <div className='auth-page'>
    <div className='auth-container'>
    <h1>Registration Page</h1>
    {error && <p className='error-text'>{error}</p>}

      <p><input
      type="text"
      required
      placeholder="Name"
      onChange={(e) =>
        setUser({
          ...user,
          name: e.target.value,
        })
      }
    /></p> 

    <p>
    <input type="email" required onChange={(e)=>
      setUser({...user,email:e.target.value

      })} placeholder="Email"></input></p>
    
    <p className="password-box">

  <input
  required
    type={
      showPass
        ? "text"
        : "password"
    }

    onChange={(e) =>
      setUser({
        ...user,
        password: e.target.value,
      })
    }

    placeholder="Password"
  />

  <span
    className="toggle-password"
    onClick={() =>
      setShowPass(!showPass)
    }
  >

 <i
    className={
      showPass
      ? "fa-solid fa-eye-slash"
      : "fa-solid fa-eye"
    }
  ></i>
  </span>

</p>

    <p><button type="submit">Submit</button></p>
    <p class='aau'>Already a User?👇🏻</p>
    <p><Link to='/login' className="nav-btn">Login</Link></p>
    </div>
    </div>
    </form>
)
}

export default Register