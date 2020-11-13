import React, { createContext, useReducer } from 'react';

export const GoalContext = createContext();

const initialState = {
  description: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GOAL_DESCRIPTION':
      return {
        ...state,
        description: action.description,
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
