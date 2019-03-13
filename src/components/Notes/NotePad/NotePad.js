import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DoneIcon from '@material-ui/icons/Done'
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
const styles = {
    
    button:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
       // borderRadius: 3,
        border: 0,
        color: 'white',
        //height: 48,
        //padding: '0 30px',
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
}
class NotePad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: '',
        }
    }

    captureNote = (event) => {
        // console.log('capture note',event.target.value);
        this.setState({ note: event.target.value });
    }
    
    saveNote = () => {
        let notes = this.state;
        //console.log(this.props.get);
        axios({
            method: 'POST',
            url: '/api/note',
            data: notes
        }).then((response) => {
            console.log(response);
            
            this.getNotes();
        }).catch((error) => {
            console.log('Error POSTing Note', error);
            alert('Unable to Post Note')
        })
    }

    getNotes = () => {
        console.log('client getting');
        axios({
            method: 'GET',
            url: '/api/note'//logged user notes only
        }).then((response) => {
            const action = { type: 'SET_NOTES', payload: response.data }
            this.props.dispatch(action)
        }).catch((error) => {
            console.log('error', error);
            alert('Unable to Get Notes!')
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextField
                    id="filled-multiline-static"
                    label="Notes"
                    multiline
                    rows="6"
                    placeholder="Add notes here"
                    margin="normal"
                    variant="outlined"
                    onChange={this.captureNote}
                />
                <br />
                <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={this.saveNote}>
                    <DoneIcon />
                    Save Note
                </Button>
            </div>
        )
    }
}//end Class 
NotePad.propTypes = {
    classes: PropTypes.object.isRequired,
};
const notePadWithStyles = withStyles(styles)(NotePad)

export default connect()(notePadWithStyles);