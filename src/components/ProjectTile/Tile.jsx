import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "@fontsource/inter"
import {Link} from "react-router-dom";

const useStyles = makeStyles({

    root: {
        maxWidth: 345,
        width: 345,
        fontFamily: "Inter",
        boxShadow: '3px 3px 10px #000',
        margin: '10px',
        backgroundColor: "#1a1a1a",

    },
    media: {
        height: 140,
    },
    cardContent: {
        backgroundColor: "#1a1a1a",
        color: "#fff",
        fontFamily: 'inter',
        height: '100%',
        maxHeight: '100%',
    }
});

export default function Tile(props) {
    const classes = useStyles();
    const handleRedirect = () => {
        window.location = props.link;
    }

    return (
            <Card className={classes.root} component={ Link } onClick={handleRedirect}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.imagePath}
                        title={props.title}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>

                            <Typography variant="body2" component="p">
                                {props.desc}
                            </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
    )
}
