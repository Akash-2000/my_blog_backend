import "./topbar.css"
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { Context } from '../../context/context';

export default function Topbar() {
    const {user,dispatch} = useContext(Context);
    const handlelogout = ()=>{
        dispatch({type:"LOGOUT"})
    } 
    const  PF = "http://localhost:5000/images/"
  return (
    <div className='top'>
        <div className="topLet"><i class="topicons fa-brands fa-square-facebook"></i>
        <i class="topicons fa-brands fa-square-twitter"></i>
        <i class="topicons fa-brands fa-square-pinterest"></i>
        <i class="topicons fa-brands fa-square-instagram"></i>
        </div>
        <div className="topcenter"><ul className="toplist">
            <li className="toplist-item">
                <Link className="link" to="/">HOME</Link>
            </li>
            <li className="toplist-item"> <Link className="link" to="/">ABOUT</Link></li>
            <li className="toplist-item"> <Link className="link" to="/">CONTACT</Link></li>
            <li className="toplist-item"> <Link className="link" to="/write">WRITE</Link></li>
            <li className="toplist-item" onClick={handlelogout}>{user && "LOGOUT"}</li>
            </ul></div>
        <div className="topRight">
            {
                
                user? ( <Link to="/Setting"><img className="topimg" src={PF+user.Profilepic} alt="s"/></Link>):
                   ( 
                    <ul className="toplist">
                    <li className="toplist-item">
                   <Link className="link" to="/login">LOGIN</Link>
                   </li>
                   <li className="toplist-item">
                    <Link className="link" to="/register">REGISTER</Link>
                    </li>
                    </ul>
                   )
            }
            
            <i class="topsearchicon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
  )

  }