import React, { useState, useEffect } from 'react';
import S from './Modal.styled';
import type { ModalProps } from './types';
import risk from '../../images/risk.png';

interface WorkerInfo {
  name: string;
  birth: string;
  pn: string;
}

const Modal: React.FC<ModalProps> = ({
  type,
  content,
  isOpened,
  onClose,
}) => {
  const [workers, setWorkers] = useState<WorkerInfo[]>([
    { name: '', birth: '', pn: '' },
    { name: '', birth: '', pn: '' },
  ]);
  
  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await fetch('/api/workers');
        if (!response.ok) {
          throw new Error('데이터를 불러오는 데 실패했습니다.');
        }
        const data: WorkerInfo[] = await response.json();
        setWorkers(data.length > 0 ? data : [
          { name: '', birth: '', pn: '' },
          { name: '', birth: '', pn: '' },
        ]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWorkers();
  }, []);

  const handleInputChange = (index: number, field: keyof WorkerInfo, value: string) => {
    const newWorkers = [...workers];
    newWorkers[index][field] = value;
    setWorkers(newWorkers);
  };

  const sendData = async () => {
    try {
      const response = await fetch('/api/workers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workers),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const responseData = await response.json();
      console.log('Success: ', responseData);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };
  const preventPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpened && (
        <S.ModalBackground onClick={handleBackgroundClick}>
          {type === 'alarm' ? (
            <S.ModalWrapper1 onClick={preventPropagation}>
              <S.riskIcon src={risk} />
              <S.ContentWrapper>{content}</S.ContentWrapper>
              <S.Button onClick={onClose}>확인</S.Button>
            </S.ModalWrapper1>
          ) : (
            <S.ModalWrapper2 onClick={preventPropagation}>
              <S.ContentWrapper>{content}</S.ContentWrapper>
              {workers.map((worker, index) => (
                <React.Fragment key={index}>
                  <S.ContentBox>
                    {`안전조끼 ${index + 1}`}
                  </S.ContentBox>
                  <S.Content>
                    이름
                    <S.InputBox value={worker.name} placeholder={'최현진'} onChange={(e) => handleInputChange(index, 'name', e.target.value)} />
                  </S.Content>
                  <S.Content>
                    생년월일
                    <S.InputBox value={worker.birth} placeholder={'20020808'} onChange={(e) => handleInputChange(index, 'birth', e.target.value)} />
                  </S.Content>
                  <S.Content>
                    전화번호
                    <S.InputBox value={worker.pn} placeholder={'010-1234-5678'} onChange={(e) => handleInputChange(index, 'pn', e.target.value)} />
                  </S.Content>
                </React.Fragment>
              ))}
              <S.Button onClick={sendData}>확인</S.Button>
            </S.ModalWrapper2>
          )}
        </S.ModalBackground>
      )}
    </>
  );  
};

export default Modal;
