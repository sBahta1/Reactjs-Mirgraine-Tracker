import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Paper from '@material-ui/core/Paper';
import RxAddNew from './RxAddNew/RxAddNew';
class Rx extends Component {
    render() {
        return (
            <Paper>
                <Nav />

                <RxAddNew />
            </Paper>
        )
    }
}//end class

export default Rx;