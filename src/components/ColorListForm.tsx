import React, { FormEvent, useContext, useState } from 'react';

import { CounterContext, IColor, TYPES } from '../Context/Context';
import { Button } from './styledComponents/Button';
import { Input } from './styledComponents/Input';
import { Item } from './styledComponents/Item';

import { ColorResult, HuePicker } from 'react-color';
import ReactTransitionFade from './utils/ReactTransitionFade';

import styled from 'styled-components';

interface IProps {}

const ARRAY_LIMIT = 5;

export const ShowColor = styled.div`
  background: ${(props: any) => (props.color ? props.color : 'white')};
  width: 10%;
  padding-top: 30px;
`;

export const SliderWrapper = styled.div`
  border: 1px solid #d2d3cb;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

const ShowColorLarge = styled(ShowColor)`
  height: 50px;
  position: relative;
  width: 100%;
  text-align: center;
  color: #7c78ff;
  margin: 10px 0;
  font-weight: 600;
  border-radius: 3px;
`;

const ColorListForm: React.FC<IProps> = () => {
  const { state, dispatch } = useContext(CounterContext);
  const [color, setColor] = useState('#00ff90');

  const [isDuplicatedColor, setDuplicatedColor] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const handleColorChange = (colorT: ColorResult): void => {
    setColor(colorT.hex);
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    const isColorExist = state.filter((checkColor: IColor) => checkColor.color === color);

    if (isColorExist.length) {
      setDuplicatedColor(true);
      return;
    } else {
      setDuplicatedColor(false);
    }

    if (state.length >= ARRAY_LIMIT) {
      return dispatch({ type: TYPES.UPDATE_COLOR, payload: color });
    }
    dispatch({ type: TYPES.ADD_COLOR, payload: color });
    dispatch({ type: 'FETCH', payload: color });
  };

  return (
    <>
      <ShowColorLarge color={color}> Current Color </ShowColorLarge>
      <SliderWrapper>
        <HuePicker color={color} onChange={handleColorChange} onChangeComplete={handleColorChange} />
      </SliderWrapper>
      <form onSubmit={handleSave}>
        <Input value={color} onChange={handleInputChange} />
        <Button>Save</Button>
        <ReactTransitionFade>
          {isDuplicatedColor && <Item color="brown">The color is already on the list.</Item>}
        </ReactTransitionFade>
      </form>
    </>
  );
};

export default ColorListForm;
