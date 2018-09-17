import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav'
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import StepSlider from './StepSliders/StepSlider'

class DailyCheckin extends Component {
    constructor(){
        super();
    
}



    render() {

        return (
            <Paper>
                <Nav />
                
                <StepSlider  />

                

                <h1>Hello World</h1>
            </Paper>
        )//end return
    }//end render
}//end class DailyCheckin

export default connect()(DailyCheckin);