import React from 'react'
import PostClasses from './Post.module.css'

type PostPropsType = {
    title: string
    value: string
}

export function Post(props: PostPropsType) {
    return (
        <div className={PostClasses.post}>
            {props.title}
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexjUojjTKw32g1mNg2BVdmcCw5RrmvjgO5A&usqp=CAU" alt="Фото" />
                <textarea name="" placeholder={props.value}></textarea>
                <div>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
            </div>
        </div>
    )
}