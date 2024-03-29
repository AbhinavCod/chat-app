import React, {useState} from 'react'
import useConversation from "../../zustand/useConversation.js";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading,setLoading] = useState(false);
    const {messages,setMessages,selectedConversation} = useConversation();
  
    const sendMessage = async (message)=>{
        setLoading(true);
        try {
            const response = await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({message}),
            })
            console.log(response);
            const data = await response.json()

            if(data.error){
                throw new Error(data.error);
            };

            setMessages([...messages,data]);
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    };

    return {loading,sendMessage};
}

export default useSendMessage