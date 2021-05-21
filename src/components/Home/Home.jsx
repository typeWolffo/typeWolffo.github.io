import React from "react";
import {Container, Typography} from "@material-ui/core";
import {makeStyles, styled} from "@material-ui/styles";
import Typed from 'react-typed';
import {
    BrowserView,
    MobileView,
} from "react-device-detect";
import {Link} from "react-router-dom";
import Particles from 'react-particles-js';


// fonts
import "@fontsource/inter";
import "@fontsource/fira-mono";
import "@fontsource/overpass-mono"
//icons
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
    },
    container1: {
        height: '40vh',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "flex-end"
    },
    b: {
        fontFamily: 'Overpass Mono'
    },
    m: {
        fontFamily: 'Overpass Mono',
        fontSize: '30px'
    },
    second: {
        fontFamily: 'Fira Mono',
    },
    container2: {
        height: '40vh',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    socialText: {
        fontFamily: 'Overpass Mono'
    },
    socialIcons: {
        color: '#fff',
        display: "flex",
    },
    particles: {
        position: "absolute",
        width: '100%',
        height: '100%'
    }
})
const Slink = styled(Link)({
    color: '#fff',
    textDecoration: 'none',
    margin: '0px'
})

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Particles
                params={{
                    "particles": {
                        color: {
                            value: "#ffffff",
                            opacity: 0.5,
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                        },
                        "number": {
                            "value": 25
                        },
                        "size": {
                            "value": 2
                        },
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#2af804",
                                blur: 5
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            className={classes.particles}
            />
            <Container className={classes.container1}>
                <BrowserView>
                    <Typography variant="h1" component="h1" className={classes.b}>{`<typeWolffo />`}</Typography>
                </BrowserView>
                <MobileView>
                    <Typography variant="h3" component="h3" className={classes.m}>{`<typeWolffo />`}</Typography>
                </MobileView>
                <Typed
                    strings={[
                        'Kodował Wilk razy kilka...',
                        'Człowiek człowiekowi wilkiem, a Wilk człowiekowi koduje.',
                        'Nie taki Wilk straszny jak mu kodują.',
                        'I Wilk syty i kod napisany.'
                    ]}
                    typeSpeed={60}
                    backSpeed={20}
                    backDelay={1400}
                    loop
                    className={classes.second}
                />
            </Container>
            <Container className={classes.container2}>
                <BrowserView>
                    <Typography variant="h3" component="h3" className={classes.socialText}>Socials</Typography>
                    <div className={classes.socialIcons}>
                        <Slink to="https://www.facebook.com/Wilku1234/"><FacebookIcon style={{fontSize: 60}}/></Slink>
                        <Slink to="ttps://www.linkedin.com/in/jakub-wilk-340822192/"><LinkedInIcon
                            style={{fontSize: 60}}/></Slink>
                        <Slink to="https://www.instagram.com/woolffo/"><InstagramIcon style={{fontSize: 60}}/></Slink>
                        <Slink to="https://t.me/typeWolffo"><TelegramIcon style={{fontSize: 60}}/></Slink>
                        <Slink to="https://github.com/typeWolffo"><GitHubIcon style={{fontSize: 60}}/></Slink>
                    </div>
                </BrowserView>
                <MobileView>
                    <Typography variant="h5" component="h5" className={classes.socialText}>Socials</Typography>

                    <div className={classes.socialIcons}>
                        <Slink to="https://www.facebook.com/Wilku1234/"><FacebookIcon style={{fontSize: 30}}/></Slink>
                        <Slink to="ttps://www.linkedin.com/in/jakub-wilk-340822192/"><LinkedInIcon
                            style={{fontSize: 30}}/></Slink>
                        <Slink to="https://www.instagram.com/woolffo/"><InstagramIcon style={{fontSize: 30}}/></Slink>
                        <Slink to="https://t.me/typeWolffo"><TelegramIcon style={{fontSize: 30}}/></Slink>
                        <Slink to="https://github.com/typeWolffo"><GitHubIcon style={{fontSize: 30}}/></Slink>
                    </div>
                </MobileView>
            </Container>
        </div>

    )
}
