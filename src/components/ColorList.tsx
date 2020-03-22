import React from 'react';
import styled from 'styled-components';

import ColorListItem from './ColorListItem';
import ColorListForm from './ColorListForm';

interface IProps {}

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
    </Wrapper>
  );
};

export default ColorList;
