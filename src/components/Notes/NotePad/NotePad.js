import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DoneIcon from '@material-ui/icons/Done'
import axios from 'axios';
class NotePad extends Component {
    state = {
        note: '',
    }
captureNote= (event)=>{
    console.log('capture note',event.target.value);
    this.setState({note:event.target.value})
}
    saveNote = () => {
        let notes = this.state;
        console.log(notes);
        
        axios({
            method:'POST',
            url:'/api/note',
            data: notes
        }).then((response)=>{
            console.log(response);
            
        }).catch((error)=>{
            console.log('Error POSTing Note',error);
            alert('Unable to Post Note')
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
export default NotePad