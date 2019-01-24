import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
});


class Home extends Component {
    state = {
        id: '',
        name: '',
        gender: '',
        age: '',
        readyToTransfer: false,
        notes: ''
    };
    render() {
        return (
            <div>
                <Nav />
                <form className={classes.container} noValidate  autoComplete="off">
                    <div>

                    </div>
                </form>
            </div>
        );
    }
}

export default Home;