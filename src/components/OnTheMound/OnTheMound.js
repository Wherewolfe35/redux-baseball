import React, { Component } from 'react';
import { connect } from "react-redux";

class OnTheMound extends Component {
  render() { 
    return ( 
      <h2>On the Mound: {this.props.reduxStore.pitcherReducer.currentPitcher}</h2>
     );
  }
}

const storeToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(storeToProps)(OnTheMound);