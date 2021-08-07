// CSS imports
import "./Origin.css"

// Component imports
import Navigation from "./Components/Navigation/Navigation"
import Router from "./Components/Router/Router"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

// React imports
import React, { Component } from "react"
import { HashRouter, Switch, Redirect } from "react-router-dom"

// Start React component
class Origin extends Component {

    state = {
        null: "",
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div id="origin">

                <Header />

                <HashRouter>

                    <Navigation />
                    <div id="content">
                        <Switch>
                            <Redirect exact from="/" to="/home" />
                            <Router />
                        </Switch>
                    </div>

                </HashRouter>

                <Footer />

            </div>
        )
    }
}

export default Origin