import './post.css'
import {Link} from "react-router-dom"
//{PF+post1.post1.photo}
export default function post(post1) {
  const  PF = "http://localhost:5000/images/"
  {console.log(PF+post1.post1.photo)}
  return (
    
    <div className='post'>
      {post1.post1.photo && (
        
        <img className='postimg' src={PF+post1.post1.photo} alt=""/> )}
        
        <div className="postino">
            <div className="postcategory">
                {post1.post1.categories.map((c)=>{
                    <span className='postcat'>{c.name}</span>
                })}
                
            </div>
            <Link to={`/post/${post1.post1._id}`} className="link">
               <span className="postittle">{post1.post1.title}</span>
            </Link>
            <hr />
            <span className="postdate">{new Date(post1.post1.createdAt).toDateString()}</span>
            <p className="postdescription">{post1.post1.desc}</p>
        </div>
    </div>

  )
}
