import {useState} from 'react';
import {getCharacters} from '../api';
import './List.css';

const List = () => {
    
    const [characters, setCharacters] = useState([])

    async function handleChange(value) {
        try {
            const data = await getCharacters(value)
            setCharacters(data)
        } catch (err) {
            alert("Erro!")
        }
    }

    return(
        <div>
            <input onChange={(event) => handleChange(event.target.value)}/>
            <ul className="lista-personagens">
                {characters.map((character) => (
                    <li key={character.name}>{character.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default List