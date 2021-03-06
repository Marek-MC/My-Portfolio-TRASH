// React imports
import React, { Component } from "react"

// Start React component
class Header extends Component {

    render() {
        return (

            <header id="title">

                <h1 id="marek-carlisle">Marek Carlisle</h1>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16" id='moon'>
                    <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z" />
                </svg>

            </header>

        )
    }
}

export default Header