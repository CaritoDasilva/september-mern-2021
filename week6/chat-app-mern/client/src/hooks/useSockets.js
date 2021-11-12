import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

const useSocket = () => {

    const [socket] = useState(() => io(':8080'));
    const user = 'Carito Da Silva';

    // useEffect(() => {
    //     socket.on("from-server", data => console.log('data', data));

    // }, [socket])

    return {
        socket
    }
}

export default useSocket;