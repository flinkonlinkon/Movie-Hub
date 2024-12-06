import React, { useContext } from 'react'
import { Apicon } from './ContextPro'
import Myprofile from './Myprofile'
import { Navigate } from "react-router-dom";
import Loa from './Loa';

export default function PrivateRoute({children}) {
    let {user,loading} = useContext(Apicon)

    if(loading){
        return <Loa></Loa>
    }

    if(user){
        return children
    }else{

        return <Navigate to='/login'></Navigate>

    }
  
}