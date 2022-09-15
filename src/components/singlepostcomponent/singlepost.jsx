import "./singlepost.css"
import { useLocation } from "react-router"
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import {Link} from "react-router-dom";
import { useContext } from "react"
import { Context } from "../../context/context"


export default function Singlepost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    console.log(path)
    const [post,setpost]=useState({})
    const  PF = "http://localhost:5000/images/"
     const {user} = useContext(Context)
    const[title,settitle]=useState("")
    const[desc,setdesc]=useState("")
    const [updatedMode,setupdatedMode]=useState(false)

    useEffect(()=>{
        const getpost = async()=>{
            const res = await axios.get(`http://localhost:5000/api/post/${path}`)
            setpost(res.data)
            settitle(res.data.title)
            setdesc(res.data.desc)
        }
        getpost()
    },[path])
    const handleDelete = async()=>{
        try {
                await axios.delete(`http://localhost:5000/api/post/${path}`,{data:{username:user.username}})
                window.location.replace(`/`)    
        } catch (error) {
            
        }
        
    }
    const handleupdate = async()=>{
       try {
                await axios.put(`http://localhost:5000/api/post/${path}`,{username:user.username,title,desc})
                //window.location.reload()
                setupdatedMode(false)    
        } catch (error) {
            
        }
       
    }
    return (
    <div className='singlepost'>
 
        <div className="singlepostwrapper">
            {post.photo && (
            <div className="singleposting">
                <img className="singlepostimg" src={PF+post.photo}/>
            </div>
            )}
            {updatedMode ? (<input type="text" value={title} onChange={(e)=>settitle(e.target.value)}className="singleposttitle" autoFocus />):
            (
                <h1 className="singleposttitle">
                    {title} 
            {post.username === user?.username&&(
            <div className="singleposteditcomtainer">
                <i className="singleposticon fa-solid fa-pen-to-square" onClick={()=>setupdatedMode(true)}></i>
                <i className="singleposticon fa-solid fa-trash" onClick={handleDelete}></i>
            </div>
            )}
            </h1>)}
            <div className="singlepostino">
                <span className="singlepost">Author: 
                    <Link to={`/?username=${post.username}`}className="link"><b>{post.username}</b></Link>
                    </span>
                 <span className="singlepostdate">Date: <b>{new Date(post.createdAt).toDateString()}</b></span>
            </div>
            {updatedMode ? (
                <textarea className="singlepostInput" value={desc} onChange={(e)=>setdesc(e.target.value)}/>    
            ):(
                    <p className="singlepostdescription">{desc}
            </p>
            )}
            {updatedMode &&(
                <button className="singlepostbutton"onClick={handleupdate}>update</button>
            )}
                
            
        </div>
        </div>
  )
}
