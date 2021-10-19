import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Tag, Space, Spin } from 'antd';
import { CheckCircleTwoTone, LoadingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const Users = () => {
    const [usersList, setUsersList] = useState([]);
    const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
    const [isLoading, setIsLoading] = useState(true)
    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: profileInfo => <Link to={`/user/${profileInfo[1]}`}>Soy {profileInfo[0]}</Link>
        },
        {
            title: 'Conectado',
            dataIndex: 'isOnline',
            key: 'isOnline',
            render: isOnline => <CheckCircleTwoTone twoToneColor="#52c41a" className="onlineIcon" />
        },
        {
            title: 'Foto Perfil',
            dataIndex: 'profile_pic',
            key: 'profile_pic',
            render: pic => <img src={pic} alt="" />
        },
    ];

    const data = usersList?.map(user => (
        {
            key: user._id,
            name: [user.fullName, user._id],
            isOnline: user.isOnline,
            profile_pic: user.profile_pic,
        }
    ))

    const getAllUsers = async () => {
        try {
            const users = await axios.get('http://localhost:8080/api/users');
            console.log("🚀 ~ file: Users.jsx ~ line 10 ~ getAllUsers ~ users", users)
            setUsersList(users.data.usersList);
            setIsLoading(false);
        } catch(err) {
            console.log("🚀 ~ file: Users.jsx ~ line 14 ~ getAllUsers ~ err", err)

        }

    }

    useEffect(() => {
        setTimeout(function () { 
            getAllUsers();
        }, 3000);
        
    }, []);

    return (
        <div>
            {!isLoading ? (
                <div>

                    <h1>Lista de Usuarios</h1>
             
                    <table>
                        <tr>
                            <th>Nombre</th>
                            <th>Status</th>
                            <th>Foto Perfil</th>
                            <th>Acciones</th>
                        </tr>
                        <tbody>
                            {usersList?.map(user => (
                                <tr key={user._id}>
                                    <td><Link to={`/user/${user._id}/holis-ninjas`}>Soy {user.fullName}</Link></td>
                                    <td>{user.isOnline ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : 'Desconectado'}</td>
                                    <td><img src={user.profile_pic} alt="" /></td>
                                    <td>
                                        <button>Eliminar Usuario</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ): 
                (<Spin indicator = { antIcon } />)
            }
           
        </div>
    )
}

/* <ul>
                 {usersList?.map(user => (
                     <li key={user._id}>{user.fullName}</li>
                 ))}
             </ul>             */
/* <Table columns={columns} dataSource={data} /> */

export default Users;