import React from "react";
import Tile from "../ProjectTile/Tile";
import {makeStyles} from '@material-ui/core/styles';
import "@fontsource/inter"
import Grow from '@material-ui/core/Grow';
import Tilt from 'react-tilt';

import BgTest from "../../assets/bgtest.jpg"
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        justifyContent: 'center'
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "80%",
        height: 'auto',
        justifyContent: "space-around",
        alignSelf: "center",
        margin: "10px 0",
    },
    header: {
        fontFamily: 'inter',
        color: '#fff',
        textTransform: 'uppercase',
        margin: "20px 0",
        flexBasis: '100%',
    }
})

export default function Projects() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grow in={true} timeout={600}>
                <div className={classes.wrapper}>
                    <Typography variant="h5" className={classes.header}>Hall of fame</Typography>
                    <Tilt className="Tilt" options={{max: 30}} style={{height: 'auto', width: 450}}>
                        <Tile imagePath={BgTest}
                              link='https://www.example.com'
                              title="Aplikacja plACEholder"
                              desc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki."
                        />
                    </Tilt>
                    <Tilt className="Tilt" options={{max: 30}} style={{height: 'auto', width: 450}}>
                        <Tile imagePath={BgTest}
                              link='https://www.example.com'
                              title="BimBeer"
                              desc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki."
                        />
                    </Tilt>
                    <Tilt className="Tilt" options={{max: 30}} style={{height: 'auto', width: 450}}>
                        <Tile imagePath={BgTest}
                              link='https://www.example.com'
                              title="l'Oreal Ipsum"
                              desc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki."
                        />
                    </Tilt>
                </div>
            </Grow>
        </div>
    )
}

