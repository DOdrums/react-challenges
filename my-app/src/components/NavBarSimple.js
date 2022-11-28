import React from "react";
import css from "./css/NavBarSimple.module.css"


class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            log: "log in"
        }
    };

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                log: prevState.log === "log in" ? "log out" : "log in",
            };
        })
    };

    render() {
        return (
        <div className={css.NavBar}>
            <h1>
                My Gallery
            </h1>
            <span>{ this.state.message }</span>
            <button onClick={ () => this.handleClick()}>{ this.state.log }</button>
        </div>
        )
    }
}


export default NavBarSimple