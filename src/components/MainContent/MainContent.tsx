import React from 'react'
import { MyPosts } from '../MyPosts/MyPosts'
import MainContentClasses from './MainContent.module.css'

export function MainContent() {
  return (
    <div className={MainContentClasses.container}>
      <div id={'info'}>Информация</div>
      <MyPosts />
    </div>
  )
}