import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PokeApiExample = props => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(data => setPokemons(data.results))
    }, [])

    /* axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => setPokemons(response.data.results)) */

    return <ul>
        {pokemons.map((pokemon,i) => <li key={i}>{pokemon.name}</li>)}
    </ul>

}

export default PokeApiExample
