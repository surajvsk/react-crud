import React, { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


function Students() {
  useEffect(()=>{
    axios.get('http://localhost:8000/')
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
  },[])

  const handleDelete = async(id)=>{
     try {
       await axios.delete('http://localhost:8000/students/'+id)
       window.location.reload()
     } catch (error) {
      console.log(err)
     }
  }
  return (
    <div className=' d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white  p-3 rounded'>
        <Link to='/Create' className='btn btn-success'> Add +</Link>
         <table className='table'>
         <thead>
            <tr>
                <th>Name</th>
                <th> Email</th>
                <th> Action</th>
            </tr>
        </thead>
         </table>
        <tbody>
            {
                Students.map((data,i)=>{
                    <tr key={i}>
                    <td>{data.Name}</td>
                    <td>{data.Email}</td>
                    <td>
                        <Link to={`update/${data.id}`} className='btn btn-primary'>Update</Link>
                        <button className='btn btn-danger  ms-3' onClick={e=>handleDelete(data.id)}>Delete</button>
                    </td>

                    </tr>
                })
            }

        </tbody>

      </div>
    </div>
  )
}

export default Students
