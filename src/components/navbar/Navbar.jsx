import React from 'react';
import {makeStyles} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    BrowserView,
    MobileView,
} from "react-device-detect";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Logo from "../../assets/logov3.png"
import About from "../About/About";
import Projects from "../Projects/Projects";
import Home from "../Home/Home";

const useStyles = makeStyles({
    bar: {
        display: 'flex',
        color: 'inherit',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60px',
        flexWrap: 'wrap',
        backgroundColor: '#121212'
    },
    logo: {
        maxHeight: '60px',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            height: '70%',
        }
    },
    button: {
        height: 'auto',
        width: '10rem',
        color: '#fff'
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
    },
    list: {
        width: 250,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#161616',
        color: '#fff'
    },
    hamburger: {
        color: '#fff'
    }
});


export default function Navbar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (right, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [right]: open});
    };

    const list = (right) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(right, false)}
            onKeyDown={toggleDrawer(right, false)}
        >
            <List>
                <ListItem button key="Projects" component={Link} to='/projects'>
                    <ListItemText primary="Projects"/>
                </ListItem>
                <ListItem button key="About" component={Link} to='/about'>
                    <ListItemText primary="About"/>
                </ListItem>
            </List>

        </div>
    );

    return (
        <Router>
            <div>
                <AppBar position="fixed" className={classes.bar}>
                    <Link to="/" className={classes.logo}>
                        <img src={Logo} alt="typeWolffo"/>
                    </Link>
                    <BrowserView>
                        <Toolbar>
                            <Button className={classes.button} component={Link} to="/projects">
                                Projects
                            </Button>
                            <Button className={classes.button} component={Link} to='/about'>
                                About
                            </Button>
                        </Toolbar>
                    </BrowserView>
                    <MobileView>
                        <div>
                            {['right',].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <Button onClick={toggleDrawer(anchor, true)}>
                                        <MenuRoundedIcon className={classes.hamburger} fontSize="large"/>
                                    </Button>
                                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                        {list(anchor)}
                                    </Drawer>
                                </React.Fragment>
                            ))}
                        </div>
                    </MobileView>
                </AppBar>
            </div>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

