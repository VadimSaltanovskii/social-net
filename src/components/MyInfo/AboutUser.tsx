import React from 'react'
import { AboutUserPhoto } from '../AboutUserPhoto/AboutUserPhoto'
import AboutUserClasses from './AboutUser.module.css'

export function AboutUser() {
    return (
        <main className={AboutUserClasses.container}>
            <AboutUserPhoto />
            <div id={'friends'}>Друзья</div>
            <div id={'myContent'}>Мой контент</div>
        </main>
    )
}