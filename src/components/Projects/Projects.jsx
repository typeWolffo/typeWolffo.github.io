import React, { Component } from "react";
import Tile from "../ProjectTile/Tile";
class Projects extends React.Component {
    render() {
        return (
            <div>
            <h1>Projects</h1>
            <Tile {...this.props}>
                <this.props.title: 'test'>
            </Tile>
            </div>
        )
    }
}

export default Projects;