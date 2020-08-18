/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'


import './styles.css'

interface NavbarProps {
    icon?: string,
    leftIcon?: string,
    rightIcon?: string
}

export default function Navbars(){

    

    return (
        <Navbar>
            <NavItem icon="😉"/>
            <NavItem icon="😉"/>
            <NavItem icon="😉"/>

            <NavItem icon="🔽">
                <DropDownmenu/>

            </NavItem>
        </Navbar>
        
    )
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <nav className="navbard">
            <ul className="navbar-navd">
                {children}
            </ul>
        </nav>

    )
}

const NavItem: React.FC<NavbarProps> = ({ icon, children }) => {

    const [open, setOpen] = useState(false)

    return (
        
        <li className="nav-items">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {icon}
            </a>

            {open && children}
        </li>

    )
}

const DropDownmenu = () => {

    const Dropdownitem: React.FC<NavbarProps> = ({ leftIcon, rightIcon, children }) => {
        return (
            <a href="#" className="menu-item">

                <span className="icon-button">{leftIcon}</span>
                {children}
                <span className="icon-right">{rightIcon}</span>
            </a>

        )
    }

    return (
        <div className="dropdowp">
            <Dropdownitem>My profile</Dropdownitem>

            <Dropdownitem 
                leftIcon="⬅️"
                rightIcon="➡️"
            >
                Settings

            </Dropdownitem>
        </div>
    )
}