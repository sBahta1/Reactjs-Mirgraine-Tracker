import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Paper from '@material-ui/core/Paper';
import NotePad from './NotePad/NotePad'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


class Notes extends Component {
   
    render() {
        return (
            <Paper>
                <Nav />
               <NotePad />
               
                {/* <Button variant="fab" mini color="primary" aria-label="Add" >
                 <AddIcon />
                </Button> */}
            </Paper>
        )
    }
}//end class
export default Notes;