import React, {Component} from "react";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

class Tile extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         bg: '',
    //         title: '',
    //         desc: '',
    //     }
    // }

    props = {
        bg: '',
        title: '',
        desc: '',
    }

    render() {
        const {classes} = this.props;

        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={this.props.bg}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/*<CardActions>*/}
                {/*    <Button size="small" color="primary">*/}
                {/*        Share*/}
                {/*    </Button>*/}
                {/*    <Button size="small" color="primary">*/}
                {/*        Learn More*/}
                {/*    </Button>*/}
                {/*</CardActions>*/}
            </Card>
        );
    }
}

export default withStyles(useStyles)(Tile);