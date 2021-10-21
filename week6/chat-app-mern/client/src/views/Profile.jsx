import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from './Profile.module.scss';

const Profile = () => {
    const { id, greet } = useParams();
    const [user, setUser] = useState();

    const getUserById = async () => {
        try {
            const profile = await axios.get(`http://localhost:8080/api/users/${id}`);
            console.log("🚀 ~ file: Profile.jsx ~ line 12 ~ getUserById ~ user", user)
            setUser(profile.data.user);
        } catch(err) {
            console.log("🚀 ~ file: Profile.jsx ~ line 12 ~ getUserById ~ err", err)
            
        }
    }
    
    useEffect(() => {
        console.log("🚀 ~ file: Profile.jsx ~ line 7 ~ Profile ~ id", id)
        getUserById();
    }, [id])

    return (
        <div>
            <h1>¡Hola soy {user?.fullName}!</h1>
            <div className={styles.imgContainer}>
                <img src={user?.profile_pic} alt="" />

            </div>
            <h3>Mi edad es {user?.age}</h3>
            <Link to={`/create-profile/${user?._id}`}>Crear mi Perfil</Link>
        </div>
    )
}

export default Profile;