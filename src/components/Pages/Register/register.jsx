import "./register.css"
import {Link} from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export default function Register() {
  const[username,setusername]= useState("")
  const[email,setemail]= useState("")
  const[password,setpassword]= useState("")
  const [error,seterror]=useState(false)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    seterror(false);
    try{
       
        const res = await axios.post(`http://localhost:5000/api/auth/register`,{
      username,
      email,
      password,
    });
    res.data && window.location.replace("/login");
    }catch(error){
        console.log(error)
        seterror(true)
    }
     
  }
  return (
    <div className="register">
       <form className="registerform" onSubmit={handleSubmit}>
        <span className="registertitle">Register</span>
            <label>Username</label>
            <input type="text" className="registerinput" placeholder="enter username..."
            onChange={e=>setusername(e.target.value)}
            />
            <label>Email</label>
            <input type="email" className="registerinput" placeholder="enter email..."
            onChange={e=>setemail(e.target.value)}
            />
            <label>Password</label>
            <input type="password" className="registerinput"placeholder="enter password"
            onChange={e=>setpassword(e.target.value)}
            />
             <button className="registerbutton" type="submit">Register</button>
             {console.log(error)}
             {error && <span style={{color:"red",marginTop:"10px"}}>Something went wrong!</span>}
             <button className="Loginbutton"><Link className="link" to="/login">Login</Link></button>
       </form>
      
    </div>
  )
}
