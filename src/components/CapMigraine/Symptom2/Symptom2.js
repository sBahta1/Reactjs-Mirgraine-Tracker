import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import Nav from '../../Nav/Nav';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
const styles = {
  root: {
    width: 300,
    position: 'relative',
    display: 'flex',
    justify: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '600px'
  },
};

class StepSlider extends Component {
  state = {
    value: 5,
    notes: '',
  };

  handleChange = (event, value) => {
    console.log(value);

    this.setState({ value });
  };
  captureNote = (event) => {
    console.log('capture note', event.target.value);
    this.setState({ notes: event.target.value });
    console.log(this.state);
  }
  sendSeverity = () => {
    console.log(this.state);
    let data = this.state;
    axios({
      method: 'PUT',
      url: '/api/migr/sev',
      data: data
    }).then((response) => {
      console.log(response);
      this.props.history.push('home')
    }).catch((error) => {
      console.log('Error posting Migraine Location', error);
      alert('Error posting Migraine Location', error);
    });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper>
        <Nav />
        <div className={classes.root}>
          <br />
          <Typography id="label1">Severity</Typography>
          <Slider
            value={value}
            aria-labelledby="label1"
            min={0} max={10} step={1}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            id="filled-multiline-static"
            label="Notes"
            multiline
            rows="3"
            placeholder="Add notes here"
            margin="normal"
            variant="outlined"
            onChange={this.captureNote}
          />

          <Button onClick={this.sendSeverity} variant="outlined">
            Finish
        </Button>
        </div>
      </Paper>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);