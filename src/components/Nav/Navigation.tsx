import React from 'react'
import { Addvertise } from '../Addvertise/Addvertise'
import { NavTree } from '../NavTree/NavTree'
import NavClasses from './Navigation.module.css'


export function Navigation() {
    return (
        <nav className={NavClasses.container}>
            <NavTree />
            <Addvertise />
        </nav>
    )
}