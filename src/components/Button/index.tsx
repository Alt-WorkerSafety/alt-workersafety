import S from './Button.styled';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
    type,
    value,
}) => {
    if (type === 'fall') {
        return (
            <>
                
                {value ? <S.RedButton><S.RedLight></S.RedLight>Risk</S.RedButton> : <S.GreenButton><S.GreenLight></S.GreenLight>Safe</S.GreenButton>}
            </>
        );
    } else if (type === 'ring') {
        return (
            <>
                
                {value ? <S.GreenButton><S.GreenLight></S.GreenLight>Safe</S.GreenButton> : <S.RedButton><S.RedLight></S.RedLight>Risk</S.RedButton>}
            </>
        );
    } else {
        return null;
    }
}

export default Button;