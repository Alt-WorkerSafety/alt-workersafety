import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  height: 100vh;
  text-align: center;
  align-items: start;
  padding: 10px 20px;
  background-color: #000000;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #ffffff;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>Safety Management</Logo>
    </HeaderWrapper>
  );
}

export default Header;
