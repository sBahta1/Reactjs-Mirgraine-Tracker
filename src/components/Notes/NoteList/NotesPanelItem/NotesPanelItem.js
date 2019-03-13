import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Moment from 'react-moment';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Axios from 'axios';
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  button: {
    right: 0,
  },
  Panel: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

class NotesPanelItem extends Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  deleteNote = (entry) => {
    console.log(entry.note_id);
    let id = entry.note_id;
    Axios({
      method: 'DELETE',
      url: '/api/note/' + id
    }).then((response) => {
      console.log('Note Deleted');
      this.getNotes();
    }).catch((error) => {
      console.log(error);
      alert('unable to delete post')
    })
  }
  getNotes = () => {
    console.log('client getting');
    Axios({
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
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              <Moment format="DD MMMM, YYYY">
                {this.props.entry.time_stamp}
              </Moment>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.Panel}>
            <Typography>
              {this.props.entry.note}
            </Typography>
            <IconButton
              className={classes.button}
              aria-label="Delete"
              id={this.props.entry.note_id}
              onClick={() => this.deleteNote(this.props.entry)}>
              <DeleteIcon />
            </IconButton>
          </ExpansionPanelDetails>
          <Divider />
        </ExpansionPanel>
      </div>
    );
  }
}

NotesPanelItem.propTypes = {
  classes: PropTypes.object.isRequired,
};
const NotesPanelItemWithStyles = withStyles(styles)(NotesPanelItem);
export default connect()(NotesPanelItemWithStyles);