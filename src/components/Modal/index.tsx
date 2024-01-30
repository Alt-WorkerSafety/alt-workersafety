import { useEffect } from 'react';
import S from './Modal.styled';
import type { ModalProps } from './types';
import risk from '../../images/risk.png';

const Modal: React.FC<ModalProps> = ({
  content,
  isOpened,
  onClose,
}) => {
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
            <S.ModalWrapper>
                <S.ModalWrapper onClick={preventPropagation}>
                    <S.riskIcon src={risk} />
                    <S.ContentWrapper>{content}</S.ContentWrapper>
                    <S.Button onClick={onClose}>확인</S.Button>
                </S.ModalWrapper>
            </S.ModalWrapper>
        </S.ModalBackground>
      )}
    </>
  );
};

export default Modal;
