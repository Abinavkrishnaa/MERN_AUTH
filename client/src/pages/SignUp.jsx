import {Link} from 'react-router-dom';
export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto " >
      <h1 className="text-3xl text-center font-semibold my-7 ">Sign Up</h1>
      <form className="flex flex-col gap-4" >
        <input type="text" placeholder="Username" id="username" className="bg-slate-200 p-3 rounded-lg"  />
        <input type="email" placeholder="Email" id="email" className="bg-slate-200 p-3 rounded-lg"  />
        <input type="password" placeholder="Password" id="password" className="bg-slate-200 p-3 rounded-lg"  />
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
