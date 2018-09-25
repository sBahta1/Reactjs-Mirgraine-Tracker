import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
class Switches extends Component {
    state = {
        medication: false,
        menstruation: false,
    }

    handleMedsChange = (event) => {
        //console.log(event.target.checked);
        if (this.state.medication === false) {
            this.setState({ medication: true })
        } else {
            this.setState({ medication: false })
        }
        // console.log(this.state);
        let action = {
            type: 'SET_MED',
            payload: event.target.checked
        }
        this.props.dispatch(action);
    }

    handleMensChange = (event) => {
        if (this.state.menstruation === false) {
            this.setState({ menstruation: true })
        } else {
            this.setState({ menstruation: false })
        }
        // console.log(this.state);
        let action = {
            type: 'SET_MENS',
            payload: event.target.checked
        }
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <Typography id="label1">Medication</Typography>
                <Switch color="primary" aria-labelledby="label1" checked={this.state.medication} onChange={this.handleMedsChange} />
                <Typography id="label2">Menstruating</Typography>
                <Switch color="primary" aria-labelledby="label2" checked={this.state.menstruation} onChange={this.handleMensChange} />
                <Divider />
            </div>

        )
    }//end render
}//end class Switches 
export default connect()(Switches);