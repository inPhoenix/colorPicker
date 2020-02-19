import React, { FormEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { ColorResult, HuePicker } from 'react-color';
import readableColor from 'polished/lib/color/readableColor';

import isColor from '../utils/isColor';
import { COLOR_LIMIT, CounterContext, IColor, TYPES } from '../Context/Context';
import { Button } from './styledComponents/Button';
import { Input } from './styledComponents/Input';
import { Item } from './styledComponents/Item';
import ReactTransitionFade from './common/ReactTransitionFade';

interface IProps {}

export const ShowColor = styled.div`
  background: ${(props: any) => (props.color ? props.color : 'white')};
  width: 13%;
  height: 12px;
  padding-top: 30px;
`;

const ShowColorLarge = styled(ShowColor)`
  color: ${(props: any) => (isColor(props.color) ? readableColor(props.color) : 'red')};
  height: 50px;
  position: relative;
  width: 100%;
  text-align: center;
  margin: 10px 0;
  font-weight: 600;
  border-radius: 3px;
`;

export const SliderWrapper = styled.div`
  border: 1px solid #d2d3cb;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

    if (state.length >= COLOR_LIMIT) {
      return dispatch({ type: TYPES.UPDATE_COLOR, payload: color });
    }
    dispatch({ type: TYPES.ADD_COLOR, payload: color });
  };

  return (
    <>
      <ShowColorLarge color={color}> {isColor(color) ? <>{color}</> : 'Invalid Color'}</ShowColorLarge>
      <SliderWrapper>
        <HuePicker color={color} onChange={handleColorChange} onChangeComplete={handleColorChange} />
      </SliderWrapper>
      <Form onSubmit={handleSave}>
        <Input value={color} onChange={handleInputChange} />
        <Button>Save</Button>
      </Form>
      <ReactTransitionFade>
        {isDuplicatedColor && <Item color="brown">The color is already on the list.</Item>}
      </ReactTransitionFade>
    </>
  );
};

export default ColorListForm;
