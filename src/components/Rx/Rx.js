import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Paper from '@material-ui/core/Paper';
import RxAddNew from './RxAddNew/RxAddNew';
import axios from 'axios';
import { connect } from 'react-redux';
import RxList from './RxList/RxList'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        position: 'relative',
         display: 'flex',
        justify: 'center',
         flexDirection: 'column',
        alignItems: 'center',
        height: '600px'
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    container:{
        width:'360px',
    }
}


class Rx extends Component {


    componentDidMount() {
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
        const { classes } = this.props;
        return (
            <Paper>
                <Nav />
                <div className={classes.root}>
                
                <RxAddNew />
                <div className={classes.container}>
                <RxList />
                </div>
                </div>
            </Paper>
        )
    }
}//end class

Rx.propTypes = {
    classes: PropTypes.object.isRequired,
};
const RxWithStyle = withStyles(styles)(Rx)
export default connect()(RxWithStyle);