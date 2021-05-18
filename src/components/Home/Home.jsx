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
        fontFamily: 'Fira Mono'
    },
    second: {
        fontFamily: 'inter',

    },
    third: {
        fontFamily: 'inter',

    }
})

export default function Home() {
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <Typed
                strings={['Kodował']}
                typeSpeed={40}
            />
            {/*<Typography variant="h4" component="h4" className={styles.first}>Kodował</Typography>*/}
            <Typography variant="h1" component="h1" className={styles.second}>Wilk</Typography>
            <Typography variant="h4" component="h4" className={styles.third}>razy kilka...</Typography>
        </div>
    )
}
