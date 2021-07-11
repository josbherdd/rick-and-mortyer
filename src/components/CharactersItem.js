import React from 'react'

export const CharactersItem = ({ name, status, image, species, gender, location}) => {
    return (
        <div className='card'>
            <img src={ image } alt={ name } />
            <ol className="card_content">
                <h2>{ name }</h2>
                <p>Status: { status }</p>
                <p>species: { species }</p>
                <p>gender: { gender }</p>
                <p>location: { location }</p>
            </ol>
            
        </div>
    )
}
