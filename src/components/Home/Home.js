import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import green from '@material-ui/core/colors/green';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
    button: {
        margin: theme.spacing.unit,
    },
});



class Home extends Component {
    state = {
        name: '',
        gender: '',
        age: '',
        readyToTransfer: false,
        notes: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleBoolChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('current state', this.state);
        this.props.dispatch({type: 'ADD_KOALA', payload: this.state})
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* <Nav /> */}
                <form onSubmit={this.handleSubmit} className={classes.container} noValidate      autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.gender}
                                onChange={this.handleBoolChange('gender')}
                                value='gender'
                            />
                        }
                        label="Gender"
                    />
                    <TextField
                        id="standard-age"
                        label="age"
                        className={classes.textField}
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        margin="normal"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.readyToTransfer}
                                onChange={this.handleBoolChange('readyToTransfer')}
                                value="readyToTransfer"
                            />
                        }
                        label="Ready To Transfer"
                    />
                    <TextField
                        id="standard-notes"
                        label="Notes"
                        className={classes.textField}
                        value={this.state.notes}
                        onChange={this.handleChange('notes')}
                        margin="normal"
                    />
                    <Button type='submit' variant="contained" className={classes.button}>
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(Home);