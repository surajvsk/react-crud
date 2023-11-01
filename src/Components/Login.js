import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

    console.log('Here:::::::')
    const[values,setvalues] = useState({
      Email:'',
      Password:''
    })
    const handleInput=(event)=>{
      setvalues(prev=>({ ...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
      event.preventDefault();
      setvalues(values);
    }

    return (
        <div className='d-flex justify-content-center  align-items-center vh-100 bg-white'>
        <div className='bg-primary p-3 rounded w-30'>
          <h2>Login</h2>
        <form action=''  onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='email'><strong>Email </strong></label>
              <input type='email' placeholder='Emali' 
               onChange={handleInput} className='control-form rounded-0 w-100 '/>
            </div>
            <div className='mb-3'>
              <label htmlFor='Password'><strong> Password</strong> </label>
              <input type='password' placeholder='password' 
                onChange={handleInput} className='control-form rounded-0 w-100'/>
            </div>
            <button className='btn btn-success w-100 rounded-0'> Log in</button>
            <Link to="/create" ><button> return to home</button></Link>
          </form>
          </div>    
    
    </div>
      )
  };
  
  export default Login;