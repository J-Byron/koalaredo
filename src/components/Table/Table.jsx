import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
   
    render() {
        return (
            <div>
                <Nav />
                <form className={classes.container} noValidate autoComplete="off">
                    <div>

                    </div>
                </form>
            </div>
        );
    }
}

export default Home;