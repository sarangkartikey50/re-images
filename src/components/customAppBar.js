import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CameraTwoToneIcon from '@material-ui/icons/CameraTwoTone'

const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
    boxShadow: '0 15px 40px -20px rgba(40,44,63,.15)',
    background: 'white'
  },
  header: {
    fontWeight: 'bold',
    fontFamily: 'Google Sans',
    color: '#333'
  },
  icon: {
    verticalAlign: 'middle',
    marginRight: '5px', 
    fontSize: '40px',
    color: 'blueviolet',
  }
};

function CustomAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography className={classes.header} variant="h6" color="inherit">
            <CameraTwoToneIcon className={classes.icon} />
            RE-IMAGES PWA
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(CustomAppBar);