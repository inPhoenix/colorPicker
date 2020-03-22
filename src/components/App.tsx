import React, { useContext, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import ColorList from './ColorList';
import { ThemeContext, TYPES } from '../Context/ThemeContext';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props: any) => (props.theme.primary === 'light' ? 'grey' : 'white')};  
    background: ${(props: any) => (props.theme.primary === 'light' ? 'white' : 'black')};
    box-sizing: border-box;
    font-family: "American Typewriter", Helvetica;
  }`;

const darkTheme = {
  primary: 'dark'
};

const lightTheme = {
  primary: 'light'
};

const App: React.FC = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const handleChange = (value: boolean) => {
    dispatch({ type: TYPES.THEME, payload: value });
  };

  return (
    <ThemeProvider theme={state.dark ? darkTheme : lightTheme}>
      <Header handleChange={handleChange} />
      <GlobalStyle whiteColor={state.dark} />
      <ColorList />
    </ThemeProvider>
  );
};

export default App;
