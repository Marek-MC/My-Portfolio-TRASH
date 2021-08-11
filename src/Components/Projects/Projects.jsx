// Component imports
import ProjectItem from "./ProjectItem"

// React imports
import React, { Component } from "react"

// Start React component
class Projects extends Component {



    state = {

        projectItemData: [
            { title: "My Web Home", github: "https://github.com/Marek-MC/My-Web-Home", heroku: "https://marek-carlisles-website.herokuapp.com/#/home", status: "Base Complete", 
            image: null, image2: null, image3: null,
            description: "The website that you are viewing! This website will be used to show professional work, and basic information." },

            { title: "Moon Moon Discord JS", github: "https://github.com/Marek-MC/Moon-Moon-Discord-JS", heroku: null, status: "W.I.P.", 
            image: "/images/moon-moon-js/moon.png", image2: "/images/moon-moon-js/moon2.png", image3: null,
            description: "Utilizes the Discord API to manipulate, create, and send messages to my Discord server." },

            { title: "Chatspace", github: "https://morning-eyrie-70641.herokuapp.com/#/chat", heroku: "https://morning-eyrie-70641.herokuapp.com/#/chat", status: "Discontinued", 
            image: "images/chatspace/chatspace.png", image2: "images/chatspace/chatspace2.png", image3: null,
            description: "One of the two final big EDA projects I've done. This project has helped solidify all my fullstack programming skills in JS." },

            { title: "Dental Rental", github: "https://nameless-falls-97077.herokuapp.com/#/rental_requests", heroku: "https://nameless-falls-97077.herokuapp.com/#/rental_requests", status: "Discontinued", 
            image: "/images/dental-rental/dr.png", image2: "/images/dental-rental/dr2.png", image3: "/images/dental-rental/dr3.png",
            description: "The second of the two final big EDA projects I've completed. Together with a group, we talked through a problem with a client, and programmed an application that should suit their needs." },

            { title: "EDA Code Bootcamp Account", github: "https://github.com/marek-carlisle", heroku: null, status: "Complete!", 
            image: null, image2: null, image3: null,
            description: "During my time with Emerging Digital Academy (EDA), I learned how to create fullstack web applications. This is the account that I put all the projects in!" },
        ],
    }



    render() {
        return (

            <div>
                <h1>Projects</h1>

                <p>All project links point to their GitHub repositories, or Heroku deployments.</p>





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