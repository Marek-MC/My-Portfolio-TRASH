// Component imports
import ProjectItem from "./ProjectItem"

// React imports
import React, { Component } from "react"

// Start React component
class Projects extends Component {



    state = {

        projectItemData: [
            { title: "My Web Home", path: "https://github.com/Marek-MC/My-Web-Home", heroku: "https://marek-carlisles-website.herokuapp.com/#/home", image: "Null", status: "Base Complete", description: "The website that you are viewing! This website will be used to show professional work, and basic information." },
            { title: "Moon Moon DiscordJS", path: "https://github.com/Marek-MC/Moon-Moon-Discord-JS", heroku: "Null", image: "Null", status: "W.I.P.", description: "My favorite project as now. Utilizes the Discord API to manipulate, create, and send messages to my Discord server." },
            { title: "Chatspace", path: "https://morning-eyrie-70641.herokuapp.com/#/chat", heroku: "https://morning-eyrie-70641.herokuapp.com/#/chat", image: "Null", status: "Discontinued", description: "One of the two final big EDA projects I've done. This project has helped solidify all my fullstack programming skills in JS." },
            { title: "Dental Rental", path: "https://nameless-falls-97077.herokuapp.com/#/rental_requests", heroku: "https://nameless-falls-97077.herokuapp.com/#/rental_requests", image: "Null", status: "Discontinued", description: "The second of the two final big EDA projects I've completed. Together with a group, we talked through a problem with a client, and program an application that should suit their needs." },
            { title: "EDA Code Bootcamp Account", path: "https://github.com/marek-carlisle", image: "Null", status: "Complete!", description: "During my time with Emerging Digital Academy (EDA), I learned how to create fullstack web applications. This is the account that I put all the projects in!" },
        ],
    }



    render() {
        return (

            <div>
                <h1>Projects</h1>

                <p>All project links point to their GitHub repositories.</p>





                <div id="projectItemList">
                    {this.state.projectItemData !== undefined && this.state.projectItemData.map((data) => {
                        return (
                            <ProjectItem data={data} />
                        )
                    })}
                </div>



            </div>



        )
    }
}

export default Projects