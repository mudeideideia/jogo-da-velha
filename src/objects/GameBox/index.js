import React from 'react'
import './style.css'

const GameBox = (props) => {
    return <article className="gamebox"> 
        {props.children}
    </article>
    
}

export default GameBox;