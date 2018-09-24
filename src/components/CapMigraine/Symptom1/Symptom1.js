import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Nav from '../../Nav/Nav';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';


class Symptom1 extends Component {

    state = {
        head: true,
        neck: true,
        body: true,
        locations:{
            temple_left:null
        }
    }

    showHead = () => {
        console.log('click head', this.state);
        this.setState(state => ({ head: !state.head }))
    }

    showNeck = () => {
        console.log('click neck');
        this.setState(state => ({ neck: !state.neck }))
    }
    showBody = () => {
        console.log('click body');
        this.setState(state => ({ body: !state.body }))
    }
    handleChange = name => event =>{
        console.log(event.target.checked);
       // this.setState(state => ({ [name]: event.target.checked }))
    }
    render() {

        return (
            <div>
                <Nav />
                <List>
                    <ListItem button onClick={this.showHead}>
                        <ListItemText primary="Head" />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={this.showNeck}>
                        <ListItemText primary="Neck/Shoulders" />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={this.showBody}>
                        <ListItemText primary="Body" />
                    </ListItem>
                    <Divider />
                </List>

                <Paper hidden={this.state.head}>
                    <List dense >
                        <ListItem
                            dense
                            >
                            <Switch  checked={this.state.locations.temple_left} onChange={this.handleChange('temple_left')}/>
                            <ListItemText secondary="Temple - Left" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense>
                            <Switch value="temple_right" onChange={this.handleChange}/>
                            <ListItemText primary="Temple - Right" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense>
                            <Switch value="scalp_left" onChange={this.handleChange}/>
                            <ListItemText primary="Scalp - Left" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense
                            >
                            <Switch value="scalp_right" onChange={this.handleChange}/>
                            <ListItemText primary="Scalp - Right" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense
                            >
                            <Switch value="forehead_left" onChange={this.handleChange}/>
                            <ListItemText primary="Forehead - Left" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense
                            >
                            <Switch value="forehead_center" onChange={this.handleChange}/>
                            <ListItemText primary="Forehead - Center" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense
                            button>
                            <Switch value="forehead_right" onChange={this.handleChange}/>
                            <ListItemText primary="Forehead - Right" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense
                            button>
                            <Switch value="skull" onChange={this.handleChange}/>
                            <ListItemText primary="Base of Skull" />
                        </ListItem>
                        <Divider />
                    </List>
                </Paper>

                <Paper hidden={this.state.neck}>
                    <List dense >
                        <ListItem
                            dense
                            button>
                            <Switch />
                            <ListItemText secondary="Shoulder Muscle - Left" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense
                            button>
                            <Switch />
                            <ListItemText primary="Shoulder Muscle - Right" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense
                            button>
                            <Switch />
                            <ListItemText primary="Neck - Left" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense
                            button>
                            <Switch />
                            <ListItemText primary="Neck - Right" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense
                            button>
                            <Switch />
                            <ListItemText primary="Neck - Spine" />
                        </ListItem>
                        <Divider />
                    </List>
                </Paper>
                <Paper hidden={this.state.body}>
                    <List dense >
                        <ListItem
                            dense
                            button>
                            <Switch />
                            <ListItemText secondary="Upper Back" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense
                            button>
                            <Switch />
                            <ListItemText primary="Mid Back" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            dense
                            button>
                            <Switch />
                            <ListItemText primary="Lower Back" />
                        </ListItem>
                        <Divider />
                    </List>
                </Paper>

            </div>
        )
    }
}//end class 

export default Symptom1;