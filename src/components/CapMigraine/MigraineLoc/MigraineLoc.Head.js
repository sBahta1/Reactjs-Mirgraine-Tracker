import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
class MigrianeLocHead extends Component {
    state = {
        temple_left: false,
        temple_right: false,
        scalp_left: false,
        scalp_right: false,
        forehead_left: false,
        forehead_center: false,
        forehead_right: false,
        skull: false
    }

    handleChange = name => event => {
        console.log(event.target.checked, this.state, name);
        this.setState(state => ({ [name]: !state[name] }));
        let action = { type: 'SET_HEADLOC', payload: { value: event.target.checked, place: name } }
        this.props.dispatch(action)
    }
    render() {

        return (
            <Paper >
                <List dense >
                    <ListItem
                        dense>
                        <Switch checked={this.state.temple_left} onChange={this.handleChange('temple_left')} />
                        <ListItemText primary="Temple - Left" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="temple_right" checked={this.state.temple_right} onChange={this.handleChange('temple_right')} />
                        <ListItemText primary="Temple - Right" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="scalp_left" checked={this.state.scalp_left} onChange={this.handleChange('scalp_left')} />
                        <ListItemText primary="Scalp - Left" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="scalp_right" checked={this.state.scalp_right} onChange={this.handleChange('scalp_right')} />
                        <ListItemText primary="Scalp - Right" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="forehead_left" checked={this.state.forehead_left} onChange={this.handleChange('forehead_left')} />
                        <ListItemText primary="Forehead - Left" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="forehead_center" checked={this.state.forehead_center} onChange={this.handleChange('forehead_center')} />
                        <ListItemText primary="Forehead - Center" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="forehead_right" checked={this.state.forehead_right} onChange={this.handleChange('forehead_right')} />
                        <ListItemText primary="Forehead - Right" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch disableRipple value="skull" checked={this.state.skull} onChange={this.handleChange('skull')} />
                        <ListItemText primary="Base of Skull" />
                    </ListItem>
                </List>
            </Paper>
        )
    }
}
export default connect()(MigrianeLocHead);