import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Logo from "../../assets/logo.png"
import About from "../About/About";
import Projects from "../Projects/Projects";
import Home from "../Home/Home";

const useStyles = theme => ({
    bar: {
        display: 'flex',
        color: 'inherit',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '60px',
        border: 'solid red 1px'
    },
    logo: {
        maxHeight: '60px',
        height: 'auto',
        border: 'solid 1px blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            height: '80%'
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
});

class Navbar extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Router>
                <div>
                    <AppBar color='transparent' elevation='0' position="static" className={classes.bar}>
                        <Link to="/home" className={classes.logo}>
                            <img src={Logo} alt="typeWolffo" />
                        </Link>
                        <Toolbar>
                            <Button className={classes.button} component={Link} to="/projects">
                                Projects
                            </Button>
                            <Button className={classes.button} component={Link} to='/about'>
                                About
                            </Button>
                        </Toolbar>
                    </AppBar>
                </div>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default withStyles(useStyles)(Navbar);