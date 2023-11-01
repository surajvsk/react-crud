import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function CreateStudents() {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const Navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8000/create',{name,email})
        .then(res=>{console.log(res)
            Navigate('/');
        }).catch(err=>console.log(err))
    }

  return (
    <div className=' d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className=' w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Students</h2>
                <div className='mb-2'>
                    <label htmlfor=" ">Name</label>
                    <input type='text' placeholder='Enter Name'
                    onChange={ e=>setname(e.target.value)} className='form-control'/>               
                 </div>
                 <div className='mb-2'>
                    <label htmlfor=''> Email</label>
                    <input type='email' placeholder='enter Email'
                    onChange={ e=>setemail(e.target.value)} className='form-control'/>
                 </div>
                 <button className='btn btn-sucess'> submit</button>
            </form>
        </div>

<table>
    <thead>
        <tr>
            <th>SrNo</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Suraj</td>
            <td>Suraj@gmail.com</td>
        </tr>
    </tbody>
</table>

    </div>
  )
}

export default CreateStudents
