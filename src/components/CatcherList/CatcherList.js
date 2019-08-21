import React, { Component } from 'react';
import { connect } from "react-redux";

class CatcherList extends Component {
  state = {}

  handleCatcherSelectClick = selectedCatcher => () => {
    this.setState({
      currentCatcher: selectedCatcher,
    });
  }

  render() {
    return (
      <ul>
        {this.props.reduxStore.catcherReducer.map(Catcher => (
          <li key={Catcher}
            onClick={this.handleCatcherSelectClick(Catcher)}
          >
            {Catcher}
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

export default connect(storeToProps)(CatcherList);