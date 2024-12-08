import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Apicon } from './ContextPro'
import Card from './Card'
import FavCard from './FavCard'

export default function MyFavorites() {
  let {server} = useContext(Apicon)
  return (
    <div>
        <Navbar></Navbar>
        <div className='grid md:grid-cols-3 gap-2 w-11/12 mx-auto'>
          

        {
  server.map(x => <FavCard x={x} server={server} ></FavCard>)
    
}


        </div>
        
      
    </div>
  )
}
