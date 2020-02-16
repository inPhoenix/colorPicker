import React, { useContext } from 'react';
import styled from 'styled-components';
import { CounterContext, IColor, TYPES } from '../Context/Context';
import { ShowColor } from './ColorListForm';
import ReactTransitionFade from './utils/ReactTransitionFade';
import { Item } from './styledComponents/Item';

interface IProps {}

const ColorItem = styled.div`
  margin: 0 15px;
`;

const ColorListWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d2d3cb;
  margin-top: 4px;
  cursor: pointer;
  &:hover {
    background: whitesmoke;
  }
`;

const ColorListItem: React.FC<IProps> = () => {
  const { state, dispatch } = useContext(CounterContext);
  const getColor = (color: any) => {
    dispatch({ type: TYPES.COPY_TO_CLIPBOARD, payload: { copied: true, color: color } });
    // Preventing any error when copying to clipboard
    navigator && navigator.clipboard && navigator.clipboard.writeText(color);
  };

  return (
    <>
      {(state as IColor[])
        .slice(0)
        .reverse()
        .map(color => {
          return (
            <ColorListWrapper onClick={() => getColor(color.color)} key={color.id}>
              <ShowColor role="color" color={color.color} />
              <ColorItem>{color.color}</ColorItem>
              <ReactTransitionFade>{color.copied && <Item> Copied to Clipboard.</Item>}</ReactTransitionFade>
            </ColorListWrapper>
          );
        })}
    </>
  );
};

export default ColorListItem;
