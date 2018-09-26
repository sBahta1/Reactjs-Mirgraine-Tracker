import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DoneIcon from '@material-ui/icons/Done'
import axios from 'axios';
import { connect } from 'react-redux';
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
                    color="primary"
                    onClick={this.saveNote}>

                    <DoneIcon />
                    Save Note
                </Button>
            </div>
        )
    }
}//end Class 
export default connect()(NotePad);