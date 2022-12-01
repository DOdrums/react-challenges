import React from 'react'
import css from "./css/Content.module.css"

function PostItem(props) {
  return (
    props.posts.map(post => {
        const {id, user, type, tags, webformatURL} = post
        return <div key={id} className={css.SearchItem}>
            <p>Artwork type: {type}</p> 
            <p>Artist: {user}</p> 
            <img src={webformatURL} alt={type} />
            <p>Tags: {tags}</p>
        </div>
    })
  )
}

export default PostItem