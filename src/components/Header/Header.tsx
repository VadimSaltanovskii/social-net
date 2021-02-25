import React from 'react'
import HeaderClasses from './Header.module.css'

export function Header() {
    return (
        <header className={HeaderClasses.header}>
            <img src="https://c0.klipartz.com/pngpicture/672/818/gratis-png-facebook-inc-redes-sociales-iconos-de-redes-sociales-facebook.png" alt="logo" />
            <div>Поиск</div>
            <img src="https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-business-man-icon-png-image_925673.jpg" alt="me" />
        </header>
    )
}