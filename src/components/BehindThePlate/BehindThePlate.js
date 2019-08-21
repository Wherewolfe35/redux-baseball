import React, { Component } from 'react';
import { connect } from "react-redux";

class BehindThePlate extends Component {
  render() {
    return (
      <h2>Behind The Plate: {this.props.reduxStore.catcherReducer.currentCatcher}</h2>
    );
  }
}

const storeToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(storeToProps)(BehindThePlate);