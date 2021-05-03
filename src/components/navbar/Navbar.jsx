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

import About from "../About/About";
import Projects from "../Projects/Projects";

const useStyles = theme => ({
    bar: {
        display: 'flex',
        color: 'inherit',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
      height: 'auto',
      width: '10rem'
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
                        <Toolbar>
                            <Button className={classes.button}>
                                <Link to="/projects" className={classes.link}>Projects</Link>
                            </Button>
                            <Button className={classes.button}>
                                <Link to="/about" className={classes.link}>About</Link>
                            </Button>
                        </Toolbar>
                    </AppBar>
                </div>
                <Switch>
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