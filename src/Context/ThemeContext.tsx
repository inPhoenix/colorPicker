import React, { useReducer } from 'react';

export const TYPES = {
  THEME: 'THEME'
};

interface IAction {
  type: string;
  payload: string | any;
}

export interface IColor {
  color: string;
  id: string;
  copied?: boolean;
}

const reducer = (state: IColor[], action: IAction) => {
  switch (action.type) {
    case TYPES.THEME:
      return {
        ...state,
        dark: action.payload
      };
    default:
      return state;
  }
};

const initialState: IColor[] | any = {
  dark: false
};
const ThemeContext = React.createContext(initialState);
function ThemeProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider };
