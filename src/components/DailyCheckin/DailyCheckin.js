import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import StepSlider from './StepSliders/StepSlider'

class DailyCheckin extends Component {
    constructor(){
        super();   
}
sendCheckin=()=>{
    
}
    render() {

        return (
            <Paper>
                <Nav />
                
                <StepSlider  />

                <Button variant="contained" size="large" color="primary" onClick={this.sendCheckin} >
                    Submit
                 </Button>

                <h1>Hello World</h1>
            </Paper>
        )//end return
    }//end render
}//end class DailyCheckin

export default connect()(DailyCheckin);