import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';

const mapStateToProps = reduxStore => {
    return {
        koalas: reduxStore.koallaReducer
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class TableData extends Component {
   componentDidMount() {
       this.props.dispatch({type: 'GET_KOALA'})
   }

   toggleReady = (id, toggle) => {
       this.props.dispatch({type: 'TOGGLE_READY', 
       payload: {id: id, val: {val: !toggle}}})
   }
    render() {
        const {koalas} = this.props;

        return (
            <div>
                <Paper >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Gender</TableCell>
                                <TableCell align="right">Age</TableCell>
                                <TableCell align="right">Ready To Transfer</TableCell>
                                <TableCell align="right">Comments</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {koalas.map(row => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        {row._id}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.gender || 'false'}</TableCell>
                                    <TableCell align="right">{row.age}</TableCell>
                                    <TableCell align="right">{row.readyToTransfer ? 'true' : 'false'}
                                        <Button onClick={() => this.toggleReady(row._id, row.readyToTransfer)} variant="contained"> 
                                            Toggle
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">{row.notes}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default connect(mapStateToProps)(withStyles(styles)(TableData));