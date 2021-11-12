import React, { createContext, useEffect, useContext, useState } from "react";
import useSocket from "../hooks/useSockets";

export const SocketContext = createContext();


const SocketProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const { socket } = useSocket();

    useEffect(() => {
        socket?.on('users-list', data => setUsers(data));

    }, [socket])

    return (
        <SocketContext.Provider value={{socket, users}} >
            { children }
        </SocketContext.Provider>
    )

}

export default SocketProvider;