// Component imports
import Home from "../Home/Home"
import Projects from "../Projects/Projects"
import Extra from "../Extra/Extra"

// React imports
import React, { Component } from "react"
import { Route } from "react-router-dom"

// Start React component
class Origin extends Component {

    render() {
        return (
            <div>

                <Route path="/home" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/extras" component={Extra} />

            </div>
        )
    }
}

export default Origin