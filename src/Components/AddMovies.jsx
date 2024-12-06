import React from 'react'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function AddMovies() {

    

    function handleMovieInput(e){
        e.preventDefault()
        let movietitle = e.target.movietitle.value
        let movieposter = e.target.movieposter.value
        let duration = e.target.duration.value
        let year = e.target.year.value
        let rating = e.target.rating.value
        let summary = e.target.summary.value
        const newMovie = {movietitle,movieposter,duration,year,rating,summary}
        console.log(newMovie);
        
        
        
        
        
    }


  return (
    <div className='w-11/12'>
        <Navbar></Navbar>

       

        <div className='w-11/12 mx-auto grid md:grid-cols-2'>
        <form className='w-11/12 mx-auto grid md:grid-cols-2 gap-4' onSubmit={handleMovieInput}>

        <input required name='movietitle' type="text" placeholder="Movie Title" className="input input-bordered w-full max-w-xs" />
        <input required name='movieposter' type="text" placeholder="Movie Poster url" className="input input-bordered w-full max-w-xs" />
        <input required name='duration' type="text" placeholder="Duration" className="input input-bordered w-full max-w-xs" />
        <input required name='year' type="text" placeholder="Release Year" className="input input-bordered w-full max-w-xs" />
        <input required name='rating' type="text" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
        <input required name='summary' type="text" placeholder="Summary " className="input input-bordered input-lg w-full " />
        
 

        <input type="submit" value="Add movie" />


        </form>
        </div>
      
    </div>
  )
}
