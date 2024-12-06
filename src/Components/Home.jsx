import React, { useContext } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { Apicon } from './ContextPro'
import Card from './Card'

export default function Home() {
  let navigate = useNavigate()
    let {api} = useContext(Apicon)
    let newData = useLoaderData()
   
    
  return (
    <>
    <div className='w-11/12 mx-auto rounded-lg bg-yellow-300 p-3 mt-10 mb-10'>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/Z6wGcmV/MV5-BMDAy-Y2-Fh-Yjct-NDc5-OS00-MDNl-LThi-MGUt-Y2-Ux-YWVk-NGY2-Zjlj-Xk-Ey-Xk-Fqc-Gc-V1.jpg"
      className="w-full object-cover md:h-96 rounded-lg" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/X4LqXKp/MV5-BMj-Ax-Mz-Y3-Njcx-NF5-BMl5-Ban-Bn-Xk-Ft-ZTcw-NTI5-OTM0-Mw-V1-FMjpg-UX1000.jpg"
      className="w-full object-cover md:h-96" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/Qr6HbQz/jocker.webp"
      className="w-full object-cover md:h-96 rounded-lg" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/hHFJqYQ/MV5-BNm-Qx-Nj-Zl-ZTct-MWJi-MC00-NGMx-LWJj-NTct-NTFi-Nj-A1-Njk3-ZDQ5-Xk-Ey-Xk-Fqc-Gc-V1.jpg"
      className="w-full object-cover md:h-96 rounded-lg" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<div className='font-custom'>
    <h1 className='text-3xl md:text-4xl font-bold text-center'>Enjoy Your Movie Experiences</h1>
    <p className='font-bold w-2/3 text-center mx-auto mt-3 mb-3'>Movies are a powerful medium of storytelling that captivate audiences with compelling narratives, stunning visuals, and emotional depth. They transport viewers to different worlds, spark imagination, and evoke a range of emotions—from laughter to tears. Whether it's a gripping thriller, a heartfelt drama, or an action-packed adventure, movies bring stories to life and create shared experiences that connect people across cultures and generations.</p>
</div>
    </div>

    <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-5'>

   
    
    {
        api.map(datay =>  <Card datay={datay}></Card>)
    }

        <Outlet></Outlet>
    </div>
    <button onClick={()=> navigate('/allmovies')} className='btn mb-5'>See All Movies</button>
    </>
  )
}