import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const useSignup = ()=>{
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({fullName,username,password,confirmPassword,gender})=>{
        const isSuccess = handleInputError({fullName,username,password,confirmPassword,gender});
        if(!isSuccess){
            return ;
        }

        setLoading(true);
        try {
            const response = await fetch("/api/auth/signup",{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({fullName,username,password,confirmPassword,gender}),
            });

            const data = await response.json();

            if(data.error){
                throw new Error(data.error);
            };

            localStorage.setItem("chat-user",JSON.stringify(data));

            setAuthUser(data);

            console.log(data);
        } catch (error) {
            console.log(error);
            // toast.error(error.message);
        }finally{
            setLoading(false);
        }
        
    }

    return {signup,loading};
};

const handleInputError = ({fullName,username,password,confirmPassword,gender})=>{
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all the fields 😒");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Passwords do not match 😒");
        return false;
    }

    if(password.length < 6){
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}

export default useSignup;