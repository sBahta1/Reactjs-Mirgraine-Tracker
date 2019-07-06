import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import StepSlider from './StepSliders/StepSlider';
import Switches from './Switches/Switches';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
const mapStateToProps = state => ({
    daily: state.daily
})
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
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
};

class DailyCheckin extends Component {

    sendCheckin = () => {
        let dailyCheckFinal = this.props.daily;
        console.log(dailyCheckFinal);
        axios({
            method: 'POST',
            url: '/api/daily',
            data: dailyCheckFinal
        }).then((response) => {
            console.log(response);
            this.props.history.push('graph')
        }).catch((error) => {
            console.log(error);
            alert('Unable to add Daily Check-in')
        })
    }//end sendCheckin

    render() {
        const { classes } = this.props;
        return (
            <Paper style={{width:'375px'}}>
                <Nav />
                <div className={classes.root}>
                    <h3>
                        Daily Check-in
                    </h3>
                    <StepSlider />
                    <Switches /><br />
                    <Button variant="contained" size="large" className={classes.button} onClick={this.sendCheckin} >
                        Submit
                 </Button >
                </div>
            </Paper>
        )//end return
    }//end render
}//end class DailyCheckin
DailyCheckin.propTypes = {
    classes: PropTypes.object.isRequired,
};
const CheckinStyles = withStyles(styles)(DailyCheckin)
export default connect(mapStateToProps)(CheckinStyles); 