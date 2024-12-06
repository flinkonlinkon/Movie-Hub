import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Apicon } from './ContextPro';
import Navbar from './Navbar';

export default function Login() {

  const {singIn,setUser,googlePopSing,forgetPass} = useContext(Apicon)
  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault()

    let email = e.target.email.value
   
    let password = e.target.password.value

    singIn(email,password).then(x => {
      setUser(x.user)
    navigate('/')
    })

    
    

  }

  function fPass(){
    navigate('/forgetpass')
  }

  function popG(){
    googlePopSing().then(x => {
      setUser(x.user)
      navigate('/')
    })
  } 
  

  
  return (
    <>
    <Navbar></Navbar>
    <div>

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={fPass} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      </form>
      <div className="mt-6">
          <button onClick={popG} className="btn btn-primary">Login With Google</button>
        </div>

      <p className='text-center'> <span className='text-lg font-bold'>Don't Have An Account ? </span> <span onClick={()=>navigate('/singup')} className='text-red-400 font-bold cursor-pointer'>Register</span></p>



    </div>
  </div>
</div>
      
    </div>
    </>
  )
}