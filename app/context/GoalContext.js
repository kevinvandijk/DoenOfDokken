import React, { createContext, useReducer } from 'react';

export const GoalContext = createContext();

const initialState = {
  description: null,
};

const reducer = (state, action) => {};

const GoalProvider = ({ children }) => {
  const [goal, dispatch] = useReducer(reducer, initialState);

  return (
    <GoalContext.Provider value={{ goal, dispatch }}>
      {children}
    </GoalContext.Provider>
  );
};

export default GoalProvider;
