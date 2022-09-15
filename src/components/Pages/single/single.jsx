import "./single.css"
import Sidebar from '../../sidebar/sidebar'
import Singlepost from "../../singlepostcomponent/singlepost"
export default function single() {
  return (
    <div className='single'>
            <Singlepost/>
            <Sidebar/>
    </div>
  )     
}