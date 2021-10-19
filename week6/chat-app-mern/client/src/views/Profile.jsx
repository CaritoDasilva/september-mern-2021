import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
            <img src={user?.profile_pic} alt="" />
            <h3>Mi edad es {user?.age}</h3>
            <h1>{greet}</h1>
        </div>
    )
}

export default Profile;