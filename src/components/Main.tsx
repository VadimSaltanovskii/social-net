import React from 'react'
import BlockClasses from './Block.module.css'
import MainClasses from './Main.module.css'

export const Main = () => {
    return (
        <div className={`${MainClasses.main} ${BlockClasses.block}`}>
            Твои посты и стена плача
        </div>
    )
}