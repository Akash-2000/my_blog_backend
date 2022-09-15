import "./setting.css"
import Sidebar from "../../sidebar/sidebar"
import { useContext } from "react"
import { Context } from "../../../context/context"
import { useState } from "react"
import axios from "axios"
export default function Setting() {
    const [file,setfile] = useState(null)
    const [username,setusername] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [sucess,setsucess] = useState(false)
    const {user,dispatch} = useContext(Context)
    const  PF = "http://localhost:5000/images/"
    const handlesubmit = async(e)=>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updateduser = {
          userId:user._id,
          username,
          email,
          password,
        };
        if(file){
          const data =new FormData();
          const filename = Date.now() +file.name;
          data.append("name",filename)
          data.append("file",file)
          updateduser.Profilepic = filename;
          try {
            console.log("i tried to  put")
            await axios.post("http://localhost:5000/api/upload",data)
            console.log("i compledr to  put")
          } catch (err) {}
        }
        try{
           const res= await axios.put(`http://localhost:5000/api/users/${user._id}`,updateduser)
            setsucess(true)
            dispatch({type:"UPDATE_SUCESS",payload:res.data})
        }catch(err){
            dispatch({type:"UPDATE_fAILURE"})
        }
      }
  return (
    <div className="setting">
        <div className="settingwrapper">
            <div className="settingtitle">
                <div className="settingupdatetitle">update your account</div>
                <div className="settingdeletetitle">Delete account</div>
            </div>
            <form className="settingForm" onSubmit={handlesubmit}>
                <label>Profile picture</label>
                <div className="profilepicture">
                    <img src={file ? URL.createObjectURL(file):PF+user.Profilepic}></img>
                    <label htmlFor="fileinput">
                        <i class=" setprofileicon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileinput" style={{display:"none"}} onChange={e =>setfile(e.target.files[0])}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={e =>setusername(e.target.value)}/>
                                <label>Email</label>
                <input type="text" placeholder={user.email} onChange={e =>setemail(e.target.value)}/>
                                <label>Password</label>
                <input type="password" placeholder="password" onChange={e =>setpassword(e.target.value)}/>
                <button type="submit" className="settingUpdate">update</button>
                {sucess && (
                    <span style={{color:"green", textAlign:"center",marginTop:"20px"}}>Profile uploded...</span>
                )}                
            </form>
        </div>
         <Sidebar/>
    </div>
  )
}
