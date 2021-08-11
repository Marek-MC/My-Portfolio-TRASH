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

                    <a id="itemLink" target="_blank" href={this.props.data.github}>{this.props.data.title}</a>

                    <p id='itemDescription'>{this.props.data.description}</p>

                    <p id='itemStatus'>Status: {this.props.data.status}</p>

                    {this.props.data.image !== null &&
                        <img src={this.props.data.image} alt={this.props.data.image} height="200px"></img>
                    }

                    {this.props.data.image2 !== null &&
                        <img src={this.props.data.image2} alt={this.props.data.image2} height="200px"></img>
                    }

                    {this.props.data.image3 !== null &&
                        <img src={this.props.data.image3} alt={this.props.data.image3} height="200px"></img>
                    }

                </div>

            </>
        )
    }
}

export default ProjectItem;