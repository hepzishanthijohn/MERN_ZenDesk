// FormContext.js
import React, { createContext, useContext, useEffect, useReducer } from 'react';

const FormContext = createContext();

const ADD_DETAIL = 'ADD_DETAIL';
const DELETE_DETAIL = 'DELETE_DETAIL';

const formReducer = (state, action) => {
    switch (action.type) {
      case ADD_DETAIL:
        return {
          ...state,
          detailsList: Array.isArray(state.detailsList) ? [...state.detailsList, action.payload] : [action.payload]
        };
      case DELETE_DETAIL:
        return {
          ...state,
          detailsList: Array.isArray(state.detailsList) ? state.detailsList.filter((_, index) => index !== action.payload) : []
        };
      default:
        return state;
    }
  };

export const FormProvider = ({ children }) => {
  const storedDetails = localStorage.getItem('detailsList');
  const initialState = storedDetails ? JSON.parse(storedDetails) : { detailsList: [] };
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    localStorage.setItem('detailsList', JSON.stringify(state));
  }, [state]);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  return useContext(FormContext);
};
