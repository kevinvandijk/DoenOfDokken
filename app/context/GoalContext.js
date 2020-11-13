import React, { createContext, useReducer } from 'react';

export const GoalContext = createContext();

const initialState = {
  description: null,
  checkupBuddy: null,
  money: 15,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GOAL_DESCRIPTION':
      return {
        ...state,
        description: action.description,
      };

    case 'SET_CHECKUP_BUDDY':
      return {
        ...state,
        checkupBuddy: action.checkupBuddy,
      };

    case 'SET_MONEY':
      return {
        ...state,
        money: action.money,
      };
  }
};

const GoalProvider = ({ children }) => {
  const [goal, dispatch] = useReducer(reducer, initialState);

  return (
    <GoalContext.Provider value={{ goal, dispatch }}>
      {children}
    </GoalContext.Provider>
  );
};

export default GoalProvider;
