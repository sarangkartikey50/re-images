import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CameraTwoToneIcon from '@material-ui/icons/CameraTwoTone'
import Switch from '@material-ui/core/Switch'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: (payload) => dispatch({ type: 'UPDATE_THEME', payload })
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    boxShadow: theme.palette.boxShadow,
    background: theme.palette.background,
    borderBottom: theme.palette.borderColor
  },
  header: {
    fontWeight: 'bold',
    fontFamily: 'Google Sans',
    color: theme.palette.text
  },
  icon: {
    verticalAlign: 'middle',
    marginRight: '5px',
    fontSize: '40px',
    color: theme.palette.iconColor,
  }
})

function CustomAppBar(props) {
  const { classes } = props;
  const [themeCheckBox, setThemeCheckbox] = useState(false)

  const handleChange = name => event => {
    setThemeCheckbox(event.target.checked);
    props.toggleTheme(event.target.checked)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography className={classes.header} variant="h6" color="inherit">
            <CameraTwoToneIcon className={classes.icon} />
            RE IMAGES PWA
          </Typography>
          <div style={{position: 'absolute', right: '25px'}}>
            <Switch
              style={{color: 'blueviolet'}}
              checked={themeCheckBox}
              onChange={handleChange('themeCheckBox')}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(CustomAppBar))