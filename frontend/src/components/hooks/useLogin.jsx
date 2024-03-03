import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { useState } from "react";


const useLogin = async()=>{
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async ({username,password})=>{


        setLoading(true);
        try {
            const response = await fetch("/api/auth/login",{
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


    return {login, loading};
};



export default useLogin;