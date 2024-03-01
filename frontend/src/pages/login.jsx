import React from 'react'
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <div className='flex flex-col justify-center min-w-96 mx-auto items-center'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
               <span className='text-gray-400'>ChatApp</span>
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='text' placeholder='Enter username'></input>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='password' placeholder='Enter password'></input>
                </div>

                <span className="flex items-center justify-between">
                    Don't have an account?{" "}
                    <span>
                        <a href=''>Create account</a>
                    </span>
                </span>

                <div>
                    <button className='btn btn-black btn-sm mt-2'>Login</button>
                </div>
          
            </form>
        </div>

    </div>
  )
}

export default Login;