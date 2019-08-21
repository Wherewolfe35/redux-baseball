import React, { Component } from 'react';
import TotalPitchers from "../TotalPitchers/TotalPitchers";
import TotalCatchers from "../TotalCatchers/TotalCatchers";
import PitcherList from "../PitcherList/PitcherList";
import PitcherForm from "../PitcherForm/PitcherForm";
import CatcherList from "../CatcherList/CatcherList";
import CatcherForm from "../CatcherForm/CatcherForm";


class App extends Component {
  state = {
    currentPitcher: 'Maud Nelson',
    currentCatcher: 'Elston Howard',
    pitcherList: ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'],
    catcherList: ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'],
    newPitcher: '',
    newCatcher: '',
  }

  handlePitcherNameChange = event => {
    this.setState({
      newPitcher: event.target.value,
    });
  }

  handlePitcherSubmit = event => {
    event.preventDefault();
    this.setState({
      newPitcher: '',
      pitcherList: [ ...this.state.pitcherList, this.state.newPitcher ],
    });
  }

  handlePitcherSelectClick = selectedPitcher => () => {
    this.setState({
      currentPitcher: selectedPitcher,
    });
  }

  handleCatcherNameChange = event => {
    this.setState({
      newCatcher: event.target.value,
    });
  }

  handleCatcherSubmit = event => {
    event.preventDefault();
    this.setState({
      newCatcher: '',
      catcherList: [ ...this.state.catcherList, this.state.newCatcher ],
    });
  }

  handleCatcherSelectClick = selectedCatcher => () => {
    this.setState({
      currentCatcher: selectedCatcher,
    });
  }

  render() {
    return (
      <div>
        <h1>Redux Baseball Pitchers</h1>
        <h2>On the Mound: {this.state.currentPitcher}</h2>
        <h2>Behind the Plate: {this.state.currentCatcher}</h2>
        <TotalPitchers />
        <TotalCatchers />
        <h3>All Pitchers</h3>
        <PitcherForm />
        <PitcherList />
        <h3>All Catchers</h3>
        <CatcherForm />
        <CatcherList />
      </div>
    );
  }
}

export default App;
