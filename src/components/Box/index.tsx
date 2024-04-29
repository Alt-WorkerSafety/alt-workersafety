import { BoxProps } from './types';
import S from './Box.styled';

const Box: React.FC<BoxProps> = ({
    index, 
    status = false
}) => {
  return (
    <S.BoxWrapper status={status} index={index}>
      <S.Title>W{index}</S.Title>
      <S.Content>e2:d3:34:f2</S.Content>
    </S.BoxWrapper>
  );
}

export default Box;
