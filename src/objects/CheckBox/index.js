import React from 'react'
import './style.css'
import Label from '../Label'


const CheckBox =  ({id = "", value="", content="" }) => (
        <center>
            <input className="checkbox" id={id}value={value} type="checkbox"/>
            <Label htmlFor={id} content={content}/>
        </center>
)

export default CheckBox