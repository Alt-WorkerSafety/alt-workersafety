import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #000000;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #ffffff;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>Alt Safety Management</Logo>
    </HeaderWrapper>
  );
}

export default Header;
