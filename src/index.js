import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import PitcherReducer from "./components/App/redux/reducers/pitcherReducer";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";

const pitcherList = { pitchers: ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], currentPitcher: 'Maud Nelson'};
const catcherList = { catchers: ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'], currentCatcher: 'Elston Howard'};

const pitcherReducer = (state = pitcherList, action) => {
  switch (action.type) {
    case 'ADD_PITCHER':
      return {...state, pitchers: [...state.pitchers, action.payload]};
    case 'CHANGE_PITCHER':
      return {...state, currentPitcher: action.payload};
    default:
      return state;
  }
}
// PitcherReducer();

const catcherReducer = (state = catcherList, action) => {
  switch (action.type) {
    case "ADD_CATCHER":
      return {...state, catchers: [...state.catchers, action.payload]};
    case 'CHANGE_CATCHER':
      return { ...state, currentCatcher: action.payload };
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    pitcherReducer,
    catcherReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
