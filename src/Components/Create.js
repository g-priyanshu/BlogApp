import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Create = () => {

const [name,SetName] = useState("");
const [content,SetContent] = useState("");

const header = {"Access-Control-Allow-Origin": "*" }

const handleSubmit = (e) => {

    e.preventDefault();
    console.log("clicked")
    axios.post("https://6481c98d29fa1c5c50321374.mockapi.io/blog-app",
    {
        name : name,
        content : content,
        header ,
    }).then(goto('/all'));
};

const goto = useNavigate();




return (
<>
 <form>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="container">
    <div className="mb-1">
    <label for="exampleInputEmail1" className="form-label" style={{ marginLeft:"340px"}}><h4>Blog Name</h4></label>
    <input type="text" className="form-control" style={{width:"50%", marginLeft:"340px"}}  onChange={(e)=> {SetName(e.target.value)}}/>   
   </div>
   <br></br>
   <div class="form-floating">
   <textarea class="span9" placeholder="write your blog here" id="floatingTextarea2" style={{height: "170px" ,marginLeft:"340px", width:"50%"}} onChange={(e)=>{SetContent(e.target.value)}}></textarea>
   
   </div>
   <br></br>
   <button type="submit" className="btn btn-primary" style={{ marginLeft:"640px"}} onClick={handleSubmit} >save</button>
  </div> 
  </form>

  
  
</>
  )
}

export default Create
