import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

export default function Signup() {

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 

  const {createUser} = UserAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(''); 
    try{ 
        await createUser(email, password);  
    } catch (e) {
      setError(e.message); 
      console.log(e.message); 
      console.log(error);
    }
  }

  return (
    <div className='max—w—[700px] mx—auto my—16 p—4' >
      <div>
        <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
        <p className="py-2">
          Don't have an account yet? <Link to="/" className='underline'>Sign in</Link>
        </p>
      </div>
      <form onSubmit={ handleSubmit }>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input onChange={ (e) => setEmail(e.target.value) } type="email" className='border p-3' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input onChange={ (e) => setPassword(e.target.value) } type="password" className='border p-3' />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign up</button>
      </form>

      
    </div>
  )
}
