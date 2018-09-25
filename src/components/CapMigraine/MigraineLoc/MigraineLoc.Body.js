import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
class MigrianeLocBody extends Component {
    state = {
        back_upper: false,
        back_mid: false,
        back_lower: false,
    }
    handleChange = name => event => {
        //console.log(event.target.checked, this.state, name);
        this.setState(state => ({ [name]: !state[name] }));
        let action = { type: 'SET_LOC', payload: { value: event.target.checked, place: name } }
        this.props.dispatch(action)
    }
    render() {

        return (
            <Paper >
                <List dense >
                    <ListItem
                        dense>
                        <Switch checked={this.state.back_upper} onChange={this.handleChange('back_upper')} />
                        <ListItemText primary="Upper Back" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="back_mid" checked={this.state.back_mid} onChange={this.handleChange('back_mid')} />
                        <ListItemText primary="Mid Back" />
                    </ListItem>
                    <ListItem
                        dense>
                        <Switch value="back_lower" checked={this.state.back_lower} onChange={this.handleChange('back_lower')} />
                        <ListItemText primary="Lower Back" />
                    </ListItem>
                </List>
            </Paper>
        )
    }
}
export default connect()(MigrianeLocBody);