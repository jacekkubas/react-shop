import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: solid 1px var(--lightBlue);
  color: var(--lightBlue);
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--lightBlue);
    color: var(--mainBlue);
  }

  &:focus {
    outline: 0;
  }
`