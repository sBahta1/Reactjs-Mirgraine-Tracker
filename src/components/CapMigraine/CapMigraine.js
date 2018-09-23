import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Button from '@material-ui/core/Button';
class CapMigraine extends Component {
    render() {
        return (
           <div>
            <Nav />
            <Button variant="contained" size="large" color="primary">
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
