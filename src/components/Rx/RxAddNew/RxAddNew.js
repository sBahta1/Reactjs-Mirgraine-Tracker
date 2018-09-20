import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 4,
    },
    textField: {
        flexBasis: 200,
    },
});

class RxAddNew extends Component {
    state = {
        med: '',
        sympt: '',
        dose: '',
        regim: '',
    }

    handleDose = (event) => {
        console.log('Dose: ', event.target.value);
        let dose = event.target.value
        let action = {
            type: 'SET_DOSE',
            payload: dose
        }
        this.props.dispatch(action);
    };
    handleMedName = (event) => {
        console.log('Name: ', event.target.value);
        let name = event.target.value
        let action = {
            type: 'SET_MED_NAME',
            payload: name
        }
        this.props.dispatch(action);
    }

    handleSymptom = (event) => {
        console.log('Symptom: ', event.target.value);
        let symptom = event.target.value
        let action = {
            type: 'SET_SYMP',
            payload: symptom
        }
        this.props.dispatch(action);
    }
    handleRegiment = (event) => {
        console.log('Regiment: ', event.target.value);
        let regiment = event.target.value
        let action = {
            type: 'SET_REGI',
            payload: regiment
        }
        this.props.dispatch(action);
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper >
                <FormControl
                    className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
                    aria-describedby="weight-helper-text"
                >
                    <Input
                        placeholder="Medication Name"
                        //inputProps={{ 'aria-label': 'Description', }}
                        onChange={this.handleMedName}
                    />
                    {/* </FormControl>
                <FormControl
                    className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
                    aria-describedby="weight-helper-text"
                > */}
                    <Input
                        placeholder="Dosage"
                        endAdornment={<InputAdornment position="end">Mg</InputAdornment>}
                        // inputProps={{ 'aria-label': 'Weight', }}
                        onChange={this.handleDose}
                    />
                    {/* <FormHelperText id="weight-helper-text">Dosage</FormHelperText> */}
                    <Input
                        placeholder="Purpose (eg. 'Nausea')"
                        onChange={this.handleSymptom}
                    />
                    <Input
                        placeholder="Regiment"
                        onChange={this.handleRegiment}
                    />

                </FormControl>
            </Paper>
        )
    }


}//end class 
RxAddNew.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RxAddNew);