import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Update(){
    const [name,setName]= useState('');
    const [email,setEmail]=useState('');
    const {id}=useParams();
    const navigate=useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:3000/update/' +id,{name,email}).then(
            res=>{
                console.log(res);
           navigate('/');}
            ).catch(err=>console.log(err));
    }
    return (
        <div  className=' d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded -p3">
           <form onSubmit={handleSubmit}>
            <h1>Update student info</h1>
            <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="enter name" className="form-control" onChange={data=>setName(data.target.value)}/>
                    
            

            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="enter email" className="form-control" onChange={data=>setEmail(data.target.value)}/>

            </div>
            <button className="btn btn-success" >Update</button>
           </form>
        </div>  
      </div>
    );
}

export default Update;