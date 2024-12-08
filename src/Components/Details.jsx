import React, { useContext } from 'react'
import { Apicon } from './ContextPro'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

export default function Details() {
    let {arrData,setArrData,handaleClick,setOlddata,oldData} = useContext(Apicon)
    const {_id,movietitle,movieposter,duration,year,rating,summary,genre} = oldData || {};
    console.log(oldData);
    
    function handleTost(id){
      // handaleClick()
      toast.success('Movie Added Successfully')

      fetch('https://movie-server-coral.vercel.app/fav',{
        method:'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(oldData)
      })
      .then(res => res.json())
      .then(data => {console.log(data)
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Favorite Movie Add Successfully',
            icon: 'success',
            confirmButtonText: 'Done'
          })

        }
      })
      
        console.log(id);
        
     
    }

    
    
  return (
    <div className='w-11/12 mx-auto mt-3 mb-3 shadow-lg'>

        <div className='md:flex gap-3 p-3'>

        

        <div>
            <img className='h-[600px] w-[341px] object-cover rounded-2xl' src={movieposter} alt="" />
        </div>
        <div className=''>

            <h1 className='text-2xl font-bold md:text-3xl'>{movietitle}</h1>
            <p className='font-bold mt-3'>Duration: {duration}</p>
            <p>Year: {year}</p>
        
        <p>Rating: {rating}</p>
        
        <div>
        <p className='text-xl font-bold'>Genre:</p>{genre}
        </div>
        <div>
        <p className='text-xl font-bold'>Summary:</p><p className='text-gray-500 font-semibold w-2/3'>{summary}</p>
        </div>

        <button onClick={()=>handleTost(_id)} className='btn bg-gradient-to-r from-green-400 to-blue-500'>Add to Favorite</button>
       
        <ToastContainer />

        


        </div>

        </div>
      
    </div>
  )
}