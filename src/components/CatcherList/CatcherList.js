import React, { Component } from 'react';
import { connect } from "react-redux";

class CatcherList extends Component {
  handleCatcherSelectClick = selectedCatcher => () => {
    let action = {
      type: 'CHANGE_CATCHER',
      payload: selectedCatcher,
    }
    this.props.dispatch(action);
  }

  render() {
    return (
      <ul>
        {this.props.reduxStore.catcherReducer.catchers.map(Catcher => (
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