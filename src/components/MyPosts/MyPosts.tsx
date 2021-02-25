import React from 'react'
import { Post } from '../OnePost/Post'
import MyPostsClasses from './MyPosts.module.css'

export function MyPosts () {
    return (
        <div className={MyPostsClasses.container}>
            <Post title={'Сергей'} value={'Было круто'}/>
            <Post title={'Игоша'} value={'Я приехал вчера'}/>
            <Post title={'Герман'} value={'Купи хлеба'}/>
            <Post title={'Димас'} value={'Я хочу BMW'}/>
        </div>
    )
}