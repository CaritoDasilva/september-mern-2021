import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CreateProfile.module.scss';
import { Form, Input, Button, Switch } from 'antd';
import { useParams, useHistory } from "react-router-dom";

const CreateProfile = () => {
    const [user, setUser] = useState();
    const { id } = useParams();
    const history = useHistory();
    
    const onFinish = async (values) => {
        try {
            console.log('Success:', values);
            const updateUser = await axios.put(`http://localhost:8080/api/users/${id}`, values)
            console.log("🚀 ~ file: CreateProfile.jsx ~ line 13 ~ onFinish ~ updateUser", updateUser)
            history.push(`/user/${user._id}`);
        } catch(err) {
            
        }
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    const getUserById = async () => {
        try {
            console.log("🚀 ~ file: CreateProfile.jsx ~ line 10 ~ CreateProfile ~ id", id)
            const profile = await axios.get(`http://localhost:8080/api/users/${id}`);
            console.log("🚀 ~ file: Profile.jsx ~ line 12 ~ getUserById ~ user", profile.data.user)
            setUser(profile.data.user);
        } catch (err) {
            console.log("🚀 ~ file: Profile.jsx ~ line 12 ~ getUserById ~ err", err)

        }
    }

    const onChangeSwitch = (checked) => {
        console.log("🚀 ~ file: CreateProfile.jsx ~ line 40 ~ onChangeSwitch ~ checked", checked);
        setUser({ ...user, isOnline: checked });
    }

    useEffect(() => {
        getUserById();

    }, []);


    return (
        <div className={styles.createProfileContainer}>
            <h1>Hola {user?.fullName}, registra tu perfil!</h1>
            {
                user && (
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            description: user?.description || '',
                            profile_pic: user.profile_pic || '',
                            status: user.status || '',
                            isOnline: user.isOnline

                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <label htmlFor="fullName"></label>
                        <input type="text" value={user.fullName || ''} name="fullName" onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}/>
                        <Form.Item
                            label="Descripción"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Ingresa una descripción a tu perfil!',
                                },
                            ]}

                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Estado de ánimo"
                            name="status"
                            rules={[
                                {
                                    required: true,
                                    message: 'Cuentanos cómo te sientes!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Estado"
                            name="isOnline"
                            rules={[
                                {
                                    required: true,
                                    message: 'Cómo quieres que te vean los demás usuarios',
                                },
                            ]}
                        >
                            <Switch checked={user.isOnline} onChange={onChangeSwitch}/>
                        </Form.Item>
                        <Form.Item
                            label="Foto de Perfil"
                            name="profile_pic"
                            rules={[
                                {
                                    required: true,
                                    message: 'Ingresa una nueva foto de perfil',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                )
            }
            
        </div>
    )
}

export default CreateProfile;