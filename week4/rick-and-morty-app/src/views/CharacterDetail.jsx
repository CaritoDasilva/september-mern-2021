import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CharacterDetail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({});
    
    const getOneCharacter = async () => {
        const data = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        console.log("🚀 ~ file: CharacterDetail.jsx ~ line 11 ~ getOneCharacter ~ data", data);
        setCharacter(data.data);
    }
    
    console.log("🚀 ~ file: CharacterDetail.jsx ~ line 8 ~ CharacterDetail ~ useParams()", useParams())
    useEffect(() => {
        getOneCharacter();
    }, [id])


    return (
        <div>
            <h1>Hola chiquillos</h1>
            <h1>{character.name}</h1>
            <h3>Especies: {character.species}</h3>
            <h3>Status: {character.status}</h3>
            <img src={character.image} alt="" />
            <Link to="/lista-personajes">Volver</Link>
        </div>
    )

}

export default CharacterDetail;