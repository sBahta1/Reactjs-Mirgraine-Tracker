import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { stringify } from 'querystring';
import NotesListPanelItem from '../NotesPanelItem/NotesPanelItem';
import Paper from '@material-ui/core/Paper';
const mapStateToProps = state => ({
    notes: state.notes
})

class NoteList extends Component {
   
    render() {
      

        return (
            <Paper >
                {/* {JSON.stringify(this.props.notes)} */}
                {this.props.notes.notesReducer.map((entry,i)=>{
                    console.log(entry);
                    return(
                        <div>
                 <NotesListPanelItem key={i} entry={entry}/>
                 </div>
                    )
                })}
            </Paper>
        );
    }
}

NoteList.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps)(NoteList);