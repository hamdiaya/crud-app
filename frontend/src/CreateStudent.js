import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateStudent(){
    const [name,setName]= useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/create',{name,email}).then(
            res=>{
                console.log(res);
           navigate('/');}
            ).catch(err=>console.log(err));
    }
    return (
        <div  className=' d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded -p3">
           <form onSubmit={handleSubmit}>
            <h1>Add Student</h1>
            <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="enter name" className="form-control" onChange={data=>setName(data.target.value)}/>
                    
            

            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="enter email" className="form-control" onChange={data=>setEmail(data.target.value)}/>

            </div>
            <button className="btn btn-success" >Submit</button>
           </form>
        </div>  
      </div>
    );
}

export default CreateStudent;