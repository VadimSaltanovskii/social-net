import React from 'react'
import BlockClasses from './Block.module.css'
import PhotoClasses from './Photo.module.css'

export const Photo = () => {
    return (
        <div className={`${PhotoClasses.photo} ${BlockClasses.block}`}>
            <img src="https://cdn.sm-news.ru/wp-content/uploads/2019/12/05/a0f02d217364b4604ac1a8367ec8ec2a.jpg"/>
        </div>
    )
}