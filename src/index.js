import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";

const pitcherList = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'];
const catcherList= ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'];

const pitcherReducer = (state = pitcherList, action) => {
  switch (action.type) {
    case 'ADD_PITCHER':
      return [...state, action.payload];
  
    default:
      return state;
  }
}

const catcherReducer = (state = catcherList, action) => {
  return state;
}

const store = createStore(
  combineReducers({
    pitcherReducer,
    catcherReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
