import React from "react";

const pitcherList = { pitchers: ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], currentPitcher: 'Maud Nelson' };

const pitcherReducer = (state = pitcherList, action) => {
  switch (action.type) {
    case 'ADD_PITCHER':
      return { ...state, pitchers: [...state.pitchers, action.payload] };
    case 'CHANGE_PITCHER':
      return { ...state, currentPitcher: action.payload };
    default:
      return state;
  }
}

export default pitcherReducer;