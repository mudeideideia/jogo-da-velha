import React from 'react'
import './style.css'
import Logo from '../../objects/Logo'
import Menu from '../../objects/Menu'
import Sobre from '../../objects/Sobre'

const Header = () => {
    return <header className="header">
        <Logo />
        <Sobre />
        <Menu />
    </header>
}

export default Header;