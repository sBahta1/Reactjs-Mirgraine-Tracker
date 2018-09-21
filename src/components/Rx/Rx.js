import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Paper from '@material-ui/core/Paper';
import RxAddNew from './RxAddNew/RxAddNew';
import axios from 'axios';
import { connect } from 'react-redux';
import RxList from './RxList/RxList'
class Rx extends Component {
componentDidMount(){
    this.getRx();
}
    getRx = () => {
        axios({
            method: 'GET',
            url: '/api/rx'
        }).then((response) => {
            const action = { type: 'SET_RX', payload: response.data }
            this.props.dispatch(action);
        }).catch((error) => {
            console.log(error);
            alert('Unable to get prescriptions')
        });
    };

    render() {
        return (
            <Paper>
                <Nav />
                <RxAddNew />
                <RxList />
            </Paper>
        )
    }
}//end class

export default connect()(Rx);