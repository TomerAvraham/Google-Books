import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    Width: "250px",
    height: "300px",
    overflowY: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    objectFit: "contain", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Book({
  authors,
  image,
  publisher,
  title,
  publishedDate,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography
            key="dasdas56468547"
            gutterBottom
            variant="h5"
            component="h3"
          >
            {title}
          </Typography>
          <CardMedia className={classes.media} image={image} />
          <Typography
            key="dasd4547"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <p>{authors ? authors.join() : console.log("no author")}</p>
          </Typography>
          <Typography
            key="dasdfsdaf458547"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <p>{publisher}</p>
          </Typography>
          <Typography
            key="dafdfdz68547"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <p>{publishedDate}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
