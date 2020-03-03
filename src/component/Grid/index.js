import React from 'react'
import './style.css'
import GameBox from '../../objects/GameBox'
import Player from '../../objects/Player'


const Grid = () => {
    return  <GameBox>
        <ul className="grid">
            <li><Player player="O"/></li>
            <li><Player player="X"/></li>
            <li><Player player="X"/></li>
            <li><Player player="O"/></li>
            <li><Player player="X"/></li>
            <li><Player player="O"/></li>
            <li><Player player="O"/></li>
            <li><Player player="O"/></li>
            <li><Player player="X"/></li>
        </ul>
    </GameBox>
}

export default Grid;