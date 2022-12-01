import React, { Component } from 'react'
import css from "./css/Content.module.css"
import PostItemApi from './PostItemApi'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         posts: [],
         savedPosts: [],
      };
    }

    componentDidMount() {
        this.fetchImages()
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
        const fetchedPosts = response.data.hits;
        this.setState({
            posts: fetchedPosts,
            isLoaded: true,
            savedPosts: fetchedPosts,
        })
    }

    handleSearch = (event) => {
        const name = event.target.value
        const filteredPosts = this.state.savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
        <div>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form action="">
                    <label htmlFor="searchInput">Search:</label>
                    <input onChange={(event) => {this.handleSearch(event)}} type="search" name="searchInput" id="searchInput" />
                    <h4>posts found: { this.state.posts.length }</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {this.state.isLoaded ? (
                <h1>
                    <PostItemApi posts={this.state.posts}/>
                </h1>
                ) : (
                <Loader/>
                )} 
            </div>
        </div>
        )
    }
}

export default Content