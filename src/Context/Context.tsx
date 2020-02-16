import React, { useReducer } from 'react';
const uuidv4 = require('uuid/v4');

export const TYPES = {
  ADD_COLOR: 'ADD_COLOR',
  UPDATE_COLOR: 'UPDATE_COLOR',
  COPY_TO_CLIPBOARD: 'COPY_TO_CLIPBOARD'
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
    case TYPES.COPY_TO_CLIPBOARD:
      const stateClone = state.slice(); // [...state];
      stateClone.forEach(color => {
        if (color.color === action.payload.color) {
          color.copied = action.payload.copied;
        } else {
          color.copied = false;
        }
      });
      return stateClone;
    case TYPES.ADD_COLOR:
      return [...state, { color: action.payload, id: uuidv4() }];
    case TYPES.UPDATE_COLOR:
      const newState = [...state].splice(1, 5);
      return [
        ...newState,
        {
          color: action.payload,
          id: uuidv4()
        }
      ];
    default:
      return state;
  }
};

const initialState: IColor[] | any = [
  {
    color: '#00a8ff',
    id: 'd80090b1-fa83-481c-aea5-7e9a0719b0c1',
    copied: false
  }
];
const CounterContext = React.createContext(initialState);
function CounterProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CounterContext.Provider value={{ state, dispatch }}>{props.children}</CounterContext.Provider>;
}

export { CounterContext, CounterProvider };
