import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 345,
    fontFamily: 'Google Sans',
    boxShadow: theme.boxShadow,
    background: theme.palette.background
  },
  media: {
    height: 175,
  },
  title: {
      fontFamily: 'Google Sans',
      fontWeight: 'bold',
      lineHeight: '24px',
      color: theme.palette.text
  },
  body: {
      fontFamily: 'Google Sans',
      marginTop: '5px',
      color: theme.palette.text
  },
  button: {
      color: theme.palette.primaryColor
  }
})

function ImageCard(props) {
  const { classes, post } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
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