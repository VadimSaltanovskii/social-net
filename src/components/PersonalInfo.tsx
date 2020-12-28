import React from 'react'
import BlockClasses from './Block.module.css'
import PersonalClasses from './PersonalInfo.module.css'

export const PersonalInfo = () => {
    return (
        <div className={`${PersonalClasses.personalInfo} ${BlockClasses.block}`}>
            30 лет
            Стартуем в IT
        </div>
    )
}