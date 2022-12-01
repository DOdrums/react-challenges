import React, {useState, useEffect} from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, []);

    const handleSearch = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })
        setFetchedPosts(filteredPosts)
    };

    return (
    <div>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form action="">
                <label htmlFor="searchInput">Search:</label>
                <input onChange={(event) => {handleSearch(event)}} type="search" name="searchInput" id="searchInput" />
                <h4>posts found: { fetchedPosts.length }</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
            {isLoaded ? (
            <h1>
                <PostItem posts={fetchedPosts}/>
            </h1>
            ) : (
            <Loader/>
            )} 
        </div>
    </div>
    )
}

export default ContentHooks