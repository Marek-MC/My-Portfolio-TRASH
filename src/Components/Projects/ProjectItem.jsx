// CSS import
import "./ProjectItem.css"

// React imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectItem extends Component {





    render() {
        return (
            <>

                <div id='projectItem'>

                    <a id="itemLink" target="_blank" href={this.props.data.path}>{this.props.data.title}</a>
                    
                    <p id='itemDescription'>{this.props.data.description}</p>

                    <p id='itemStatus'>Status: {this.props.data.status}</p>


                </div>

            </>
        )
    }
}

export default ProjectItem;