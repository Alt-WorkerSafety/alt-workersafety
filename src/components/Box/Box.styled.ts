import styled from 'styled-components';
import { BoxProps } from './types';

const BoxWrapper = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 80px;
  text-align: center;
  padding: 10px 10px;
  background-color: ${props => props.status ? '#90c39e' : 'black'};
  border-radius: 8px;
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
`

export default {BoxWrapper, Title, Content}