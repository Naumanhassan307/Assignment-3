import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "./Card.css"


import CardData from "./CardData"

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 400,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="car">
    {
      CardData.map((item)=>{
        return(
                <Card className={classes.root} className="wholeCard">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.cardSrc}
                title={item.cardTitle}
                className="single"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.cardTitle}
                </Typography>
                
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        )
      })
    }
    </div>
  );
}
