import React from 'react'
import './style.css'


const Player = (props) => {
    return <div className={`player${props.player.toUpperCase()}`}><div></div></div>
}

export default Player;