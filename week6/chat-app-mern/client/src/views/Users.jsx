import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Table, Space, Spin, Button } from 'antd';
import { CheckCircleTwoTone, LoadingOutlined, CloseSquareTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { SocketContext } from "../contexts/SocketContext";

const Users = () => {

    const { users } = useContext(SocketContext)

    // const [usersList, setUsersList] = useState([]);
    const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
    const [isLoading, setIsLoading] = useState(true)

    // const getAllUsers = async () => {
    //     try {
    //         const users = await axios.get('http://localhost:8080/api/users');
    //         console.log("🚀 ~ file: Users.jsx ~ line 10 ~ getAllUsers ~ users", users)
    //         setUsersList(users.data.usersList);
    //         setIsLoading(false);
    //     } catch (err) {
    //         console.log("🚀 ~ file: Users.jsx ~ line 14 ~ getAllUsers ~ err", err)

    //     }

    // }

    // const deleteUser = async (id) => {
    //     try {
    //         const usersUpdated = await axios.delete(`http://localhost:8080/api/users/${id}`);
    //         console.log("🚀 ~ file: Users.jsx ~ line 28 ~ deleteUser ~ usersUpdated", usersUpdated)
    //         getAllUsers();
    //     } catch(err) {
    //         console.log("🚀 ~ file: Users.jsx ~ line 31 ~ deleteUser ~ err", err)
            
    //     }
    // }


    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <Link to={`/user/${record.key}`}>{record.name}</Link>
        },
        {
            title: 'Conectado',
            dataIndex: 'isOnline',
            key: 'isOnline',
            render: isOnline => isOnline ? <CheckCircleTwoTone twoToneColor="#52c41a" className="onlineIcon" style={{ fontSize: 40 }} /> : <CloseSquareTwoTone twoToneColor="#ff1744" style={{ fontSize: 40 }} />
        },
        {
            title: 'Foto Perfil',
            dataIndex: 'profile_pic',
            key: 'profile_pic',
            render: pic => <img src={pic} alt="" />
        },
        {
            title: 'Acciones',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record) => <Space size="middle">
                    {/* <Button onClick={() => deleteUser(record.key)}>Eliminar</Button> */}
                    <Link to={`/create-profile/${record.key}`}>Editar</Link>
                </Space>
        },
    ];

    const data = users?.map(user => (
        {
            key: user._id,
            name: user.fullName,
            isOnline: user.isOnline,
            profile_pic: user.profile_pic,
        }
    ))

    

    useEffect(() => {
        console.log("🚀 ~ file: Users.jsx ~ line 11 ~ Users ~ users", users)

        // setTimeout(function () { 
        //     getAllUsers();
        // }, 1000);
        
    }, []);


   

    return (
        <div>
            {isLoading ? (
                <div>
                    <h1>Lista de Usuarios</h1>
                    <Table columns={columns} dataSource={data}  />
                    {/* <table>
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
                    </table> */}
                </div>
            ): 
                (<Spin indicator = { antIcon } className="spinner" />)
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