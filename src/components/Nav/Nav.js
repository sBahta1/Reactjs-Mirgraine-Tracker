import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Code from '@material-ui/icons/Code';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ShowChart from '@material-ui/icons/ShowChart'
import Home from '@material-ui/icons/Home';
import LocalPharmacy from '@material-ui/icons/LocalPharmacy';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';


const styles = {
  root: {
    flexGrow: 1,
    width: '375px'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },

};

class Nav extends Component {
  state = {
    anchorEl: null,
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleClick = () => {
    this.props.history.push('symptom2')
  }
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const sideList = (
      <Paper className={classes.list}>
        <MenuItem component={Link} to="/user">
          <ListItemIcon className={classes.icon}>
            <Home />
          </ListItemIcon>
          Home
        </MenuItem>
        <Divider />
        <MenuItem button component={Link} to="/daily">
          <ListItemIcon className={classes.icon}>
            <AssignmentTurnedIn />
          </ListItemIcon>
          Daily Check-in
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/notes">
          <ListItemIcon className={classes.icon}>
            <NoteAddIcon />
          </ListItemIcon>
          Note
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/rx">
          <ListItemIcon className={classes.icon}>
            <LocalPharmacy />
          </ListItemIcon>
          Medications
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/graph" >
          <ListItemIcon className={classes.icon}>
            <ShowChart />
          </ListItemIcon>
          Charts
        </MenuItem>
      </Paper>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={this.toggleDrawer('left', true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            >
              Migraine Tracker
            </Typography>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
            </Drawer>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <Code />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>React</MenuItem>
                <MenuItem onClick={this.handleClose}>React-Redux</MenuItem>
                <MenuItem onClick={this.handleClose}>Express</MenuItem>
                <MenuItem onClick={this.handleClose}>Node</MenuItem>
                <MenuItem onClick={this.handleClose}>PostgreSQL</MenuItem>
                <MenuItem onClick={this.handleClose}>Momentjs</MenuItem>
                <MenuItem onClick={this.handleClose}>Chartjs</MenuItem>
                <MenuItem onClick={this.handleClose}>Material-UI</MenuItem>
              </Menu>
            </div>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);