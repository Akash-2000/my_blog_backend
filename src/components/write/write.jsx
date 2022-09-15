import { useState } from "react"
import "./write.css"
import axios from "axios"
import { useContext } from "react"
import { Context } from "../../context/context"

export default function Write() {
  const [title,settitle] = useState("")
    const [desc,setdesc] = useState("")
      const [file,setfile] = useState(null)
      const {user} = useContext(Context)

      const handlesubmit = async(e)=>{
        e.preventDefault();
        const newpost = {
          username:user.username,
          title,
          desc,
        };
        if(file){
          const data =new FormData();
          const filename = Date.now() +file.name;
          data.append("name",filename)
          data.append("file",file)
          newpost.photo = filename;
          try {
            console.log("i tried to  put")
            await axios.post("http://localhost:5000/api/upload",data)
            console.log("i compledr to  put")
          } catch (err) {}
        }
        try{
          console.log("i tried to  post")
            const res = await axios.post("http://localhost:5000/api/post",newpost)
            console.log("i complete  post")
            window.location.replace(`/post/${res.data._id}`)
        }catch(err){

        }
      }
  return (
    <div className="write">
      {file &&(
          <img  className="writeimg" src={URL.createObjectURL(file)}/>
      ) }
      
      <form className="writerom" on onSubmit={handlesubmit}>
        <div class="writinggroup">
          <label htmlFor="fileinput">
            <i class="writeicon fa-solid fa-square-plus"></i>
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} onChange={e =>setfile(e.target.files[0])}/>
          <input type="text" placeholder="Title" className="writeinput" autoFocus={true}
          onChange={e =>settitle(e.target.value)} 
          />
        </div>
        <div className="writinggroup">
          <textarea placeholder="Tell your story.." type="text" className="writeinput Writetext"
          onChange={e =>setdesc(e.target.value)}></textarea>
        </div>
        <button className="writesubmit" type="submit">Publish</button>
      </form>
    </div>
  )
}
