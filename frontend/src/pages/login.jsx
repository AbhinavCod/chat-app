import React,{useState} from 'react'
import toast from "react-hot-toast";
import {useAuthContext} from "../context/AuthContext";


const Login = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleInputError = ({username,password})=>{
        if(!username || !password){
            toast.error("Please fill all the fields 😒");
            return false;
        }
    
        if(password.length < 6){
            toast.error("Invalid Credentials");
            return false;
        }
    
        return true;
    }
  

    
    
    const login = async ({username,password})=>{

        const isSuccess = handleInputError({username,password});
        if(!isSuccess){
            return ;
        }

        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/auth/login",{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({username,password}),
            });
            
            const data = await response.json();
            if(data.error){
                throw new Error(data.error);
            };
            
            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        let inputs = {username,password}
        await login(inputs);
    }

  return (
    <div className='flex flex-col justify-center min-w-96 mx-auto items-center'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-4xl py-3 font-semibold text-center text-gray-300'>
                Login
               <span className='text-gray-400'>ChatApp</span>
            </h1>

            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='text' placeholder='Enter username'
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}></input>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='password' placeholder='Enter password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}></input>
                </div>

                <span className="flex items-center justify-between">
                    Don't have an account?{" "}
                    <span>
                        <a href='/signup'>Create account</a>
                    </span>
                </span>

                <div>
                    <button className='btn btn-black btn-sm mt-2' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Login"}
                    </button>
                </div>
          
            </form>
        </div>

    </div>
  )
}

export default Login;