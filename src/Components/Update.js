import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Update = () => {

 const[id,SetId]=useState('0')
 const[name,SetName]=useState('')
 const[content,SetContent]=useState('')
 const navigate = useNavigate();

 useEffect(()=>{
    SetId(localStorage.getItem("id"))
    SetName(localStorage.getItem("name"))
    SetContent(localStorage.getItem("content"))
 },[])

 const handleUpdate = (e) => {
    e.preventDefault();
    console.log("clicked")
    axios.put(`https://6481c98d29fa1c5c50321374.mockapi.io/blog-app/${id}`,
    {
        name : name,
        content : content,
    }
    ).then(()=>{
        navigate('/all')
    });
};




    
 
  return (
    <div className='container'>
    <form>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="container">
    <div className="mb-1">
    <label for="exampleInputEmail1" className="form-label" style={{ marginLeft:"340px"}}><h4>Update Blog</h4></label>
    <input type="text" className="form-control" style={{width:"50%", marginLeft:"340px"}} onChange={(e)=> {SetName(e.target.value)}}  value={name}/>   
   </div>
   <br></br>
   <div class="form-floating">
   <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "170px" ,marginLeft:"340px", width:"50%"}} value={content} onChange={(e)=> {SetContent(e.target.value)}}></textarea>
   <label for="floatingTextarea2" style={{ marginLeft:"340px"}} ></label>
   </div>
   <br></br>
   <button type="submit" className="btn btn-primary" style={{ marginLeft:"640px"}} onClick={handleUpdate} >Update</button>
  </div> 
  </form>
 </div>
  )
}

export default Update
