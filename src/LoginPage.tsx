import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const Container = styled.div`
  background: rgba(0, 0, 0, 0.7); /* 검은색 배경에 50% 투명도 적용 */
  display: flex;
  height: 100vh; /* 전체 화면 높이 설정 */
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
`;

const Form = styled.form`
  position: absolute;
  top: 25%;
  left: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 500px;
  height: 300px;
  background-color: black;
  justify-content:center;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5)
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid gray;
	border-radius: 5px;
  outline: none;
  padding: 3px;
  font-size: 16px;
  &::placeholder{
		color: #black;
	}
	&:hover{
		border: 1px solid black;
	}
	&:focus{
		color: #363636;
		border: 1px solid yellow;
	}
`;

const Button = styled.button`
    padding: 8px 16px;
    font-size: 18px;
    color: black;
    width: 100px;
    border-radius: 10px;
    margin-top: 12px;
    cursor: pointer;
`;

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
      })
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          onLoginSuccess();
          alert('로그인되었습니다.')
          console.log('success!!!');
        } else {
          alert('비밀번호가 틀렸습니다.');
        }
      } else {
        // 서버 에러 처리
        alert('서버 오류가 발생했습니다.');
      }
    } catch (error) {
      // 네트워크 에러 처리
      alert('로그인 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Alt Safety Management
        </Label>
        <Input type="password" value={password} onChange={handlePasswordChange} placeholder={'비밀번호를 입력하세요.'}/>
        <Button type="submit">확인</Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
