import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Apicon } from './ContextPro';
import Card from './Card';

export default function AllMovies() {

  // let navigate = useNavigate()
  let {api} = useContext(Apicon)
  // let newData = useLoaderData()

  return (
    <div>
         <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-5'>

   
    
         {
  api
    .sort((a, b) => b.rating - a.rating)
    .map(datay => <Card key={datay.id} datay={datay}></Card>)
}

    <Outlet></Outlet>
</div>
      
    </div>
  )
}
