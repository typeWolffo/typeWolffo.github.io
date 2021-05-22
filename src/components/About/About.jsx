import React from "react";
import {Avatar, ButtonBase, ButtonGroup, Container, Grow, IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {
    BrowserView,
    MobileView,
} from "react-device-detect";
import Icon from '@material-ui/core/Icon';
import {loadCSS} from 'fg-loadcss';


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
        marginTop: '60px'
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
        alignItems: 'center',
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
    iconWrapper: {
        display: "flex",
        flexDirection: "column",
        width: '100%',
        justifyContent: "center",
        maxHeight: '150px',
        alignItems: "center"
    },
    iconTitle: {
        color: '#fff',
    },
    iconSet: {
        margin: '10px 0'
    },
    icon: {
        color: '#fff',
        padding: '20px',
        "& > *": {
            fontSize: '60px',
        }
    },
    iconm: {
        color: '#fff',
        padding: '0',
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
        fontSize: '18px',
    },
    text2m: {
        fontFamily: 'overpass mono',
        fontSize: '22px',
        fontWeight: 700
    },
}))

export default function About() {
    const classes = useStyles();

    React.useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);

    const tech = () => (
        <div className={classes.iconWrapper}>
            <BrowserView>
                <Typography variant={"h4"} className={classes.iconTitle}>Technology I work with:</Typography>
                <ButtonGroup className={classes.iconSet}>
                    <IconButton className={classes.icon}>
                        <Icon className="fab fa-js" fontSize={"inherit"}/>
                    </IconButton>
                    <IconButton className={classes.icon}>
                        <Icon className="fab fa-react" fontSize={"inherit"}/>
                    </IconButton>
                    <IconButton className={classes.icon}>
                        <Icon className="fab fa-node-js" fontSize={"inherit"}/>
                    </IconButton>
                    <IconButton className={classes.icon}>
                        <Icon className="fab fa-sass" fontSize={"inherit"}/>
                    </IconButton>
                    <IconButton className={classes.icon}>
                        <Icon className="fab fa-ubuntu" fontSize={"inherit"}/>
                    </IconButton>
                </ButtonGroup>
            </BrowserView>
            <MobileView>
                <Typography variant={"subtitle1"} className={classes.iconTitle}>Technology I work with:</Typography>
                <ButtonGroup className={classes.iconSet}>
                    <IconButton className={classes.iconm}>
                        <Icon className="fab fa-js" fontSize={"large"}/>
                    </IconButton>
                    <IconButton className={classes.iconm}>
                        <Icon className="fab fa-react" fontSize={"large"}/>
                    </IconButton>
                    <IconButton className={classes.iconm}>
                        <Icon className="fab fa-node-js" fontSize={"large"}/>
                    </IconButton>
                    <IconButton className={classes.iconm}>
                        <Icon className="fab fa-sass" fontSize={"large"}/>
                    </IconButton>
                    <IconButton className={classes.iconm}>
                        <Icon className="fab fa-ubuntu" fontSize={"large"}/>
                    </IconButton>
                </ButtonGroup>
            </MobileView>
        </div>
    )

    return (
        <>
            <BrowserView>
                <Grow in={true} timeout={600}>
                    <div className={classes.root}>
                        <Container className={classes.left}>
                            <div className={classes.wrapper}>
                                <Typography variant="body2" className={classes.text1}>JavaScript</Typography>
                                <Typography variant="body2" className={classes.text1}>React</Typography>
                                <Typography variant="body2" className={classes.text1}>Front - End</Typography>
                                <Typography variant="body2" className={classes.text2}>{`<Jakub Wilk/>`}</Typography>
                            </div>
                        </Container>
                        <Container className={classes.right}>
                            <Avatar src={Fc} alt="" className={classes.avatar}/>
                        </Container>
                        {tech()}
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
                        {tech()}
                    </div>
                </Grow>
            </MobileView>
        </>
    )

}