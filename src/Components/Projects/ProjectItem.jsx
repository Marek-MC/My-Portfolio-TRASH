import "./ProjectItem.css"

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectItem extends Component {

    



    render() {
        return (
            <>

                <div id='projectItem'>

                    <h4 id='itemTitle'><span className='keyword'>{this.props.data.title}</span></h4>

                    <p id='itemDescription'>{this.props.data.description}</p>

                    <p id='itemStatus'>Status: {this.props.data.status}</p>

                    <Link id='itemLink' to={this.props.data.path}>{this.props.data.title} Project Link</Link>

                </div>

            </>
        )
    };
};

export default ProjectItem;