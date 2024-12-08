import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase.config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const Apicon = createContext()
const auth = getAuth(app)



export default function ContextPro({children}) {

    let [server,SetServer] = useState([])
  

    let [api,setApi] = useState([])
    let [arrData, setArrData] = useState([])
    let [oldData,setOlddata] = useState({})
    let [user,setUser] = useState()
    let [loading,setLoading] = useState(true)
    let [theme,setTheme] = useState('light')

    function th(value){
        if(value == 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }

    }
    

    useEffect(()=>{

        async function serverApi(){
            let url = await fetch('https://movie-server-coral.vercel.app/fav')
            let data = await url.json()
            console.log(data);
            
            SetServer(data)
           
            
        }

        serverApi()
    },[])

    useEffect(()=>{

        async function baby(){
            // let url = await fetch('./movie.json')
            let url = await fetch('https://movie-server-coral.vercel.app/movies')
            let data = await url.json()
            setApi(data)
            
            
        }
        baby()

    },[])

    const handleDelete = (id) => {
        setArrData((prevMovies) => prevMovies.filter((movie) => movie._id !== id));
      };

    function handaleClick(passData){
        let oldDataAll = passData
        // let newArr = [...arrData, passData]
        // setArrData(newArr)
        
        
       setOlddata(oldDataAll)
       
     
       
      
    }

    // console.log(arrData);
    

    function singUp(email,password){

        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)

    }

    function singIn(email,password){
setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    useEffect(()=>{
        let holddata = onAuthStateChanged(auth,(x)=>{
            setUser(x)
            setLoading(false)


        })

        return ()=>{
          holddata()
        }
    },[])

    const googleProvider = new GoogleAuthProvider()

    function googlePopSing(){
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    function singsOut(){
        return signOut(auth).then(()=>{

        })
    }

    


    function updatePro(name,photo){
       updateProfile(auth.currentUser ,{
        displayName:name,photoURL:photo
       }).then(()=>{})
    }

    function forgetPass(email){
        return sendPasswordResetEmail(auth,email)

        

    }


  return <Apicon.Provider value={{api,setApi,handaleClick,arrData,setArrData,oldData,setOlddata,singUp,singIn,user,setUser,googlePopSing,singsOut,loading,updatePro,forgetPass,server,SetServer,handleDelete,th}}> {children} </Apicon.Provider>
  
}