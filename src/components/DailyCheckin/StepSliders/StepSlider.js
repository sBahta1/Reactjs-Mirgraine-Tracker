import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
};

class StepSlider extends Component {
  state = {
    mood: 3,
    hydro: 3,
    fitness: 3,
    nutrition:3,
  };

  handleMoodChange = (event, mood) => {
    this.setState({ mood });
    console.log('slide mood', mood);
  };
  handleHydroChange = (event, hydro) => {
    this.setState({ hydro });
    console.log('slide hydro', hydro, this.state);
  };
  handleFitnessChange = (event, fitness) => {
    this.setState({ fitness });
    console.log('slide fitness', fitness);
  };
  handleNutritionChange = (event, nutrition) => {
    this.setState({ nutrition });
    console.log('slide nutrition', nutrition);
  };

  render() {
    const { classes } = this.props;
    // const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider value={this.state.mood} min={0} max={5} step={1} onChange={this.handleMoodChange} />
        <Slider value={this.state.hydro} min={0} max={5} step={1} onChange={this.handleHydroChange} />
        <Slider value={this.state.fitness} min={0} max={5} step={1} onChange={this.handleFitnessChange} />
        <Slider value={this.state.nutrition} min={0} max={5} step={1} onChange={this.handleNutritionChange} />

      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);