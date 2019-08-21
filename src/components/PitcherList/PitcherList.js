import React, { Component } from 'react';
import { connect } from "react-redux";

class PitcherList extends Component {
  state = {  }

  handlePitcherSelectClick = selectedPitcher => () => {
    this.setState({
      currentPitcher: selectedPitcher,
    });
  }

  render() { 
    return ( 
      <ul>
        {this.props.reduxStore.pitcherReducer.map(pitcher => (
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