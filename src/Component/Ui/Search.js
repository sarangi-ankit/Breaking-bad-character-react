import React, { useState } from 'react'

function Search({getquery}) {
    const [text,setText]=useState("")

    const onChange=(q)=>{
        setText(q)
        getquery(q)
    }

    return (
        <section className="search">
            <form>
                <input type="text"
                className="form-control" 
                placeholder="type character name" 
                value={text}
                onChange={(e)=>onChange(e.target.value)}
                autoFocus
                />
            </form>
        </section>
    )
}

export default Search
