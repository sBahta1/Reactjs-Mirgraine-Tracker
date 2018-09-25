import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
class MigrianeLocNeck extends Component {
    state = {
        shoulder_left: false,
        shoulder_right: false,
        neck_left: false,
        neck_right: false,
        neck_spine: false,
    }
    handleChange = name => event => {
       // console.log(event.target.checked, this.state, name);
        this.setState(state => ({ [name]: !state[name] }));
        let action = { type: 'SET_NECKLOC', payload: { value: event.target.checked, place: name } }
        this.props.dispatch(action)
    }
    render() {

        return (
            <Paper >
                <List dense >
                    <ListItem
                        dense>
                        <Switch checked={this.state.shoulder_left} onChange={this.handleChange('shoulder_left')} />
                        <ListItemText primary="Shoulder Muscle - Left" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="shoulder_right" checked={this.state.shoulder_right} onChange={this.handleChange('shoulder_right')} />
                        <ListItemText primary="Shoulder Muscle - Right" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="neck_left" checked={this.state.scalp_left} onChange={this.handleChange('neck_left')} />
                        <ListItemText primary="Neck - Left" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="neck_right" checked={this.state.scalp_right} onChange={this.handleChange('neck_right')} />
                        <ListItemText primary="Neck - Right" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="neck_spine" checked={this.state.forehead_left} onChange={this.handleChange('neck_spine')} />
                        <ListItemText primary="Neck - Spine" />
                    </ListItem>
                </List>
            </Paper>
        )
    }
}
export default connect()(MigrianeLocNeck);