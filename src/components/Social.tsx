import React from 'react'
import BlockClasses from './Block.module.css'
import SocialClasses from './Social.module.css'

export const Social = () => {
    return (
        <div className={`${SocialClasses.social} ${BlockClasses.block} ${BlockClasses.fat}`}>
            <p>Друзья</p>
            <hr/>
            <p>Подписки</p>
            <hr/>
            <p>Фотоальбомы</p>
            <p>Видеозаписи</p>
            <p>Аудиозаписи</p>
        </div>
    )
}