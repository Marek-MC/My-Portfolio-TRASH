// Component imports
import ProjectItem from "./ProjectItem"

// React imports
import React, { Component } from "react"

// Start React component
class Projects extends Component {



    state = {

        projectItemData: [
            { title: 'Hello World', path: '/helloworld', image: 'Null', status: 'W.I.P.', description: 'A simple introductory program!' },
            { title: 'Fractals', path: '/fractals', image: 'Null', status: 'W.I.P.', description: 'Some beautiful math art stuff.' },
            { title: 'Calculator', path: '/calculator', image: 'Null', status: 'W.I.P.', description: 'A UI for math stuff.' },
            // {title: 'ToDo List', path: '/todolist', image: 'Null', status: 'W.I.P.', description: 'Because everybody has one.'},
        ],

    };



    render() {
        return (

            <div>
                <h1>Projects</h1>





                <div id='projectItemList'>
                    {this.state.projectItemData !== undefined && this.state.projectItemData.map((data) => {
                        return (
                            <ProjectItem data={data} />
                        );
                    })}
                </div>



            </div>



        )
    }
}

export default Projects