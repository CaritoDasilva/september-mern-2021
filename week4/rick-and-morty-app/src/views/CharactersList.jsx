import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CharactersList = () => {
    const [list, setList] = useState([]);

    const getAllCharacters = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        console.log("🚀 ~ file: CharactersList.jsx ~ line 9 ~ getAllCharacters ~ response", response)
        setList(response.data.results);
    }

    useEffect(() => {
        getAllCharacters()
    }, []);



    return (
        <div>
            <h1>Lista de Personajes de Rick and Morty</h1>
            {list?.map(character => (
                <div key={character.id} className="card">
                    <Link to={`personaje/`}>
                        <h1>{character.name}</h1>
                        <h3>Especies: {character.species}</h3>
                        <h3>Status: {character.status}</h3>
                        <img src={character.image} alt="" />
                    </Link>

                </div>
            ))}
        </div>
    )
}

export default CharactersList;
