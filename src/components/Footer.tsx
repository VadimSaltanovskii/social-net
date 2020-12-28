import React from 'react'
import BlockClasses from './Block.module.css'
import FooterClasses from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={`${FooterClasses.footer} ${BlockClasses.block} ${BlockClasses.large} ${BlockClasses.red}`}>
            Все права никем не защищены
        </div>
    )
}