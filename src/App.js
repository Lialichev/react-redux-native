import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addCount } from './store/actions'
import './App.css';

class App extends Component {

    onCl = () => {
        this.props.dispatch(addCount());
    };

    render() {
        const { val } = this.props;
        return (
            <div>
                <h1 onClick={this.onCl}>App {val}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    val: state.valueReducer
});

export default connect(mapStateToProps)(App);
