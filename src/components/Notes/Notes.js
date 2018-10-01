import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Paper from '@material-ui/core/Paper';
import NotePad from './NotePad/NotePad'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NoteList from './NoteList/NoteList'
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {

    root: {
        position: 'relative',
        display: 'flex',
        justify: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '600px'
    },

    container: {
        width: '370px'
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
};
class Notes extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getNotes();
    }

    getNotes() {
        console.log('client getting');
        axios({
            method: 'GET',
            url: '/api/note'//logged user notes only
        }).then((response) => {
            console.log(response.data);
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
            <Paper>
                <Nav />
                <div className={classes.root}>
                    <NotePad />
                    <div className={classes.container} >
                        <NoteList ClassName={classes.noteList} />
                    </div>
                    <Button variant="fab" mini className={classes.button} aria-label="Add" >
                        <AddIcon />
                    </Button>
                </div>
            </Paper>
        )
    }
}//end class
Notes.propTypes = {
    classes: PropTypes.object.isRequired,
};
const NotesWithStyle = withStyles(styles)(Notes)
export default connect()(NotesWithStyle);