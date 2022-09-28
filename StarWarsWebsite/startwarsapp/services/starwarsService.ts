import axios from 'axios';

const getCharacters = () => {
    return axios.get('https://akabab.github.io/starwars-api/api/all.json')
}

const getData = (type) => {
    return axios.get(`https://swapi.dev/api/${type}`)
}

const getCharactersByid = (id) => {
    return axios.get(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
}

const starwarService = {
    getCharacters,
    getData,
    getCharactersByid
}

export default starwarService