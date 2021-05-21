import React, {Component} from "react";
import {Avatar, Container, Grow} from "@material-ui/core";
import Typed from "react-typed";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

// fonts
import "@fontsource/inter";
import "@fontsource/fira-mono";
import "@fontsource/overpass-mono";
import Fc from "../../assets/fc.png"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: 'calc(100vh - 60px)',
        flexWrap: 'wrap',
    },
    left: {
        width: '50vw',
        color: '#fff',
        height: 'auto',
        display: 'flex',
        flexDirection: "column",
        minWidth: '466px',
    },
    right: {
        width: '50vw',
        height: 'auto',
        display: 'flex',
        flexDirection: "column",
        minWidth: '466px',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            maxWidth: '500px',
            width: '100%'
        },

    },
    leftm: {
        width: '100%',
        color: '#fff',
        height: 'auto',
        display: 'flex',
        flexDirection: "column",
        minWidth: '320px',
    },
    rightm: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: "column",
        minWidth: '320px',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            maxWidth: '500px',
            width: '100%'
        },

    },
    avatar: {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },
    wrapper: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: 'center',
        height: '100%',
    },
    text1: {
        fontFamily: 'inter',
        fontSize: '46px',
    },
    text2: {
        fontFamily: 'overpass mono',
        fontSize: '52px',
        fontWeight: 700
    },
    avatarm: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    wrapperm: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: 'center',
        height: '100%',
    },
    text1m: {
        fontFamily: 'inter',
        fontSize: '26px',
    },
    text2m: {
        fontFamily: 'overpass mono',
        fontSize: '32px',
        fontWeight: 700
    },
}))

export default function About() {
    const classes = useStyles();

    return (
        <>
            <BrowserView>
                <Grow in={true} timeout={600}>
                    <div className={classes.root}>
                        <Container className={classes.left}>
                            <div className={classes.wrapper}>
                                <Typography variant="span" className={classes.text1}>JavaScript</Typography>
                                <Typography variant="span" className={classes.text1}>React</Typography>
                                <Typography variant="span" className={classes.text1}>Front - End</Typography>
                                <Typography variant="span" className={classes.text2}>{`<Jakub Wilk/>`}</Typography>
                            </div>
                        </Container>
                        <Container className={classes.right}>
                            <Avatar src={Fc} alt="" className={classes.avatar}/>
                        </Container>
                    </div>
                </Grow>
            </BrowserView>
            <MobileView>
                <Grow in={true} timeout={600}>
                    <div className={classes.root}>
                        <Container className={classes.leftm}>
                            <div className={classes.wrapperm}>
                                <Typography variant="span" className={classes.text1m}>JavaScript</Typography>
                                <Typography variant="span" className={classes.text1m}>React</Typography>
                                <Typography variant="span" className={classes.text1m}>Front - End</Typography>
                                <Typography variant="span" className={classes.text2m}>{`<Jakub Wilk/>`}</Typography>
                            </div>
                        </Container>
                        <Container className={classes.rightm}>
                            <Avatar src={Fc} alt="" className={classes.avatarm}/>
                        </Container>
                    </div>
                </Grow>
            </MobileView>
        </>
    )
}