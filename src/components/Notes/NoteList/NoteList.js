import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { stringify } from 'querystring';
import NotesListPanelItem from '../NotesPanelItem/NotesPanelItem';

const mapStateToProps = state => ({
    notes: state.notes
})

class NoteList extends Component {
   
    render() {
      

        return (
            <div >
                {JSON.stringify(this.props.notes)}
               <NotesListPanelItem />
            </div>
        );
    }
}

NoteList.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps)(NoteList);