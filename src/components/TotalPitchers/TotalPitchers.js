import React, { Component } from 'react';
import { connect } from "react-redux";

class TotalPitchers extends Component {
  state = {  }
  render() { 
    return ( 
      <div>Total Pitchers: {this.props.reduxStore.pitcherReducer.length}</div>
     );
  }
}
 
const storeToProps = (reduxStore) => {
  return {
    reduxStore
  }
}
export default connect (storeToProps)(TotalPitchers);