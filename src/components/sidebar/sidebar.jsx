import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import "./sidebar.css"
import {Link} from "react-router-dom"
export default function Sidebar() {
    const [cat,setcat]=useState([])

    useEffect(()=>{
        const getcats = async()=>{
            const res = await axios.get("http://localhost:5000/api/categories")
            setcat(res.data)
        }
        getcats()
    },[])
  return (
    <div className="sidebar">
        <div className="sidebaritems">
        <span className="sidebartitle">About me</span>
         <img className="sidebarImage" src="https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg?auto=compress&cs=tinysrgb&w=300" alt=""/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia numquam, veniam unde nostrum delectus officiis eos repudiandae sed</p>
        </div>
            <div className="sidebaritems">
                <span className="sidebartitle"> Categories</span>
                <ul className="sidebarlist">
                    {cat.map((e)=>( 
                            <Link to = {`/?cat=${e.name}`} className="link">                    
                             <li className="sidebarlisteitem">{e.name}</li>
                            </Link>
                            ))}
                    
                </ul>

            </div>
            <div className="sidebaritems">
                <div className="sidebartitle">FOLLLOW</div>

                <div className="sidebarsocial">
                    <i class="sidebaricons fa-brands fa-square-facebook"></i>
                    <i class="sidebaricons fa-brands fa-square-twitter"></i>
                        <i class="sidebaricons fa-brands fa-square-pinterest"></i>
                        <i class="sidebaricons fa-brands fa-square-instagram"></i>

                </div>
            </div>
    </div>
  )
}


