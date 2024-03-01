import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center min-w-96 justify-center mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up ChatApp</h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='text' placeholder=''></input>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='text' placeholder='Abhinav Kumar'></input>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='text' placeholder='abhinav'></input>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='password' placeholder='Enter password'></input>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='password' placeholder='Confirm Password'></input>
                </div>

                <div className='flex'>
                    <div className='form-control'>
                        <label className={'label gap-2 cursor-pointer'}>
                            <span className='label-text'>Male</span>
                            <input type='checkbox' className='checkbox border-slate-900'></input>
                        </label>
                    </div>

                    <div className='form-control'>
                        <label className={'label gap-2 cursor-pointer'}>
                            <span className='label-text'>Female</span>
                            <input type='checkbox' className='checkbox border-slate-900'></input>
                        </label>
                    </div>

                </div>


                <span className="flex items-center justify-between">
                    Already have an account?{" "}
                    <span>
                        <a href=''>Login to account</a>
                    </span>
                </span>

                <div>
                    <button className='btn btn-black btn-sm mt-2 border border-slate-700'></button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default SignUp