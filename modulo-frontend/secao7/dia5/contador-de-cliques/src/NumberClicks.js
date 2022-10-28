// src/NumberClicks.js
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class NumberClicks extends React.Component {
  render() {
    const { counter } = this.props;
    return <div>{counter}</div>;
  }
}

const mapStateToProps = (state) => ({
  counter: state.clickReducer.counter,
});

NumberClicks.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(NumberClicks);
