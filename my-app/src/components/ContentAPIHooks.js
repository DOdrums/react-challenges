import React, {useState, useEffect} from 'react'
import css from "./css/Content.module.css"
import PostItemApi from './PostItemApi'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [savedPosts, setSavedPosts] = useState([])

    const fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
        const fetchedPosts = response.data.hits;
        setIsLoaded(true);
        setPosts(fetchedPosts);
        setSavedPosts(fetchedPosts);
    }

    useEffect(() => {
        fetchImages();
    }, [])

    const handleSearch = (event) => {
        const name = event.target.value;
        const filteredPosts = savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name);
        })
        setPosts(filteredPosts);
    }

    return (
        <div>
            <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form action="">
                        <label htmlFor="searchInput">Search:</label>
                        <input onChange={(event) => {handleSearch(event)}} type="search" name="searchInput" id="searchInput" />
                        <h4>posts found: { posts.length }</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {isLoaded ? (
                    <h1>
                        <PostItemApi savedPosts={posts}/>
                    </h1>
                    ) : (
                    <Loader/>
                    )} 
                </div>
        </div>
    )
}

export default ContentAPIHooks