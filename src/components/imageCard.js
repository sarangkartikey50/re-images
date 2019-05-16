import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    fontFamily: 'Google Sans',
    boxShadow: '0 15px 40px -20px rgba(40,44,63,.15)'
  },
  media: {
    height: 175,
  },
  title: {
      fontFamily: 'Google Sans',
      fontWeight: 'bold',
      lineHeight: '24px'
  },
  body: {
      fontFamily: 'Google Sans',
      marginTop: '5px'
  },
  button: {
      color: 'blueviolet'
  }
};

function ImageCard(props) {
  const { classes, post } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.title} variant="h6">
            {post.title}
          </Typography>
          <Typography className={classes.body} component="p">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions style={{padding: '0 4px 8px 4px'}}>
            <Button className={`${classes.title} ${classes.button}`} size="small">
                Share
            </Button>
            <Button className={`${classes.title} ${classes.button}`} size="small" color="primary">
                Learn More
            </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(ImageCard);