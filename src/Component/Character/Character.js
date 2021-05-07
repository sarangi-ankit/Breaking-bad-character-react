import React from 'react'
import CharacterItems from "./CharacterItems"


function Character({items,isLoading}) {

    return (
        isLoading?(
            <h1>Loading...</h1>
            // <Loading />
        ):(
            <section className="cards">
                {
                    items.map((item)=>(
                      <CharacterItems key={item.char_id} item={item}/>  
                    ))
                }
            </section>
        )
        
    )
}

export default Character
