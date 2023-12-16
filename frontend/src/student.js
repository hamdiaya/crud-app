import React, { useEffect, useState }  from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
function Student() {
  const [student,setStudent]=useState([]);
   useEffect(()=>{
    axios.get('http://localhost:3000/').then(res=> setStudent(res.data));
   });
   const handleDelete = async(id)=>{
   try{
     await axios.delete('http://localhost:3000/delete/'+id);
     window.location.reload();
   }catch(err){
   console.log(err);
   }
   }
    return (
      <div  className=' d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded">
           <Link to ="/create"><button className="btn btn-success">Add +</button></Link> 
            <table className="table">
               <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
               </thead>
               <tbody>
                {
                  student.map((data,i)=>(
                    <tr key={i}>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td><Link to={`/update/${data.id}`}><button className="btn btn-primary">Update</button></Link></td>
                      <td><button className="btn btn-danger" onClick={e=>handleDelete(data.id)}>Delete</button></td>
                    </tr>
  
                  ))
                }
               </tbody>
            </table>
        </div>  
      </div>
    );
  }
  export default Student;