import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment, reset } from './actions';

class Counter extends Component {
    decrement = () => {
        this.props.decrement()
    }

    increment = () => {
        this.props.increment()
    }

    reset = () => {
        this.props.reset()
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>

                <button onClick={ this.decrement }>
                    -
                </button>

                <span>{ this.props.count }</span>

                <button onClick={ this.increment }>
                    +
                </button>

                <p onClick={ this.reset }>Reset</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

const mapDispatchTopProps = {
    increment,
    decrement,
    reset
}

export default connect(mapStateToProps, mapDispatchTopProps)(Counter);
