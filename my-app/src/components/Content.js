import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         posts: [],
      };
    }

    loadData() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
            })
        }, 2000)
    }

    componentDidMount() {
        this.loadData()
        this.setState({
            posts: savedPosts
        })
    }

    handleSearch = (event) => {
        const name = event.target.value
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
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
                    <PostItem posts={this.state.posts}/>
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