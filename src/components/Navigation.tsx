import React from 'react'
import BlockClasses from './Block.module.css'
import NavClasses from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={`${NavClasses.navigation} ${BlockClasses.block}`}>
            <p>Моя страница</p>
            <p>Новости</p>
            <p>Мессенджер</p>
            <p>Друзья</p>
            <p>Сообщества</p>
            <p>Фотографии</p>
            <p>Музыка</p>
            <p>Видео</p>
            <p>Клипы</p>
            <p>Игры</p>
            <hr/>
            <p>Мини-приложения</p>
            <p>VK Pay</p>
            <p>Работа</p>
            <p>Экспресс</p>
            <hr/>
            <p>Маркет</p>
            <p>Закладки</p>
            <p>Файлы</p>
            <p>Реклама</p>
        </div>
    )
}