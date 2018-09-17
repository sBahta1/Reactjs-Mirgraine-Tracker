import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav'
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import StepSlider from './StepSlider/StepSlider'

class DailyCheckin extends Component {
    constructor(){
        super();
    this.state = {
        value:3,
    }
}

//     handleMoodChange=(event,value)=>{
//         this.setState({
//             value
//         });      
// }
    render() {

        return (
            <Paper>
                <Nav />
                
                <StepSlider  onChange={this.handleChange}/>

                <h1>Hello World</h1>
            </Paper>
        )//end return
    }//end render
}//end class DailyCheckin

export default connect()(DailyCheckin);