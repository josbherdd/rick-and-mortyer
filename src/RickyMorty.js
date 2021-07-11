import React , { useState, useEffect } from 'react';
import { Characters } from './components/Characters';
import { SearchCharacter } from './components/SearchCharacter';


//aqui se renderizaran los comoponentes hooks y demas

export const RickyMorty = () => {

     const [characterList, setCharacterList] = useState([''])



    return(
        <>
        <div className='head'>
        <h1>Rick y Morty App</h1>
        <SearchCharacter  setCharacterList={setCharacterList}/>
        </div>

        

        <ol className="container">
            {
                characterList.map( charact => 
                    <Characters charact = { charact } key = { charact } />
                )
            }
        </ol>


        </>
    )
} 