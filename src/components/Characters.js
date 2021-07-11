import React, { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import { CharactersItem } from './CharactersItem';


export const Characters = ({ charact }) => {

    const [fileCharacter, setFileCharacter] = useState([]);
    const [info, setInfo] = useState({});
    const [arreglo, setArreglo] = useState([]);
    

    const [ formValues, handleInputChange ] = useForm({
        search: ''
    })

    const { search } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault()
        getCharacter(`https://rickandmortyapi.com/api/character/?name=${ search }` )
    }
    
    
    
    
    useEffect( () => {
        getCharacter();
    }, [])

    const getCharacter = async( url = `https://rickandmortyapi.com/api/character/?name=` ) => { 

    

        let arreglo = [];
        arreglo = url.split("=")
        
        
        const resp = await fetch( url );
        const data = await resp.json();
        console.log('PRISTINE DATA: ', data);

        const { results, info } = data;


        const characters = results.map( char => {
        return {
            id: char.id,
            name: char.name,
            status: char.status,
            species: char.species,
            image: char.image,
            gender: char.gender,
            location: char.location.name
        }
        })

        if( info.prev == null ){
            info.prev = url;
        }else if( info.next == null ){
            info.next = url;
        }
        
        
        setArreglo( arreglo[1] )
        setFileCharacter( characters );
        setInfo(info);
    }



    return (
        <>
        <div className='filter'>
            <h2>Filter by:</h2>
            <button onClick={e => getCharacter()}>
            All
            </button>
            <button onClick={e => getCharacter('https://rickandmortyapi.com/api/character/?status=alive')}>
            Alive
            </button>
            <button onClick={e => getCharacter('https://rickandmortyapi.com/api/character/?status=dead')}>
            Dead
            </button>
            <button onClick={e => getCharacter('https://rickandmortyapi.com/api/character/?status=unknown')}>
            Unknown
            </button>
            <button onClick={e => getCharacter('https://rickandmortyapi.com/api/character/?species=human')}>
            Human
            </button>
            <button onClick={e => getCharacter('https://rickandmortyapi.com/api/character/?species=alien')}>
            Alien
            </button>
            <button onClick={e => getCharacter('https://rickandmortyapi.com/api/character/?gender=male')}>
            Male
            </button>
            <button onClick={e => getCharacter('https://rickandmortyapi.com/api/character/?gender=female')}>
            Female
            </button>
            <button onClick={e => getCharacter('https://rickandmortyapi.com/api/character/?gender=genderless')}>
            Genderless
            </button>
            <button onClick={e => getCharacter('https://rickandmortyapi.com/api/character/?gender=unknown')}>
            Gender unknown
            </button>
           
        </div>
        <form onSubmit = { handleSubmit }>
            <input 
            type="text"
            name = "search"
            className="form-control"
            placeholder="buscar por nombre"
            autoComplete = "off"
            value={ search }
            onChange = { handleInputChange }/>
            </form>
        <div className='card_container'>
        <div className='paginator'></div>
            
                { 
                fileCharacter.map( char => (

                    <CharactersItem  key = { char.id } {...char} />

                )) 
                 }
        </div>
        <div className='paginator'>
        <button onClick={e => getCharacter(info.prev)}>
            prev
        </button>
        <h2>Página: { arreglo } / { info.pages }</h2>
        <button onClick={e => getCharacter(info.next)}>
            next
        </button>
        </div>
        </>
    )
}
