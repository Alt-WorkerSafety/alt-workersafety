import styled from 'styled-components';
import { BoxProps } from './types';

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 80px;
  text-align: center;
  padding: 10px 10px;
  background-color: black;
  border-radius: 50px;
  margin: 20px 10px 20px 0px;
`;

const Title = styled.div`
    font-size: 24px;
    color: #ffffff;
`;

const Content = styled.div`
    font-size: 14px;
    color: #ffffff;
    margin-top: 5px;
`;

const Light = styled.div<BoxProps>`
  background-color: ${props => props.status ? '#90c39e' : 'gray'};
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin-top: 8px;
`;

export default {BoxWrapper, Title, Content, Light}