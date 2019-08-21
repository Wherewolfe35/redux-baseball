import React, { Component } from 'react';
import { connect } from "react-redux";

class PitcherForm extends Component {
  state = {
    newPitcher: ''
  }

  handlePitcherSubmit = event => {
    event.preventDefault();
    let action = {
      type: 'ADD_PITCHER',
      payload: this.state.newPitcher
    }
    this.props.dispatch(action);
    this.setState({
      newPitcher: '',
    });
  }

  handlePitcherNameChange = event => {
    this.setState({
      newPitcher: event.target.value,
    });
  }

  render() { 
    return ( 
      <form onSubmit={this.handlePitcherSubmit}>
        <input
          type="text"
          value={this.state.newPitcher}
          onChange={this.handlePitcherNameChange}
          placeholder="New Pitcher Name"
        />
        <button type="submit">Add Pitcher</button>
      </form>
     );
  }
}
 
export default connect()(PitcherForm);