import { useState } from 'react';
import {Link} from 'react-router-dom';
export default function SignUp() {
  const [formData,setFormData] = useState({});
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.id]:e.target.value});
    console.log({formData});

  }
  return (
    <div className="p-3 max-w-lg mx-auto " >
      <h1 className="text-3xl text-center font-semibold my-7 ">Sign Up</h1>
      <form className="flex flex-col gap-4" >
        <input type="text" placeholder="Username" id="username" className="bg-slate-200 p-3 rounded-lg" onChange={handleChange} />
        <input type="email" placeholder="Email" id="email" className="bg-slate-200 p-3 rounded-lg"  onChange={handleChange}/>
        <input type="password" placeholder="Password" id="password" className="bg-slate-200 p-3 rounded-lg" onChange={handleChange} />
        <button className="bg-black text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80 " >Sign Up</button>
      </form>
      <div>
        <p>Have an account ?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-400' >Sign In</span>
        </Link>
      </div>
    </div>
  )
}
