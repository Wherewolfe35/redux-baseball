import React, { Component } from 'react';
import { connect } from "react-redux";

class CatcherForm extends Component {
  state = {
    newCatcher: ''
  }

  handleCatcherSubmit = event => {
    event.preventDefault();
    let action = {
      type: 'ADD_CATCHER',
      payload: this.state.newCatcher
    }
    this.props.dispatch(action);
    this.setState({
      newCatcher: '',
    });
  }

  handleCatcherNameChange = event => {
    this.setState({
      newCatcher: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleCatcherSubmit}>
        <input
          type="text"
          value={this.state.newCatcher}
          onChange={this.handleCatcherNameChange}
          placeholder="New Catcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
    );
  }
}

export default connect()(CatcherForm);