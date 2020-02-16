import styled from 'styled-components';

export const Item = styled.div`
  padding-left: 5px;
  font-size: 13px;

  color: ${(props: any) => (props.color ? props.color : 'slategrey')};
  &:hover {
    color: #435790;
  }
`;