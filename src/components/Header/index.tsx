import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #585858;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #ffffff;
`;

const AlarmIcon = styled.img`
  width: 24px;
  height: 24px;
`

function Header() {
  return (
    <HeaderWrapper>
      <Logo>Alt Safety Management</Logo>
    </HeaderWrapper>
  );
}

export default Header;
