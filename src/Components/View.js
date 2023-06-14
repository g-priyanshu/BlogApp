import React from 'react'
import { useState ,useEffect } from 'react'


const View = () => {


const [name,setname] =useState('')
const [content , setcontent] = useState('')

useEffect(()=>{

    setname(localStorage.getItem("name"))
    setcontent(localStorage.getItem("content"))
},[])

  return (
    <>
    <div className='container' style={{marginTop : "20px"}}>
    <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">{name}</h4>
    <hr></hr>
    <p>{content}</p>
  
  
</div>
    </div>
    
 
</>
  )
}

export default View
