import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  font-size: 15px;
  cursor: pointer;
  border: 2px solid ${(props: any) => (props.theme.primary === 'light' ? 'palevioletred' : '#b997db')};
  color: ${(props: any) => (props.theme.primary === 'light' ? 'palevioletred' : '#b997db')};
  padding: 0.5em 4em;
  transition: 0.3s;

  width: 50%;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: ${(props: any) => (props.theme.primary === 'light' ? 'white' : '#221d2b')};
  }
`;
