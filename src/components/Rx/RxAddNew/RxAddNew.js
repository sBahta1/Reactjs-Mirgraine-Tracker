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
                        inputProps={{ 'aria-label': 'Description', }}
                    />
                {/* </FormControl>
                <FormControl
                    className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
                    aria-describedby="weight-helper-text"
                > */}
                    <Input
                        placeholder="Dosage"
                        endAdornment={<InputAdornment position="end">Mg</InputAdornment>}
                        inputProps={{ 'aria-label': 'Weight', }}
                    />
                    {/* <FormHelperText id="weight-helper-text">Dosage</FormHelperText> */}
                    <Input
                        placeholder="Purpose (eg. 'Nausea')"                    
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