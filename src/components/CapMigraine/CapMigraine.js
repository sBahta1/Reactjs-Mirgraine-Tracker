import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {

    root: {
        position: 'relative',
        display: 'flex',
        justify: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        height: '600px'
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: '20px'
    },
    others: {
        margin: '20px'
    }
};

class CapMigraine extends Component {

    nextPage = () => {
        this.props.history.push('symptom1')
    }
    render() {
        const { classes } = this.props;
        return (
            <div>

                <Paper>
                    <Nav />
                    <div className={classes.root}>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            onClick={this.nextPage}
                        >
                            Record My Symptoms
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.others}
                            color="primary"
                        >
                            Remind me later
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.others}
                            color="primary"
                        >
                            Migraine Survival Guide
                        </Button>
                    </div>
                </Paper>
            </div>
        )
    }
}//class
CapMigraine.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CapMigraine);
