import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  button: {
    right:0,
    },
    Panel:{
      position:'relative',
      display:'flex', 
      flexDirection:'row', 
      justifyContent:'space-between'
    }
});

class RxListItem extends Component {
  state = {
    expanded: null,
  };

 

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{this.props.med.med_name}</Typography>
            <Typography className={classes.secondaryHeading}>{this.props.med.symptom}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.Panel}>
            <Typography>
            {this.props.med.dose}Mg  ~  {this.props.med.regiment}
            </Typography>
            <IconButton className={classes.button} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </ExpansionPanelDetails>
          <Divider />
        </ExpansionPanel>
      </div>
    );
  }
}

RxListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RxListItem);