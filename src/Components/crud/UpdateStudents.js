import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function UpdateStudents() {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const{id}=useParams();
    const Navigate=useNavigate();

    function handleSubmit(enent){
        event.preventDefault();
        axios.put('http://localhost:8000/update',{ id,name,email})
        .then(res=>{console.log(res)
        Navigate('/')
    }).catch(err=>console.log(err))
    }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='w-50 bg-white rounded p-3'>
           <form onSubmit={handleSubmit}>
              <h2> Update Students</h2>
              <div className='mb-2'>
                <label htmlfor="">Name</label>
                <input type='text ' placeholder='Enter name'
                onChange={e=>setname(e.target.value)}/>
              </div>
              <div className='mb-2'>
                <label htmlfor="">Email</label>
                <input type='email' placeholder='Email'
                onChange={e=>setemail(e.target.value)}/>

              </div>
              <button className='btn btn-blue'>Update</button>
           </form>
        </div>
      
    </div>
  )
}

export default UpdateStudents
