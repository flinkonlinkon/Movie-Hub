import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Apicon } from './ContextPro'
import Card from './Card'

export default function MyFavorites() {
  let {arrData} = useContext(Apicon)
  return (
    <div>
        <Navbar></Navbar>
        <div>

        {
  arrData.map(x => <p>hello</p>)
    
}


        </div>
        
      
    </div>
  )
}
