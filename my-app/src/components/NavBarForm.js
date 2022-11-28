import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css"
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true,
    }
  }
  
  handleClick = () => {
    this.setState({
        isLoggedIn:!this.state.isLoggedIn,
    })
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
            <NavBarChild handleClick={this.handleClick}/>
        ) : (
        <button onClick={this.handleClick}>Log In</button>
        )
            
    }
      </div>
    )
  }
}

export default NavBarForm