import React, { useContext } from 'react'
import { Apicon } from './ContextPro'
import { Link } from 'react-router-dom';

export default function Card({datay}) {
    let {handaleClick} = useContext(Apicon)
    const {movieTitle,moviePoster,duration,year,rating,summary,genre} = datay || {};

    
    
    
    
    
    
    
    
    
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={moviePoster}
      alt={movieTitle}
      className="rounded-xl w-80 h-40 object-cover" />
  </figure>
  <div className="card-body">
    <div className='flex justify-between shadow-md p-2'>
    <div>

    <h2 className="card-title font-bold">{movieTitle}</h2>
    </div>

    <div>
    {
        genre?.map(x => <p className='font-semibold'>{x}</p>)
    }
    </div>
    </div>
    <div className='font-bold'>

      <div>Duration:{duration}</div>
      <div className='relative left-[-42px]'>Rating:{rating}</div>
      <div className='relative left-[-42px]'>Year:{year}</div>



    </div>
    
   
    <div className="card-actions">
        <Link to='/details'>
        <button onClick={()=> handaleClick(datay)} className="btn btn-primary text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-none">More Details</button>
        </Link>
      
    </div>
  </div>
</div>
    </div>
  )
}