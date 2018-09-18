import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import StepSlider from './StepSliders/StepSlider';
import Switches from './Switches/Switches';
import axios from 'axios';

const mapStateToProps = state => ({
    daily: state.daily
})

class DailyCheckin extends Component {
    constructor() {
        super();
    }

    sendCheckin = () => {
        let dailyCheckFinal = this.props.daily;
        console.log(dailyCheckFinal);
        axios({
            method: 'POST',
            url: '/api/daily',
            data: dailyCheckFinal
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
            alert('Unable to add Daily Check-in')
        })
    }//end sendCheckin
    render() {

        return (
            <Paper>
                <Nav />

                <StepSlider />
                <Switches /><br />
                <Button variant="contained" size="large" color="primary" onClick={this.sendCheckin} >
                    Submit
                 </Button >

                <h1>Hello World</h1>
            </Paper>
        )//end return
    }//end render
}//end class DailyCheckin

export default connect(mapStateToProps)(DailyCheckin);