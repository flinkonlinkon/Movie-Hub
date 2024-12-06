import React from 'react'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

export default function AddMovies() {

  function toastH(){
    // toast.success('Movie Added Successfully To Your Favorite List')
  }

    

    function handleMovieInput(e){
        e.preventDefault()
        let movietitle = e.target.movietitle.value
        let movieposter = e.target.movieposter.value
        let duration = parseInt(e.target.duration.value)
        let year = parseInt(e.target.year.value) 
        let rating = parseInt(e.target.rating.value)
        let summary = e.target.summary.value
        let genre = e.target.genre.value
        

        const newMovie = {movietitle,movieposter,duration,year,rating,summary,genre}
        console.log(newMovie);

        fetch('http://localhost:5000/movies',{
          method:'POST',
          headers:{
            'content-type' : 'application/json'
          },
          body: JSON.stringify(newMovie)
        })
        .then(res => res.json())
        .then(data => {console.log(data)
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Movie Add Successfully',
              icon: 'success',
              confirmButtonText: 'Done'
            })

          }
        })
        
        
        
        
        
        
    }


  return (
    <div className='w-11/12'>
        <Navbar></Navbar>

       

        <div className='w-11/12 mx-auto grid md:grid-cols-2'>
        <form className='w-11/12 mx-auto grid md:grid-cols-2 gap-4' onSubmit={handleMovieInput}>

        <input required name='movietitle' type="text" placeholder="Movie Title" className="input input-bordered w-full max-w-xs" />
        <input required name='movieposter' type="text" placeholder="Movie Poster url" className="input input-bordered w-full max-w-xs" />
        <input required name='duration' type="text" placeholder="Duration in minute" className="input input-bordered w-full max-w-xs" />
        <input required name='year' type="text" placeholder="Release Year" className="input input-bordered w-full max-w-xs" />
        <input required name='rating' type="text" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
        <select name='genre' onChange={handleMovieInput} className="select select-success w-full max-w-xs">
  <option disabled selected>Pick your genre</option>
  <option>Adventure</option>
  <option>Drama</option>
  <option>Action</option>
  <option>Sci-Fi</option>
  <option>Fantasy</option>
  <option>Crime</option>
  <option>Comedy</option>
  <option>Horror</option>
</select>
        <input required name='summary' type="text" placeholder="Summary " className="input input-bordered input-lg w-full " />
        
 

        <input onClick={toastH} className='btn' type="submit" value="Add movie" />
        <ToastContainer />


        </form>
        </div>
      
    </div>
  )
}
