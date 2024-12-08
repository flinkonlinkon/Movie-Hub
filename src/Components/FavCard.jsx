import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Apicon } from './ContextPro';

export default function FavCard({x,server}) {
  let {SetServer} =useContext(Apicon)
    const {_id,movietitle,movieposter,duration,year,rating,summary,genre} = x || {};

    function handleDelete(id){

     
      console.log(id);


      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/fav/${id}`,{
            method:'DELETE',
          }).then(res => res.json()).then(result=>{
            if(result.deletedCount>0){
              Swal.fire({
                title: "Deleted!",
                text: "Your Favorite Movie has been deleted.",
                icon: "success"
              });
            }

            const newData = server.filter(x => id != x._id)
            SetServer(newData)
          })
          
         
        }
      });
      
    }
    
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={movieposter}
      alt={movietitle}
      className="rounded-xl w-80 h-40 object-cover" />
  </figure>
  <div className="card-body">
    <div className='flex justify-between shadow-md p-2'>
    <div>

    <h2 className="card-title font-bold">{movietitle}</h2>
    </div>

    <div>
      Genre:

    {
        genre
    }
    </div>
    </div>
    <div className='font-bold'>

      <div>Duration:{duration}</div>
      <div>Rating:{rating}</div>
      <div>Year:{year}</div>



    </div>
    
   
    <div className="card-actions">
        
        <button onClick={()=>handleDelete(_id)} className="btn btn-primary text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-none">DELETE</button>
     
      
    </div>
  </div>
</div>
    </div>
  )
}
