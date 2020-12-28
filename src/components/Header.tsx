import React from 'react'
import BlockClasses from './Block.module.css'
import HeaderClasses from './Header.module.css'

export const Header = () => {
    return (
        <div className={`${HeaderClasses.header} ${BlockClasses.block}`}>
            Шапка Мономаха
        </div>
    )
}