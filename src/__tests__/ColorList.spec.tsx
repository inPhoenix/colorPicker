import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ColorList from '../components/ColorList';
import { ColorProvider } from '../Context/ColorContext';

describe('<ColorList/>', () => {
  it('renders input and a button ', () => {
    // Arrange
    const { getByRole } = render(
      <ColorProvider>
        <ColorList />
      </ColorProvider>
    );

    // Act
    const getButton = getByRole('button');
    const getInput = getByRole('textbox');
    // Assert
    expect(getButton).toBeInTheDocument();
    expect(getInput).toBeInTheDocument();
  });

  it('verifies if one color is saved ', () => {
    // Arrange
    const { getByRole, container } = render(
      <ColorProvider>
        <ColorList />
      </ColorProvider>
    );

    // Act
    const getButton = getByRole('button');
    const getInput = getByRole('textbox');

    fireEvent.change(getInput, { target: { value: 'red' } });
    fireEvent.click(getButton);

    // Assert
    const getColor1 = container.querySelector(`[color="red"]`);
    expect(getColor1).toBeInTheDocument();
  });

  it('verifies if only the last 5 colors are displayed', () => {
    // Arrange
    const COLOR_LIMIT = 5; // according to the spec
    const colorList = ['red', 'blue', 'yellow', 'violet', 'pink', 'teal'];

    const { getByRole, queryAllByRole } = render(
      <ColorProvider>
        <ColorList />
      </ColorProvider>
    );

    // Act
    const getButton = getByRole('button');
    const getInput = getByRole('textbox');

    colorList.forEach(color => {
      fireEvent.change(getInput, { target: { value: color } });
      fireEvent.click(getButton);
    });

    // Assert
    const getAllColors = queryAllByRole('color');
    expect(getAllColors).toHaveLength(COLOR_LIMIT);
  });
});
