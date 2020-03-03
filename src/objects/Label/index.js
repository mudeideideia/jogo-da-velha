import React from 'react'
import './style.css'

const Label = ({htmlFor, content}) => {
    return <label htmlFor={htmlFor} className='label'>{content}</label> 
}

export default Label