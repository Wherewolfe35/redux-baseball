import React, { Component } from 'react';
import { connect } from "react-redux";

class PitcherList extends Component {

  handlePitcherSelectClick = selectedPitcher => () => {
    let action = {
      type: 'CHANGE_PITCHER',
      payload: selectedPitcher,
    }
    this.props.dispatch(action);
  }

  render() { 
    return ( 
      <ul>
        {this.props.reduxStore.pitcherReducer.pitchers.map(pitcher => (
          <li key={pitcher}
            onClick={this.handlePitcherSelectClick(pitcher)}
          >
            {pitcher}
          </li>
        ))}
      </ul>
     );
  }
}

const storeToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(storeToProps)(PitcherList);