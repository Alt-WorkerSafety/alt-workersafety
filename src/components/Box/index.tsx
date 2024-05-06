import { BoxProps } from './types';
import S from './Box.styled';

const Box: React.FC<BoxProps> = ({
    index, 
    status = false
}) => {
  return (
    <S.BoxWrapper>
      <S.Title>W{index}</S.Title>
      <S.Content>e2:d3:34:f2</S.Content>
      <S.Light status={status} index={index}></S.Light>
    </S.BoxWrapper>
  );
}

export default Box;
