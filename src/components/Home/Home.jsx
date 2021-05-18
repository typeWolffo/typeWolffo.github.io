import React from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import "@fontsource/inter";
import "@fontsource/fira-mono";
import Typed from 'react-typed';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
    },
    first: {
        fontFamily: 'inter'
    },
    second: {
        fontFamily: 'Fira Mono',

    },
    third: {
        fontFamily: 'inter',

    }
})

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h1" component="h1" className={classes.first}>typeWolffo</Typography>
            <Typed
                strings={[
                    'Kodował Wilk razy kilka...',
                    'Człowiek człowiekowi wilkiem, a Wilk człowiekowi koduje.',
                    'Nie taki Wilk straszny jak mi kodują.',
                    'I Wilk syty i kod napisany.'
                ]}
                typeSpeed={70}
                backSpeed={20}
                backDelay={1400}
                loop
                className={classes.second}
            />
        </div>
    )
}
