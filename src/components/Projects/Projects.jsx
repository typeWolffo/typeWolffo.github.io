import React from "react";
import Tile from "../ProjectTile/Tile";
import {makeStyles} from '@material-ui/core/styles';
import "@fontsource/inter"
import Fade from '@material-ui/core/Fade';


import BgTest from "../../assets/bgtest.jpg"
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "flex",
        width: "100vw",
        height: "auto",
        flexDirection: "column",
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "80%",
        justifyContent: "space-around",
        alignSelf: "center",
        margin: "10px 0"
    },
    header: {
        fontFamily: 'inter',
        color: '#fff',
        textTransform: 'uppercase',
        margin: "20px 0"
    }
})

export default function Projects() {
    const classes = useStyles();

    return (
        <Fade in={true} timeout={600}>
            <div className={classes.root}>
                <Typography variant='h4' className={classes.header}>Projects</Typography>
                <div className={classes.wrapper}>
                    <Tile imagePath={BgTest}
                          link='https://www.example.com'
                          title="test1"
                          desc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki."/>
                    <Tile imagePath={BgTest}
                          link='https://www.example.com'
                          title="test1"
                          desc="Lorem ipsum, dolor sit amet"/>
                    <Tile imagePath={BgTest}
                          link='https://www.example.com'
                          title="test1"
                          desc="Lorem ipsum, dolor sit amet"/>
                </div>
            </div>
        </Fade>
    )
}

