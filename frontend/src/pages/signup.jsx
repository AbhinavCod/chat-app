import React from 'react'
import { useState } from 'react'
import GenderCheckbox from '../components/GenderCheckbox'
import useSignup from '../components/hooks/useSignup'

const SignUp = () => {
    const {loading,signup} = useSignup();

    const [inputs,setInputs] = useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    })

    const handleCheckboxChange = (gender)=>{
        setInputs({...inputs,gender})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(inputs);
        await signup(inputs);
    }
  return (
    <div className='flex flex-col items-center min-w-96 justify-center mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-4xl py-3 font-semibold text-center text-gray-300'>Sign Up ChatApp</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='text' placeholder='Abhinav Kumar' value={inputs.fullName} 
                    onChange={(e)=> setInputs({...inputs,fullName:e.target.value})}></input>
                </div>


                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='text' placeholder='abhinav'
                    value={inputs.username}
                    onChange={(e)=> setInputs({...inputs, username:e.target.value})}></input>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='password' placeholder='Enter password'
                    value={inputs.password}
                    onChange={(e)=> setInputs({...inputs,password:e.target.value})}></input>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='password' placeholder='Confirm Password'
                    value={inputs.confirmPassword}
                    onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})}></input>
                </div>

               <GenderCheckbox onCheckBoxChange = {handleCheckboxChange} selectedGender={inputs.gender} />


                <span className="flex items-center justify-between">
                    Already have an account?{" "}
                    <span>
                        <a href='/login'>Login to account</a>
                    </span>
                </span>

                <div>
                    
                    <button className='btn btn-black btn-sm mt-2 border border-slate-700' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default SignUp