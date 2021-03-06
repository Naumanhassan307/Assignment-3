import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import { UseJewelery } from "./useJewelery";
import ScrollDialog from "../Cards/cardDetail";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Categories() {
  const [allProducts] = UseJewelery();

  

  const classes = useStyles();

  return (
    <div className="car">
      {allProducts.map((item) => {
        return (
          <Card className={classes.root} className="wholeCard">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.image}
                title={item.title}
                className="single"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Price: Rs {item.price}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              {/* <ScrollDialog item={item} /> */}
              <ScrollDialog item={item} />
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
