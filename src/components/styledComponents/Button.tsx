import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.5em 4em;
  transition: 0.3s;

  width: 50%;
  &:focus {
    outline:0;
  }
  &:hover {
    background: antiquewhite;
  }
`;
