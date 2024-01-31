import styled from 'styled-components';
import { ButtonProps } from './types';

const RedButton = styled.button<ButtonProps>`
  width: 80%;
  background-color: red;
  font-size: 16px;
  font-weight: normal;
  border: 1px solid black;
  margin: 0 3px;
  border-radius: 8px;
  box-shadow: 3px;
`;

const GreenButton = styled(RedButton)`
  background-color: green;
`;

export default {RedButton, GreenButton}