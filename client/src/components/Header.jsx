import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div className="bg-black border-yellow-300 border-2 rounded-sm ">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
            <Link to="/" >
            <h1 className="font-bold text-white border-white border-2 rounded-sm ">AUTH APP</h1>
            </Link>
            <ul className="flex gap-4" >
            <Link to="/" >
                <li className='text-white'>HOME</li>
            </Link>
            <Link to="/about" > <li className='text-white'>ABOUT</li></Link>    
               
            <Link to="/sign-in" > <li className='text-white'>SIGN-IN</li>   </Link>
                
            </ul>
        </div>
    </div>
  )
}
