import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Button from '@material-ui/core/Button';
import Symptom1 from './Symptom1/Symptom1';
class CapMigraine extends Component {
   
   nextPage=()=>{
    this.props.history.push('symptom1')
   }
    render() {
        return (
           <div>
            <Nav />
            <Button variant="contained" size="large" color="primary" onClick={this.nextPage}>
                Record My Symptoms
            </Button>
            <Button variant="contained" size="large" color="primary">
                Remind me later
            </Button>
            <Button variant="contained" size="large" color="primary">
                Migraine Survival Guide
            </Button>
          
        </div>
        )
    }
}//class
export default CapMigraine;
