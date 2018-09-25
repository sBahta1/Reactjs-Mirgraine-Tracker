import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Nav from '../../Nav/Nav';
import MigraineLocHead from '../MigraineLoc/MigraineLoc.Head';
import MigraineLocNeck from '../MigraineLoc/MIrgraineLoc.Neck';
import MigraineLocBody from '../MigraineLoc/MigraineLoc.Body';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
    migraine: state.migraine
})

class Symptom1 extends Component {
sendLocations=()=>{
    console.log('click', this.props.migraine.migraineHead);
    
}
    state = {
        head: true,
        neck: true,
        body: true,
    }

    showHead = () => {
        //console.log('click head', this.state);
        this.setState(state => ({ head: !state.head }))
    }

    showNeck = () => {
        // console.log('click neck');
        this.setState(state => ({ neck: !state.neck }))
    }
    showBody = () => {
        // console.log('click body');
        this.setState(state => ({ body: !state.body }))
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

                <div hidden={this.state.head}>
                    <MigraineLocHead />
                </div>
                <div hidden={this.state.neck}>
                    <MigraineLocNeck />
                </div>
                <div hidden={this.state.body}>
                    <MigraineLocBody />
                </div>
                <div>
                    <Button onClick={this.sendLocations}>
                        Next
                    </Button>
                </div>
            </div>
        )
    }
}//end class 

export default connect(mapStateToProps)(Symptom1);