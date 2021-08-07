// Component imports
import ProjectItem from "./ProjectItem"

// React imports
import React, { Component } from "react"

// Start React component
class Projects extends Component {



    state = {

        projectItemData: [
            { title: 'My Web Home', path: 'https://github.com/Marek-MC/My-Web-Home', image: 'Null', status: 'Base Complete', description: "The website that you are viewing! This website will be used to show professional work, and basic information." },
            { title: 'Moon Moon DiscordJS', path: 'https://github.com/Marek-MC/Moon-Moon-Discord-JS', image: 'Null', status: 'W.I.P.', description: "My favorite project as now. Utilizes the Discord API to manipulate, create, and send messages to my Discord server." },
            // { title: 'Calculator', path: '/calculator', image: 'Null', status: 'W.I.P.', description: 'A UI for math stuff.' },
            {title: 'EDA Code Bootcamp Account', path: 'https://github.com/marek-carlisle', image: 'Null', status: 'Complete!', description: "During my time with Emerging Digital Academy (EDA), I learned how to create fullstack web applications. This is the account that I put all the projects in!" },
        ],

    }



    render() {
        return (

            <div>
                <h1>Projects</h1>

                <p>All project links point to their GitHub repositories.</p>





                <div id='projectItemList'>
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