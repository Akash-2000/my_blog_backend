import "./posts.css"
import Post from "../post/post"
export default function post({post}) {
  return (
    <div className='post'>
      {post.map((p)=>(
        <Post post1={p}/>
      ))}        
    </div>
  )
}
