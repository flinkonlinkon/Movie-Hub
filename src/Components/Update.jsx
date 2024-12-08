import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Swal from 'sweetalert2';

export default function Update() {
    const{id}=useParams
        let data = useLoaderData()
        
        console.log(data);
        let [movietitle,setMovietitle] = useState(data?.movietitle)
        let [duration,setduration] = useState(data?.duration)
        let [movieposter,setmovieposter] = useState(data?.movieposter)
        let [year,setyear] = useState(data?.year)
        let [rating,setrating] = useState(data?.rating)
        let [genre,setgenre] = useState(data?.genre)
        let [summary,setsummary] = useState(data?.summary)

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

        fetch(`http://localhost:5000/update/${data._id}`,{
          method:'PATCH',
          headers:{
            'content-type' : 'application/json'
          },
          body: JSON.stringify(newMovie)
        })
        .then(res => res.json())
        .then(data => {console.log(data)
          if(data.matchedCount){
            Swal.fire({
              title: 'Success!',
              text: 'Update Movie Successfully',
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

        <input value={movietitle} onChange={(e)=> setMovietitle(e.target.value)} required name='movietitle' type="text" placeholder="Movie Title" className="input input-bordered w-full max-w-xs" />
        <input value={movieposter} onChange={(e)=> setmovieposter(e.target.value)} required name='movieposter' type="text" placeholder="Movie Poster url" className="input input-bordered w-full max-w-xs" />
        <input value={duration} onChange={(e)=> setduration(e.target.value)} required name='duration' type="text" placeholder="Duration in minute" className="input input-bordered w-full max-w-xs" />
        <input value={year} onChange={(e)=> setyear(e.target.value)} required name='year' type="text" placeholder="Release Year" className="input input-bordered w-full max-w-xs" />
        <input value={rating} onChange={(e)=> setrating(e.target.value)} required name='rating' type="text" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
        <select value={genre} onChange={(e)=> setgenre(e.target.value)}  name='genre' onChange={handleMovieInput} className="select select-success w-full max-w-xs">
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
        <input value={summary} onChange={(e)=> setsummary(e.target.value)} required name='summary' type="text" placeholder="Summary " className="input input-bordered input-lg w-full " />
        
 

        <input  className='btn' type="submit" value="Update movie" />
        


        </form>
        </div>
      
    </div>
  )
}