import React, { useState,useEffect } from 'react'
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const [loading,setLoading] = useState();
    const {messages,setMessages,selectedConversation} = useConversation();
    
    useEffect(()=>{
        const getMessages = async()=>{
            setLoading(true);
            try {
                const response = await fetch(`/api/messages/${selectedConversation._id}`,{
                    credentials:"include"
                });

                const data = await response.json();

                if(data.error){
                    throw new Error(data.error);
                };
                setMessages(data);
            } catch (error) {
                toast.error(error);
            }finally{
                setLoading(false);
            }
        };

        if(selectedConversation?._id) getMessages();

    },[selectedConversation?._id,setMessages])
    
    return {loading,messages};
}

export default useGetMessages