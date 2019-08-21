import React, { Component } from 'react';
import { connect } from "react-redux";

class TotalCatchers extends Component {
  state = {  }
  render() { 
    return (
      <div>Total Catchers: {this.props.reduxStore.catcherReducer.catchers.length}</div>
    );
  }
}

const storeToProps = (reduxStore) => {
  return {
    reduxStore
  };
}
 
export default connect(storeToProps)(TotalCatchers);