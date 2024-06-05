import styled from 'styled-components';
import profile from '../../images/profile.png';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  align-items: start;
  padding: 10px 20px;
  background-color: #000000;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 50px;
`;

const Profile = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px auto;
`

const ManagerName = styled.div`
  font-size: 24px;
  text-align: center;
  margin: 0 auto;
  color: white;
  font-weight: bold;
`

const Title = styled(ManagerName)`
  font-size: 28px;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  margin-bottom: 8px;
`

function Header() {
  return (
    <HeaderWrapper>
      <Logo>Safety Management</Logo>
      <Profile src={profile}/>
      <Title>관리자</Title>
      <ManagerName>박혜지</ManagerName>
    </HeaderWrapper>
  );
}

export default Header;
