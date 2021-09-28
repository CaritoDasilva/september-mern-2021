import React, { createContext, useState } from 'react';

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
    const [list, setList] = useState([
        {
            title: 'Contexto', 
            description: 'Soy el contexto',
            priority: 'alto',
            status: false
        }]);

    return (
        <ListContext.Provider value={{list, setList}} >
            {children}
        </ListContext.Provider>
    )

}