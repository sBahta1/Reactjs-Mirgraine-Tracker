import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
const mapStateToProps = state => ({
  user: state.user,
});
const styles = {
  root: {
    position: 'relative',
    display: 'flex',
    justify: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '600px',
    width: '375px'
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
}
class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
  }
  capMigraine = () => {
    axios({
      method: 'POST',
      url: 'api/migr',
    }).then((response) => {
      console.log(response);
      alert('Migraine Logged')
      this.props.history.push('migraine')
    }).catch((error) => {
      console.log(error);
      alert('error logging migrain', error);
    })
  }
  render() {
    const { classes } = this.props;
    let content = null;

    if (this.props.user.userName) {
      content = (
        <Paper className={classes.root}>

          <Avatar className={classes.bigAvatar} src="images/blank-avatar.png" />

          <h1
            id="welcome"
          >
            Welcome, {this.props.user.userName}!
          </h1>

          <Button variant="contained" size="large" className={classes.button} onClick={this.capMigraine}>
            Capture Migraine
            </Button>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </Paper>
      );
    }

    return (
      <div>
        <Nav />
        {content}
      </div>
    );
  }
}
UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
const userPageStyles = withStyles(styles)(UserPage)
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(userPageStyles);