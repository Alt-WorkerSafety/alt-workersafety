import styled from 'styled-components';

const RedButton = styled.div`
  background-color: red;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 3px;
  width: 60%;
  font-size: 16px;
  font-weight: normal;
  margin: 0 auto;
`;

const GreenButton = styled(RedButton)`
  background-color: green;
`;

export default {RedButton, GreenButton}