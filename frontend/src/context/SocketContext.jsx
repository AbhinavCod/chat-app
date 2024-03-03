import React,{useState,useEffect, useContext} from "react";
import {useAuthContext} from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = React.createContext();

export const SocketContextProvider = ({children})=>{

    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(()=>{
        if(authUser){
            const socket = io("https://chat-app-z77b.onrender.com",{
                query:{
                    userId : authUser._id,
                }
            });

            setSocket(socket);
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users);
            })

            return  ()=> socket.close();
        }
        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);

    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
};

export const useSocketContext = ()=>{
    return useContext(SocketContext);
}