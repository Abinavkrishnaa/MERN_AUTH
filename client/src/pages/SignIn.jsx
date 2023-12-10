import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
export default function SignIn() {
  const [formData,setFormData] = useState({});
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.id]:e.target.value});
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      setLoading (true);
      setError(false);
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if(data.success===false){
        setError(true);
        return;
      }
      navigate('/');  
    }catch(error){
      setLoading(false);
      setError(true);
      
    }
    
  };
  
  return (
    <div className="p-3 max-w-lg mx-auto " >
      <h1 className="text-3xl text-center font-semibold my-7 ">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
     
        <input type="email" placeholder="Email" id="email" className="bg-slate-200 p-3 rounded-lg"  onChange={handleChange}/>
        <input type="password" placeholder="Password" id="password" className="bg-slate-200 p-3 rounded-lg" onChange={handleChange} />
        <button disabled={loading} className="bg-black text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80 " >
          {loading ? 'Loading...':'Sign In'}
        </button>
      </form>
      <div>
        <p>Dont Have an account ?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-400' >Sign Up</span>
        </Link>
      </div>
      <p className='text-red-800 mt-5'>{error && 'something shit happened'}</p>
    </div>
  )
}
