import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import ColorList from './ColorList';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props: any) => (props.whiteColor ? 'white' : 'black')};
    background: ${(props: any) => (props.whiteColor ? 'black' : 'azure')};
    box-sizing: border-box;
    color: dimgrey;
    font-family: "American Typewriter", Helvetica;
  }`;

const darkTheme = {
  primary: 'black'
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle whiteColor={false} />
      <ColorList />
    </ThemeProvider>
  );
};

export default App;
