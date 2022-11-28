import React from 'react'

export default function NavBarChild(props) {
  return (
    <div>
        <form action="">
            <label htmlFor="">Username:</label>
            <input type="text" placeholder="username" />

            <label htmlFor="">Password:</label>
            <input type="text" placeholder="password" />
            <button onClick={props.handleClick}>Submit</button>
        </form>
    </div>
  )
}
