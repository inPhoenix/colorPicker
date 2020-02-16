import React from 'react';
import styled from 'styled-components';

import ColorListItem from './ColorListItem';
import ColorListForm from './ColorListForm';

interface IProps {}

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 25px 3px;
  color: palevioletred;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 350px;
  margin: 0 auto;
`;

const ColorList: React.FC<IProps> = () => {
  return (
    <Wrapper>
      <ColorListForm />
      <ColorListItem />
      <Link href="https://www.github.com/inPhoenix/colorPicker" rel="noopener noreferrer" target="_blank">
        GitHub Code
      </Link>
    </Wrapper>
  );
};

export default ColorList;
