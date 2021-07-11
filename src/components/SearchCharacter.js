import React, {useState} from 'react';

export const SearchCharacter = ({ setCharacterList }) => {


    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if( inputValue.trim().length > 2 ) {
            setCharacterList( chars => [ inputValue, ...chars ] );//da el acceso a las categorias, se llama a setcategories mediante un callback
            setInputValue('')
        }
    }



    return(
        <>
        <form onSubmit={ handleSubmit }>
            <input 
            type='text'
            value={ inputValue } 
            onChange={ handleInputChange }
            />
        </form>
        
        </>
    )

}