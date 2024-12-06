import React, { useContext } from 'react'
import { Apicon } from './ContextPro'

export default function ForgerPass() {
    let {forgetPass} = useContext(Apicon)
    function handlesub(e){
        e.preventDefault()

        let email = e.target.email.value

        forgetPass(email).then(()=>{
           
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
         
            
          })


   

    }

  return (
    <div>
        <form onSubmit={handlesub}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
      <div className="form-control mt-6">
          <button className="btn btn-primary">Rest Password</button>
        </div>
            
        </form>
      
    </div>
  )
}