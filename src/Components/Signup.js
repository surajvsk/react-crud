import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Signup = () => {

    const[values, setvalues] = useState({
        FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
      });
    
      const handleInput=(event)=>{
        setvalues()
      }
    
      const handleSubmit=(event)=>{
        event.preventDefault();
      }

      
    return (
        <div className='container d-flex justify-content-center  align-items-center  bg-white vh-100'>
           <div className=' bg-primary p-3 rounded w-40'>
           <form action=' ' onSubmit={handleSubmit}>
                <div className=' mb-3 ' > 
                <label htmlFor='FisrtName'><strong>FisrtName </strong></label>
                   <input type='text' placeholder=' First Name'  
                    onChange={()=>handleInput()} className='control-form   w-100'/> 
                </div>
                <div className='mb-3'>
                <label htmlFor='LastName'><strong>LastName </strong></label>
                <input type='text' placeholder=' Last Name'  
                onChange={()=>handleInput()} className='control-form  w-100 '/>
                </div>
                <div className='mb-3'>
                 <label htmlFor='email'><strong>Email </strong></label>
                  <input type='email' placeholder='Emali' 
                  onChange={()=>handleInput()}className='control-form w-100'/>
                </div>
                <div className='mb-3'>
                <label htmlFor='contact'><strong>Contact </strong></label>
                  <input type='contact'placeholder=' Contact' 
                 onChange={()=>handleInput()}className='control-form w-100 '/>
                </div>
                <div className='mb-3'>
                  <label htmlFor='password'><strong>Password </strong></label>
                  <input type='password' placeholder='password'  
                  onChange={()=>handleInput()} className='control-form w-100'/>
                </div>
                <button className='btn btn-success w-100 rounded-0'>SignUp</button>
                 <p> you are agree to own terms and policies</p>
               <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
               
            </form>
             </div>
        </div>
      )
  };
  
  export default Signup;