import React from 'react'
import BlockClasses from './Block.module.css'
import AdvClasses from './Advertise.module.css'

export const Advertise = () => {
    return (
        <div className={`${AdvClasses.advertise} ${BlockClasses.block}`}>
            <p>Реклама</p>
            <p>Пишите нам</p>
            <p>Низкие цены</p>
        </div>
    )
}