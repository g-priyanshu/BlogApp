import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';




const Read = () => {



const[data,setData]=useState([]);

function getdata() {
  axios.get("https://6481c98d29fa1c5c50321374.mockapi.io/blog-app")
  .then((res) => {
    setData(res.data);
  });
}

useEffect(()=>{
  getdata();
},[])


function handleDelete(id){
  axios.delete(`https://6481c98d29fa1c5c50321374.mockapi.io/blog-app/${id}`).then(()=>{
    getdata();
  })
}


function settolocal(id,name,content){
  localStorage.setItem("id",id)
  localStorage.setItem("name",name)
  localStorage.setItem("content",content)
}


  return (
    <div className='container' style={{width: "70%", marginTop:"20px"}}>
     <table class="table">
  <thead>
    <tr>
      <th scope="col" ><h4 style={{color: '#4F709C'}}>Read Your Favourite Blog</h4></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>

  {

     data.map((each)=>{
      return(
        <>
        <tbody>
        <tr>
          <td style={{paddingInlineEnd:"500px"}}><h5>{each.name}</h5></td>
          <td>
          <Link to="/View">
          <button type="button" class="btn btn-info" onClick={()=>settolocal(each.id,each.name,each.content)}>View</button>
          </Link>
          </td>
          <td>
          <Link to="/Update">
          <button type="button" class="btn btn-primary" onClick={()=>settolocal(each.id,each.name,each.content)} >Edit</button>
          </Link>
          </td>
          <td><button type="button" class="btn btn-danger"  onClick={()=>handleDelete(each.id)}>Delete</button></td>
        </tr>
        </tbody>
        </>
       
     )
     })
    
  }
 
</table>
    </div>
  )
}

export default Read
