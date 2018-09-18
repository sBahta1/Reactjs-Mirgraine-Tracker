import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
const styles = {
  root: {
    width: 300,
  },
};

class StepSlider extends Component {
  state = {
    mood: 5,
    hydro: 5,
    fitness: 5,
    nutrition:5,
  };

  handleMoodChange = (event, mood) => {
    this.setState({ mood });
    let action = {
      type: 'SET_MOOD',
      payload: this.state.mood
    };
    this.props.dispatch(action);
    console.log('slide mood', mood);
    
  };
  handleHydroChange = (event, hydro) => {
    this.setState({ hydro });
    console.log('slide hydro', hydro, this.state);
    let action = {
      type: 'SET_HYDRO',
      payload: this.state.hydro
    }
    this.props.dispatch(action);
  };
  handleFitnessChange = (event, fitness) => {
    this.setState({ fitness });
    console.log('slide fitness', fitness);
    let action = {
      type: 'SET_FIT',
      payload: this.state.fitness
    }
    this.props.dispatch(action);
  };
  handleNutritionChange = (event, nutrition) => {
    this.setState({ nutrition });
    console.log('slide nutrition', nutrition);
    let action = {
      type: 'SET_NUTRI',
      payload: this.state.nutrition
    }
    this.props.dispatch(action);
  };

  render() {
    const { classes } = this.props;
    // const { value } = this.state;

    return (
      <div className={classes.root}>
        <p>Mood</p>
        <Slider value={this.state.mood} min={0} max={10} step={1} onChange={this.handleMoodChange} />
        <Divider />
        <p>Hydration</p>
        <Slider value={this.state.hydro} min={0} max={10} step={1} onChange={this.handleHydroChange} />
        <Divider />
        <p>Fitness</p>
        <Slider value={this.state.fitness} min={0} max={10} step={1} onChange={this.handleFitnessChange} />
        <Divider />
        <p>Nutrition</p>
        <Slider value={this.state.nutrition} min={0} max={10} step={1} onChange={this.handleNutritionChange} />
        <Divider />
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};
const slideWithStyles = withStyles(styles)(StepSlider)
export default connect()(slideWithStyles);