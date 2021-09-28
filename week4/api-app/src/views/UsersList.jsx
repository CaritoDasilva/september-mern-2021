import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [errorCallApi, setErrorCallApi] = useState('');
    const getUsersFromApy = async () => {

        try {
            const responseApi = await axios.get('https://dummyapi.io/data/v1/user?limit=20', {
                headers: {
                    "app-id": '613fc8131846897084ead629'
                }
            })
            console.log("🚀 ~ file: UsersList.jsx ~ line 15 ~ getUsersFromApy ~ data", responseApi.data.data)
            setUsers(responseApi.data.data);
        } catch(err) {
            console.log("🚀 ~ file: UsersList.jsx ~ line 18 ~ getUsersFromApy ~ err", err.response.data.error)
            setErrorCallApi(err.response.data.error)

        }

    }

    useEffect(() => {
        getUsersFromApy()

    }, []);


    return (
        <div>
            <h1>Soy la lista</h1>
            {users.length > 0 ? users.map(user => (
                <div key={user.id} className="card">
                    <h1>Nombre usuario: {user.firstName} {user.lastName}</h1>
                    <img src={user.picture} alt="" />
                </div>
            )) : (
                <h1>¡Ha ocurrido el siguiente error: {errorCallApi}!</h1>
            )}

        </div>
    )
};

export default UsersList;