import React from "react";
import Tile from "../ProjectTile/Tile";
import {makeStyles} from '@material-ui/core/styles';

import BgTest from "../../assets/bgtest.jpg"

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "80%"
    }
})

export default function Projects() {
    const classes = useStyles();
    return (
        <div>
            <h1>Projects</h1>
            <div className={classes.wrapper}>
                <Tile imagePath={BgTest} title="test1" desc="Lorem ipsum, dolor sit amet"/>
                <Tile imagePath={BgTest} title="test1" desc="Lorem ipsum, dolor sit amet"/>
                <Tile imagePath={BgTest} title="test1" desc="Lorem ipsum, dolor sit amet"/>
                <Tile imagePath={BgTest} title="test1" desc="Lorem ipsum, dolor sit amet"/>
            </div>
        </div>
    )
}

